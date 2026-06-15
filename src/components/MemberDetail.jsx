import { CalendarDays, Target } from 'lucide-react';
import { calendarDays } from '../data/mockData.js';
import { getMemberCheckins, getWeightStats } from '../utils/fitness.js';

export default function MemberDetail({ member, checkins }) {
  const stats = getWeightStats(member);
  const records = getMemberCheckins(checkins, member.id);
  const activeDays = new Set(records.map((record) => new Date(record.date).getDay() || 7));

  return (
    <section className="soft-card rounded-[1.75rem] bg-white p-5">
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-2xl">{member.avatar}</div>
        <div>
          <p className="text-sm text-slate-500">成员详情</p>
          <h2 className="text-xl font-bold text-slate-800">{member.name}的健康计划</h2>
        </div>
      </div>

      <div className="mb-5 rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-4">
        <div className="mb-2 flex items-center gap-2 font-bold text-slate-700"><Target size={18} />体重目标信息</div>
        <p className="text-sm leading-6 text-slate-600">从 {member.initialWeight} kg 到 {member.targetWeight} kg，目前 {member.currentWeight} kg，已完成 {stats.progress}%，距离目标还差 {stats.remaining} kg。</p>
      </div>

      <DetailBlock title="最近打卡记录">
        <div className="grid gap-3">
          {records.map((record) => (
            <div key={record.id} className="rounded-2xl bg-sky-50 p-3 text-sm text-slate-600">
              <div className="font-bold text-slate-800">{record.date} · {record.type} {record.duration} 分钟</div>
              <div>强度：{record.intensity} {record.weight ? `· 体重：${record.weight} kg` : ''}</div>
              <div>{record.note}</div>
            </div>
          ))}
        </div>
      </DetailBlock>

      <DetailBlock title="每周运动计划">
        <ul className="grid gap-2 text-sm text-slate-600">
          {member.plan.map((item) => <li key={item} className="rounded-2xl bg-cyan-50 px-3 py-2">{item}</li>)}
        </ul>
      </DetailBlock>

      <DetailBlock title="简单打卡日历" icon={<CalendarDays size={18} />}>
        <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold">
          {calendarDays.map((day, index) => {
            const checked = activeDays.has(index + 1);
            return <div key={day} className={`rounded-2xl py-3 ${checked ? 'bg-sky-500 text-white' : 'bg-sky-50 text-slate-500'}`}>{day}</div>;
          })}
        </div>
      </DetailBlock>
    </section>
  );
}

function DetailBlock({ title, icon, children }) {
  return (
    <div className="mb-5 last:mb-0">
      <h3 className="mb-3 flex items-center gap-2 font-bold text-slate-800">{icon}{title}</h3>
      {children}
    </div>
  );
}
