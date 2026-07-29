"use client";

import { useEffect, useState } from "react";
import ChageeCaseStudy from "./ChageeCaseStudy";
import ConnellyCaseStudy from "./ConnellyCaseStudy";
import HotliCaseStudy from "./HotliCaseStudy";
import IntuitoCaseStudy from "./IntuitoCaseStudy";
import MeituanCaseStudy from "./MeituanCaseStudy";
import { portfolioProjects } from "./project-data";
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
  const currentIndex = portfolioProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const previousProject =
    currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioProjects.length - 1
      ? portfolioProjects[currentIndex + 1]
      : null;

  useEffect(() => {
    const requestedLanguage = new URLSearchParams(window.location.search).get(
      "lang",
    );
    if (requestedLanguage === "zh" || requestedLanguage === "en") {
      const frame = requestAnimationFrame(() => setLang(requestedLanguage));
      return () => cancelAnimationFrame(frame);
    }
  }, []);

  return (
    <main
      className={`project-detail project-tone-${project.tone} project-${project.slug}`}
      data-project={project.slug}
    >
      <header className="project-detail-header">
        <a
          className="detail-brand"
          href={`/?lang=${lang}#projects`}
          aria-label="Back to portfolio"
        >
          CT<span>©26</span>
        </a>
        <a className="detail-back" href={`/?lang=${lang}#projects`}>
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
          <span>
            {project.number} /{" "}
            {String(portfolioProjects.length).padStart(2, "0")}
          </span>
          <span>{project.category[lang]}</span>
        </div>
        {project.heroImages && project.heroImages.length > 0 && (
          <div className="detail-hero-layers" aria-hidden="true">
            {project.heroImages.slice(0, 3).map((src, index) => (
              <figure key={src}>
                <img
                  src={src}
                  alt=""
                  loading="eager"
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </figure>
            ))}
          </div>
        )}
        <h1>
          {project.title}
          {project.titleZh && <small>{project.titleZh}</small>}
        </h1>
        {project.caseStudy && (
          <div className="chagee-hero-brief">
            <span>{lang === "zh" ? "品牌 / 职位" : "Brand / Role"}</span>
            <strong>{project.caseStudy.role[lang]}</strong>
            <small>{project.caseStudy.heroSummary[lang]}</small>
          </div>
        )}
        {project.intuitoCaseStudy && (
          <div className="intuito-hero-band">
            <div className="intuito-hero-role">
              <small>{lang === "zh" ? "职位" : "Role"}</small>
              <strong>{project.intuitoCaseStudy.role[lang]}</strong>
              <span>{project.intuitoCaseStudy.heroSummary[lang]}</span>
            </div>
            <div className="intuito-hero-impact">
              <small>{lang === "zh" ? "成果" : "Impact"}</small>
              <strong>{project.intuitoCaseStudy.metric.value}</strong>
              <span>{project.intuitoCaseStudy.metric.label[lang]}</span>
            </div>
          </div>
        )}
        {project.meituanCaseStudy && (
          <div className="meituan-hero-brief">
            <span>{lang === "zh" ? "主要职责" : "Primary role"}</span>
            <strong>{project.meituanCaseStudy.role[lang]}</strong>
            <small>
              <b>{project.meituanCaseStudy.metric.value}</b>{" "}
              {project.meituanCaseStudy.metric.label[lang]}
            </small>
          </div>
        )}
        <div className="detail-hero-footer">
          <span>{project.period}</span>
          <span>{project.location[lang]}</span>
        </div>
      </section>

      {project.caseStudy ? (
        <ChageeCaseStudy caseStudy={project.caseStudy} lang={lang} />
      ) : project.connellyCaseStudy ? (
        <ConnellyCaseStudy
          caseStudy={project.connellyCaseStudy}
          lang={lang}
        />
      ) : project.hotliCaseStudy ? (
        <HotliCaseStudy caseStudy={project.hotliCaseStudy} lang={lang} />
      ) : project.intuitoCaseStudy ? (
        <IntuitoCaseStudy caseStudy={project.intuitoCaseStudy} lang={lang} />
      ) : project.meituanCaseStudy ? (
        <MeituanCaseStudy caseStudy={project.meituanCaseStudy} lang={lang} />
      ) : (
        <>
          <section className="project-detail-overview">
            <p className="detail-section-label">
              {lang === "zh" ? "项目概览" : "Project overview"}
            </p>
            <div>
              <h2>{project.overview[lang]}</h2>
              <p>{project.intro[lang]}</p>
            </div>
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
        </>
      )}

      <nav
        className="project-detail-pagination"
        aria-label={lang === "zh" ? "项目翻页" : "Project navigation"}
      >
        {previousProject ? (
          <a
            className="project-pagination-link previous"
            href={`/projects/${previousProject.slug}?lang=${lang}`}
          >
            <span className="project-pagination-arrow" aria-hidden="true">
              ←
            </span>
            <span>
              <small>{lang === "zh" ? "上一个项目" : "Previous project"}</small>
              <strong>
                {previousProject.title}
                {previousProject.titleZh && ` / ${previousProject.titleZh}`}
              </strong>
            </span>
          </a>
        ) : (
          <span className="project-pagination-link previous disabled">
            <span className="project-pagination-arrow" aria-hidden="true">
              ←
            </span>
            <span>
              <small>{lang === "zh" ? "项目起点" : "Start of archive"}</small>
              <strong>{lang === "zh" ? "第一个项目" : "First project"}</strong>
            </span>
          </span>
        )}

        {nextProject ? (
          <a
            className="project-pagination-link next"
            href={`/projects/${nextProject.slug}?lang=${lang}`}
          >
            <span>
              <small>{lang === "zh" ? "下一个项目" : "Next project"}</small>
              <strong>
                {nextProject.title}
                {nextProject.titleZh && ` / ${nextProject.titleZh}`}
              </strong>
            </span>
            <span className="project-pagination-arrow" aria-hidden="true">
              →
            </span>
          </a>
        ) : (
          <a
            className="project-pagination-link next home"
            href={`/?lang=${lang}`}
          >
            <span>
              <small>{lang === "zh" ? "浏览结束" : "End of archive"}</small>
              <strong>{lang === "zh" ? "返回主页" : "Back to homepage"}</strong>
            </span>
            <span className="project-pagination-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        )}
      </nav>

      <footer className="project-detail-footer">
        <span>Christina Tang © 2026</span>
        <span>Los Angeles / Chongqing</span>
      </footer>
    </main>
  );
}
