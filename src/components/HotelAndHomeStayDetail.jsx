// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate, useLocation } from 'react-router-dom';
// // import {
// //   Star, MapPin, Wifi, Coffee, ChevronLeft, Check,
// //   Info, Heart, Shield, Waves, Car,
// //   Dumbbell, Sparkles, ChefHat, ShoppingBag, Users,
// //   Calendar, ChevronRight, X, Plus, Minus,
// //   Clock, Award, Maximize2,
// //   Phone, Globe, Loader2, AlertCircle, Tv, Wind, Bath,
// //   Trees, Home, Key, Utensils, Dog, Baby, Flame, Camera
// // } from 'lucide-react';

// // const API_BASE_URL   = 'https://bmtadmin.onrender.com/api';
// // const IMAGE_BASE_URL = 'https://bmtadmin.onrender.com/';
// // const FB = [
// //   'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200',
// //   'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
// //   'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
// //   'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
// //   'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
// // ];
// // const ROOM_FB = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600';

// // // ── STATIC DETAIL DATA ────────────────────────────────────────────────────────
// // const STATIC_DETAILS = {
// //   sv1:{
// //     id:'sv1', name:'Aranya Forest Villa', type:'Villa', stars:5,
// //     address:'Estate Road, Madikeri, Coorg, Karnataka 571201',
// //     rating:4.8, ratingText:'Exceptional', reviews:142,
// //     description:'Nestled in the heart of Coorg\'s coffee plantations, Aranya Forest Villa is a stunning private estate offering an immersive nature retreat. Wake up to misty mountain views, take a dip in your private infinity pool, and stroll through aromatic coffee and cardamom estates. The villa blends traditional Kodava architecture with contemporary comforts.',
// //     phone:'+91 98765 43210', website:'aranyavilla.com', email:'stay@aranyavilla.com',
// //     images:[
// //       'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200',
// //       'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
// //       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
// //       'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
// //       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
// //     ],
// //     amenities:['Free WiFi','Private Pool','Breakfast Included','Fireplace','Coffee Estate Tour','Bonfire Area','BBQ Grill','Bicycle Rental','Bird Watching','Trekking Guide'],
// //     rooms:[
// //       {id:'r1',name:'Forest Suite',description:'Spacious suite with private balcony overlooking coffee plantation',size:'45 sq.m',occupancy:'2 Adults',bed:'1 King Bed',amenities:['Free WiFi','AC','Minibar','Private Balcony'],price:9499,discountPrice:7999,images:[],available:2},
// //       {id:'r2',name:'Garden Cottage',description:'Cozy private cottage surrounded by cardamom bushes',size:'35 sq.m',occupancy:'2 Adults',bed:'1 Queen Bed',amenities:['Free WiFi','AC','Garden View'],price:7499,discountPrice:5999,images:[],available:1},
// //       {id:'r3',name:'Treetop Loft',description:'Elevated wooden loft with panoramic valley views',size:'55 sq.m',occupancy:'3 Adults',bed:'1 King + 1 Single',amenities:['Free WiFi','AC','Telescope','Hammock'],price:12999,discountPrice:10499,images:[],available:1},
// //     ],
// //     policies:['Check-in: 2:00 PM','Check-out: 11:00 AM','No Smoking inside rooms','Pets Allowed (on request)','Local ID accepted','Free cancellation within 48 hours','Children of all ages welcome'],
// //     location:{lat:12.42,lng:75.74,landmark:'Near Raja\'s Seat Viewpoint'},
// //     highlights:['Eco-Certified Property','Organic Coffee Estate','Guided Nature Walks','Couple Friendly'],
// //   },
// //   sv2:{
// //     id:'sv2', name:'The Goan Treehouse', type:'Treehouse', stars:5,
// //     address:'Banyan Tree Road, Assagao, North Goa 403507',
// //     rating:4.9, ratingText:'Exceptional', reviews:89,
// //     description:'An absolutely magical treehouse experience suspended among ancient banyan trees, just 5 minutes from the beaches of North Goa. This adults-only retreat offers unmatched privacy, the gentle rustle of leaves as your soundtrack, and a coconut grove stretching to the horizon. Solar powered and fully sustainable.',
// //     phone:'+91 98765 43211', website:'goantreehouse.com', email:'',
// //     images:[
// //       'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=1200',
// //       'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
// //       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
// //       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
// //       'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
// //     ],
// //     amenities:['Free WiFi','Breakfast Included','Hammock','Yoga Deck','Outdoor Shower','Solar Power','Bicycle','Beach Access','Stargazing Deck'],
// //     rooms:[
// //       {id:'r1',name:'Canopy Suite',description:'The main treehouse cabin with forest views on all sides',size:'40 sq.m',occupancy:'2 Adults',bed:'1 King Bed',amenities:['Free WiFi','AC','Rain Shower','Forest View'],price:6299,discountPrice:5299,images:[],available:1},
// //       {id:'r2',name:'Ground Nest',description:'Private ground-level pod with direct garden access',size:'28 sq.m',occupancy:'2 Adults',bed:'1 Queen Bed',amenities:['Free WiFi','Fan','Outdoor Deck'],price:4299,discountPrice:3499,images:[],available:1},
// //     ],
// //     policies:['Check-in: 1:00 PM','Check-out: 10:00 AM','Adults only (18+)','No Smoking','No Pets','Eco-stay — minimal plastic','Caretaker on-site 24/7'],
// //     location:{lat:15.57,lng:73.76,landmark:'5 min from Vagator Beach'},
// //     highlights:['Adults Only','Solar Powered','Sustainable Stay','Beach Proximity'],
// //   },
// //   sv3:{
// //     id:'sv3', name:'Himalayan Heritage Homestay', type:'Homestay', stars:4,
// //     address:'Old Manali Village Road, Manali, Himachal Pradesh 175131',
// //     rating:4.7, ratingText:'Excellent', reviews:203,
// //     description:'A beautifully preserved traditional Himachali home that has welcomed travellers for three generations. Your warm host family shares home-cooked meals featuring local recipes, guides you on treks to hidden valleys, and ensures you experience the real Manali beyond the tourist trail. Sit by the bukhari (traditional fireplace) on cold nights.',
// //     phone:'+91 94180 12345', website:'', email:'',
// //     images:[
// //       'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
// //       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
// //       'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
// //       'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
// //       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
// //     ],
// //     amenities:['Free WiFi','All Meals Included','Fireplace (Bukhari)','Trekking Guide','Mountain View','Bonfire','Local Experience','Orchard Access','Snowfall Viewing'],
// //     rooms:[
// //       {id:'r1',name:'Mountain View Room',description:'Room with panoramic views of the Beas valley',size:'22 sq.m',occupancy:'2 Adults',bed:'1 Double Bed',amenities:['Free WiFi','Heater','Mountain View'],price:3799,discountPrice:3299,images:[],available:2},
// //       {id:'r2',name:'Orchard Room',description:'Opens into the apple orchard with private sit-out',size:'20 sq.m',occupancy:'2 Adults',bed:'2 Single Beds',amenities:['Free WiFi','Heater','Garden Access'],price:3299,discountPrice:2799,images:[],available:1},
// //     ],
// //     policies:['Check-in: 12:00 PM','Check-out: 11:00 AM','Home-cooked meals served at fixed times','No alcohol on premises','Children welcome','Pets not allowed','Host family shares common areas'],
// //     location:{lat:32.27,lng:77.17,landmark:'Near Hadimba Temple, Old Manali'},
// //     highlights:['Family Run','Mountain Views','All Meals Included','Cultural Experience'],
// //   },
// // };

// // // ── HELPERS ───────────────────────────────────────────────────────────────────
// // const amenityIcon = (raw='') => {
// //   const s=raw.toLowerCase();
// //   if(s.includes('wifi')||s.includes('wi-fi')) return <Wifi size={20}/>;
// //   if(s.includes('pool')||s.includes('swimming')) return <Waves size={20}/>;
// //   if(s.includes('parking')) return <Car size={20}/>;
// //   if(s.includes('breakfast')||s.includes('meal')) return <Coffee size={20}/>;
// //   if(s.includes('gym')||s.includes('fitness')) return <Dumbbell size={20}/>;
// //   if(s.includes('spa')||s.includes('wellness')) return <Sparkles size={20}/>;
// //   if(s.includes('restaurant')||s.includes('dining')||s.includes('kitchen')) return <Utensils size={20}/>;
// //   if(s.includes('tv')||s.includes('television')) return <Tv size={20}/>;
// //   if(s.includes('air')||s.includes('ac')) return <Wind size={20}/>;
// //   if(s.includes('bath')||s.includes('jacuzzi')) return <Bath size={20}/>;
// //   if(s.includes('tree')||s.includes('forest')||s.includes('garden')||s.includes('orchard')) return <Trees size={20}/>;
// //   if(s.includes('bicycle')||s.includes('trek')||s.includes('guide')) return <MapPin size={20}/>;
// //   if(s.includes('bonfire')||s.includes('bbq')||s.includes('fire')) return <Flame size={20}/>;
// //   if(s.includes('pet')||s.includes('dog')) return <Dog size={20}/>;
// //   return <Check size={20}/>;
// // };

// // const buildImageUrl = (path) => {
// //   if (!path) return null;
// //   if (path.startsWith('http')) return path;
// //   return IMAGE_BASE_URL + path.replace(/\\/g, '/');
// // };

// // const getRatingText = (r) => {
// //   if (r >= 4.8) return 'Exceptional'; if (r >= 4.5) return 'Excellent';
// //   if (r >= 4.0) return 'Very Good';  if (r >= 3.5) return 'Good';
// //   return 'Pleasant';
// // };

// // const mapProperty = (h) => {
// //   const rawImages = [...(h.hotelImages||[]),(h.roomImages||[])].flat().map(buildImageUrl).filter(Boolean);
// //   const images = rawImages.length >= 5 ? rawImages : [...rawImages, ...FB.slice(rawImages.length,5)];
// //   const amenities = [...new Set([
// //     ...(h.amenities||[]), ...(h.wellnessAndSpa||[]), ...(h.foodAndDining||[]),
// //   ].map(a=>(typeof a==='string'?a:a?.name||'')).filter(Boolean))];
// //   const rooms = (h.rooms||[]).map((r,i) => ({
// //     id: r._id||i, name: r.roomName||r.roomType||'Room',
// //     description: r.description||'',
// //     size: r.roomSize||'30 sq.m',
// //     occupancy: `${r.adults||2} Adults${r.children?` + ${r.children} Children`:''}`,
// //     bed: `${r.bedCount||1} ${r.bedType||'Bed'}`,
// //     amenities: [r.wifi&&'Free WiFi',r.airCondition&&'AC',r.tv&&'TV',r.breakfastIncluded&&'Breakfast'].filter(Boolean),
// //     price: r.basePrice||h.pricePerNight||5000,
// //     discountPrice: r.offerPrice||Math.round((r.basePrice||h.pricePerNight||5000)*0.85),
// //     images: (r.images||[]).map(buildImageUrl).filter(Boolean),
// //     available: r.availableRooms??3,
// //   }));
// //   const policies = [
// //     `Check-in: ${h.checkInTime||'2:00 PM'}`,
// //     `Check-out: ${h.checkOutTime||'11:00 AM'}`,
// //     h.cancellationPolicy&&`Cancellation: ${h.cancellationPolicy}`,
// //     h.childPolicy&&`Children: ${h.childPolicy}`,
// //     h.petPolicy&&`Pets: ${h.petPolicy}`,
// //     h.coupleFriendly&&'Couple friendly',
// //     h.localIdAllowed&&'Local ID accepted',
// //   ].filter(Boolean);
// //   return {
// //     id: h._id, name: h.hotelName||'Property', type: h.hotelType||'Homestay',
// //     stars: Math.min(h.starRating||4,5),
// //     address: `${h.address||''}, ${h.area||''}, ${h.city||''}, ${h.state||''}`.replace(/^,\s*/,'').trim(),
// //     rating: h.averageRating||4.5, ratingText: getRatingText(h.averageRating||4.5),
// //     reviews: h.totalReviews||0, description: h.description||'',
// //     website: h.website||'', phone: h.phone||'', email: h.email||'',
// //     images, amenities, rooms, policies,
// //     location: { lat: h.location?.coordinates?.[1]||0, lng: h.location?.coordinates?.[0]||0, landmark: h.landmark||'' },
// //     highlights: (h.propertyHighlights||[]).map(x=>x.replace(/\b\w/g,c=>c.toUpperCase())),
// //   };
// // };

// // const TRUST_BADGES = [
// //   {icon:<Shield size={20}/>, title:'Verified Property', desc:'Personally inspected by our team'},
// //   {icon:<Award size={20}/>, title:'Genuine Reviews',   desc:'Only from real guests like you'},
// //   {icon:<Clock size={20}/>, title:'24/7 Host Support', desc:'Always here when you need us'},
// // ];

// // // ── MAIN COMPONENT ────────────────────────────────────────────────────────────
// // const HomestayVillaDetail = () => {
// //   const { id }   = useParams();
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   const [property,          setProperty]          = useState(null);
// //   const [loading,           setLoading]            = useState(true);
// //   const [error,             setError]              = useState(null);
// //   const [currentImage,      setCurrentImage]       = useState(0);
// //   const [wishlisted,        setWishlisted]         = useState(false);
// //   const [showAllAmenities,  setShowAllAmenities]   = useState(false);
// //   const [showDatePicker,    setShowDatePicker]     = useState(false);
// //   const [showGuestsPicker,  setShowGuestsPicker]   = useState(false);
// //   const [selectedRoom,      setSelectedRoom]       = useState(null);
// //   const [showAllPhotos,     setShowAllPhotos]      = useState(false);

// //   const [checkInDate,  setCheckInDate]  = useState(() => { const d=new Date();d.setDate(d.getDate()+1);return d; });
// //   const [checkOutDate, setCheckOutDate] = useState(() => { const d=new Date();d.setDate(d.getDate()+3);return d; });
// //   const [guests, setGuests] = useState({adults:2,children:0,rooms:1});

// //   useEffect(() => {
// //     const load = async () => {
// //       setLoading(true); setError(null);

// //       // 1. Check static data first (instant)
// //       if (STATIC_DETAILS[id]) {
// //         setProperty(STATIC_DETAILS[id]);
// //         setLoading(false);
// //         return;
// //       }

// //       // 2. Check state passed from list (popular cards)
// //       const passed = location.state?.property;
// //       if (passed) {
// //         // Build a minimal property object from the passed card data
// //         setProperty({
// //           id: passed.id,
// //           name: passed.name,
// //           type: passed.type || 'Homestay',
// //           stars: passed.stars || 4,
// //           address: passed.address || '',
// //           rating: passed.rating || 4.5,
// //           ratingText: getRatingText(passed.rating || 4.5),
// //           reviews: passed.reviews || 0,
// //           description: `${passed.name} is a wonderful ${passed.type||'property'} offering an unforgettable stay experience.`,
// //           phone: '', website: '', email: '',
// //           images: [passed.image||FB[0], ...FB.slice(1)],
// //           amenities: ['Free WiFi','Breakfast','Mountain View','Parking'],
// //           rooms: [{
// //             id:'r1', name:'Standard Room',
// //             description:'Comfortable room with great views',
// //             size:'25 sq.m', occupancy:'2 Adults', bed:'1 Double Bed',
// //             amenities:['Free WiFi','AC'],
// //             price: passed.price||5000,
// //             discountPrice: Math.round((passed.price||5000)*0.9),
// //             images:[], available:3,
// //           }],
// //           policies:['Check-in: 2:00 PM','Check-out: 11:00 AM','No Smoking','Children Welcome'],
// //           location:{lat:0,lng:0,landmark:''},
// //           highlights:[],
// //         });
// //         setLoading(false);
// //         return;
// //       }

// //       // 3. Try API
// //       try {
// //         const res  = await fetch(`${API_BASE_URL}/homestay/admin/all`);
// //         if (!res.ok) throw new Error(`HTTP ${res.status}`);
// //         const data = await res.json();
// //         const arr  = Array.isArray(data) ? data : data.data || [];
// //         const found = arr.find(h => h._id===id || h.id===id);
// //         if (!found) throw new Error('Property not found');
// //         setProperty(mapProperty(found));
// //       } catch (e) {
// //         setError(e.message || 'Property not found');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     load();
// //   }, [id]);

// //   const calculateNights = () => Math.max(1, Math.ceil(Math.abs(checkOutDate-checkInDate)/(1000*60*60*24)));
// //   const calculateTotal  = (price) => price * calculateNights();

// //   // ── Loading ────────────────────────────────────────────────────────────────
// //   if (loading) return (
// //     <div style={{minHeight:'100vh',background:'#f4f7f4',display:'flex',alignItems:'center',justifyContent:'center'}}>
// //       <div style={{textAlign:'center'}}>
// //         <Loader2 style={{width:48,height:48,color:'#1a7a4a',animation:'spin 1s linear infinite',margin:'0 auto 12px'}}/>
// //         <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
// //         <p style={{color:'#4a6741',fontFamily:'Inter,sans-serif'}}>Loading property details…</p>
// //       </div>
// //     </div>
// //   );

// //   if (error||!property) return (
// //     <div style={{minHeight:'100vh',background:'#f4f7f4',display:'flex',alignItems:'center',justifyContent:'center'}}>
// //       <div style={{textAlign:'center',maxWidth:400,padding:24}}>
// //         <AlertCircle style={{width:48,height:48,color:'#e05c5c',margin:'0 auto 12px'}}/>
// //         <h2 style={{fontFamily:'Poppins,sans-serif',marginBottom:8}}>Property Not Found</h2>
// //         <p style={{color:'#4a6741',marginBottom:16}}>{error}</p>
// //         <div style={{display:'flex',gap:10,justifyContent:'center'}}>
// //           <button onClick={()=>window.location.reload()} style={{padding:'10px 20px',background:'#1a7a4a',color:'#fff',border:'none',borderRadius:8,fontWeight:700,cursor:'pointer'}}>Retry</button>
// //           <button onClick={()=>navigate(-1)} style={{padding:'10px 20px',border:'1.5px solid #e2e8e2',borderRadius:8,fontWeight:700,cursor:'pointer',background:'#fff'}}>Go Back</button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const amenitiesToShow  = showAllAmenities ? property.amenities : property.amenities.slice(0,8);
// //   const selectedRoomData = property.rooms?.find(r=>r.id===selectedRoom);

// //   const typeIco = (type='') => {
// //     const t=type.toLowerCase();
// //     if(t.includes('villa')) return '🏡'; if(t.includes('tree')) return '🌳';
// //     if(t.includes('farm')) return '🚜'; if(t.includes('boat')) return '⛵';
// //     if(t.includes('camp')||t.includes('glamp')) return '⛺'; if(t.includes('chalet')) return '⛰️';
// //     if(t.includes('cottage')) return '🌿'; return '🏠';
// //   };

