import BackButtonForm from "@/component/BackButtonForm/page";
import { Shield, Eye, Lock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Privacy Policy Page Component
const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const lastUpdated = "January 15, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BackButtonForm />
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300">
            Last updated: <span className="text-purple-400 font-medium">{lastUpdated}</span>
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Eye className="w-6 h-6 text-purple-400 mr-3" />
              Information We Collect
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                At Portflair, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p>We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account registration information (name, email, password)</li>
                <li>Profile information and portfolio content</li>
                <li>Communication preferences and settings</li>
                <li>Messages you send to us through contact forms</li>
              </ul>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Users className="w-6 h-6 text-purple-400 mr-3" />
              How We Use Your Information
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you for customer service and support</li>
                <li>Send you updates, security alerts, and administrative messages</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Information Sharing and Disclosure</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties. We may share
                your information in the following situations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>With your consent:</strong> When you explicitly agree to share information
                </li>
                <li>
                  <strong>Service providers:</strong> With trusted third-party service providers who assist in operating
                  our website
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law or to protect our rights
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with mergers, acquisitions, or asset sales
                </li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 text-purple-400 mr-3" />
              Data Security
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure servers and infrastructure</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we
                strive to use commercially acceptable means to protect your information, we cannot guarantee absolute
                security.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                We retain your personal information for as long as necessary to provide you with our services and as
                described in this Privacy Policy. We will retain and use your information to the extent necessary to
                comply with our legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p>
                When you delete your account, we will delete or anonymize your personal information within 30 days,
                except where we are required to retain it for legal or regulatory purposes.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
            <div className="text-slate-300 space-y-4">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Access:</strong> Request copies of your personal information
                </li>
                <li>
                  <strong>Rectification:</strong> Request correction of inaccurate information
                </li>
                <li>
                  <strong>Erasure:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your information to another service
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing your information
                </li>
                <li>
                  <strong>Objection:</strong> Object to our processing of your personal information
                </li>
              </ul>
              <p>
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@portflair.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  title="Send email"
                >
                  privacy@portflair.com
                </a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                We use cookies and similar tracking technologies to track activity on our service and hold certain
                information. Cookies are files with small amounts of data which may include a unique identifier.
              </p>
              <p>We use cookies for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Authentication and security</li>
                <li>Remembering your preferences and settings</li>
                <li>Analytics and performance monitoring</li>
                <li>Personalizing your experience</li>
              </ul>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
                if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Our service is not intended for children under 13 years of age. We do not knowingly collect personally
                identifiable information from children under 13. If you are a parent or guardian and believe your child
                has provided us with personal information, please contact us.
              </p>
            </div>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
            <div className="text-slate-300 space-y-4">
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                Policy are effective when they are posted on this page.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <div className="text-slate-300 space-y-4">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="space-y-2">
                <li>
                  By email:{" "}
                  <a
                    href="mailto:privacy@portflair.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    title="Send email"
                  >
                    privacy@portflair.com
                  </a>
                </li>
                <li>By mail: 123 Innovation Street, San Francisco, CA 94102</li>
                <li>
                  On our contact page:{" "}
                  <button
                    onClick={() => navigate("/contact")}
                    className="text-purple-400 hover:text-purple-300 transition-colors underline cursor-pointer"
                    title="Go to Contact Page"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
