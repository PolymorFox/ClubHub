import {
  Users,
  CalendarDays,
  Plus,
  MoreHorizontal,
  Home,
} from "lucide-react";
import { useUser } from "../hooks/useUser";
import { Link } from "react-router";
import { useState } from "react";
import MemberList from "./MemberList";
import StatCard from "./StatCard";
import Announcement from "./Annoucement";

export type Member = {
   name: string,
   role: string,
   initials: string,
}

function InfoPill({ children }) {
  return (
    <span className="rounded-lg bg-slate-50 px-3 py-1.5 text-xs text-slate-500">
      {children}
    </span>
  );
}

function SectionHeader({
  title,
  subtitle,
  action,
}: {
  title: string,
  subtitle: string,
  action: string,
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
      <div>
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="mt-1 text-xs text-slate-400">
          {subtitle}
        </p>
      </div>

      {action === "Search" ? null : (
        <button className="text-xs font-semibold text-violet-600 hover:text-violet-700">
          {action}
        </button>
      )}
    </div>
  );
}

export default function ClubDashboard() {
  const { user } = useUser();
  const [members] = useState<Member[]>([
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
  ]);
  const [memberSearchQuery, setMemberSearchQuery] = useState<string>("");
  return (
    <div className="min-h-screen bg-[#f8f8fb] text-slate-950">
      <div className="flex min-h-screen">
        {/* Main */}
        <main className="flex-1">
          {/* Header */}
          <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-8">
            <div>
              <h1 className="mt-1 text-xl font-bold tracking-tight">
                Welcome back, {user.name} 👋
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700">
                <Plus size={16} />
                Create event
              </button>
              <Link to="/">
                <Home className="text-gray-400 mt-1"/>
              </Link>
            </div>
          </header>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
              {/* Stats */}
              <section className="grid gap-4 grid-cols-2">
                <StatCard
                  label="Total members"
                  value="25"
                  icon={Users}
                  change="+12 this month"
                />

                <StatCard
                  label="Upcoming events"
                  value="8"
                  icon={CalendarDays}
                  change="3 this week"
                />
              </section>

              {/* Main grid */}
              <div className="mt-6">
                {/* Club Info */}
                <section className="rounded-2xl border border-slate-200 bg-white">
                  <div className="p-6">
                    <div className="flex flex-col gap-5 sm:flex-row">
                      {/* Date */}
                      <div className="flex h-15 w-10 shrink-0 flex-col items-center justify-center rounded-sm">
                        <span className="text-[11px] font-semibold uppercase text-violet-500">
                          {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())}
                        </span>

                        <span className="text-2xl font-bold text-violet-700">
                          {new Date().getDate()}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-bold">
                              Web and App Club
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                              Building web applications of the futuure
                            </p>
                          </div>

                          <button className="text-slate-400 hover:text-slate-700">
                            <MoreHorizontal size={18} />
                          </button>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                          <InfoPill>Meetings every day Thursday, last two periods</InfoPill>
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
                    title="Events"
                    subtitle="Upcoming events and plans"
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
                    title="Members"
                    subtitle="All club members"
                    action="Search"
                  />
                  {/* Filter users */}
                  <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 inset-s-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                      </div>
                      <input onChange={(e) => setMemberSearchQuery(e.target.value)} type="search" id="search" className="block w-full p-3 ps-9 bg-neutral-secondary-medium text-heading text-sm rounded-base focus:ring-brand shadow-xs placeholder:text-body" placeholder="Search" />
                  </div>

                  <MemberList members={members} query={memberSearchQuery} />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Fuck you ChatGPT