// //   // ── Modals ─────────────────────────────────────────────────────────────────
// //   const PhotoGalleryModal = () => !showAllPhotos ? null : (
// //     <div style={{position:'fixed',inset:0,zIndex:9999,background:'#000',display:'flex',flexDirection:'column'}}>
// //       <div style={{padding:16,display:'flex',justifyContent:'space-between',alignItems:'center',background:'rgba(0,0,0,.9)'}}>
// //         <h3 style={{color:'#fff',fontFamily:'Poppins,sans-serif',fontWeight:700}}>{property.name} — All Photos</h3>
// //         <button onClick={()=>setShowAllPhotos(false)} style={{background:'rgba(255,255,255,.15)',border:'none',color:'#fff',borderRadius:8,padding:8,cursor:'pointer',display:'flex'}}>
// //           <X size={20}/>
// //         </button>
// //       </div>
// //       <div style={{flex:1,overflowY:'auto',padding:16}}>
// //         <div style={{maxWidth:1000,margin:'0 auto',columns:'1 200px',gap:12}}>
// //           {property.images.map((img,i)=>(
// //             <img key={i} src={img} alt={`${property.name} ${i+1}`} onError={e=>{e.target.src=FB[i%FB.length];}}
// //               style={{width:'100%',marginBottom:12,borderRadius:10,cursor:'pointer',display:'block'}}
// //               onClick={()=>{setCurrentImage(i);setShowAllPhotos(false);}}/>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const DatePickerModal = () => {
// //     const [selStart,setSelStart]=useState(checkInDate),[selEnd,setSelEnd]=useState(checkOutDate);
// //     const [month,setMonth]=useState(new Date().getMonth()),[year,setYear]=useState(new Date().getFullYear());
// //     const MN=['January','February','March','April','May','June','July','August','September','October','November','December'];
// //     const days=()=>{const out=[];const first=new Date(year,month,1).getDay();const total=new Date(year,month+1,0).getDate();for(let i=0;i<first;i++)out.push(null);for(let d=1;d<=total;d++)out.push(new Date(year,month,d));return out;};
// //     const click=d=>{if(!selStart||(selStart&&selEnd)){setSelStart(d);setSelEnd(null);}else{if(d<selStart){setSelEnd(selStart);setSelStart(d);}else setSelEnd(d);}};
// //     const today=new Date();today.setHours(0,0,0,0);
// //     const fmt=d=>d?d.toLocaleDateString('en-US',{month:'short',day:'2-digit',year:'numeric'}):'—';
// //     if(!showDatePicker) return null;
// //     const btnS={background:'none',border:'none',cursor:'pointer',color:'inherit'};
// //     return (
// //       <div style={{position:'fixed',inset:0,zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(10,46,24,.4)',backdropFilter:'blur(4px)',padding:16}}>
// //         <div style={{background:'#fff',borderRadius:20,maxWidth:420,width:'100%',overflow:'hidden',boxShadow:'0 20px 60px rgba(0,0,0,.2)'}}>
// //           <div style={{padding:'16px 20px',background:'linear-gradient(135deg,#0a2e18,#1a5c30)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
// //             <span style={{fontFamily:'Poppins,sans-serif',fontWeight:700,color:'#fff',fontSize:16}}>Select Dates</span>
// //             <button style={{...btnS,background:'rgba(255,255,255,.15)',borderRadius:6,padding:7,display:'flex',color:'#fff'}} onClick={()=>setShowDatePicker(false)}><X size={17}/></button>
// //           </div>
// //           <div style={{padding:20}}>
// //             <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
// //               <button style={{background:'#f4f7f4',border:'1.5px solid #e2e8e2',borderRadius:8,padding:8,cursor:'pointer',display:'flex'}} onClick={()=>{if(month===0){setMonth(11);setYear(y=>y-1);}else setMonth(m=>m-1);}}><ChevronLeft size={18}/></button>
// //               <span style={{fontFamily:'Poppins,sans-serif',fontWeight:700,fontSize:15}}>{MN[month]} {year}</span>
// //               <button style={{background:'#f4f7f4',border:'1.5px solid #e2e8e2',borderRadius:8,padding:8,cursor:'pointer',display:'flex'}} onClick={()=>{if(month===11){setMonth(0);setYear(y=>y+1);}else setMonth(m=>m+1);}}><ChevronRight size={18}/></button>
// //             </div>
// //             <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:3,marginBottom:12}}>
// //               {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d=><div key={d} style={{textAlign:'center',fontSize:11,fontWeight:700,color:'#8da88a',paddingBottom:8}}>{d}</div>)}
// //               {days().map((date,i)=>{
// //                 if(!date) return <div key={`e${i}`}/>;
// //                 const past=date<today,isS=selStart&&date.getTime()===selStart.getTime(),isE=selEnd&&date.getTime()===selEnd.getTime(),inR=selStart&&selEnd&&date>selStart&&date<selEnd;
// //                 return <button key={date.toISOString()} onClick={()=>!past&&click(date)} disabled={past}
// //                   style={{height:38,border:'none',background:isS||isE?'#1a7a4a':inR?'#e6f5ec':'none',color:isS||isE?'#fff':inR?'#1a5c30':past?'#ccc':'#1a2e1a',borderRadius:isS?'8px 0 0 8px':isE?'0 8px 8px 0':inR?0:8,cursor:past?'not-allowed':'pointer',fontWeight:600,fontSize:13,transition:'all .15s'}}>
// //                   {date.getDate()}
// //                 </button>;
// //               })}
// //             </div>
// //             <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',background:'#f4f7f4',borderRadius:10,padding:13,marginBottom:14,alignItems:'center',gap:8}}>
// //               <div><p style={{fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:.6,color:'#4a6741',marginBottom:3}}>CHECK-IN</p><p style={{fontSize:14,fontWeight:700}}>{fmt(selStart)}</p></div>
// //               <div style={{width:18,height:2,background:'#e2e8e2'}}/>
// //               <div style={{textAlign:'right'}}><p style={{fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:.6,color:'#4a6741',marginBottom:3}}>CHECK-OUT</p><p style={{fontSize:14,fontWeight:700}}>{fmt(selEnd)}</p></div>
// //             </div>
// //             <button onClick={()=>{if(selStart&&selEnd){setCheckInDate(selStart);setCheckOutDate(selEnd);setShowDatePicker(false);}}} disabled={!selStart||!selEnd}
// //               style={{width:'100%',padding:14,background:'linear-gradient(135deg,#1a7a4a,#155f3a)',color:'#fff',border:'none',borderRadius:10,fontWeight:700,fontSize:15,cursor:!selStart||!selEnd?'not-allowed':'pointer',opacity:!selStart||!selEnd?.45:1,fontFamily:'Poppins,sans-serif'}}>
// //               Apply Dates
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   const GuestsPickerModal = () => {
// //     const [loc, setLoc] = useState({...guests});
// //     if (!showGuestsPicker) return null;
// //     return (
// //       <div style={{position:'fixed',inset:0,zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(10,46,24,.4)',backdropFilter:'blur(4px)',padding:16}}>
// //         <div style={{background:'#fff',borderRadius:20,maxWidth:400,width:'100%',overflow:'hidden',boxShadow:'0 20px 60px rgba(0,0,0,.2)'}}>
// //           <div style={{padding:'16px 20px',background:'linear-gradient(135deg,#0a2e18,#1a5c30)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
// //             <span style={{fontFamily:'Poppins,sans-serif',fontWeight:700,color:'#fff',fontSize:16}}>Who's staying?</span>
// //             <button onClick={()=>setShowGuestsPicker(false)} style={{background:'rgba(255,255,255,.15)',border:'none',color:'#fff',borderRadius:6,padding:7,cursor:'pointer',display:'flex'}}><X size={17}/></button>
// //           </div>
// //           <div style={{padding:20}}>
// //             {[{key:'adults',label:'Adults',sub:'Ages 13 or above',min:1},{key:'children',label:'Children',sub:'Ages 2–12',min:0},{key:'rooms',label:'Rooms',sub:'Number of rooms',min:1}].map(({key,label,sub,min})=>(
// //               <div key={key} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'15px 0',borderBottom:'1px solid #e2e8e2'}}>
// //                 <div><p style={{fontWeight:600,fontSize:15}}>{label}</p><p style={{fontSize:12,color:'#4a6741'}}>{sub}</p></div>
// //                 <div style={{display:'flex',alignItems:'center',gap:14}}>
// //                   <button onClick={()=>setLoc(l=>({...l,[key]:Math.max(min,l[key]-1)}))} style={{width:40,height:40,borderRadius:'50%',border:'1.5px solid #e2e8e2',background:'#fff',cursor:'pointer',fontSize:18,fontWeight:600,display:'flex',alignItems:'center',justifyContent:'center',transition:'all .18s'}}>−</button>
// //                   <span style={{fontWeight:700,fontSize:16,minWidth:24,textAlign:'center'}}>{loc[key]}</span>
// //                   <button onClick={()=>setLoc(l=>({...l,[key]:l[key]+1}))} style={{width:40,height:40,borderRadius:'50%',border:'1.5px solid #e2e8e2',background:'#fff',cursor:'pointer',fontSize:18,fontWeight:600,display:'flex',alignItems:'center',justifyContent:'center',transition:'all .18s'}}>+</button>
// //                 </div>
// //               </div>
// //             ))}
// //             <button onClick={()=>{setGuests(loc);setShowGuestsPicker(false);}} style={{width:'100%',marginTop:20,padding:14,background:'linear-gradient(135deg,#1a7a4a,#155f3a)',color:'#fff',border:'none',borderRadius:10,fontWeight:700,fontSize:15,cursor:'pointer',fontFamily:'Poppins,sans-serif'}}>Done</button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // ── RENDER ─────────────────────────────────────────────────────────────────
// //   const S = {
// //     page: {minHeight:'100vh',background:'#f4f7f4',fontFamily:'Inter,sans-serif',color:'#1a2e1a'},
// //     sticky: {position:'sticky',top:0,zIndex:40,background:'rgba(255,255,255,.95)',backdropFilter:'blur(8px)',borderBottom:'1px solid #e2e8e2'},
// //     stickyInner: {maxWidth:1280,margin:'0 auto',padding:'12px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'},
// //     main: {maxWidth:1280,margin:'0 auto',padding:'24px 20px'},
// //     card: {background:'#fff',borderRadius:16,border:'1px solid #e2e8e2',boxShadow:'0 2px 12px rgba(26,122,74,.06)'},
// //     grid: {display:'grid',gridTemplateColumns:'1fr 340px',gap:28,alignItems:'start'},
// //     section: {background:'#fff',borderRadius:16,border:'1px solid #e2e8e2',padding:24,marginBottom:24,boxShadow:'0 2px 8px rgba(26,122,74,.04)'},
// //     h2: {fontFamily:'Poppins,sans-serif',fontSize:22,fontWeight:800,color:'#1a2e1a',marginBottom:16},
// //     greenBtn: {padding:'11px 20px',background:'linear-gradient(135deg,#1a7a4a,#155f3a)',color:'#fff',border:'none',borderRadius:10,fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',gap:6,fontFamily:'Poppins,sans-serif',transition:'all .25s'},
// //     outlineBtn: {padding:'11px 16px',border:'1.5px solid #e2e8e2',background:'#fff',borderRadius:10,fontWeight:700,cursor:'pointer',transition:'all .2s'},
// //   };

// //   return (
// //     <div style={S.page}>
// //       <PhotoGalleryModal/>
// //       <DatePickerModal/>
// //       <GuestsPickerModal/>

// //       {/* Sticky header */}
// //       <div style={S.sticky}>
// //         <div style={S.stickyInner}>
// //           <div style={{display:'flex',alignItems:'center',gap:10}}>
// //             <button onClick={()=>navigate(-1)} style={{background:'none',border:'none',cursor:'pointer',display:'flex',padding:6,borderRadius:'50%',color:'#1a2e1a'}} onMouseOver={e=>e.currentTarget.style.background='#f4f7f4'} onMouseOut={e=>e.currentTarget.style.background='none'}>
// //               <ChevronLeft size={24}/>
// //             </button>
// //             <span style={{fontWeight:700,color:'#4a6741',fontSize:14}}>Back to search</span>
// //           </div>
// //           <div style={{display:'flex',gap:8}}>
// //             <button onClick={()=>setWishlisted(w=>!w)} style={{...S.outlineBtn,color:wishlisted?'#e05c5c':'#8da88a',borderColor:wishlisted?'#e05c5c':'#e2e8e2',padding:'8px 12px'}}>
// //               <Heart size={18} fill={wishlisted?'currentColor':'none'}/>
// //             </button>
// //             <button onClick={()=>setShowAllPhotos(true)} style={{...S.outlineBtn,display:'flex',alignItems:'center',gap:6,fontSize:13,color:'#4a6741',padding:'8px 14px'}}>
// //               <Camera size={16}/>All Photos
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <div style={S.main}>
// //         {/* Header card */}
// //         <div style={{...S.card,padding:24,marginBottom:24}}>
// //           <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',gap:16}}>
// //             <div style={{flex:1}}>
// //               <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12,flexWrap:'wrap'}}>
// //                 <span style={{background:'#f0faf4',color:'#1a7a4a',fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:5,textTransform:'uppercase',letterSpacing:.4}}>
// //                   {typeIco(property.type)} {property.type}
// //                 </span>
// //                 <div style={{display:'flex'}}>
// //                   {[...Array(property.stars||4)].map((_,i)=><Star key={i} size={14} fill="#f59e0b" stroke="#f59e0b"/>)}
// //                 </div>
// //                 <span style={{fontSize:12,color:'#8da88a',fontWeight:500}}>• {(property.reviews||0).toLocaleString()} reviews</span>
// //               </div>
// //               <h1 style={{fontFamily:'Poppins,sans-serif',fontSize:'clamp(24px,4vw,38px)',fontWeight:900,color:'#1a2e1a',marginBottom:8,lineHeight:1.15}}>{property.name}</h1>
// //               <div style={{display:'flex',alignItems:'flex-start',gap:6,fontSize:13,color:'#4a6741',marginBottom:4}}>
// //                 <MapPin size={15} color="#1a7a4a" style={{flexShrink:0,marginTop:2}}/><span>{property.address}</span>
// //               </div>
// //               {property.location?.landmark && <p style={{fontSize:13,color:'#8da88a',marginLeft:21}}>Near {property.location.landmark}</p>}
// //               <div style={{display:'flex',gap:16,marginTop:12,flexWrap:'wrap'}}>
// //                 {property.phone&&<a href={`tel:${property.phone}`} style={{display:'flex',alignItems:'center',gap:6,color:'#1a7a4a',fontWeight:600,fontSize:13,textDecoration:'none'}}><Phone size={14}/>{property.phone}</a>}
// //                 {property.website&&<a href={`https://${property.website.replace(/^https?:\/\//,'')}`} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',gap:6,color:'#1a7a4a',fontWeight:600,fontSize:13,textDecoration:'none'}}><Globe size={14}/>Website</a>}
// //               </div>
// //             </div>
// //             <div style={{display:'flex',alignItems:'flex-start',gap:12}}>
// //               <div style={{textAlign:'right'}}>
// //                 <p style={{fontSize:11,color:'#8da88a',fontWeight:700,textTransform:'uppercase',letterSpacing:.5}}>Guest Rating</p>
// //                 <p style={{fontWeight:700,fontSize:16,color:'#1a2e1a'}}>{property.ratingText}</p>
// //                 <p style={{fontSize:11,color:'#8da88a'}}>{(property.reviews||0).toLocaleString()} verified</p>
// //               </div>
// //               <div style={{background:'linear-gradient(135deg,#1a7a4a,#155f3a)',color:'#fff',width:56,height:56,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:12,flexShrink:0}}>
// //                 <span style={{fontFamily:'Poppins,sans-serif',fontSize:20,fontWeight:900,lineHeight:1}}>{property.rating}</span>
// //                 <Star size={10} fill="white" stroke="white"/>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Image gallery */}
// //         <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gridTemplateRows:'1fr 1fr',gap:10,height:'clamp(280px,45vw,420px)',marginBottom:28}}>
// //           {[0,1,2,3].map((i)=>(
// //             <div key={i} style={{position:'relative',overflow:'hidden',borderRadius:12,background:'#e2e8e2',cursor:'pointer',gridColumn:i===0?'1':'',gridRow:i===0?'1 / 3':''}}
// //               onClick={()=>setCurrentImage(i)}>
// //               <img src={property.images[i]||FB[i]} alt={`View ${i+1}`} onError={e=>{e.target.src=FB[i%FB.length];}}
// //                 style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s'}}
// //                 onMouseOver={e=>e.currentTarget.style.transform='scale(1.06)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}/>
// //             </div>
// //           ))}
// //           <div style={{position:'relative',overflow:'hidden',borderRadius:12,background:'#e2e8e2',cursor:'pointer'}} onClick={()=>setShowAllPhotos(true)}>
// //             <img src={property.images[4]||FB[4]} alt="More" onError={e=>{e.target.src=FB[4%FB.length];}} style={{width:'100%',height:'100%',objectFit:'cover',filter:'brightness(.65)'}}/>
// //             <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'#fff'}}>
// //               <span style={{fontSize:24,fontWeight:900,fontFamily:'Poppins,sans-serif'}}>+{Math.max(0,property.images.length-4)}</span>
// //               <span style={{fontSize:12,fontWeight:600}}>View all</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Content grid */}
// //         <div style={S.grid}>
// //           {/* Left column */}
// //           <div>
// //             {/* About */}
// //             <div style={S.section}>
// //               <h2 style={S.h2}>About this stay</h2>
// //               <p style={{color:'#4a6741',lineHeight:1.75,fontSize:14}}>{property.description||'No description available.'}</p>
// //               {property.highlights?.length>0&&(
// //                 <div style={{marginTop:16,display:'flex',flexWrap:'wrap',gap:8}}>
// //                   {property.highlights.map((h,i)=>(
// //                     <div key={i} style={{display:'flex',alignItems:'center',gap:6,background:'#f0faf4',border:'1px solid #b8ddc4',padding:'6px 12px',borderRadius:8,fontSize:13,color:'#1a5c30',fontWeight:600}}>
// //                       <Check size={14} color="#1a7a4a"/>{h}
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //             {/* Amenities */}
// //             {property.amenities?.length>0&&(
// //               <div style={S.section}>
// //                 <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
// //                   <h2 style={{...S.h2,marginBottom:0}}>What's included</h2>
// //                   {property.amenities.length>8&&(
// //                     <button onClick={()=>setShowAllAmenities(a=>!a)} style={{background:'none',border:'none',color:'#1a7a4a',fontSize:13,fontWeight:700,cursor:'pointer'}}>
// //                       {showAllAmenities?'Show less':`Show all (${property.amenities.length})`}
// //                     </button>
// //                   )}
// //                 </div>
// //                 <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
// //                   {amenitiesToShow.map((am,i)=>(
// //                     <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:12,borderRadius:10,background:'#f9fcf9',border:'1px solid #e2e8e2',transition:'all .2s'}}
// //                       onMouseOver={e=>e.currentTarget.style.background='#f0faf4'} onMouseOut={e=>e.currentTarget.style.background='#f9fcf9'}>
// //                       <div style={{color:'#1a7a4a',background:'#e6f5ec',padding:8,borderRadius:8,flexShrink:0}}>{amenityIcon(am)}</div>
// //                       <span style={{fontWeight:600,color:'#1a2e1a',fontSize:13}}>{am}</span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}

// //             {/* Rooms / Spaces */}
// //             <div style={S.section}>
// //               <h2 style={S.h2}>Available Spaces</h2>
// //               {!property.rooms?.length ? (
// //                 <p style={{color:'#8da88a',textAlign:'center',padding:'32px 0'}}>Contact the host for space details.</p>
// //               ) : (
// //                 <div style={{display:'flex',flexDirection:'column',gap:16}}>
// //                   {property.rooms.map(room=>(
// //                     <div key={room.id} style={{border:`2px solid ${selectedRoom===room.id?'#1a7a4a':'#e2e8e2'}`,borderRadius:14,padding:18,cursor:'pointer',transition:'all .22s',background:selectedRoom===room.id?'#f0faf4':'#fff'}}
// //                       onClick={()=>setSelectedRoom(room.id===selectedRoom?null:room.id)}>
// //                       <div style={{display:'flex',flexWrap:'wrap',gap:14}}>
// //                         <img src={room.images?.[0]||ROOM_FB} alt={room.name} onError={e=>{e.target.src=ROOM_FB;}}
// //                           style={{width:140,height:120,objectFit:'cover',borderRadius:10,flexShrink:0}}/>
// //                         <div style={{flex:1,minWidth:200}}>
// //                           <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10,alignItems:'flex-start'}}>
// //                             <div>
// //                               <h3 style={{fontFamily:'Poppins,sans-serif',fontSize:16,fontWeight:800,marginBottom:4}}>{room.name}</h3>
// //                               {room.description&&<p style={{fontSize:12,color:'#4a6741',marginBottom:8}}>{room.description}</p>}
// //                               <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:8}}>
// //                                 {room.size&&<span style={{fontSize:11,color:'#8da88a',display:'flex',alignItems:'center',gap:4}}><Maximize2 size={12}/>{room.size}</span>}
// //                                 {room.occupancy&&<span style={{fontSize:11,color:'#8da88a',display:'flex',alignItems:'center',gap:4}}><Users size={12}/>{room.occupancy}</span>}
// //                               </div>
// //                               <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
// //                                 {room.amenities?.map((a,i)=>(
// //                                   <span key={i} style={{display:'inline-flex',alignItems:'center',gap:4,padding:'3px 8px',background:'#f0faf4',color:'#1a5c30',fontSize:11,fontWeight:600,borderRadius:5}}>
// //                                     <Check size={9}/>{a}
// //                                   </span>
// //                                 ))}
// //                               </div>
// //                             </div>
// //                             <div style={{textAlign:'right',flexShrink:0}}>
// //                               {room.price!==room.discountPrice&&(
// //                                 <div style={{display:'flex',alignItems:'center',gap:6,justifyContent:'flex-end',marginBottom:3}}>
// //                                   <span style={{fontSize:11,color:'#8da88a',textDecoration:'line-through'}}>₹{room.price?.toLocaleString()}</span>
// //                                   <span style={{background:'#e6f5ec',color:'#1a5c30',fontSize:10,fontWeight:700,padding:'1px 6px',borderRadius:4}}>
// //                                     Save {Math.round((1-room.discountPrice/room.price)*100)}%
// //                                   </span>
// //                                 </div>
// //                               )}
// //                               <div style={{fontFamily:'Poppins,sans-serif',fontSize:22,fontWeight:900}}>₹{room.discountPrice?.toLocaleString()}<span style={{fontSize:12,fontWeight:400,color:'#8da88a'}}>/night</span></div>
// //                               <p style={{fontSize:11,color:'#8da88a',marginTop:2,marginBottom:10}}>{room.available||1} space{room.available!==1?'s':''} left</p>
// //                               <button style={{padding:'8px 14px',borderRadius:8,border:`1.5px solid ${selectedRoom===room.id?'#1a7a4a':'#e2e8e2'}`,background:selectedRoom===room.id?'#1a7a4a':'#fff',color:selectedRoom===room.id?'#fff':'#1a2e1a',fontWeight:700,cursor:'pointer',fontSize:13,fontFamily:'Poppins,sans-serif',transition:'all .2s'}}>
// //                                 {selectedRoom===room.id?'✓ Selected':'Select'}
// //                               </button>
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //             {/* Policies */}
// //             {property.policies?.length>0&&(
// //               <div style={S.section}>
// //                 <h2 style={S.h2}>Property Policies</h2>
// //                 <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
// //                   {property.policies.map((p,i)=>(
// //                     <div key={i} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:13,color:'#4a6741'}}>
// //                       <Check size={15} color="#1a7a4a" style={{flexShrink:0,marginTop:1}}/>{p}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Right column — sticky booking */}
// //           <div style={{position:'sticky',top:80,display:'flex',flexDirection:'column',gap:16}}>
// //             {/* Dates & guests */}
// //             <div style={{...S.card,padding:20}}>
// //               <h3 style={{fontFamily:'Poppins,sans-serif',fontWeight:800,fontSize:16,marginBottom:14}}>Plan Your Stay</h3>
// //               <div style={{display:'flex',flexDirection:'column',gap:10}}>
// //                 <button onClick={()=>setShowDatePicker(true)} style={{width:'100%',padding:12,border:'1.5px solid #e2e8e2',borderRadius:10,textAlign:'left',cursor:'pointer',background:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center',transition:'border-color .2s'}}
// //                   onMouseOver={e=>e.currentTarget.style.borderColor='#1a7a4a'} onMouseOut={e=>e.currentTarget.style.borderColor='#e2e8e2'}>
// //                   <div>
// //                     <p style={{fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:.7,color:'#8da88a',marginBottom:2}}>Dates</p>
// //                     <p style={{fontWeight:700,fontSize:13,color:'#1a2e1a'}}>
// //                       {checkInDate.toLocaleDateString('en-US',{month:'short',day:'numeric'})} — {checkOutDate.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}
// //                     </p>
// //                   </div>
// //                   <Calendar size={17} color="#8da88a"/>
// //                 </button>
// //                 <button onClick={()=>setShowGuestsPicker(true)} style={{width:'100%',padding:12,border:'1.5px solid #e2e8e2',borderRadius:10,textAlign:'left',cursor:'pointer',background:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center',transition:'border-color .2s'}}
// //                   onMouseOver={e=>e.currentTarget.style.borderColor='#1a7a4a'} onMouseOut={e=>e.currentTarget.style.borderColor='#e2e8e2'}>
// //                   <div>
// //                     <p style={{fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:.7,color:'#8da88a',marginBottom:2}}>Guests</p>
// //                     <p style={{fontWeight:700,fontSize:13,color:'#1a2e1a'}}>
// //                       {guests.adults} Adult{guests.adults!==1?'s':''}{guests.children>0?`, ${guests.children} Child`:''}
// //                     </p>
// //                   </div>
// //                   <Users size={17} color="#8da88a"/>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Booking summary */}
// //             <div style={{...S.card,padding:20}}>
// //               <h3 style={{fontFamily:'Poppins,sans-serif',fontWeight:800,fontSize:16,marginBottom:16}}>Booking Summary</h3>
// //               {selectedRoomData ? (
// //                 <>
// //                   <div style={{display:'flex',flexDirection:'column',gap:12}}>
// //                     <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
// //                       <div>
// //                         <p style={{fontWeight:700,fontSize:13}}>{selectedRoomData.name}</p>
// //                         <p style={{fontSize:11,color:'#8da88a'}}>{calculateNights()} night{calculateNights()!==1?'s':''} · {guests.adults} adult{guests.adults!==1?'s':''}</p>
// //                       </div>
// //                       <span style={{fontWeight:700,fontSize:13}}>₹{calculateTotal(selectedRoomData.discountPrice).toLocaleString()}</span>
// //                     </div>
// //                     <div style={{borderTop:'1px solid #e2e8e2',paddingTop:12,display:'flex',flexDirection:'column',gap:8}}>
// //                       {[
// //                         {label:`Stay (${calculateNights()} nights)`,val:calculateTotal(selectedRoomData.discountPrice)},
// //                         {label:'Taxes & fees (12%)',val:Math.round(calculateTotal(selectedRoomData.discountPrice)*.12)},
// //                         {label:'Service charge (5%)',val:Math.round(calculateTotal(selectedRoomData.discountPrice)*.05)},
// //                       ].map(({label,val})=>(
// //                         <div key={label} style={{display:'flex',justifyContent:'space-between',fontSize:13,color:'#4a6741'}}>
// //                           <span>{label}</span><span>₹{val.toLocaleString()}</span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                     <div style={{borderTop:'2px solid #e2e8e2',paddingTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
// //                       <span style={{fontWeight:800,fontFamily:'Poppins,sans-serif'}}>Total</span>
// //                       <div style={{textAlign:'right'}}>
// //                         <div style={{fontFamily:'Poppins,sans-serif',fontSize:26,fontWeight:900,lineHeight:1}}>
// //                           ₹{Math.round(calculateTotal(selectedRoomData.discountPrice)*1.17).toLocaleString()}
// //                         </div>
// //                         <p style={{fontSize:10,color:'#8da88a',marginTop:2}}>All charges included</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <button style={{...S.greenBtn,width:'100%',justifyContent:'center',marginTop:16,padding:16,fontSize:15}}>
// //                     Reserve Now <ChevronRight size={20}/>
// //                   </button>
// //                   <p style={{textAlign:'center',fontSize:11,color:'#8da88a',marginTop:10}}>Free cancellation available</p>
// //                 </>
// //               ) : (
// //                 <div style={{textAlign:'center',padding:'28px 0'}}>
// //                   <Info size={32} color="#e2e8e2" style={{margin:'0 auto 10px'}}/>
// //                   <p style={{color:'#8da88a',fontSize:13,fontWeight:500}}>Select a space above to see pricing</p>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Trust badges */}
// //             <div style={{display:'flex',flexDirection:'column',gap:10}}>
// //               {TRUST_BADGES.map((b,i)=>(
// //                 <div key={i} style={{background:'linear-gradient(135deg,#f0faf4,#e6f5ec)',border:'1px solid #b8ddc4',borderRadius:12,padding:'12px 14px',display:'flex',alignItems:'flex-start',gap:12}}>
// //                   <div style={{background:'#fff',padding:8,borderRadius:8,color:'#1a7a4a',boxShadow:'0 1px 4px rgba(0,0,0,.08)',flexShrink:0}}>{b.icon}</div>
// //                   <div><p style={{fontSize:12,fontWeight:700,color:'#0a2e18',marginBottom:2}}>{b.title}</p><p style={{fontSize:11,color:'#3a6e4a'}}>{b.desc}</p></div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Responsive styles */}
// //       <style>{`
// //         @media(max-width:1024px){
// //           .detail-grid{grid-template-columns:1fr!important}
// //         }
// //         @media(max-width:600px){
// //           .detail-policy-grid{grid-template-columns:1fr!important}
// //           .detail-amenity-grid{grid-template-columns:1fr!important}
// //           .detail-gallery{grid-template-columns:1fr 1fr!important;grid-template-rows:repeat(3,120px)!important}
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default HomestayVillaDetail;

















// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import {
//   Star, MapPin, Wifi, Coffee, ChevronLeft, Check,
//   Info, Heart, Shield, Waves, Car,
//   Dumbbell, Sparkles, Users,
//   Calendar, ChevronRight, X,
//   Clock, Award, Maximize2,
//   Phone, Globe, Loader2, AlertCircle, Tv, Wind, Bath,
//   Trees, Home, Utensils, Dog, Flame, Camera
// } from 'lucide-react';

// const API_BASE_URL   = 'https://bmtadmin.onrender.com/api';
// const IMAGE_BASE_URL = 'https://bmtadmin.onrender.com/';
// const FB_IMGS = [
//   'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200',
//   'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
//   'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
//   'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
//   'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
// ];
// const ROOM_FB = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600';

// // ── STATIC DETAIL DATA ────────────────────────────────────────────────────────
// const STATIC_DETAILS = {
//   sv1:{
//     id:'sv1', name:'Aranya Forest Villa', type:'Villa', stars:5,
//     address:'Estate Road, Madikeri, Coorg, Karnataka 571201',
//     rating:4.8, ratingText:'Exceptional', reviews:142,
//     description:'Nestled in the heart of Coorg\'s coffee plantations, Aranya Forest Villa is a stunning private estate offering an immersive nature retreat. Wake up to misty mountain views, take a dip in your private infinity pool, and stroll through aromatic coffee and cardamom estates. The villa blends traditional Kodava architecture with contemporary comforts.',
//     phone:'+91 98765 43210', website:'aranyavilla.com', email:'stay@aranyavilla.com',
//     images:[
//       'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200',
//       'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
//       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
//       'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
//       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
//     ],
//     amenities:['Free WiFi','Private Pool','Breakfast Included','Fireplace','Coffee Estate Tour','Bonfire Area','BBQ Grill','Bicycle Rental','Bird Watching','Trekking Guide'],
//     rooms:[
//       {id:'r1',name:'Forest Suite',description:'Spacious suite with private balcony overlooking coffee plantation',size:'45 sq.m',occupancy:'2 Adults',bed:'1 King Bed',amenities:['Free WiFi','AC','Minibar','Private Balcony'],price:9499,discountPrice:7999,images:[],available:2},
//       {id:'r2',name:'Garden Cottage',description:'Cozy private cottage surrounded by cardamom bushes',size:'35 sq.m',occupancy:'2 Adults',bed:'1 Queen Bed',amenities:['Free WiFi','AC','Garden View'],price:7499,discountPrice:5999,images:[],available:1},
//       {id:'r3',name:'Treetop Loft',description:'Elevated wooden loft with panoramic valley views',size:'55 sq.m',occupancy:'3 Adults',bed:'1 King + 1 Single',amenities:['Free WiFi','AC','Telescope','Hammock'],price:12999,discountPrice:10499,images:[],available:1},
//     ],
//     policies:['Check-in: 2:00 PM','Check-out: 11:00 AM','No Smoking inside rooms','Pets Allowed (on request)','Local ID accepted','Free cancellation within 48 hours','Children of all ages welcome'],
//     location:{lat:12.42,lng:75.74,landmark:'Near Raja\'s Seat Viewpoint'},
//     highlights:['Eco-Certified Property','Organic Coffee Estate','Guided Nature Walks','Couple Friendly'],
//   },
//   sv2:{
//     id:'sv2', name:'The Goan Treehouse', type:'Treehouse', stars:5,
//     address:'Banyan Tree Road, Assagao, North Goa 403507',
//     rating:4.9, ratingText:'Exceptional', reviews:89,
//     description:'An absolutely magical treehouse experience suspended among ancient banyan trees, just 5 minutes from the beaches of North Goa. This adults-only retreat offers unmatched privacy, the gentle rustle of leaves as your soundtrack, and a coconut grove stretching to the horizon. Solar powered and fully sustainable.',
//     phone:'+91 98765 43211', website:'goantreehouse.com', email:'',
//     images:[
//       'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=1200',
//       'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
//       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
//       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
//       'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
//     ],
//     amenities:['Free WiFi','Breakfast Included','Hammock','Yoga Deck','Outdoor Shower','Solar Power','Bicycle','Beach Access','Stargazing Deck'],
//     rooms:[
//       {id:'r1',name:'Canopy Suite',description:'The main treehouse cabin with forest views on all sides',size:'40 sq.m',occupancy:'2 Adults',bed:'1 King Bed',amenities:['Free WiFi','AC','Rain Shower','Forest View'],price:6299,discountPrice:5299,images:[],available:1},
//       {id:'r2',name:'Ground Nest',description:'Private ground-level pod with direct garden access',size:'28 sq.m',occupancy:'2 Adults',bed:'1 Queen Bed',amenities:['Free WiFi','Fan','Outdoor Deck'],price:4299,discountPrice:3499,images:[],available:1},
//     ],
//     policies:['Check-in: 1:00 PM','Check-out: 10:00 AM','Adults only (18+)','No Smoking','No Pets','Eco-stay — minimal plastic','Caretaker on-site 24/7'],
//     location:{lat:15.57,lng:73.76,landmark:'5 min from Vagator Beach'},
//     highlights:['Adults Only','Solar Powered','Sustainable Stay','Beach Proximity'],
//   },
//   sv3:{
//     id:'sv3', name:'Himalayan Heritage Homestay', type:'Homestay', stars:4,
//     address:'Old Manali Village Road, Manali, Himachal Pradesh 175131',
//     rating:4.7, ratingText:'Excellent', reviews:203,
//     description:'A beautifully preserved traditional Himachali home that has welcomed travellers for three generations. Your warm host family shares home-cooked meals featuring local recipes, guides you on treks to hidden valleys, and ensures you experience the real Manali beyond the tourist trail.',
//     phone:'+91 94180 12345', website:'', email:'',
//     images:[
//       'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
//       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
//       'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
//       'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
//       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
//     ],
//     amenities:['Free WiFi','All Meals Included','Fireplace (Bukhari)','Trekking Guide','Mountain View','Bonfire','Local Experience','Orchard Access','Snowfall Viewing'],
//     rooms:[
//       {id:'r1',name:'Mountain View Room',description:'Room with panoramic views of the Beas valley',size:'22 sq.m',occupancy:'2 Adults',bed:'1 Double Bed',amenities:['Free WiFi','Heater','Mountain View'],price:3799,discountPrice:3299,images:[],available:2},
//       {id:'r2',name:'Orchard Room',description:'Opens into the apple orchard with private sit-out',size:'20 sq.m',occupancy:'2 Adults',bed:'2 Single Beds',amenities:['Free WiFi','Heater','Garden Access'],price:3299,discountPrice:2799,images:[],available:1},
//     ],
//     policies:['Check-in: 12:00 PM','Check-out: 11:00 AM','Home-cooked meals served at fixed times','No alcohol on premises','Children welcome','Pets not allowed'],
//     location:{lat:32.27,lng:77.17,landmark:'Near Hadimba Temple, Old Manali'},
//     highlights:['Family Run','Mountain Views','All Meals Included','Cultural Experience'],
//   },
//   sv4:{
//     id:'sv4', name:'Backwater Houseboat', type:'Houseboat', stars:5,
//     address:'Alappuzha Backwaters, Kerala 688001',
//     rating:4.6, ratingText:'Excellent', reviews:167,
//     description:'Float through the serene Kerala backwaters on this luxuriously appointed houseboat. Watch the sunset over still waters while sipping fresh coconut water. The boat glides through narrow canals lined with coconut palms, offering an experience unique to Kerala.',
//     phone:'+91 94470 12345', website:'', email:'',
//     images:[
//       'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=1200',
//       'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
//       'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
//       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
//       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
//     ],
//     amenities:['All Meals Included','AC','Fishing Gear','Sunset Cruise','Chef On Board','Traditional Music'],
//     rooms:[
//       {id:'r1',name:'Master Cabin',description:'Premium cabin with panoramic backwater views',size:'30 sq.m',occupancy:'2 Adults',bed:'1 King Bed',amenities:['AC','Attached Bath','River View'],price:11999,discountPrice:9999,images:[],available:1},
//     ],
//     policies:['Check-in: 12:00 PM','Check-out: 10:00 AM','All meals included','No Pets','Life jackets provided'],
//     location:{lat:9.49,lng:76.33,landmark:'Alappuzha Backwaters'},
//     highlights:['Private Boat','Chef On Board','All Meals','Sunset Views'],
//   },
//   sv5:{
//     id:'sv5', name:'Rajasthani Desert Camp', type:'Camp', stars:5,
//     address:'Sam Sand Dunes, Jaisalmer, Rajasthan 345001',
//     rating:4.5, ratingText:'Excellent', reviews:318,
//     description:'Experience the magic of the Thar Desert under a canopy of stars. Luxury tents with modern amenities set against the golden sand dunes. Watch the sun paint the dunes in hues of gold and crimson at sunset, then enjoy folk music around a bonfire.',
//     phone:'+91 98290 12345', website:'', email:'',
//     images:[
//       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200',
//       'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
//       'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
//       'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
//       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
//     ],
//     amenities:['All Meals Included','Camel Safari','Bonfire','Cultural Shows','Jeep Safari','Stargazing'],
//     rooms:[
//       {id:'r1',name:'Luxury Desert Tent',description:'Air-cooled luxury tent with private deck facing the dunes',size:'40 sq.m',occupancy:'2 Adults',bed:'1 King Bed',amenities:['AC','Attached Bath','Desert View'],price:7999,discountPrice:6999,images:[],available:4},
//     ],
//     policies:['Check-in: 3:00 PM','Check-out: 10:00 AM','All meals included','No Pets','Camel Safari included'],
//     location:{lat:26.84,lng:70.55,landmark:'Sam Sand Dunes'},
//     highlights:['Under the Stars','Camel Safari Included','Cultural Shows','Bonfire Nights'],
//   },
//   sv6:{
//     id:'sv6', name:'Pondicherry Heritage Villa', type:'Villa', stars:5,
//     address:'French Quarter, White Town, Pondicherry 605001',
//     rating:4.8, ratingText:'Exceptional', reviews:94,
//     description:'A lovingly restored 19th-century French Creole villa in the heart of the White Town. Mediterranean courtyard, vintage furniture, and rooftop sea views. Walk to the promenade in 5 minutes.',
//     phone:'+91 94430 12345', website:'', email:'',
//     images:[
//       'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200',
//       'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
//       'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
//       'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
//       'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
//     ],
//     amenities:['Free WiFi','Breakfast Included','Rooftop Terrace','Bicycle','Courtyard Garden','Sea View'],
//     rooms:[
//       {id:'r1',name:'Heritage Suite',description:'Period-furnished suite with courtyard view',size:'35 sq.m',occupancy:'2 Adults',bed:'1 King Bed',amenities:['Free WiFi','AC','Courtyard View'],price:8999,discountPrice:7499,images:[],available:2},
//       {id:'r2',name:'Rooftop Room',description:'Bright room with direct rooftop terrace access and sea views',size:'28 sq.m',occupancy:'2 Adults',bed:'1 Queen Bed',amenities:['Free WiFi','AC','Sea View'],price:10999,discountPrice:8999,images:[],available:1},
//     ],
//     policies:['Check-in: 2:00 PM','Check-out: 11:00 AM','Pets Allowed','Couple Friendly','Local ID accepted'],
//     location:{lat:11.93,lng:79.83,landmark:'Near Promenade Beach'},
//     highlights:['Heritage Property','French Quarter','Pet Friendly','Sea View Rooftop'],
//   },
// };

// // ── HELPERS ───────────────────────────────────────────────────────────────────
// const amenityIcon = (raw='') => {
//   const s=raw.toLowerCase();
//   if(s.includes('wifi')||s.includes('wi-fi')) return <Wifi size={20}/>;
//   if(s.includes('pool')||s.includes('swimming')) return <Waves size={20}/>;
//   if(s.includes('parking')) return <Car size={20}/>;
//   if(s.includes('breakfast')||s.includes('meal')) return <Coffee size={20}/>;
//   if(s.includes('gym')||s.includes('fitness')) return <Dumbbell size={20}/>;
//   if(s.includes('spa')||s.includes('wellness')) return <Sparkles size={20}/>;
//   if(s.includes('restaurant')||s.includes('dining')||s.includes('kitchen')) return <Utensils size={20}/>;
//   if(s.includes('tv')||s.includes('television')) return <Tv size={20}/>;
//   if(s.includes('air')||s.includes('ac')) return <Wind size={20}/>;
//   if(s.includes('bath')||s.includes('jacuzzi')) return <Bath size={20}/>;
//   if(s.includes('tree')||s.includes('forest')||s.includes('garden')||s.includes('orchard')) return <Trees size={20}/>;
//   if(s.includes('bicycle')||s.includes('trek')||s.includes('guide')) return <MapPin size={20}/>;
//   if(s.includes('bonfire')||s.includes('bbq')||s.includes('fire')) return <Flame size={20}/>;
//   if(s.includes('pet')||s.includes('dog')) return <Dog size={20}/>;
//   return <Check size={20}/>;
// };

// const buildImageUrl = (path) => {
//   if (!path) return null;
//   if (path.startsWith('http')) return path;
//   // return IMAGE_BASE_URL + path.replace(/\\/g, '/');
//   return IMAGE_BASE_URL + "uploads/" + path.replace(/\\/g, '/');
// };

// const getRatingText = (r) => {
//   if (r >= 4.8) return 'Exceptional'; if (r >= 4.5) return 'Excellent';
//   if (r >= 4.0) return 'Very Good';  if (r >= 3.5) return 'Good';
//   return 'Pleasant';
// };

// // ✅ Convert raw API property (from state or API fetch) to unified detail format
// const buildDetailFromRaw = (h) => {
//   // h could be:
//   // 1. Already a full detail object (from STATIC_DETAILS) — has .images, .rooms, .policies
//   // 2. A mapped card object (from HomestayVilla list) — has .hotelImages, ._raw
//   // 3. A raw API object — has .propertyName, .thumbnail, etc.

//   // If it's already a proper detail object with images array
//   if (h.images && Array.isArray(h.images) && h.rooms) {
//     return h;
//   }

//   // Get the raw API data if available
//   const raw = h._raw || h;

//   // Build images from all sources
//   // const thumbImg   = buildImageUrl(raw.thumbnail);
//   const thumbImg = buildImageUrl(raw.thumbnail) || FB_IMGS[0];
//   const galleryImgs = (raw.gallery || []).map(buildImageUrl).filter(Boolean);
//   const hotelImgs  = (h.hotelImages || []).filter(x => x && x.startsWith('http'));
  
//   // let images = [...new Set([thumbImg, ...galleryImgs, ...hotelImgs].filter(Boolean))];
//   let images = [...new Set([
//   thumbImg || FB_IMGS[0],
//   ...galleryImgs,
//   ...hotelImgs
// ].filter(Boolean))];
//   if (images.length < 5) {
//     images = [...images, ...FB_IMGS.slice(images.length, 5)];
//   }

//   // Build amenities
//   const amenities = (raw.amenities || h.amenities || []).filter(Boolean);

//   // Price
//   const discountPrice = Number(raw.finalPrice) || Number(raw.pricePerNight) || Number(h.discountPrice) || 2000;
//   const origPrice     = Number(raw.pricePerNight) || Number(h.pricePerNight) || Math.round(discountPrice / 0.85);

//   // Build room from available data
//   const rooms = [{
//     id: 'r1',
//     name: raw.roomType || 'Standard Room',
//     description: `${raw.mealPlan ? `Meal plan: ${raw.mealPlan}. ` : ''}${raw.houseRules || 'Comfortable accommodation with great amenities.'}`,
//     size: raw.bedrooms ? `${raw.bedrooms} Bedroom${raw.bedrooms > 1 ? 's' : ''}` : '30 sq.m',
//     occupancy: `${raw.maxGuests || 2} Guests`,
//     bed: `${raw.beds || 1} Bed${raw.beds > 1 ? 's' : ''}`,
//     amenities: amenities.slice(0, 5),
//     price: origPrice,
//     discountPrice: discountPrice,
//     images: [],
//     available: 3,
//   }];

//   // Build policies
//   const policies = [
//     `Check-in: ${raw.checkInTime || h.checkInTime || '2:00 PM'}`,
//     `Check-out: ${raw.checkOutTime || h.checkOutTime || '11:00 AM'}`,
//     raw.cancellationPolicy && `Cancellation: ${raw.cancellationPolicy}`,
//     raw.houseRules && raw.houseRules,
//     raw.mealPlan && `Meals: ${raw.mealPlan}`,
//     raw.petPolicy && `Pets: ${raw.petPolicy}`,
//   ].filter(Boolean);

//   // Address
//   const address = [raw.address, raw.area, raw.city, raw.state]
//     .filter(Boolean).join(', ');

//   // Highlights
//   const highlights = [];
//   if (raw.mealPlan && raw.mealPlan !== 'No Meals') highlights.push(raw.mealPlan);
//   if (raw.status === 'approved') highlights.push('Verified Property');
//   if (raw.maxGuests) highlights.push(`Up to ${raw.maxGuests} Guests`);

//   return {
//     id: h.id || h._id || raw._id,
//     name: raw.propertyName || h.hotelName || h.name || 'Property',
//     type: raw.propertyType || h.propertyType || h.hotelType || h.type || 'Homestay',
//     stars: 4,
//     address: address || h.address || 'India',
//     rating: Number(raw.rating) || h.averageRating || h.rating || 4.5,
//     ratingText: getRatingText(Number(raw.rating) || h.averageRating || h.rating || 4.5),
//     reviews: Number(raw.reviews) || h.totalReviews || h.reviews || 0,
//     description: raw.description || h.description ||
//       `${raw.propertyName || h.hotelName || 'This property'} is a wonderful ${raw.propertyType || h.propertyType || 'stay'} in ${raw.city || h.city || 'India'}. It offers ${raw.bedrooms || 1} bedroom(s) and can accommodate up to ${raw.maxGuests || 2} guests. ${raw.mealPlan ? `Meal plan: ${raw.mealPlan}.` : ''}`,
//     phone: raw.phone || h.phone || '',
//     website: raw.website || h.website || '',
//     email: raw.email || h.email || '',
//     images,
//     amenities,
//     rooms,
//     policies,
//     location: {
//       lat: Number(raw.mapLocation?.lat) || 0,
//       lng: Number(raw.mapLocation?.lng) || 0,
//       landmark: raw.address || '',
//     },
//     highlights,
//   };
// };

// // ✅ Convert full API response object (from /homestay/admin/all) to detail format
// const mapApiToDetail = (h) => {
//   return buildDetailFromRaw(h);
// };

// const TRUST_BADGES = [
//   {icon:<Shield size={20}/>, title:'Verified Property', desc:'Personally inspected by our team'},
//   {icon:<Award size={20}/>, title:'Genuine Reviews',   desc:'Only from real guests like you'},
//   {icon:<Clock size={20}/>, title:'24/7 Host Support', desc:'Always here when you need us'},
// ];

// // ── MAIN COMPONENT ────────────────────────────────────────────────────────────
// const HomestayVillaDetail = () => {
//   const { id }   = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [property,          setProperty]          = useState(null);
//   const [loading,           setLoading]            = useState(true);
//   const [error,             setError]              = useState(null);
//   const [wishlisted,        setWishlisted]         = useState(false);
//   const [showAllAmenities,  setShowAllAmenities]   = useState(false);
//   const [showDatePicker,    setShowDatePicker]     = useState(false);
//   const [showGuestsPicker,  setShowGuestsPicker]   = useState(false);
//   const [selectedRoom,      setSelectedRoom]       = useState(null);
//   const [showAllPhotos,     setShowAllPhotos]      = useState(false);

//   const [checkInDate,  setCheckInDate]  = useState(() => { const d=new Date();d.setDate(d.getDate()+1);return d; });
//   const [checkOutDate, setCheckOutDate] = useState(() => { const d=new Date();d.setDate(d.getDate()+3);return d; });
//   const [guests, setGuests] = useState({adults:2,children:0,rooms:1});

//   useEffect(() => {
//     const load = async () => {
//       setLoading(true); setError(null);

//       // ── STEP 1: Static detail data (sv1, sv2, sv3…) ─────────────────────
//       if (STATIC_DETAILS[id]) {
//         setProperty(STATIC_DETAILS[id]);
//         setLoading(false);
//         return;
//       }

//       // ── STEP 2: Property passed via navigation state ──────────────────────
//       // This is the MAIN path for API properties — the list page passes full data
//       const passed = location.state?.property;
//       if (passed) {
//         try {
//           const detail = buildDetailFromRaw(passed);
//           setProperty(detail);
//         } catch(e) {
//           console.error('Error building detail from state:', e);
//         }
//         setLoading(false);
//         return;
//       }

//       // ── STEP 3: Popular card data (pg1, pc1…) from state ─────────────────
//       // Already handled above via location.state?.property

//       // ── STEP 4: Fetch from API by ID ─────────────────────────────────────
//       try {
//         const res  = await fetch(`${API_BASE_URL}/homestay/admin/all`);
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const data = await res.json();
//         const arr  = Array.isArray(data) ? data : (data.data || []);
//         const found = arr.find(h => h._id === id || h.id === id || h.propertyId === id);
//         if (found) {
//           setProperty(mapApiToDetail(found));
//         } else {
//           throw new Error('Property not found');
//         }
//       } catch (e) {
//         setError(e.message || 'Could not load property');
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, [id]);

