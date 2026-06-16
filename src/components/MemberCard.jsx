import { CalendarCheck, ChevronRight, Dumbbell, Scale, Target } from 'lucide-react';
import { getWeightStats } from '../utils/fitness.js';

export default function MemberCard({ member, onCheckin, onUpdateWeight, onViewDetail }) {
  const stats = getWeightStats(member);

  return (
    <article className="soft-card rounded-[1.75rem] bg-white p-5 sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br ${member.color} text-2xl shadow-md`}>{member.avatar}</div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">{member.name}</h2>
            <p className="text-sm font-semibold text-sky-600">本周已打卡 {member.weeklyCheckins} 天</p>
          </div>
        </div>
        <CalendarCheck className="text-sky-400" />
      </div>

      <div className="grid grid-cols-2 gap-3.5 text-sm">
        <Metric icon={<Scale size={16} />} label="当前体重" value={`${member.currentWeight} kg`} emphasis />
        <Metric icon={<Target size={16} />} label="目标进度" value={`${stats.progress}%`} emphasis />
        <Metric icon={<Dumbbell size={16} />} label="打卡天数" value={`${member.weeklyCheckins}/7 天`} emphasis />
        <Metric label="已减重量" value={`${stats.lost} kg`} emphasis />
        <Metric icon={<Scale size={16} />} label="初始体重" value={`${member.initialWeight} kg`} />
        <Metric label="距离目标" value={`${stats.remaining} kg`} />
      </div>

      <div className="mt-6 rounded-3xl bg-sky-50/80 p-4">
        <div className="mb-3 flex justify-between text-sm font-bold text-slate-700">
          <span>完成目标进度</span>
          <span className="text-sky-600">{stats.progress}%</span>
        </div>
        <div className="h-4 rounded-full bg-white shadow-inner">
          <div className="h-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" style={{ width: `${stats.progress}%` }} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 min-[390px]:grid-cols-3">
        <ActionButton onClick={() => onCheckin(member.id)} label="今日打卡" primary />
        <ActionButton onClick={() => onUpdateWeight(member.id)} label="更新体重" />
        <ActionButton onClick={() => onViewDetail(member.id)} label="查看详情" icon={<ChevronRight size={15} />} />
      </div>
    </article>
  );
}

function Metric({ icon, label, value, emphasis = false }) {
  return (
    <div className={`rounded-2xl p-3.5 ${emphasis ? 'bg-gradient-to-br from-sky-100 to-cyan-50 ring-1 ring-cyan-100' : 'bg-sky-50/80'}`}>
      <div className="mb-1 flex items-center gap-1 text-xs text-slate-500">{icon}{label}</div>
      <div className={`font-extrabold ${emphasis ? 'text-xl text-cyan-600' : 'text-lg text-slate-800'}`}>{value}</div>
    </div>
  );
}

function ActionButton({ label, onClick, primary = false, icon }) {
  return (
    <button onClick={onClick} className={`flex min-h-14 items-center justify-center gap-1.5 rounded-2xl px-3 text-sm font-bold transition active:scale-95 ${primary ? 'bg-sky-500 text-white shadow-lg shadow-sky-200' : 'bg-sky-50 text-sky-700 ring-1 ring-sky-100'}`}>
      {label}{icon}
    </button>
  );
}
