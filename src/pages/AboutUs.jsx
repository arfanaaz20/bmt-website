// import React from 'react';
// import {
//   Users,
//   Target,
//   Eye,
//   Heart,
//   Award,
//   Shield,
//   Bus,
//   Globe,
//   Clock,
//   CheckCircle,
//   ChevronRight,
//   Star,
//   TrendingUp,
//   Briefcase,
//   MapPin,
//   Mail,
//   Phone
// } from 'lucide-react';

// const AboutUsPage = () => {
//   const milestones = [
//     { year: '2018', title: 'Company Founded', description: 'Started with a vision to revolutionize bus travel in India' },
//     { year: '2019', title: '1 Million Users', description: 'Reached 1 million happy travelers within first year' },
//     { year: '2020', title: 'Pan-India Expansion', description: 'Expanded services to 500+ cities across India' },
//     { year: '2021', title: 'Mobile App Launch', description: 'Launched award-winning mobile app with live tracking' },
//     { year: '2022', title: '5 Million Users', description: 'Crossed 5 million user milestone' },
//     { year: '2023', title: 'International Presence', description: 'Expanded to Nepal, Bhutan & Bangladesh' }
//   ];

//   const values = [
//     {
//       icon: Users,
//       title: 'Customer First',
//       description: 'Every decision we make puts our customers at the center.',
//       color: 'blue'
//     },
//     {
//       icon: Shield,
//       title: 'Trust & Safety',
//       description: 'We prioritize the safety and security of our travelers.',
//       color: 'green'
//     },
//     {
//       icon: Heart,
//       title: 'Passion for Travel',
//       description: 'We live and breathe travel, making journeys memorable.',
//       color: 'red'
//     },
//     {
//       icon: Target,
//       title: 'Innovation',
//       description: 'Constantly evolving to provide the best booking experience.',
//       color: 'purple'
//     }
//   ];

//   const leadership = [
//     {
//       name: 'Rahul Sharma',
//       position: 'Founder & CEO',
//       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
//       bio: 'Former IIT Delhi graduate with 15+ years in travel tech'
//     },
//     {
//       name: 'Priya Patel',
//       position: 'Chief Technology Officer',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
//       bio: 'Tech visionary with expertise in scalable platforms'
//     },
//     {
//       name: 'Amit Kumar',
//       position: 'Chief Operating Officer',
//       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
//       bio: 'Operations expert with pan-India logistics experience'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
//         <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6">
//               <Users className="w-5 h-5 mr-2" />
//               <span className="text-sm font-medium">Since 2018</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">
//               About BirdMyTrip
//             </h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//               India's most trusted bus booking platform, connecting millions of travelers 
//               to their destinations with safety, comfort, and convenience.
//             </p>
//           </div>
//         </div>
//         <div className="relative h-16">
//           <svg className="absolute bottom-0 w-full h-16 text-gray-50 fill-current" preserveAspectRatio="none" viewBox="0 0 1440 54">
//             <path d="M0 22L120 16.7C240 11 480 1 720 7.7C960 14 1200 38 1320 50L1440 62V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z" />
//           </svg>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Our Story */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
//           <div>
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
//               <Star className="w-4 h-4 mr-2" />
//               Our Story
//             </div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">
//               Making Bus Travel Simple & Accessible
//             </h2>
//             <p className="text-gray-600 mb-4 text-lg leading-relaxed">
//               BirdMyTrip was founded in 2018 with a simple mission: to make bus travel 
//               in India hassle-free, transparent, and enjoyable. What started as a small 
//               team of travel enthusiasts has now grown into India's leading bus booking 
//               platform.
//             </p>
//             <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//               Today, we serve over 5 million happy travelers across 500+ cities, 
//               partnering with 2000+ bus operators to provide the widest selection of 
//               buses at the best prices.
//             </p>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center">
//                 <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
//                 <span className="text-gray-700">5M+ Travelers</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
//                 <span className="text-gray-700">500+ Cities</span>
//               </div>
//               <div className="flex items-center">
//                 <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
//                 <span className="text-gray-700">2000+ Operators</span>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
//               <Briefcase className="w-8 h-8 mb-4" />
//               <div className="text-3xl font-bold mb-1">6+</div>
//               <div className="text-blue-100">Years of Service</div>
//             </div>
//             <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
//               <Users className="w-8 h-8 mb-4" />
//               <div className="text-3xl font-bold mb-1">5M+</div>
//               <div className="text-green-100">Happy Customers</div>
//             </div>
//             <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
//               <Bus className="w-8 h-8 mb-4" />
//               <div className="text-3xl font-bold mb-1">2000+</div>
//               <div className="text-purple-100">Bus Partners</div>
//             </div>
//             <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-8 text-white">
//               <Globe className="w-8 h-8 mb-4" />
//               <div className="text-3xl font-bold mb-1">500+</div>
//               <div className="text-amber-100">Cities Covered</div>
//             </div>
//           </div>
//         </div>

