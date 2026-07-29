"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent, TouchEvent } from "react";
import type {
  ProjectCaseStudy,
  ProjectLanguage,
} from "./project-data";

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

export default function ChageeCaseStudy({
  caseStudy,
  lang,
}: {
  caseStudy: ProjectCaseStudy;
  lang: ProjectLanguage;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartRef = useRef<number | null>(null);
  const total = caseStudy.gallery.length;

  const goTo = (index: number) => {
    setActiveIndex(wrapIndex(index, total));
  };

  const getSlidePosition = (index: number) => {
    if (index === activeIndex) return "active";
    if (index === wrapIndex(activeIndex - 1, total)) return "previous";
    if (index === wrapIndex(activeIndex + 1, total)) return "next";
    return "hidden";
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goTo(total - 1);
    }
  };

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
    goTo(activeIndex + (distance < 0 ? 1 : -1));
  };

  return (
    <>
      <section className="chagee-project-overview">
        <p className="detail-section-label">
          {lang === "zh" ? "项目概览" : "Project overview"}
        </p>
        <div>
          <span>{caseStudy.role[lang]}</span>
          <h2>{caseStudy.headline[lang]}</h2>
          <p>{caseStudy.campaignRole[lang]}</p>
        </div>
      </section>

      <section className="project-media-section chagee-media-section">
        <div className="project-media-heading">
          <p className="detail-section-label">
            {lang === "zh" ? "活动视觉" : "Campaign archive"}
          </p>
          <p>{caseStudy.archiveIntro[lang]}</p>
        </div>

        <div className="chagee-carousel">
          <div
            id="chagee-gallery"
            className="chagee-carousel-stage"
            role="region"
            aria-roledescription={lang === "zh" ? "幻灯片" : "carousel"}
            aria-label={lang === "zh" ? "霸王茶姬活动图片" : "CHAGEE campaign visuals"}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="chagee-slide-deck">
              {caseStudy.gallery.map((item, index) => {
                const position = getSlidePosition(index);
                return (
                  <figure
                    className={`chagee-slide is-${position}`}
                    key={item.src}
                    aria-hidden={position !== "active"}
                  >
                    <div>
                      <img
                        src={item.src}
                        alt={position === "active" ? item.alt[lang] : ""}
                        draggable={false}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                    <figcaption>
                      <span>
                        {lang === "zh" ? "活动视觉" : "Campaign visual"}
                      </span>
                      <strong>{String(index + 1).padStart(2, "0")}</strong>
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            <button
              className="chagee-carousel-edge previous"
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-controls="chagee-gallery"
              aria-label={lang === "zh" ? "上一张图片" : "Previous image"}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              className="chagee-carousel-edge next"
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-controls="chagee-gallery"
              aria-label={lang === "zh" ? "下一张图片" : "Next image"}
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>

          <div className="chagee-carousel-toolbar">
            <p>
              {lang === "zh"
                ? "点击两侧、使用方向键或滑动翻页"
                : "Click either side, use the arrow keys, or swipe"}
            </p>
            <div className="chagee-carousel-dots">
              {caseStudy.gallery.map((item, index) => (
                <button
                  type="button"
                  key={item.src}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => goTo(index)}
                  aria-current={index === activeIndex ? "true" : undefined}
                  aria-label={`${lang === "zh" ? "查看第" : "View slide"} ${
                    index + 1
                  }${lang === "zh" ? "张" : ""}`}
                />
              ))}
            </div>
            <span aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {caseStudy.accountArchive && (
        <section className="chagee-account-section">
          <header>
            <p className="detail-section-label">
              {lang === "zh" ? "账号内容" : "Account content"}
            </p>
            <p>{caseStudy.accountArchive.intro[lang]}</p>
          </header>

          <div className="chagee-account-groups">
            {caseStudy.accountArchive.groups.map((group) => (
              <article className="chagee-account-group" key={group.title.en}>
                <div className="chagee-account-group-heading">
                  <span>{group.platform[lang]}</span>
                  <h3>{group.title[lang]}</h3>
                </div>
                <div
                  className="chagee-account-strip"
                  data-count={group.images.length}
                >
                  {group.images.map((image, index) => (
                    <figure key={image.src}>
                      <img
                        src={image.src}
                        alt={image.alt[lang]}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption>
                        {String(index + 1).padStart(2, "0")}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
