import type {
  MeituanCaseStudy as MeituanCaseStudyData,
  ProjectLanguage,
} from "./project-data";

export default function MeituanCaseStudy({
  caseStudy,
  lang,
}: {
  caseStudy: MeituanCaseStudyData;
  lang: ProjectLanguage;
}) {
  return (
    <>
      <section className="meituan-intro">
        <p className="detail-section-label">
          {lang === "zh" ? "项目职责" : "Project role"}
        </p>
        <div className="meituan-intro-copy">
          <h2>{caseStudy.role[lang]}</h2>
          <p>{caseStudy.statement[lang]}</p>
        </div>
        <aside className="meituan-metric" aria-label={caseStudy.metric.label[lang]}>
          <span>{lang === "zh" ? "场均表现" : "Average reach"}</span>
          <strong>{caseStudy.metric.value}</strong>
          <p>{caseStudy.metric.label[lang]}</p>
        </aside>
      </section>

      <section className="meituan-gallery">
        <header>
          <p className="detail-section-label">
            {lang === "zh" ? "直播现场" : "Livestream set"}
          </p>
          <p>{caseStudy.galleryIntro[lang]}</p>
        </header>

        <div className="meituan-gallery-grid">
          {caseStudy.gallery.map((item, index) => (
            <figure
              className={`meituan-gallery-item is-${item.layout}`}
              key={item.src}
            >
              <div>
                <img
                  src={item.src}
                  alt={item.alt[lang]}
                  width={item.width}
                  height={item.height}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item.caption[lang]}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
