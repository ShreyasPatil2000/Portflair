import Footer from "@/component/Footer/page";
import Navbar from "@/component/Navbar/page";
import { BookOpen, Heart, Target, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center" title="Home" onClick={() => navigate("/")}>
              <BookOpen className="w-8 h-8 text-white cursor-pointer" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Portflair</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Empowering professionals to showcase their talents and build meaningful connections through beautiful,
            personalized portfolios.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <Target className="w-8 h-8 text-purple-400 mr-4" />
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            At Portflair, we believe everyone deserves a platform to showcase their unique talents and achievements.
            We're dedicated to providing creators, professionals, and innovators with the tools they need to build
            stunning portfolios that truly reflect their passion and expertise. Our mission is to bridge the gap between
            talent and opportunity, making it easier for exceptional individuals to connect with the right audience.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Community First</h3>
            </div>
            <p className="text-slate-300">
              We prioritize building a supportive community where creators can thrive, learn from each other, and grow
              together in their professional journeys.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Passion Driven</h3>
            </div>
            <p className="text-slate-300">
              Every feature we build is driven by our passion for helping others succeed. We understand the importance
              of personal branding in today's digital world.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Portflair was born from the simple observation that talented individuals often struggle to present their
              work in a way that truly captures their potential. Traditional resume formats and generic portfolio
              templates simply weren't enough.
            </p>
            <p>
              Our team of designers and developers came together with a shared vision: to create a platform that would
              allow anyone to build a portfolio as unique and compelling as their work itself. We wanted to democratize
              professional presentation, making it accessible to everyone regardless of their technical background.
            </p>
            <p>
              Today, Portflair serves thousands of creators, freelancers, and professionals who trust us to help them
              make their mark in the digital world. We're just getting started.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
