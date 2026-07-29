"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, TouchEvent } from "react";
import type {
  IntuitoCaseStudy as IntuitoCaseStudyData,
  ProjectLanguage,
} from "./project-data";

const tileAngles = [
  "-0.7deg",
  "0.55deg",
  "-0.25deg",
  "0.8deg",
  "-0.45deg",
  "0.35deg",
  "-0.6deg",
  "0.5deg",
  "-0.3deg",
];

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

export default function IntuitoCaseStudy({
  caseStudy,
  lang,
}: {
  caseStudy: IntuitoCaseStudyData;
  lang: ProjectLanguage;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartRef = useRef<number | null>(null);
  const total = caseStudy.gallery.length;
  const activeItem =
    activeIndex === null ? null : caseStudy.gallery[activeIndex];

  const openLightbox = (index: number, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    dialogRef.current?.close();
  };

  const moveLightbox = useCallback(
    (direction: number) => {
      setActiveIndex((current) =>
        current === null ? null : wrapIndex(current + direction, total),
      );
    },
    [total],
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || activeIndex === null) return;

    if (!dialog.open) {
      dialog.showModal();
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        moveLightbox(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        moveLightbox(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, moveLightbox]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartRef.current = null;

    if (start === null || end === undefined) return;
    const distance = end - start;
    if (Math.abs(distance) < 42) return;
    moveLightbox(distance < 0 ? 1 : -1);
  };

  const handleDialogClose = () => {
    setActiveIndex(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  return (
    <>
      <section className="intuito-archive">
        <div className="intuito-archive-heading">
          <p className="detail-section-label">
            {lang === "zh" ? "视觉档案" : "Visual archive"}
          </p>
          <div>
            <h2>
              {lang === "zh"
                ? "视觉系统，在真实场景中展开。"
                : "A visual system, unfolding in practice."}
            </h2>
            <p>{caseStudy.galleryIntro[lang]}</p>
          </div>
        </div>

        <div className="intuito-mosaic">
          {caseStudy.gallery.map((item, index) => (
            <figure
              className={`intuito-tile is-${item.layout}`}
              key={item.src}
              style={
                {
                  "--tile-angle": tileAngles[index],
                } as CSSProperties
              }
            >
              <button
                type="button"
                onClick={(event) => openLightbox(index, event.currentTarget)}
                aria-haspopup="dialog"
                aria-label={`${lang === "zh" ? "放大查看" : "View"} ${
                  item.alt[lang]
                }`}
              >
                <span className="intuito-image-frame">
                  <img
                    src={item.src}
                    alt={item.alt[lang]}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="intuito-open-label" aria-hidden="true">
                    {lang === "zh" ? "打开" : "Open"} ↗
                  </span>
                </span>
              </button>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.caption[lang]}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="intuito-lightbox"
        aria-labelledby="intuito-lightbox-title"
        onCancel={(event) => {
          event.preventDefault();
          closeLightbox();
        }}
        onClose={handleDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeLightbox();
        }}
      >
        {activeItem && activeIndex !== null && (
          <div className="intuito-lightbox-panel">
            <header>
              <div>
                <span>
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
                <h2 id="intuito-lightbox-title">
                  {activeItem.caption[lang]}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                aria-label={lang === "zh" ? "关闭图片" : "Close image"}
                autoFocus
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div
              className="intuito-lightbox-media"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <button
                className="previous"
                type="button"
                onClick={() => moveLightbox(-1)}
                aria-label={lang === "zh" ? "上一张图片" : "Previous image"}
              >
                <span aria-hidden="true">←</span>
              </button>
              <img
                key={activeItem.src}
                src={activeItem.src}
                alt={activeItem.alt[lang]}
                width={activeItem.width}
                height={activeItem.height}
              />
              <button
                className="next"
                type="button"
                onClick={() => moveLightbox(1)}
                aria-label={lang === "zh" ? "下一张图片" : "Next image"}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <footer>
              <p>
                {lang === "zh"
                  ? "使用方向键或滑动继续浏览"
                  : "Use the arrow keys or swipe to continue"}
              </p>
              <span aria-live="polite">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </footer>
          </div>
        )}
      </dialog>
    </>
  );
}