//   const calculateNights = () => Math.max(1, Math.ceil(Math.abs(checkOutDate-checkInDate)/(1000*60*60*24)));
//   const calculateTotal  = (price) => price * calculateNights();

//   // ── Loading ────────────────────────────────────────────────────────────────
//   if (loading) return (
//     <div style={{minHeight:'100vh',background:'#f4f7f4',display:'flex',alignItems:'center',justifyContent:'center'}}>
//       <div style={{textAlign:'center'}}>
//         <Loader2 style={{width:48,height:48,color:'#1a7a4a',animation:'spin 1s linear infinite',margin:'0 auto 12px'}}/>
//         <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//         <p style={{color:'#4a6741',fontFamily:'Inter,sans-serif'}}>Loading property details…</p>
//       </div>
//     </div>
//   );

//   if (error || !property) return (
//     <div style={{minHeight:'100vh',background:'#f4f7f4',display:'flex',alignItems:'center',justifyContent:'center'}}>
//       <div style={{textAlign:'center',maxWidth:400,padding:24}}>
//         <AlertCircle style={{width:48,height:48,color:'#e05c5c',margin:'0 auto 12px'}}/>
//         <h2 style={{fontFamily:'Poppins,sans-serif',marginBottom:8}}>Property Not Found</h2>
//         <p style={{color:'#4a6741',marginBottom:16}}>{error}</p>
//         <div style={{display:'flex',gap:10,justifyContent:'center'}}>
//           <button onClick={()=>window.location.reload()} style={{padding:'10px 20px',background:'#1a7a4a',color:'#fff',border:'none',borderRadius:8,fontWeight:700,cursor:'pointer'}}>Retry</button>
//           <button onClick={()=>navigate(-1)} style={{padding:'10px 20px',border:'1.5px solid #e2e8e2',borderRadius:8,fontWeight:700,cursor:'pointer',background:'#fff'}}>Go Back</button>
//         </div>
//       </div>
//     </div>
//   );

