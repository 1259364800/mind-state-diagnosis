export interface Option {
  text: string;
  scores: Record<string, number>;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: '周一早上闹钟响了，你：',
    options: [
      { text: '再睡一集，人生不急', scores: { lazy: 3, crazy: 0, emo: 1, try: 0 } },
      { text: '弹射起床，又是卷的一天', scores: { lazy: 0, crazy: 0, emo: 0, try: 3 } },
      { text: '按掉继续焦虑，睁眼躺平', scores: { lazy: 2, crazy: 0, emo: 2, try: 0 } },
      { text: '闹钟是什么？我根本没睡', scores: { lazy: 0, crazy: 3, emo: 2, try: 0 } },
    ],
  },
  {
    id: 2,
    text: '朋友约你周末出门，你：',
    options: [
      { text: '婉拒，床是我的信仰', scores: { lazy: 3, crazy: 0, emo: 0, try: 0 } },
      { text: '盛装出席，不能输', scores: { lazy: 0, crazy: 1, emo: 0, try: 3 } },
      { text: '去了，但全程想回家', scores: { lazy: 1, crazy: 0, emo: 2, try: 0 } },
      { text: '临时鸽子，编个抽象理由', scores: { lazy: 2, crazy: 3, emo: 0, try: 0 } },
    ],
  },
  {
    id: 3,
    text: '工作群里 @ 你，你：',
    options: [
      { text: '已读不回，装死', scores: { lazy: 2, crazy: 1, emo: 1, try: 0 } },
      { text: '秒回「收到」', scores: { lazy: 0, crazy: 0, emo: 0, try: 3 } },
      { text: '回一个阴阳表情包', scores: { lazy: 0, crazy: 3, emo: 0, try: 0 } },
      { text: '紧张到反复看，不敢回', scores: { lazy: 0, crazy: 0, emo: 3, try: 1 } },
    ],
  },
  {
    id: 4,
    text: '深夜刷手机，你：',
    options: [
      { text: '越刷越清醒，再刷一集', scores: { lazy: 1, crazy: 2, emo: 1, try: 0 } },
      { text: '到点就睡，自律达人', scores: { lazy: 0, crazy: 0, emo: 0, try: 3 } },
      { text: '点开奇怪视频，进入异次元', scores: { lazy: 0, crazy: 3, emo: 0, try: 0 } },
      { text: '开始回忆人生，越想越 emo', scores: { lazy: 0, crazy: 0, emo: 3, try: 0 } },
    ],
  },
  {
    id: 5,
    text: '看到朋友圈有人在健身，你：',
    options: [
      { text: '翻个身，继续躺', scores: { lazy: 3, crazy: 0, emo: 0, try: 0 } },
      { text: '点赞收藏，等于练过', scores: { lazy: 2, crazy: 0, emo: 0, try: 1 } },
      { text: '跟着练，不能落后', scores: { lazy: 0, crazy: 0, emo: 0, try: 3 } },
      { text: '焦虑但不动，心里骂自己', scores: { lazy: 1, crazy: 0, emo: 2, try: 1 } },
    ],
  },
  {
    id: 6,
    text: '外卖迟到 30 分钟，你：',
    options: [
      { text: '无所谓，继续等', scores: { lazy: 3, crazy: 0, emo: 0, try: 0 } },
      { text: '打电话，气势汹汹', scores: { lazy: 0, crazy: 2, emo: 1, try: 2 } },
      { text: '退款，但饿死', scores: { lazy: 1, crazy: 2, emo: 2, try: 0 } },
      { text: '给差评小作文', scores: { lazy: 0, crazy: 3, emo: 2, try: 0 } },
    ],
  },
  {
    id: 7,
    text: '有人问你「最近在忙什么」，你：',
    options: [
      { text: '活着', scores: { lazy: 2, crazy: 1, emo: 1, try: 0 } },
      { text: '在搞大项目，其实没有', scores: { lazy: 0, crazy: 0, emo: 1, try: 2 } },
      { text: '在发疯，显而易见', scores: { lazy: 0, crazy: 3, emo: 1, try: 0 } },
      { text: '不知道怎么说，沉默', scores: { lazy: 1, crazy: 0, emo: 3, try: 0 } },
    ],
  },
  {
    id: 8,
    text: '如果明天不上班，你第一件事：',
    options: [
      { text: '睡觉，睡到宇宙尽头', scores: { lazy: 3, crazy: 0, emo: 0, try: 0 } },
      { text: '出去玩，报复性消费', scores: { lazy: 0, crazy: 2, emo: 0, try: 2 } },
      { text: '刷手机，时间黑洞', scores: { lazy: 2, crazy: 2, emo: 1, try: 0 } },
      { text: '打扫房间，然后放弃', scores: { lazy: 1, crazy: 1, emo: 1, try: 2 } },
    ],
  },
];
