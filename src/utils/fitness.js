export function getWeightStats(member) {
  const totalToLose = Math.max(member.initialWeight - member.targetWeight, 0);
  const lost = Math.max(member.initialWeight - member.currentWeight, 0);
  const remaining = Math.max(member.currentWeight - member.targetWeight, 0);
  const progress = totalToLose === 0 ? 100 : Math.min(Math.round((lost / totalToLose) * 100), 100);

  return {
    lost: lost.toFixed(1),
    remaining: remaining.toFixed(1),
    progress,
  };
}

export function getMemberCheckins(checkins, memberId) {
  return checkins.filter((item) => item.memberId === memberId);
}
