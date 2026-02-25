import React from 'react';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Mail,
  Cookie,
  Smartphone,
  FileText,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Globe,
  Users,
  Trash2,
  Share2
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Database,
      title: '1. Information We Collect',
      content: [
        'Personal Information: Name, email address, phone number, date of birth, gender',
        'Booking Information: Travel details, passenger names, seat preferences',
        'Payment Information: Credit/debit card details, UPI IDs, bank account details (processed securely through PCI DSS compliant payment gateways)',
        'Device Information: IP address, browser type, operating system, device identifiers',
        'Location Data: Boarding/dropping points, with your consent for nearby recommendations',
        'Usage Data: Pages visited, features used, time spent on platform, search history'
      ]
    },
    {
      icon: Eye,
      title: '2. How We Use Your Information',
      content: [
        'Process and confirm your bus ticket bookings',
        'Send booking confirmations, reminders, and travel updates',
        'Process refunds and handle customer support requests',
        'Improve our services and personalize your experience',
        'Detect and prevent fraudulent transactions',
        'Send personalized offers and travel recommendations (with opt-out option)',
        'Comply with legal and regulatory requirements'
      ]
    },
    {
      icon: Share2,
      title: '3. Information Sharing & Disclosure',
      content: [
        'Bus Operators: Share passenger details and booking information with bus operators for travel',
        'Payment Partners: Share payment information with RBI-approved payment gateways for transaction processing',
        'Service Providers: IT services, customer support, analytics, and marketing partners under strict confidentiality',
        'Legal Authorities: When required by law, court order, or government regulation',
        'Business Transfers: In case of merger, acquisition, or asset sale with user notice',
        'We NEVER sell your personal information to third parties'
      ]
    },
    {
      icon: Lock,
      title: '4. Data Security',
      content: [
        '256-bit SSL encryption for all data transmission',
        'PCI DSS compliant payment processing',
        'Regular security audits and vulnerability assessments',
        'Strict access controls and employee training',
        'Anonymization of personal data for analytics',
        'Secure data centers with 24/7 monitoring'
      ]
    },
    {
      icon: Cookie,
      title: '5. Cookies & Tracking',
      content: [
        'Essential cookies: Required for platform functionality and security',
        'Analytics cookies: Understand user behavior to improve our services',
        'Preference cookies: Remember your settings and preferences',
        'Marketing cookies: Personalized ads (opt-out available)',
        'You can control cookie preferences through browser settings',
        'Third-party cookies from Google Analytics, Facebook Pixel, etc.'
      ]
    },
    {
      icon: Users,
      title: '6. Your Rights & Choices',
      content: [
        'Access: Request a copy of your personal data we hold',
        'Correction: Update or correct inaccurate information',
        'Deletion: Request deletion of your account and data',
        'Opt-out: Unsubscribe from marketing communications',
        'Data Portability: Receive your data in structured format',
        'Withdraw Consent: At any time for optional data collection',
        'Response within 30 days to all privacy requests'
      ]
    },
    {
      icon: Smartphone,
      title: '7. Mobile App Permissions',
      content: [
        'Location: For nearby boarding points and bus tracking',
        'Camera: For uploading profile photos and document verification',
        'SMS: For auto-reading OTP and booking confirmations',
        'Notifications: For travel alerts and booking updates',
        'Storage: For downloading tickets and receipts',
        'Permissions can be revoked anytime from device settings'
      ]
    },
    {
      icon: Trash2,
      title: '8. Data Retention',
      content: [
        'Active accounts: Data retained until account deletion',
        'Booking history: Retained for 5 years for tax and legal compliance',
        'Payment information: Not stored, processed by PCI DSS compliant gateways',
        'Deleted accounts: Data anonymized within 90 days',
        'Backup retention: Maximum 30 days for disaster recovery',
        'Chat/Support history: Retained for 3 years for quality training'
      ]
    },
    {
      icon: Globe,
      title: '9. International Data Transfers',
      content: [
        'Data primarily stored in India within RBI guidelines',
        'Some service providers may operate globally',
        'Adequate data protection agreements in place',
        'Standard contractual clauses for cross-border transfers',
        'Compliant with Indian data protection laws'
      ]
    },
    {
      icon: Mail,
      title: '10. Contact & Grievance Officer',
      content: [
        'Name: Rajesh Kumar',
        'Designation: Grievance Redressal Officer',
        'Email: privacy@birdmytrip.com',
        'Phone: +91 22 1234 5678',
        'Address: 5th Floor, Business Plaza, Andheri East, Mumbai - 400069',
        'Response Time: Within 24 hours, resolution within 30 days'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Last Updated: February 15, 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
        <div className="relative h-16">
          <svg className="absolute bottom-0 w-full h-16 text-gray-50 fill-current" preserveAspectRatio="none" viewBox="0 0 1440 54">
            <path d="M0 22L120 16.7C240 11 480 1 720 7.7C960 14 1200 38 1320 50L1440 62V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Policy Overview */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment to Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                At BirdMyTrip, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our platform. By using BirdMyTrip, you 
                consent to the practices described in this policy.
              </p>
            </div>
            <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
              <Shield className="w-12 h-12 mb-3" />
              <div className="text-2xl font-bold">GDPR</div>
              <div className="text-sm opacity-90">Compliant</div>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h3>
                    <div className="space-y-3">
                      {section.content.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Policy Updates */}
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-xl">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Policy Updates</h3>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on this page and updating the "Last Updated" date. 
                We encourage you to review this policy periodically.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Version: 2.1</span>
                <span className="text-sm text-gray-500">Effective: January 1, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;