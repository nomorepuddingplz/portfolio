export type ProjectLanguage = "zh" | "en";

type BilingualText = {
  zh: string;
  en: string;
};

export type PortfolioProject = {
  slug: string;
  number: string;
  title: string;
  titleZh?: string;
  category: BilingualText;
  period: string;
  location: BilingualText;
  overview: BilingualText;
  intro: BilingualText;
  responsibilities: {
    zh: string[];
    en: string[];
  };
  tone: "sage" | "rose" | "clay" | "blue" | "moss";
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "chagee-china",
    number: "01",
    title: "CHAGEE China",
    titleZh: "霸王茶姬",
    category: {
      zh: "品牌社交媒体",
      en: "Brand Social Media",
    },
    period: "2025.06 — 2025.08",
    location: {
      zh: "上海",
      en: "Shanghai",
    },
    overview: {
      zh: "从内容策划、拍摄到账号数据复盘的品牌社交媒体实践。",
      en: "Brand social content shaped from editorial planning and production through account-level performance analysis.",
    },
    intro: {
      zh: "在 CHAGEE China 社交媒体部门参与品牌官方小红书内容与运营，并负责剪辑“姬姐日记”和“姬查队长”两个员工 IP 账号的视频。",
      en: "A social-media content role at CHAGEE China spanning the brand’s official Xiaohongshu presence and operations. The work also included editing videos for two employee-IP accounts, Sister Ji’s Diary and Captain Ji.",
    },
    responsibilities: {
      zh: [
        "负责品牌官方小红书账号的日常图文选题、脚本与拍摄。",
        "完成 10+ 条“姬姐日记”内容，从创意、拍摄和剪辑推进至发布。",
        "整理“姬姐日记”与“姬查队长”的小红书、抖音数据，结合观众画像和完播率支持后续优化。",
      ],
      en: [
        "Planned daily editorial topics, scripts and photography for the official Xiaohongshu account.",
        "Produced 10+ Sister Ji’s Diary posts from concept and filming through editing and publishing.",
        "Analyzed Xiaohongshu and Douyin data for Sister Ji’s Diary and Captain Ji, using audience profiles and completion rates to guide future content.",
      ],
    },
    tone: "sage",
  },
  {
    slug: "orpheus-content-creation",
    number: "02",
    title: "Orpheus Content Creation",
    category: {
      zh: "AI 内容创作",
      en: "AI Content Creation",
    },
    period: "2025.09 — 2025.12",
    location: {
      zh: "洛杉矶",
      en: "Los Angeles",
    },
    overview: {
      zh: "围绕多内容赛道搭建的 AI 短视频创作与制作流程。",
      en: "An AI short-form content practice built across multiple story genres and a structured production workflow.",
    },
    intro: {
      zh: "使用 Veo 3、Runway 与 Kling 2.1 完成品牌 TikTok 内容，并参与喜剧、旅行和都市传说等内容方向的策略与制作规划。",
      en: "AI-driven TikTok content created with Veo 3, Runway and Kling 2.1, supported by strategy and production planning across comedy, travel and urban legends.",
    },
    responsibilities: {
      zh: [
        "制作 20+ 条 AI 短视频，支持品牌 TikTok 内容传播。",
        "负责工作流程分工、项目排期与执行清单，保证制作顺利推进。",
        "参与长期内容规划、业务框架与可持续商业模式梳理。",
      ],
      en: [
        "Created 20+ AI short-form videos for the brand’s TikTok content.",
        "Assigned production workflows, maintained schedules and prepared execution checklists.",
        "Contributed to long-term content planning, the business framework and sustainable model development.",
      ],
    },
    tone: "rose",
  },
  {
    slug: "connelly-partners",
    number: "03",
    title: "Connelly Partners",
    category: {
      zh: "品牌策略与广告",
      en: "Brand Strategy & Campaigns",
    },
    period: "2024.09 — 2024.11",
    location: {
      zh: "波士顿",
      en: "Boston",
    },
    overview: {
      zh: "BlueBike、Save the Harbor 与 Spindrift 三个品牌广告项目。",
      en: "Three campaign projects developed for BlueBike, Save the Harbor and Spindrift.",
    },
    intro: {
      zh: "从用户调研与传播策略出发，参与品牌宣言、广告脚本、提案、制作执行和社交媒体物料设计。",
      en: "Campaign work moving from audience research and communication strategy into brand manifestos, scripts, pitches, production and social assets.",
    },
    responsibilities: {
      zh: [
        "为 BlueBike 分析目标受众，参与制片执行与定格动画制作。",
        "为 Save the Harbor 撰写品牌宣言和脚本，制作 brief 并参与提案。",
        "为 Spindrift 提出“美食评论家”概念，担任广告导演并主导社交物料设计。",
      ],
      en: [
        "Analyzed BlueBike’s target audience and supported production and stop-motion execution.",
        "Wrote Save the Harbor’s manifesto and commercial script, prepared the brief and joined the pitch.",
        "Created Spindrift’s Food Critic concept, directed the commercial and led social asset design.",
      ],
    },
    tone: "clay",
  },
  {
    slug: "hotli-live",
    number: "04",
    title: "Hotli.Live",
    category: {
      zh: "社交内容与直播",
      en: "Social Content & Livestream",
    },
    period: "2024.02 — 2024.06",
    location: {
      zh: "波士顿",
      en: "Boston",
    },
    overview: {
      zh: "由后台数据驱动的 TikTok 内容体系与直播运营流程。",
      en: "A data-led TikTok content system paired with hands-on livestream production and operations.",
    },
    intro: {
      zh: "围绕账号选题库、直播切片与后台表现数据持续优化内容方向，同时参与直播现场与中控流程。",
      en: "A content workflow spanning the editorial bank, livestream edits and backend performance analysis, alongside live-set and control-room operations.",
    },
    responsibilities: {
      zh: [
        "搭建账号选题库、剪辑直播切片，并根据后台数据调整内容方向。",
        "视频曝光量增长约 30%，单条视频平均产生 150+ 美元收益。",
        "参与 60+ 场 TikTok 直播，平均销售额提升 3.5 倍，月销售额约 18K 美元。",
      ],
      en: [
        "Built the editorial bank, edited livestream clips and refined content using backend data.",
        "Increased video reach by about 30%, with each video generating an average of $150+.",
        "Supported 60+ TikTok livestreams, increasing average sales 3.5x and reaching about $18K in monthly sales.",
      ],
    },
    tone: "blue",
  },
  {
    slug: "meituan",
    number: "05",
    title: "Meituan",
    titleZh: "美团",
    category: {
      zh: "直播内容制作",
      en: "Livestream Content Production",
    },
    period: "2023.06 — 2023.08",
    location: {
      zh: "长沙",
      en: "Changsha",
    },
    overview: {
      zh: "将剧情表达、产品信息与明星互动结合的品牌直播内容。",
      en: "Branded livestream content combining narrative pacing, product messaging and celebrity interaction.",
    },
    intro: {
      zh: "参与美团官方“老板请吃饭”和“爆团团”账号直播，从产品脚本与嘉宾互动到现场美术、灯光和流程调度。",
      en: "Official Meituan livestream production for Boss Treats and Bao Tuan Tuan, spanning product scripts, guest interaction, art direction, lighting and run-of-show coordination.",
    },
    responsibilities: {
      zh: [
        "参与 8 场直播并撰写 100+ 产品宣传脚本。",
        "设计音乐、问答与游戏互动，单场观看超过 100 万，最高达 400 万。",
        "协助完成美术场景、灯光布置、流程调度与素材整理。",
      ],
      en: [
        "Worked on eight livestreams and wrote 100+ product promotion scripts.",
        "Created music, Q&A and game interactions; individual streams exceeded one million viewers and peaked at four million.",
        "Supported art direction, lighting, set construction, run-of-show coordination and media organization.",
      ],
    },
    tone: "moss",
  },
];
