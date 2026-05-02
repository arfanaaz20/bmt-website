import React, { useState, useEffect, useRef } from 'react';

// ─── Theme ────────────────────────────────────────────────────────
const C = {
  bg:          '#08080f',
  bg2:         '#0d0d1a',
  bg3:         '#12121f',
  card:        '#111122',
  cardHover:   '#161630',
  border:      'rgba(138,99,255,0.18)',
  borderLight: 'rgba(138,99,255,0.08)',
  purple:      '#8a63ff',
  purpleDark:  '#6b44e0',
  purpleLight: 'rgba(138,99,255,0.12)',
  pink:        '#e040fb',
  cyan:        '#00e5ff',
  green:       '#00e676',
  red:         '#ff4444',
  textMain:    '#f0eeff',
  textSub:     '#a89ec9',
  textMuted:   '#6b6585',
};

const FONT_DISPLAY = "'Syne', sans-serif";
const FONT_BODY    = "'DM Sans', sans-serif";

// ─── Data ─────────────────────────────────────────────────────────
const clubs = [
  {
    id:1, name:'SINO Night Club', location:'Calangute, Goa',
    genres:['EDM','Bollywood','Hip-Hop'], rating:4.5, ratingLabel:'Excellent',
    hours:'9 PM – 3 AM', price:1500, capacity:800, status:'open',
    trending:true, featured:true,
    about:'Experience the ultimate nightlife with live DJs, amazing drinks, and a party vibe that lasts all night long. Perfect for couples, groups, and anyone looking to dance and have fun!',
    img:'https://unsplash.com/photos/people-dancing-inside-room-with-green-lights-A_0C42zmz1Q',
    grad:['#4a0080','#001aff'],
    amenities:['Live DJ','Bar','Dance Floor','VIP Section','Smoke Zone'],
  },
  {
    id:2, name:'Vibe Lounge', location:'Baga, Goa',
    genres:['Baile Funk','House'], rating:4.2, ratingLabel:'Excellent',
    hours:'9 PM – 2 AM', price:1200, capacity:500, status:'open',
    trending:true, featured:false,
    about:'Where beats meet vibes. A sophisticated lounge-meets-club experience with handcrafted cocktails and resident DJ sets that keep the energy high till closing.',
    img:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80',
    grad:['#001f5c','#3a006f'],
    amenities:['Rooftop','Cocktail Bar','Live Sets','Hookah'],
  },
  {
    id:3, name:'Neon Club', location:'Anjuna, Goa',
    genres:['Trance','EDM'], rating:4.7, ratingLabel:'Excellent',
    hours:'10 PM – 4 AM', price:1800, capacity:600, status:'closed',
    trending:true, featured:true,
    about:'Goa\'s underground trance destination. Iconic outdoor stage, breathtaking light shows, and a global lineup of trance DJs in the heart of Anjuna.',
    img:'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80',
    grad:['#0d003a','#4a1080'],
    amenities:['Outdoor Stage','Laser Show','Bar','Chill Zone','Camping'],
  },
  {
    id:4, name:'Club Cubana', location:'Arpora, Goa',
    genres:['Retro','Bollywood','Reggaeton'], rating:4.3, ratingLabel:'Great',
    hours:'9:30 PM – 3 AM', price:2000, capacity:1000, status:'open',
    trending:false, featured:true,
    about:'Known as the "nightclub in the sky", Cubana is a multi-level open-air club perched on a hillside with stunning views, pools, and legendary Goa nights.',
    img:'https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?w=900&q=80',
    grad:['#001a0d','#003366'],
    amenities:['Pool','Open Air','Multiple Bars','VIP Tables','Live Band'],
  },
  {
    id:5, name:'SinQ Beach Club', location:'Candolim, Goa',
    genres:['Deep House','Progressive'], rating:4.6, ratingLabel:'Excellent',
    hours:'8 PM – 2 AM', price:1600, capacity:700, status:'open',
    trending:false, featured:false,
    about:'Beachfront luxury meets underground music. SinQ brings world-class DJs to the shores of Candolim with an unmatched poolside party atmosphere.',
    img:'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=900&q=80',
    grad:['#001533','#0a004d'],
    amenities:['Beachfront','Pool','Fine Dining','Champagne Bar','VIP Cabanas'],
  },
  {
    id:6, name:'LPK Waterfront', location:'Nerul, Goa',
    genres:['Psychedelic','Fusion'], rating:4.4, ratingLabel:'Great',
    hours:'9 PM – 2 AM', price:1400, capacity:450, status:'open',
    trending:false, featured:false,
    about:'A unique open-air club built along the river with a bohemian vibe, firelit ambiance, and hypnotic music that bridges cultures and genres.',
    img:'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?w=900&q=80',
    grad:['#1a0a00','#001a33'],
    amenities:['Riverside','Fire Pits','World Music','Organic Bar'],
  },
];

const FILTERS = ['All','EDM','Bollywood','Trance','House','Hip-Hop'];

