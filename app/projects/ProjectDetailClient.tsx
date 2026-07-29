"use client";

import { useState } from "react";
import type {
  PortfolioProject,
  ProjectLanguage,
} from "./project-data";

export default function ProjectDetailClient({
  project,
}: {
  project: PortfolioProject;
}) {
  const [lang, setLang] = useState<ProjectLanguage>("en");

  return (
    <main className={`project-detail project-tone-${project.tone}`}>
      <header className="project-detail-header">
        <a className="detail-brand" href="/#projects" aria-label="Back to portfolio">
          CT<span>©26</span>
        </a>
        <a className="detail-back" href="/#projects">
          <span aria-hidden="true">←</span>
          {lang === "zh" ? "返回全部项目" : "Back to all projects"}
        </a>
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

      <section className="project-detail-hero">
        <div className="detail-hero-meta">
          <span>{project.number} / 05</span>
          <span>{project.category[lang]}</span>
        </div>
        <div className="detail-hero-layers" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <h1>
          {project.title}
          {project.titleZh && <small>{project.titleZh}</small>}
        </h1>
        <div className="detail-hero-footer">
          <span>{project.period}</span>
          <span>{project.location[lang]}</span>
        </div>
      </section>

      <section className="project-detail-overview">
        <p className="detail-section-label">
          {lang === "zh" ? "项目概览" : "Project overview"}
        </p>
        <div>
          <h2>{project.overview[lang]}</h2>
          <p>{project.intro[lang]}</p>
        </div>
      </section>

      <section className="project-detail-responsibilities">
        <p className="detail-section-label">
          {lang === "zh" ? "主要职责" : "Selected responsibilities"}
        </p>
        <ol>
          {project.responsibilities[lang].map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="project-media-section">
        <div className="project-media-heading">
          <p className="detail-section-label">
            {lang === "zh" ? "媒体资料" : "Media archive"}
          </p>
          <p>
            {lang === "zh"
              ? "页面结构已经完成，图片和视频将在下一步加入。"
              : "The page structure is ready. Images and video will be added next."}
          </p>
        </div>
        <div className="project-media-grid" aria-label="Media placeholders">
          {[1, 2, 3].map((slot) => (
            <div className="project-media-placeholder" key={slot}>
              <span>0{slot}</span>
              <p>{lang === "zh" ? "媒体即将加入" : "Media coming next"}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="project-detail-footer">
        <span>Christina Tang © 2026</span>
        <a href="/#projects">
          {lang === "zh" ? "浏览其他项目" : "Explore other projects"} <span>↗</span>
        </a>
      </footer>
    </main>
  );
}
