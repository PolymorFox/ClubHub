import { HomeIcon } from "lucide-react";
import { Link } from "react-router";

export default function Landing() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 border-b">
        <span className="font-bold text-lg">
          <HomeIcon className="inline align-middle mr-3" size={24} /> ClubHub
        </span>
        <div className="flex gap-6 text-sm">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <Link to="/signup" className="font-medium text-blue-600">
            Get started
          </Link>
          <Link to="/login" className="font-medium text-blue-600">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Manage every school club in one place
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sign-ups, events, members, and announcements — simple tools for
          students, teachers, and admins.
        </p>
        <div className="flex gap-3 justify-center">
          <a
            href="#start"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Get started free
          </a>
          <a
            href="#features"
            className="border px-6 py-3 rounded-lg font-medium hover:bg-gray-50"
          >
            See features
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Everything a club needs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Club Directory",
              body: "Browse every club on campus with descriptions, meeting times, and contacts.",
            },
            {
              title: "Member Management",
              body: "Approve join requests, track roles, and keep member lists up to date.",
            },
            {
              title: "Events & Sign-ups",
              body: "Create events, collect RSVPs, and send reminders to members.",
            },
            {
              title: "Announcements",
              body: "Post updates that reach the right club members instantly.",
            },
            {
              title: "Admin Controls",
              body: "Teachers and staff get oversight tools without micromanaging.",
            },
            {
              title: "Works for Every School",
              body: "Elementary, middle, or high school — one platform that scales.",
            },
          ].map((f) => (
            <div key={f.title} className="border rounded-lg p-6">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-10">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                step: "1",
                title: "Create your school",
                body: "Admins set up the school account in minutes.",
              },
              {
                step: "2",
                title: "Add your clubs",
                body: "Each club gets its own page and leader.",
              },
              {
                step: "3",
                title: "Students join",
                body: "Members sign up and stay in the loop.",
              },
            ].map((s) => (
              <div key={s.step}>
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  {s.step}
                </div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to organize your clubs?
        </h2>
        <p className="text-gray-600 mb-8">
          Free for schools. No credit card required.
        </p>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Create your school account
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ClubHub. Built for schools.
      </footer>
    </main>
  );
}
