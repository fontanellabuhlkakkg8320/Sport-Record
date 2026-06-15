import { CalendarCheck, ChevronRight, Dumbbell, Scale } from 'lucide-react';
import { getWeightStats } from '../utils/fitness.js';

export default function MemberCard({ member, onCheckin, onUpdateWeight, onViewDetail }) {
  const stats = getWeightStats(member);

  return (
    <article className="soft-card rounded-[2rem] bg-white p-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`grid h-16 w-16 place-items-center rounded-[1.5rem] bg-gradient-to-br ${member.color} text-2xl shadow-md`}>{member.avatar}</div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-800">{member.name}</h2>
            <p className="text-base font-semibold text-sky-700">本周已打卡 {member.weeklyCheckins} 天</p>
          </div>
        </div>
        <CalendarCheck className="text-sky-400" />
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <Metric icon={<Scale size={16} />} label="初始体重" value={`${member.initialWeight} kg`} />
        <Metric icon={<Scale size={16} />} label="当前体重" value={`${member.currentWeight} kg`} />
        <Metric label="目标体重" value={`${member.targetWeight} kg`} />
        <Metric label="已减重量" value={`${stats.lost} kg`} highlight />
        <Metric label="距离目标" value={`${stats.remaining} kg`} />
        <Metric icon={<Dumbbell size={16} />} label="本周打卡" value={`${member.weeklyCheckins}/7 天`} />
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm font-medium text-slate-600">
          <span>完成目标进度</span>
          <span>{stats.progress}%</span>
        </div>
        <div className="h-4 rounded-full bg-sky-100">
          <div className="h-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" style={{ width: `${stats.progress}%` }} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ActionButton onClick={() => onCheckin(member.id)} label="今日打卡" primary />
        <ActionButton onClick={() => onUpdateWeight(member.id)} label="更新体重" />
        <ActionButton onClick={() => onViewDetail(member.id)} label="查看详情" icon={<ChevronRight size={15} />} />
      </div>
    </article>
  );
}

function Metric({ icon, label, value, highlight = false }) {
  return (
    <div className="rounded-[1.35rem] bg-sky-50/90 p-4 ring-1 ring-sky-100">
      <div className="mb-2 flex items-center gap-1 text-xs font-semibold text-slate-500">{icon}{label}</div>
      <div className={`text-lg font-extrabold ${highlight ? 'text-cyan-600' : 'text-slate-800'}`}>{value}</div>
    </div>
  );
}

function ActionButton({ label, onClick, primary = false, icon }) {
  return (
    <button onClick={onClick} className={`flex min-h-14 items-center justify-center gap-1 rounded-[1.25rem] px-4 text-sm font-extrabold transition active:scale-95 ${primary ? 'bg-sky-500 text-white shadow-lg shadow-sky-200' : 'bg-sky-50 text-sky-700 ring-1 ring-sky-100'}`}>
      {label}{icon}
    </button>
  );
}
