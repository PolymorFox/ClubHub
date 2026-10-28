import { useState, type SyntheticEvent } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
export default function Login() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setError("");

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    try {
      // Change loading state for loading text
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: target.email.value,
          password: target.password.value,
        }),
      });
      if (response.ok) {
        //TODO We still need to fetch full user data for full auth using useAuth
        alert("Login successful");
      } else if (!response.ok) {
        setError("Something wen't wrong try again");
      }
    } catch (error) {
      setError("Something wen't wrong try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-sm bg-white border rounded-lg p-8">
          {/* Header */}
          <h1 className="text-2xl font-bold text-center mb-2">
            Log into your account
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Join your school's clubs in one place.
          </p>

          {/* Back button */}
          <div className="absolute top-3 left-3 bg-gray-300 p-2.5 rounded-4xl">
            <ArrowLeft onClick={() => nav("/")} size={32} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-sm text-gray-600 text-center mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
