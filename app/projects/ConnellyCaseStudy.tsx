import type {
  ConnellyCaseStudy as ConnellyCaseStudyData,
  ProjectLanguage,
} from "./project-data";

export default function ConnellyCaseStudy({
  caseStudy,
  lang,
}: {
  caseStudy: ConnellyCaseStudyData;
  lang: ProjectLanguage;
}) {
  return (
    <>
      <section className="connelly-intro">
        <p className="detail-section-label">
          {lang === "zh" ? "项目聚焦" : "Campaign focus"}
        </p>
        <div>
          <span>Spindrift</span>
          <h2>{caseStudy.campaignTitle[lang]}</h2>
          <p>{caseStudy.campaignIntro[lang]}</p>
        </div>
      </section>

      <section className="connelly-archive">
        <header>
          <p className="detail-section-label">
            {lang === "zh" ? "视觉作品" : "Visual work"}
          </p>
          <p>{caseStudy.archiveIntro[lang]}</p>
        </header>

        <div className="connelly-image-grid">
          {caseStudy.images.map((item, index) => (
            <figure
              className={`connelly-image is-${item.layout}`}
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

      <section className="connelly-film">
        <header>
          <p className="detail-section-label">{caseStudy.film.label[lang]}</p>
          <h2>{caseStudy.film.title[lang]}</h2>
        </header>
        <div className="connelly-film-frame">
          <video
            controls
            playsInline
            preload="metadata"
            poster={caseStudy.film.poster}
          >
            <source src={caseStudy.film.src} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
