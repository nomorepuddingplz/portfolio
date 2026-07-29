export type ProjectLanguage = "zh" | "en";

export type BilingualText = {
  zh: string;
  en: string;
};

export type ProjectCaseStudy = {
  brandStatement: BilingualText;
  role: BilingualText;
  heroSummary: BilingualText;
  headline: BilingualText;
  campaignRole: BilingualText;
  campaigns: BilingualText[];
  archiveIntro: BilingualText;
  gallery: {
    src: string;
    alt: BilingualText;
  }[];
  accountArchive?: {
    intro: BilingualText;
    groups: {
      title: BilingualText;
      platform: BilingualText;
      images: {
        src: string;
        alt: BilingualText;
        width: number;
        height: number;
      }[];
    }[];
  };
};

export type IntuitoCaseStudy = {
  brandStatement: BilingualText;
  role: BilingualText;
  heroSummary: BilingualText;
  creativeStatement: BilingualText;
  strategyStatement: BilingualText;
  metric: {
    value: string;
    label: BilingualText;
  };
  galleryIntro: BilingualText;
  gallery: {
    src: string;
    alt: BilingualText;
    caption: BilingualText;
    width: number;
    height: number;
    layout: "wide" | "portrait" | "medium";
  }[];
};

export type ConnellyCaseStudy = {
  campaignTitle: BilingualText;
  campaignIntro: BilingualText;
  archiveIntro: BilingualText;
  images: {
    src: string;
    alt: BilingualText;
    caption: BilingualText;
    width: number;
    height: number;
    layout: "wide" | "landscape" | "landscape-right" | "portrait";
  }[];
  film: {
    src: string;
    poster: string;
    label: BilingualText;
    title: BilingualText;
  };
};

export type HotliCaseStudy = {
  intro: BilingualText;
  videos: {
    src: string;
    poster: string;
    posterWidth: number;
    posterHeight: number;
    title: BilingualText;
    orientation?: "landscape" | "portrait";
  }[];
  coofandy: {
    title: BilingualText;
    description: BilingualText;
    photos: {
      src: string;
      alt: BilingualText;
      width: number;
      height: number;
    }[];
  };
};

export type MeituanCaseStudy = {
  role: BilingualText;
  statement: BilingualText;
  galleryIntro: BilingualText;
  metric: {
    value: string;
    label: BilingualText;
  };
  gallery: {
    src: string;
    alt: BilingualText;
    caption: BilingualText;
    width: number;
    height: number;
    layout: "lead" | "detail" | "set" | "closing";
  }[];
};

export type PortfolioProject = {
  slug: string;
  number: string;
  title: string;
  titleZh?: string;
  heroImages?: string[];
  category: BilingualText;
  period: string;
  location: BilingualText;
  overview: BilingualText;
  intro: BilingualText;
  responsibilities: {
    zh: string[];
    en: string[];
  };
  caseStudy?: ProjectCaseStudy;
  intuitoCaseStudy?: IntuitoCaseStudy;
  connellyCaseStudy?: ConnellyCaseStudy;
  hotliCaseStudy?: HotliCaseStudy;
  meituanCaseStudy?: MeituanCaseStudy;
  tone: "sage" | "rose" | "clay" | "blue" | "moss" | "ink";
};

