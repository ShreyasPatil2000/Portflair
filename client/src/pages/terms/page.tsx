import BackButtonForm from "@/component/BackButtonForm/page";
import { BookOpen, Scale } from "lucide-react";

// Terms of Service Page Component
const Terms = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BackButtonForm />

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Scale className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-300">
            Last updated: <span className="text-purple-400 font-medium">{lastUpdated}</span>
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <BookOpen className="w-6 h-6 text-purple-400 mr-3" />
              Agreement to Terms
            </h2>
            <div className="prose prose-slate max-w-none text-slate-300 space-y-4">
              <p>
                By accessing and using Portflair ("Service"), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service ("Terms") govern your use of our website located at portflair.com (the "Service")
                operated by Portflair ("us", "we", or "our").
              </p>
            </div>
          </div>

          {/* Use License */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Permission is granted to temporarily download one copy of Portflair's materials for personal,
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by Portflair at any time.
              </p>
            </div>
          </div>

          {/* User Accounts */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. You are responsible for safeguarding the password and for maintaining the confidentiality
                of your account.
              </p>
              <p>
                You agree not to disclose your password to any third party and to take sole responsibility for any
                activities or actions under your account, whether or not you have authorized such activities.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Content</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Our Service allows you to post, link, store, share and otherwise make available certain information,
                text, graphics, videos, or other material ("Content"). You are responsible for Content that you post on
                or through Service.
              </p>
              <p>By posting Content on or through Service, You represent and warrant that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Content is yours (you own it) and/or you have the right to use it</li>
                <li>Use of the Content will not infringe any third party rights</li>
                <li>Content does not violate any applicable law or regulation</li>
              </ul>
            </div>
          </div>

          {/* Prohibited Uses */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Prohibited Uses</h2>
            <div className="text-slate-300 space-y-4">
              <p>You may not use our Service:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>
                  To violate any international, federal, provincial, or state regulations, rules, laws, or local
                  ordinances
                </li>
                <li>
                  To infringe upon or violate our intellectual property rights or the intellectual property rights of
                  others
                </li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                We may terminate or suspend your account and bar access to Service immediately, without prior notice or
                liability, under our sole discretion, for any reason whatsoever including but not limited to a breach of
                Terms.
              </p>
              <p>If you wish to terminate your account, you may simply discontinue using Service.</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <div className="text-slate-300">
              <p>
                If you have any questions about these Terms of Service, please contact us at{" "}
                <a
                  href="mailto:legal@portflair.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  title="Contact us at this email"
                >
                  legal@portflair.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
