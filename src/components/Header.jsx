import { HeartPulse } from 'lucide-react';

export default function Header() {
  return (
    <header className="rounded-b-[2rem] bg-gradient-to-br from-sky-200 via-cyan-100 to-white px-5 pb-8 pt-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-2xl bg-white/80 p-3 text-sky-500 shadow-sm">
            <HeartPulse size={28} />
          </div>
          <div>
            <p className="text-sm font-medium text-sky-700">Family Fitness Check-in</p>
            <h1 className="text-2xl font-bold text-slate-800">家庭运动打卡记录</h1>
          </div>
        </div>
        <div className="rounded-3xl bg-white/75 p-5 soft-card">
          <p className="text-sm leading-6 text-slate-600">一起记录体重变化、运动计划和每日坚持。第一版使用 mock 数据，适合一家三口在手机端快速查看。</p>
        </div>
      </div>
    </header>
  );
}
