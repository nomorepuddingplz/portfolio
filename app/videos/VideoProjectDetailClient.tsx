"use client";

import { useState } from "react";
import Link from "next/link";
import { videoProjects } from "./video-projects";
import type { VideoLanguage, VideoProject } from "./video-projects";

export default function VideoProjectDetailClient({
  project,
  initialLanguage,
}: {
  project: VideoProject;
  initialLanguage: VideoLanguage;
}) {
  const [lang, setLang] = useState<VideoLanguage>(initialLanguage);
  const currentIndex = videoProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const previousProject =
    videoProjects[
      (currentIndex - 1 + videoProjects.length) % videoProjects.length
    ];
  const nextProject =
    videoProjects[(currentIndex + 1) % videoProjects.length];

  return (
    <main
      className={`video-detail video-tone-${project.tone} video-project-${project.slug}`}
    >
      <header className="video-detail-header">
        <Link
          className="detail-brand"
          href={`/?lang=${lang}#video`}
          aria-label="Christina Tang home"
        >
          CT<span>©26</span>
        </Link>
        <Link className="video-home-button" href={`/?lang=${lang}#video`}>
          <span aria-hidden="true">←</span>
          {lang === "zh" ? "返回主页" : "Back to Home"}
        </Link>
        <div className="language-switch" aria-label="Language">
          <button
            className={lang === "zh" ? "active" : ""}
            onClick={() => setLang("zh")}
            aria-pressed={lang === "zh"}
          >
            中
          </button>
          <span>/</span>
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </header>

      <section className="video-detail-intro">
        <div className="video-detail-eyebrow">
          <span>{project.number} / 03</span>
          <span>{lang === "zh" ? "影像作品" : "Moving Image"}</span>
        </div>

        <div className="video-detail-title-wrap">
          <h1>{project.title}</h1>
          <span className="video-title-orbit" aria-hidden="true" />
        </div>

        <div className="video-detail-information">
          <dl>
            <div>
              <dt>{lang === "zh" ? "形式" : "Format"}</dt>
              <dd>{project.genre[lang]}</dd>
            </div>
            <div>
              <dt>{lang === "zh" ? "职责" : "Role"}</dt>
              <dd>{project.role[lang]}</dd>
            </div>
            <div>
              <dt>{lang === "zh" ? "时间" : "Date"}</dt>
              <dd>{project.date[lang]}</dd>
            </div>
          </dl>
          <p>{project.synopsis[lang]}</p>
        </div>
      </section>

      <section className="video-detail-media">
        <div className="video-detail-media-heading">
          <p>{lang === "zh" ? "影片" : "The Film"}</p>
          <span>{project.title}</span>
        </div>

        {project.videoSrc ? (
          <div className="video-player-frame">
            <video
              key={project.videoSrc}
              controls
              playsInline
              preload="metadata"
              poster={project.poster}
              aria-label={`${project.title} full film`}
            >
              <source src={project.videoSrc} type="video/mp4" />
              {lang === "zh"
                ? "你的浏览器暂不支持此视频。"
                : "Your browser does not support this video."}
            </video>
          </div>
        ) : (
          <div className="video-detail-placeholder">
            <img src={project.poster} alt={`${project.title} film still`} />
            <div>
              <span>{lang === "zh" ? "即将加入" : "Coming next"}</span>
              <p>
                {lang === "zh"
                  ? "详情页已完成，完整影片将在下一步加入。"
                  : "The detail page is ready. The full film will be added next."}
              </p>
            </div>
          </div>
        )}
      </section>

      <nav
        className="project-detail-pagination video-detail-pagination"
        aria-label={lang === "zh" ? "影片切换" : "Film navigation"}
      >
        <Link
          className="project-pagination-link previous"
          href={`/videos/${previousProject.slug}?lang=${lang}`}
        >
          <span className="project-pagination-arrow" aria-hidden="true">
            ←
          </span>
          <span>
            <small>{lang === "zh" ? "上一部" : "Previous film"}</small>
            <strong>{previousProject.title}</strong>
          </span>
        </Link>

        <Link
          className="project-pagination-link next"
          href={`/videos/${nextProject.slug}?lang=${lang}`}
        >
          <span>
            <small>{lang === "zh" ? "下一部" : "Next film"}</small>
            <strong>{nextProject.title}</strong>
          </span>
          <span className="project-pagination-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </nav>

      <footer className="project-detail-footer">
        <span>Christina Tang © 2026</span>
        <span>Los Angeles / Chongqing</span>
      </footer>
    </main>
  );
}
