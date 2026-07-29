"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { portfolioProjects } from "./projects/project-data";

type Language = "zh" | "en";

const experience = [
  {
    period: "2025.09 — 2025.12",
    company: "Orpheus Streaming Inc.",
    location: { zh: "洛杉矶", en: "Los Angeles" },
    role: {
      zh: "社交媒体 AI 内容创作",
      en: "Social Media AI Content Creator",
    },
    points: {
      zh: [
        "使用 Veo 3、Runway、Kling 2.1 等生成式 AI 工具制作 20+ 条 AI 短视频，支持品牌 TikTok 内容传播。",
        "协助制定喜剧、旅行、都市传说等多赛道社交媒体内容策略，负责工作流程分工、项目排期与执行清单，确保内容制作顺利推进。",
        "参与梳理公司长期发展战略与可持续商业模式，协助完善业务框架及后续内容规划。",
      ],
      en: [
        "Created 20+ AI short-form videos with Veo 3, Runway and Kling 2.1, supporting the brand’s TikTok content and distribution.",
        "Helped develop social content strategies across comedy, travel and urban legends; assigned production workflows, maintained project schedules and prepared execution checklists.",
        "Contributed to the company’s long-term strategy and sustainable business model, helping refine its business framework and content roadmap.",
      ],
    },
  },
  {
    period: "2025.06 — 2025.08",
    company: "CHAGEE China / 霸王茶姬",
    location: { zh: "上海", en: "Shanghai" },
    role: { zh: "社交媒体内容运营", en: "Social Media Content Operations" },
    points: {
      zh: [
        "负责品牌官方小红书账号的日常图文选题与拍摄。",
        "完成 10+ 条“姬姐日记”内容制作，负责选题策划、脚本撰写、拍摄、视频剪辑及发布，推进从创意到上线的完整流程。",
        "整理并分析“姬姐日记”和“姬查队长”两个员工 IP 账号的小红书及抖音数据，结合观众画像、完播率等指标，为内容优化与后续策略提供支持。",
      ],
      en: [
        "Managed daily editorial planning, image-led content development and photography for CHAGEE China’s official Xiaohongshu account.",
        "Produced 10+ Sister Ji’s Diary posts, handling concept development, scripting, filming, video editing and publishing from idea through launch.",
        "Organized and analyzed Xiaohongshu and Douyin data for the employee-IP accounts Sister Ji’s Diary and Captain Ji, using audience profiles and completion rates to guide content optimization and future strategy.",
      ],
    },
  },
  {
    period: "2024.09 — 2024.11",
    company: "Connelly Partners",
    location: { zh: "波士顿", en: "Boston" },
    role: { zh: "内容策划", en: "Content Strategist" },
    points: {
      zh: [
        "主导 BlueBike、Save the Harbor 与 Spindrift 三个品牌视频广告项目，覆盖用户调研、策略制定与创意制作全流程。",
        "为 BlueBike 分析目标客群并策划“比火车更可靠”的传播卖点，参与制片执行与定格动画制作。",
        "为 Save the Harbor 撰写品牌宣言与广告脚本，制作 brief、参与提案并协同优化品牌价值主张。",
        "为 Spindrift 提出“美食评论家”创意定位，担任广告导演并主导社交媒体宣传物料设计。",
      ],
      en: [
        "Led three branded video campaigns for BlueBike, Save the Harbor and Spindrift, working from audience research and strategy through creative production.",
        "For BlueBike, analyzed target audiences and developed a more reliable than the train message, supporting production and stop-motion execution.",
        "For Save the Harbor, wrote the brand manifesto and commercial script, prepared the brief, joined the pitch and helped refine the value proposition.",
        "For Spindrift, created the Food Critic concept, directed the commercial and led the design of social campaign assets.",
      ],
    },
  },
  {
    period: "2024.02 — 2024.06",
    company: "SocialV Global",
    location: { zh: "波士顿", en: "Boston" },
    role: {
      zh: "视频编导 / 市场营销助理",
      en: "Video Director / Marketing Assistant",
    },
    points: {
      zh: [
        "策划男装品牌 Coofandy 跨境宣传视频 20+ 条，围绕人物设定打造“型男日常”“街头挑战”等轻剧情系列并发布至 TikTok。",
        "为 Hotli.Live 搭建选题库、剪辑直播切片，并根据后台数据优化内容方向；视频曝光量增长约 30%，单条视频平均产生 150+ 美元收益。",
        "安排直播服化道、灯光与现场布景，担任 60+ 场 TikTok 直播运营中控及后台，优化达人话术与反馈机制；平均销售额提升 3.5 倍，月销售额约 18K 美元。",
      ],
      en: [
        "Created 20+ cross-border campaign videos for menswear brand Coofandy, building character-led TikTok series such as Everyday Style and Street Challenge.",
        "Built a content bank for Hotli.Live, edited livestream clips and refined content using backend performance data; video reach increased by about 30%, with each video generating an average of $150+.",
        "Coordinated wardrobe, props, lighting and live-set styling while serving as the control-room and backend operator for 60+ TikTok livestreams; refined creator scripts and feedback loops, increasing average sales 3.5x and reaching about $18K in monthly sales.",
      ],
    },
  },
  {
    period: "2023.06 — 2023.08",
    company: "中广天择传媒 / TVZone Media",
    location: { zh: "长沙", en: "Changsha" },
    role: {
      zh: "直播内容节目组编导",
      en: "Livestream Content Director",
    },
    points: {
      zh: [
        "参与美团官方“老板请吃饭”“爆团团”账号 8 场直播，撰写 100+ 产品宣传脚本，形成“剧情 + 商品”的融合式口播表达。",
        "对接明星嘉宾的音乐、问答与游戏互动脚本，单场直播观看人数超过 100 万，最高达 400 万。",
        "协助完成直播美术场景与灯光布置、流程调度及素材整理，参与直播节目的现场执行。",
      ],
      en: [
        "Worked on eight livestreams for Meituan’s official Boss Treats and Bao Tuan Tuan accounts, writing 100+ product scripts that combined narrative beats with product messaging.",
        "Developed music, Q&A and game-based interaction scripts for celebrity guests; individual livestreams exceeded one million viewers and peaked at four million.",
        "Supported art direction, lighting and set construction, run-of-show coordination and media organization during live production.",
      ],
    },
  },
];

