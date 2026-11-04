import { useState } from "react";
import {
  Users,
  Calendar,
  MessageSquare,
  Settings,
  Search,
  ChevronDown,
  Clock,
  MapPin,
  UserCheck,
  BookOpen,
  LogOut,
  Menu,
  X,
  TrendingUp,
  Award,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user } = useAuth();

  const currentUser = user;

  // Mock data for clubs
  const myClubs = [
    {
      id: 1,
      name: "Robotics Club",
      members: 24,
      nextMeeting: "2024-01-15 15:30",
      description:
        "Building innovative robots and competing in regional competitions",
    },
    {
      id: 2,
      name: "Debate Society",
      members: 18,
      nextMeeting: "2024-01-16 16:00",
      description: "Developing public speaking and critical thinking skills",
    },
    {
      id: 3,
      name: "Environmental Action",
      members: 32,
      nextMeeting: "2024-01-17 14:00",
      description: "Promoting sustainability and environmental awareness",
    },
  ];

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Robotics Competition Prep",
      club: "Robotics Club",
      date: "2024-01-15",
      time: "3:30 PM",
      location: "Room 201",
      type: "meeting",
    },
    {
      id: 2,
      title: "Regional Debate Tournament",
      club: "Debate Society",
      date: "2024-01-20",
      time: "9:00 AM",
      location: "City Hall",
      type: "event",
    },
    {
      id: 3,
      title: "Campus Cleanup Drive",
      club: "Environmental Action",
      date: "2024-01-22",
      time: "10:00 AM",
      location: "Main Campus",
      type: "event",
    },
  ];

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: <TrendingUp /> },
    { id: "clubs", label: "My Clubs", icon: <Users /> },
    { id: "events", label: "Events", icon: <Calendar /> },
    { id: "messages", label: "Messages", icon: <MessageSquare /> },
    { id: "members", label: "Members", icon: <UserCheck /> },
    { id: "resources", label: "Resources", icon: <BookOpen /> },
    { id: "settings", label: "Settings", icon: <Settings /> },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {currentUser?.name.split(" ")[0]}! 👋
        </h1>
        <p className="text-blue-100">{currentUser?.school}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Active Clubs</p>
              <p className="text-2xl font-bold text-gray-800">
                {myClubs.length}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Upcoming Events</p>
              <p className="text-2xl font-bold text-gray-800">
                {upcomingEvents.length}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Members</p>
              <p className="text-2xl font-bold text-gray-800">
                {myClubs.reduce((sum, club) => sum + club.members, 0)}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <UserCheck className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Achievements</p>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My Clubs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">My Clubs</h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {myClubs.map((club) => (
              <div
                key={club.id}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="bg-blue-500 text-white rounded-lg p-2 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-800 mb-1">
                    {club.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {club.description}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {club.members} members
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      Next: {new Date(club.nextMeeting).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Upcoming Events
              </h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View Calendar
              </button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex items-start space-x-4">
                <div
                  className={`rounded-lg p-2 shrink-0 ${
                    event.type === "meeting"
                      ? "bg-green-100 text-green-600"
                      : "bg-purple-100 text-purple-600"
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{event.club}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {new Date(event.date).toLocaleDateString()} at{" "}
                      {event.time}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                {sidebarOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
              <h1 className="ml-4 text-xl font-semibold text-gray-800">
                ClubHub - {currentUser?.school}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search clubs, events..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              </div>
              {/* User Menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                    {currentUser?.name
                      .split(" ")
                      .reduce((acc, cur) => acc + cur[0], "")}
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium text-gray-800">
                      {currentUser?.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {currentUser?.email}
                    </p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-800">
                        {currentUser?.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {currentUser?.email}
                      </p>
                    </div>
                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-full bg-white border-r border-gray-200 transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64`}
      >
        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className={`pt-16 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`}
      >
        <div className="p-6">
          {activeTab === "overview" && renderOverview()}

          {/* Placeholder for other tabs */}
          {activeTab !== "overview" && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <div className="max-w-md mx-auto">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {sidebarItems.find((item) => item.id === activeTab)?.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {sidebarItems.find((item) => item.id === activeTab)?.label}
                </h2>
                <p className="text-gray-500">
                  This section is under development. Check back soon!
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
