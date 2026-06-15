export const members = [
  {
    id: 'me',
    name: '我',
    avatar: '🏃‍♂️',
    initialWeight: 78,
    currentWeight: 74.5,
    targetWeight: 68,
    weeklyCheckins: 4,
    color: 'from-sky-400 to-cyan-300',
    plan: ['周一：快走 35 分钟', '周三：力量训练 25 分钟', '周五：慢跑 30 分钟', '周日：拉伸恢复 20 分钟'],
  },
  {
    id: 'dad',
    name: '爸爸',
    avatar: '🚴‍♂️',
    initialWeight: 82,
    currentWeight: 79.2,
    targetWeight: 74,
    weeklyCheckins: 3,
    color: 'from-blue-400 to-sky-300',
    plan: ['周二：骑车 40 分钟', '周四：核心训练 20 分钟', '周六：公园快走 45 分钟'],
  },
  {
    id: 'mom',
    name: '妈妈',
    avatar: '🧘‍♀️',
    initialWeight: 63,
    currentWeight: 60.8,
    targetWeight: 56,
    weeklyCheckins: 5,
    color: 'from-cyan-400 to-teal-300',
    plan: ['周一：瑜伽 30 分钟', '周二：健身操 25 分钟', '周四：快走 35 分钟', '周六：拉伸 20 分钟'],
  },
];

export const checkins = [
  { id: 1, memberId: 'me', date: '2026-06-15', weight: 74.5, type: '慢跑', duration: 30, intensity: '中等', note: '状态不错，配速稳定。' },
  { id: 2, memberId: 'me', date: '2026-06-13', weight: 74.8, type: '力量训练', duration: 25, intensity: '较高', note: '深蹲完成 3 组。' },
  { id: 3, memberId: 'dad', date: '2026-06-14', weight: 79.2, type: '骑车', duration: 45, intensity: '中等', note: '晚饭后骑行很舒服。' },
  { id: 4, memberId: 'dad', date: '2026-06-12', weight: 79.5, type: '快走', duration: 40, intensity: '轻松', note: '公园两圈。' },
  { id: 5, memberId: 'mom', date: '2026-06-15', weight: 60.8, type: '瑜伽', duration: 35, intensity: '轻松', note: '肩颈放松很多。' },
  { id: 6, memberId: 'mom', date: '2026-06-14', weight: 61, type: '健身操', duration: 28, intensity: '中等', note: '跟练完成。' },
];

export const calendarDays = ['一', '二', '三', '四', '五', '六', '日'];