//   const amenitiesToShow  = showAllAmenities ? property.amenities : property.amenities.slice(0,8);
//   const selectedRoomData = property.rooms?.find(r => r.id === selectedRoom);

//   const typeIco = (type='') => {
//     const t=type.toLowerCase();
//     if(t.includes('villa')) return '🏡'; if(t.includes('tree')) return '🌳';
//     if(t.includes('farm')) return '🚜'; if(t.includes('boat')) return '⛵';
//     if(t.includes('camp')||t.includes('glamp')) return '⛺'; if(t.includes('chalet')) return '⛰️';
//     if(t.includes('cottage')) return '🌿'; return '🏠';
//   };

//   // Ensure we always have 5 images for the gallery grid
//   const galleryImages = [...(property.images || [])];
//   while (galleryImages.length < 5) galleryImages.push(FB_IMGS[galleryImages.length % FB_IMGS.length]);

//   // ── Modals ─────────────────────────────────────────────────────────────────
//   const PhotoGalleryModal = () => !showAllPhotos ? null : (
//     <div style={{position:'fixed',inset:0,zIndex:9999,background:'#000',display:'flex',flexDirection:'column'}}>
//       <div style={{padding:16,display:'flex',justifyContent:'space-between',alignItems:'center',background:'rgba(0,0,0,.9)'}}>
//         <h3 style={{color:'#fff',fontFamily:'Poppins,sans-serif',fontWeight:700}}>{property.name} — All Photos</h3>
//         <button onClick={()=>setShowAllPhotos(false)} style={{background:'rgba(255,255,255,.15)',border:'none',color:'#fff',borderRadius:8,padding:8,cursor:'pointer',display:'flex'}}>
//           <X size={20}/>
//         </button>
//       </div>
//       <div style={{flex:1,overflowY:'auto',padding:16}}>
//         <div style={{maxWidth:1000,margin:'0 auto',columns:'1 200px',gap:12}}>
//           {galleryImages.map((img,i)=>(
//             <img key={i} src={img} alt={`${property.name} ${i+1}`}
//               onError={e=>{e.target.src=FB_IMGS[i%FB_IMGS.length];}}
//               style={{width:'100%',marginBottom:12,borderRadius:10,cursor:'pointer',display:'block'}}
//               onClick={()=>setShowAllPhotos(false)}/>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const DatePickerModal = () => {
//     const [selStart,setSelStart]=useState(checkInDate),[selEnd,setSelEnd]=useState(checkOutDate);
//     const [month,setMonth]=useState(new Date().getMonth()),[year,setYear]=useState(new Date().getFullYear());
//     const MN=['January','February','March','April','May','June','July','August','September','October','November','December'];
//     const days=()=>{const out=[];const first=new Date(year,month,1).getDay();const total=new Date(year,month+1,0).getDate();for(let i=0;i<first;i++)out.push(null);for(let d=1;d<=total;d++)out.push(new Date(year,month,d));return out;};
//     const click=d=>{if(!selStart||(selStart&&selEnd)){setSelStart(d);setSelEnd(null);}else{if(d<selStart){setSelEnd(selStart);setSelStart(d);}else setSelEnd(d);}};
//     const today=new Date();today.setHours(0,0,0,0);
//     const fmt=d=>d?d.toLocaleDateString('en-US',{month:'short',day:'2-digit',year:'numeric'}):'—';
//     if(!showDatePicker) return null;
//     return (
//       <div style={{position:'fixed',inset:0,zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(10,46,24,.4)',backdropFilter:'blur(4px)',padding:16}}>
//         <div style={{background:'#fff',borderRadius:20,maxWidth:420,width:'100%',overflow:'hidden',boxShadow:'0 20px 60px rgba(0,0,0,.2)'}}>
//           <div style={{padding:'16px 20px',background:'linear-gradient(135deg,#0a2e18,#1a5c30)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//             <span style={{fontFamily:'Poppins,sans-serif',fontWeight:700,color:'#fff',fontSize:16}}>Select Dates</span>
//             <button style={{background:'rgba(255,255,255,.15)',border:'none',color:'#fff',borderRadius:6,padding:7,cursor:'pointer',display:'flex'}} onClick={()=>setShowDatePicker(false)}><X size={17}/></button>
//           </div>
//           <div style={{padding:20}}>
//             <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
//               <button style={{background:'#f4f7f4',border:'1.5px solid #e2e8e2',borderRadius:8,padding:8,cursor:'pointer',display:'flex'}} onClick={()=>{if(month===0){setMonth(11);setYear(y=>y-1);}else setMonth(m=>m-1);}}><ChevronLeft size={18}/></button>
//               <span style={{fontFamily:'Poppins,sans-serif',fontWeight:700,fontSize:15}}>{MN[month]} {year}</span>
//               <button style={{background:'#f4f7f4',border:'1.5px solid #e2e8e2',borderRadius:8,padding:8,cursor:'pointer',display:'flex'}} onClick={()=>{if(month===11){setMonth(0);setYear(y=>y+1);}else setMonth(m=>m+1);}}><ChevronRight size={18}/></button>
//             </div>
//             <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:3,marginBottom:12}}>
//               {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d=><div key={d} style={{textAlign:'center',fontSize:11,fontWeight:700,color:'#8da88a',paddingBottom:8}}>{d}</div>)}
//               {days().map((date,i)=>{
//                 if(!date) return <div key={`e${i}`}/>;
//                 const past=date<today,isS=selStart&&date.getTime()===selStart.getTime(),isE=selEnd&&date.getTime()===selEnd.getTime(),inR=selStart&&selEnd&&date>selStart&&date<selEnd;
//                 return <button key={date.toISOString()} onClick={()=>!past&&click(date)} disabled={past}
//                   style={{height:38,border:'none',background:isS||isE?'#1a7a4a':inR?'#e6f5ec':'none',color:isS||isE?'#fff':inR?'#1a5c30':past?'#ccc':'#1a2e1a',borderRadius:isS?'8px 0 0 8px':isE?'0 8px 8px 0':inR?0:8,cursor:past?'not-allowed':'pointer',fontWeight:600,fontSize:13,transition:'all .15s'}}>
//                   {date.getDate()}
//                 </button>;
//               })}
//             </div>
//             <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',background:'#f4f7f4',borderRadius:10,padding:13,marginBottom:14,alignItems:'center',gap:8}}>
//               <div><p style={{fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:.6,color:'#4a6741',marginBottom:3}}>CHECK-IN</p><p style={{fontSize:14,fontWeight:700}}>{fmt(selStart)}</p></div>
//               <div style={{width:18,height:2,background:'#e2e8e2'}}/>
//               <div style={{textAlign:'right'}}><p style={{fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:.6,color:'#4a6741',marginBottom:3}}>CHECK-OUT</p><p style={{fontSize:14,fontWeight:700}}>{fmt(selEnd)}</p></div>
//             </div>
//             <button onClick={()=>{if(selStart&&selEnd){setCheckInDate(selStart);setCheckOutDate(selEnd);setShowDatePicker(false);}}} disabled={!selStart||!selEnd}
//               style={{width:'100%',padding:14,background:'linear-gradient(135deg,#1a7a4a,#155f3a)',color:'#fff',border:'none',borderRadius:10,fontWeight:700,fontSize:15,cursor:!selStart||!selEnd?'not-allowed':'pointer',opacity:!selStart||!selEnd?.45:1,fontFamily:'Poppins,sans-serif'}}>
//               Apply Dates
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const GuestsPickerModal = () => {
//     const [loc, setLoc] = useState({...guests});
//     if (!showGuestsPicker) return null;
//     return (
//       <div style={{position:'fixed',inset:0,zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(10,46,24,.4)',backdropFilter:'blur(4px)',padding:16}}>
//         <div style={{background:'#fff',borderRadius:20,maxWidth:400,width:'100%',overflow:'hidden',boxShadow:'0 20px 60px rgba(0,0,0,.2)'}}>
//           <div style={{padding:'16px 20px',background:'linear-gradient(135deg,#0a2e18,#1a5c30)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//             <span style={{fontFamily:'Poppins,sans-serif',fontWeight:700,color:'#fff',fontSize:16}}>Who's staying?</span>
//             <button onClick={()=>setShowGuestsPicker(false)} style={{background:'rgba(255,255,255,.15)',border:'none',color:'#fff',borderRadius:6,padding:7,cursor:'pointer',display:'flex'}}><X size={17}/></button>
//           </div>
//           <div style={{padding:20}}>
//             {[{key:'adults',label:'Adults',sub:'Ages 13 or above',min:1},{key:'children',label:'Children',sub:'Ages 2–12',min:0},{key:'rooms',label:'Rooms',sub:'Number of rooms',min:1}].map(({key,label,sub,min})=>(
//               <div key={key} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'15px 0',borderBottom:'1px solid #e2e8e2'}}>
//                 <div><p style={{fontWeight:600,fontSize:15}}>{label}</p><p style={{fontSize:12,color:'#4a6741'}}>{sub}</p></div>
//                 <div style={{display:'flex',alignItems:'center',gap:14}}>
//                   <button onClick={()=>setLoc(l=>({...l,[key]:Math.max(min,l[key]-1)}))} style={{width:40,height:40,borderRadius:'50%',border:'1.5px solid #e2e8e2',background:'#fff',cursor:'pointer',fontSize:18,fontWeight:600,display:'flex',alignItems:'center',justifyContent:'center'}}>−</button>
//                   <span style={{fontWeight:700,fontSize:16,minWidth:24,textAlign:'center'}}>{loc[key]}</span>
//                   <button onClick={()=>setLoc(l=>({...l,[key]:l[key]+1}))} style={{width:40,height:40,borderRadius:'50%',border:'1.5px solid #e2e8e2',background:'#fff',cursor:'pointer',fontSize:18,fontWeight:600,display:'flex',alignItems:'center',justifyContent:'center'}}>+</button>
//                 </div>
//               </div>
//             ))}
//             <button onClick={()=>{setGuests(loc);setShowGuestsPicker(false);}} style={{width:'100%',marginTop:20,padding:14,background:'linear-gradient(135deg,#1a7a4a,#155f3a)',color:'#fff',border:'none',borderRadius:10,fontWeight:700,fontSize:15,cursor:'pointer',fontFamily:'Poppins,sans-serif'}}>Done</button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // ── RENDER ─────────────────────────────────────────────────────────────────
//   const S = {
//     page: {minHeight:'100vh',background:'#f4f7f4',fontFamily:'Inter,sans-serif',color:'#1a2e1a'},
//     sticky: {position:'sticky',top:0,zIndex:40,background:'rgba(255,255,255,.95)',backdropFilter:'blur(8px)',borderBottom:'1px solid #e2e8e2'},
//     stickyInner: {maxWidth:1280,margin:'0 auto',padding:'12px 20px',display:'flex',justifyContent:'space-between',alignItems:'center'},
//     main: {maxWidth:1280,margin:'0 auto',padding:'24px 20px'},
//     card: {background:'#fff',borderRadius:16,border:'1px solid #e2e8e2',boxShadow:'0 2px 12px rgba(26,122,74,.06)'},
//     grid: {display:'grid',gridTemplateColumns:'1fr 340px',gap:28,alignItems:'start'},
//     section: {background:'#fff',borderRadius:16,border:'1px solid #e2e8e2',padding:24,marginBottom:24,boxShadow:'0 2px 8px rgba(26,122,74,.04)'},
//     h2: {fontFamily:'Poppins,sans-serif',fontSize:22,fontWeight:800,color:'#1a2e1a',marginBottom:16},
//     greenBtn: {padding:'11px 20px',background:'linear-gradient(135deg,#1a7a4a,#155f3a)',color:'#fff',border:'none',borderRadius:10,fontWeight:700,cursor:'pointer',display:'flex',alignItems:'center',gap:6,fontFamily:'Poppins,sans-serif',transition:'all .25s'},
//     outlineBtn: {padding:'11px 16px',border:'1.5px solid #e2e8e2',background:'#fff',borderRadius:10,fontWeight:700,cursor:'pointer',transition:'all .2s'},
//   };

//   return (
//     <div style={S.page}>
//       <PhotoGalleryModal/>
//       <DatePickerModal/>
//       <GuestsPickerModal/>

//       {/* Sticky header */}
//       <div style={S.sticky}>
//         <div style={S.stickyInner}>
//           <div style={{display:'flex',alignItems:'center',gap:10}}>
//             <button onClick={()=>navigate(-1)}
//               style={{background:'none',border:'none',cursor:'pointer',display:'flex',padding:6,borderRadius:'50%',color:'#1a2e1a'}}
//               onMouseOver={e=>e.currentTarget.style.background='#f4f7f4'}
//               onMouseOut={e=>e.currentTarget.style.background='none'}>
//               <ChevronLeft size={24}/>
//             </button>
//             <span style={{fontWeight:700,color:'#4a6741',fontSize:14}}>Back to search</span>
//           </div>
//           <div style={{display:'flex',gap:8}}>
//             <button onClick={()=>setWishlisted(w=>!w)} style={{...S.outlineBtn,color:wishlisted?'#e05c5c':'#8da88a',borderColor:wishlisted?'#e05c5c':'#e2e8e2',padding:'8px 12px',display:'flex',alignItems:'center'}}>
//               <Heart size={18} fill={wishlisted?'currentColor':'none'}/>
//             </button>
//             <button onClick={()=>setShowAllPhotos(true)} style={{...S.outlineBtn,display:'flex',alignItems:'center',gap:6,fontSize:13,color:'#4a6741',padding:'8px 14px'}}>
//               <Camera size={16}/>All Photos
//             </button>
//           </div>
//         </div>
//       </div>

//       <div style={S.main}>
//         {/* Header card */}
//         <div style={{...S.card,padding:24,marginBottom:24}}>
//           <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',gap:16}}>
//             <div style={{flex:1}}>
//               <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:12,flexWrap:'wrap'}}>
//                 <span style={{background:'#f0faf4',color:'#1a7a4a',fontSize:11,fontWeight:700,padding:'3px 10px',borderRadius:5,textTransform:'uppercase',letterSpacing:.4}}>
//                   {typeIco(property.type)} {property.type}
//                 </span>
//                 <div style={{display:'flex'}}>
//                   {[...Array(property.stars||4)].map((_,i)=><Star key={i} size={14} fill="#f59e0b" stroke="#f59e0b"/>)}
//                 </div>
//                 {property.reviews > 0 && (
//                   <span style={{fontSize:12,color:'#8da88a',fontWeight:500}}>• {property.reviews.toLocaleString()} reviews</span>
//                 )}
//               </div>
//               <h1 style={{fontFamily:'Poppins,sans-serif',fontSize:'clamp(24px,4vw,38px)',fontWeight:900,color:'#1a2e1a',marginBottom:8,lineHeight:1.15}}>{property.name}</h1>
//               <div style={{display:'flex',alignItems:'flex-start',gap:6,fontSize:13,color:'#4a6741',marginBottom:4}}>
//                 <MapPin size={15} color="#1a7a4a" style={{flexShrink:0,marginTop:2}}/><span>{property.address}</span>
//               </div>
//               {property.location?.landmark && (
//                 <p style={{fontSize:13,color:'#8da88a',marginLeft:21}}>Near {property.location.landmark}</p>
//               )}
//               <div style={{display:'flex',gap:16,marginTop:12,flexWrap:'wrap'}}>
//                 {property.phone && (
//                   <a href={`tel:${property.phone}`} style={{display:'flex',alignItems:'center',gap:6,color:'#1a7a4a',fontWeight:600,fontSize:13,textDecoration:'none'}}>
//                     <Phone size={14}/>{property.phone}
//                   </a>
//                 )}
//                 {property.website && (
//                   <a href={`https://${property.website.replace(/^https?:\/\//,'')}`} target="_blank" rel="noreferrer" style={{display:'flex',alignItems:'center',gap:6,color:'#1a7a4a',fontWeight:600,fontSize:13,textDecoration:'none'}}>
//                     <Globe size={14}/>Website
//                   </a>
//                 )}
//               </div>
//             </div>
//             <div style={{display:'flex',alignItems:'flex-start',gap:12}}>
//               <div style={{textAlign:'right'}}>
//                 <p style={{fontSize:11,color:'#8da88a',fontWeight:700,textTransform:'uppercase',letterSpacing:.5}}>Guest Rating</p>
//                 <p style={{fontWeight:700,fontSize:16,color:'#1a2e1a'}}>{property.ratingText}</p>
//                 {property.reviews > 0 && <p style={{fontSize:11,color:'#8da88a'}}>{property.reviews.toLocaleString()} verified</p>}
//               </div>
//               <div style={{background:'linear-gradient(135deg,#1a7a4a,#155f3a)',color:'#fff',width:56,height:56,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:12,flexShrink:0}}>
//                 <span style={{fontFamily:'Poppins,sans-serif',fontSize:20,fontWeight:900,lineHeight:1}}>{Number(property.rating).toFixed(1)}</span>
//                 <Star size={10} fill="white" stroke="white"/>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Image gallery — always 5 slots */}
//         <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr',gridTemplateRows:'1fr 1fr',gap:10,height:'clamp(280px,45vw,420px)',marginBottom:28}}>
//           {/* Big image — spans 2 rows */}
//           <div style={{position:'relative',overflow:'hidden',borderRadius:12,background:'#e2e8e2',cursor:'pointer',gridColumn:'1',gridRow:'1 / 3'}}
//             onClick={()=>setShowAllPhotos(true)}>
//             <img src={galleryImages[0]} alt={property.name}
//               onError={e=>{e.target.src=FB_IMGS[0];}}
//               style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s'}}
//               onMouseOver={e=>e.currentTarget.style.transform='scale(1.06)'}
//               onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}/>
//           </div>
//           {/* 4 smaller images */}
//           {[1,2,3].map(i=>(
//             <div key={i} style={{position:'relative',overflow:'hidden',borderRadius:12,background:'#e2e8e2',cursor:'pointer'}}
//               onClick={()=>setShowAllPhotos(true)}>
//               <img src={galleryImages[i]} alt={`View ${i+1}`}
//                 onError={e=>{e.target.src=FB_IMGS[i%FB_IMGS.length];}}
//                 style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .5s'}}
//                 onMouseOver={e=>e.currentTarget.style.transform='scale(1.06)'}
//                 onMouseOut={e=>e.currentTarget.style.transform='scale(1)'}/>
//             </div>
//           ))}
//           {/* Last image with "View all" overlay */}
//           <div style={{position:'relative',overflow:'hidden',borderRadius:12,background:'#e2e8e2',cursor:'pointer'}} onClick={()=>setShowAllPhotos(true)}>
//             <img src={galleryImages[4]} alt="More"
//               onError={e=>{e.target.src=FB_IMGS[4%FB_IMGS.length];}}
//               style={{width:'100%',height:'100%',objectFit:'cover',filter:'brightness(.65)'}}/>
//             <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',color:'#fff'}}>
//               <span style={{fontSize:24,fontWeight:900,fontFamily:'Poppins,sans-serif'}}>
//                 +{Math.max(0, galleryImages.length - 4)}
//               </span>
//               <span style={{fontSize:12,fontWeight:600}}>View all</span>
//             </div>
//           </div>
//         </div>

//         {/* Content grid */}
//         <div style={S.grid}>
//           {/* Left column */}
//           <div>
//             {/* About */}
//             <div style={S.section}>
//               <h2 style={S.h2}>About this stay</h2>
//               <p style={{color:'#4a6741',lineHeight:1.75,fontSize:14,whiteSpace:'pre-line'}}>
//                 {property.description || 'No description available.'}
//               </p>
//               {property.highlights?.length > 0 && (
//                 <div style={{marginTop:16,display:'flex',flexWrap:'wrap',gap:8}}>
//                   {property.highlights.map((h,i)=>(
//                     <div key={i} style={{display:'flex',alignItems:'center',gap:6,background:'#f0faf4',border:'1px solid #b8ddc4',padding:'6px 12px',borderRadius:8,fontSize:13,color:'#1a5c30',fontWeight:600}}>
//                       <Check size={14} color="#1a7a4a"/>{h}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Amenities */}
//             {property.amenities?.length > 0 && (
//               <div style={S.section}>
//                 <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:20}}>
//                   <h2 style={{...S.h2,marginBottom:0}}>What's included</h2>
//                   {property.amenities.length > 8 && (
//                     <button onClick={()=>setShowAllAmenities(a=>!a)} style={{background:'none',border:'none',color:'#1a7a4a',fontSize:13,fontWeight:700,cursor:'pointer'}}>
//                       {showAllAmenities ? 'Show less' : `Show all (${property.amenities.length})`}
//                     </button>
//                   )}
//                 </div>
//                 <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
//                   {amenitiesToShow.map((am,i)=>(
//                     <div key={i} style={{display:'flex',alignItems:'center',gap:12,padding:12,borderRadius:10,background:'#f9fcf9',border:'1px solid #e2e8e2',transition:'all .2s'}}
//                       onMouseOver={e=>e.currentTarget.style.background='#f0faf4'}
//                       onMouseOut={e=>e.currentTarget.style.background='#f9fcf9'}>
//                       <div style={{color:'#1a7a4a',background:'#e6f5ec',padding:8,borderRadius:8,flexShrink:0}}>{amenityIcon(String(am))}</div>
//                       <span style={{fontWeight:600,color:'#1a2e1a',fontSize:13}}>{String(am)}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Rooms / Spaces */}
//             <div style={S.section}>
//               <h2 style={S.h2}>Available Spaces</h2>
//               {!property.rooms?.length ? (
//                 <p style={{color:'#8da88a',textAlign:'center',padding:'32px 0'}}>Contact the host for space details.</p>
//               ) : (
//                 <div style={{display:'flex',flexDirection:'column',gap:16}}>
//                   {property.rooms.map(room=>(
//                     <div key={room.id}
//                       style={{border:`2px solid ${selectedRoom===room.id?'#1a7a4a':'#e2e8e2'}`,borderRadius:14,padding:18,cursor:'pointer',transition:'all .22s',background:selectedRoom===room.id?'#f0faf4':'#fff'}}
//                       onClick={()=>setSelectedRoom(room.id===selectedRoom?null:room.id)}>
//                       <div style={{display:'flex',flexWrap:'wrap',gap:14}}>
//                         <img src={room.images?.[0] || ROOM_FB} alt={room.name}
//                           onError={e=>{e.target.src=ROOM_FB;}}
//                           style={{width:140,height:120,objectFit:'cover',borderRadius:10,flexShrink:0}}/>
//                         <div style={{flex:1,minWidth:200}}>
//                           <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10,alignItems:'flex-start'}}>
//                             <div>
//                               <h3 style={{fontFamily:'Poppins,sans-serif',fontSize:16,fontWeight:800,marginBottom:4}}>{room.name}</h3>
//                               {room.description && <p style={{fontSize:12,color:'#4a6741',marginBottom:8}}>{room.description}</p>}
//                               <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:8}}>
//                                 {room.size && <span style={{fontSize:11,color:'#8da88a',display:'flex',alignItems:'center',gap:4}}><Maximize2 size={12}/>{room.size}</span>}
//                                 {room.occupancy && <span style={{fontSize:11,color:'#8da88a',display:'flex',alignItems:'center',gap:4}}><Users size={12}/>{room.occupancy}</span>}
//                                 {room.bed && <span style={{fontSize:11,color:'#8da88a'}}>{room.bed}</span>}
//                               </div>
//                               <div style={{display:'flex',flexWrap:'wrap',gap:5}}>
//                                 {(room.amenities||[]).map((a,i)=>(
//                                   <span key={i} style={{display:'inline-flex',alignItems:'center',gap:4,padding:'3px 8px',background:'#f0faf4',color:'#1a5c30',fontSize:11,fontWeight:600,borderRadius:5}}>
//                                     <Check size={9}/>{a}
//                                   </span>
//                                 ))}
//                               </div>
//                             </div>
//                             <div style={{textAlign:'right',flexShrink:0}}>
//                               {room.price !== room.discountPrice && (
//                                 <div style={{display:'flex',alignItems:'center',gap:6,justifyContent:'flex-end',marginBottom:3}}>
//                                   <span style={{fontSize:11,color:'#8da88a',textDecoration:'line-through'}}>₹{room.price?.toLocaleString()}</span>
//                                   <span style={{background:'#e6f5ec',color:'#1a5c30',fontSize:10,fontWeight:700,padding:'1px 6px',borderRadius:4}}>
//                                     Save {Math.round((1-room.discountPrice/room.price)*100)}%
//                                   </span>
//                                 </div>
//                               )}
//                               <div style={{fontFamily:'Poppins,sans-serif',fontSize:22,fontWeight:900}}>
//                                 ₹{room.discountPrice?.toLocaleString()}
//                                 <span style={{fontSize:12,fontWeight:400,color:'#8da88a'}}>/night</span>
//                               </div>
//                               {room.available > 0 && (
//                                 <p style={{fontSize:11,color:'#8da88a',marginTop:2,marginBottom:10}}>
//                                   {room.available} space{room.available!==1?'s':''} left
//                                 </p>
//                               )}
//                               <button
//                                 style={{padding:'8px 14px',borderRadius:8,border:`1.5px solid ${selectedRoom===room.id?'#1a7a4a':'#e2e8e2'}`,background:selectedRoom===room.id?'#1a7a4a':'#fff',color:selectedRoom===room.id?'#fff':'#1a2e1a',fontWeight:700,cursor:'pointer',fontSize:13,fontFamily:'Poppins,sans-serif',transition:'all .2s'}}
//                                 onClick={e=>{e.stopPropagation();setSelectedRoom(room.id===selectedRoom?null:room.id);}}>
//                                 {selectedRoom===room.id ? '✓ Selected' : 'Select'}
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Policies */}
//             {property.policies?.length > 0 && (
//               <div style={S.section}>
//                 <h2 style={S.h2}>Property Policies</h2>
//                 <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
//                   {property.policies.map((p,i)=>(
//                     <div key={i} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:13,color:'#4a6741'}}>
//                       <Check size={15} color="#1a7a4a" style={{flexShrink:0,marginTop:1}}/>{p}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Right column — sticky booking */}
//           <div style={{position:'sticky',top:80,display:'flex',flexDirection:'column',gap:16}}>
//             {/* Dates & guests */}
//             <div style={{...S.card,padding:20}}>
//               <h3 style={{fontFamily:'Poppins,sans-serif',fontWeight:800,fontSize:16,marginBottom:14}}>Plan Your Stay</h3>
//               <div style={{display:'flex',flexDirection:'column',gap:10}}>
//                 <button onClick={()=>setShowDatePicker(true)}
//                   style={{width:'100%',padding:12,border:'1.5px solid #e2e8e2',borderRadius:10,textAlign:'left',cursor:'pointer',background:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center'}}
//                   onMouseOver={e=>e.currentTarget.style.borderColor='#1a7a4a'}
//                   onMouseOut={e=>e.currentTarget.style.borderColor='#e2e8e2'}>
//                   <div>
//                     <p style={{fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:.7,color:'#8da88a',marginBottom:2}}>Dates</p>
//                     <p style={{fontWeight:700,fontSize:13,color:'#1a2e1a'}}>
//                       {checkInDate.toLocaleDateString('en-US',{month:'short',day:'numeric'})} — {checkOutDate.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}
//                     </p>
//                   </div>
//                   <Calendar size={17} color="#8da88a"/>
//                 </button>
//                 <button onClick={()=>setShowGuestsPicker(true)}
//                   style={{width:'100%',padding:12,border:'1.5px solid #e2e8e2',borderRadius:10,textAlign:'left',cursor:'pointer',background:'#fff',display:'flex',justifyContent:'space-between',alignItems:'center'}}
//                   onMouseOver={e=>e.currentTarget.style.borderColor='#1a7a4a'}
//                   onMouseOut={e=>e.currentTarget.style.borderColor='#e2e8e2'}>
//                   <div>
//                     <p style={{fontSize:9,fontWeight:700,textTransform:'uppercase',letterSpacing:.7,color:'#8da88a',marginBottom:2}}>Guests</p>
//                     <p style={{fontWeight:700,fontSize:13,color:'#1a2e1a'}}>
//                       {guests.adults} Adult{guests.adults!==1?'s':''}{guests.children>0?`, ${guests.children} Child`:''}
//                     </p>
//                   </div>
//                   <Users size={17} color="#8da88a"/>
//                 </button>
//               </div>
//             </div>