//         {/* Mission & Vision */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
//           <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
//             <div className="p-3 bg-blue-100 rounded-xl w-fit mb-6">
//               <Target className="w-8 h-8 text-blue-600" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               To provide seamless, affordable, and reliable bus travel solutions to every 
//               Indian, leveraging technology to enhance the booking and travel experience.
//             </p>
//           </div>
//           <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
//             <div className="p-3 bg-purple-100 rounded-xl w-fit mb-6">
//               <Eye className="w-8 h-8 text-purple-600" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               To become India's most loved travel platform, connecting every corner of the 
//               country through sustainable and comfortable bus transportation.
//             </p>
//           </div>
//         </div>

//         {/* Core Values */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               The principles that guide everything we do at BirdMyTrip
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => {
//               const Icon = value.icon;
//               return (
//                 <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:border-blue-300 transition-all group">
//                   <div className={`p-4 bg-${value.color}-100 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform`}>
//                     <Icon className={`w-8 h-8 text-${value.color}-600`} />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
//                   <p className="text-gray-600">{value.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Milestones */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Key milestones that shaped our growth
//             </p>
//           </div>
//           <div className="relative">
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600 hidden md:block"></div>
//             <div className="space-y-8">
//               {milestones.map((milestone, index) => (
//                 <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
//                   <div className="flex-1 text-center md:text-right">
//                     {index % 2 === 0 && (
//                       <>
//                         <h3 className="text-2xl font-bold text-gray-800">{milestone.year}</h3>
//                         <p className="text-xl font-semibold text-blue-600 mb-2">{milestone.title}</p>
//                         <p className="text-gray-600">{milestone.description}</p>
//                       </>
//                     )}
//                   </div>
//                   <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-bold z-10">
//                     {index + 1}
//                   </div>
//                   <div className="flex-1 text-center md:text-left">
//                     {index % 2 !== 0 && (
//                       <>
//                         <h3 className="text-2xl font-bold text-gray-800">{milestone.year}</h3>
//                         <p className="text-xl font-semibold text-blue-600 mb-2">{milestone.title}</p>
//                         <p className="text-gray-600">{milestone.description}</p>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Leadership */}
//         <div className="mb-20">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">Leadership Team</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Experienced professionals driving our vision forward
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {leadership.map((leader, index) => (
//               <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-xl transition-all">
//                 <div className="w-32 h-32 mx-auto mb-4">
//                   <img 
//                     src={leader.image} 
//                     alt={leader.name}
//                     className="w-full h-full rounded-full object-cover border-4 border-blue-100"
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
//                 <p className="text-blue-600 font-medium mb-3">{leader.position}</p>
//                 <p className="text-gray-600 text-sm">{leader.bio}</p>
//               </div>
//             ))}
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default AboutUsPage;



























import React from 'react';

const milestones = [
  { year: '2018', title: 'Company Founded', description: 'Started with a vision to revolutionize bus travel in India' },
  { year: '2019', title: '1 Million Users', description: 'Reached 1 million happy travelers within first year' },
  { year: '2020', title: 'Pan-India Expansion', description: 'Expanded services to 500+ cities across India' },
  { year: '2021', title: 'Mobile App Launch', description: 'Launched award-winning mobile app with live tracking' },
  { year: '2022', title: '5 Million Users', description: 'Crossed 5 million user milestone' },
  { year: '2023', title: 'International Presence', description: 'Expanded to Nepal, Bhutan & Bangladesh' },
];

const values = [
  { emoji: '👥', title: 'Customer First', description: 'Every decision we make puts our customers at the center.', bg: '#eff6ff', color: '#1d4ed8' },
  { emoji: '🛡️', title: 'Trust & Safety', description: 'We prioritize the safety and security of our travelers.', bg: '#f0fdf4', color: '#15803d' },
  { emoji: '❤️', title: 'Passion for Travel', description: 'We live and breathe travel, making journeys memorable.', bg: '#fff1f2', color: '#be123c' },
  { emoji: '🚀', title: 'Innovation', description: 'Constantly evolving to provide the best booking experience.', bg: '#faf5ff', color: '#7e22ce' },
];

const stats = [
  { emoji: '💼', number: '6+', label: 'Years of service' },
  { emoji: '👤', number: '5M+', label: 'Happy customers' },
  { emoji: '🚌', number: '2000+', label: 'Bus partners' },
  { emoji: '🌍', number: '500+', label: 'Cities covered' },
];

const leadership = [
  { name: 'Rahul Sharma', role: 'Founder & CEO', initials: 'RS', bio: 'Former IIT Delhi graduate with 15+ years in travel tech', bg: '#eff6ff', color: '#1d4ed8' },
  { name: 'Priya Patel', role: 'Chief Technology Officer', initials: 'PP', bio: 'Tech visionary with expertise in scalable platforms', bg: '#faf5ff', color: '#7e22ce' },
  { name: 'Amit Kumar', role: 'Chief Operating Officer', initials: 'AK', bio: 'Operations expert with pan-India logistics experience', bg: '#f0fdf4', color: '#15803d' },
];

const s = {
  page: { minHeight: '100vh', background: '#f9fafb', fontFamily: 'system-ui, sans-serif', color: '#111827' },
  hero: { background: '#eff6ff', padding: '2.5rem 1.5rem 2rem', textAlign: 'center', borderRadius: '0 0 16px 16px', marginBottom: '2rem' },
  badge: { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 14px', background: '#dbeafe', color: '#1e40af', borderRadius: 999, fontSize: 12, fontWeight: 500, marginBottom: 12 },
  h1: { fontSize: 26, fontWeight: 700, color: '#1e3a8a', marginBottom: 10, margin: '0 0 10px' },
  subtitle: { fontSize: 15, color: '#4b5563', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 },
  container: { maxWidth: 880, margin: '0 auto', padding: '0 1.25rem 3rem' },
  section: { marginBottom: '2.5rem' },
  sectionLabel: { display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', background: '#eff6ff', color: '#1d4ed8', borderRadius: 999, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.5px', marginBottom: 10 },
  h2: { fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 6, margin: '0 0 6px' },
  body: { fontSize: 14, color: '#4b5563', lineHeight: 1.8, margin: '0 0 12px' },
  grid2: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 },
  grid4: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 },
  card: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' },
  statCard: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', textAlign: 'center' },
  checkRow: { display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#374151', marginBottom: 6 },
  dot: { width: 8, height: 8, borderRadius: '50%', background: '#22c55e', flexShrink: 0 },
  timelineLine: { width: 2, background: '#e5e7eb', borderRadius: 2, margin: '0 auto', flex: 1 },
  milestoneNum: { width: 36, height: 36, borderRadius: '50%', background: '#eff6ff', border: '2px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: '#1d4ed8', flexShrink: 0 },
  avatar: { width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, marginBottom: 12, margin: '0 auto 12px' },
  footer: { background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 },
  footerBtn: { padding: '8px 16px', borderRadius: 8, fontSize: 13, cursor: 'pointer', border: '1px solid #d1d5db', background: '#fff', color: '#374151' },
  footerBtnPrimary: { padding: '8px 16px', borderRadius: 8, fontSize: 13, cursor: 'pointer', border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', fontWeight: 500 },
};

export default function AboutUsPage() {
  return (
    <div style={s.page}>

      {/* Hero */}
      <div style={s.hero}>
        <div style={s.badge}>✈️ Since 2018</div>
        <h1 style={s.h1}>About BirdMyTrip</h1>
        <p style={s.subtitle}>
          India's most trusted bus booking platform, connecting millions of travelers
          to their destinations with safety, comfort, and convenience.
        </p>
      </div>

      <div style={s.container}>

        {/* Our Story */}
        <div style={{ ...s.section, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20, alignItems: 'start' }}>
          <div>
            <div style={s.sectionLabel}>⭐ Our story</div>
            <h2 style={s.h2}>Making bus travel simple & accessible</h2>
            <p style={s.body}>
              BirdMyTrip was founded in 2018 with a simple mission: to make bus travel
              in India hassle-free, transparent, and enjoyable. What started as a small
              team of travel enthusiasts has grown into India's leading bus booking platform.
            </p>
            <p style={s.body}>
              Today, we serve over 5 million happy travelers across 500+ cities,
              partnering with 2000+ bus operators to provide the widest selection
              at the best prices.
            </p>
            <div style={{ marginTop: 12 }}>
              {['5M+ Travelers', '500+ Cities', '2000+ Operators'].map(t => (
                <div key={t} style={s.checkRow}><span style={s.dot} />{t}</div>
              ))}
            </div>
          </div>

          {/* Stat Cards */}
          <div style={s.grid2}>
            {stats.map(st => (
              <div key={st.label} style={s.statCard}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{st.emoji}</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#111827', lineHeight: 1 }}>{st.number}</div>
                <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>{st.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div style={{ ...s.section }}>
          <div style={s.grid2}>
            <div style={s.card}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>🎯</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, margin: '0 0 8px' }}>Our mission</h3>
              <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
                To provide seamless, affordable, and reliable bus travel solutions to every
                Indian, leveraging technology to enhance the booking and travel experience.
              </p>
            </div>
            <div style={s.card}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>👁️</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8, margin: '0 0 8px' }}>Our vision</h3>
              <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>
                To become India's most loved travel platform, connecting every corner of the
                country through sustainable and comfortable bus transportation.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div style={s.section}>
          <div style={{ marginBottom: 16 }}>
            <div style={s.sectionLabel}>💡 Values</div>
            <h2 style={s.h2}>Our core values</h2>
          </div>
          <div style={s.grid4}>
            {values.map(v => (
              <div key={v.title} style={{ ...s.card, textAlign: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, margin: '0 auto 10px' }}>
                  {v.emoji}
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#111827', marginBottom: 5 }}>{v.title}</div>
                <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>{v.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div style={s.section}>
          <div style={{ marginBottom: 16 }}>
            <div style={s.sectionLabel}>🗓 Journey</div>
            <h2 style={s.h2}>Our milestones</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
                {/* Left line + dot */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 36 }}>
                  {i !== 0 && <div style={{ width: 2, height: 16, background: '#e5e7eb', borderRadius: 2 }} />}
                  <div style={s.milestoneNum}>{i + 1}</div>
                  {i !== milestones.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 16, background: '#e5e7eb', borderRadius: 2 }} />}
                </div>
                {/* Content */}
                <div style={{ paddingBottom: 20, paddingTop: i === 0 ? 0 : 16, flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 3 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: '#1d4ed8', background: '#eff6ff', padding: '2px 8px', borderRadius: 6 }}>{m.year}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{m.title}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div style={s.section}>
          <div style={{ marginBottom: 16 }}>
            <div style={s.sectionLabel}>🤝 Team</div>
            <h2 style={s.h2}>Leadership team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
            {leadership.map(l => (
              <div key={l.name} style={{ ...s.card, textAlign: 'center' }}>
                <div style={{ ...s.avatar, background: l.bg, color: l.color }}>{l.initials}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#111827', marginBottom: 3 }}>{l.name}</div>
                <div style={{ fontSize: 12, color: l.color, fontWeight: 500, marginBottom: 8 }}>{l.role}</div>
                <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>{l.bio}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Footer */}
        <div style={s.footer}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 3 }}>Get in touch</div>
            <div style={{ fontSize: 12, color: '#6b7280' }}>We'd love to hear from you anytime</div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button style={s.footerBtn}>📧 Email us</button>
            <button style={s.footerBtnPrimary}>📞 Call us</button>
          </div>
        </div>

      </div>
    </div>
  );
}