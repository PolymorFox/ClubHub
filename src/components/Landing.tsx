import {
  Users,
  CalendarDays,
  Megaphone,
  ShieldCheck,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router"

export default function LandingPage() {
const [role] = useState("user")

  const features = [
    {
      icon: Users,
      title: "Member Directory",
      description: "Keep your club members organized and connected.",
    },
    {
      icon: CalendarDays,
      title: "Events & RSVP",
      description: "Create events and let members RSVP in one place.",
    },
    {
      icon: Megaphone,
      title: "Announcement Board",
      description: "Keep everyone updated with important club news.",
    },
    {
      icon: ShieldCheck,
      title: "Role-Based Access",
      description: "Give members and executives the right level of access.",
    },
  ];

  const members = [
    { name: "Jordan Lee", role: "Member", initials: "JL" },
    { name: "Priya Shah", role: "Member", initials: "PS" },
    { name: "Riley Brown", role: "Member", initials: "RB" },
  ];


  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-950">
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Users size={21} />
            </div>

            <div>
              <p className="text-lg font-bold tracking-tight">
                Clubhouse
              </p>
              <p className="text-xs text-slate-400">
                Your club, organized.
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 md:flex">
            <a href="#features" className="hover:text-slate-950">
              Features
            </a>
            <Link to="/dashboard" className="hover:text-slate-950">Manage Club</Link>
            {role === "admin" && (<a href="#access" className="hover:text-slate-950">
              Manage Clubs
            </a>)}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden px-4 py-2 text-sm font-medium text-slate-600 sm:block">
              Log in
            </button>

            <button className="rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
            {/* Copy */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3.5 py-2 text-sm font-medium text-violet-700">
                <Sparkles size={15} />
                Built for student clubs
              </div>

              <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Run your club.
                <br />
                <span className="text-violet-600">
                  Bring everyone together.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-lg leading-8 text-slate-500">
                One simple platform to manage members, track attendance,
                organize events, share announcements, and keep your club
                running smoothly.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button className="group flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700">
                  Start your club
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  See how it works
                </button>
              </div>

              <div className="mt-7 flex items-center gap-5 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Check size={15} className="text-emerald-500" />
                  Free for students
                </span>

                <span className="flex items-center gap-2">
                  <Check size={15} className="text-emerald-500" />
                  Easy to set up
                </span>
              </div>
            </div>

            {/* Dashboard preview */}
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-violet-100/70 blur-3xl" />

              <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70">
                {/* Fake browser */}
                <div className="overflow-hidden rounded-xl border border-slate-100">
                  <div className="flex h-11 items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  </div>

                  <div className="flex min-h-110">
                    {/* Mini sidebar */}
                    <div className="hidden w-44 border-r border-slate-100 bg-white p-4 sm:block">
                      <div className="mb-7 flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-violet-600" />
                        <div className="h-3 w-16 rounded bg-slate-200" />
                      </div>

                      <div className="space-y-2">
                        {[
                          "Overview",
                          "Members",
                          "Attendance",
                          "Events",
                          "Announcements",
                        ].map((item, i) => (
                          <div
                            key={item}
                            className={`rounded-lg px-3 py-2 text-xs ${
                              i === 0
                                ? "bg-violet-50 font-semibold text-violet-700"
                                : "text-slate-400"
                            }`}
                          >
                            {item}
                          </div>
                        ))}
                      </div>

                      <div className="mt-24 rounded-lg bg-slate-50 p-3">
                        <p className="text-[10px] text-slate-400">
                          Role
                        </p>
                        <p className="mt-1 text-xs font-semibold">
                          Executive
                        </p>
                      </div>
                    </div>

                    {/* Dashboard */}
                    <div className="flex-1 bg-[#fcfcfd] p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[10px] text-slate-400">
                            Tech Innovation Club
                          </p>
                          <h3 className="mt-1 text-lg font-bold">
                            Welcome back, Avery 👋
                          </h3>
                        </div>

                        <button className="rounded-lg bg-violet-600 px-3 py-2 text-[10px] font-semibold text-white">
                          + Create event
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        {[
                          ["124", "Members"],
                          ["85%", "Attendance"],
                          ["8", "Events"],
                        ].map(([number, label]) => (
                          <div
                            key={label}
                            className="rounded-xl border border-slate-100 bg-white p-3"
                          >
                            <p className="text-base font-bold">{number}</p>
                            <p className="mt-1 text-[10px] text-slate-400">
                              {label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Content cards */}
                      <div className="mt-4 grid gap-3 sm:grid-cols w-full">
                        <div className="rounded-xl border border-slate-100 bg-white p-4">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold">
                              Upcoming event
                            </p>
                            <CalendarDays
                              size={15}
                              className="text-violet-500"
                            />
                          </div>

                          <div className="mt-4 flex gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-xs font-bold text-violet-600">
                              24
                            </div>
                            <div>
                              <p className="text-xs font-semibold">
                                Web Dev Workshop
                              </p>
                              <p className="mt-1 text-[10px] text-slate-400">
                                2:00 PM · Room 204
                              </p>
                            </div>
                          </div>

                          <button className="mt-4 w-full rounded-lg bg-slate-50 py-2 text-[10px] font-semibold text-slate-600">
                            View event
                          </button>
                        </div>

                        <div className="rounded-xl border border-slate-100 bg-white p-4">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold">
                              Recent members
                            </p>
                            <Users
                              size={15}
                              className="text-violet-500"
                            />
                          </div>

                          <div className="mt-3 space-y-3">
                            {members.map((member) => (
                              <div
                                key={member.name}
                                className="flex items-center gap-2"
                              >
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[9px] font-semibold">
                                  {member.initials}
                                </div>
                                <div>
                                  <p className="text-[10px] font-semibold">
                                    {member.name}
                                  </p>
                                  <p className="text-[9px] text-slate-400">
                                    {member.role}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Announcement */}
                      <div className="mt-3 rounded-xl border border-slate-100 bg-white p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                            <Megaphone size={13} />
                          </div>

                          <div>
                            <p className="text-[10px] font-bold">
                              Announcement
                            </p>
                            <p className="text-[9px] text-slate-400">
                              Hackathon registration is now open
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-y border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-violet-600">
                EVERYTHING IN ONE PLACE
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Everything your club needs.
              </h2>
              <p className="mt-4 text-slate-500">
                No spreadsheets. No scattered group chats. Just one
                simple place to keep your club organized.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="bg-white p-6 transition hover:bg-slate-50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-sm font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Simple CTA */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-950 px-8 py-14 text-center sm:px-16">
            <p className="text-sm font-semibold text-violet-400">
              BUILT FOR CLUBS
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Spend less time managing your club.
              <br />
              Spend more time building it.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400">
              Give your members a better experience and your executives
              the tools they need to keep everything running smoothly.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Create your club
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-7 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Clubhouse</p>
          <p>Built for student communities.</p>
        </div>
      </footer>
    </div>
  );
}