//             {/* Booking summary */}
//             <div style={{...S.card,padding:20}}>
//               <h3 style={{fontFamily:'Poppins,sans-serif',fontWeight:800,fontSize:16,marginBottom:16}}>Booking Summary</h3>
//               {selectedRoomData ? (
//                 <>
//                   <div style={{display:'flex',flexDirection:'column',gap:12}}>
//                     <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
//                       <div>
//                         <p style={{fontWeight:700,fontSize:13}}>{selectedRoomData.name}</p>
//                         <p style={{fontSize:11,color:'#8da88a'}}>{calculateNights()} night{calculateNights()!==1?'s':''} · {guests.adults} adult{guests.adults!==1?'s':''}</p>
//                       </div>
//                       <span style={{fontWeight:700,fontSize:13}}>₹{calculateTotal(selectedRoomData.discountPrice).toLocaleString()}</span>
//                     </div>
//                     <div style={{borderTop:'1px solid #e2e8e2',paddingTop:12,display:'flex',flexDirection:'column',gap:8}}>
//                       {[
//                         {label:`Stay (${calculateNights()} nights)`,val:calculateTotal(selectedRoomData.discountPrice)},
//                         {label:'Taxes & fees (12%)',val:Math.round(calculateTotal(selectedRoomData.discountPrice)*.12)},
//                         {label:'Service charge (5%)',val:Math.round(calculateTotal(selectedRoomData.discountPrice)*.05)},
//                       ].map(({label,val})=>(
//                         <div key={label} style={{display:'flex',justifyContent:'space-between',fontSize:13,color:'#4a6741'}}>
//                           <span>{label}</span><span>₹{val.toLocaleString()}</span>
//                         </div>
//                       ))}
//                     </div>
//                     <div style={{borderTop:'2px solid #e2e8e2',paddingTop:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//                       <span style={{fontWeight:800,fontFamily:'Poppins,sans-serif'}}>Total</span>
//                       <div style={{textAlign:'right'}}>
//                         <div style={{fontFamily:'Poppins,sans-serif',fontSize:26,fontWeight:900,lineHeight:1}}>
//                           ₹{Math.round(calculateTotal(selectedRoomData.discountPrice)*1.17).toLocaleString()}
//                         </div>
//                         <p style={{fontSize:10,color:'#8da88a',marginTop:2}}>All charges included</p>
//                       </div>
//                     </div>
//                   </div>
//                   <button style={{...S.greenBtn,width:'100%',justifyContent:'center',marginTop:16,padding:16,fontSize:15}}>
//                     Reserve Now <ChevronRight size={20}/>
//                   </button>
//                   <p style={{textAlign:'center',fontSize:11,color:'#8da88a',marginTop:10}}>Free cancellation available</p>
//                 </>
//               ) : (
//                 <div style={{textAlign:'center',padding:'28px 0'}}>
//                   <Info size={32} color="#e2e8e2" style={{margin:'0 auto 10px'}}/>
//                   <p style={{color:'#8da88a',fontSize:13,fontWeight:500}}>Select a space above to see pricing</p>
//                 </div>
//               )}
//             </div>

//             {/* Trust badges */}
//             <div style={{display:'flex',flexDirection:'column',gap:10}}>
//               {TRUST_BADGES.map((b,i)=>(
//                 <div key={i} style={{background:'linear-gradient(135deg,#f0faf4,#e6f5ec)',border:'1px solid #b8ddc4',borderRadius:12,padding:'12px 14px',display:'flex',alignItems:'flex-start',gap:12}}>
//                   <div style={{background:'#fff',padding:8,borderRadius:8,color:'#1a7a4a',boxShadow:'0 1px 4px rgba(0,0,0,.08)',flexShrink:0}}>{b.icon}</div>
//                   <div>
//                     <p style={{fontSize:12,fontWeight:700,color:'#0a2e18',marginBottom:2}}>{b.title}</p>
//                     <p style={{fontSize:11,color:'#3a6e4a'}}>{b.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Responsive */}
//       <style>{`
//         @media(max-width:1024px){
//           div[style*="grid-template-columns: 1fr 340px"]{grid-template-columns:1fr!important}
//         }
//         @media(max-width:768px){
//           div[style*="grid-template-columns: 2fr 1fr 1fr"]{
//             grid-template-columns:1fr 1fr!important;
//             grid-template-rows:repeat(3,120px)!important;
//           }
//           div[style*="grid-template-columns: 1fr 1fr"][style*="gap: 10px"]{
//             grid-template-columns:1fr!important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomestayVillaDetail;

























import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Star, MapPin, Wifi, Coffee, ChevronLeft, Check,
  Heart, Shield, Waves, Car,
  Dumbbell, Sparkles, Users,
  Calendar, ChevronRight, X,
  Clock, Award, Maximize2,
  Phone, Globe, Loader2, AlertCircle, Tv, Wind, Bath,
  Trees, Utensils, Dog, Flame, Camera, ChevronDown, ChevronUp,
  Train, Plane, ShoppingBag, Landmark, Pizza, Building2,
  CheckCircle2, Tag
} from 'lucide-react';

const API_BASE_URL = 'https://bmtadmin.onrender.com/api';
const IMAGE_BASE_URL = 'https://bmtadmin.onrender.com/';
const FB_IMGS = [
  'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200',
  'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
];
const ROOM_FB = 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600';

