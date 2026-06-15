import { useMemo, useState } from 'react';
import CheckinForm from './components/CheckinForm.jsx';
import Header from './components/Header.jsx';
import MemberCard from './components/MemberCard.jsx';
import MemberDetail from './components/MemberDetail.jsx';
import { checkins, members } from './data/mockData.js';

export default function App() {
  const [selectedMemberId, setSelectedMemberId] = useState(members[0].id);
  const selectedMember = useMemo(() => members.find((member) => member.id === selectedMemberId) ?? members[0], [selectedMemberId]);

  const focusForm = (memberId) => {
    setSelectedMemberId(memberId);
    document.getElementById('checkin-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const viewDetail = (memberId) => {
    setSelectedMemberId(memberId);
    document.getElementById('member-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#dff5ff_0%,#f8fdff_42%,#eaf8ff_100%)]">
      <Header />
      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-6 md:grid-cols-[1.1fr_0.9fr]">
        <section className="grid gap-4">
          <div>
            <p className="text-sm font-semibold text-sky-600">家庭成员</p>
            <h2 className="text-2xl font-bold text-slate-800">今天也一起动起来</h2>
          </div>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} onCheckin={focusForm} onUpdateWeight={focusForm} onViewDetail={viewDetail} />
          ))}
        </section>
        <div className="grid content-start gap-6">
          <div id="checkin-form"><CheckinForm members={members} selectedMemberId={selectedMemberId} /></div>
          <div id="member-detail"><MemberDetail member={selectedMember} checkins={checkins} /></div>
        </div>
      </main>
    </div>
  );
}
