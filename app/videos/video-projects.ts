export type VideoLanguage = "zh" | "en";

type BilingualText = {
  zh: string;
  en: string;
};

export type VideoProject = {
  slug: string;
  number: string;
  title: string;
  genre: BilingualText;
  role: BilingualText;
  date: BilingualText;
  synopsis: BilingualText;
  poster: string;
  videoSrc?: string;
  tone: "sage" | "rose" | "blue";
};

export const videoProjects: VideoProject[] = [
  {
    slug: "fly-out",
    number: "01",
    title: "Fly Out",
    genre: {
      zh: "叙事短片",
      en: "Narrative Short",
    },
    role: {
      zh: "导演",
      en: "Director",
    },
    date: {
      zh: "2025 年 12 月",
      en: "Dec. 2025",
    },
    synopsis: {
      zh: "一部 AI 生成叙事短片，讲述一名自闭症男孩被教室的噪音与混乱压得喘不过气。当现实坍塌成恐惧，他遁入水彩梦境，并在那里化身为一只翠鸟。",
      en: "An AI-generative short that follows an autistic boy who becomes overwhelmed by the noise and chaos of his classroom. When reality collapses into fear, he slips into a watercolor dreamscape where he transforms into a kingfisher.",
    },
    poster: "/works/video-fly-out-cover.png",
    videoSrc: "/works/videos/fly-out.mp4",
    tone: "sage",
  },
  {
    slug: "lift-me-up",
    number: "02",
    title: "Lift Me Up",
    genre: {
      zh: "音乐视频",
      en: "Music Video",
    },
    role: {
      zh: "导演 / 美术指导 / 剪辑",
      en: "Director / Production Designer / Editor",
    },
    date: {
      zh: "2025 年 5 月",
      en: "May. 2025",
    },
    synopsis: {
      zh: "这支音乐视频讲述一个女孩身处精心构筑却被严密控制的世界。当她逐渐意识到塑造自己生活的无形之手，她开始质疑什么是真实，什么早已被替她选择。",
      en: "The music video follows a girl caught in a beautifully constructed but tightly controlled world. As she becomes aware of the invisible hands shaping her life, she starts to question what is real and what has been chosen for her.",
    },
    poster: "/works/video-lift-me-up.avif",
    videoSrc: "/works/videos/lift-me-up-4m21.mp4",
    tone: "rose",
  },
  {
    slug: "the-otherrealm",
    number: "03",
    title: "The Otherrealm",
    genre: {
      zh: "3D 动画",
      en: "3D Animation",
    },
    role: {
      zh: "导演",
      en: "Director",
    },
    date: {
      zh: "2024 年 11 月",
      en: "Nov. 2024",
    },
    synopsis: {
      zh: "几个小精灵在夜幕降临后飘进房间。它们俏皮的相遇创造出一个短暂而迷人的时刻，让熟悉的世界突然变得鲜活而神秘。",
      en: "A handful of little spirits drift into a room after dark. Their playful encounters create a brief, enchanting moment where the familiar world feels suddenly alive and mysterious.",
    },
    poster: "/works/video-otherrealm.avif",
    videoSrc: "/works/videos/the-otherrealm-1m10.mp4",
    tone: "blue",
  },
];