// ── STATIC DETAIL DATA ────────────────────────────────────────────────────────
const STATIC_DETAILS = {
  sv1: {
    id: 'sv1', name: 'Aranya Forest Villa', type: 'Villa', stars: 5,
    address: 'Estate Road, Madikeri, Coorg, Karnataka 571201',
    rating: 4.8, ratingText: 'Exceptional', reviews: 142,
    description: 'Nestled in the heart of Coorg\'s coffee plantations, Aranya Forest Villa is a stunning private estate offering an immersive nature retreat. Wake up to misty mountain views, take a dip in your private infinity pool, and stroll through aromatic coffee and cardamom estates.',
    phone: '+91 98765 43210', website: 'aranyavilla.com', email: 'stay@aranyavilla.com',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200',
      'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
    ],
    amenities: ['Free WiFi', 'Private Pool', 'Breakfast Included', 'Fireplace', 'Coffee Estate Tour', 'Bonfire Area', 'BBQ Grill', 'Bicycle Rental', 'Bird Watching', 'Trekking Guide', 'Free Parking', 'Spa & Wellness'],
    rooms: [
      { id: 'r1', name: 'Forest Suite', description: 'Spacious suite with private balcony overlooking coffee plantation', size: '45 sq.m', occupancy: '2 Adults', bed: 'King Bed', view: 'Forest View', amenities: ['Free WiFi', 'AC', 'Minibar', 'Private Balcony'], tags: ['Best Seller'], price: 9499, discountPrice: 7999, images: [], available: 2, features: ['Free Cancellation', 'Breakfast Included'] },
      { id: 'r2', name: 'Garden Cottage', description: 'Cozy private cottage surrounded by cardamom bushes', size: '35 sq.m', occupancy: '2 Adults', bed: 'Queen Bed', view: 'Garden View', amenities: ['Free WiFi', 'AC', 'Garden View'], tags: ['Popular'], price: 7499, discountPrice: 5999, images: [], available: 1, features: ['Free Cancellation', 'Late Checkout'] },
      { id: 'r3', name: 'Treetop Loft', description: 'Elevated wooden loft with panoramic valley views', size: '55 sq.m', occupancy: '3 Adults', bed: '1 King + 1 Single', view: 'Valley View', amenities: ['Free WiFi', 'AC', 'Telescope', 'Hammock'], tags: [], price: 12999, discountPrice: 10499, images: [], available: 1, features: ['Free Cancellation'] },
    ],
    policies: {
      checkIn: '2:00 PM onwards',
      checkOut: '11:00 AM',
      pets: 'Allowed on request',
      smoking: 'Designated areas only',
      parties: 'Not allowed',
      extraBed: '₹800/night (on request)',
    },
    location: { lat: 12.42, lng: 75.74, landmark: 'Near Raja\'s Seat Viewpoint', city: 'Coorg' },
    highlights: ['Eco-Certified Property', 'Organic Coffee Estate', 'Guided Nature Walks', 'Couple Friendly'],
    ratingBreakdown: { cleanliness: 4.6, service: 4.4, location: 4.8, value: 4.3 },
    whyGuestsLove: [
      { icon: '🏆', title: 'Top Rated', desc: 'In Top 5% of stays in Coorg' },
      { icon: '🌄', title: 'Best Views', desc: 'Panoramic mountain views' },
      { icon: '☕', title: 'Coffee Estate', desc: 'Private plantation access' },
      { icon: '🔒', title: 'Safe & Secure', desc: '24/7 caretaker on-site' },
    ],
    guestReviews: [
      { name: 'Rahul Sharma', initials: 'RS', date: 'March 2025', rating: 5, text: 'Absolutely stunning property! The rooms were immaculate, the forest views were breathtaking, and the breakfast was incredible. Will definitely return!', tags: ['Great Service', 'Clean Rooms'] },
      { name: 'Priya Mehta', initials: 'PM', date: 'February 2025', rating: 4, text: 'Loved the ambiance and the staff was very welcoming. Pool area was beautiful. Minor issue with AC but was resolved quickly.', tags: ['Great Ambiance', 'Helpful Staff'] },
      { name: 'Arjun Kapoor', initials: 'AK', date: 'January 2025', rating: 5, text: 'Perfect for our anniversary. The suite view was breathtaking and the in-room dining was world class. Highly recommended!', tags: ['Romantic', 'Amazing View'] },
      { name: 'Sneha Rao', initials: 'SR', date: 'December 2024', rating: 4, text: 'Great value for money. The estate tour was phenomenal and the bonfire area was perfect. Parking was a bit tight though.', tags: ['Value for Money', 'Great Experience'] },
    ],
    nearbyPlaces: [
      { icon: <Train size={18} />, name: 'Railway Station', dist: '500m · 6 min walk' },
      { icon: <ShoppingBag size={18} />, name: 'Shopping Mall', dist: '1.2 km · 15 min walk' },
      { icon: <Plane size={18} />, name: 'Nearest Airport', dist: '85 km · 2 hr drive' },
      { icon: <Landmark size={18} />, name: 'Raja\'s Seat', dist: '2 km · 25 min walk' },
      { icon: <Pizza size={18} />, name: 'Restaurant Street', dist: '300m · 4 min walk' },
      { icon: <Building2 size={18} />, name: 'City Hospital', dist: '5 km · 12 min drive' },
    ],
    faqs: [
      { q: 'What is the check-in and check-out time?', a: 'Check-in is from 2:00 PM onwards and check-out is by 11:00 AM.' },
      { q: 'Is there free airport pickup?', a: 'We offer paid airport pickup. Please contact us 24 hours in advance to arrange.' },
      { q: 'Is breakfast included in the room price?', a: 'Yes, complimentary breakfast is included with all room bookings.' },
      { q: 'What is the cancellation policy?', a: 'Free cancellation up to 48 hours before check-in. After that, one night charge applies.' },
      { q: 'Are pets allowed?', a: 'Pets are allowed on request with prior intimation. Additional charges may apply.' },
      { q: 'Is the pool open year-round?', a: 'Yes, the private pool is available year-round from 6 AM to 10 PM.' },
    ],
    addOns: [
      { id: 'breakfast', icon: '🍳', name: 'Breakfast Buffet', desc: 'Full spread · ₹500/day', price: 500 },
      { id: 'pickup', icon: '🚗', name: 'Airport Pickup', desc: 'Sedan · AC · ₹800', price: 800 },
    ],
  },
  sv2: {
    id: 'sv2', name: 'The Goan Treehouse', type: 'Treehouse', stars: 5,
    address: 'Banyan Tree Road, Assagao, North Goa 403507',
    rating: 4.9, ratingText: 'Exceptional', reviews: 89,
    description: 'An absolutely magical treehouse experience suspended among ancient banyan trees, just 5 minutes from the beaches of North Goa. This adults-only retreat offers unmatched privacy.',
    phone: '+91 98765 43211', website: 'goantreehouse.com', email: '',
    images: [
      'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=1200',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
    ],
    amenities: ['Free WiFi', 'Breakfast Included', 'Hammock', 'Yoga Deck', 'Outdoor Shower', 'Solar Power', 'Bicycle', 'Beach Access', 'Stargazing Deck', 'Free Parking'],
    rooms: [
      { id: 'r1', name: 'Canopy Suite', description: 'The main treehouse cabin with forest views on all sides', size: '40 sq.m', occupancy: '2 Adults', bed: 'King Bed', view: 'Forest View', amenities: ['Free WiFi', 'AC', 'Rain Shower', 'Forest View'], tags: ['Best Seller'], price: 6299, discountPrice: 5299, images: [], available: 1, features: ['Free Cancellation', 'Breakfast Included'] },
      { id: 'r2', name: 'Ground Nest', description: 'Private ground-level pod with direct garden access', size: '28 sq.m', occupancy: '2 Adults', bed: 'Queen Bed', view: 'Garden View', amenities: ['Free WiFi', 'Fan', 'Outdoor Deck'], tags: [], price: 4299, discountPrice: 3499, images: [], available: 1, features: ['Free Cancellation'] },
    ],
    policies: { checkIn: '1:00 PM', checkOut: '10:00 AM', pets: 'Not allowed', smoking: 'Not allowed', parties: 'Not allowed', extraBed: 'Not available' },
    location: { lat: 15.57, lng: 73.76, landmark: '5 min from Vagator Beach', city: 'Goa' },
    highlights: ['Adults Only', 'Solar Powered', 'Sustainable Stay', 'Beach Proximity'],
    ratingBreakdown: { cleanliness: 5.0, service: 4.8, location: 4.9, value: 4.7 },
    whyGuestsLove: [
      { icon: '🌳', title: 'Unique Stay', desc: 'Authentic treehouse experience' },
      { icon: '🏖️', title: 'Beach Nearby', desc: '5 min from Vagator Beach' },
      { icon: '☀️', title: 'Solar Powered', desc: 'Eco-friendly & sustainable' },
      { icon: '🔒', title: 'Adults Only', desc: 'Private & peaceful retreat' },
    ],
    guestReviews: [
      { name: 'Vivek Nair', initials: 'VN', date: 'March 2025', rating: 5, text: 'Most unique stay I have ever had. The treehouse is magical, absolutely loved waking up to bird sounds. Perfect romantic getaway!', tags: ['Romantic', 'Unique Experience'] },
      { name: 'Ananya Singh', initials: 'AS', date: 'February 2025', rating: 5, text: 'Worth every rupee. The hammock view is breathtaking and the hosts are incredibly warm and helpful.', tags: ['Great Host', 'Amazing View'] },
    ],
    nearbyPlaces: [
      { icon: <Train size={18} />, name: 'Thivim Station', dist: '12 km · 20 min drive' },
      { icon: <ShoppingBag size={18} />, name: 'Anjuna Market', dist: '3 km · 10 min drive' },
      { icon: <Plane size={18} />, name: 'Goa Airport', dist: '45 km · 1 hr drive' },
      { icon: <Landmark size={18} />, name: 'Vagator Beach', dist: '1 km · 5 min drive' },
      { icon: <Pizza size={18} />, name: 'Assagao Cafes', dist: '500m · 7 min walk' },
      { icon: <Building2 size={18} />, name: 'Apollo Clinic', dist: '8 km · 15 min drive' },
    ],
    faqs: [
      { q: 'What is the check-in and check-out time?', a: 'Check-in from 1:00 PM and check-out by 10:00 AM.' },
      { q: 'Is the treehouse suitable for children?', a: 'This is an adults-only property for guests aged 18 and above.' },
      { q: 'Is breakfast included?', a: 'Yes, a wholesome breakfast is served every morning.' },
      { q: 'What is the cancellation policy?', a: 'Free cancellation up to 72 hours before check-in.' },
    ],
    addOns: [
      { id: 'breakfast', icon: '🍳', name: 'Breakfast Buffet', desc: 'Full spread · ₹500/day', price: 500 },
      { id: 'pickup', icon: '🚗', name: 'Airport Pickup', desc: 'Sedan · AC · ₹800', price: 800 },
    ],
  },
  sv3: {
    id: 'sv3', name: 'Himalayan Heritage Homestay', type: 'Homestay', stars: 4,
    address: 'Old Manali Village Road, Manali, Himachal Pradesh 175131',
    rating: 4.7, ratingText: 'Excellent', reviews: 203,
    description: 'A beautifully preserved traditional Himachali home that has welcomed travellers for three generations. Your warm host family shares home-cooked meals featuring local recipes.',
    phone: '+91 94180 12345', website: '', email: '',
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
      'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
    ],
    amenities: ['Free WiFi', 'All Meals Included', 'Fireplace', 'Trekking Guide', 'Mountain View', 'Bonfire', 'Local Experience', 'Orchard Access'],
    rooms: [
      { id: 'r1', name: 'Mountain View Room', description: 'Room with panoramic views of the Beas valley', size: '22 sq.m', occupancy: '2 Adults', bed: 'Double Bed', view: 'Mountain View', amenities: ['Free WiFi', 'Heater', 'Mountain View'], tags: ['Best Seller'], price: 3799, discountPrice: 3299, images: [], available: 2, features: ['Free Cancellation', 'Breakfast Included'] },
      { id: 'r2', name: 'Orchard Room', description: 'Opens into the apple orchard with private sit-out', size: '20 sq.m', occupancy: '2 Adults', bed: '2 Single Beds', view: 'Garden View', amenities: ['Free WiFi', 'Heater', 'Garden Access'], tags: [], price: 3299, discountPrice: 2799, images: [], available: 1, features: ['Free Cancellation'] },
    ],
    policies: { checkIn: '12:00 PM', checkOut: '11:00 AM', pets: 'Not allowed', smoking: 'Not allowed', parties: 'Not allowed', extraBed: '₹500/night (on request)' },
    location: { lat: 32.27, lng: 77.17, landmark: 'Near Hadimba Temple, Old Manali', city: 'Manali' },
    highlights: ['Family Run', 'Mountain Views', 'All Meals Included', 'Cultural Experience'],
    ratingBreakdown: { cleanliness: 4.8, service: 4.7, location: 4.9, value: 4.6 },
    whyGuestsLove: [
      { icon: '🏔️', title: 'Mountain Views', desc: 'Panoramic Himalayan vistas' },
      { icon: '🍲', title: 'Home Cooked Meals', desc: 'Authentic Himachali cuisine' },
      { icon: '👨‍👩‍👧', title: 'Family Run', desc: 'Three generations of hospitality' },
      { icon: '🥾', title: 'Trekking Guide', desc: 'Hidden valley trails included' },
    ],
    guestReviews: [
      { name: 'Kavya Reddy', initials: 'KR', date: 'March 2025', rating: 5, text: 'The most authentic Manali experience. The family was incredibly warm, meals were delicious, and the mountain views are unbeatable!', tags: ['Authentic', 'Great Food'] },
      { name: 'Rohit Verma', initials: 'RV', date: 'January 2025', rating: 5, text: 'Wonderful homestay with amazing hosts. The trek guide was knowledgeable and the bonfire evenings were magical.', tags: ['Great Host', 'Amazing Trek'] },
    ],
    nearbyPlaces: [
      { icon: <Train size={18} />, name: 'Shimla Station', dist: '240 km · 7 hr drive' },
      { icon: <ShoppingBag size={18} />, name: 'Mall Road', dist: '2 km · 15 min walk' },
      { icon: <Plane size={18} />, name: 'Kullu Airport', dist: '50 km · 1.5 hr drive' },
      { icon: <Landmark size={18} />, name: 'Hadimba Temple', dist: '500m · 6 min walk' },
      { icon: <Pizza size={18} />, name: 'Old Manali Cafes', dist: '300m · 4 min walk' },
      { icon: <Building2 size={18} />, name: 'Civil Hospital', dist: '3 km · 10 min drive' },
    ],
    faqs: [
      { q: 'What is the check-in and check-out time?', a: 'Check-in from 12:00 PM and check-out by 11:00 AM.' },
      { q: 'Are all meals included?', a: 'Yes, breakfast, lunch, and dinner are all home-cooked and included.' },
      { q: 'Is there heating in winter?', a: 'Yes, all rooms have electric heaters and there is a traditional Bukhari fireplace in the common area.' },
      { q: 'What is the cancellation policy?', a: 'Free cancellation up to 48 hours before check-in.' },
    ],
    addOns: [
      { id: 'breakfast', icon: '🍳', name: 'Breakfast Buffet', desc: 'Full spread · ₹500/day', price: 500 },
      { id: 'pickup', icon: '🚗', name: 'Airport Pickup', desc: 'Sedan · AC · ₹800', price: 800 },
    ],
  },
  sv4: {
    id: 'sv4', name: 'Backwater Houseboat', type: 'Houseboat', stars: 5,
    address: 'Alappuzha Backwaters, Kerala 688001',
    rating: 4.6, ratingText: 'Excellent', reviews: 167,
    description: 'Float through the serene Kerala backwaters on this luxuriously appointed houseboat. Watch the sunset over still waters while sipping fresh coconut water.',
    phone: '+91 94470 12345', website: '', email: '',
    images: [
      'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=1200',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
    ],
    amenities: ['All Meals Included', 'AC', 'Fishing Gear', 'Sunset Cruise', 'Chef On Board', 'Traditional Music', 'Free WiFi'],
    rooms: [
      { id: 'r1', name: 'Master Cabin', description: 'Premium cabin with panoramic backwater views', size: '30 sq.m', occupancy: '2 Adults', bed: 'King Bed', view: 'River View', amenities: ['AC', 'Attached Bath', 'River View'], tags: ['Best Seller'], price: 11999, discountPrice: 9999, images: [], available: 1, features: ['Free Cancellation', 'All Meals Included'] },
    ],
    policies: { checkIn: '12:00 PM', checkOut: '10:00 AM', pets: 'Not allowed', smoking: 'Not allowed', parties: 'Not allowed', extraBed: 'Not available' },
    location: { lat: 9.49, lng: 76.33, landmark: 'Alappuzha Backwaters', city: 'Alappuzha' },
    highlights: ['Private Boat', 'Chef On Board', 'All Meals', 'Sunset Views'],
    ratingBreakdown: { cleanliness: 4.7, service: 4.8, location: 4.5, value: 4.4 },
    whyGuestsLove: [
      { icon: '⛵', title: 'Private Boat', desc: 'Exclusive houseboat experience' },
      { icon: '👨‍🍳', title: 'Chef On Board', desc: 'Fresh Kerala seafood meals' },
      { icon: '🌅', title: 'Sunset Views', desc: 'Magical backwater sunsets' },
      { icon: '🎵', title: 'Cultural Shows', desc: 'Traditional Kerala music' },
    ],
    guestReviews: [
      { name: 'Meera Pillai', initials: 'MP', date: 'March 2025', rating: 5, text: 'A dream come true! The backwater cruise at sunset was magical and the food was incredibly fresh and delicious.', tags: ['Magical Experience', 'Great Food'] },
      { name: 'Suresh Kumar', initials: 'SK', date: 'February 2025', rating: 4, text: 'Wonderful experience. The chef was outstanding and the cabin was very comfortable. Highly recommended for couples.', tags: ['Romantic', 'Great Chef'] },
    ],
    nearbyPlaces: [
      { icon: <Train size={18} />, name: 'Alappuzha Station', dist: '3 km · 10 min drive' },
      { icon: <ShoppingBag size={18} />, name: 'Alleppey Market', dist: '2 km · 8 min drive' },
      { icon: <Plane size={18} />, name: 'Kochi Airport', dist: '85 km · 2 hr drive' },
      { icon: <Landmark size={18} />, name: 'Vembanad Lake', dist: 'On site' },
      { icon: <Pizza size={18} />, name: 'Seafood Restaurants', dist: '2 km · 8 min drive' },
      { icon: <Building2 size={18} />, name: 'District Hospital', dist: '4 km · 12 min drive' },
    ],
    faqs: [
      { q: 'What is the check-in and check-out time?', a: 'Check-in from 12:00 PM and check-out by 10:00 AM.' },
      { q: 'Are all meals included?', a: 'Yes, all meals including Kerala breakfast, lunch, and dinner are included.' },
      { q: 'Is the cruise moving all the time?', a: 'The boat moves during the day through backwaters and anchors at a safe location at night.' },
      { q: 'What is the cancellation policy?', a: 'Free cancellation up to 72 hours before check-in.' },
    ],
    addOns: [
      { id: 'breakfast', icon: '🍳', name: 'Breakfast Buffet', desc: 'Full spread · ₹500/day', price: 500 },
      { id: 'pickup', icon: '🚗', name: 'Airport Pickup', desc: 'Sedan · AC · ₹800', price: 800 },
    ],
  },
  sv5: {
    id: 'sv5', name: 'Rajasthani Desert Camp', type: 'Camp', stars: 5,
    address: 'Sam Sand Dunes, Jaisalmer, Rajasthan 345001',
    rating: 4.5, ratingText: 'Excellent', reviews: 318,
    description: 'Experience the magic of the Thar Desert under a canopy of stars. Luxury tents with modern amenities set against the golden sand dunes.',
    phone: '+91 98290 12345', website: '', email: '',
    images: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200',
      'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
    ],
    amenities: ['All Meals Included', 'Camel Safari', 'Bonfire', 'Cultural Shows', 'Jeep Safari', 'Stargazing', 'AC', 'Free WiFi'],
    rooms: [
      { id: 'r1', name: 'Luxury Desert Tent', description: 'Air-cooled luxury tent with private deck facing the dunes', size: '40 sq.m', occupancy: '2 Adults', bed: 'King Bed', view: 'Desert View', amenities: ['AC', 'Attached Bath', 'Desert View'], tags: ['Best Seller'], price: 7999, discountPrice: 6999, images: [], available: 4, features: ['Free Cancellation', 'All Meals Included'] },
    ],
    policies: { checkIn: '3:00 PM', checkOut: '10:00 AM', pets: 'Not allowed', smoking: 'Designated areas only', parties: 'Not allowed', extraBed: '₹600/night (on request)' },
    location: { lat: 26.84, lng: 70.55, landmark: 'Sam Sand Dunes', city: 'Jaisalmer' },
    highlights: ['Under the Stars', 'Camel Safari Included', 'Cultural Shows', 'Bonfire Nights'],
    ratingBreakdown: { cleanliness: 4.5, service: 4.6, location: 4.8, value: 4.4 },
    whyGuestsLove: [
      { icon: '🌟', title: 'Stargazing', desc: 'Clearest skies in Rajasthan' },
      { icon: '🐪', title: 'Camel Safari', desc: 'Included in every booking' },
      { icon: '🔥', title: 'Bonfire Nights', desc: 'Folk music & cultural show' },
      { icon: '🏜️', title: 'Desert Views', desc: 'Right on Sam Sand Dunes' },
    ],
    guestReviews: [
      { name: 'Ravi Patel', initials: 'RP', date: 'March 2025', rating: 5, text: 'Unbelievable experience under the stars! The camel safari at sunset and bonfire with folk music was absolutely magical.', tags: ['Magical', 'Great Experience'] },
      { name: 'Pooja Sharma', initials: 'PS', date: 'February 2025', rating: 4, text: 'Amazing stay. The luxury tent was spacious and comfortable. Meals were delicious. Highly recommend for a unique Rajasthan experience.', tags: ['Unique', 'Great Food'] },
    ],
    nearbyPlaces: [
      { icon: <Train size={18} />, name: 'Jaisalmer Station', dist: '40 km · 45 min drive' },
      { icon: <ShoppingBag size={18} />, name: 'Jaisalmer Fort Market', dist: '42 km · 50 min drive' },
      { icon: <Plane size={18} />, name: 'Jaisalmer Airport', dist: '15 km · 20 min drive' },
      { icon: <Landmark size={18} />, name: 'Jaisalmer Fort', dist: '40 km · 45 min drive' },
      { icon: <Pizza size={18} />, name: 'Camp Dining', dist: 'On site' },
      { icon: <Building2 size={18} />, name: 'General Hospital', dist: '42 km · 50 min drive' },
    ],
    faqs: [
      { q: 'What is the check-in and check-out time?', a: 'Check-in from 3:00 PM and check-out by 10:00 AM.' },
      { q: 'Is camel safari included?', a: 'Yes, one camel safari per person is included with every booking.' },
      { q: 'Are all meals included?', a: 'Yes, breakfast, dinner, and evening snacks are included. Lunch on the day of checkout.' },
      { q: 'What is the cancellation policy?', a: 'Free cancellation up to 48 hours before check-in.' },
    ],
    addOns: [
      { id: 'breakfast', icon: '🍳', name: 'Breakfast Buffet', desc: 'Full spread · ₹500/day', price: 500 },
      { id: 'pickup', icon: '🚗', name: 'Airport Pickup', desc: 'Sedan · AC · ₹800', price: 800 },
    ],
  },
  sv6: {
    id: 'sv6', name: 'Pondicherry Heritage Villa', type: 'Villa', stars: 5,
    address: 'French Quarter, White Town, Pondicherry 605001',
    rating: 4.8, ratingText: 'Exceptional', reviews: 94,
    description: 'A lovingly restored 19th-century French Creole villa in the heart of the White Town. Mediterranean courtyard, vintage furniture, and rooftop sea views.',
    phone: '+91 94430 12345', website: '', email: '',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800',
      'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
    ],
    amenities: ['Free WiFi', 'Breakfast Included', 'Rooftop Terrace', 'Bicycle', 'Courtyard Garden', 'Sea View', 'Free Parking', 'AC'],
    rooms: [
      { id: 'r1', name: 'Heritage Suite', description: 'Period-furnished suite with courtyard view', size: '35 sq.m', occupancy: '2 Adults', bed: 'King Bed', view: 'Courtyard View', amenities: ['Free WiFi', 'AC', 'Courtyard View'], tags: ['Best Seller'], price: 8999, discountPrice: 7499, images: [], available: 2, features: ['Free Cancellation', 'Breakfast Included'] },
      { id: 'r2', name: 'Rooftop Room', description: 'Bright room with direct rooftop terrace and sea views', size: '28 sq.m', occupancy: '2 Adults', bed: 'Queen Bed', view: 'Sea View', amenities: ['Free WiFi', 'AC', 'Sea View'], tags: ['Popular'], price: 10999, discountPrice: 8999, images: [], available: 1, features: ['Free Cancellation', 'Breakfast Included'] },
    ],
    policies: { checkIn: '2:00 PM onwards', checkOut: '11:00 AM', pets: 'Allowed', smoking: 'Not allowed', parties: 'Not allowed', extraBed: '₹700/night (on request)' },
    location: { lat: 11.93, lng: 79.83, landmark: 'Near Promenade Beach', city: 'Pondicherry' },
    highlights: ['Heritage Property', 'French Quarter', 'Pet Friendly', 'Sea View Rooftop'],
    ratingBreakdown: { cleanliness: 4.9, service: 4.7, location: 4.8, value: 4.6 },
    whyGuestsLove: [
      { icon: '🏛️', title: 'Heritage Property', desc: '19th century French villa' },
      { icon: '🌊', title: 'Sea Views', desc: 'Rooftop terrace sea vistas' },
      { icon: '🐾', title: 'Pet Friendly', desc: 'Welcome your furry friends' },
      { icon: '🚲', title: 'Bicycle Rental', desc: 'Explore French Quarter easily' },
    ],
    guestReviews: [
      { name: 'Aditi Menon', initials: 'AM', date: 'March 2025', rating: 5, text: 'Absolutely gorgeous villa! The French architecture, the courtyard, and the rooftop sea view made this stay unforgettable.', tags: ['Beautiful Property', 'Sea View'] },
      { name: 'Kiran Bose', initials: 'KB', date: 'January 2025', rating: 5, text: 'Perfect location in the French Quarter. Breakfasts were wonderful and the staff was extremely helpful with local recommendations.', tags: ['Great Location', 'Helpful Staff'] },
    ],
    nearbyPlaces: [
      { icon: <Train size={18} />, name: 'Puducherry Station', dist: '2 km · 8 min drive' },
      { icon: <ShoppingBag size={18} />, name: 'Pondy Bazaar', dist: '1.5 km · 10 min walk' },
      { icon: <Plane size={18} />, name: 'Chennai Airport', dist: '150 km · 3 hr drive' },
      { icon: <Landmark size={18} />, name: 'Promenade Beach', dist: '500m · 6 min walk' },
      { icon: <Pizza size={18} />, name: 'Restaurant Row', dist: '300m · 4 min walk' },
      { icon: <Building2 size={18} />, name: 'JIPMER Hospital', dist: '5 km · 12 min drive' },
    ],
    faqs: [
      { q: 'What is the check-in and check-out time?', a: 'Check-in from 2:00 PM onwards and check-out by 11:00 AM.' },
      { q: 'Are pets allowed?', a: 'Yes, pets are welcome at this property. Please inform us in advance.' },
      { q: 'Is breakfast included?', a: 'Yes, a French-style breakfast is served every morning in the courtyard.' },
      { q: 'What is the cancellation policy?', a: 'Free cancellation up to 48 hours before check-in.' },
    ],
    addOns: [
      { id: 'breakfast', icon: '🍳', name: 'Breakfast Buffet', desc: 'Full spread · ₹500/day', price: 500 },
      { id: 'pickup', icon: '🚗', name: 'Airport Pickup', desc: 'Sedan · AC · ₹800', price: 800 },
    ],
  },
};

// ── HELPERS ───────────────────────────────────────────────────────────────────
const buildImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return IMAGE_BASE_URL + 'uploads/' + path.replace(/\\/g, '/');
};

