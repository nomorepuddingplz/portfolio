"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type Language = "zh" | "en";

type ShortVideoClip = {
  number: string;
  src: string;
  poster: string;
  orientation: "portrait" | "landscape";
  rotation: string;
};

type PreviewOrigin = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const shortVideoClips: ShortVideoClip[] = [
  {
    number: "1",
    src: "/works/video-clips/sample-05-02.mp4",
    poster: "/works/video-clips/posters/sample-05-02.jpg",
    orientation: "portrait",
    rotation: "-1.2deg",
  },
  {
    number: "2",
    src: "/works/video-clips/sample-08.mp4",
    poster: "/works/video-clips/posters/sample-08.jpg",
    orientation: "portrait",
    rotation: "0.8deg",
  },
  {
    number: "3",
    src: "/works/video-clips/sample-10.mp4",
    poster: "/works/video-clips/posters/sample-10.jpg",
    orientation: "portrait",
    rotation: "-0.55deg",
  },
  {
    number: "4",
    src: "/works/video-clips/clip-01.mp4",
    poster: "/works/video-clips/posters/clip-01.jpg",
    orientation: "landscape",
    rotation: "1.15deg",
  },
  {
    number: "5",
    src: "/works/video-clips/clip-02.mp4",
    poster: "/works/video-clips/posters/clip-02.jpg",
    orientation: "landscape",
    rotation: "-0.75deg",
  },
  {
    number: "6",
    src: "/works/video-clips/clip-03.mp4",
    poster: "/works/video-clips/posters/clip-03.jpg",
    orientation: "landscape",
    rotation: "0.45deg",
  },
];