// ─── Global CSS ───────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  html { scroll-behavior:smooth; }
  body { background:${C.bg}; color:${C.textMain}; font-family:${FONT_BODY}; }
  ::-webkit-scrollbar { width:6px; }
  ::-webkit-scrollbar-track { background:${C.bg2}; }
  ::-webkit-scrollbar-thumb { background:${C.border}; border-radius:3px; }

  @keyframes fadeUp   { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
  @keyframes slideRight { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
  @keyframes pulseDot { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.8);opacity:0.4} }
  @keyframes shimmer  { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
  @keyframes rotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes checkBounce { 0%{transform:scale(0)} 60%{transform:scale(1.2)} 100%{transform:scale(1)} }
  @keyframes glowPulse { 0%,100%{box-shadow:0 0 20px rgba(138,99,255,0.3)} 50%{box-shadow:0 0 50px rgba(138,99,255,0.7)} }

  .fade-up    { animation:fadeUp  0.45s cubic-bezier(0.22,1,0.36,1) both; }
  .fade-in    { animation:fadeIn  0.3s ease both; }
  .slide-r    { animation:slideRight 0.4s cubic-bezier(0.22,1,0.36,1) both; }
  .pulse-dot  { animation:pulseDot 2s infinite; }
  .check-bounce { animation:checkBounce 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
  .glow-pulse { animation:glowPulse 2.5s ease-in-out infinite; }

  .club-card {
    transition:transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease, border-color 0.2s;
    cursor:pointer;
  }
  .club-card:hover {
    transform:translateY(-6px);
    box-shadow:0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(138,99,255,0.4);
  }

  .btn-primary {
    background:linear-gradient(135deg,${C.purple},${C.purpleDark});
    color:#fff; border:none; font-family:${FONT_BODY}; font-weight:600;
    cursor:pointer; border-radius:10px;
    transition:all 0.2s; position:relative; overflow:hidden;
  }
  .btn-primary::before {
    content:''; position:absolute; inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,0.12),transparent);
    opacity:0; transition:opacity 0.2s;
  }
  .btn-primary:hover::before { opacity:1; }
  .btn-primary:hover { transform:translateY(-1px); box-shadow:0 8px 25px rgba(138,99,255,0.45); }
  .btn-primary:active { transform:scale(0.97); }

  .btn-outline {
    background:transparent; color:${C.textSub};
    border:1px solid ${C.border}; border-radius:10px;
    font-family:${FONT_BODY}; font-weight:500;
    cursor:pointer; transition:all 0.2s;
  }
  .btn-outline:hover { background:${C.purpleLight}; border-color:${C.purple}; color:${C.textMain}; }

  .filter-chip {
    font-family:${FONT_BODY}; font-weight:500;
    cursor:pointer; border-radius:999px; white-space:nowrap;
    transition:all 0.18s;
  }

  .genre-tag {
    background:rgba(138,99,255,0.1); color:${C.purple};
    border:1px solid rgba(138,99,255,0.2); border-radius:6px;
    font-size:11px; font-weight:600; padding:3px 10px;
    font-family:${FONT_BODY};
  }

  input,select,textarea { font-family:${FONT_BODY}; outline:none; }
  input:focus,select:focus { border-color:${C.purple} !important; box-shadow:0 0 0 3px rgba(138,99,255,0.15); }

  .detail-img-overlay {
    background:linear-gradient(to bottom, transparent 30%, rgba(8,8,15,0.7) 70%, ${C.bg} 100%);
  }

  .sidebar-section { border-bottom:1px solid ${C.border}; padding-bottom:20px; margin-bottom:20px; }

  .star-fill { color:#ffd600; }

  .ticket-opt {
    cursor:pointer; border-radius:14px;
    transition:all 0.18s;
  }
  .ticket-opt:hover { border-color:${C.purple} !important; background:rgba(138,99,255,0.07) !important; }

  /* Noise texture overlay */
  .noise::after {
    content:''; position:absolute; inset:0; pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    opacity:0.06; border-radius:inherit;
  }
`;

// ─── Star Rating ──────────────────────────────────────────────────
const Stars = ({ rating, size=13 }) => (
  <span style={{display:'inline-flex',gap:2}}>
    {[1,2,3,4,5].map(i=>(
      <span key={i} className="star-fill" style={{fontSize:size,opacity:i<=Math.floor(rating)?1:0.25}}>★</span>
    ))}
  </span>
);

// ─── Status Badge ─────────────────────────────────────────────────
const StatusBadge = ({ status }) => (
  <div style={{display:'inline-flex',alignItems:'center',gap:6}}>
    <div className="pulse-dot" style={{
      width:7, height:7, borderRadius:'50%',
      background: status==='open' ? C.green : C.red,
      flexShrink:0,
    }}/>
    <span style={{
      fontSize:12, fontWeight:600,
      color: status==='open' ? C.green : C.red,
    }}>
      {status==='open' ? 'OPEN NOW' : 'CLOSED'}
    </span>
  </div>
);

// ─── Navbar ───────────────────────────────────────────────────────
const Navbar = ({ page, onBack }) => (
  <nav style={{
    position:'sticky', top:0, zIndex:100,
    background:'rgba(8,8,15,0.85)', backdropFilter:'blur(20px)',
    borderBottom:`1px solid ${C.border}`,
    padding:'0 32px', height:64,
    display:'flex', alignItems:'center', justifyContent:'space-between',
  }}>
    <div style={{display:'flex',alignItems:'center',gap:32}}>
      {page!=='list' && (
        <button onClick={onBack} className="btn-outline" style={{
          padding:'7px 16px', fontSize:13, display:'flex', alignItems:'center', gap:7,
        }}>
          ← Back
        </button>
      )}
      <div style={{fontFamily:FONT_BODY, fontWeight:800, fontSize:22, letterSpacing:-0.5}}>
        <span style={{color:C.textMain}}>night</span>
        <span style={{color:C.purple}}>clubs</span>
        <span style={{
          marginLeft:8, fontSize:11, fontFamily:FONT_BODY, fontWeight:600,
          color:C.textMuted, letterSpacing:2, textTransform:'uppercase', verticalAlign:'middle',
        }}>GOA</span>
      </div>
    </div>
    <div style={{display:'flex',alignItems:'center',gap:12}}>
      <div style={{
        display:'flex', alignItems:'center', gap:6,
        background:'rgba(0,230,118,0.08)', border:'1px solid rgba(0,230,118,0.2)',
        borderRadius:999, padding:'5px 14px',
      }}>
        <div className="pulse-dot" style={{width:7,height:7,borderRadius:'50%',background:C.green}}/>
        <span style={{fontSize:12,color:C.green,fontWeight:600}}>
          {clubs.filter(c=>c.status==='open').length} clubs open tonight
        </span>
      </div>
      <div style={{
        width:38, height:38, borderRadius:'50%',
        background:`linear-gradient(135deg,${C.purple},${C.pink})`,
        display:'flex', alignItems:'center', justifyContent:'center',
        fontSize:14, fontWeight:700, color:'#fff', cursor:'pointer',
        flexShrink:0,
      }}>N</div>
    </div>
  </nav>
);

// ─── Club Card ────────────────────────────────────────────────────
const ClubCard = ({ club, onView, delay=0 }) => (
  <div
    className="club-card fade-up"
    onClick={() => onView(club)}
    style={{
      background:C.card, borderRadius:18,
      border:`1px solid ${C.border}`,
      overflow:'hidden',
      animationDelay:`${delay}ms`,
      display:'flex', flexDirection:'column',
    }}
  >
    {/* Image */}
    <div style={{position:'relative',height:200,overflow:'hidden'}}>
      <img src={club.img} alt={club.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',transition:'transform 0.4s'}}
        onMouseOver={e=>e.currentTarget.style.transform='scale(1.06)'}
        onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}
      />
      <div style={{
        position:'absolute', inset:0,
        background:`linear-gradient(to bottom, transparent 40%, ${C.card} 100%)`,
      }}/>
      {/* Badges */}
      <div style={{position:'absolute',top:12,left:12,right:12,display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
        {club.trending ? (
          <span style={{
            background:'rgba(0,0,0,0.55)', backdropFilter:'blur(8px)',
            color:'#ff9800', fontSize:11, fontWeight:700,
            padding:'4px 10px', borderRadius:999,
            display:'inline-flex', alignItems:'center', gap:5,
          }}>🔥 Trending</span>
        ) : <span/>}
        {club.featured && (
          <span style={{
            background:`linear-gradient(135deg,${C.purple},${C.pink})`,
            color:'#fff', fontSize:11, fontWeight:700,
            padding:'4px 10px', borderRadius:999,
          }}>★ Featured</span>
        )}
      </div>
      {/* Rating bottom-left */}
      <div style={{position:'absolute',bottom:10,left:12,display:'flex',alignItems:'center',gap:8}}>
        <div style={{
          background:'#1b5e20', borderRadius:6,
          padding:'3px 8px', display:'flex', alignItems:'center', gap:5,
        }}>
          <span style={{color:'#fff',fontSize:11,fontWeight:700}}>★ {club.rating}</span>
        </div>
        <span style={{fontSize:11,color:'rgba(255,255,255,0.7)',fontWeight:500}}>{club.ratingLabel}</span>
        <StatusBadge status={club.status}/>
      </div>
    </div>

    {/* Body */}
    <div style={{padding:'16px 18px',flex:1,display:'flex',flexDirection:'column'}}>
      <div style={{marginBottom:10}}>
        <h3 style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:18,color:C.textMain,marginBottom:4}}>{club.name}</h3>
        <div style={{display:'flex',alignItems:'center',gap:6,fontSize:13,color:C.textMuted}}>
          <span>📍</span> {club.location}
        </div>
      </div>

      <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:12}}>
        {club.genres.map(g=><span key={g} className="genre-tag">{g}</span>)}
      </div>

      <div style={{marginTop:'auto',display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:12,borderTop:`1px solid ${C.borderLight}`}}>
        <div>
          <div style={{fontSize:12,color:C.textMuted,marginBottom:2}}>⏰ {club.hours}</div>
          <div style={{fontSize:18,fontWeight:700,color:C.purple,fontFamily:FONT_BODY}}>
            ₹{club.price.toLocaleString()}<span style={{fontSize:12,fontWeight:400,color:C.textMuted}}> /entry</span>
          </div>
        </div>
        <button className="btn-primary" style={{padding:'9px 20px',fontSize:13}}>
          View →
        </button>
      </div>
    </div>
  </div>
);

// ─── List Page ────────────────────────────────────────────────────
const ListPage = ({ onView }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  let filtered = clubs.filter(c => {
    const matchF = filter==='All' || c.genres.includes(filter);
    const q = search.toLowerCase();
    const matchS = !q || c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q) || c.genres.some(g=>g.toLowerCase().includes(q));
    return matchF && matchS;
  });
  if (sortBy==='rating')  filtered = [...filtered].sort((a,b)=>b.rating-a.rating);
  if (sortBy==='price')   filtered = [...filtered].sort((a,b)=>a.price-b.price);
  if (sortBy==='featured') filtered = [...filtered].sort((a,b)=>(b.featured?1:0)-(a.featured?1:0));

  return (
    <div style={{minHeight:'100vh',background:C.bg,fontFamily:FONT_BODY}}>
      {/* Hero Banner */}
      <div style={{
        position:'relative', overflow:'hidden',
        padding:'60px 64px 56px',
        background:`linear-gradient(135deg, #08000f 0%, #0d0020 50%, #000a1a 100%)`,
      }}>
        {/* Decorative blobs */}
        {[['-10%','20%','500px',C.purple,'0.08'],[null,'5%','400px',C.pink,'0.06'],['30%',null,'350px',C.cyan,'0.04']].map(([l,r,s,c,o],i)=>(
          <div key={i} style={{
            position:'absolute', top:'50%', left:l||undefined, right:r||undefined,
            transform:'translateY(-50%)',
            width:s, height:s, borderRadius:'50%',
            background:c, opacity:parseFloat(o), filter:'blur(80px)', pointerEvents:'none',
          }}/>
        ))}

        <div style={{position:'relative',zIndex:1,maxWidth:900}}>
          <div style={{
            display:'inline-flex', alignItems:'center', gap:10,
            background:'rgba(138,99,255,0.1)', border:'1px solid rgba(138,99,255,0.3)',
            borderRadius:999, padding:'7px 18px', marginBottom:22,
          }}>
            <div className="pulse-dot" style={{width:8,height:8,borderRadius:'50%',background:C.green}}/>
            <span style={{fontSize:12,color:'#c4b5fd',fontWeight:600,letterSpacing:0.5}}>
              27 Dec · 9 PM onwards · 2 Guests
            </span>
          </div>

          <h1 style={{
            fontFamily:FONT_BODY, fontWeight:800, fontSize:34,
            lineHeight:1.08, letterSpacing:0, marginBottom:16,
            color:C.textMain,
          }}>
            Top Night Clubs in Goa
            {/* <span style={{
              background:`linear-gradient(90deg,${C.purple},${C.pink})`,
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
            }}>in Goa</span> */}
          </h1>
          <p style={{fontSize:16,color:C.textMuted,marginBottom:32,maxWidth:500,lineHeight:1.6}}>
            Discover the best clubs, book entries instantly, and party your way through Goa's legendary nightlife scene.
          </p>

          {/* Offer banner */}
          <div className="glow-pulse" style={{
            display:'inline-flex', alignItems:'center', gap:16,
            background:'linear-gradient(135deg,rgba(138,99,255,0.2),rgba(224,64,251,0.15))',
            border:'1px solid rgba(138,99,255,0.4)',
            borderRadius:16, padding:'14px 24px',
          }}>
            <span style={{fontSize:24}}>🎉</span>
            <div>
              <div style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:15,color:C.textMain,marginBottom:2}}>PARTY NIGHT OFFER</div>
              <div style={{fontSize:13,color:C.textMuted}}>Free entry for couples till 10 PM · Unlimited drinks till midnight!</div>
            </div>
            <button className="btn-primary" style={{padding:'10px 22px',fontSize:13,whiteSpace:'nowrap'}}>
              Book Entry
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        background:C.bg2, borderBottom:`1px solid ${C.border}`,
        padding:'16px 64px', display:'flex', alignItems:'center', gap:20,
        flexWrap:'wrap',
      }}>
        {/* Search */}
        <div style={{
          display:'flex', alignItems:'center', gap:10,
          background:C.bg3, border:`1px solid ${C.border}`, borderRadius:12,
          padding:'10px 16px', flex:'0 0 280px',
        }}>
          <span style={{color:C.textMuted}}>🔍</span>
          <input
            value={search} onChange={e=>setSearch(e.target.value)}
            placeholder="Search clubs, genres..."
            style={{background:'none',border:'none',flex:1,fontSize:13,color:C.textMain}}
          />
          {search && <button onClick={()=>setSearch('')} style={{background:'none',border:'none',cursor:'pointer',color:C.textMuted,fontSize:16}}>×</button>}
        </div>

        {/* Filters */}
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          {FILTERS.map(f=>(
            <button
              key={f} className="filter-chip"
              onClick={()=>setFilter(f)}
              style={{
                padding:'8px 18px', fontSize:13,
                background:filter===f?`linear-gradient(135deg,${C.purple},${C.purpleDark})`:'transparent',
                color:filter===f?'#fff':C.textMuted,
                border:`1px solid ${filter===f?'transparent':C.border}`,
              }}
            >{f==='All'?'All Clubs':f}</button>
          ))}
        </div>

        {/* Sort */}
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:10}}>
          <span style={{fontSize:13,color:C.textMuted}}>Sort:</span>
          {[['featured','Featured'],['rating','Top Rated'],['price','Price']].map(([v,l])=>(
            <button key={v} className="filter-chip"
              onClick={()=>setSortBy(v)}
              style={{
                padding:'7px 14px', fontSize:12,
                background:sortBy===v?C.purpleLight:'transparent',
                color:sortBy===v?C.purple:C.textMuted,
                border:`1px solid ${sortBy===v?C.purple:C.border}`,
              }}
            >{l}</button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div style={{padding:'32px 64px',maxWidth:1600}}>
        <div style={{
          fontSize:12, fontWeight:600, color:C.textMuted,
          letterSpacing:1.2, textTransform:'uppercase', marginBottom:20,
        }}>
          {filtered.length} club{filtered.length!==1?'s':''} found
        </div>

        {filtered.length===0 ? (
          <div className="fade-in" style={{textAlign:'center',padding:'80px 0'}}>
            <div style={{fontSize:56,marginBottom:16}}>🎵</div>
            <p style={{color:C.textMuted,fontSize:16,marginBottom:16}}>No clubs match your search</p>
            <button className="btn-primary" onClick={()=>{setSearch('');setFilter('All');}} style={{padding:'10px 24px',fontSize:14}}>
              Clear filters
            </button>
          </div>
        ) : (
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))',gap:24}}>
            {filtered.map((c,i)=><ClubCard key={c.id} club={c} onView={onView} delay={i*70}/>)}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Detail Page ──────────────────────────────────────────────────
const DetailPage = ({ club, onBook }) => {
  return (
    <div className="fade-in" style={{minHeight:'100vh',background:C.bg,fontFamily:FONT_BODY}}>
      {/* Hero Image */}
      <div style={{position:'relative',height:460,overflow:'hidden'}}>
        <img src={club.img} alt={club.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
        <div className="detail-img-overlay" style={{position:'absolute',inset:0}}/>
        <div style={{
          position:'absolute',bottom:0,left:0,right:0,
          padding:'32px 64px',display:'flex',alignItems:'flex-end',justifyContent:'space-between',
        }}>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:10}}>
              {club.trending && <span style={{background:'rgba(0,0,0,0.5)',backdropFilter:'blur(8px)',color:'#ff9800',fontSize:12,fontWeight:700,padding:'4px 12px',borderRadius:999}}>🔥 Trending</span>}
              <StatusBadge status={club.status}/>
            </div>
            <h1 style={{fontFamily:FONT_BODY,fontWeight:800,fontSize:44,color:'#fff',letterSpacing:-1,marginBottom:6}}>{club.name}</h1>
            <div style={{display:'flex',alignItems:'center',gap:16,fontSize:14,color:'rgba(255,255,255,0.7)'}}>
              <span>📍 {club.location}</span>
              <span>⏰ {club.hours}</span>
            </div>
          </div>
          <div style={{textAlign:'right'}}>
            <div style={{
              background:`linear-gradient(135deg,${club.grad[0]},${club.grad[1]})`,
              borderRadius:16, padding:'16px 28px',
              border:'1px solid rgba(138,99,255,0.3)',
            }}>
              <div style={{fontSize:12,color:'rgba(255,255,255,0.6)',marginBottom:4}}>Entry Price</div>
              <div style={{fontFamily:FONT_BODY,fontWeight:800,fontSize:36,color:'#fff'}}>₹{club.price.toLocaleString()}</div>
              <div style={{fontSize:11,color:'rgba(255,255,255,0.5)'}}>per person</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{padding:'40px 64px',display:'grid',gridTemplateColumns:'1fr 360px',gap:40,maxWidth:1300}}>
        {/* Left */}
        <div>
          {/* Rating row */}
          <div style={{
            display:'flex',alignItems:'center',gap:24,marginBottom:28,
            background:C.card,borderRadius:14,border:`1px solid ${C.border}`,padding:'16px 20px',
          }}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{
                background:'#1b5e20',borderRadius:8,padding:'6px 12px',
                display:'flex',alignItems:'center',gap:6,
              }}>
                <span style={{color:'#fff',fontWeight:800,fontSize:15}}>★ {club.rating}</span>
              </div>
              <div>
                <div style={{fontSize:14,fontWeight:600,color:C.textMain}}>{club.ratingLabel}</div>
                <Stars rating={club.rating}/>
              </div>
            </div>
            <div style={{width:1,height:40,background:C.border}}/>
            <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
              {club.genres.map(g=><span key={g} className="genre-tag" style={{fontSize:12,padding:'4px 12px'}}>{g}</span>)}
            </div>
            <div style={{marginLeft:'auto'}}>
              <div style={{fontSize:12,color:C.textMuted}}>Capacity</div>
              <div style={{fontSize:16,fontWeight:700,color:C.textMain}}>👥 {club.capacity.toLocaleString()}</div>
            </div>
          </div>

          {/* About */}
          <div style={{marginBottom:32}}>
            <h2 style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:22,color:C.textMain,marginBottom:12}}>About the Club</h2>
            <p style={{fontSize:15,color:C.textSub,lineHeight:1.75}}>{club.about}</p>
          </div>

          {/* Amenities */}
          <div style={{marginBottom:32}}>
            <h2 style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:22,color:C.textMain,marginBottom:14}}>Amenities</h2>
            <div style={{display:'flex',flexWrap:'wrap',gap:10}}>
              {club.amenities.map(a=>(
                <div key={a} style={{
                  background:C.card,border:`1px solid ${C.border}`,borderRadius:10,
                  padding:'10px 16px',fontSize:13,color:C.textMain,fontWeight:500,
                  display:'flex',alignItems:'center',gap:8,
                }}>
                  <span style={{color:C.purple}}>✓</span> {a}
                </div>
              ))}
            </div>
          </div>

          {/* Music genres visual */}
          <div>
            <h2 style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:22,color:C.textMain,marginBottom:14}}>Music Tonight</h2>
            <div style={{display:'flex',gap:12}}>
              {club.genres.map((g,i)=>{
                const colors = [C.purple,C.pink,C.cyan,'#ff9800','#00e676'];
                return (
                  <div key={g} style={{
                    flex:1, background:`linear-gradient(135deg,${colors[i%colors.length]}22,${colors[(i+1)%colors.length]}11)`,
                    border:`1px solid ${colors[i%colors.length]}44`,
                    borderRadius:12,padding:'16px',textAlign:'center',
                  }}>
                    <div style={{fontSize:22,marginBottom:6}}>🎧</div>
                    <div style={{fontSize:13,fontWeight:700,color:colors[i%colors.length]}}>{g}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div>
          <div style={{
            background:C.card,borderRadius:20,border:`1px solid ${C.border}`,
            padding:24,position:'sticky',top:84,
          }}>
            <div className="sidebar-section">
              <h3 style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:18,color:C.textMain,marginBottom:14}}>Quick Info</h3>
              {[
                ['📍','Location',club.location],
                ['⏰','Hours',club.hours],
                ['💰','Entry',`₹${club.price.toLocaleString()} per person`],
                ['👥','Capacity',`${club.capacity.toLocaleString()} guests`],
              ].map(([icon,label,val])=>(
                <div key={label} style={{display:'flex',gap:12,marginBottom:12}}>
                  <span style={{fontSize:15}}>{icon}</span>
                  <div>
                    <div style={{fontSize:11,color:C.textMuted,fontWeight:600,textTransform:'uppercase',letterSpacing:0.5}}>{label}</div>
                    <div style={{fontSize:13,color:C.textMain,fontWeight:500}}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-primary" onClick={() => onBook(club)} style={{
              width:'100%', padding:'15px', fontSize:15,
              fontFamily:FONT_BODY, fontWeight:700, letterSpacing:0.3,
            }}>
              BOOK ENTRY
            </button>
            <p style={{fontSize:11,color:C.textMuted,textAlign:'center',marginTop:10}}>
              🔒 Secure booking · Instant confirmation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Booking Page ─────────────────────────────────────────────────
const BookingPage = ({ club, onBack }) => {
  const [step, setStep]     = useState(1);
  const [ticket, setTicket] = useState('general');
  const [guests, setGuests] = useState(2);
  const [form, setForm]     = useState({name:'',email:'',phone:''});
  const [errors, setErrors] = useState({});
  const [done, setDone]     = useState(false);

  const price = ticket==='vip' ? club.price+800 : club.price;
  const total = price * guests;

  const validate = () => {
    const e={};
    if(!form.name.trim()) e.name='Name is required';
    if(!form.email.includes('@')) e.email='Valid email required';
    if(form.phone.length<7) e.phone='Valid phone required';
    setErrors(e);
    return !Object.keys(e).length;
  };

  if(done) return (
    <div className="fade-in" style={{minHeight:'calc(100vh - 64px)',display:'flex',alignItems:'center',justifyContent:'center',padding:32,fontFamily:FONT_BODY}}>
      <div style={{
        background:C.card,borderRadius:24,border:`1px solid ${C.border}`,
        padding:'48px 40px',maxWidth:480,width:'100%',textAlign:'center',
      }}>
        <div className="check-bounce" style={{
          width:88, height:88, borderRadius:'50%',
          background:`linear-gradient(135deg,${C.purple},${C.pink})`,
          display:'flex',alignItems:'center',justifyContent:'center',
          margin:'0 auto 24px', fontSize:36,
        }}>✓</div>
        <h2 style={{fontFamily:FONT_BODY,fontWeight:800,fontSize:28,color:C.textMain,marginBottom:8}}>Booking Confirmed! 🎉</h2>
        <p style={{fontSize:14,color:C.textMuted,marginBottom:28}}>
          Tickets sent to <strong style={{color:C.purple}}>{form.email}</strong>
        </p>
        <div style={{background:C.bg2,borderRadius:14,padding:'16px 20px',marginBottom:24,textAlign:'left'}}>
          {[['Club',club.name],['Date','27 Dec · '+club.hours],['Location',club.location],['Ticket',ticket==='vip'?'VIP 👑':'General 🎟️'],['Guests',`${guests}`],['Total',`₹${total.toLocaleString()}`]].map(([k,v])=>(
            <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'7px 0',fontSize:13,borderBottom:`1px solid ${C.borderLight}`}}>
              <span style={{color:C.textMuted}}>{k}</span>
              <span style={{color:C.textMain,fontWeight:600}}>{v}</span>
            </div>
          ))}
        </div>
        <button className="btn-primary" onClick={onBack} style={{width:'100%',padding:14,fontSize:15,fontFamily:FONT_BODY,fontWeight:700}}>
          Explore More Clubs →
        </button>
      </div>
    </div>
  );

  return (
    <div style={{minHeight:'calc(100vh - 64px)',background:C.bg,fontFamily:FONT_BODY,padding:'40px 64px'}}>
      <div style={{maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 420px',gap:40,alignItems:'start'}}>
        {/* Left: Form */}
        <div>
          {/* Steps */}
          <div style={{display:'flex',alignItems:'center',gap:0,marginBottom:32}}>
            {[1,2].map((s,i)=>(
              <React.Fragment key={s}>
                <div style={{
                  width:36,height:36,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',
                  background:step>=s?`linear-gradient(135deg,${C.purple},${C.purpleDark})`:'rgba(138,99,255,0.1)',
                  color:step>=s?'#fff':C.textMuted,
                  fontSize:13,fontWeight:700,transition:'all 0.3s',flexShrink:0,
                }}>
                  {step>s?'✓':s}
                </div>
                <div style={{marginLeft:10,marginRight:i===0?0:0}}>
                  <div style={{fontSize:12,fontWeight:700,color:step>=s?C.textMain:C.textMuted}}>{s===1?'Choose Tickets':'Your Details'}</div>
                  <div style={{fontSize:11,color:C.textMuted}}>{s===1?'Type & quantity':'Contact info'}</div>
                </div>
                {i===0&&<div style={{flex:1,height:2,background:step===2?C.purple:C.border,borderRadius:2,margin:'0 16px',transition:'background 0.3s'}}/>}
              </React.Fragment>
            ))}
          </div>

          <div style={{background:C.card,borderRadius:20,border:`1px solid ${C.border}`,padding:28}}>
            {step===1 ? (
              <>
                <h3 style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:20,color:C.textMain,marginBottom:20}}>Choose Ticket Type</h3>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:24}}>
                  {[
                    {key:'general',label:'General',sub:'Standard entry + dance floor',icon:'🎟️',price:club.price},
                    {key:'vip',label:'VIP',sub:'Premium lounge + skip queue',icon:'👑',price:club.price+800},
                  ].map(opt=>(
                    <div
                      key={opt.key} className="ticket-opt"
                      onClick={()=>setTicket(opt.key)}
                      style={{
                        border:`2px solid ${ticket===opt.key?C.purple:C.border}`,
                        background:ticket===opt.key?C.purpleLight:C.bg3,
                        padding:'20px 18px',position:'relative',
                      }}
                    >
                      {ticket===opt.key&&(
                        <div style={{
                          position:'absolute',top:10,right:10,width:20,height:20,borderRadius:'50%',
                          background:C.purple,display:'flex',alignItems:'center',justifyContent:'center',
                          fontSize:11,color:'#fff',fontWeight:700,
                        }}>✓</div>
                      )}
                      <div style={{fontSize:28,marginBottom:8}}>{opt.icon}</div>
                      <div style={{fontSize:16,fontWeight:700,color:C.textMain,fontFamily:FONT_BODY,marginBottom:4}}>{opt.label}</div>
                      <div style={{fontSize:12,color:C.textMuted,marginBottom:12}}>{opt.sub}</div>
                      <div style={{fontSize:22,fontWeight:800,color:C.purple,fontFamily:FONT_BODY}}>₹{opt.price.toLocaleString()}</div>
                    </div>
                  ))}
                </div>

                <div style={{marginBottom:20}}>
                  <label style={{display:'block',fontSize:13,fontWeight:600,color:C.textSub,marginBottom:8}}>Number of Guests</label>
                  <div style={{display:'flex',alignItems:'center',gap:12}}>
                    {[1,2,3,4,5,6,8,10].map(n=>(
                      <button key={n} onClick={()=>setGuests(n)} style={{
                        width:40,height:40,borderRadius:10,border:`2px solid ${guests===n?C.purple:C.border}`,
                        background:guests===n?C.purpleLight:C.bg3,
                        color:guests===n?C.purple:C.textMuted,
                        fontWeight:700,fontSize:13,cursor:'pointer',transition:'all 0.15s',
                      }}>{n}</button>
                    ))}
                  </div>
                </div>

                <button className="btn-primary" onClick={()=>setStep(2)} style={{width:'100%',padding:14,fontSize:15,fontFamily:FONT_BODY,fontWeight:700}}>
                  Continue to Details →
                </button>
              </>
            ):(
              <>
                <h3 style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:20,color:C.textMain,marginBottom:20}}>Your Details</h3>
                {[
                  {label:'Full Name',type:'text',key:'name',placeholder:'Enter your full name'},
                  {label:'Email Address',type:'email',key:'email',placeholder:'you@example.com'},
                  {label:'Phone Number',type:'tel',key:'phone',placeholder:'+91 00000 00000'},
                ].map(f=>(
                  <div key={f.key} style={{marginBottom:16}}>
                    <label style={{display:'block',fontSize:13,fontWeight:600,color:C.textSub,marginBottom:7}}>{f.label}</label>
                    <input
                      type={f.type} value={form[f.key]}
                      onChange={e=>{setForm({...form,[f.key]:e.target.value});setErrors({...errors,[f.key]:''});}}
                      placeholder={f.placeholder}
                      style={{
                        width:'100%',background:C.bg3,border:`1.5px solid ${errors[f.key]?'#ff4444':C.border}`,
                        borderRadius:12,padding:'12px 16px',fontSize:14,color:C.textMain,transition:'border-color 0.15s',
                      }}
                    />
                    {errors[f.key]&&<div style={{fontSize:11,color:'#ff4444',marginTop:4}}>{errors[f.key]}</div>}
                  </div>
                ))}
                <div style={{display:'flex',gap:12,marginTop:8}}>
                  <button className="btn-outline" onClick={()=>setStep(1)} style={{flex:1,padding:13,fontSize:14}}>← Back</button>
                  <button className="btn-primary" onClick={()=>{if(validate())setDone(true);}} style={{flex:2,padding:13,fontSize:14,fontFamily:FONT_BODY,fontWeight:700}}>
                    Confirm & Pay →
                  </button>
                </div>
                <p style={{fontSize:11,color:C.textMuted,textAlign:'center',marginTop:12}}>
                  🔒 Secure checkout · By confirming you agree to our terms
                </p>
              </>
            )}
          </div>
        </div>

        {/* Right: Summary */}
        <div style={{position:'sticky',top:84}}>
          <div style={{background:C.card,borderRadius:20,border:`1px solid ${C.border}`,overflow:'hidden'}}>
            <div style={{
              height:160,position:'relative',overflow:'hidden',
            }}>
              <img src={club.img} alt={club.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom,transparent,rgba(17,17,34,0.9))'}}/>
              <div style={{position:'absolute',bottom:12,left:16}}>
                <h3 style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:18,color:'#fff',marginBottom:4}}>{club.name}</h3>
                <div style={{fontSize:12,color:'rgba(255,255,255,0.65)'}}>📍 {club.location}</div>
              </div>
            </div>

            <div style={{padding:'18px 20px'}}>
              <div style={{fontSize:13,fontWeight:700,color:C.textMuted,letterSpacing:0.5,textTransform:'uppercase',marginBottom:14}}>Booking Summary</div>
              {[
                ['Ticket Type', ticket==='vip'?'VIP 👑':'General 🎟️'],
                ['Price / ticket', `₹${price.toLocaleString()}`],
                ['Guests', `× ${guests}`],
              ].map(([k,v])=>(
                <div key={k} style={{display:'flex',justifyContent:'space-between',fontSize:13,marginBottom:10}}>
                  <span style={{color:C.textMuted}}>{k}</span>
                  <span style={{color:C.textMain,fontWeight:600}}>{v}</span>
                </div>
              ))}
              <div style={{
                borderTop:`1px solid ${C.border}`,paddingTop:14,marginTop:4,
                display:'flex',justifyContent:'space-between',alignItems:'center',
              }}>
                <span style={{fontFamily:FONT_BODY,fontWeight:700,fontSize:16,color:C.textMain}}>Total</span>
                <span style={{fontFamily:FONT_BODY,fontWeight:800,fontSize:28,color:C.purple}}>₹{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Root ─────────────────────────────────────────────────────────
export default function NightclubsApp() {
  const [page, setPage]   = useState('list');
  const [club, setClub]   = useState(null);

  useEffect(()=>{
    const el = document.createElement('style');
    el.textContent = STYLES;
    document.head.appendChild(el);
    return ()=>document.head.removeChild(el);
  },[]);

  const openDetail = c => { setClub(c); setPage('detail'); window.scrollTo(0,0); };
  const openBook   = c => { setClub(c); setPage('booking'); window.scrollTo(0,0); };
  const goBack     = () => {
    if(page==='booking') { setPage('detail'); window.scrollTo(0,0); }
    else { setPage('list'); setClub(null); window.scrollTo(0,0); }
  };

  return (
    <div style={{minHeight:'100vh',background:C.bg,fontFamily:FONT_BODY}}>
      <Navbar page={page} onBack={goBack}/>
      {page==='list'    && <ListPage   onView={openDetail}/>}
      {page==='detail'  && <DetailPage club={club} onBook={openBook}/>}
      {page==='booking' && <BookingPage club={club} onBack={goBack}/>}
    </div>
  );
}