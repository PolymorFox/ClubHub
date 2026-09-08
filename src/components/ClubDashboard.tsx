import {
  Users,
  CalendarDays,
  ClipboardCheck,
  Megaphone,
  Plus,
  MoreHorizontal,
} from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";


export default function ClubDashboard() {
  const [user] = useState({
    name: "Avery Chen",
    role: "Admin",
    position: "Prefect",
    permissions: ["create_events", "delete_events", "remove_users", "admit_users"]
  })
  const [club] = useState({
    name: "Web and App",
    description: "Building web applications of the future",
    memberCount: 25
  })

  const members = [
    {
      name: "Jordan Lee",
      role: "Member",
      initials: "JL",
    },
    {
      name: "Priya Shah",
      role: "Member",
      initials: "PS",
    },
    {
      name: "Riley Brown",
      role: "Member",
      initials: "RB",
    },
  ];
  return (
    <div className="min-h-screen bg-[#f8f8fb] text-slate-950">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar user={user} club={club} navItems={[
          { label: "Overview", icon: Users },
          { label: "Members", icon: Users },
          { label: "Attendance", icon: ClipboardCheck },
          { label: "Events", icon: CalendarDays },
          { label: "Announcements", icon: Megaphone },
        ]} />

        {/* Main */}
        <main className="flex-1">
          {/* Header */}
          <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">
            <div>
              <h1 className="mt-1 text-xl font-bold tracking-tight">
                Welcome back, {user.name.split(" ")[0]} 👋
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700">
                <Plus size={16} />
                Create event
              </button>
            </div>
          </header>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
              {/* Stats */}
              <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard
                  label="Total members"
                  value={club.memberCount}
                  icon={Users}
                  change="+12 this month"
                />

                <StatCard
                  label="Upcoming events"
                  value="8"
                  icon={CalendarDays}
                  change="3 this week"
                />

                <StatCard
                  label="Announcements"
                  value="14"
                  icon={Megaphone}
                />
              </section>

              {/* Main grid */}
              <div className="mt-6">
                {/* Upcoming event */}
                <section className="rounded-2xl border border-slate-200 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                    <div>
                      <h2 className="text-sm font-semibold">
                        Upcoming event
                      </h2>
                      <p className="mt-1 text-xs text-slate-400">
                        Your next club activity
                      </p>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-col gap-5 sm:flex-row">
                      {/* Date */}
                      <div className="flex h-15 w-10 shrink-0 flex-col items-center justify-center rounded-sm">
                        <span className="text-[11px] font-semibold uppercase text-violet-500">
                          May
                        </span>

                        <span className="text-2xl font-bold text-violet-700">
                          24
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-bold">
                              Web Development Workshop
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                              Learn the fundamentals of modern web
                              development with a hands-on workshop.
                            </p>
                          </div>

                          <button className="text-slate-400 hover:text-slate-700">
                            <MoreHorizontal size={18} />
                          </button>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          <InfoPill>Saturday, May 24</InfoPill>
                          <InfoPill>2:00 PM</InfoPill>
                          <InfoPill>Room 204</InfoPill>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Bottom grid */}
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {/* Announcements */}
                <section className="rounded-2xl border border-slate-200 bg-white">
                  <SectionHeader
                    title="Announcements"
                    subtitle="Recent updates for members"
                    action="View all"
                  />

                  <div className="divide-y divide-slate-100">
                    <Announcement
                      title="Hackathon registration is now open"
                      description="Sign up now for the annual campus hackathon."
                      time="1d ago"
                    />

                    <Announcement
                      title="General meeting reminder"
                      description="Don't forget our general meeting tomorrow at 5 PM."
                      time="2d ago"
                    />

                    <Announcement
                      title="New club merch is available"
                      description="Check out the new club merchandise this week."
                      time="4d ago"
                    />
                  </div>
                </section>

                {/* Members */}
                <section className="rounded-2xl border border-slate-200 bg-white">
                  <SectionHeader
                    title="Recent members"
                    subtitle="Latest people to join your club"
                    action="View directory"
                  />

                  <div className="divide-y divide-slate-100">
                    {members.map((member) => (
                      <div
                        key={member.name}
                        className="flex items-center justify-between px-6 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[10px] font-semibold">
                            {member.initials}
                          </div>

                          <div>
                            <p className="text-sm font-semibold">
                              {member.name}
                            </p>

                            <p className="text-xs text-slate-400">
                              {member.role}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs text-slate-400">
                          Joined recently
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ---------------- Components ---------------- */

function StatCard({
  label,
  value,
  icon: Icon,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-slate-400">
            {label}
          </p>

          <p className="mt-2 text-2xl font-bold tracking-tight">
            {value}
          </p>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
          <Icon size={17} />
        </div>
      </div>
    </div>
  );
}

function InfoPill({ children }) {
  return (
    <span className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs text-slate-500">
      {children}
    </span>
  );
}

function Metric({ label, value }) {
  return (
    <div>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-[10px] text-slate-400">{label}</p>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  action,
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
      <div>
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="mt-1 text-xs text-slate-400">
          {subtitle}
        </p>
      </div>

      <button className="text-xs font-semibold text-violet-600 hover:text-violet-700">
        {action}
      </button>
    </div>
  );
}

function Announcement({
  title,
  description,
  time,
}) {
  return (
    <div className="flex gap-3 px-6 py-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
        <Megaphone size={15} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-semibold">{title}</p>
          <span className="shrink-0 text-[10px] text-slate-400">
            {time}
          </span>
        </div>

        <p className="mt-1 text-[11px] leading-5 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}