type VisualWork = {
  kind: "image" | "video";
  src: string;
  alt: string;
  ratio: number;
};

const visualWorks: VisualWork[] = [
  {
    kind: "image",
    src: "/works/visual-collection/kingfisher-closeup.avif",
    alt: "Watercolor kingfisher eye in extreme close-up",
    ratio: 1344 / 768,
  },
  {
    kind: "video",
    src: "/works/visual-collection/screen-recording-01.mov",
    alt: "AI generative visual workflow screen recording one",
    ratio: 16 / 9,
  },
  {
    kind: "image",
    src: "/works/visual-collection/forest-angel.avif",
    alt: "Watercolor angel child resting in a dark forest",
    ratio: 1344 / 768,
  },
  {
    kind: "image",
    src: "/works/visual-collection/children-with-kingfisher.avif",
    alt: "Two children studying an origami kingfisher in cinematic sunlight",
    ratio: 1344 / 768,
  },
  {
    kind: "image",
    src: "/works/visual-collection/painting-kingfisher.avif",
    alt: "Overhead view of a child painting a kingfisher",
    ratio: 1344 / 768,
  },
  {
    kind: "image",
    src: "/works/visual-collection/girl-with-kingfisher.avif",
    alt: "Watercolor girl meeting a giant kingfisher in a sunlit forest",
    ratio: 1832 / 1046,
  },
  {
    kind: "image",
    src: "/works/visual-collection/boy-closeup.avif",
    alt: "Cinematic close-up portrait of a young boy",
    ratio: 1456 / 816,
  },
  {
    kind: "image",
    src: "/works/visual-collection/spindrift-set.avif",
    alt: "Spindrift sparkling water can in a botanical set",
    ratio: 736 / 1408,
  },
  {
    kind: "image",
    src: "/works/visual-01.avif",
    alt: "AI visual study from Christina Tang's collection",
    ratio: 490 / 280,
  },
  {
    kind: "image",
    src: "/works/visual-02.avif",
    alt: "Cinematic visual study from Christina Tang's collection",
    ratio: 490 / 280,
  },
];

const videoWorks = [
  {
    src: "/works/video-fly-out.avif",
    title: "Fly Out",
    href: "https://ziyoutang0201.wixsite.com/christinatangworks/fly-out",
    type: "AI Film",
  },
  {
    src: "/works/video-lift-me-up.avif",
    title: "Lift Me Up",
    href: "https://ziyoutang0201.wixsite.com/christinatangworks/lift-me-up",
    type: "Animation",
  },
  {
    src: "/works/video-otherrealm.avif",
    title: "The Otherrealm",
    href: "https://ziyoutang0201.wixsite.com/christinatangworks/the-otherrealm",
    type: "Visual Story",
  },
];

