const projects = [
  {
    index: "01",
    title: "Frame AI",
    subtitle: "让创意协作少一点摩擦",
    category: "产品设计 · 创意开发",
    year: "2026",
    result: "从概念到首个可用版本，仅用 8 周",
    className: "project-frame",
    visual: (
      <div className="frame-window" aria-hidden="true">
        <div className="window-bar">
          <span />
          <span />
          <span />
          <b>FRAME / WORKSPACE</b>
        </div>
        <div className="frame-content">
          <div className="frame-sidebar">
            <span>01</span>
            <span>02</span>
            <span>03</span>
          </div>
          <div className="frame-canvas">
            <p>Make space for</p>
            <strong>better ideas.</strong>
            <i />
          </div>
        </div>
      </div>
    ),
  },
  {
    index: "02",
    title: "澄湖",
    subtitle: "一套会呼吸的在地品牌系统",
    category: "品牌策略 · 视觉识别",
    year: "2025",
    result: "覆盖 12 个线下触点与数字产品",
    className: "project-lake",
    visual: (
      <div className="lake-poster" aria-hidden="true">
        <span className="lake-mark">澄</span>
        <span className="lake-ring lake-ring-one" />
        <span className="lake-ring lake-ring-two" />
        <small>CHENG HU / 31.23°N</small>
      </div>
    ),
  },
  {
    index: "03",
    title: "日常节律",
    subtitle: "为忙碌的人重新设计健康习惯",
    category: "服务设计 · 移动体验",
    year: "2025",
    result: "测试用户 30 日留存提升 42%",
    className: "project-rhythm",
    visual: (
      <div className="rhythm-ui" aria-hidden="true">
        <div className="phone">
          <div className="phone-top">
            <span>08:42</span>
            <i />
          </div>
          <p>今天，慢一点。</p>
          <div className="rhythm-orbit">
            <strong>72</strong>
            <small>平衡值</small>
          </div>
          <div className="rhythm-bars">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    ),
  },
];

const capabilities = [
  {
    number: "01",
    title: "产品策略",
    text: "从模糊问题中找到真正值得解决的方向，建立清晰的产品叙事与优先级。",
  },
  {
    number: "02",
    title: "体验设计",
    text: "把复杂流程变成直觉体验，用原型和真实反馈推动每一次决策。",
  },
  {
    number: "03",
    title: "创意开发",
    text: "让设计不止停在画面里，以可用、可维护的前端实现还原完整体验。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="林屿作品集首页">
          <span>LIN YU</span>
          <small>PORTFOLIO / 2026</small>
        </a>
        <nav aria-label="主导航">
          <a href="#work">作品</a>
          <a href="#about">关于</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="availability" href="#contact">
          <i aria-hidden="true" />
          接受新项目
        </a>
      </header>

      <section className="hero" id="top">
        <div className="section-index hero-index">
          <span>01 / 04</span>
          <span>上海 · 中国</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">独立设计师 &amp; 创意开发者</p>
          <h1>
            把复杂问题
            <br />
            做成<span>清晰体验。</span>
          </h1>
        </div>

        <div className="hero-bottom">
          <p className="hero-intro">
            我是林屿，专注于数字产品、品牌体验与创意技术。
            <br />
            从第一张草图到可用产品，让好想法真正发生。
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              浏览精选作品 <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="mailto:hello@linyu.design">
              hello@linyu.design
            </a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit">
            <span>想法</span>
            <i />
            <span>体验</span>
            <i />
            <span>实现</span>
          </div>
          <div className="hero-disc">
            <b>LY</b>
            <small>© 2026</small>
          </div>
          <div className="hero-crosshair">+</div>
        </div>
      </section>

      <section className="selected-work" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / 精选作品</p>
            <h2>
              Selected
              <br />
              <em>work.</em>
            </h2>
          </div>
          <p>
            一些跨越产品、品牌与技术的项目。
            <br />
            每一个都从真实问题开始。
          </p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-visual ${project.className}`}>
                <span className="project-number">{project.index}</span>
                {project.visual}
              </div>
              <div className="project-info">
                <div>
                  <p>
                    {project.category} · {project.year}
                  </p>
                  <h3>{project.title}</h3>
                  <h4>{project.subtitle}</h4>
                </div>
                <div className="project-result">
                  <span>项目成果</span>
                  <p>{project.result}</p>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-lead">
          <p className="eyebrow">03 / 关于与能力</p>
          <h2>
            设计不是装饰。
            <br />
            它是让事情变得
            <span>更简单、更准确、</span>
            <br />
            也更有温度的方法。
          </h2>
        </div>

        <div className="about-grid">
          <div className="portrait-art" aria-label="林屿的抽象个人肖像占位图">
            <span className="portrait-label">LIN / YU</span>
            <div className="portrait-head" />
            <div className="portrait-body" />
            <i className="portrait-dot" />
            <small>DESIGNING SINCE 2018</small>
          </div>

          <div className="about-copy">
            <p>
              过去 8 年，我与创业团队、文化机构和成熟品牌一起工作，
              把复杂的业务目标转化为人们愿意使用、愿意记住的体验。
            </p>
            <p>
              我相信最好的合作来自坦诚、好奇心，以及对细节不妥协的共同标准。
            </p>
            <dl>
              <div>
                <dt>8+</dt>
                <dd>年设计经验</dd>
              </div>
              <div>
                <dt>36</dt>
                <dd>个落地项目</dd>
              </div>
              <div>
                <dt>7</dt>
                <dd>项设计奖项</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="capabilities">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-topline">
          <span>04 / 一起合作</span>
          <span>AVAILABLE FOR SELECT PROJECTS · 2026</span>
        </div>
        <p className="eyebrow">有一个值得实现的想法？</p>
        <h2>
          Let&apos;s make
          <br />
          <em>it happen.</em>
        </h2>
        <a className="contact-link" href="mailto:hello@linyu.design">
          <span>hello@linyu.design</span>
          <b aria-hidden="true">↗</b>
        </a>
        <footer>
          <span>© 2026 LIN YU</span>
          <div>
            <a href="#top">回到顶部 ↑</a>
          </div>
          <span>DESIGN / CODE / DIRECTION</span>
        </footer>
      </section>
    </main>
  );
}
