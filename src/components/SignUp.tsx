import { useAuth } from "../hooks/useAuth";
import { useState, type SyntheticEvent } from "react";

export default function SignUp() {
  //   const { user, login, logout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setError("");

    const target = e.target as typeof e.target & {
      name: { value: string };
      school: { value: string };
      email: { value: string };
      password: { value: string };
    };

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: target.name.value,
          school: target.school.value,
          email: target.email.value,
          password: target.password.value,
        }),
      });
      if (!response.ok) {
        // In this case of network issues and not a db error
        setError("Something went wrong. Try again.");
      } else if (response.ok) {
        alert("User created successfully");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-sm bg-white border rounded-lg p-8">
        {/* Header */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Create your account
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Join your school's clubs in one place.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Full name
            </label>
            <input
              required
              id="name"
              name="name"
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@school.edu"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="school">
              School
            </label>
            <input
              required
              id="school"
              name="school"
              type="text"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Lincoln High School"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              required
              id="password"
              name="password"
              type="password"
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="At least 8 characters"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}
