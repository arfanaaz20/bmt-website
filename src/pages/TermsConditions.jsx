import React from 'react';
import {
  FileText,
  Scale,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Clock,
  Bus,
  Ban,
  RefreshCw,
  Shield,
  CreditCard,
  UserCheck,
  XCircle,
  ChevronRight,
  BookOpen,
  Gavel,
  Info
} from 'lucide-react';

const TermsConditionsPage = () => {
  const sections = [
    {
      icon: BookOpen,
      title: '1. Acceptance of Terms',
      content: 'By accessing or using BirdMyTrip\'s website, mobile application, or services, you agree to be bound by these Terms & Conditions. If you do not agree to all terms, please do not use our services. We reserve the right to modify these terms at any time, with changes effective upon posting.'
    },
    {
      icon: Bus,
      title: '2. Booking and Payment',
      content: [
        'All bookings are subject to availability and confirmation by the bus operator',
        'Prices displayed include all applicable taxes unless stated otherwise',
        'Booking confirmation is sent via email and SMS after successful payment',
        'It is your responsibility to verify passenger details and travel dates before confirmation',
        'We reserve the right to cancel bookings found with incorrect pricing due to technical errors',
        'Convenience fee is non-refundable under all circumstances'
      ]
    },
    {
      icon: DollarSign,
      title: '3. Pricing and Taxes',
      content: [
        'All prices are in Indian Rupees (INR) unless specified otherwise',
        'GST is applicable on all bookings as per government regulations',
        'Operator service charges may apply and are included in the fare',
        'Dynamic pricing may apply based on demand and availability',
        'Price changes after booking are not applicable',
        'Any bank charges for refunds will be deducted from refund amount'
      ]
    },
    {
      icon: Clock,
      title: '4. Cancellation and Refunds',
      content: [
        'Cancellation charges apply as per the cancellation policy at the time of booking',
        'Refunds are processed to the original payment source only',
        'Partial cancellation of seats is allowed with applicable charges',
        'No-show passengers are not eligible for any refund',
        'Refund timelines vary by payment method (UPI: 24-48 hrs, Cards: 5-7 business days)',
        'Convenience fee is non-refundable in all cancellation scenarios'
      ]
    },
    {
      icon: UserCheck,
      title: '5. Passenger Responsibilities',
      content: [
        'Carry a valid government ID proof matching the name on the ticket',
        'Arrive at boarding point at least 15 minutes before departure',
        'Check bus and boarding point details before travel day',
        'Inform the operator immediately if unable to travel',
        'Follow bus operator rules and safety guidelines during journey',
        'Notify support of any issues or discrepancies within 24 hours of travel'
      ]
    },
    {
      icon: Shield,
      title: '6. User Accounts and Security',
      content: [
        'You are responsible for maintaining account confidentiality',
        'Notify us immediately of any unauthorized account access',
        'One person may not maintain multiple free accounts',
        'We reserve the right to suspend accounts found violating terms',
        'Automated or bot activity is strictly prohibited',
        'Account sharing is not permitted'
      ]
    },
    {
      icon: Ban,
      title: '7. Prohibited Activities',
      content: [
        'Reselling tickets without authorization',
        'Using automated tools or bots for booking',
        'Providing false or misleading information',
        'Attempting to circumvent our systems or security',
        'Harassing operators or customer support staff',
        'Any fraudulent or illegal activities'
      ]
    },
    {
      icon: RefreshCw,
      title: '8. Amendments and Modifications',
      content: [
        'Booking amendments are subject to operator approval',
        'Date changes are treated as cancellation + new booking',
        'Name changes are not permitted after booking confirmation',
        'Boarding point changes allowed up to 6 hours before departure',
        'Additional charges may apply for amendments',
        'All amendments must be requested through our platform'
      ]
    },
    {
      icon: CreditCard,
      title: '9. Payment Terms',
      content: [
        'All payments are processed through secure PCI DSS compliant gateways',
        'We do not store your card or payment details',
        'Failed transactions are automatically reversed within 24 hours',
        'Chargebacks are subject to investigation and may lead to account suspension',
        'Promo codes cannot be combined and have specific validity periods',
        'Cashback offers are subject to partner terms and conditions'
      ]
    },
    {
      icon: Scale,
      title: '10. Limitation of Liability',
      content: [
        'We act as an intermediary between users and bus operators',
        'Not liable for operator cancellations, delays, or service deficiencies',
        'Maximum liability limited to the ticket amount paid',
        'Not liable for indirect or consequential damages',
        'Not responsible for loss of personal belongings during travel',
        'Force majeure events are beyond our control'
      ]
    },
    {
      icon: Gavel,
      title: '11. Dispute Resolution',
      content: [
        'Governing law: Laws of India',
        'Jurisdiction: Courts in Mumbai only',
        'Attempt amicable resolution before legal action',
        'Arbitration as per Arbitration and Conciliation Act, 1996',
        'Class action waivers apply',
        'Notice period of 30 days for any legal proceedings'
      ]
    },
    {
      icon: Info,
      title: '12. Contact Information',
      content: [
        'Customer Support: support@birdmytrip.com | 1800-123-4567',
        'Grievance Officer: grievance@birdmytrip.com',
        'Legal Notices: legal@birdmytrip.com',
        'Office Address: 5th Floor, Business Plaza, Andheri East, Mumbai - 400069',
        'Response Time: Within 24 hours for all queries',
        'Working Hours: 24/7, 365 days'
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
              <FileText className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Effective: January 1, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms carefully before using BirdMyTrip's services.
              By using our platform, you agree to be bound by these terms.
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
        {/* Agreement Overview */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">User Agreement</h2>
              <p className="text-gray-600 leading-relaxed">
                This agreement is between you ("User") and BirdMyTrip ("Company," "we," "us," or "our"). 
                By accessing or using our platform, you acknowledge that you have read, understood, 
                and agree to be bound by all terms and conditions outlined in this document.
              </p>
            </div>
            <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
              <Scale className="w-12 h-12 mb-3" />
              <div className="text-2xl font-bold">v2.1</div>
              <div className="text-sm opacity-90">Current Version</div>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-blue-300 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h3>
                    {Array.isArray(section.content) ? (
                      <div className="space-y-2">
                        {section.content.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Acknowledgement
        <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">By using BirdMyTrip, you acknowledge that:</h3>
                <ul className="space-y-1 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>You have read and understood these Terms & Conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>You agree to be bound by all terms stated herein</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span>You are at least 18 years of age to enter into this agreement</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0">
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div> */}

        {/* Version History */}
        <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-8">
          <p>Terms & Conditions Version 2.1 | Last Updated: February 15, 2024</p>
          <p className="mt-1">Previous versions available upon request</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;