const getRatingText = (r) => {
  if (r >= 4.8) return 'Exceptional';
  if (r >= 4.5) return 'Excellent';
  if (r >= 4.0) return 'Very Good';
  if (r >= 3.5) return 'Good';
  return 'Pleasant';
};

const amenityIconMap = (raw = '') => {
  const s = raw.toLowerCase();
  if (s.includes('wifi') || s.includes('wi-fi')) return { icon: '📶', label: 'Free WiFi' };
  if (s.includes('pool') || s.includes('swimming')) return { icon: '🏊', label: 'Swimming Pool' };
  if (s.includes('parking')) return { icon: '🅿️', label: 'Free Parking' };
  if (s.includes('breakfast')) return { icon: '☕', label: raw };
  if (s.includes('meal') || s.includes('meals')) return { icon: '🍽️', label: raw };
  if (s.includes('gym') || s.includes('fitness')) return { icon: '💪', label: 'Fitness Center' };
  if (s.includes('spa') || s.includes('wellness')) return { icon: '💆', label: 'Spa & Wellness' };
  if (s.includes('restaurant') || s.includes('dining') || s.includes('kitchen')) return { icon: '🍴', label: raw };
  if (s.includes('tv') || s.includes('television')) return { icon: '📺', label: raw };
  if (s.includes('air') || s.includes('ac')) return { icon: '❄️', label: raw };
  if (s.includes('bath') || s.includes('jacuzzi')) return { icon: '🛁', label: raw };
  if (s.includes('rooftop') || s.includes('terrace')) return { icon: '🏙️', label: raw };
  if (s.includes('bicycle')) return { icon: '🚲', label: raw };
  if (s.includes('bonfire') || s.includes('bbq') || s.includes('fire')) return { icon: '🔥', label: raw };
  if (s.includes('pet') || s.includes('dog')) return { icon: '🐾', label: raw };
  if (s.includes('camel')) return { icon: '🐪', label: raw };
  if (s.includes('yoga')) return { icon: '🧘', label: raw };
  if (s.includes('hammock')) return { icon: '🛋️', label: raw };
  if (s.includes('concierge')) return { icon: '🛎️', label: raw };
  if (s.includes('bar')) return { icon: '🍸', label: raw };
  return { icon: '✅', label: raw };
};

const buildDetailFromRaw = (h) => {
  if (h.images && Array.isArray(h.images) && h.rooms) return h;
  const raw = h._raw || h;
  const thumbImg = buildImageUrl(raw.thumbnail) || FB_IMGS[0];
  const galleryImgs = (raw.gallery || []).map(buildImageUrl).filter(Boolean);
  const hotelImgs = (h.hotelImages || []).filter(x => x && x.startsWith('http'));
  let images = [...new Set([thumbImg, ...galleryImgs, ...hotelImgs].filter(Boolean))];
  if (images.length < 5) images = [...images, ...FB_IMGS.slice(images.length, 5)];
  const amenities = (raw.amenities || h.amenities || []).filter(Boolean);
  const discountPrice = Number(raw.finalPrice) || Number(raw.pricePerNight) || Number(h.discountPrice) || 2000;
  const origPrice = Number(raw.pricePerNight) || Number(h.pricePerNight) || Math.round(discountPrice / 0.85);
  const rooms = [{
    id: 'r1', name: raw.roomType || 'Standard Room',
    description: `${raw.mealPlan ? `Meal plan: ${raw.mealPlan}. ` : ''}${raw.houseRules || 'Comfortable accommodation with great amenities.'}`,
    size: raw.bedrooms ? `${raw.bedrooms} Bedroom${raw.bedrooms > 1 ? 's' : ''}` : '30 sq.m',
    occupancy: `${raw.maxGuests || 2} Guests`, bed: `${raw.beds || 1} Bed${raw.beds > 1 ? 's' : ''}`,
    view: 'Property View', amenities: amenities.slice(0, 5), tags: ['Best Seller'],
    price: origPrice, discountPrice: discountPrice, images: [], available: 3,
    features: ['Free Cancellation', raw.mealPlan ? raw.mealPlan : 'Room Only'],
  }];
  const policies = {
    checkIn: raw.checkInTime || h.checkInTime || '2:00 PM onwards',
    checkOut: raw.checkOutTime || h.checkOutTime || '11:00 AM',
    pets: raw.petPolicy || 'Not allowed',
    smoking: 'Designated areas only',
    parties: 'Not allowed',
    extraBed: '₹800/night (on request)',
  };
  const address = [raw.address, raw.area, raw.city, raw.state].filter(Boolean).join(', ');
  return {
    id: h.id || h._id || raw._id,
    name: raw.propertyName || h.hotelName || h.name || 'Property',
    type: raw.propertyType || h.propertyType || h.hotelType || h.type || 'Homestay',
    stars: 4, address: address || h.address || 'India',
    rating: Number(raw.rating) || h.averageRating || h.rating || 4.5,
    ratingText: getRatingText(Number(raw.rating) || h.averageRating || h.rating || 4.5),
    reviews: Number(raw.reviews) || h.totalReviews || h.reviews || 0,
    description: raw.description || h.description || `${raw.propertyName || h.hotelName || 'This property'} is a wonderful ${raw.propertyType || h.propertyType || 'stay'} in ${raw.city || h.city || 'India'}.`,
    phone: raw.phone || h.phone || '', website: raw.website || h.website || '', email: raw.email || h.email || '',
    images, amenities, rooms, policies,
    location: { lat: Number(raw.mapLocation?.lat) || 0, lng: Number(raw.mapLocation?.lng) || 0, landmark: raw.address || '', city: raw.city || '' },
    highlights: [],
    ratingBreakdown: { cleanliness: 4.5, service: 4.5, location: 4.5, value: 4.3 },
    whyGuestsLove: [
      { icon: '🏆', title: 'Top Rated', desc: 'Highly rated by guests' },
      { icon: '✨', title: 'Great Amenities', desc: 'Everything you need' },
      { icon: '📍', title: 'Great Location', desc: 'Well connected area' },
      { icon: '🔒', title: 'Safe & Secure', desc: '24/7 support available' },
    ],
    guestReviews: [],
    nearbyPlaces: [
      { icon: <Train size={18} />, name: 'Railway Station', dist: '2 km · 10 min drive' },
      { icon: <Plane size={18} />, name: 'Nearest Airport', dist: '15 km · 30 min drive' },
    ],
    faqs: [
      { q: 'What is the check-in and check-out time?', a: `Check-in from ${raw.checkInTime || '2:00 PM'} and check-out by ${raw.checkOutTime || '11:00 AM'}.` },
      { q: 'What is the cancellation policy?', a: raw.cancellationPolicy || 'Please contact the property for cancellation policy.' },
    ],
    addOns: [
      { id: 'breakfast', icon: '🍳', name: 'Breakfast Buffet', desc: 'Full spread · ₹500/day', price: 500 },
      { id: 'pickup', icon: '🚗', name: 'Airport Pickup', desc: 'Sedan · AC · ₹800', price: 800 },
    ],
  };
};

