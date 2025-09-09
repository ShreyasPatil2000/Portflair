import { useState } from "react";
import {
  Edit,
  MapPin,
  Calendar,
  ExternalLink,
  MessageCircle,
  Plus,
  Mail,
  Github,
  Globe,
  Users,
  BookOpen,
} from "lucide-react";
import Navbar from "@/component/Navbar/page";
import Footer from "@/component/Footer/page";

interface User {
  id: string;
  name: string;
  email: string;
  bio?: string;
  avatarUrl?: string;
  createdAt: string;
  location?: string;
  website?: string;
  github?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  createdAt: string;
  _count: {
    comments: number;
  };
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [isEditing, setIsEditing] = useState(false);

  // Mock user data - replace with actual data from your backend
  const user: User = {
    id: "user1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    bio: "Full-stack developer passionate about creating beautiful and functional web applications. I love working with React, Node.js, and exploring new technologies.",
    createdAt: "2024-01-15T10:00:00Z",
    location: "San Francisco, CA",
    website: "https://sarahchen.dev",
    github: "https://github.com/sarahchen",
  };

  // Mock projects data - replace with actual API call
  const userProjects: Project[] = [
    {
      id: "1",
      title: "E-commerce Dashboard",
      description:
        "A modern React dashboard for managing online stores with real-time analytics and inventory management.",
      link: "https://demo.example.com",
      createdAt: "2024-07-20T10:00:00Z",
      _count: { comments: 8 },
    },
    {
      id: "2",
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts and interactive maps.",
      link: "https://weather-app.example.com",
      createdAt: "2024-07-10T14:00:00Z",
      _count: { comments: 5 },
    },
    {
      id: "3",
      title: "Task Management Tool",
      description: "Collaborative task management application with real-time updates and team features.",
      createdAt: "2024-06-25T09:00:00Z",
      _count: { comments: 12 },
    },
  ];

  const stats = [
    { label: "Projects", value: userProjects.length.toString(), icon: BookOpen },
    {
      label: "Total Comments",
      value: userProjects.reduce((acc, p) => acc + p._count.comments, 0).toString(),
      icon: MessageCircle,
    },
    { label: "Member Since", value: "2024", icon: Calendar },
  ];

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const formatJoinDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6 md:mb-0">
              {/* Avatar */}
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 md:mb-0 md:mr-6">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                  getInitials(user.name)
                )}
              </div>

              {/* User Info */}
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                {user.bio && <p className="text-slate-400 mb-4 max-w-2xl">{user.bio}</p>}

                {/* User Details */}
                <div className="flex flex-wrap items-center gap-4 text-slate-400">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  {user.location && (
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{user.location}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">Joined {formatJoinDate(user.createdAt)}</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4 mt-4">
                  {user.website && (
                    <a
                      title="Personal Website"
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-purple-400 transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {user.github && (
                    <a
                      title="GitHub Profile"
                      href={user.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-purple-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center cursor-pointer"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </button>
              <button className="bg-slate-700/50 border border-slate-600 text-slate-300 px-6 py-2 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-200 flex items-center cursor-pointer">
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-slate-700/50">
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors cursor-pointer ${
                activeTab === "projects"
                  ? "text-purple-400 bg-purple-400/10 border-b-2 border-purple-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Projects ({userProjects.length})
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors cursor-pointer ${
                activeTab === "activity"
                  ? "text-purple-400 bg-purple-400/10 border-b-2 border-purple-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Comments
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "projects" ? (
              <div className="space-y-6">
                {userProjects.length === 0 ? (
                  <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-slate-400 mb-2">No projects yet</h3>
                    <p className="text-slate-500 mb-6">Share your first project to get started!</p>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                      Create Project
                    </button>
                  </div>
                ) : (
                  userProjects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2 hover:text-purple-400 transition-colors cursor-pointer">
                            {project.title}
                          </h3>
                          <p className="text-slate-400 mb-4">{project.description}</p>

                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              <span className="text-sm">View Project</span>
                            </a>
                          )}
                        </div>

                        <div className="text-right">
                          <p className="text-slate-400 text-sm mb-2">{formatDate(project.createdAt)}</p>
                          <div className="flex items-center text-slate-400">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            <span className="text-sm">{project._count.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-400 mb-2">Comments</h3>
                <p className="text-slate-500">Recent comments will appear here</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
