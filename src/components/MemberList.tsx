import type { Member } from "./ClubDashboard"

export default function MemberList({ members, query }: { members: Member[], query: string }) {
  const filtered: Member[] = members.filter(u => u.name.includes(query));
  return (
    <div className="divide-y divide-slate-100 h-64 overflow-y-auto">
      {filtered.map((m) => (
        <div
          key={m.name}
          className="flex items-center justify-between px-6 py-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[10px] font-semibold">
              {m.initials}
            </div>

            <div>
              <p className="text-sm font-semibold">
                {m.name}
              </p>

              <p className="text-xs text-slate-400">
                {m.role}
              </p>
            </div>
          </div>

          <span className="text-xs text-slate-400">
            Joined recently
          </span>
        </div>
      ))}
    </div>
  );
}
