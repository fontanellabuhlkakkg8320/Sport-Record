import { Send } from 'lucide-react';

export default function CheckinForm({ members, selectedMemberId }) {
  const today = '2026-06-15';

  return (
    <section className="soft-card rounded-[1.75rem] bg-white p-5 sm:p-6">
      <div className="mb-5 rounded-3xl bg-gradient-to-br from-sky-50 to-cyan-50 p-4">
        <p className="text-sm font-semibold text-sky-600">今日记录</p>
        <h2 className="text-xl font-bold text-slate-800">每日打卡</h2>
        <p className="mt-1 text-sm leading-6 text-slate-600">按成员、体重、运动内容分区填写，手机上也能一眼看清。</p>
      </div>
      <form className="grid gap-4 sm:grid-cols-2" onSubmit={(event) => event.preventDefault()}>
        <Field label="成员"><select defaultValue={selectedMemberId} className="input min-h-13">
          {members.map((member) => <option key={member.id} value={member.id}>{member.name}</option>)}
        </select></Field>
        <Field label="日期"><input className="input min-h-13" type="date" defaultValue={today} /></Field>
        <Field label="今日体重（可选）"><input className="input min-h-13" type="number" step="0.1" placeholder="例如 74.5" /></Field>
        <Field label="运动类型"><input className="input min-h-13" placeholder="慢跑 / 瑜伽 / 快走" /></Field>
        <Field label="运动时长（分钟）"><input className="input min-h-13" type="number" placeholder="30" /></Field>
        <Field label="运动强度"><select className="input min-h-13" defaultValue="中等"><option>轻松</option><option>中等</option><option>较高</option></select></Field>
        <Field label="今日备注" wide><textarea className="input min-h-28" placeholder="写下今天的感受、饮食或鼓励的话" /></Field>
        <button className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 font-bold text-white shadow-lg shadow-sky-200 sm:col-span-2">
          <Send size={18} /> 保存 mock 打卡
        </button>
      </form>
    </section>
  );
}

function Field({ label, children, wide = false }) {
  return <label className={`grid gap-2 text-sm font-bold text-slate-700 ${wide ? 'sm:col-span-2' : ''}`}>{label}{children}</label>;
}