// ── STYLES ────────────────────────────────────────────────────────────────────
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
.hvd-page { font-family: 'Inter', sans-serif; background: #f4f6fb; min-height: 100vh; color: #1a1a2e; }
.hvd-sticky { position: sticky; top: 0; z-index: 100; background: #fff; border-bottom: 1px solid #e8eaf0; box-shadow: 0 2px 8px rgba(0,0,0,.06); }
.hvd-sticky-inner { max-width: 1200px; margin: 0 auto; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; }
.hvd-back { display: flex; align-items: center; gap: 8px; background: none; border: none; cursor: pointer; color: #3d5a80; font-weight: 600; font-size: 14px; padding: 8px 12px; border-radius: 8px; transition: background .2s; }
.hvd-back:hover { background: #f0f4ff; }
.hvd-main { max-width: 1200px; margin: 0 auto; padding: 24px 20px; display: grid; grid-template-columns: 1fr 360px; gap: 24px; align-items: start; }
.hvd-left { display: flex; flex-direction: column; gap: 20px; }
.hvd-right { position: sticky; top: 72px; display: flex; flex-direction: column; gap: 16px; }
.hvd-card { background: #fff; border-radius: 16px; border: 1px solid #e8eaf0; box-shadow: 0 2px 12px rgba(0,0,0,.04); padding: 24px; }
.hvd-section-title { font-family: 'Poppins', sans-serif; font-size: 20px; font-weight: 800; color: #1a1a2e; margin-bottom: 18px; }
/* Header */
.hvd-prop-type { display: inline-flex; align-items: center; gap: 6px; background: #e8f4fd; color: #1565c0; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 6px; text-transform: uppercase; letter-spacing: .5px; margin-bottom: 10px; }
.hvd-prop-name { font-family: 'Poppins', sans-serif; font-size: 28px; font-weight: 900; color: #1a1a2e; margin-bottom: 10px; line-height: 1.2; }
.hvd-tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.hvd-tag { display: inline-flex; align-items: center; gap: 5px; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; }
.hvd-tag-blue { background: #e3f2fd; color: #1565c0; }
.hvd-tag-green { background: #e8f5e9; color: #2e7d32; }
.hvd-tag-orange { background: #fff3e0; color: #e65100; }
.hvd-addr { display: flex; align-items: center; gap: 6px; color: #546e7a; font-size: 13px; margin-bottom: 6px; }
.hvd-map-link { color: #1565c0; font-weight: 600; text-decoration: none; font-size: 13px; margin-left: 4px; }
.hvd-map-link:hover { text-decoration: underline; }
.hvd-rating-badge { display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #1565c0, #0d47a1); color: #fff; width: 68px; height: 68px; border-radius: 14px; flex-shrink: 0; }
.hvd-rating-num { font-family: 'Poppins', sans-serif; font-size: 24px; font-weight: 900; line-height: 1; }
.hvd-rating-text { font-size: 9px; font-weight: 700; opacity: .85; margin-top: 2px; text-transform: uppercase; letter-spacing: .3px; }
/* Gallery */
.hvd-gallery { display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 8px; height: 380px; border-radius: 16px; overflow: hidden; margin-bottom: 4px; }
.hvd-gallery-img { position: relative; overflow: hidden; cursor: pointer; }
.hvd-gallery-img:first-child { grid-column: 1; grid-row: 1/3; }
.hvd-gallery-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.hvd-gallery-img:hover img { transform: scale(1.05); }
.hvd-gallery-more { position: absolute; inset: 0; background: rgba(0,0,0,.5); display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; }
.hvd-gallery-more span:first-child { font-family: 'Poppins', sans-serif; font-size: 26px; font-weight: 900; }
.hvd-gallery-more span:last-child { font-size: 13px; font-weight: 600; }
/* Rating Breakdown */
.hvd-rating-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
.hvd-big-rating { font-family: 'Poppins', sans-serif; font-size: 52px; font-weight: 900; color: #1565c0; line-height: 1; }
.hvd-rating-excellent { font-size: 16px; font-weight: 700; color: #1a1a2e; }
.hvd-rating-reviews { font-size: 13px; color: #78909c; }
.hvd-stars { display: flex; gap: 2px; margin: 4px 0; }
.hvd-bar-row { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
.hvd-bar-label { font-size: 13px; color: #546e7a; width: 90px; }
.hvd-bar-track { flex: 1; height: 8px; background: #e8eaf0; border-radius: 4px; overflow: hidden; }
.hvd-bar-fill { height: 100%; background: linear-gradient(90deg, #1565c0, #42a5f5); border-radius: 4px; transition: width .6s ease; }
.hvd-bar-val { font-size: 13px; font-weight: 700; color: #1a1a2e; width: 30px; text-align: right; }
/* Why guests love */
.hvd-love-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.hvd-love-card { display: flex; align-items: center; gap: 12px; padding: 14px; border: 1.5px solid #e8eaf0; border-radius: 12px; }
.hvd-love-icon { font-size: 28px; }
.hvd-love-title { font-size: 14px; font-weight: 700; color: #1a1a2e; }
.hvd-love-desc { font-size: 12px; color: #78909c; margin-top: 1px; }
/* About */
.hvd-desc { font-size: 14px; color: #546e7a; line-height: 1.75; }
/* Amenities */
.hvd-am-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.hvd-am-item { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; padding: 14px 8px; border: 1.5px solid #e8eaf0; border-radius: 12px; text-align: center; font-size: 12px; font-weight: 600; color: #546e7a; }
.hvd-am-icon { font-size: 22px; }
.hvd-show-more { display: flex; align-items: center; gap: 6px; color: #1565c0; font-size: 13px; font-weight: 700; background: none; border: 1.5px solid #1565c0; border-radius: 8px; padding: 10px 20px; cursor: pointer; margin-top: 14px; transition: all .2s; }
.hvd-show-more:hover { background: #e3f2fd; }
/* Rooms */
.hvd-room-card { border: 2px solid #e8eaf0; border-radius: 14px; padding: 18px; margin-bottom: 14px; cursor: pointer; transition: all .2s; }
.hvd-room-card.selected { border-color: #1565c0; background: #f0f7ff; }
.hvd-room-card:hover { border-color: #90caf9; }
.hvd-room-inner { display: flex; gap: 16px; }
.hvd-room-img { width: 120px; height: 90px; object-fit: cover; border-radius: 10px; flex-shrink: 0; }
.hvd-room-body { flex: 1; }
.hvd-room-name { font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 800; color: #1a1a2e; margin-bottom: 3px; }
.hvd-room-sub { font-size: 12px; color: #78909c; margin-bottom: 6px; }
.hvd-room-badges { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px; }
.hvd-room-badge { font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 5px; }
.hvd-room-badge-blue { background: #1565c0; color: #fff; }
.hvd-room-badge-green { background: #2e7d32; color: #fff; }
.hvd-room-features { display: flex; gap: 10px; flex-wrap: wrap; }
.hvd-room-feature { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #2e7d32; font-weight: 600; }
.hvd-room-price-col { text-align: right; flex-shrink: 0; }
.hvd-room-orig { font-size: 12px; color: #9e9e9e; text-decoration: line-through; }
.hvd-room-price { font-family: 'Poppins', sans-serif; font-size: 22px; font-weight: 900; color: #1a1a2e; }
.hvd-room-per { font-size: 11px; color: #78909c; }
.hvd-room-avail { font-size: 11px; color: #e53935; font-weight: 600; margin-top: 4px; }
.hvd-select-btn { margin-top: 10px; padding: 9px 20px; border-radius: 8px; border: 2px solid #1565c0; font-size: 13px; font-weight: 700; cursor: pointer; transition: all .2s; }
.hvd-select-btn.selected { background: #1565c0; color: #fff; border-color: #1565c0; }
.hvd-select-btn:not(.selected) { background: #fff; color: #1565c0; }
/* Reviews */
.hvd-reviews-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.hvd-reviews-big { font-family: 'Poppins', sans-serif; font-size: 40px; font-weight: 900; color: #1565c0; }
.hvd-reviews-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.hvd-review-card { background: #f8f9fc; border-radius: 12px; padding: 16px; }
.hvd-reviewer { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.hvd-reviewer-avatar { width: 40px; height: 40px; border-radius: 50%; background: #1565c0; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 14px; font-weight: 700; flex-shrink: 0; }
.hvd-reviewer-name { font-size: 14px; font-weight: 700; color: #1a1a2e; }
.hvd-reviewer-date { font-size: 12px; color: #9e9e9e; }
.hvd-review-text { font-size: 13px; color: #546e7a; line-height: 1.6; margin-bottom: 10px; }
.hvd-review-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.hvd-review-tag { font-size: 11px; font-weight: 600; color: #1565c0; background: #e3f2fd; padding: 3px 10px; border-radius: 99px; }
/* Location */
.hvd-map-placeholder { background: linear-gradient(135deg, #e8eaf0, #dde1eb); border-radius: 12px; height: 180px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
.hvd-nearby-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.hvd-nearby-item { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border: 1.5px solid #e8eaf0; border-radius: 10px; }
.hvd-nearby-icon { color: #546e7a; flex-shrink: 0; }
.hvd-nearby-name { font-size: 13px; font-weight: 700; color: #1a1a2e; }
.hvd-nearby-dist { font-size: 11px; color: #9e9e9e; margin-top: 1px; }
/* Policies */
.hvd-policy-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.hvd-policy-item { display: flex; align-items: flex-start; gap: 12px; padding: 14px; border: 1.5px solid #e8eaf0; border-radius: 12px; }
.hvd-policy-icon { font-size: 22px; flex-shrink: 0; }
.hvd-policy-label { font-size: 11px; color: #9e9e9e; text-transform: uppercase; letter-spacing: .5px; font-weight: 600; margin-bottom: 3px; }
.hvd-policy-val { font-size: 13px; font-weight: 700; color: #1a1a2e; }
/* FAQ */
.hvd-faq-item { border: 1.5px solid #e8eaf0; border-radius: 12px; overflow: hidden; margin-bottom: 10px; }
.hvd-faq-q { display: flex; justify-content: space-between; align-items: center; padding: 16px 18px; cursor: pointer; background: #fff; }
.hvd-faq-q:hover { background: #f8f9fc; }
.hvd-faq-q-text { font-size: 14px; font-weight: 600; color: #1a1a2e; }
.hvd-faq-chevron { color: #1565c0; flex-shrink: 0; }
.hvd-faq-a { padding: 0 18px 16px; font-size: 13px; color: #546e7a; line-height: 1.7; }
/* RIGHT SIDEBAR */
.hvd-price-box { background: linear-gradient(135deg, #1565c0, #0d47a1); border-radius: 16px; padding: 20px; color: #fff; }
.hvd-orig-price { font-size: 14px; text-decoration: line-through; opacity: .7; display: inline; margin-right: 8px; }
.hvd-off-badge { background: #ff3b30; color: #fff; font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 6px; display: inline-block; }
.hvd-big-price { font-family: 'Poppins', sans-serif; font-size: 36px; font-weight: 900; line-height: 1.1; margin: 6px 0 2px; }
.hvd-price-sub { font-size: 12px; opacity: .75; }
.hvd-booking-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 16px; }
.hvd-booking-field { background: rgba(255,255,255,.15); border-radius: 10px; padding: 10px 12px; cursor: pointer; }
.hvd-booking-field-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .7px; opacity: .75; margin-bottom: 3px; }
.hvd-booking-field-val { font-size: 13px; font-weight: 700; }
.hvd-guests-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 10px; }
.hvd-guests-field { background: rgba(255,255,255,.15); border-radius: 10px; padding: 10px 12px; }
.hvd-guests-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .7px; opacity: .75; margin-bottom: 6px; }
.hvd-guests-ctrl { display: flex; align-items: center; gap: 10px; }
.hvd-guests-btn { width: 28px; height: 28px; border-radius: 50%; background: rgba(255,255,255,.2); border: none; color: #fff; font-size: 16px; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.hvd-guests-val { font-size: 15px; font-weight: 700; }
/* Addons */
.hvd-addon-box { background: #fff; border-radius: 14px; border: 1px solid #e8eaf0; padding: 16px; }
.hvd-addon-title { font-size: 12px; font-weight: 700; color: #9e9e9e; text-transform: uppercase; letter-spacing: .6px; margin-bottom: 12px; }
.hvd-addon-item { display: flex; align-items: center; gap: 10px; padding: 11px 0; border-bottom: 1px solid #f0f2f8; cursor: pointer; }
.hvd-addon-item:last-child { border-bottom: none; padding-bottom: 0; }
.hvd-addon-check { width: 20px; height: 20px; border-radius: 5px; border: 2px solid #e8eaf0; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all .18s; }
.hvd-addon-check.on { background: #1565c0; border-color: #1565c0; }
.hvd-addon-icon { font-size: 20px; }
.hvd-addon-body { flex: 1; }
.hvd-addon-name { font-size: 13px; font-weight: 700; color: #1a1a2e; }
.hvd-addon-desc { font-size: 11px; color: #9e9e9e; }
.hvd-addon-price { font-size: 13px; font-weight: 700; color: #2e7d32; flex-shrink: 0; }
/* Summary */
.hvd-summary-box { background: #fff; border-radius: 14px; border: 1px solid #e8eaf0; padding: 16px; }
.hvd-summary-row { display: flex; justify-content: space-between; font-size: 13px; color: #546e7a; margin-bottom: 8px; }
.hvd-summary-divider { border: none; border-top: 1px solid #e8eaf0; margin: 10px 0; }
.hvd-summary-total { display: flex; justify-content: space-between; align-items: center; margin-top: 8px; }
.hvd-summary-total-label { font-family: 'Poppins', sans-serif; font-size: 15px; font-weight: 800; color: #1a1a2e; }
.hvd-summary-total-val { font-family: 'Poppins', sans-serif; font-size: 22px; font-weight: 900; color: #1a1a2e; }
.hvd-book-btn { width: 100%; padding: 16px; background: linear-gradient(135deg, #1565c0, #0d47a1); color: #fff; border: none; border-radius: 12px; font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 700; cursor: pointer; margin-top: 14px; transition: all .25s; display: flex; align-items: center; justify-content: center; gap: 8px; }
.hvd-book-btn:hover { box-shadow: 0 6px 20px rgba(21,101,192,.35); transform: translateY(-1px); }
.hvd-book-trust { display: flex; justify-content: center; gap: 16px; margin-top: 10px; }
.hvd-book-trust span { display: flex; align-items: center; gap: 4px; font-size: 11px; color: #78909c; font-weight: 600; }
.hvd-help-box { background: #fff; border-radius: 14px; border: 1px solid #e8eaf0; padding: 14px 16px; display: flex; align-items: center; gap: 12px; }
.hvd-help-avatar { width: 40px; height: 40px; border-radius: 50%; background: #e8eaf0; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
.hvd-help-text { flex: 1; }
.hvd-help-title { font-size: 13px; font-weight: 700; color: #1a1a2e; }
.hvd-help-sub { font-size: 11px; color: #9e9e9e; }
.hvd-call-btn { background: #1565c0; color: #fff; border: none; border-radius: 8px; padding: 9px 16px; font-size: 13px; font-weight: 700; cursor: pointer; white-space: nowrap; }
/* Photo modal */
.hvd-photo-modal { position: fixed; inset: 0; z-index: 9999; background: #000; display: flex; flex-direction: column; }
.hvd-photo-modal-header { padding: 16px 20px; display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,.9); }
.hvd-photo-modal-header h3 { color: #fff; font-family: 'Poppins', sans-serif; font-weight: 700; }
.hvd-photo-close { background: rgba(255,255,255,.15); border: none; color: #fff; border-radius: 8px; padding: 8px; cursor: pointer; display: flex; }
.hvd-photo-grid { flex: 1; overflow-y: auto; padding: 16px; }
.hvd-photo-grid-inner { max-width: 1000px; margin: 0 auto; columns: 2 200px; gap: 12px; }
/* Wishlisted */
.hvd-wl-btn { display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid #e8eaf0; background: #fff; cursor: pointer; transition: all .2s; color: #9e9e9e; }
.hvd-wl-btn.loved { color: #e53935; border-color: #e53935; }
/* Responsive */
@media(max-width:1024px) { .hvd-main { grid-template-columns: 1fr; } .hvd-right { position: static; } }
@media(max-width:768px) { .hvd-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: repeat(3,100px); height: auto; } .hvd-gallery-img:first-child { grid-column: 1/3; grid-row: 1; } .hvd-am-grid { grid-template-columns: repeat(2,1fr); } .hvd-reviews-grid { grid-template-columns: 1fr; } .hvd-policy-grid { grid-template-columns: 1fr 1fr; } .hvd-nearby-grid { grid-template-columns: 1fr; } .hvd-love-grid { grid-template-columns: 1fr; } .hvd-room-inner { flex-direction: column; } .hvd-room-img { width: 100%; height: 160px; } }
`;

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
const HomestayVillaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlisted, setWishlisted] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [activeAddOns, setActiveAddOns] = useState({ breakfast: true, pickup: false });
  const [openFaq, setOpenFaq] = useState(null);
  const [guests, setGuests] = useState({ guests: 2, rooms: 1 });
  const [checkIn, setCheckIn] = useState(() => { const d = new Date(); d.setDate(d.getDate() + 1); return d; });
  const [checkOut, setCheckOut] = useState(() => { const d = new Date(); d.setDate(d.getDate() + 3); return d; });

  useEffect(() => {
    const id_style = 'hvd-styles-v2';
    if (!document.getElementById(id_style)) {
      const el = document.createElement('style'); el.id = id_style; el.textContent = STYLES; document.head.appendChild(el);
    }
  }, []);

  useEffect(() => {
    const load = async () => {
      setLoading(true); setError(null);
      if (STATIC_DETAILS[id]) { setProperty(STATIC_DETAILS[id]); setSelectedRoom(STATIC_DETAILS[id].rooms[0]?.id || null); setLoading(false); return; }
      const passed = location.state?.property;
      if (passed) {
        try { const d = buildDetailFromRaw(passed); setProperty(d); setSelectedRoom(d.rooms[0]?.id || null); } catch (e) { console.error(e); }
        setLoading(false); return;
      }
      try {
        const res = await fetch(`${API_BASE_URL}/homestay/admin/all`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        const arr = Array.isArray(data) ? data : (data.data || []);
        const found = arr.find(h => h._id === id || h.id === id || h.propertyId === id);
        if (found) { const d = buildDetailFromRaw(found); setProperty(d); setSelectedRoom(d.rooms[0]?.id || null); }
        else throw new Error('Property not found');
      } catch (e) { setError(e.message || 'Could not load property'); }
      finally { setLoading(false); }
    };
    load();
  }, [id]);

  const nights = Math.max(1, Math.ceil(Math.abs(checkOut - checkIn) / (1000 * 60 * 60 * 24)));
  const selectedRoomData = property?.rooms?.find(r => r.id === selectedRoom);
  const basePrice = selectedRoomData ? selectedRoomData.discountPrice * nights : 0;
  const addOnTotal = property ? (property.addOns || []).reduce((s, a) => activeAddOns[a.id] ? s + a.price * nights : s, 0) : 0;
  const taxes = Math.round(basePrice * 0.12);
  const total = basePrice + addOnTotal + taxes;
  const fmtDate = d => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });

  const galleryImages = property ? [...(property.images || [])].concat(FB_IMGS).slice(0, 5) : [];

  const typeIco = (type = '') => {
    const t = type.toLowerCase();
    if (t.includes('villa')) return '🏡'; if (t.includes('tree')) return '🌳';
    if (t.includes('farm')) return '🚜'; if (t.includes('boat')) return '⛵';
    if (t.includes('camp') || t.includes('glamp')) return '⛺'; if (t.includes('chalet')) return '⛰️';
    if (t.includes('cottage')) return '🌿'; return '🏠';
  };

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#f4f6fb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Loader2 style={{ width: 48, height: 48, color: '#1565c0', animation: 'spin 1s linear infinite', margin: '0 auto 12px' }} />
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        <p style={{ color: '#546e7a', fontFamily: 'Inter,sans-serif' }}>Loading property details…</p>
      </div>
    </div>
  );

  if (error || !property) return (
    <div style={{ minHeight: '100vh', background: '#f4f6fb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: 400, padding: 24 }}>
        <AlertCircle style={{ width: 48, height: 48, color: '#e53935', margin: '0 auto 12px' }} />
        <h2 style={{ fontFamily: 'Poppins,sans-serif', marginBottom: 8 }}>Property Not Found</h2>
        <p style={{ color: '#546e7a', marginBottom: 16 }}>{error}</p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 20px', background: '#1565c0', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>Retry</button>
          <button onClick={() => navigate(-1)} style={{ padding: '10px 20px', border: '1.5px solid #e8eaf0', borderRadius: 8, fontWeight: 700, cursor: 'pointer', background: '#fff' }}>Go Back</button>
        </div>
      </div>
    </div>
  );

  const amenitiesDisplay = showAllAmenities ? property.amenities : property.amenities.slice(0, 8);
  const disc = selectedRoomData ? Math.round((1 - selectedRoomData.discountPrice / selectedRoomData.price) * 100) : 0;

  return (
    <div className="hvd-page">
      {/* Photo Modal */}
      {showAllPhotos && (
        <div className="hvd-photo-modal">
          <div className="hvd-photo-modal-header">
            <h3>{property.name} — All Photos</h3>
            <button className="hvd-photo-close" onClick={() => setShowAllPhotos(false)}><X size={20} /></button>
          </div>
          <div className="hvd-photo-grid">
            <div className="hvd-photo-grid-inner">
              {galleryImages.map((img, i) => (
                <img key={i} src={img} alt={`${property.name} ${i + 1}`}
                  onError={e => { e.target.src = FB_IMGS[i % FB_IMGS.length]; }}
                  style={{ width: '100%', marginBottom: 12, borderRadius: 10, display: 'block' }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sticky Nav */}
      <div className="hvd-sticky">
        <div className="hvd-sticky-inner">
          <button className="hvd-back" onClick={() => navigate(-1)}>
            <ChevronLeft size={20} /> Back to results
          </button>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button className={`hvd-wl-btn ${wishlisted ? 'loved' : ''}`} onClick={() => setWishlisted(w => !w)}>
              <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
            </button>
            <button onClick={() => setShowAllPhotos(true)}
              style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', border: '1.5px solid #e8eaf0', borderRadius: 10, background: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', color: '#546e7a' }}>
              <Camera size={15} /> All Photos
            </button>
          </div>
        </div>
      </div>

      <div className="hvd-main">
        {/* ── LEFT COLUMN ── */}
        <div className="hvd-left">
          {/* Header Card */}
          <div className="hvd-card" style={{ padding: '20px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div className="hvd-prop-type">{typeIco(property.type)} {property.type}</div>
                <h1 className="hvd-prop-name">{property.name}</h1>
                <div className="hvd-tags-row">
                  {property.highlights?.slice(0, 3).map((h, i) => (
                    <span key={i} className={`hvd-tag ${i % 3 === 0 ? 'hvd-tag-blue' : i % 3 === 1 ? 'hvd-tag-green' : 'hvd-tag-orange'}`}>
                      {i === 0 ? '⭐' : i === 1 ? '✅' : '💛'} {h}
                    </span>
                  ))}
                </div>
                <div className="hvd-addr">
                  <MapPin size={14} color="#1565c0" />
                  <span>{property.address}</span>
                  <a href="#map" className="hvd-map-link">View on Map →</a>
                </div>
                {property.phone && (
                  <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
                    <a href={`tel:${property.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#1565c0', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
                      <Phone size={13} />{property.phone}
                    </a>
                    {property.website && (
                      <a href={`https://${property.website}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#1565c0', fontWeight: 600, fontSize: 13, textDecoration: 'none' }}>
                        <Globe size={13} />Website
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div className="hvd-rating-badge">
                <div className="hvd-rating-num">{Number(property.rating).toFixed(1)}</div>
                <div className="hvd-stars">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={8} fill="white" stroke="white" />)}</div>
                <div className="hvd-rating-text">{property.ratingText}</div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="hvd-gallery">
            {galleryImages.map((img, i) => (
              <div key={i} className="hvd-gallery-img" onClick={() => setShowAllPhotos(true)}>
                <img src={img} alt={`View ${i + 1}`} onError={e => { e.target.src = FB_IMGS[i % FB_IMGS.length]; }} />
                {i === 4 && (
                  <div className="hvd-gallery-more">
                    <span>+{Math.max(0, (property.images?.length || 0) - 4)}</span>
                    <span>View all</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Ratings Breakdown */}
          <div className="hvd-card">
            <div className="hvd-rating-header">
              <div>
                <div className="hvd-big-rating">{Number(property.rating).toFixed(1)}</div>
                <div className="hvd-stars">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill={i <= Math.round(property.rating) ? '#f59e0b' : '#e8eaf0'} stroke={i <= Math.round(property.rating) ? '#f59e0b' : '#e8eaf0'} />)}</div>
                <div className="hvd-rating-excellent">{property.ratingText}</div>
                <div className="hvd-rating-reviews">{property.reviews.toLocaleString()} verified reviews</div>
              </div>
              <div style={{ flex: 1, maxWidth: 340 }}>
                {Object.entries(property.ratingBreakdown || {}).map(([key, val]) => (
                  <div key={key} className="hvd-bar-row">
                    <span className="hvd-bar-label">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <div className="hvd-bar-track"><div className="hvd-bar-fill" style={{ width: `${(val / 5) * 100}%` }} /></div>
                    <span className="hvd-bar-val">{val.toFixed(1)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Guests Love */}
          <div className="hvd-card">
            <h2 className="hvd-section-title">Why guests love this property</h2>
            <div className="hvd-love-grid">
              {(property.whyGuestsLove || []).map((item, i) => (
                <div key={i} className="hvd-love-card">
                  <div className="hvd-love-icon">{item.icon}</div>
                  <div>
                    <div className="hvd-love-title">{item.title}</div>
                    <div className="hvd-love-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="hvd-card">
            <h2 className="hvd-section-title">About This Property</h2>
            <p className="hvd-desc">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="hvd-card">
            <h2 className="hvd-section-title">Amenities &amp; Facilities</h2>
            <div className="hvd-am-grid">
              {amenitiesDisplay.map((am, i) => {
                const { icon, label } = amenityIconMap(String(am));
                return (
                  <div key={i} className="hvd-am-item">
                    <span className="hvd-am-icon">{icon}</span>
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
            {property.amenities.length > 8 && (
              <button className="hvd-show-more" onClick={() => setShowAllAmenities(a => !a)}>
                {showAllAmenities ? <><ChevronUp size={15} /> Show Less</> : <><ChevronDown size={15} /> +{property.amenities.length - 8} More Amenities</>}
              </button>
            )}
          </div>

          {/* Rooms */}
          <div className="hvd-card">
            <h2 className="hvd-section-title">Select Your Room</h2>
            {property.rooms?.map(room => (
              <div key={room.id} className={`hvd-room-card ${selectedRoom === room.id ? 'selected' : ''}`}
                onClick={() => setSelectedRoom(room.id)}>
                <div className="hvd-room-inner">
                  <img src={room.images?.[0] || ROOM_FB} alt={room.name}
                    onError={e => { e.target.src = ROOM_FB; }} className="hvd-room-img" />
                  <div className="hvd-room-body">
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <span className="hvd-room-name">{room.name}</span>
                          {room.tags?.map((t, i) => <span key={i} className={`hvd-room-badge ${i === 0 ? 'hvd-room-badge-blue' : 'hvd-room-badge-green'}`}>{t}</span>)}
                        </div>
                        <div className="hvd-room-sub">{room.bed} · {room.view || 'Standard View'} · {room.amenities?.slice(0, 3).join(' · ')}</div>
                        <div className="hvd-room-features" style={{ marginBottom: 6 }}>
                          {(room.features || []).map((f, i) => (
                            <span key={i} className="hvd-room-feature"><CheckCircle2 size={12} />{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="hvd-room-price-col">
                        <div className="hvd-room-orig">₹{room.price?.toLocaleString()}</div>
                        <div className="hvd-room-price">₹{room.discountPrice?.toLocaleString()}</div>
                        <div className="hvd-room-per">/night</div>
                        {room.available <= 2 && <div className="hvd-room-avail">Only {room.available} left!</div>}
                        <button className={`hvd-select-btn ${selectedRoom === room.id ? 'selected' : ''}`}
                          onClick={e => { e.stopPropagation(); setSelectedRoom(room.id === selectedRoom ? null : room.id); }}>
                          {selectedRoom === room.id ? '✓ Selected' : 'Select'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Guest Reviews */}
          <div className="hvd-card">
            <div className="hvd-reviews-header">
              <div>
                <h2 className="hvd-section-title" style={{ marginBottom: 4 }}>Guest Reviews</h2>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
                  <div className="hvd-reviews-big">{Number(property.rating).toFixed(1)}</div>
                  <div className="hvd-stars">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill={i <= Math.round(property.rating) ? '#f59e0b' : '#e8eaf0'} stroke={i <= Math.round(property.rating) ? '#f59e0b' : '#e8eaf0'} />)}</div>
                </div>
                <div style={{ fontSize: 13, color: '#9e9e9e' }}>{property.reviews} verified reviews</div>
              </div>
            </div>
            {(property.guestReviews || []).length > 0 ? (
              <div className="hvd-reviews-grid">
                {property.guestReviews.map((rev, i) => (
                  <div key={i} className="hvd-review-card">
                    <div className="hvd-reviewer">
                      <div className="hvd-reviewer-avatar">{rev.initials}</div>
                      <div>
                        <div className="hvd-reviewer-name">{rev.name}</div>
                        <div className="hvd-reviewer-date">{rev.date}</div>
                      </div>
                      <div style={{ marginLeft: 'auto', display: 'flex', gap: 1 }}>
                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill={s <= rev.rating ? '#f59e0b' : '#e8eaf0'} stroke={s <= rev.rating ? '#f59e0b' : '#e8eaf0'} />)}
                      </div>
                    </div>
                    <p className="hvd-review-text">{rev.text}</p>
                    <div className="hvd-review-tags">{rev.tags?.map((t, ti) => <span key={ti} className="hvd-review-tag">{t}</span>)}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#9e9e9e', fontSize: 14 }}>No reviews yet for this property.</p>
            )}
          </div>

          {/* Location */}
          <div className="hvd-card" id="map">
            <h2 className="hvd-section-title">Location &amp; Nearby</h2>
            <div className="hvd-map-placeholder">
              <span style={{ fontSize: 14, color: '#9e9e9e', fontWeight: 600 }}>🗺️ Map View — {property.location?.city || 'City'}</span>
            </div>
            <div className="hvd-nearby-grid">
              {(property.nearbyPlaces || []).map((place, i) => (
                <div key={i} className="hvd-nearby-item">
                  <div className="hvd-nearby-icon">{place.icon}</div>
                  <div>
                    <div className="hvd-nearby-name">{place.name}</div>
                    <div className="hvd-nearby-dist">{place.dist}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="hvd-card">
            <h2 className="hvd-section-title">Hotel Policies</h2>
            <div className="hvd-policy-grid">
              {[
                { icon: '🕐', label: 'Check-in', val: property.policies?.checkIn },
                { icon: '🕙', label: 'Check-out', val: property.policies?.checkOut },
                { icon: '🐾', label: 'Pets', val: property.policies?.pets },
                { icon: '🚬', label: 'Smoking', val: property.policies?.smoking },
                { icon: '🎉', label: 'Parties', val: property.policies?.parties },
                { icon: '🛏️', label: 'Extra Bed', val: property.policies?.extraBed },
              ].map((p, i) => (
                <div key={i} className="hvd-policy-item">
                  <div className="hvd-policy-icon">{p.icon}</div>
                  <div>
                    <div className="hvd-policy-label">{p.label}</div>
                    <div className="hvd-policy-val">{p.val || 'Contact property'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="hvd-card">
            <h2 className="hvd-section-title">Frequently Asked Questions</h2>
            {(property.faqs || []).map((faq, i) => (
              <div key={i} className="hvd-faq-item">
                <div className="hvd-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="hvd-faq-q-text">{faq.q}</span>
                  <span className="hvd-faq-chevron">{openFaq === i ? '▲' : '▼'}</span>
                </div>
                {openFaq === i && <div className="hvd-faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="hvd-right">
          {/* Price Box */}
          <div className="hvd-price-box">
            <div>
              {selectedRoomData && disc > 0 && (
                <>
                  <span className="hvd-orig-price">₹{selectedRoomData.price?.toLocaleString()}</span>
                  <span className="hvd-off-badge">{disc}% OFF</span>
                </>
              )}
              {!selectedRoomData && (
                <>
                  <span className="hvd-orig-price">₹{property.rooms[0]?.price?.toLocaleString()}</span>
                  <span className="hvd-off-badge">{Math.round((1 - property.rooms[0]?.discountPrice / property.rooms[0]?.price) * 100)}% OFF</span>
                </>
              )}
            </div>
            <div className="hvd-big-price">
              ₹{(selectedRoomData?.discountPrice || property.rooms[0]?.discountPrice || 0).toLocaleString()}
              <span style={{ fontSize: 16, fontWeight: 400, opacity: .75 }}>/night</span>
            </div>
            <div className="hvd-price-sub">+ taxes &amp; fees</div>
            <div className="hvd-booking-grid">
              <div className="hvd-booking-field">
                <div className="hvd-booking-field-label">CHECK-IN</div>
                <div className="hvd-booking-field-val">{fmtDate(checkIn)}</div>
              </div>
              <div className="hvd-booking-field">
                <div className="hvd-booking-field-label">CHECK-OUT</div>
                <div className="hvd-booking-field-val">{fmtDate(checkOut)}</div>
              </div>
            </div>
            <div className="hvd-guests-row">
              <div className="hvd-guests-field">
                <div className="hvd-guests-label">GUESTS</div>
                <div className="hvd-guests-ctrl">
                  <button className="hvd-guests-btn" onClick={() => setGuests(g => ({ ...g, guests: Math.max(1, g.guests - 1) }))}>−</button>
                  <span className="hvd-guests-val">{guests.guests}</span>
                  <button className="hvd-guests-btn" onClick={() => setGuests(g => ({ ...g, guests: g.guests + 1 }))}>+</button>
                </div>
              </div>
              <div className="hvd-guests-field">
                <div className="hvd-guests-label">ROOMS</div>
                <div className="hvd-guests-ctrl">
                  <button className="hvd-guests-btn" onClick={() => setGuests(g => ({ ...g, rooms: Math.max(1, g.rooms - 1) }))}>−</button>
                  <span className="hvd-guests-val">{guests.rooms}</span>
                  <button className="hvd-guests-btn" onClick={() => setGuests(g => ({ ...g, rooms: g.rooms + 1 }))}>+</button>
                </div>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="hvd-addon-box">
            <div className="hvd-addon-title">ADD-ONS</div>
            {(property.addOns || []).map(addon => (
              <div key={addon.id} className="hvd-addon-item" onClick={() => setActiveAddOns(a => ({ ...a, [addon.id]: !a[addon.id] }))}>
                <div className={`hvd-addon-check ${activeAddOns[addon.id] ? 'on' : ''}`}>
                  {activeAddOns[addon.id] && <Check size={11} color="#fff" />}
                </div>
                <span className="hvd-addon-icon">{addon.icon}</span>
                <div className="hvd-addon-body">
                  <div className="hvd-addon-name">{addon.name}</div>
                  <div className="hvd-addon-desc">{addon.desc}</div>
                </div>
                <div className="hvd-addon-price">+₹{addon.price}</div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="hvd-summary-box">
            {selectedRoomData ? (
              <>
                <div className="hvd-summary-row">
                  <span>₹{selectedRoomData.discountPrice?.toLocaleString()} × {nights} night{nights > 1 ? 's' : ''} × {guests.rooms} room{guests.rooms > 1 ? 's' : ''}</span>
                  <span>₹{(selectedRoomData.discountPrice * nights * guests.rooms).toLocaleString()}</span>
                </div>
                {(property.addOns || []).filter(a => activeAddOns[a.id]).map(a => (
                  <div key={a.id} className="hvd-summary-row">
                    <span>{a.name} × {nights} day{nights > 1 ? 's' : ''}</span>
                    <span>₹{(a.price * nights).toLocaleString()}</span>
                  </div>
                ))}
                <div className="hvd-summary-row">
                  <span>Taxes &amp; Fees (12% GST)</span>
                  <span>₹{taxes.toLocaleString()}</span>
                </div>
                <hr className="hvd-summary-divider" />
                <div className="hvd-summary-total">
                  <span className="hvd-summary-total-label">Total Amount</span>
                  <span className="hvd-summary-total-val">₹{total.toLocaleString()}</span>
                </div>
                <button className="hvd-book-btn">Book Now — ₹{total.toLocaleString()}</button>
                <div className="hvd-book-trust">
                  <span>🔒 Secure Payment</span>
                  <span>✅ Instant Confirmation</span>
                  <span>🏷️ Best Price Guarantee</span>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '16px 0', color: '#9e9e9e', fontSize: 13 }}>
                Select a room above to see pricing
              </div>
            )}
          </div>

          {/* Need Help */}
          <div className="hvd-help-box">
            <div className="hvd-help-avatar">🎧</div>
            <div className="hvd-help-text">
              <div className="hvd-help-title">Need help?</div>
              <div className="hvd-help-sub">Talk to our travel experts</div>
            </div>
            {property.phone ? (
              <a href={`tel:${property.phone}`} className="hvd-call-btn" style={{ textDecoration: 'none' }}>Call Now</a>
            ) : (
              <button className="hvd-call-btn">Call Now</button>
            )}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:1024px){.hvd-main{grid-template-columns:1fr!important}}`}</style>
    </div>
  );
};

export default HomestayVillaDetail;