const portfolioProjectArchive: PortfolioProject[] = [
  {
    slug: "chagee-china",
    number: "01",
    title: "CHAGEE China",
    titleZh: "霸王茶姬",
    heroImages: [
      "/works/projects/chagee/chagee-01.webp",
      "/works/projects/chagee/chagee-02.webp",
      "/works/projects/chagee/chagee-03.webp",
    ],
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
      zh: "在 CHAGEE China 社交媒体部门参与品牌官方小红书内容与运营，并负责剪辑“姬姐日记”和“姬茶队长”两个员工 IP 账号的视频。",
      en: "A social-media content role at CHAGEE China spanning the brand’s official Xiaohongshu presence and operations. The work also included editing videos for two employee-IP accounts, Sister Ji’s Diary and Captain Ji.",
    },
    caseStudy: {
      brandStatement: {
        zh: "霸王茶姬是一个茶饮品牌。",
        en: "CHAGEE is a beverage brand.",
      },
      role: {
        zh: "社交媒体内容运营",
        en: "Social Media Content Operations",
      },
      heroSummary: {
        zh: "内容拍摄 · 创意策划支持 · 活动统筹",
        en: "Content capture · Creative planning support · Campaign coordination",
      },
      headline: {
        zh: "从现场拍摄到多平台上线，让每一次活动内容顺畅落地。",
        en: "Campaign content shaped from the first capture to a seamless multi-platform rollout.",
      },
      campaignRole: {
        zh: "我的工作包括内容拍摄、创意策划支持，以及准备流程表与项目排期，确保每个活动在不同平台顺利上线。",
        en: "My role included capturing content, supporting creative planning, and preparing rundowns and schedules to ensure each campaign rolled out seamlessly across platforms.",
      },
      campaigns: [
        {
          zh: "“夏日第一杯”",
          en: "“The First Cup of Summer”",
        },
        {
          zh: "孙燕姿全球品牌代言人官宣",
          en: "The Stefanie Sun Global Ambassador announcement",
        },
        {
          zh: "宠物季",
          en: "Pet Season",
        },
        {
          zh: "新品上市",
          en: "New-product launches",
        },
      ],
      archiveIntro: {
        zh: "我在霸王茶姬工作期间参与拍摄与制作的活动及社交媒体视觉素材。",
        en: "Selected campaign and social-media visuals captured and produced during my time with CHAGEE China.",
      },
      gallery: [
        {
          src: "/works/projects/chagee/chagee-01.webp",
          alt: {
            zh: "绿色树叶与蝴蝶主题的霸王茶姬产品视觉",
            en: "CHAGEE product visual with green leaves and butterflies",
          },
        },
        {
          src: "/works/projects/chagee/chagee-02.webp",
          alt: {
            zh: "霸王茶姬门店内的饮品与餐食活动视觉",
            en: "Campaign visual featuring CHAGEE drinks and food in a teahouse",
          },
        },
        {
          src: "/works/projects/chagee/chagee-03.webp",
          alt: {
            zh: "霸王茶姬门店内的杯子毛绒挂件陈列",
            en: "CHAGEE cup plush collectibles displayed in a store",
          },
        },
        {
          src: "/works/projects/chagee/chagee-04.webp",
          alt: {
            zh: "两杯霸王茶姬果味饮品的社交媒体视觉",
            en: "Social visual featuring two CHAGEE fruit beverages",
          },
        },
        {
          src: "/works/projects/chagee/chagee-05.webp",
          alt: {
            zh: "绿色草地背景中的霸王茶姬花卉杯",
            en: "CHAGEE floral cup photographed against a green field",
          },
        },
        {
          src: "/works/projects/chagee/chagee-06.webp",
          alt: {
            zh: "绿叶间的霸王茶姬花卉徽章",
            en: "CHAGEE floral badge photographed among green foliage",
          },
        },
      ],
      accountArchive: {
        intro: {
          zh: "为小红书与抖音账号进行视频剪辑及图文内容制作。",
          en: "Edited short-form video and produced graphic posts for Xiaohongshu and Douyin accounts.",
        },
        groups: [
          {
            title: {
              zh: "姬姐日记",
              en: "Sister Ji’s Diary",
            },
            platform: {
              zh: "小红书 · 抖音",
              en: "Xiaohongshu · Douyin",
            },
            images: [
              {
                src: "/works/projects/chagee-accounts/chagee-account-01.webp",
                alt: {
                  zh: "姬姐日记抖音账号主页截图",
                  en: "Sister Ji’s Diary Douyin account profile",
                },
                width: 1206,
                height: 2622,
              },
              {
                src: "/works/projects/chagee-accounts/chagee-account-02.webp",
                alt: {
                  zh: "姬姐日记抖音内容网格截图",
                  en: "Sister Ji’s Diary Douyin content grid",
                },
                width: 1206,
                height: 2622,
              },
              {
                src: "/works/projects/chagee-accounts/chagee-account-03.webp",
                alt: {
                  zh: "姬姐日记小红书账号主页截图",
                  en: "Sister Ji’s Diary Xiaohongshu account profile",
                },
                width: 1206,
                height: 2622,
              },
            ],
          },
          {
            title: {
              zh: "姬茶队长",
              en: "Captain Ji",
            },
            platform: {
              zh: "小红书 · 抖音",
              en: "Xiaohongshu · Douyin",
            },
            images: [
              {
                src: "/works/projects/chagee-accounts/chagee-account-04.webp",
                alt: {
                  zh: "姬茶队长抖音账号主页截图",
                  en: "Captain Ji Douyin account profile",
                },
                width: 1206,
                height: 2622,
              },
              {
                src: "/works/projects/chagee-accounts/chagee-account-05.webp",
                alt: {
                  zh: "姬茶队长抖音内容网格截图",
                  en: "Captain Ji Douyin content grid",
                },
                width: 1206,
                height: 2622,
              },
            ],
          },
        ],
      },
    },
    responsibilities: {
      zh: [
        "负责品牌官方小红书账号的日常图文选题、脚本与拍摄。",
        "完成 10+ 条“姬姐日记”内容，从创意、拍摄和剪辑推进至发布。",
        "整理“姬姐日记”与“姬茶队长”的小红书、抖音数据，结合观众画像和完播率支持后续优化。",
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
    slug: "connelly-partners",
    number: "03",
    title: "Connelly Partners",
    heroImages: [
      "/works/projects/connelly-spindrift/spindrift-wide.webp",
      "/works/projects/connelly-spindrift/spindrift-display.webp",
      "/works/projects/connelly-spindrift/spindrift-poster.webp",
    ],
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
    connellyCaseStudy: {
      campaignTitle: {
        zh: "Spindrift「美食评论家」",
        en: "Spindrift “Food Critics”",
      },
      campaignIntro: {
        zh: "我为 Spindrift 构思「美食评论家」创意概念，执导广告正片，并主导社交媒体视觉物料设计。",
        en: "I created Spindrift’s Food Critic concept, directed the commercial, and led the social asset design.",
      },
      archiveIntro: {
        zh: "广告主视觉、户外展示应用与最终正片。",
        en: "Campaign art direction, out-of-home applications, and the final commercial.",
      },
      images: [
        {
          src: "/works/projects/connelly-spindrift/spindrift-wide.webp",
          alt: {
            zh: "Spindrift 树莓青柠口味美食评论家广告主视觉",
            en: "Spindrift Raspberry Lime Food Critics campaign visual",
          },
          caption: {
            zh: "广告主视觉 / 树莓青柠",
            en: "Campaign visual / Raspberry Lime",
          },
          width: 1302,
          height: 1028,
          layout: "wide",
        },
        {
          src: "/works/projects/connelly-spindrift/spindrift-display.webp",
          alt: {
            zh: "Spindrift 柠檬青柠广告在数字展示屏上的场景效果",
            en: "Spindrift Lemon Limeade campaign shown on a digital display",
          },
          caption: {
            zh: "户外展示应用 / 柠檬青柠",
            en: "Out-of-home display / Lemon Limeade",
          },
          width: 1814,
          height: 1016,
          layout: "landscape",
        },
        {
          src: "/works/projects/connelly-spindrift/spindrift-poster.webp",
          alt: {
            zh: "带手写文案的 Spindrift 柠檬青柠竖版海报",
            en: "Spindrift Lemon Limeade poster with handwritten copy",
          },
          caption: {
            zh: "手写海报 / 柠檬青柠",
            en: "Handwritten poster / Lemon Limeade",
          },
          width: 1070,
          height: 1680,
          layout: "portrait",
        },
        {
          src: "/works/projects/connelly-spindrift/spindrift-billboard.webp",
          alt: {
            zh: "Spindrift 青柠广告在室内大型广告牌上的展示效果",
            en: "Spindrift Lime campaign displayed on a large indoor billboard",
          },
          caption: {
            zh: "大型广告牌应用 / 青柠",
            en: "Billboard application / Lime",
          },
          width: 1852,
          height: 1040,
          layout: "wide",
        },
        {
          src: "/works/projects/connelly-spindrift/spindrift-shelter.webp",
          alt: {
            zh: "Spindrift 柠檬青柠广告在公交候车亭上的展示效果",
            en: "Spindrift Lemon Limeade campaign displayed at a bus shelter",
          },
          caption: {
            zh: "公交候车亭应用 / 柠檬青柠",
            en: "Bus shelter application / Lemon Limeade",
          },
          width: 1852,
          height: 1046,
          layout: "landscape-right",
        },
      ],
      film: {
        src: "/works/projects/connelly-spindrift/spindrift-final.mp4",
        poster: "/works/projects/connelly-spindrift/spindrift-wide.webp",
        label: {
          zh: "广告正片",
          en: "Final commercial",
        },
        title: {
          zh: "Spindrift：美食评论家",
          en: "Spindrift: Food Critics",
        },
      },
    },
    tone: "clay",
  },
  {
    slug: "hotli-live",
    number: "04",
    title: "Hotli.live",
    heroImages: [
      "/works/projects/hotli-live/coofandy-01.webp",
      "/works/projects/hotli-live/coofandy-02.webp",
      "/works/projects/hotli-live/coofandy-04.webp",
    ],
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
    hotliCaseStudy: {
      intro: {
        zh: "为 Hotli.Live 制作的短视频剪辑与社交内容片段。",
        en: "Short-form edits and social content created for Hotli.Live.",
      },
      videos: [
        {
          src: "/works/projects/hotli-live/hotli-video-01.mp4",
          poster: "/works/projects/hotli-live/poster-01.webp",
          posterWidth: 576,
          posterHeight: 1024,
          orientation: "portrait",
          title: {
            zh: "短视频 01",
            en: "Short-form 01",
          },
        },
        {
          src: "/works/projects/hotli-live/hotli-video-02.mp4",
          poster: "/works/projects/hotli-live/poster-02.webp",
          posterWidth: 576,
          posterHeight: 1024,
          orientation: "portrait",
          title: {
            zh: "短视频 02",
            en: "Short-form 02",
          },
        },
        {
          src: "/works/projects/hotli-live/hotli-video-03.mp4",
          poster: "/works/projects/hotli-live/poster-03.webp",
          posterWidth: 720,
          posterHeight: 1280,
          orientation: "portrait",
          title: {
            zh: "短视频 03",
            en: "Short-form 03",
          },
        },
        {
          src: "/works/projects/hotli-live/hotli-video-04.mp4",
          poster: "/works/projects/hotli-live/poster-04.webp",
          posterWidth: 720,
          posterHeight: 1280,
          orientation: "portrait",
          title: {
            zh: "短视频 04",
            en: "Short-form 04",
          },
        },
        {
          src: "/works/projects/hotli-live/hotli-video-05.mp4",
          poster: "/works/projects/hotli-live/poster-05.webp",
          posterWidth: 720,
          posterHeight: 1280,
          orientation: "portrait",
          title: {
            zh: "短视频 05",
            en: "Short-form 05",
          },
        },
      ],
      coofandy: {
        title: {
          zh: "毕业特辑",
          en: "Graduation Editorial",
        },
        description: {
          zh: "为男装品牌 COOFANDY 拍摄的毕业特辑。",
          en: "A graduation editorial photographed for menswear brand COOFANDY.",
        },
        photos: [
          {
            src: "/works/projects/hotli-live/coofandy-01.webp",
            alt: {
              zh: "身穿学士服与西装的毕业生户外肖像",
              en: "Outdoor graduation portrait in academic dress and tailoring",
            },
            width: 1600,
            height: 2400,
          },
          {
            src: "/works/projects/hotli-live/coofandy-02.webp",
            alt: {
              zh: "两位身穿学士服与西装的毕业生室内肖像",
              en: "Editorial portrait of two graduates in academic dress and tailoring",
            },
            width: 1600,
            height: 2400,
          },
          {
            src: "/works/projects/hotli-live/coofandy-03.webp",
            alt: {
              zh: "手持学位帽的毕业生户外肖像",
              en: "Outdoor portrait of a graduate holding a mortarboard",
            },
            width: 1600,
            height: 2400,
          },
          {
            src: "/works/projects/hotli-live/coofandy-04.webp",
            alt: {
              zh: "COOFANDY 毕业活动合影",
              en: "COOFANDY graduation event portrait",
            },
            width: 1601,
            height: 2400,
          },
        ],
      },
    },
    tone: "blue",
  },
  {
    slug: "meituan",
    number: "05",
    title: "Meituan",
    titleZh: "美团",
    heroImages: [
      "/works/projects/meituan-live/meituan-live-01.webp",
      "/works/projects/meituan-live/meituan-live-03.webp",
      "/works/projects/meituan-live/meituan-live-04.webp",
    ],
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
      zh: "以场景、脚本与现场节奏共同塑造的美团品牌直播。",
      en: "Meituan branded livestreams shaped through set styling, scripts and live pacing.",
    },
    intro: {
      zh: "主要负责直播间置景和脚本撰写，并围绕品牌信息与嘉宾互动组织现场内容；直播场均观看人数超过 100 万。",
      en: "I was primarily responsible for livestream set styling and scriptwriting, shaping live content around brand messaging and guest interaction. The streams averaged more than one million viewers per session.",
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
    meituanCaseStudy: {
      role: {
        zh: "直播间置景与脚本撰写",
        en: "Livestream Set Styling & Scriptwriting",
      },
      statement: {
        zh: "我主要负责直播间置景和脚本撰写，并根据品牌信息、嘉宾互动和镜头需求安排现场内容。系列直播场均观看人数超过 100 万。",
        en: "I led livestream set styling and scriptwriting, organizing the on-camera experience around brand messaging, guest interaction and shot requirements. The series averaged more than one million viewers per livestream.",
      },
      galleryIntro: {
        zh: "从整体直播场景到桌面陈设、灯光氛围与镜头细节。",
        en: "From the overall livestream environment to tabletop styling, lighting and camera-facing details.",
      },
      metric: {
        value: "1M+",
        label: {
          zh: "场均观看人数",
          en: "average viewers per livestream",
        },
      },
      gallery: [
        {
          src: "/works/projects/meituan-live/meituan-live-01.webp",
          alt: {
            zh: "美团直播团队在完成置景的直播间合影",
            en: "Meituan livestream team photographed on the completed set",
          },
          caption: {
            zh: "直播团队与完成后的场景",
            en: "Livestream team on the completed set",
          },
          width: 1080,
          height: 1440,
          layout: "lead",
        },
        {
          src: "/works/projects/meituan-live/meituan-live-02.webp",
          alt: {
            zh: "直播间桌面花卉、水果、烛台与灯光陈设细节",
            en: "Tabletop flowers, fruit, candleholders and lighting details on set",
          },
          caption: {
            zh: "桌面陈设与灯光细节",
            en: "Table styling and lighting detail",
          },
          width: 1800,
          height: 2400,
          layout: "detail",
        },
        {
          src: "/works/projects/meituan-live/meituan-live-03.webp",
          alt: {
            zh: "带帐篷、灯串与露营道具的直播间场景",
            en: "Livestream set with a tent, string lights and camping props",
          },
          caption: {
            zh: "露营主题直播间置景",
            en: "Camping-themed livestream set",
          },
          width: 1350,
          height: 2400,
          layout: "set",
        },
        {
          src: "/works/projects/meituan-live/meituan-live-04.webp",
          alt: {
            zh: "以夏日水果、植物与暖光布置的直播桌面",
            en: "Livestream table styled with summer fruit, plants and warm lighting",
          },
          caption: {
            zh: "夏日主题桌面置景",
            en: "Summer-themed tabletop set",
          },
          width: 1800,
          height: 2400,
          layout: "closing",
        },
      ],
    },
    tone: "moss",
  },
  {
    slug: "intuito",
    number: "06",
    title: "Intuito",
    titleZh: "观在",
    heroImages: [
      "/works/projects/intuito/intuito-01.webp",
      "/works/projects/intuito/intuito-03.webp",
      "/works/projects/intuito/intuito-06.webp",
    ],
    category: {
      zh: "品牌联合创立与视觉策略",
      en: "Brand Direction & Social Strategy",
    },
    period: "Co-founder",
    location: {
      zh: "面向全球市场",
      en: "Global-facing",
    },
    overview: {
      zh: "为观在建立面向国际受众的社交媒体策略与统一视觉系统。",
      en: "A global-facing social media and visual system built for Intuito’s move into overseas markets.",
    },
    intro: {
      zh: "从社交媒体策略、字体与色彩方向，到产品摄影和文化叙事，我负责观在完整的数字形象与品牌表达。",
      en: "From social strategy, typography and color direction to product photography and cultural storytelling, I led Intuito’s complete digital presence and brand expression.",
    },
    responsibilities: {
      zh: [
        "设计并执行面向全球市场的社交媒体策略，持续产出平面设计、产品视觉与文化叙事内容。",
        "建立涵盖字体、色彩方向和产品摄影造型的统一视觉系统。",
        "分析互动数据并优化发布时间、内容类别与表达语气，使平均帖子浏览量提升 30%。",
      ],
      en: [
        "Designed and executed a global-facing social media strategy across graphics, product visuals and cultural storytelling.",
        "Built a cohesive visual system spanning typography, color direction and product photography styling.",
        "Used engagement data to refine scheduling, content categories and tone, increasing average post views by 30%.",
      ],
    },
    intuitoCaseStudy: {
      brandStatement: {
        zh: "为全球受众打造观在的视觉身份。",
        en: "Building Intuito’s visual identity for global audiences.",
      },
      role: {
        zh: "联合创始人",
        en: "Co-founder",
      },
      heroSummary: {
        zh: "全球社交策略 · 视觉方向 · 品牌表达",
        en: "Global Social Strategy · Visual Direction · Brand Expression",
      },
      creativeStatement: {
        zh: "我设计并执行了面向全球市场的社交媒体策略，持续产出针对国际受众的平面设计、产品视觉与文化叙事内容。从字体与色彩方向，到产品摄影造型，我建立了连贯的视觉系统，塑造品牌的美学基础。",
        en: "I designed and executed our global-facing social media strategy, producing a consistent stream of graphics, product visuals, and cultural storytelling posts tailored for international audiences. From typography and color direction to product photography styling, I created cohesive visual systems that shaped the brand’s aesthetic foundation.",
      },
      strategyStatement: {
        zh: "在策略层面，我通过分析互动数据优化发布时间、内容类别与表达语气，使平均帖子浏览量提升了 30%。在观在准备进入海外市场的过程中，我主导了品牌完整的数字形象与品牌表达。",
        en: "On the strategic side, I analyzed engagement data to refine posting schedules, content categories, and messaging tone, resulting in a 30% increase in average post views. I led Intuito’s entire digital presence and brand expression as the company prepared to move into overseas markets.",
      },
      metric: {
        value: "30%",
        label: {
          zh: "平均帖子浏览量提升",
          en: "Increase in average post views",
        },
      },
      galleryIntro: {
        zh: "产品摄影、包装系统、色彩方向与文化叙事构成的视觉档案。",
        en: "A visual archive of product photography, packaging systems, color direction and cultural storytelling.",
      },
      gallery: [
        {
          src: "/works/projects/intuito/intuito-01.webp",
          alt: {
            zh: "陈列在木桌下方的观在产品包装系列",
            en: "A series of Intuito product packages arranged beneath a wooden desk",
          },
          caption: {
            zh: "包装系统 / 产品系列",
            en: "Packaging system / Product range",
          },
          width: 1170,
          height: 1543,
          layout: "medium",
        },
        {
          src: "/works/projects/intuito/intuito-02.webp",
          alt: {
            zh: "阳光照射下的观在产品静物摄影",
            en: "Intuito product still life photographed in a beam of sunlight",
          },
          caption: {
            zh: "产品摄影 / 光影",
            en: "Product photography / Light",
          },
          width: 1170,
          height: 1516,
          layout: "portrait",
        },
        {
          src: "/works/projects/intuito/intuito-03.webp",
          alt: {
            zh: "深蓝色桌面上的观在产品与茶器陈列",
            en: "Intuito products and tea objects arranged on a deep-blue table",
          },
          caption: {
            zh: "空间造型 / 产品场景",
            en: "Spatial styling / Product world",
          },
          width: 1170,
          height: 869,
          layout: "wide",
        },
        {
          src: "/works/projects/intuito/intuito-04.webp",
          alt: {
            zh: "展示架上的青绿色观在产品包装",
            en: "Teal Intuito product packaging displayed on a wooden rack",
          },
          caption: {
            zh: "色彩方向 / 陈列",
            en: "Color direction / Display",
          },
          width: 1170,
          height: 1548,
          layout: "portrait",
        },
        {
          src: "/works/projects/intuito/intuito-05.webp",
          alt: {
            zh: "陶瓷器皿旁点燃的观在线香",
            en: "Intuito incense burning beside textured ceramic vessels",
          },
          caption: {
            zh: "文化细节 / 氛围",
            en: "Cultural detail / Atmosphere",
          },
          width: 1170,
          height: 1543,
          layout: "medium",
        },
        {
          src: "/works/projects/intuito/intuito-06.webp",
          alt: {
            zh: "木质展示架上的青绿色与紫色观在产品",
            en: "Teal and purple Intuito products on a wooden display rack",
          },
          caption: {
            zh: "产品造型 / 视觉系统",
            en: "Product styling / Visual system",
          },
          width: 1170,
          height: 772,
          layout: "wide",
        },
        {
          src: "/works/projects/intuito/intuito-07.webp",
          alt: {
            zh: "线香、铜制器物与棕色纸品的文化场景",
            en: "Cultural still life with incense, brass objects and brown paper goods",
          },
          caption: {
            zh: "文化叙事 / 场景",
            en: "Cultural storytelling / Scene",
          },
          width: 1086,
          height: 1427,
          layout: "portrait",
        },
        {
          src: "/works/projects/intuito/intuito-08.webp",
          alt: {
            zh: "红色托盘中排列的观在产品包装",
            en: "Intuito product packages arranged inside a red tray",
          },
          caption: {
            zh: "包装系列 / 细节",
            en: "Packaging range / Detail",
          },
          width: 1038,
          height: 1410,
          layout: "portrait",
        },
        {
          src: "/works/projects/intuito/intuito-09.webp",
          alt: {
            zh: "深色木桌上的观在产品静物",
            en: "Intuito product still life on a dark wooden table",
          },
          caption: {
            zh: "产品摄影 / 静物",
            en: "Product photography / Still life",
          },
          width: 1029,
          height: 1543,
          layout: "portrait",
        },
      ],
    },
    tone: "ink",
  },
];

export const portfolioProjects: PortfolioProject[] = portfolioProjectArchive.map(
  (project, index) => ({
    ...project,
    number: String(index + 1).padStart(2, "0"),
  }),
);
