export interface ResultType {
  key: string;
  label: string;
  emoji: string;
  color: string;
  diagnosis: string;
  traits: string[];
  advice: string;
}

export const RESULTS: Record<string, ResultType[]> = {
  lazy: [
    {
      key: 'lazy-low',
      label: '偶尔躺平型',
      emoji: '🛌',
      color: '#94a3b8',
      diagnosis: '你还能动起来，只是不想。',
      traits: ['节能', '拖延', '幸存者'],
      advice: '累了就躺，但别忘了偶尔坐起来。',
    },
    {
      key: 'lazy-mid',
      label: '低电量模式',
      emoji: '🪫',
      color: '#facc15',
      diagnosis: '你的身体在线，灵魂已经离线。',
      traits: ['省电', '佛系', '被动'],
      advice: '允许自己休息，但不要休息到关机。',
    },
    {
      key: 'lazy-high',
      label: '确诊为床',
      emoji: '🛏️',
      color: '#a78bfa',
      diagnosis: '你和床的羁绊，比任何感情都深。',
      traits: ['躺平', '摆烂', '舒适区居民'],
      advice: '世界不会因为你的缺席而停止，但它也不会因为你而更好。',
    },
  ],
  try: [
    {
      key: 'try-low',
      label: '间歇性努力型',
      emoji: '⏳',
      color: '#38bdf8',
      diagnosis: '你会努力，但持续不了三天。',
      traits: ['flag', '三分钟', '重启中'],
      advice: '把目标切成小片，小到自己都不好意思放弃。',
    },
    {
      key: 'try-mid',
      label: '认真卷过型',
      emoji: '🏃',
      color: '#4ade80',
      diagnosis: '你认真过，但世界没给你掌声。',
      traits: ['自律', '焦虑', 'KPI 人'],
      advice: '别用别人的节奏丈量自己。',
    },
    {
      key: 'try-high',
      label: '永动机型',
      emoji: '🔋',
      color: '#f472b6',
      diagnosis: '你在卷，但不知道是不是在卷自己。',
      traits: ['卷王', '高效', '潜在 burnout'],
      advice: '休息一下不算输，机器也需要保养。',
    },
  ],
  crazy: [
    {
      key: 'crazy-low',
      label: '抽象预备役',
      emoji: '🎭',
      color: '#fb923c',
      diagnosis: '你偶尔抽象，但还在可控范围。',
      traits: ['玩梗', '反差', '潜在社恐'],
      advice: '继续观察，抽象是天赋。',
    },
    {
      key: 'crazy-mid',
      label: '行为艺术型',
      emoji: '🎨',
      color: '#f87171',
      diagnosis: '你的生活本身就是一场行为艺术。',
      traits: ['发疯', '无厘头', '梗王'],
      advice: '继续保持，但别吓到身边的人。',
    },
    {
      key: 'crazy-high',
      label: '超现实主义存在',
      emoji: '🌀',
      color: '#FF00A0',
      diagnosis: '你的世界没有逻辑，只有情绪。',
      traits: ['抽象', '不可预测', '互联网精神'],
      advice: '你不需要被理解，你只需要被截图。',
    },
  ],
  emo: [
    {
      key: 'emo-low',
      label: '表面稳定型',
      emoji: '😐',
      color: '#cbd5e1',
      diagnosis: '你看起来正常，只是在硬撑。',
      traits: ['内敛', '敏感', '观察者'],
      advice: '偶尔让别人知道你在想什么。',
    },
    {
      key: 'emo-mid',
      label: '深夜 emo 型',
      emoji: '🌙',
      color: '#818cf8',
      diagnosis: '白天的你没事，晚上十二点开始想人生。',
      traits: ['夜行', '回忆', '情绪周期'],
      advice: '少听慢歌，早点睡。',
    },
    {
      key: 'emo-high',
      label: '确诊为活人',
      emoji: '🌧️',
      color: '#60a5fa',
      diagnosis: '你感受一切，包括那些没必要的。',
      traits: ['高敏', '内耗', '共情过载'],
      advice: '不是所有人所有事都需要你理解。',
    },
  ],
};

export function calculateResult(scores: Record<string, number>): ResultType {
  const maxKey = Object.keys(scores).reduce((a, b) => (scores[a] > scores[b] ? a : b));
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const level = total <= 8 ? 0 : total <= 14 ? 1 : 2;
  return RESULTS[maxKey][level];
}

export function getScoreLevel(total: number): number {
  if (total <= 8) return 0;
  if (total <= 14) return 1;
  return 2;
}

export function getLevelLabel(level: number): string {
  return ['轻度', '中度', '重度'][level] ?? '未知';
}