export default function ShortVideoGallery({ lang }: { lang: Language }) {
  const [previewClip, setPreviewClip] = useState<ShortVideoClip | null>(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewInstance, setPreviewInstance] = useState(0);
  const [activeClip, setActiveClip] = useState<ShortVideoClip | null>(null);
  const previewTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previewFrameRef = useRef<number | null>(null);
  const previewNextFrameRef = useRef<number | null>(null);
  const previewOriginRef = useRef<PreviewOrigin | null>(null);
  const previewCardRef = useRef<HTMLDivElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const clearPreviewTimers = () => {
    if (previewTimerRef.current) {
      clearTimeout(previewTimerRef.current);
      previewTimerRef.current = null;
    }
    if (previewFrameRef.current !== null) {
      cancelAnimationFrame(previewFrameRef.current);
      previewFrameRef.current = null;
    }
    if (previewNextFrameRef.current !== null) {
      cancelAnimationFrame(previewNextFrameRef.current);
      previewNextFrameRef.current = null;
    }
  };

  const showPreview = (
    clip: ShortVideoClip,
    trigger: HTMLButtonElement,
  ) => {
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    clearPreviewTimers();
    const source =
      trigger.querySelector<HTMLElement>(".short-video-thumb") ?? trigger;
    const sourceRect = source.getBoundingClientRect();
    previewOriginRef.current = {
      left: sourceRect.left,
      top: sourceRect.top,
      width: sourceRect.width,
      height: sourceRect.height,
    };
    setPreviewVisible(false);
    setPreviewClip(clip);
    setPreviewInstance((current) => current + 1);
  };

  const hidePreview = () => {
    clearPreviewTimers();
    setPreviewVisible(false);
    previewTimerRef.current = setTimeout(() => {
      setPreviewClip(null);
      previewOriginRef.current = null;
      previewTimerRef.current = null;
    }, 540);
  };

  const openPlayer = (
    clip: ShortVideoClip,
    trigger: HTMLButtonElement,
  ) => {
    clearPreviewTimers();
    setPreviewVisible(false);
    setPreviewClip(null);
    previewOriginRef.current = null;
    lastTriggerRef.current = trigger;
    setActiveClip(clip);
  };

  const closePlayer = () => {
    setActiveClip(null);
    requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  useEffect(() => {
    return () => clearPreviewTimers();
  }, []);

  useLayoutEffect(() => {
    const card = previewCardRef.current;
    const origin = previewOriginRef.current;
    if (!previewClip || !card || !origin) return;

    const finalRect = card.getBoundingClientRect();
    const finalWidth = card.offsetWidth;
    const finalHeight = card.offsetHeight;
    if (!finalWidth || !finalHeight) return;

    const fromCenterX = origin.left + origin.width / 2;
    const fromCenterY = origin.top + origin.height / 2;
    const finalCenterX = finalRect.left + finalRect.width / 2;
    const finalCenterY = finalRect.top + finalRect.height / 2;

    card.style.setProperty(
      "--preview-from-x",
      `${fromCenterX - finalCenterX}px`,
    );
    card.style.setProperty(
      "--preview-from-y",
      `${fromCenterY - finalCenterY}px`,
    );
    card.style.setProperty(
      "--preview-from-scale",
      `${Math.min(origin.width / finalWidth, origin.height / finalHeight)}`,
    );

    void card.offsetWidth;
    previewFrameRef.current = requestAnimationFrame(() => {
      previewNextFrameRef.current = requestAnimationFrame(() => {
        setPreviewVisible(true);
        previewFrameRef.current = null;
        previewNextFrameRef.current = null;
      });
    });
  }, [previewClip, previewInstance]);

  useEffect(() => {
    if (!activeClip) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        closePlayer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeClip]);

  return (
    <div className="short-video-gallery">
      <div className="short-video-heading">
        <div>
          <span>{lang === "zh" ? "短片实验" : "Short-form motion"}</span>
          <h3>{lang === "zh" ? "动态片段" : "Motion Fragments"}</h3>
        </div>
        <p>
          {lang === "zh"
            ? "将鼠标移至卡片，让画面来到中央；点击即可直接播放。"
            : "Hover to bring a card into focus. Click any fragment to play it here."}
        </p>
      </div>

      <div className="short-video-grid">
        {shortVideoClips.map((clip) => (
          <button
            className="short-video-card"
            type="button"
            key={clip.src}
            onMouseEnter={(event) => showPreview(clip, event.currentTarget)}
            onMouseLeave={hidePreview}
            onFocus={(event) => showPreview(clip, event.currentTarget)}
            onBlur={hidePreview}
            onClick={(event) => openPlayer(clip, event.currentTarget)}
            aria-haspopup="dialog"
            aria-label={`${lang === "zh" ? "播放片段" : "Play fragment"} ${
              clip.number
            }`}
            style={
              {
                "--clip-rotation": clip.rotation,
              } as CSSProperties
            }
          >
            <span className="short-video-thumb">
              <img
                src={clip.poster}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="short-video-play" aria-hidden="true">
                <i>▶</i>
              </span>
            </span>
            <span className="short-video-meta">
              <b>{clip.number}</b>
            </span>
          </button>
        ))}
      </div>

      {previewClip && !activeClip && (
        <div
          className={`short-video-preview is-positioned ${
            previewVisible ? "is-visible" : ""
          }`}
          aria-hidden="true"
        >
          <div
            ref={previewCardRef}
            key={`${previewClip.src}-${previewInstance}`}
            className={`short-video-preview-card is-${previewClip.orientation}`}
            style={
              {
                "--clip-rotation": previewClip.rotation,
              } as CSSProperties
            }
          >
            <video
              key={previewClip.src}
              src={previewClip.src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              tabIndex={-1}
            />
            <div>
              <span>{previewClip.number}</span>
            </div>
          </div>
        </div>
      )}

      {activeClip && (
        <div className="short-video-modal" onClick={closePlayer}>
          <section
            className={`short-video-player is-${activeClip.orientation}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="short-video-player-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header>
              <div>
                <span id="short-video-player-title">
                  {activeClip.number} / {shortVideoClips.length}
                </span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closePlayer}
                aria-label={lang === "zh" ? "关闭播放器" : "Close player"}
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <video
              key={activeClip.src}
              src={activeClip.src}
              autoPlay
              controls
              playsInline
              preload="auto"
              poster={activeClip.poster}
            />
            <p>
              {lang === "zh"
                ? "按 Esc 或点击画面外区域即可关闭"
                : "Press Esc or click outside the player to close"}
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