function VisualCarousel({ lang }: { lang: Language }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const getSlides = () =>
    Array.from(
      trackRef.current?.querySelectorAll<HTMLElement>("[data-visual-slide]") ??
        [],
    );

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    const slides = getSlides();
    if (!track || slides.length === 0) return;

    const nextIndex = Math.max(0, Math.min(index, slides.length - 1));
    const target = slides[nextIndex];
    const left =
      target.offsetLeft - (track.clientWidth - target.offsetWidth) / 2;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollTo({
      left,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () =>
      setPrefersReducedMotion(motionQuery.matches);

    syncMotionPreference();
    motionQuery.addEventListener("change", syncMotionPreference);
    return () =>
      motionQuery.removeEventListener("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const syncActiveSlide = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = getSlides();
        if (slides.length === 0) return;

        if (track.scrollLeft <= 4) {
          setActiveIndex(0);
          return;
        }

        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 4) {
          setActiveIndex(slides.length - 1);
          return;
        }

        const trackCenter = track.scrollLeft + track.clientWidth / 2;
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;

        slides.forEach((slide, index) => {
          const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
          const distance = Math.abs(slideCenter - trackCenter);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        setActiveIndex(nearestIndex);
      });
    };

    const resizeObserver = new ResizeObserver(syncActiveSlide);
    resizeObserver.observe(track);
    track.addEventListener("scroll", syncActiveSlide, { passive: true });
    syncActiveSlide();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      track.removeEventListener("scroll", syncActiveSlide);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(activeIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(activeIndex + 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      goToSlide(0);
    } else if (event.key === "End") {
      event.preventDefault();
      goToSlide(visualWorks.length - 1);
    }
  };

  return (
    <div className="visual-carousel">
      <div className="visual-carousel-toolbar">
        <p>
          {lang === "zh"
            ? "将鼠标移到左右边缘，点击切换"
            : "Move to either edge and click to browse"}
        </p>
        <div className="visual-carousel-controls">
          <span aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(visualWorks.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="visual-carousel-stage">
        <button
          className="visual-edge-control previous"
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-controls="visual-track"
          aria-label={lang === "zh" ? "上一件视觉作品" : "Previous visual"}
        >
          <span aria-hidden="true">←</span>
        </button>

        <div
          ref={trackRef}
          className="visual-track"
          id="visual-track"
          role="region"
          aria-label={
            lang === "zh" ? "视觉作品横向幻灯" : "Visual collection carousel"
          }
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {visualWorks.map((work, index) => (
            <figure
              className={`visual-slide ${
                work.ratio < 1 ? "is-portrait" : "is-landscape"
              }`}
              data-visual-slide
              key={work.src}
              role="group"
              aria-roledescription={lang === "zh" ? "幻灯片" : "slide"}
              aria-label={`${index + 1} / ${visualWorks.length}`}
              style={
                {
                  "--visual-ratio": work.ratio,
                } as CSSProperties
              }
            >
              <div className="visual-media">
                {work.kind === "video" ? (
                  <video
                    muted
                    loop
                    playsInline
                    autoPlay={!prefersReducedMotion}
                    controls={prefersReducedMotion}
                    preload="metadata"
                    aria-label={work.alt}
                  >
                    <source src={work.src} type="video/quicktime" />
                  </video>
                ) : (
                  <img src={work.src} alt={work.alt} draggable={false} />
                )}
              </div>
              <figcaption>
                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(visualWorks.length).padStart(2, "0")}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          className="visual-edge-control next"
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          disabled={activeIndex === visualWorks.length - 1}
          aria-controls="visual-track"
          aria-label={lang === "zh" ? "下一件视觉作品" : "Next visual"}
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  const copy = {
    nav: {
      about: lang === "zh" ? "关于" : "About",
      visual: "Visual",
      video: lang === "zh" ? "视频" : "Video",
      projects: lang === "zh" ? "项目" : "Projects",
      contact: lang === "zh" ? "联系" : "Contact",
    },
    role:
      lang === "zh"
        ? "内容策划 · 多媒体创作者 · AI 生成叙事"
        : "Content Strategist · Multimedia Creator · AI-generative Storytelling",
    aboutTitle: lang === "zh" ? "关于我" : "About me",
    about:
      lang === "zh"
        ? "我是一名跨越品牌、电影与 AI 生成叙事的多媒体创作者。具备编导背景与内容策划执行经验，熟悉社交平台的内容逻辑，擅长把人物调性、文化洞察与视觉语言转化为有传播力的故事。"
        : "I am a multimedia creator working across branding, filmmaking and AI-generative storytelling. With a background in directing and content strategy, I translate character, cultural insight and visual language into stories built to travel.",
    secondAbout:
      lang === "zh"
        ? "我的经历横跨品牌方、创意代理公司与片场制作。现在，我正在探索人类感知与生成式创造力相遇的混合影像工作流。"
        : "My background spans client-side marketing, creative agencies and hands-on film production. Today, I explore hybrid image-making workflows where human sensitivity meets generative creativity.",
  };
  const contactEmail =
    lang === "zh"
      ? "christinatang2022@163.com"
      : "ziyoutang0201@Gmail.com";

  return (
    <main className="portfolio-site">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Christina Tang portfolio">
          CT<span>©26</span>
        </a>
        <nav aria-label={lang === "zh" ? "主导航" : "Primary navigation"}>
          <a href="#about">{copy.nav.about}</a>
          <a href="#visual">{copy.nav.visual}</a>
          <a href="#video">{copy.nav.video}</a>
          <a href="#projects">{copy.nav.projects}</a>
          <a href="#contact">{copy.nav.contact}</a>
        </nav>
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

      <section className="hero" id="top">
        <div className="hero-meta">
          <span>{copy.role}</span>
          <span>Los Angeles · 2026</span>
        </div>
        <div className="hero-title">
          <h1>Portfolio</h1>
          <div className="hero-subtitle">
            {lang === "zh" ? (
              <>
                <p>数字作品集</p>
                <strong>Christina Tang</strong>
              </>
            ) : (
              <>
                <p>
                  Between Narrative &amp;
                  <br />
                  New Vision
                </p>
                <strong>Christina Tang</strong>
              </>
            )}
          </div>
        </div>
        <div className="hero-footer">
          <span>{lang === "zh" ? "向下探索" : "Scroll to explore"}</span>
          <span aria-hidden="true">↓</span>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="section-label">
          <span>01</span>
          <p>{copy.aboutTitle}</p>
        </div>

        <div className="about-layout">
          <aside className="profile-panel">
            <div className="portrait-wrap">
              <img
                src="/works/christina-portrait.avif"
                alt="Christina Tang"
              />
              <span className="portrait-stamp">CT</span>
            </div>
            <div>
              <p className="profile-kicker">{copy.role}</p>
              <h2>
                {lang === "zh" ? "唐子游" : "Christina"}
                <br />
                <em>{lang === "zh" ? "Christina Tang" : "Tang"}</em>
              </h2>
            </div>
            <p className="profile-copy">{copy.about}</p>
            <p className="profile-copy profile-copy-muted">
              {copy.secondAbout}
            </p>
            <div className="skill-pills" aria-label="Skills">
              {[
                "Content Strategy",
                "Filmmaking",
                "Social Media",
                "AI Workflow",
                "Adobe CC",
                "MAYA / UE",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </aside>

          <div className="resume-panel">
            <section className="education-block">
              <p className="resume-heading">
                {lang === "zh" ? "教育经历" : "Education"}
              </p>
              <div className="resume-card education-card">
                <span className="resume-date">2022 — 2026</span>
                <div>
                  <h3>
                    Emerson College
                    <small> · {lang === "zh" ? "波士顿" : "Boston"}</small>
                  </h3>
                  <p>
                    {lang === "zh"
                      ? "媒体艺术制作 · 文学学士（BA）"
                      : "BA, Media Arts Production"}
                  </p>
                  <small>
                    {lang === "zh"
                      ? "Visionary Scholarship · 11,000 美元 / 年"
                      : "Visionary Scholarship · $11,000 / year"}
                  </small>
                </div>
              </div>
            </section>

            <section className="experience-block">
              <p className="resume-heading">
                {lang === "zh" ? "实习经历" : "Experience"}
              </p>
              <div className="timeline">
                {experience.map((item) => (
                  <article className="resume-card timeline-card" key={item.period}>
                    <span className="timeline-dot" aria-hidden="true" />
                    <span className="resume-date">{item.period}</span>
                    <div>
                      <p className="role">{item.role[lang]}</p>
                      <h3>
                        {item.company}
                        <small> · {item.location[lang]}</small>
                      </h3>
                      <ul>
                        {item.points[lang].map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="campus-block">
              <p className="resume-heading">
                {lang === "zh" ? "校园经历" : "Campus Leadership"}
              </p>
              <div className="resume-card compact-card">
                <span className="resume-date">2024.05 — 2025.05</span>
                <div>
                  <h3 className="leadership-role">
                    {lang === "zh" ? "行政部部长" : "Head of Administration"}
                  </h3>
                  <p className="leadership-org">
                    {lang === "zh"
                      ? "Emerson 中国学生会"
                      : "Emerson Chinese Students Association"}
                  </p>
                  <p>
                    {lang === "zh"
                      ? "统筹策划 20+ 场大型校园活动，单场平均参与人数超过 100 人、最高达 300+；担任 2024 波士顿学联春晚统筹，协调演员、灯光、美术与视频团队。管理年度预算与开支，制作年度财务报表，并负责场地预约、舞台搭建与物料采买。"
                      : "Led 20+ large campus events, averaging more than 100 attendees and reaching 300+ at the largest event; coordinated performers, lighting, art and video teams for the 2024 Boston Chinese New Year Gala. Managed the annual budget and expenses, prepared the financial report, and oversaw venue booking, stage setup and material purchasing."}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="visual-section work-section" id="visual">
        <div className="section-heading">
          <div className="section-label">
            <span>02</span>
            <p>Visual Collection</p>
          </div>
          <h2>Visual Collection</h2>
          <p>
            {lang === "zh"
              ? "使用 AI 生成工具与电影化工作流完成的视觉实验速览。"
              : "A snapshot of visual experiments using AI generative tools and cinematic workflows."}
          </p>
        </div>
        <VisualCarousel lang={lang} />
      </section>

      <section className="video-section work-section" id="video">
        <div className="section-heading">
          <div className="section-label">
            <span>03</span>
            <p>{lang === "zh" ? "视频作品" : "Video Works"}</p>
          </div>
          <h2>{lang === "zh" ? "视频作品" : "Video Works"}</h2>
          <p>
            {lang === "zh"
              ? "电影、动画与 AI 驱动的视觉叙事精选。"
              : "A curated selection across film, animation and AI-driven visual storytelling."}
          </p>
        </div>
        <div className="video-grid">
          {videoWorks.map((work, index) => (
            <a
              className="video-card"
              href={work.href}
              target="_blank"
              rel="noreferrer"
              key={work.title}
            >
              <div className="video-image">
                <img src={work.src} alt={`${work.title} film still`} />
                <span className="play-button" aria-hidden="true">▶</span>
              </div>
              <div className="video-info">
                <span>0{index + 1}</span>
                <h3>{work.title}</h3>
                <p>{work.type} · 2025</p>
                <b aria-hidden="true">↗</b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="projects-section work-section" id="projects">
        <div className="section-heading">
          <div className="section-label">
            <span>04</span>
            <p>{lang === "zh" ? "品牌项目" : "Branding Project"}</p>
          </div>
          <h2>{lang === "zh" ? "品牌项目" : "Branding Project"}</h2>
          <p>
            {lang === "zh"
              ? "以策略洞察与平台创意为核心的品牌和社交媒体项目。"
              : "An overview of branding and social media campaigns created through strategic insight and platform-driven creativity."}
          </p>
        </div>

        <div className="project-overview-list">
          {portfolioProjects.map((project) => (
            <a
              className={`project-overview-card project-tone-${project.tone}`}
              href={`/projects/${project.slug}`}
              key={project.slug}
              aria-label={`${lang === "zh" ? "查看" : "View"} ${project.title}`}
            >
              <span className="project-card-glow" aria-hidden="true" />
              <span className="project-card-layer layer-one" aria-hidden="true" />
              <span className="project-card-layer layer-two" aria-hidden="true" />
              <span className="project-card-layer layer-three" aria-hidden="true" />
              <span className="project-card-number">{project.number}</span>
              <div className="project-card-title">
                <p>
                  {project.category[lang]} · {project.period}
                </p>
                <h3>
                  {project.title}
                  {project.titleZh && <small>{project.titleZh}</small>}
                </h3>
              </div>
              <p className="project-card-summary">{project.overview[lang]}</p>
              <span className="project-card-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-label light-label">
          <span>05</span>
          <p>{lang === "zh" ? "联系我" : "Get in touch"}</p>
        </div>
        <p className="contact-intro">
          {lang === "zh" ? "让我们一起创造一些" : "Let’s create something"}
        </p>
        <h2>{lang === "zh" ? "值得被记住的作品。" : "worth remembering."}</h2>
        <a href={`mailto:${contactEmail}`} className="email-link">
          {contactEmail} <span>↗</span>
        </a>
        <footer>
          <span>Christina Tang © 2026</span>
          <span>Los Angeles / Chongqing</span>
          <a href="#top">{lang === "zh" ? "回到顶部 ↑" : "Back to top ↑"}</a>
        </footer>
      </section>
    </main>
  );
}
