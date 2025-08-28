import { useState } from "react";
import {
  Search,
  Heart,
  MessageCircle,
  ExternalLink,
  Github,
  Globe,
  Filter,
  TrendingUp,
  Users,
  BookOpen,
} from "lucide-react";
import Navbar from "@/component/Navbar/page";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data - replace with actual data from your backend
  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description:
        "A modern React dashboard for managing online stores with real-time analytics and inventory management.",
      author: "Sarah Chen",
      authorAvatar: "SC",
      likes: 24,
      comments: 8,
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/example",
      },
      tags: ["React", "TypeScript", "Charts"],
      createdAt: "2 days ago",
    },
    {
      id: 2,
      title: "AI Chat Assistant",
      description:
        "An intelligent chatbot built with OpenAI API featuring context awareness and multi-language support.",
      author: "Michael Rodriguez",
      authorAvatar: "MR",
      likes: 31,
      comments: 12,
      links: {
        demo: "https://demo.example.com",
        github: "https://github.com/example",
      },
      tags: ["Python", "OpenAI", "Flask"],
      createdAt: "1 week ago",
    },
    {
      id: 3,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and progress with social features.",
      author: "Emma Thompson",
      authorAvatar: "ET",
      likes: 18,
      comments: 5,
      links: {
        demo: "https://demo.example.com",
      },
      tags: ["React Native", "Firebase", "Health"],
      createdAt: "3 days ago",
    },
  ];

  const stats = [
    { label: "Total Projects", value: "1,234", icon: BookOpen },
    { label: "Active Users", value: "856", icon: Users },
    { label: "This Week", value: "+127", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Discover Amazing Projects</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Explore innovative projects, share your work, and connect with talented developers from around the world.
          </p>
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

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or users..."
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <button className="px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-200 group"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {project.authorAvatar}
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">{project.author}</p>
                    <p className="text-slate-400 text-sm">{project.createdAt}</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4 line-clamp-3">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex items-center gap-3 mb-4">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="flex items-center text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    <Globe className="w-4 h-4 mr-1" />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="flex items-center text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-sm">Code</span>
                  </a>
                )}
                <Button className="flex items-center text-slate-400 hover:text-purple-400 transition-colors ml-auto">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-slate-400 hover:text-red-400 transition-colors">
                    <Heart className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.likes}</span>
                  </button>
                  <button className="flex items-center text-slate-400 hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm">{project.comments}</span>
                  </button>
                </div>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 text-white px-8 py-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200">
            Load More Projects
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
