"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type {
  HotliCaseStudy as HotliCaseStudyData,
  ProjectLanguage,
} from "./project-data";

const videoCardAngles = ["-1.5deg", "0.9deg", "-0.55deg", "1.25deg", "-0.8deg"];
const coofandyLayouts = ["feature", "portrait", "wide", "detail"];

function wrapIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

export default function HotliCaseStudy({
  caseStudy,
  lang,
}: {
  caseStudy: HotliCaseStudyData;
  lang: ProjectLanguage;
}) {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const videoDialogRef = useRef<HTMLDialogElement | null>(null);
  const photoDialogRef = useRef<HTMLDialogElement | null>(null);
  const lastVideoTriggerRef = useRef<HTMLButtonElement | null>(null);
  const lastPhotoTriggerRef = useRef<HTMLButtonElement | null>(null);

  const activeVideo =
    activeVideoIndex === null
      ? null
      : (caseStudy.videos[activeVideoIndex] ?? null);
  const activePhoto =
    activePhotoIndex === null
      ? null
      : (caseStudy.coofandy.photos[activePhotoIndex] ?? null);
  const photoTotal = caseStudy.coofandy.photos.length;

  const openVideo = (index: number, trigger: HTMLButtonElement) => {
    lastVideoTriggerRef.current = trigger;
    setActiveVideoIndex(index);
  };

  const closeVideo = () => {
    videoDialogRef.current?.close();
  };

  const openPhoto = (index: number, trigger: HTMLButtonElement) => {
    lastPhotoTriggerRef.current = trigger;
    setActivePhotoIndex(index);
  };

  const closePhoto = () => {
    photoDialogRef.current?.close();
  };

  const movePhoto = useCallback(
    (direction: number) => {
      if (photoTotal === 0) return;
      setActivePhotoIndex((current) =>
        current === null
          ? null
          : wrapIndex(current + direction, photoTotal),
      );
    },
    [photoTotal],
  );

  useEffect(() => {
    const dialog = videoDialogRef.current;
    if (!dialog || activeVideoIndex === null || dialog.open) return;
    dialog.showModal();
  }, [activeVideoIndex]);

  useEffect(() => {
    const dialog = photoDialogRef.current;
    if (!dialog || activePhotoIndex === null || dialog.open) return;
    dialog.showModal();
  }, [activePhotoIndex]);

  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        movePhoto(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        movePhoto(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, movePhoto]);

  const handleVideoDialogClose = () => {
    setActiveVideoIndex(null);
    requestAnimationFrame(() => lastVideoTriggerRef.current?.focus());
  };

  const handlePhotoDialogClose = () => {
    setActivePhotoIndex(null);
    requestAnimationFrame(() => lastPhotoTriggerRef.current?.focus());
  };

  return (
    <>
      <section className="hotli-case-study-intro">
        <p className="detail-section-label">
          {lang === "zh" ? "项目介绍" : "Project introduction"}
        </p>
        <div>
          <span>Hotli.live</span>
          <h2>Hotli.live</h2>
          <p>{caseStudy.intro[lang]}</p>
        </div>
      </section>

      <section className="hotli-video-archive">
        <header className="hotli-section-heading">
          <p className="detail-section-label">
            {lang === "zh" ? "动态内容" : "Moving-image archive"}
          </p>
          <div>
            <h2>{lang === "zh" ? "视频作品" : "Video works"}</h2>
            <p>
              {lang === "zh"
                ? "将鼠标移至卡片探索叠层，点击即可居中播放。"
                : "Hover to explore the layered cards, then click to play."}
            </p>
          </div>
        </header>

        <div className="hotli-video-grid" role="list">
          {caseStudy.videos.map((video, index) => (
            <article
              className={`hotli-video-card is-${
                video.orientation ?? "landscape"
              }`}
              key={video.src}
              role="listitem"
              style={
                {
                  "--hotli-card-angle":
                    videoCardAngles[index % videoCardAngles.length],
                  "--hotli-card-order": index,
                } as CSSProperties
              }
            >
              <button
                className="hotli-video-trigger"
                type="button"
                onClick={(event) => openVideo(index, event.currentTarget)}
                aria-haspopup="dialog"
                aria-label={`${lang === "zh" ? "播放" : "Play"} ${
                  video.title[lang]
                }`}
              >
                <span className="hotli-video-card-layers" aria-hidden="true">
                  <i className="hotli-video-card-layer layer-back" />
                  <i className="hotli-video-card-layer layer-middle" />
                </span>
                <span className="hotli-video-poster">
                  <img
                    src={video.poster}
                    alt={`${video.title[lang]} ${
                      lang === "zh" ? "视频封面" : "video poster"
                    }`}
                    width={video.posterWidth}
                    height={video.posterHeight}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="hotli-video-play" aria-hidden="true">
                    <i>▶</i>
                  </span>
                </span>
                <span className="hotli-video-meta">
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <strong>{video.title[lang]}</strong>
                  <i>{lang === "zh" ? "点击播放" : "Play"}</i>
                </span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="hotli-coofandy">
        <header className="hotli-coofandy-heading">
          <p className="detail-section-label">Coofandy</p>
          <div>
            <span>{lang === "zh" ? "视觉专题" : "Editorial feature"}</span>
            <h2>{caseStudy.coofandy.title[lang]}</h2>
            <p>{caseStudy.coofandy.description[lang]}</p>
          </div>
        </header>

        <div className="hotli-coofandy-mosaic" role="list">
          {caseStudy.coofandy.photos.map((photo, index) => (
            <figure
              className={`hotli-coofandy-tile is-${
                coofandyLayouts[index % coofandyLayouts.length]
              }`}
              key={photo.src}
              role="listitem"
              style={
                {
                  "--hotli-photo-order": index,
                } as CSSProperties
              }
            >
              <button
                type="button"
                onClick={(event) => openPhoto(index, event.currentTarget)}
                aria-haspopup="dialog"
                aria-label={`${lang === "zh" ? "放大查看" : "View"} ${
                  photo.alt[lang]
                }`}
              >
                <span className="hotli-coofandy-image-frame">
                  <img
                    src={photo.src}
                    alt={photo.alt[lang]}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="hotli-coofandy-open" aria-hidden="true">
                    {lang === "zh" ? "查看" : "Open"} ↗
                  </span>
                </span>
              </button>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{photo.alt[lang]}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <dialog
        ref={videoDialogRef}
        className="hotli-video-dialog"
        aria-labelledby="hotli-video-dialog-title"
        aria-describedby="hotli-video-dialog-description"
        onCancel={(event) => {
          event.preventDefault();
          closeVideo();
        }}
        onClose={handleVideoDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeVideo();
        }}
      >
        {activeVideo && activeVideoIndex !== null && (
          <section
            className={`hotli-video-dialog-panel is-${
              activeVideo.orientation ?? "landscape"
            }`}
          >
            <header>
              <div>
                <span>
                  {String(activeVideoIndex + 1).padStart(2, "0")} /{" "}
                  {String(caseStudy.videos.length).padStart(2, "0")}
                </span>
                <h2 id="hotli-video-dialog-title">
                  {activeVideo.title[lang]}
                </h2>
                <p id="hotli-video-dialog-description">
                  {lang === "zh"
                    ? "Hotli.live 动态内容片段"
                    : "A Hotli.live moving-image fragment"}
                </p>
              </div>
              <button
                type="button"
                onClick={closeVideo}
                aria-label={lang === "zh" ? "关闭视频" : "Close video"}
                autoFocus
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>
            <video
              key={activeVideo.src}
              src={activeVideo.src}
              poster={activeVideo.poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
            />
          </section>
        )}
      </dialog>

      <dialog
        ref={photoDialogRef}
        className="hotli-photo-dialog"
        aria-labelledby="hotli-photo-dialog-title"
        aria-describedby="hotli-photo-dialog-description"
        onCancel={(event) => {
          event.preventDefault();
          closePhoto();
        }}
        onClose={handlePhotoDialogClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePhoto();
        }}
      >
        {activePhoto && activePhotoIndex !== null && (
          <section className="hotli-photo-dialog-panel">
            <header>
              <div>
                <span>
                  {String(activePhotoIndex + 1).padStart(2, "0")} /{" "}
                  {String(photoTotal).padStart(2, "0")}
                </span>
                <h2 id="hotli-photo-dialog-title">
                  {caseStudy.coofandy.title[lang]}
                </h2>
                <p id="hotli-photo-dialog-description">
                  {caseStudy.coofandy.description[lang]}
                </p>
              </div>
              <button
                type="button"
                onClick={closePhoto}
                aria-label={lang === "zh" ? "关闭图片" : "Close image"}
                autoFocus
              >
                <span aria-hidden="true">×</span>
              </button>
            </header>

            <div className="hotli-photo-dialog-media">
              <button
                className="previous"
                type="button"
                onClick={() => movePhoto(-1)}
                aria-label={lang === "zh" ? "上一张图片" : "Previous image"}
              >
                <span aria-hidden="true">←</span>
              </button>
              <img
                key={activePhoto.src}
                src={activePhoto.src}
                alt={activePhoto.alt[lang]}
                width={activePhoto.width}
                height={activePhoto.height}
              />
              <button
                className="next"
                type="button"
                onClick={() => movePhoto(1)}
                aria-label={lang === "zh" ? "下一张图片" : "Next image"}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>

            <footer>
              <p>
                {lang === "zh"
                  ? "使用方向键继续浏览"
                  : "Use the arrow keys to continue"}
              </p>
              <span aria-live="polite">
                {String(activePhotoIndex + 1).padStart(2, "0")} /{" "}
                {String(photoTotal).padStart(2, "0")}
              </span>
            </footer>
          </section>
        )}
      </dialog>
    </>
  );
}
