"use client";

import { useState } from "react";

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
        "使用 Veo 3、Runway、Kling 2.1 等生成式 AI 工具制作 20+ 条品牌短视频。",
        "协助制定喜剧、旅行与都市传说等内容赛道策略，负责排期、流程分工与执行清单。",
        "参与梳理长期发展战略、可持续商业模式与内容规划。",
      ],
      en: [
        "Produced 20+ AI short-form videos with Veo 3, Runway and Kling 2.1 for TikTok brand content.",
        "Helped shape content strategies across comedy, travel and urban legends, coordinating schedules and production workflows.",
        "Contributed to long-term business strategy, sustainable models and content planning.",
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
        "完成 10+ 条“姬姐日记”内容，从选题、脚本、拍摄、剪辑到发布全流程推进。",
        "分析小红书与抖音数据，为内容优化与运营策略提供支持。",
      ],
      en: [
        "Owned daily editorial planning and production for CHAGEE’s official Xiaohongshu account.",
        "Delivered 10+ episodes of Sister Ji’s Diary from concept and scripting through filming, editing and publishing.",
        "Analyzed Xiaohongshu and Douyin performance to inform content optimization and channel strategy.",
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
        "主导 BlueBike、Save the Harbor 与 Spindrift 三个品牌视频广告项目。",
        "覆盖用户研究、传播策略、品牌宣言、广告脚本、提案与拍摄执行。",
        "为 Spindrift 提出“美食评论家”创意定位，并担任广告导演。",
      ],
      en: [
        "Led three branded video campaigns for BlueBike, Save the Harbor and Spindrift.",
        "Worked across audience research, communication strategy, brand manifesto, scripting, pitching and production.",
        "Created the Food Critic concept for Spindrift and directed the final commercial.",
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
        "策划男装品牌 Coofandy 跨境宣传视频 20+ 条，打造轻剧情内容系列。",
        "为 Hotli.Live 建立选题库并依据数据优化内容，视频曝光增长约 30%。",
        "参与 60+ 场 TikTok 直播运营，优化话术与反馈机制，月销售额约 18K 美元。",
      ],
      en: [
        "Created 20+ cross-border campaign videos for menswear brand Coofandy, building a light narrative content series.",
        "Built an editorial bank for Hotli.Live and used performance data to lift reach by roughly 30%.",
        "Supported 60+ TikTok livestreams, refining creator scripts and feedback loops to reach about $18K in monthly sales.",
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
        "参与美团官方账号 8 场直播，撰写 100+ 产品宣传脚本。",
        "对接明星嘉宾互动脚本，单场直播最高观看人数达 400 万。",
        "协助美术场景搭建、流程调度与素材整理。",
      ],
      en: [
        "Worked on eight official Meituan livestreams and wrote 100+ product promotion scripts.",
        "Developed interactive scripts for celebrity guests, with peak live audiences reaching four million.",
        "Supported set design, run-of-show coordination and media organization.",
      ],
    },
  },
];

const visualWorks = [
  { src: "/works/visual-01.avif", number: "01" },
  { src: "/works/visual-02.avif", number: "02" },
  { src: "/works/visual-03.avif", number: "03" },
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
                  <h3>Emerson College</h3>
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
                      ? "统筹 20+ 场校园活动与年度预算；担任 2024 波士顿学联春晚统筹，协调演员、灯光、美术与视频团队。"
                      : "Led 20+ campus events and the annual budget; coordinated performers, lighting, art and video teams for the 2024 Boston Chinese New Year Gala."}
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
          <h2>Visual<br />Collection</h2>
          <p>
            {lang === "zh"
              ? "使用生成式 AI 与电影化工作流进行的视觉实验。"
              : "Visual experiments shaped through generative tools and cinematic workflows."}
          </p>
        </div>
        <div className="visual-grid">
          {visualWorks.map((work) => (
            <figure key={work.number}>
              <img src={work.src} alt={`Visual study ${work.number}`} />
              <figcaption>
                <span>Visual Study</span>
                <span>{work.number} / 03</span>
              </figcaption>
            </figure>
          ))}
        </div>
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
            <p>{lang === "zh" ? "项目作品" : "Project Works"}</p>
          </div>
          <h2>{lang === "zh" ? "项目作品" : "Selected Projects"}</h2>
          <p>
            {lang === "zh"
              ? "从策略洞察、内容设计到拍摄与发布的完整项目实践。"
              : "Selected projects spanning strategic insight, content design, production and launch."}
          </p>
        </div>

        <article className="featured-project">
          <div className="project-copy">
            <div className="project-meta">
              <span>01</span>
              <span>Social Media · 2025</span>
            </div>
            <h3>
              CHAGEE China
              <br />
              <span className="project-chinese-name">霸王茶姬</span>
            </h3>
            <p>
              {lang === "zh"
                ? "负责品牌小红书日常内容，从选题、脚本、拍摄、剪辑到发布；参与“夏日第一杯”、孙燕姿全球代言官宣、宠物季与新品发布等重点活动。"
                : "Owned day-to-day Xiaohongshu content from scripting and filming through editing and publishing, while supporting major seasonal, ambassador and product-launch campaigns."}
            </p>
            <a
              href="https://ziyoutang0201.wixsite.com/christinatangworks/chagee-china"
              target="_blank"
              rel="noreferrer"
            >
              {lang === "zh" ? "查看项目" : "View project"} <span>↗</span>
            </a>
          </div>
          <div className="chagee-collage" aria-label="CHAGEE social media campaign">
            <img src="/works/chagee-01.avif" alt="CHAGEE campaign visual" />
            <img src="/works/chagee-02.avif" alt="CHAGEE campaign visual" />
            <img src="/works/chagee-03.avif" alt="CHAGEE campaign visual" />
            <img src="/works/chagee-04.avif" alt="CHAGEE campaign visual" />
          </div>
        </article>

        <div className="project-pair">
          <article className="project-tile project-ai">
            <span>02 / AI CONTENT</span>
            <div className="project-orbit" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div>
              <h3>Orpheus<br />Content Lab</h3>
              <p>
                {lang === "zh"
                  ? "20+ 条 AI 短视频与多赛道社交内容策略。"
                  : "20+ AI shorts and a multi-genre social content system."}
              </p>
            </div>
          </article>
          <article className="project-tile project-agency">
            <span>03 / BRAND CAMPAIGNS</span>
            <img src="/works/visual-02.avif" alt="" aria-hidden="true" />
            <div>
              <h3>Connelly<br />Partners</h3>
              <p>
                {lang === "zh"
                  ? "BlueBike、Save the Harbor 与 Spindrift 品牌广告。"
                  : "Campaign work for BlueBike, Save the Harbor and Spindrift."}
              </p>
            </div>
          </article>
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
        <a href="mailto:christinatang2022@163.com" className="email-link">
          christinatang2022@163.com <span>↗</span>
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
