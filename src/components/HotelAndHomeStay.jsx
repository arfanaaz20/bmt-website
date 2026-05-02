// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Search, MapPin, Calendar, Users, Star, Filter, Heart, ChevronRight,
//   ChevronDown, X, Check,
//   Wifi, Coffee, Car, Dumbbell, Waves, ChefHat, ShoppingBag,
//   Sparkles, Shield, Award, Clock, ChevronLeft, Flame, TrendingUp, Tag, BedDouble,
//   Maximize2, Users2, Wind, Tv, Bath, Trees, Home, Key, Utensils, Dog, Baby
// } from 'lucide-react';

// const GLOBAL_CSS = `
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
// *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
// :root{
//   --green:#1a7a4a;--green-d:#155f3a;--teal:#00897b;
//   --amber:#f59e0b;--orange:#ea580c;
//   --navy:#0a2463;
//   --bg:#f4f7f4;--card:#ffffff;--border:#e2e8e2;
//   --t1:#1a2e1a;--t2:#4a6741;--t3:#8da88a;
//   --sh-card:0 2px 12px rgba(26,122,74,.08);--sh-hover:0 8px 32px rgba(26,122,74,.15);
//   --r:12px;--rl:16px;
// }
// body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--t1);-webkit-tap-highlight-color:transparent}
// .hr{min-height:100vh}

// /* HERO */
// .hero{background:linear-gradient(135deg,#0a2e18 0%,#1a5c30 45%,#2d7a4a 100%);position:relative;overflow:hidden;padding-bottom:48px}
// .hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=60') center/cover;opacity:.18}
// .hero-bar{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:18px 40px 0;max-width:1280px;margin:0 auto}
// .hero-logo{font-family:'Poppins',sans-serif;font-size:26px;font-weight:900;color:#fff;letter-spacing:-.5px}
// .hero-logo b{color:var(--amber)}
// .hero-nav{display:flex;gap:22px}
// .hero-nav a{color:rgba(255,255,255,.78);font-size:13px;font-weight:500;text-decoration:none;transition:color .2s}
// .hero-nav a:hover{color:#fff}
// .hero-content{position:relative;z-index:2;text-align:center;padding:38px 16px 30px;max-width:920px;margin:0 auto}
// .hero-eyebrow{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.22);padding:5px 14px;border-radius:99px;color:#fff;font-size:12px;font-weight:600;margin-bottom:14px;letter-spacing:.3px}
// .hero-h1{font-family:'Poppins',sans-serif;font-size:50px;font-weight:900;color:#fff;line-height:1.1;margin-bottom:10px;text-shadow:0 2px 20px rgba(0,0,0,.18)}
// .hero-h1 .acc{color:var(--amber)}
// .hero-sub{color:rgba(255,255,255,.72);font-size:15px;margin-bottom:30px}

// /* SEARCH BOX */
// .sbox{background:#fff;border-radius:var(--rl);box-shadow:0 20px 60px rgba(0,0,0,.2);overflow:hidden;max-width:920px;margin:0 auto}
// .sfields{display:grid;grid-template-columns:2fr 1.5fr 1.2fr auto;min-height:78px}
// .sfield{display:flex;align-items:center;gap:12px;padding:15px 20px;border-right:1px solid var(--border);cursor:pointer;transition:background .2s;min-height:72px}
// .sfield:hover{background:#f9fcf9}
// .sfield-ico{color:var(--green);flex-shrink:0}
// .sfield-lbl{font-size:10px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px}
// .sfield-val{font-size:15px;font-weight:700;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
// .sfield-sub{font-size:11px;color:var(--t2);margin-top:1px}
// .sfield input{border:none;outline:none;font-size:15px;font-weight:700;color:var(--t1);background:transparent;width:100%;font-family:'Inter',sans-serif}
// .sfield input::placeholder{color:#aac4aa;font-weight:500}
// .sbtn{background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff;border:none;padding:0 36px;font-size:16px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;transition:all .25s;display:flex;align-items:center;justify-content:center;gap:8px;min-height:72px}
// .sbtn:hover{box-shadow:0 4px 20px rgba(26,122,74,.4);filter:brightness(1.05)}
// .strip{position:relative;z-index:2;display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center;padding:18px 16px 0}
// .strip-lbl{color:rgba(255,255,255,.68);font-size:12px;font-weight:600;letter-spacing:.3px}
// .spill{display:flex;align-items:center;gap:5px;padding:6px 14px;border-radius:99px;border:1px solid rgba(255,255,255,.32);background:rgba(255,255,255,.1);color:#fff;font-size:12px;font-weight:600;cursor:pointer;backdrop-filter:blur(8px);transition:all .2s;min-height:36px}
// .spill:hover,.spill.on{background:rgba(255,255,255,.22);border-color:rgba(255,255,255,.55)}

// /* POPULAR */
// .pop-sec{background:#fff;padding:40px 0;border-bottom:1px solid var(--border)}
// .pop-in{max-width:1280px;margin:0 auto;padding:0 20px}
// .sec-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
// .sec-ttl{font-family:'Poppins',sans-serif;font-size:20px;font-weight:800;color:var(--t1)}
// .sec-ttl span{color:var(--green)}
// .see-all{display:flex;align-items:center;gap:4px;color:var(--green);font-size:13px;font-weight:700;background:none;border:none;cursor:pointer;white-space:nowrap}
// .see-all:hover{text-decoration:underline}
// .ctabs{display:flex;gap:8px;margin-bottom:22px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}
// .ctabs::-webkit-scrollbar{display:none}
// .ctab{padding:7px 16px;border-radius:99px;font-size:13px;font-weight:600;border:1.5px solid var(--border);background:#fff;color:var(--t2);cursor:pointer;transition:all .2s;white-space:nowrap;flex-shrink:0;min-height:36px}
// .ctab.on{background:var(--green);color:#fff;border-color:var(--green)}
// .ctab:hover:not(.on){border-color:var(--green);color:var(--green)}
// .cw{position:relative}
// .ctrack{display:flex;gap:14px;overflow-x:auto;padding-bottom:8px;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}
// .ctrack::-webkit-scrollbar{height:3px}
// .ctrack::-webkit-scrollbar-track{background:#e2e8e2;border-radius:99px}
// .ctrack::-webkit-scrollbar-thumb{background:var(--green);border-radius:99px}
// .cbtn{position:absolute;top:50%;transform:translateY(-50%);z-index:10;width:38px;height:38px;border-radius:50%;background:#fff;border:1.5px solid var(--border);box-shadow:0 2px 12px rgba(0,0,0,.12);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;color:var(--t1)}
// .cbtn:hover{background:var(--green);color:#fff;border-color:var(--green)}
// .cbtn.lft{left:-10px}.cbtn.rgt{right:-10px}
// .pcard{flex:none;width:210px;background:#fff;border-radius:var(--r);border:1px solid var(--border);overflow:hidden;cursor:pointer;transition:all .25s}
// .pcard:hover{box-shadow:var(--sh-hover);transform:translateY(-3px)}
// .pcard:active{transform:scale(.98)}
// .pcard-img{position:relative;height:140px;overflow:hidden}
// .pcard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
// .pcard:hover .pcard-img img{transform:scale(1.07)}
// .pcard-score{position:absolute;bottom:9px;left:9px;background:rgba(10,46,24,.88);backdrop-filter:blur(6px);color:#fff;font-size:11px;font-weight:700;padding:4px 9px;border-radius:6px;display:flex;align-items:center;gap:5px}
// .pcard-body{padding:11px}
// .pcard-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:4px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
// .pcard-type{display:inline-flex;align-items:center;gap:4px;background:#f0faf4;color:var(--green);font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;margin-bottom:5px;text-transform:uppercase;letter-spacing:.3px}
// .pcard-addr{font-size:11px;color:var(--t2);line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:7px}
// .pcard-price{font-size:15px;font-weight:800;color:var(--t1)}
// .pcard-price span{font-size:11px;font-weight:500;color:var(--t2)}

// /* LAYOUT */
// .main{max-width:1280px;margin:0 auto;padding:20px 16px;display:grid;grid-template-columns:260px 1fr;gap:20px}

// /* FILTERS */
// .fp{background:#fff;border-radius:var(--rl);border:1px solid var(--border);overflow:hidden;align-self:start;position:sticky;top:16px}
// .fp-hdr{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(135deg,#0a2e18,#1a5c30)}
// .fp-ttl{font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;color:#fff;display:flex;align-items:center;gap:7px}
// .fp-rst{font-size:12px;font-weight:600;color:rgba(255,255,255,.72);background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);border-radius:6px;padding:3px 10px;cursor:pointer}
// .fp-rst:hover{background:rgba(255,255,255,.22);color:#fff}
// .fs{padding:16px 18px;border-bottom:1px solid var(--border)}
// .fs:last-child{border-bottom:none}
// .fs-ttl{font-size:11px;font-weight:700;color:var(--t1);text-transform:uppercase;letter-spacing:.6px;margin-bottom:12px}
// .pi-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
// .pi-box{background:#f4f7f4;border:1.5px solid var(--border);border-radius:8px;padding:8px 11px}
// .pi-box label{display:block;font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px}
// .pi-box input{width:100%;background:none;border:none;outline:none;font-size:14px;font-weight:700;color:var(--t1);font-family:'Inter',sans-serif}
// .pslider{width:100%;accent-color:var(--green);height:4px;cursor:pointer}
// .fclist{display:flex;flex-direction:column;gap:9px}
// .fcrow{display:flex;align-items:center;gap:9px;cursor:pointer;min-height:32px}
// .cbox{width:17px;height:17px;border-radius:4px;border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .18s}
// .cbox.on{background:var(--green);border-color:var(--green)}
// .fc-lbl{font-size:13px;color:var(--t1);font-weight:500;flex:1}
// .star-row{display:flex;align-items:center;gap:7px;cursor:pointer;min-height:32px}
// .achips{display:grid;grid-template-columns:1fr 1fr;gap:7px}
// .achip{display:flex;align-items:center;gap:5px;padding:8px 9px;border-radius:8px;border:1.5px solid var(--border);font-size:11px;font-weight:600;color:var(--t2);cursor:pointer;transition:all .18s;background:#fff;min-height:36px}
// .achip.on{border-color:var(--green);color:var(--green);background:#f0faf4}
// .achip:hover:not(.on){border-color:#aac4aa}

// /* RESULTS */
// .rs{display:flex;flex-direction:column;gap:14px}
// .rh{background:#fff;border-radius:var(--r);border:1px solid var(--border);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
// .rh-ttl{font-family:'Poppins',sans-serif;font-size:16px;font-weight:800;color:var(--t1)}
// .rh-sub{font-size:12px;color:var(--t2);margin-top:2px}
// .sort-w{position:relative}
// .sort-s{appearance:none;background:#f4f7f4;border:1.5px solid var(--border);border-radius:8px;padding:8px 34px 8px 13px;font-size:13px;font-weight:600;color:var(--t1);cursor:pointer;outline:none;font-family:'Inter',sans-serif;min-height:40px}
// .sort-s:focus{border-color:var(--green)}
// .sort-arr{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--t2)}
// .mob-filter{display:none;align-items:center;gap:6px;padding:8px 14px;border:1.5px solid var(--border);border-radius:8px;background:#fff;font-size:13px;font-weight:700;cursor:pointer;min-height:40px}

// /* TRUST STRIP */
// .trust{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
// .tbadge{background:linear-gradient(135deg,#f0faf4,#e6f5ec);border:1px solid #b8ddc4;border-radius:var(--r);padding:12px 13px;display:flex;align-items:flex-start;gap:10px}
// .tbadge-ico{background:#fff;padding:7px;border-radius:8px;color:var(--green);box-shadow:0 1px 4px rgba(0,0,0,.08);flex-shrink:0}
// .tbadge-ttl{font-size:12px;font-weight:700;color:#0a2e18;margin-bottom:2px}
// .tbadge-sub{font-size:10px;color:#3a6e4a}

// /* SKELETON */
// .skel{animation:pulse 1.5s ease-in-out infinite}
// .skel-b{background:#e2e8e2;border-radius:8px}
// @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}

// /* PROPERTY CARD */
// .hcard{background:#fff;border-radius:var(--rl);border:1px solid var(--border);overflow:hidden;display:flex;transition:all .25s;flex-direction:column}
// .hcard:hover{box-shadow:var(--sh-hover);transform:translateY(-2px)}
// .hcard-main{display:flex}
// .hcard-imgw{position:relative;width:260px;flex-shrink:0;overflow:hidden;min-height:210px}
// .hcard-imgw img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
// .hcard:hover .hcard-imgw img{transform:scale(1.06)}
// .wlbtn{position:absolute;top:12px;right:12px;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.9);backdrop-filter:blur(8px);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#bbb;transition:all .2s;box-shadow:0 1px 6px rgba(0,0,0,.12)}
// .wlbtn.loved{color:#e05c5c}.wlbtn:hover{color:#e05c5c;background:#fff}
// .deal-badge{position:absolute;bottom:12px;left:12px;background:var(--green);color:#fff;font-size:10px;font-weight:700;padding:4px 10px;border-radius:6px;display:flex;align-items:center;gap:4px}
// .tag-badges{position:absolute;top:12px;left:12px;display:flex;flex-direction:column;gap:4px}
// .tag-badge{background:rgba(255,255,255,.9);font-size:10px;font-weight:700;color:var(--t1);padding:3px 8px;border-radius:5px}
// .hcard-body{flex:1;padding:16px 18px;display:flex;flex-direction:column;min-width:0}
// .hcard-top{flex:1}
// .hname{font-family:'Poppins',sans-serif;font-size:17px;font-weight:800;color:var(--t1);margin-bottom:5px;line-height:1.3;transition:color .2s}
// .hcard:hover .hname{color:var(--green)}
// .htype-pill{display:inline-flex;align-items:center;gap:5px;background:#f0faf4;color:var(--green);font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;margin-bottom:6px;text-transform:uppercase;letter-spacing:.4px}
// .hmeta{display:flex;align-items:center;gap:8px;margin-bottom:7px;flex-wrap:wrap}
// .hloc{display:flex;align-items:center;gap:4px;font-size:12px;color:var(--t2)}
// .hloc svg{color:var(--green)}
// .hdist{font-size:11px;color:var(--t3);background:#f4f7f4;padding:2px 8px;border-radius:99px}
// .hrat-row{display:flex;align-items:center;gap:8px;margin-bottom:9px;flex-wrap:wrap}
// .rpill{display:flex;align-items:center;gap:5px;background:var(--navy);color:#fff;padding:4px 10px;border-radius:6px;font-size:13px;font-weight:700}
// .rlbl{font-size:13px;font-weight:600;color:var(--t1)}
// .rrev{font-size:12px;color:var(--t2)}
// .hdesc{font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:11px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
// .hams{display:flex;flex-wrap:wrap;gap:5px}
// .am-pill{display:flex;align-items:center;gap:5px;background:#f4f7f4;border:1px solid var(--border);padding:4px 8px;border-radius:6px;font-size:11px;font-weight:600;color:var(--t2)}
// .hfooter{border-top:1px solid var(--border);margin-top:13px;padding-top:12px;display:flex;align-items:flex-end;justify-content:space-between;gap:10px;flex-wrap:wrap}
// .price-was{font-size:12px;color:var(--t3);text-decoration:line-through;margin-bottom:2px}
// .disc-badge{display:inline-block;background:#e6f5ec;color:var(--green);font-size:10px;font-weight:700;padding:1px 6px;border-radius:4px;margin-left:6px}
// .price-main{font-family:'Poppins',sans-serif;font-size:23px;font-weight:900;color:var(--t1);line-height:1}
// .price-per{font-size:11px;color:var(--t2);margin-top:2px}
// .cactions{display:flex;gap:8px;flex-shrink:0}
// .btn-d{padding:10px 14px;border-radius:8px;border:1.5px solid var(--border);font-size:13px;font-weight:700;color:var(--t1);background:#fff;cursor:pointer;transition:all .2s;min-height:42px}
// .btn-d:hover{border-color:var(--green);color:var(--green)}
// .btn-b{padding:10px 18px;border-radius:8px;border:none;background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff;font-size:13px;font-weight:700;cursor:pointer;transition:all .25s;font-family:'Poppins',sans-serif;display:flex;align-items:center;gap:5px;white-space:nowrap;min-height:42px}
// .btn-b:hover{box-shadow:0 4px 16px rgba(26,122,74,.35);transform:translateY(-1px)}
// .btn-b:active{transform:scale(.97)}

// /* ROOM / SPACE TYPES */
// .rts-wrap{border-top:1px solid var(--border);background:#f9fcf9}
// .rts-trigger{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;cursor:pointer;transition:background .18s;user-select:none;gap:10px;min-height:60px}
// .rts-trigger:hover{background:#f0f5f0}
// .rts-trigger-left{display:flex;align-items:center;gap:10px;flex:1;min-width:0}
// .rts-icon-wrap{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#e6f5ec,#d0eedd);display:flex;align-items:center;justify-content:center;flex-shrink:0}
// .rts-trigger-lbl{font-size:13px;font-weight:700;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
// .rts-trigger-sub{font-size:11px;color:var(--t2);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
// .rts-sel-badge{background:var(--green);color:#fff;font-size:10px;font-weight:700;padding:2px 9px;border-radius:99px;white-space:nowrap;flex-shrink:0}
// .rts-chevron{color:var(--t2);transition:transform .22s;flex-shrink:0}
// .rts-chevron.open{transform:rotate(180deg)}
// .rts-panel{padding:0 16px 16px;animation:rtsSlide .22s ease}
// @keyframes rtsSlide{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
// .rts-panel-hdr{font-size:11px;font-weight:700;color:var(--t2);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;display:flex;align-items:center;gap:6px}
// .rts-track{display:flex;gap:10px;overflow-x:auto;padding-bottom:6px;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}
// .rts-track::-webkit-scrollbar{height:3px}
// .rts-track::-webkit-scrollbar-track{background:#e2e8e2;border-radius:99px}
// .rts-track::-webkit-scrollbar-thumb{background:var(--green);border-radius:99px}
// .rtc{flex:none;width:190px;background:#fff;border-radius:12px;border:2px solid var(--border);overflow:hidden;cursor:pointer;transition:all .22s;position:relative;display:flex;flex-direction:column}
// .rtc:hover{border-color:#aac4aa;box-shadow:0 4px 18px rgba(0,0,0,.1);transform:translateY(-2px)}
// .rtc.rtc-sel{border-color:var(--green);box-shadow:0 4px 20px rgba(26,122,74,.2)}
// .rtc-img{position:relative;height:115px;overflow:hidden;background:#e2e8e2;flex-shrink:0}
// .rtc-img img{width:100%;height:100%;object-fit:cover;transition:transform .45s}
// .rtc:hover .rtc-img img{transform:scale(1.07)}
// .rtc-disc{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(90deg,#1a5c30,#2d7a4a);color:#fff;font-size:10px;font-weight:700;padding:3px 10px;text-align:center;letter-spacing:.3px}
// .rtc-badge{position:absolute;top:8px;left:8px;background:rgba(10,46,24,.78);backdrop-filter:blur(4px);color:#fff;font-size:9px;font-weight:700;padding:3px 8px;border-radius:5px}
// .rtc-chk{position:absolute;top:8px;right:8px;width:22px;height:22px;border-radius:50%;background:var(--green);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(26,122,74,.45);z-index:2}
// .rtc-body{padding:9px 10px 10px;flex:1;display:flex;flex-direction:column;gap:5px}
// .rtc-type{display:inline-flex;align-items:center;gap:4px;background:#f0faf4;color:var(--green);font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;text-transform:uppercase;letter-spacing:.4px;width:fit-content}
// .rtc-name{font-size:12px;font-weight:800;color:var(--t1);line-height:1.3}
// .rtc-specs{display:flex;flex-wrap:wrap;gap:4px;margin-top:1px}
// .rtc-spec{display:flex;align-items:center;gap:3px;font-size:10px;font-weight:600;color:var(--t2);background:#f4f7f4;padding:2px 6px;border-radius:5px}
// .rtc-spec.green{color:#1a5c30;background:#e6f5ec}
// .rtc-ams{display:flex;flex-wrap:wrap;gap:3px;margin-top:3px}
// .rtc-am{display:flex;align-items:center;gap:3px;font-size:9px;color:var(--t2);font-weight:500;background:#f0f4f0;padding:2px 5px;border-radius:4px}
// .rtc-am.more{color:var(--green);background:#f0faf4;font-weight:700}
// .rtc-foot{margin-top:auto;padding-top:8px;border-top:1px solid var(--border);display:flex;align-items:flex-end;justify-content:space-between;gap:5px}
// .rtc-orig{font-size:10px;color:var(--t3);text-decoration:line-through;line-height:1;margin-bottom:2px}
// .rtc-price{font-family:'Poppins',sans-serif;font-size:14px;font-weight:900;color:var(--t1);line-height:1}
// .rtc-per{font-size:9px;color:var(--t2);margin-top:2px}
// .rtc-btn{padding:7px 10px;border-radius:7px;border:1.5px solid var(--green);background:#fff;color:var(--green);font-size:11px;font-weight:700;cursor:pointer;transition:all .18s;white-space:nowrap;font-family:'Poppins',sans-serif;flex-shrink:0;min-height:34px}
// .rtc.rtc-sel .rtc-btn{background:var(--green);color:#fff}
// .rtc-btn:hover{background:var(--green);color:#fff}
// .rts-sel-bar{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(90deg,#f0faf4,#f5fcf7);border-top:1px solid #b8ddc4;padding:10px 16px;gap:10px;flex-wrap:wrap}
// .rts-sel-left{display:flex;align-items:center;gap:8px;flex:1;min-width:0}
// .rts-sel-dot{width:8px;height:8px;border-radius:50%;background:var(--green);flex-shrink:0}
// .rts-sel-name{font-size:12px;font-weight:700;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
// .rts-sel-meta{font-size:11px;color:var(--t2)}
// .rts-sel-right{display:flex;align-items:center;gap:8px;flex-shrink:0}
// .rts-sel-price{font-size:13px;color:var(--green);font-weight:800;font-family:'Poppins',sans-serif}
// .rts-change{font-size:11px;color:var(--t2);background:none;border:1px solid var(--border);padding:4px 10px;border-radius:6px;cursor:pointer;font-weight:600;transition:all .18s;min-height:32px}
// .rts-change:hover{border-color:var(--green);color:var(--green)}

// /* EMPTY */
// .empty{text-align:center;padding:60px 20px;background:#fff;border-radius:var(--rl);border:2px dashed var(--border)}
// .empty-ico{width:60px;height:60px;border-radius:50%;background:#f0faf4;color:var(--green);display:flex;align-items:center;justify-content:center;margin:0 auto 14px}
// .empty-ttl{font-family:'Poppins',sans-serif;font-size:18px;font-weight:700;margin-bottom:6px}
// .empty-sub{font-size:14px;color:var(--t2);margin-bottom:18px}
// .empty-rst{color:var(--green);font-weight:700;background:none;border:none;cursor:pointer;font-size:14px;text-decoration:underline}

// /* MODAL */
// .mov{position:fixed;inset:0;z-index:9999;display:flex;align-items:flex-end;justify-content:center;background:rgba(10,46,24,.42);backdrop-filter:blur(4px);padding:0}
// .mcard{background:#fff;border-radius:var(--rl) var(--rl) 0 0;box-shadow:0 -8px 40px rgba(0,0,0,.18);width:100%;max-width:480px;overflow:hidden;max-height:92vh;overflow-y:auto}
// .mhdr{display:flex;align-items:center;justify-content:space-between;padding:17px 20px;background:linear-gradient(135deg,#0a2e18,#1a5c30);position:sticky;top:0;z-index:2}
// .mhdr h3{font-family:'Poppins',sans-serif;font-size:16px;font-weight:700;color:#fff}
// .mclose{background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:6px;padding:7px;cursor:pointer;display:flex;min-width:36px;min-height:36px;align-items:center;justify-content:center}
// .mbody{padding:20px}
// .cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
// .cal-nbtn{background:#f4f7f4;border:1px solid var(--border);border-radius:8px;padding:8px;cursor:pointer;display:flex;color:var(--t1);transition:all .2s;min-width:40px;min-height:40px;align-items:center;justify-content:center}
// .cal-nbtn:hover{background:var(--green);color:#fff;border-color:var(--green)}
// .cal-month{font-family:'Poppins',sans-serif;font-size:15px;font-weight:700}
// .cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:14px}
// .cal-dh{text-align:center;font-size:11px;font-weight:700;color:var(--t3);padding:5px 0}
// .cal-d{height:40px;display:flex;align-items:center;justify-content:center;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:none;background:none;transition:all .15s;width:100%}
// .cal-d:hover:not(:disabled){background:#f4f7f4}
// .cal-d.past{color:#d1d5db;cursor:not-allowed}
// .cal-d.inr{background:#e6f5ec;color:var(--green);border-radius:0}
// .cal-d.sd{background:var(--green);color:#fff;border-radius:8px 0 0 8px}
// .cal-d.ed{background:var(--green);color:#fff;border-radius:0 8px 8px 0}
// .cal-d.sd.ed{border-radius:8px}
// .cal-sum{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;background:#f4f7f4;border-radius:10px;padding:13px;margin-bottom:14px}
// .cal-db label{display:block;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--t2);margin-bottom:3px}
// .cal-db span{font-size:14px;font-weight:700;color:var(--t1)}
// .cal-div{width:18px;height:2px;background:var(--border)}
// .cal-apply{width:100%;padding:14px;background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;min-height:50px}
// .cal-apply:disabled{opacity:.42;cursor:not-allowed}
// .gcrow{display:flex;align-items:center;justify-content:space-between;padding:15px 0;border-bottom:1px solid var(--border)}
// .gcrow:last-of-type{border-bottom:none}
// .gc-lbl{font-size:15px;font-weight:600}
// .gc-sub{font-size:12px;color:var(--t2);margin-top:1px}
// .gc-ctrl{display:flex;align-items:center;gap:14px}
// .gc-btn{width:40px;height:40px;border-radius:50%;border:1.5px solid var(--border);background:#fff;cursor:pointer;font-size:18px;font-weight:600;display:flex;align-items:center;justify-content:center;transition:all .18s}
// .gc-btn:hover{border-color:var(--green);color:var(--green)}
// .gc-val{font-size:16px;font-weight:700;min-width:24px;text-align:center}
// .g-apply{width:100%;margin-top:18px;padding:14px;background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;min-height:50px}

// /* MOBILE FILTER OVERLAY */
// .fp-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9997;backdrop-filter:blur(2px)}
// .fp-overlay.show{display:block}
// .fp.mob-open{display:block!important;position:fixed;bottom:0;left:0;right:0;top:auto;z-index:9998;border-radius:var(--rl) var(--rl) 0 0;max-height:88vh;overflow-y:auto;border:none;box-shadow:0 -8px 40px rgba(0,0,0,.2)}

// /* RESPONSIVE */
// @media(max-width:1024px){
//   .main{grid-template-columns:1fr;padding:16px}
//   .fp{display:none}
//   .fp.mob-open{display:block}
//   .mob-filter{display:flex!important}
//   .trust{grid-template-columns:repeat(3,1fr)}
// }
// @media(max-width:768px){
//   .hero-bar{padding:14px 16px 0}
//   .hero-nav{display:none}
//   .hero-h1{font-size:30px}
//   .hero-sub{font-size:14px}
//   .hero-content{padding:28px 16px 24px}
//   .sbox{border-radius:12px;margin:0 4px}
//   .sfields{grid-template-columns:1fr}
//   .sfield{border-right:none;border-bottom:1px solid var(--border);min-height:64px}
//   .sfield:last-of-type{border-bottom:none}
//   .sbtn{border-radius:0 0 12px 12px;padding:16px;min-height:56px;font-size:15px}
//   .strip{gap:8px;padding:14px 12px 0}
//   .hcard-main{flex-direction:column}
//   .hcard-imgw{width:100%;height:200px;min-height:200px}
//   .hcard-body{padding:14px}
//   .hname{font-size:16px}
//   .hfooter{flex-direction:column;align-items:stretch}
//   .cactions{justify-content:stretch}
//   .btn-d{flex:1;text-align:center;padding:12px}
//   .btn-b{flex:2;justify-content:center;padding:12px}
//   .trust{grid-template-columns:1fr}
//   .rh{padding:12px 14px}
//   .main{padding:12px}
//   .rs{gap:12px}
//   .pcard{width:180px}
//   .cbtn{display:none}
//   .pop-in{padding:0 16px}
// }
// @media(max-width:480px){
//   .hero-h1{font-size:26px}
//   .hero-sub{font-size:13px;margin-bottom:20px}
//   .sfield{min-height:58px;padding:12px 14px}
//   .trust{gap:8px}
//   .hname{font-size:15px}
//   .price-main{font-size:20px}
//   .rtc{width:170px}
//   .pcard{width:165px}
//   .ctab{font-size:12px;padding:6px 13px}
//   .strip-lbl{display:none}
// }
// `;

// // ── STATIC DATA ──────────────────────────────────────────────────────────────

// const SPACE_TYPES_DATA = [
//   {id:'entire-villa',type:'Villa',emoji:'🏡',name:'Entire Villa',image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&q=80',size:'250 sq.m',guests:8,originalPrice:18000,price:14999,discount:17,amenities:['Private Pool','BBQ','Full Kitchen','Free WiFi'],highlight:'Mountain View',badge:'Most Popular'},
//   {id:'garden-cottage',type:'Cottage',emoji:'🌿',name:'Garden Cottage',image:'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=600&q=80',size:'60 sq.m',guests:2,originalPrice:5500,price:4299,discount:22,amenities:['Garden Access','Breakfast','Free WiFi','AC'],highlight:'Garden View',badge:null},
//   {id:'treehouse',type:'Treehouse',emoji:'🌳',name:'Treehouse Suite',image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=600&q=80',size:'45 sq.m',guests:2,originalPrice:8000,price:6499,discount:19,amenities:['Forest View','Hammock','Free WiFi','Breakfast'],highlight:'Forest View',badge:'🌟 Unique Stay'},
//   {id:'farmhouse-suite',type:'Farmhouse',emoji:'🚜',name:'Farmhouse Suite',image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&q=80',size:'90 sq.m',guests:4,originalPrice:11000,price:8999,discount:18,amenities:['Farm Tour','Organic Meals','Free WiFi','Bonfire'],highlight:'Countryside',badge:'Top Pick'},
//   {id:'beach-villa',type:'Villa',emoji:'🏖️',name:'Beachfront Villa',image:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80',size:'180 sq.m',guests:6,originalPrice:28000,price:22999,discount:18,amenities:['Private Beach','Infinity Pool','Breakfast','Butler'],highlight:'Sea View',badge:null},
//   {id:'mountain-chalet',type:'Chalet',emoji:'⛰️',name:'Mountain Chalet',image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80',size:'120 sq.m',guests:5,originalPrice:16000,price:12999,discount:19,amenities:['Fireplace','Trekking Guide','Free WiFi','Meals'],highlight:'Mountain View',badge:'🏔️ Adventure'},
// ];

// const STATIC_PROPERTIES = [
//   {
//     id:'sv1', hotelName:'Aranya Forest Villa', propertyType:'Villa', hotelType:'Villa',
//     city:'Coorg', area:'Madikeri', state:'Karnataka', landmark:'Near Raja\'s Seat',
//     description:'Nestled in the heart of Coorg\'s coffee plantations, this stunning villa offers an immersive nature retreat with a private infinity pool overlooking misty hills.',
//     pricePerNight:12000, discountPrice:9499, averageRating:4.8, totalReviews:142,
//     amenities:['Free WiFi','Private Pool','Breakfast','Fireplace'],
//     propertyHighlights:['Eco-Certified','Coffee Estate'],
//     hotelImages:['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80'],
//     featured:true, checkInTime:'2:00 PM', checkOutTime:'11:00 AM', petPolicy:'Allowed',
//   },
//   {
//     id:'sv2', hotelName:'The Goan Treehouse', propertyType:'Treehouse', hotelType:'Treehouse',
//     city:'Goa', area:'Assagao', state:'Goa', landmark:'Near Vagator Beach',
//     description:'A magical treehouse experience just minutes from the beach. Suspended among banyan trees with panoramic views of the coconut grove below.',
//     pricePerNight:7800, discountPrice:6299, averageRating:4.9, totalReviews:89,
//     amenities:['Free WiFi','Breakfast','Hammock','Yoga Deck'],
//     propertyHighlights:['Adults Only','Unique Stay'],
//     hotelImages:['https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800&q=80'],
//     featured:false, checkInTime:'1:00 PM', checkOutTime:'10:00 AM', petPolicy:'Not Allowed',
//   },
//   {
//     id:'sv3', hotelName:'Himalayan Heritage Homestay', propertyType:'Homestay', hotelType:'Homestay',
//     city:'Manali', area:'Old Manali', state:'Himachal Pradesh', landmark:'Near Solang Valley',
//     description:'A traditional Himachali home converted into a warm homestay. Wake up to snow-capped mountain views and enjoy home-cooked meals with the host family.',
//     pricePerNight:4500, discountPrice:3799, averageRating:4.7, totalReviews:203,
//     amenities:['Free WiFi','Meals Included','Fireplace','Trekking Guide'],
//     propertyHighlights:['Family Run','Mountain View'],
//     hotelImages:['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'],
//     featured:true, checkInTime:'12:00 PM', checkOutTime:'11:00 AM', petPolicy:'Not Allowed',
//   },
//   {
//     id:'sv4', hotelName:'Backwater Houseboat', propertyType:'Houseboat', hotelType:'Houseboat',
//     city:'Alleppey', area:'Alappuzha', state:'Kerala', landmark:'Kerala Backwaters',
//     description:'Float through the serene Kerala backwaters on this luxuriously appointed houseboat. Watch the sunset over still waters while sipping fresh coconut water.',
//     pricePerNight:15000, discountPrice:11999, averageRating:4.6, totalReviews:167,
//     amenities:['All Meals','AC','Fishing','Sunset Cruise'],
//     propertyHighlights:['Private Boat','Chef On Board'],
//     hotelImages:['https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=800&q=80'],
//     featured:false, checkInTime:'12:00 PM', checkOutTime:'10:00 AM', petPolicy:'Not Allowed',
//   },
//   {
//     id:'sv5', hotelName:'Rajasthani Desert Camp', propertyType:'Glamping', hotelType:'Camp',
//     city:'Jaisalmer', area:'Sam Sand Dunes', state:'Rajasthan', landmark:'Thar Desert',
//     description:'Experience the magic of the Thar Desert under a canopy of stars. Luxury tents with modern amenities set against the golden sand dunes.',
//     pricePerNight:9500, discountPrice:7999, averageRating:4.5, totalReviews:318,
//     amenities:['Meals Included','Camel Safari','Bonfire','Cultural Shows'],
//     propertyHighlights:['Under the Stars','Camel Safari'],
//     hotelImages:['https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80'],
//     featured:true, checkInTime:'3:00 PM', checkOutTime:'10:00 AM', petPolicy:'Not Allowed',
//   },
//   {
//     id:'sv6', hotelName:'Pondicherry Heritage Villa', propertyType:'Villa', hotelType:'Villa',
//     city:'Pondicherry', area:'French Quarter', state:'Pondicherry', landmark:'Promenade Beach',
//     description:'A lovingly restored 19th-century French Creole villa in the heart of the White Town. Mediterranean courtyard, vintage furniture, and rooftop sea views.',
//     pricePerNight:11000, discountPrice:8999, averageRating:4.8, totalReviews:94,
//     amenities:['Free WiFi','Breakfast','Rooftop Terrace','Bicycle'],
//     propertyHighlights:['Heritage Property','French Quarter'],
//     hotelImages:['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80'],
//     featured:false, checkInTime:'2:00 PM', checkOutTime:'11:00 AM', petPolicy:'Allowed',
//   },
// ];

// const POPULAR_CITIES = ['Goa','Coorg','Manali','Kerala','Rajasthan','Himalayas'];
// const POP = {
//   'Goa':[
//     {id:'pg1',name:'Casa de Palmas',type:'Villa',stars:5,rating:9.2,reviews:142,address:'Assagao, North Goa',price:14500,image:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80'},
//     {id:'pg2',name:'Jungle Treehouse Goa',type:'Treehouse',stars:5,rating:9.0,reviews:87,address:'Vagator, North Goa',price:8200,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
//     {id:'pg3',name:'Arambol Beachfront',type:'Homestay',stars:4,rating:8.6,reviews:203,address:'Arambol Beach, North Goa',price:5400,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
//     {id:'pg4',name:'Palolem Sea Villa',type:'Villa',stars:5,rating:8.8,reviews:156,address:'Palolem Beach, South Goa',price:12800,image:'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=400&q=80'},
//   ],
//   'Coorg':[
//     {id:'pc1',name:'Kaveri River Cottage',type:'Cottage',stars:4,rating:9.1,reviews:178,address:'Kushalnagar, Coorg',price:6800,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
//     {id:'pc2',name:'Coffee Estate Villa',type:'Villa',stars:5,rating:9.3,reviews:112,address:'Madikeri, Coorg',price:11200,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
//     {id:'pc3',name:'Misty Hills Homestay',type:'Homestay',stars:4,rating:8.7,reviews:234,address:'Virajpet, Coorg',price:4200,image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80'},
//     {id:'pc4',name:'Rainforest Retreat',type:'Treehouse',stars:5,rating:9.0,reviews:98,address:'Somwarpet, Coorg',price:9500,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
//   ],
//   'Manali':[
//     {id:'pm1',name:'Alpine Wood Chalet',type:'Chalet',stars:4,rating:8.9,reviews:267,address:'Old Manali Village',price:7500,image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80'},
//     {id:'pm2',name:'Riverside Homestay',type:'Homestay',stars:4,rating:9.1,reviews:189,address:'Naggar, Kullu',price:3800,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
//     {id:'pm3',name:'Snow View Cottage',type:'Cottage',stars:4,rating:8.8,reviews:143,address:'Solang Valley, Manali',price:5600,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
//     {id:'pm4',name:'Himalayan Glamping',type:'Glamping',stars:5,rating:8.6,reviews:76,address:'Hampta Pass Meadow',price:8900,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
//   ],
//   'Kerala':[
//     {id:'pk1',name:'Backwater Houseboat',type:'Houseboat',stars:5,rating:9.4,reviews:312,address:'Alappuzha Backwaters',price:13500,image:'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=400&q=80'},
//     {id:'pk2',name:'Munnar Tea Estate',type:'Homestay',stars:4,rating:9.0,reviews:198,address:'Munnar, Idukki District',price:5800,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
//     {id:'pk3',name:'Wayanad Treehouse',type:'Treehouse',stars:5,rating:9.2,reviews:156,address:'Kalpetta, Wayanad',price:10200,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
//     {id:'pk4',name:'Thekkady Spice Villa',type:'Villa',stars:4,rating:8.8,reviews:224,address:'Kumily, Thekkady',price:9400,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
//   ],
//   'Rajasthan':[
//     {id:'pr1',name:'Desert Haveli Camp',type:'Glamping',stars:5,rating:9.1,reviews:289,address:'Sam Dunes, Jaisalmer',price:8800,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
//     {id:'pr2',name:'Udaipur Lake Haveli',type:'Homestay',stars:5,rating:9.3,reviews:176,address:'Old City, Udaipur',price:7600,image:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80'},
//     {id:'pr3',name:'Pushkar Organic Farm',type:'Farmhouse',stars:4,rating:8.7,reviews:134,address:'Pushkar, Ajmer',price:4900,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
//     {id:'pr4',name:'Palace Courtyard Villa',type:'Villa',stars:5,rating:9.0,reviews:98,address:'Civil Lines, Jodhpur',price:15800,image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80'},
//   ],
//   'Himalayas':[
//     {id:'ph1',name:'Rishikesh Ganga Cottage',type:'Cottage',stars:4,rating:8.9,reviews:201,address:'Laxman Jhula, Rishikesh',price:4800,image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80'},
//     {id:'ph2',name:'Uttarkashi Mountain Lodge',type:'Homestay',stars:4,rating:8.6,reviews:143,address:'Uttarkashi, Uttarakhand',price:3500,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
//     {id:'ph3',name:'Chopta Eco Camp',type:'Glamping',stars:4,rating:9.0,reviews:89,address:'Tungnath Meadow, Chopta',price:6200,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
//     {id:'ph4',name:'Nainital Lake View',type:'Cottage',stars:5,rating:9.2,reviews:267,address:'Mall Road, Nainital',price:9100,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
//   ],
// };

// const API_BASE_URL = 'https://bmtadmin.onrender.com/api';
// const IMG_BASE = 'https://bmtadmin.onrender.com/';

// const AMENITIES_OPTIONS = [
//   {id:'wifi',label:'Free WiFi',Icon:Wifi},
//   {id:'breakfast',label:'Breakfast',Icon:Coffee},
//   {id:'parking',label:'Parking',Icon:Car},
//   {id:'pool',label:'Pool',Icon:Waves},
//   {id:'gym',label:'Gym',Icon:Dumbbell},
//   {id:'spa',label:'Spa',Icon:Sparkles},
//   {id:'restaurant',label:'Kitchen',Icon:Utensils},
//   {id:'pets',label:'Pet Friendly',Icon:Dog},
// ];
// const TRUST = [
//   {Icon:Shield,title:'100% Verified Stays',desc:'Every property personally inspected'},
//   {Icon:Award,title:'Genuine Guest Reviews',desc:'Only from real travellers like you'},
//   {Icon:Clock,title:'24/7 Host Support',desc:'We are here whenever you need us'},
// ];

// // ── HELPERS ──────────────────────────────────────────────────────────────────

// const buildImg = (path) => {
//   if (!path) return null;
//   if (path.startsWith('http')) return path;
//   return IMG_BASE + path.replace(/\\/g, '/');
// };
// const FB = 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80';

// // const mapProperty = (h, idx) => {

// //   const rawImgs = [...(h.hotelImages||[]),...(h.roomImages||[])].map(buildImg).filter(Boolean);
// //   const images = rawImgs.length > 0 ? rawImgs : [FB];
// //   const price = h.discountPrice || h.pricePerNight || 5000;
// //   const orig  = h.pricePerNight || Math.round(price / 0.85);
// //   return {
// //     id: h._id || h.id,
// //     hotelName: h.hotelName || h.name || 'Property',
// //     propertyType: h.hotelType || h.propertyType || 'homestay',
// //     city: h.city || '',
// //     area: h.area || '',
// //     state: h.state || '',
// //     landmark: h.landmark || '',
// //     description: h.description || '',
// //     pricePerNight: orig,
// //     discountPrice: price,
// //     averageRating: h.averageRating || 4.5,
// //     totalReviews: h.totalReviews || 0,
// //     amenities: h.amenities || [],
// //     propertyHighlights: h.propertyHighlights || [],
// //     hotelImages: images,
// //     featured: h.featured || false,
// //     petPolicy: h.petPolicy || '',
// //     checkInTime: h.checkInTime || '2:00 PM',
// //     checkOutTime: h.checkOutTime || '11:00 AM',
// //   };
// // };




// const mapProperty = (h) => {
//   return {
//     id: h._id,

//     name: h.propertyName || "Property",
//     type: h.propertyType || "Homestay",

//     stars: 4,

//     address: `${h.address || ""}, ${h.area || ""}, ${h.city || ""}, ${h.state || ""}`,

//     rating: 4.5,
//     ratingText: "Excellent",
//     reviews: 0,

//     description: h.description || `${h.propertyName} is a great stay option`,

//     phone: h.phone || "",
//     email: h.email || "",

//     images: [
//       buildImageUrl(h.thumbnail) || FB[0]
//     ],

//     amenities: h.amenities || [],

//     rooms: [
//       {
//         id: "r1",
//         name: h.roomType || "Room",
//         price: Number(h.pricePerNight) || 2000,
//         discountPrice: Number(h.pricePerNight) || 2000,
//         images: [],
//         available: 2,
//       }
//     ],

//     policies: [
//       `Check-in: ${h.checkInTime || "2:00 PM"}`,
//       `Check-out: ${h.checkOutTime || "11:00 AM"}`
//     ],

//     location: {
//       lat: Number(h.mapLocation?.lat) || 0,
//       lng: Number(h.mapLocation?.lng) || 0,
//     },

//     highlights: [],
//   };
// };

// // ── SUB-COMPONENTS ────────────────────────────────────────────────────────────

// const SpaceTypesSection = ({ propertyId }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedId, setSelectedId] = useState(null);
//   const selectedSpace = SPACE_TYPES_DATA.find(r => r.id === selectedId);
//   const amIcon = (am) => {
//     const l = am.toLowerCase();
//     if (l.includes('wifi')) return <Wifi size={9}/>;
//     if (l.includes('breakfast')||l.includes('meal')) return <Coffee size={9}/>;
//     if (l.includes('pool')) return <Waves size={9}/>;
//     if (l.includes('spa')) return <Sparkles size={9}/>;
//     if (l.includes('kitchen')) return <Utensils size={9}/>;
//     return null;
//   };
//   const handleSelect = (id) => { setSelectedId(p => p === id ? null : id); setIsOpen(false); };
//   return (
//     <div className="rts-wrap">
//       <div className="rts-trigger" onClick={() => setIsOpen(o => !o)}>
//         <div className="rts-trigger-left">
//           <div className="rts-icon-wrap"><Home size={16} color="var(--green)"/></div>
//           <div style={{minWidth:0}}>
//             <div className="rts-trigger-lbl">{selectedSpace ? selectedSpace.name : 'Choose Space Type'}</div>
//             <div className="rts-trigger-sub">
//               {selectedSpace
//                 ? `${selectedSpace.size} · ${selectedSpace.highlight} · ₹${selectedSpace.price.toLocaleString()}/night`
//                 : `${SPACE_TYPES_DATA.length} space types available — tap to explore`}
//             </div>
//           </div>
//           {selectedSpace && <span className="rts-sel-badge">✓ Selected</span>}
//         </div>
//         <ChevronDown size={16} className={`rts-chevron ${isOpen ? 'open' : ''}`}/>
//       </div>
//       {isOpen && (
//         <div className="rts-panel">
//           <div className="rts-panel-hdr"><Home size={11}/> Select a Space</div>
//           <div className="rts-track">
//             {SPACE_TYPES_DATA.map(space => {
//               const isSel = selectedId === space.id;
//               return (
//                 <div key={space.id} className={`rtc ${isSel ? 'rtc-sel' : ''}`} onClick={() => handleSelect(space.id)}>
//                   <div className="rtc-img">
//                     <img src={space.image} alt={space.name} onError={e=>{e.target.src=FB;}}/>
//                     {space.discount > 0 && <div className="rtc-disc">{space.discount}% OFF</div>}
//                     {space.badge && <div className="rtc-badge">{space.badge}</div>}
//                     {isSel && <div className="rtc-chk"><Check size={12} color="#fff"/></div>}
//                   </div>
//                   <div className="rtc-body">
//                     <div className="rtc-type">{space.emoji} {space.type}</div>
//                     <div className="rtc-name">{space.name}</div>
//                     <div className="rtc-specs">
//                       <div className="rtc-spec"><Maximize2 size={9}/>{space.size}</div>
//                       <div className="rtc-spec"><Users2 size={9}/>{space.guests} Guests</div>
//                       <div className="rtc-spec green"><Trees size={9}/>{space.highlight}</div>
//                     </div>
//                     <div className="rtc-ams">
//                       {space.amenities.slice(0,4).map((am,i) => (
//                         <div key={i} className="rtc-am">{amIcon(am)}{am}</div>
//                       ))}
//                       {space.amenities.length > 4 && <div className="rtc-am more">+{space.amenities.length-4}</div>}
//                     </div>
//                     <div className="rtc-foot">
//                       <div>
//                         <div className="rtc-orig">₹{space.originalPrice.toLocaleString()}</div>
//                         <div className="rtc-price">₹{space.price.toLocaleString()}</div>
//                         <div className="rtc-per">per night · incl. taxes</div>
//                       </div>
//                       <button className="rtc-btn" onClick={e=>{e.stopPropagation();handleSelect(space.id);}}>
//                         {isSel ? '✓ Selected' : 'Select'}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {selectedSpace && !isOpen && (
//         <div className="rts-sel-bar">
//           <div className="rts-sel-left">
//             <div className="rts-sel-dot"/>
//             <div>
//               <div className="rts-sel-name">{selectedSpace.name}</div>
//               <div className="rts-sel-meta">{selectedSpace.size} · {selectedSpace.highlight} · {selectedSpace.guests} Guests</div>
//             </div>
//           </div>
//           <div className="rts-sel-right">
//             <span className="rts-sel-price">₹{selectedSpace.price.toLocaleString()}/night</span>
//             <button className="rts-change" onClick={e=>{e.stopPropagation();setSelectedId(null);setIsOpen(true);}}>Change</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const DateModal = ({isOpen, onClose, onSelect, checkIn, checkOut}) => {
//   const [ss, setSs] = useState(checkIn), [se, setSe] = useState(checkOut);
//   const [cm, setCm] = useState(new Date().getMonth()), [cy, setCy] = useState(new Date().getFullYear());
//   const MN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//   const days = () => {
//     const a = []; const tot = new Date(cy,cm+1,0).getDate(); const fst = new Date(cy,cm,1).getDay();
//     for (let i=0;i<fst;i++) a.push(null);
//     for (let d=1;d<=tot;d++) a.push(new Date(cy,cm,d));
//     return a;
//   };
//   const fmt = d => d ? d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}) : '—';
//   const click = d => { if (!ss||(ss&&se)){setSs(d);setSe(null);}else{if(d<ss){setSe(ss);setSs(d);}else setSe(d);} };
//   const pM = () => { if(cm===0){setCm(11);setCy(y=>y-1);}else setCm(m=>m-1); };
//   const nM = () => { if(cm===11){setCm(0);setCy(y=>y+1);}else setCm(m=>m+1); };
//   if (!isOpen) return null;
//   return (
//     <div className="mov" onClick={onClose}>
//       <div className="mcard" onClick={e=>e.stopPropagation()}>
//         <div className="mhdr"><h3>Select Check-in & Check-out</h3><button className="mclose" onClick={onClose}><X size={17}/></button></div>
//         <div className="mbody">
//           <div className="cal-nav">
//             <button className="cal-nbtn" onClick={pM}><ChevronLeft size={17}/></button>
//             <span className="cal-month">{MN[cm]} {cy}</span>
//             <button className="cal-nbtn" onClick={nM}><ChevronRight size={17}/></button>
//           </div>
//           <div className="cal-grid">
//             {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d=><div key={d} className="cal-dh">{d}</div>)}
//             {days().map((date,i)=>{
//               if(!date) return <div key={`e${i}`}/>;
//               const past=date<new Date(new Date().setHours(0,0,0,0));
//               const isS=ss&&date.getTime()===ss.getTime();const isE=se&&date.getTime()===se.getTime();const inR=ss&&se&&date>ss&&date<se;
//               return <button key={date.toISOString()} disabled={past} onClick={()=>!past&&click(date)}
//                 className={`cal-d ${past?'past':''} ${inR?'inr':''} ${isS?'sd':''} ${isE?'ed':''}`}>{date.getDate()}</button>;
//             })}
//           </div>
//           <div className="cal-sum">
//             <div className="cal-db"><label>Check-in</label><span>{fmt(ss)}</span></div>
//             <div className="cal-div"/>
//             <div className="cal-db" style={{textAlign:'right'}}><label>Check-out</label><span>{fmt(se)}</span></div>
//           </div>
//           <button className="cal-apply" disabled={!ss||!se} onClick={()=>ss&&se&&onSelect(ss,se)}>Apply Dates</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const GuestsModal = ({isOpen, onClose, onApply, guests}) => {
//   const [a,setA]=useState(guests.adults),[c,setC]=useState(guests.children),[r,setR]=useState(guests.rooms);
//   if(!isOpen) return null;
//   const Row = ({lbl,sub,val,set,min=0}) => (
//     <div className="gcrow">
//       <div><div className="gc-lbl">{lbl}</div><div className="gc-sub">{sub}</div></div>
//       <div className="gc-ctrl">
//         <button className="gc-btn" onClick={()=>set(v=>Math.max(min,v-1))}>−</button>
//         <span className="gc-val">{val}</span>
//         <button className="gc-btn" onClick={()=>set(v=>v+1)}>+</button>
//       </div>
//     </div>
//   );
//   return (
//     <div className="mov" onClick={onClose}>
//       <div className="mcard" onClick={e=>e.stopPropagation()}>
//         <div className="mhdr"><h3>Who's staying?</h3><button className="mclose" onClick={onClose}><X size={17}/></button></div>
//         <div className="mbody">
//           <Row lbl="Adults" sub="Ages 13 or above" val={a} set={setA} min={1}/>
//           <Row lbl="Children" sub="Ages 2–12" val={c} set={setC} min={0}/>
//           <Row lbl="Rooms" sub="Number of rooms" val={r} set={setR} min={1}/>
//           <button className="g-apply" onClick={()=>onApply(a,c,r)}>Done</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PopularSection = () => {
//   const navigate = useNavigate();
//   const [city, setCity] = useState('Goa');
//   const [canL, setCanL] = useState(false), [canR, setCanR] = useState(true);
//   const ref = useRef(null);
//   const hotels = POP[city] || [];
//   const chk = () => { const el=ref.current;if(!el)return;setCanL(el.scrollLeft>0);setCanR(el.scrollLeft+el.clientWidth<el.scrollWidth-4); };
//   useEffect(()=>{chk();},[city]);
//   const scroll = d => { ref.current?.scrollBy({left:d==='l'?-220:220,behavior:'smooth'});setTimeout(chk,360); };
//   const lbl = r => r>=9?'Exceptional':r>=8.5?'Excellent':r>=8?'Very Good':'Good';
//   return (
//     <div className="pop-sec">
//       <div className="pop-in">
//         <div className="sec-hdr">
//           <h2 className="sec-ttl">Popular in <span>India</span></h2>
//           <button className="see-all">See all <ChevronRight size={15}/></button>
//         </div>
//         <div className="ctabs">
//           {POPULAR_CITIES.map(c=>(
//             <button key={c} className={`ctab ${city===c?'on':''}`}
//               onClick={()=>{setCity(c);if(ref.current)ref.current.scrollLeft=0;}}>{c}</button>
//           ))}
//         </div>
//         <div className="cw">
//           {canL&&<button className="cbtn lft" onClick={()=>scroll('l')}><ChevronLeft size={17}/></button>}
//           <div className="ctrack" ref={ref} onScroll={chk}>
//             {hotels.map(h=>(
//               <div key={h.id} className="pcard" onClick={()=>navigate(`/property/${h.id}`,{state:{property:h}})}>
//                 <div className="pcard-img">
//                   <img src={h.image} alt={h.name} onError={e=>{e.target.src=FB;}}/>
//                   <div className="pcard-score"><Star size={10} fill="white" stroke="white"/>{h.rating} <span style={{opacity:.7,fontSize:9}}>{lbl(h.rating)}</span></div>
//                 </div>
//                 <div className="pcard-body">
//                   <div className="pcard-type"><Home size={9}/>{h.type}</div>
//                   <div className="pcard-name">{h.name}</div>
//                   <div className="pcard-addr">{h.address}</div>
//                   <div className="pcard-price">₹{h.price.toLocaleString()} <span>/night</span></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {canR&&<button className="cbtn rgt" onClick={()=>scroll('r')}><ChevronRight size={17}/></button>}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ── MAIN ──────────────────────────────────────────────────────────────────────

// const HomestayVilla = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const id = 'bmt-homestay-styles-v1';
//     if (!document.getElementById(id)) {
//       const el = document.createElement('style'); el.id = id; el.textContent = GLOBAL_CSS; document.head.appendChild(el);
//     }
//   }, []);

//   const [apiProperties, setApiProperties] = useState([]);
//   const [loading, setLoading]   = useState(true);
//   const [error, setError]       = useState(null);
//   const [wishlist, setWishlist] = useState([]);
//   const [mobF, setMobF]         = useState(false);
//   const [activeType, setActiveType] = useState(null);
//   const [filters, setFilters]   = useState({
//     searchQuery:'',priceRange:[0,100000],stars:[],amenities:[],propertyType:[],location:[],sort:'recommended'
//   });
//   const [showDate, setShowDate]     = useState(false);
//   const [checkIn, setCheckIn]       = useState(() => { const d=new Date();d.setDate(d.getDate()+1);return d; });
//   const [checkOut, setCheckOut]     = useState(() => { const d=new Date();d.setDate(d.getDate()+3);return d; });
//   const [showGuests, setShowGuests] = useState(false);
//   const [guests, setGuests]         = useState({adults:2,children:0,rooms:1});

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true); setError(null);
//         const res  = await fetch(`${API_BASE_URL}/homestay/admin/all`);
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const data = await res.json();
//         const arr  = Array.isArray(data) ? data : data.data || data.homestays || data.villas || [];
//         setApiProperties(arr.map((h, i) => mapProperty(h, i)));
//       } catch (e) {
//         setError(e.message);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   useEffect(() => {
//     if (mobF) document.body.style.overflow = 'hidden';
//     else document.body.style.overflow = '';
//     return () => { document.body.style.overflow = ''; };
//   }, [mobF]);

//   // Combine static + API data (static data shown immediately, API data appended when loaded)
//   const allProperties = useMemo(() => {
//     if (loading) return STATIC_PROPERTIES;
//     return [...STATIC_PROPERTIES, ...apiProperties];
//   }, [apiProperties, loading]);

//   const gN  = h => h.hotelName || h.name || 'Property';
//   const gI  = h => { const r=h.hotelImages?.[0]||h.image; if(!r) return FB; if(r.startsWith('http')) return r; return IMG_BASE+r.replace(/\\/g,'/'); };
//   const gP  = h => h.discountPrice || h.pricePerNight || h.price || 0;
//   const gO  = h => h.pricePerNight || h.originalPrice || Math.round(gP(h)/0.85);
//   const gR  = h => h.averageRating || h.rating || 0;
//   const gRv = h => h.totalReviews || h.reviews || 0;
//   const gAm = h => h.amenities || [];
//   const gL  = h => { if(h.city&&h.area) return `${h.area}, ${h.city}`; if(h.city&&h.state) return `${h.city}, ${h.state}`; return h.address||h.city||''; };
//   const gD  = h => h.landmark || h.distance || '';
//   const gDesc = h => h.description || '';
//   const gTags = h => h.propertyHighlights || h.tags || [];
//   const gDeal = h => h.featured ? 'Featured' : h.deal || null;
//   const gType = h => h.propertyType || h.hotelType || h.type || 'homestay';
//   const ratLbl = r => r>=9?'Exceptional':r>=8.5?'Excellent':r>=8?'Very Good':r>=7?'Good':'';
//   const fmtDt = (s,e) => `${s.toLocaleDateString('en-IN',{day:'numeric',month:'short'})} — ${e.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}`;
//   const nights = Math.max(1, Math.round((checkOut-checkIn)/(1000*60*60*24)));

//   const filtered = useMemo(() => {
//     const q = filters.searchQuery.toLowerCase();
//     return allProperties.filter(h => {
//       const p=gP(h), r=gR(h), am=gAm(h);
//       const name=(h.hotelName||h.name||'').toLowerCase();
//       const loc=(h.city||h.location||h.area||h.address||'').toLowerCase();
//       const type=(gType(h)).toLowerCase();
//       return (
//         (!q || name.includes(q) || loc.includes(q)) &&
//         p >= filters.priceRange[0] && p <= filters.priceRange[1] &&
//         (filters.stars.length===0 || filters.stars.some(s=>r>=s)) &&
//         (filters.propertyType.length===0 || filters.propertyType.some(pt=>type.includes(pt))) &&
//         (filters.location.length===0 || filters.location.some(l=>loc.includes(l))) &&
//         (filters.amenities.length===0 || filters.amenities.every(a=>am.some(x=>String(x).toLowerCase().includes(a))))
//       );
//     }).sort((a,b) => {
//       if(filters.sort==='price_low') return gP(a)-gP(b);
//       if(filters.sort==='price_high') return gP(b)-gP(a);
//       if(filters.sort==='rating') return gR(b)-gR(a);
//       return 0;
//     });
//   }, [allProperties, filters]);

//   const tog = (key,val) => setFilters(f=>({...f,[key]:f[key].includes(val)?f[key].filter(x=>x!==val):[...f[key],val]}));
//   const togWL = id => setWishlist(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
//   const reset = () => setFilters({searchQuery:'',priceRange:[0,100000],stars:[],amenities:[],propertyType:[],location:[],sort:'recommended'});

//   const typeIco = (type='') => {
//     const t = type.toLowerCase();
//     if(t.includes('villa')) return '🏡';
//     if(t.includes('tree')) return '🌳';
//     if(t.includes('farm')) return '🚜';
//     if(t.includes('boat')) return '⛵';
//     if(t.includes('camp')||t.includes('glamp')) return '⛺';
//     if(t.includes('chalet')) return '⛰️';
//     if(t.includes('cottage')) return '🌿';
//     return '🏠';
//   };

//   const CBox = ({on,onClick,label}) => (
//     <div className="fcrow" onClick={onClick}>
//       <div className={`cbox ${on?'on':''}`}>{on&&<Check size={10} color="#fff"/>}</div>
//       <span className="fc-lbl">{label}</span>
//     </div>
//   );

//   const FiltersPanel = () => (
//     <>
//       {mobF && <div className="fp-overlay show" onClick={()=>setMobF(false)}/>}
//       <div className={`fp ${mobF?'mob-open':''}`}>
//         <div className="fp-hdr">
//           <div className="fp-ttl"><Filter size={15}/>Filters</div>
//           <div style={{display:'flex',gap:8,alignItems:'center'}}>
//             <button className="fp-rst" onClick={reset}>Reset</button>
//             {mobF&&<button onClick={()=>setMobF(false)} style={{background:'rgba(255,255,255,.15)',border:'none',color:'#fff',borderRadius:6,padding:'4px 8px',cursor:'pointer',display:'flex',alignItems:'center'}}><X size={15}/></button>}
//           </div>
//         </div>
//         <div className="fs">
//           <div className="fs-ttl">💰 Price per Night</div>
//           <div className="pi-grid">
//             {[0,1].map(i=>(
//               <div key={i} className="pi-box"><label>{i===0?'Min':'Max'}</label>
//                 <input type="number" value={filters.priceRange[i]} onChange={e=>{const nr=[...filters.priceRange];nr[i]=parseInt(e.target.value)||0;setFilters({...filters,priceRange:nr});}}/>
//               </div>
//             ))}
//           </div>
//           <input className="pslider" type="range" min="0" max="100000" value={filters.priceRange[1]}
//             onChange={e=>{const nr=[...filters.priceRange];nr[1]=parseInt(e.target.value);setFilters({...filters,priceRange:nr});}}/>
//         </div>
//         <div className="fs">
//           <div className="fs-ttl">⭐ Guest Rating</div>
//           <div className="fclist">
//             {[5,4,3,2].map(n=>(
//               <div key={n} className="star-row" onClick={()=>tog('stars',n)}>
//                 <div className={`cbox ${filters.stars.includes(n)?'on':''}`}>{filters.stars.includes(n)&&<Check size={10} color="#fff"/>}</div>
//                 <div style={{display:'flex',gap:2}}>{[...Array(5)].map((_,i)=><Star key={i} size={12} fill={i<n?'#f59e0b':'none'} stroke={i<n?'#f59e0b':'#d1d5db'}/>)}</div>
//                 <span className="fc-lbl" style={{fontSize:12}}>{n} & above</span>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="fs">
//           <div className="fs-ttl">🏠 Property Type</div>
//           <div className="fclist">
//             {['villa','homestay','treehouse','cottage','farmhouse','houseboat','glamping','chalet'].map(t=>(
//               <CBox key={t} on={filters.propertyType.includes(t)} onClick={()=>tog('propertyType',t)} label={t.charAt(0).toUpperCase()+t.slice(1)}/>
//             ))}
//           </div>
//         </div>
//         <div className="fs">
//           <div className="fs-ttl">🛜 Amenities</div>
//           <div className="achips">
//             {AMENITIES_OPTIONS.map(({id,label,Icon})=>(
//               <div key={id} className={`achip ${filters.amenities.includes(id)?'on':''}`} onClick={()=>tog('amenities',id)}>
//                 <Icon size={12}/>{label}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="fs">
//           <div className="fs-ttl">📍 Region</div>
//           <div className="fclist">
//             {['goa','kerala','coorg','manali','rajasthan','himalayas','rishikesh','pondicherry'].map(l=>(
//               <CBox key={l} on={filters.location.includes(l)} onClick={()=>tog('location',l)} label={l.charAt(0).toUpperCase()+l.slice(1)}/>
//             ))}
//           </div>
//         </div>
//         {mobF&&(
//           <div style={{padding:'16px 18px',borderTop:'1px solid var(--border)',position:'sticky',bottom:0,background:'#fff'}}>
//             <button onClick={()=>setMobF(false)} style={{width:'100%',padding:'14px',background:'var(--green)',color:'#fff',border:'none',borderRadius:10,fontWeight:700,fontFamily:'Poppins,sans-serif',fontSize:15,cursor:'pointer',minHeight:50}}>
//               Show {filtered.length} Properties
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );

//   return (
//     <div className="hr">
//       {/* HERO */}
//       <section className="hero">
//         {/* <div className="hero-bar">
//           <div className="hero-logo">Book<b>My</b>Trip</div>
//           <nav className="hero-nav">
//             <a href="#">Hotels</a><a href="#">Homestays</a><a href="#">Villas</a><a href="#">Experiences</a>
//           </nav>
//         </div> */}
//         <div className="hero-content">
//           <div className="hero-eyebrow"><Flame size={12}/>50,000+ Unique Stays Across India</div>
//           <h1 className="hero-h1">Discover Your Dream <span className="acc">Escape</span></h1>
//           <p className="hero-sub">Handpicked villas, treehouses, farms & homestays · Real reviews · Best prices</p>
//           <div className="sbox">
//             <div className="sfields">
//               <div className="sfield">
//                 <MapPin size={19} className="sfield-ico"/>
//                 <div style={{flex:1}}>
//                   <div className="sfield-lbl">Destination / Property</div>
//                   <input placeholder="Goa, Coorg, Manali…" value={filters.searchQuery}
//                     onChange={e=>setFilters({...filters,searchQuery:e.target.value})}/>
//                 </div>
//               </div>
//               <div className="sfield" onClick={()=>setShowDate(true)}>
//                 <Calendar size={19} className="sfield-ico"/>
//                 <div>
//                   <div className="sfield-lbl">Check-in → Check-out</div>
//                   <div className="sfield-val">{fmtDt(checkIn,checkOut)}</div>
//                   <div className="sfield-sub">{nights} Night{nights>1?'s':''}</div>
//                 </div>
//               </div>
//               <div className="sfield" onClick={()=>setShowGuests(true)}>
//                 <Users size={19} className="sfield-ico"/>
//                 <div>
//                   <div className="sfield-lbl">Guests</div>
//                   <div className="sfield-val">{guests.adults+guests.children} Guest{guests.adults+guests.children>1?'s':''}</div>
//                   <div className="sfield-sub">{guests.adults} Adult{guests.adults>1?'s':''}{guests.children>0?`, ${guests.children} Child`:''}</div>
//                 </div>
//               </div>
//               <button className="sbtn"><Search size={19}/>Search</button>
//             </div>
//           </div>
//         </div>
//         <div className="strip">
//           <span className="strip-lbl">Quick Filter:</span>
//           {['Villa','Treehouse','Cottage','Farmhouse','Houseboat'].map(t=>(
//             <button key={t} className={`spill ${activeType===t?'on':''}`}
//               onClick={()=>{const nxt=activeType===t?null:t;setActiveType(nxt);setFilters(f=>({...f,propertyType:nxt?[nxt.toLowerCase()]:[]}));}}>
//               {typeIco(t)} {t}
//             </button>
//           ))}
//           <button className="spill" onClick={()=>setFilters(f=>({...f,sort:'price_low'}))}><Tag size={10}/>Lowest Price</button>
//           <button className="spill" onClick={()=>setFilters(f=>({...f,sort:'rating'}))}><TrendingUp size={10}/>Top Rated</button>
//         </div>
//       </section>

//       <PopularSection/>

//       <div className="main">
//         <FiltersPanel/>
//         <section className="rs">
//           <div className="rh">
//             <div>
//               <div className="rh-ttl">{`${filtered.length} Stays Found`}</div>
//               <div className="rh-sub">{`Sorted: ${filters.sort==='recommended'?'Recommended':filters.sort==='price_low'?'Price (Low→High)':filters.sort==='price_high'?'Price (High→Low)':'Top Rated'}`}</div>
//             </div>
//             <div style={{display:'flex',gap:8,alignItems:'center'}}>
//               <button className="mob-filter" onClick={()=>setMobF(true)}><Filter size={14}/>Filters</button>
//               <div className="sort-w">
//                 <select className="sort-s" value={filters.sort} onChange={e=>setFilters({...filters,sort:e.target.value})}>
//                   <option value="recommended">Recommended</option>
//                   <option value="price_low">Price: Low → High</option>
//                   <option value="price_high">Price: High → Low</option>
//                   <option value="rating">Top Rated</option>
//                 </select>
//                 <ChevronDown size={13} className="sort-arr"/>
//               </div>
//             </div>
//           </div>

//           <div className="trust">
//             {TRUST.map(({Icon,title,desc})=>(
//               <div key={title} className="tbadge">
//                 <div className="tbadge-ico"><Icon size={17}/></div>
//                 <div><div className="tbadge-ttl">{title}</div><div className="tbadge-sub">{desc}</div></div>
//               </div>
//             ))}
//           </div>

//           {/* API loading indicator (static data is always shown) */}
//           {loading && (
//             <div style={{background:'#f0faf4',border:'1px solid #b8ddc4',borderRadius:10,padding:'12px 16px',display:'flex',alignItems:'center',gap:10,fontSize:13,color:'var(--green)',fontWeight:600}}>
//               <div style={{width:16,height:16,border:'2px solid var(--green)',borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/>
//               Loading more properties from our network…
//               <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
//             </div>
//           )}

//           {!loading && error && (
//             <div style={{background:'#fff8e6',border:'1px solid #f0d060',borderRadius:10,padding:'12px 16px',fontSize:13,color:'#8a6000',fontWeight:500}}>
//               ⚠️ Could not load additional properties from API. Showing our curated selection below.
//             </div>
//           )}

//           {filtered.length === 0 && (
//             <div className="empty">
//               <div className="empty-ico"><Search size={26}/></div>
//               <div className="empty-ttl">No properties found</div>
//               <div className="empty-sub">Try adjusting your filters or search terms</div>
//               <button className="empty-rst" onClick={reset}>Clear all filters</button>
//             </div>
//           )}

//           {filtered.map(property => {
//             const id = property._id || property.id;
//             const name=gN(property), price=gP(property), orig=gO(property), rat=gR(property), rev=gRv(property);
//             const am=gAm(property), tags=gTags(property), deal=gDeal(property), loc=gL(property);
//             const dist=gD(property), desc=gDesc(property), img=gI(property), type=gType(property);
//             const disc = orig>price ? Math.round((1-price/orig)*100) : 0;
//             return (
//               <div key={id} className="hcard">
//                 <div className="hcard-main">
//                   <div className="hcard-imgw">
//                     <img src={img} alt={name} onError={e=>{e.target.src=FB;}}/>
//                     <button className={`wlbtn ${wishlist.includes(id)?'loved':''}`} onClick={()=>togWL(id)}>
//                       <Heart size={16} fill={wishlist.includes(id)?'currentColor':'none'}/>
//                     </button>
//                     {tags.length>0&&<div className="tag-badges">{tags.slice(0,2).map((t,i)=><span key={i} className="tag-badge">{t}</span>)}</div>}
//                     {deal&&<div className="deal-badge"><Tag size={10}/>{deal}</div>}
//                   </div>
//                   <div className="hcard-body">
//                     <div className="hcard-top">
//                       <div className="htype-pill">{typeIco(type)} {type.charAt(0).toUpperCase()+type.slice(1)}</div>
//                       <h3 className="hname">{name}</h3>
//                       <div className="hmeta">
//                         <div className="hloc"><MapPin size={13}/>{loc||'India'}</div>
//                         {dist&&<span className="hdist">{dist}</span>}
//                       </div>
//                       <div className="hrat-row">
//                         {rat>0&&<div className="rpill"><Star size={12} fill="white" stroke="white"/>{Number(rat).toFixed(1)}</div>}
//                         {rat>0&&<span className="rlbl">{ratLbl(rat)}</span>}
//                         {rev>0&&<span className="rrev">{rev.toLocaleString()} reviews</span>}
//                       </div>
//                       {desc&&<p className="hdesc">{desc}</p>}
//                       {am.length>0&&(
//                         <div className="hams">
//                           {am.slice(0,6).map((a,i)=>{
//                             const opt=AMENITIES_OPTIONS.find(x=>x.id===String(a).toLowerCase()||x.label.toLowerCase()===String(a).toLowerCase());
//                             return <div key={i} className="am-pill">{opt?<><opt.Icon size={11}/>{opt.label}</>:String(a)}</div>;
//                           })}
//                         </div>
//                       )}
//                     </div>
//                     <div className="hfooter">
//                       <div>
//                         {disc>0&&<div className="price-was">₹{Number(orig).toLocaleString()}<span className="disc-badge">{disc}% off</span></div>}
//                         <div className="price-main">₹{Number(price).toLocaleString()}</div>
//                         <div className="price-per">per night · incl. taxes</div>
//                       </div>
//                       <div className="cactions">
//                         <button className="btn-d" onClick={()=>navigate(`/homestay-details/${id}`)}>Details</button>
//                         <button className="btn-b" onClick={()=>navigate(`/homestay-details/${id}`)}>Book Now<ChevronRight size={15}/></button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <SpaceTypesSection propertyId={id}/>
//               </div>
//             );
//           })}
//         </section>
//       </div>

//       <DateModal isOpen={showDate} onClose={()=>setShowDate(false)} onSelect={(s,e)=>{setCheckIn(s);setCheckOut(e);setShowDate(false);}} checkIn={checkIn} checkOut={checkOut}/>
//       <GuestsModal isOpen={showGuests} onClose={()=>setShowGuests(false)} onApply={(a,c,r)=>{setGuests({adults:a,children:c,rooms:r});setShowGuests(false);}} guests={guests}/>
//     </div>
//   );
// };

// export default HomestayVilla;































import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, MapPin, Calendar, Users, Star, Filter, Heart, ChevronRight,
  ChevronDown, X, Check,
  Wifi, Coffee, Car, Dumbbell, Waves, Utensils,
  Sparkles, Shield, Award, Clock, ChevronLeft, Flame, TrendingUp, Tag, BedDouble,
  Maximize2, Users2, Wind, Tv, Bath, Trees, Home, Key, Dog, Baby
} from 'lucide-react';

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --green:#1a7a4a;--green-d:#155f3a;--teal:#00897b;
  --amber:#f59e0b;--orange:#ea580c;
  --navy:#0a2463;
  --bg:#f4f7f4;--card:#ffffff;--border:#e2e8e2;
  --t1:#1a2e1a;--t2:#4a6741;--t3:#8da88a;
  --sh-card:0 2px 12px rgba(26,122,74,.08);--sh-hover:0 8px 32px rgba(26,122,74,.15);
  --r:12px;--rl:16px;
}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--t1);-webkit-tap-highlight-color:transparent}
.hr{min-height:100vh}
.hero{background:linear-gradient(135deg,#0a2e18 0%,#1a5c30 45%,#2d7a4a 100%);position:relative;overflow:hidden;padding-bottom:48px}
.hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=60') center/cover;opacity:.18}
.hero-bar{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:18px 40px 0;max-width:1280px;margin:0 auto}
.hero-logo{font-family:'Poppins',sans-serif;font-size:26px;font-weight:900;color:#fff;letter-spacing:-.5px}
.hero-logo b{color:var(--amber)}
.hero-nav{display:flex;gap:22px}
.hero-nav a{color:rgba(255,255,255,.78);font-size:13px;font-weight:500;text-decoration:none;transition:color .2s}
.hero-nav a:hover{color:#fff}
.hero-content{position:relative;z-index:2;text-align:center;padding:38px 16px 30px;max-width:920px;margin:0 auto}
.hero-eyebrow{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.22);padding:5px 14px;border-radius:99px;color:#fff;font-size:12px;font-weight:600;margin-bottom:14px;letter-spacing:.3px}
.hero-h1{font-family:'Poppins',sans-serif;font-size:50px;font-weight:900;color:#fff;line-height:1.1;margin-bottom:10px;text-shadow:0 2px 20px rgba(0,0,0,.18)}
.hero-h1 .acc{color:var(--amber)}
.hero-sub{color:rgba(255,255,255,.72);font-size:15px;margin-bottom:30px}
.sbox{background:#fff;border-radius:var(--rl);box-shadow:0 20px 60px rgba(0,0,0,.2);overflow:hidden;max-width:920px;margin:0 auto}
.sfields{display:grid;grid-template-columns:2fr 1.5fr 1.2fr auto;min-height:78px}
.sfield{display:flex;align-items:center;gap:12px;padding:15px 20px;border-right:1px solid var(--border);cursor:pointer;transition:background .2s;min-height:72px}
.sfield:hover{background:#f9fcf9}
.sfield-ico{color:var(--green);flex-shrink:0}
.sfield-lbl{font-size:10px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px}
.sfield-val{font-size:15px;font-weight:700;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sfield-sub{font-size:11px;color:var(--t2);margin-top:1px}
.sfield input{border:none;outline:none;font-size:15px;font-weight:700;color:var(--t1);background:transparent;width:100%;font-family:'Inter',sans-serif}
.sfield input::placeholder{color:#aac4aa;font-weight:500}
.sbtn{background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff;border:none;padding:0 36px;font-size:16px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;transition:all .25s;display:flex;align-items:center;justify-content:center;gap:8px;min-height:72px}
.sbtn:hover{box-shadow:0 4px 20px rgba(26,122,74,.4);filter:brightness(1.05)}
.strip{position:relative;z-index:2;display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center;padding:18px 16px 0}
.strip-lbl{color:rgba(255,255,255,.68);font-size:12px;font-weight:600;letter-spacing:.3px}
.spill{display:flex;align-items:center;gap:5px;padding:6px 14px;border-radius:99px;border:1px solid rgba(255,255,255,.32);background:rgba(255,255,255,.1);color:#fff;font-size:12px;font-weight:600;cursor:pointer;backdrop-filter:blur(8px);transition:all .2s;min-height:36px}
.spill:hover,.spill.on{background:rgba(255,255,255,.22);border-color:rgba(255,255,255,.55)}
.pop-sec{background:#fff;padding:40px 0;border-bottom:1px solid var(--border)}
.pop-in{max-width:1280px;margin:0 auto;padding:0 20px}
.sec-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.sec-ttl{font-family:'Poppins',sans-serif;font-size:20px;font-weight:800;color:var(--t1)}
.sec-ttl span{color:var(--green)}
.see-all{display:flex;align-items:center;gap:4px;color:var(--green);font-size:13px;font-weight:700;background:none;border:none;cursor:pointer;white-space:nowrap}
.see-all:hover{text-decoration:underline}
.ctabs{display:flex;gap:8px;margin-bottom:22px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}
.ctabs::-webkit-scrollbar{display:none}
.ctab{padding:7px 16px;border-radius:99px;font-size:13px;font-weight:600;border:1.5px solid var(--border);background:#fff;color:var(--t2);cursor:pointer;transition:all .2s;white-space:nowrap;flex-shrink:0;min-height:36px}
.ctab.on{background:var(--green);color:#fff;border-color:var(--green)}
.ctab:hover:not(.on){border-color:var(--green);color:var(--green)}
.cw{position:relative}
.ctrack{display:flex;gap:14px;overflow-x:auto;padding-bottom:8px;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}
.ctrack::-webkit-scrollbar{height:3px}
.ctrack::-webkit-scrollbar-track{background:#e2e8e2;border-radius:99px}
.ctrack::-webkit-scrollbar-thumb{background:var(--green);border-radius:99px}
.cbtn{position:absolute;top:50%;transform:translateY(-50%);z-index:10;width:38px;height:38px;border-radius:50%;background:#fff;border:1.5px solid var(--border);box-shadow:0 2px 12px rgba(0,0,0,.12);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;color:var(--t1)}
.cbtn:hover{background:var(--green);color:#fff;border-color:var(--green)}
.cbtn.lft{left:-10px}.cbtn.rgt{right:-10px}
.pcard{flex:none;width:210px;background:#fff;border-radius:var(--r);border:1px solid var(--border);overflow:hidden;cursor:pointer;transition:all .25s}
.pcard:hover{box-shadow:var(--sh-hover);transform:translateY(-3px)}
.pcard:active{transform:scale(.98)}
.pcard-img{position:relative;height:140px;overflow:hidden}
.pcard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.pcard:hover .pcard-img img{transform:scale(1.07)}
.pcard-score{position:absolute;bottom:9px;left:9px;background:rgba(10,46,24,.88);backdrop-filter:blur(6px);color:#fff;font-size:11px;font-weight:700;padding:4px 9px;border-radius:6px;display:flex;align-items:center;gap:5px}
.pcard-body{padding:11px}
.pcard-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:4px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.pcard-type{display:inline-flex;align-items:center;gap:4px;background:#f0faf4;color:var(--green);font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;margin-bottom:5px;text-transform:uppercase;letter-spacing:.3px}
.pcard-addr{font-size:11px;color:var(--t2);line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:7px}
.pcard-price{font-size:15px;font-weight:800;color:var(--t1)}
.pcard-price span{font-size:11px;font-weight:500;color:var(--t2)}
.main{max-width:1280px;margin:0 auto;padding:20px 16px;display:grid;grid-template-columns:260px 1fr;gap:20px}
.fp{background:#fff;border-radius:var(--rl);border:1px solid var(--border);overflow:hidden;align-self:start;position:sticky;top:16px}
.fp-hdr{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(135deg,#0a2e18,#1a5c30)}
.fp-ttl{font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;color:#fff;display:flex;align-items:center;gap:7px}
.fp-rst{font-size:12px;font-weight:600;color:rgba(255,255,255,.72);background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);border-radius:6px;padding:3px 10px;cursor:pointer}
.fp-rst:hover{background:rgba(255,255,255,.22);color:#fff}
.fs{padding:16px 18px;border-bottom:1px solid var(--border)}
.fs:last-child{border-bottom:none}
.fs-ttl{font-size:11px;font-weight:700;color:var(--t1);text-transform:uppercase;letter-spacing:.6px;margin-bottom:12px}
.pi-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
.pi-box{background:#f4f7f4;border:1.5px solid var(--border);border-radius:8px;padding:8px 11px}
.pi-box label{display:block;font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px}
.pi-box input{width:100%;background:none;border:none;outline:none;font-size:14px;font-weight:700;color:var(--t1);font-family:'Inter',sans-serif}
.pslider{width:100%;accent-color:var(--green);height:4px;cursor:pointer}
.fclist{display:flex;flex-direction:column;gap:9px}
.fcrow{display:flex;align-items:center;gap:9px;cursor:pointer;min-height:32px}
.cbox{width:17px;height:17px;border-radius:4px;border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .18s}
.cbox.on{background:var(--green);border-color:var(--green)}
.fc-lbl{font-size:13px;color:var(--t1);font-weight:500;flex:1}
.star-row{display:flex;align-items:center;gap:7px;cursor:pointer;min-height:32px}
.achips{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.achip{display:flex;align-items:center;gap:5px;padding:8px 9px;border-radius:8px;border:1.5px solid var(--border);font-size:11px;font-weight:600;color:var(--t2);cursor:pointer;transition:all .18s;background:#fff;min-height:36px}
.achip.on{border-color:var(--green);color:var(--green);background:#f0faf4}
.achip:hover:not(.on){border-color:#aac4aa}
.rs{display:flex;flex-direction:column;gap:14px}
.rh{background:#fff;border-radius:var(--r);border:1px solid var(--border);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
.rh-ttl{font-family:'Poppins',sans-serif;font-size:16px;font-weight:800;color:var(--t1)}
.rh-sub{font-size:12px;color:var(--t2);margin-top:2px}
.sort-w{position:relative}
.sort-s{appearance:none;background:#f4f7f4;border:1.5px solid var(--border);border-radius:8px;padding:8px 34px 8px 13px;font-size:13px;font-weight:600;color:var(--t1);cursor:pointer;outline:none;font-family:'Inter',sans-serif;min-height:40px}
.sort-s:focus{border-color:var(--green)}
.sort-arr{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--t2)}
.mob-filter{display:none;align-items:center;gap:6px;padding:8px 14px;border:1.5px solid var(--border);border-radius:8px;background:#fff;font-size:13px;font-weight:700;cursor:pointer;min-height:40px}
.trust{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.tbadge{background:linear-gradient(135deg,#f0faf4,#e6f5ec);border:1px solid #b8ddc4;border-radius:var(--r);padding:12px 13px;display:flex;align-items:flex-start;gap:10px}
.tbadge-ico{background:#fff;padding:7px;border-radius:8px;color:var(--green);box-shadow:0 1px 4px rgba(0,0,0,.08);flex-shrink:0}
.tbadge-ttl{font-size:12px;font-weight:700;color:#0a2e18;margin-bottom:2px}
.tbadge-sub{font-size:10px;color:#3a6e4a}
.hcard{background:#fff;border-radius:var(--rl);border:1px solid var(--border);overflow:hidden;display:flex;transition:all .25s;flex-direction:column}
.hcard:hover{box-shadow:var(--sh-hover);transform:translateY(-2px)}
.hcard-main{display:flex}
.hcard-imgw{position:relative;width:260px;flex-shrink:0;overflow:hidden;min-height:210px}
.hcard-imgw img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.hcard:hover .hcard-imgw img{transform:scale(1.06)}
.wlbtn{position:absolute;top:12px;right:12px;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.9);backdrop-filter:blur(8px);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#bbb;transition:all .2s;box-shadow:0 1px 6px rgba(0,0,0,.12)}
.wlbtn.loved{color:#e05c5c}.wlbtn:hover{color:#e05c5c;background:#fff}
.deal-badge{position:absolute;bottom:12px;left:12px;background:var(--green);color:#fff;font-size:10px;font-weight:700;padding:4px 10px;border-radius:6px;display:flex;align-items:center;gap:4px}
.tag-badges{position:absolute;top:12px;left:12px;display:flex;flex-direction:column;gap:4px}
.tag-badge{background:rgba(255,255,255,.9);font-size:10px;font-weight:700;color:var(--t1);padding:3px 8px;border-radius:5px}
.hcard-body{flex:1;padding:16px 18px;display:flex;flex-direction:column;min-width:0}
.hcard-top{flex:1}
.hname{font-family:'Poppins',sans-serif;font-size:17px;font-weight:800;color:var(--t1);margin-bottom:5px;line-height:1.3;transition:color .2s}
.hcard:hover .hname{color:var(--green)}
.htype-pill{display:inline-flex;align-items:center;gap:5px;background:#f0faf4;color:var(--green);font-size:10px;font-weight:700;padding:3px 9px;border-radius:5px;margin-bottom:6px;text-transform:uppercase;letter-spacing:.4px}
.hmeta{display:flex;align-items:center;gap:8px;margin-bottom:7px;flex-wrap:wrap}
.hloc{display:flex;align-items:center;gap:4px;font-size:12px;color:var(--t2)}
.hloc svg{color:var(--green)}
.hdist{font-size:11px;color:var(--t3);background:#f4f7f4;padding:2px 8px;border-radius:99px}
.hrat-row{display:flex;align-items:center;gap:8px;margin-bottom:9px;flex-wrap:wrap}
.rpill{display:flex;align-items:center;gap:5px;background:var(--navy);color:#fff;padding:4px 10px;border-radius:6px;font-size:13px;font-weight:700}
.rlbl{font-size:13px;font-weight:600;color:var(--t1)}
.rrev{font-size:12px;color:var(--t2)}
.hdesc{font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:11px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.hams{display:flex;flex-wrap:wrap;gap:5px}
.am-pill{display:flex;align-items:center;gap:5px;background:#f4f7f4;border:1px solid var(--border);padding:4px 8px;border-radius:6px;font-size:11px;font-weight:600;color:var(--t2)}
.hfooter{border-top:1px solid var(--border);margin-top:13px;padding-top:12px;display:flex;align-items:flex-end;justify-content:space-between;gap:10px;flex-wrap:wrap}
.price-was{font-size:12px;color:var(--t3);text-decoration:line-through;margin-bottom:2px}
.disc-badge{display:inline-block;background:#e6f5ec;color:var(--green);font-size:10px;font-weight:700;padding:1px 6px;border-radius:4px;margin-left:6px}
.price-main{font-family:'Poppins',sans-serif;font-size:23px;font-weight:900;color:var(--t1);line-height:1}
.price-per{font-size:11px;color:var(--t2);margin-top:2px}
.cactions{display:flex;gap:8px;flex-shrink:0}
.btn-d{padding:10px 14px;border-radius:8px;border:1.5px solid var(--border);font-size:13px;font-weight:700;color:var(--t1);background:#fff;cursor:pointer;transition:all .2s;min-height:42px}
.btn-d:hover{border-color:var(--green);color:var(--green)}
.btn-b{padding:10px 18px;border-radius:8px;border:none;background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff;font-size:13px;font-weight:700;cursor:pointer;transition:all .25s;font-family:'Poppins',sans-serif;display:flex;align-items:center;gap:5px;white-space:nowrap;min-height:42px}
.btn-b:hover{box-shadow:0 4px 16px rgba(26,122,74,.35);transform:translateY(-1px)}
.btn-b:active{transform:scale(.97)}
.empty{text-align:center;padding:60px 20px;background:#fff;border-radius:var(--rl);border:2px dashed var(--border)}
.empty-ico{width:60px;height:60px;border-radius:50%;background:#f0faf4;color:var(--green);display:flex;align-items:center;justify-content:center;margin:0 auto 14px}
.empty-ttl{font-family:'Poppins',sans-serif;font-size:18px;font-weight:700;margin-bottom:6px}
.empty-sub{font-size:14px;color:var(--t2);margin-bottom:18px}
.empty-rst{color:var(--green);font-weight:700;background:none;border:none;cursor:pointer;font-size:14px;text-decoration:underline}
.mov{position:fixed;inset:0;z-index:9999;display:flex;align-items:flex-end;justify-content:center;background:rgba(10,46,24,.42);backdrop-filter:blur(4px);padding:0}
.mcard{background:#fff;border-radius:var(--rl) var(--rl) 0 0;box-shadow:0 -8px 40px rgba(0,0,0,.18);width:100%;max-width:480px;overflow:hidden;max-height:92vh;overflow-y:auto}
.mhdr{display:flex;align-items:center;justify-content:space-between;padding:17px 20px;background:linear-gradient(135deg,#0a2e18,#1a5c30);position:sticky;top:0;z-index:2}
.mhdr h3{font-family:'Poppins',sans-serif;font-size:16px;font-weight:700;color:#fff}
.mclose{background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:6px;padding:7px;cursor:pointer;display:flex;min-width:36px;min-height:36px;align-items:center;justify-content:center}
.mbody{padding:20px}
.cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.cal-nbtn{background:#f4f7f4;border:1px solid var(--border);border-radius:8px;padding:8px;cursor:pointer;display:flex;color:var(--t1);transition:all .2s;min-width:40px;min-height:40px;align-items:center;justify-content:center}
.cal-nbtn:hover{background:var(--green);color:#fff;border-color:var(--green)}
.cal-month{font-family:'Poppins',sans-serif;font-size:15px;font-weight:700}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:14px}
.cal-dh{text-align:center;font-size:11px;font-weight:700;color:var(--t3);padding:5px 0}
.cal-d{height:40px;display:flex;align-items:center;justify-content:center;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:none;background:none;transition:all .15s;width:100%}
.cal-d:hover:not(:disabled){background:#f4f7f4}
.cal-d.past{color:#d1d5db;cursor:not-allowed}
.cal-d.inr{background:#e6f5ec;color:var(--green);border-radius:0}
.cal-d.sd{background:var(--green);color:#fff;border-radius:8px 0 0 8px}
.cal-d.ed{background:var(--green);color:#fff;border-radius:0 8px 8px 0}
.cal-d.sd.ed{border-radius:8px}
.cal-sum{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;background:#f4f7f4;border-radius:10px;padding:13px;margin-bottom:14px}
.cal-db label{display:block;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--t2);margin-bottom:3px}
.cal-db span{font-size:14px;font-weight:700;color:var(--t1)}
.cal-div{width:18px;height:2px;background:var(--border)}
.cal-apply{width:100%;padding:14px;background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;min-height:50px}
.cal-apply:disabled{opacity:.42;cursor:not-allowed}
.gcrow{display:flex;align-items:center;justify-content:space-between;padding:15px 0;border-bottom:1px solid var(--border)}
.gcrow:last-of-type{border-bottom:none}
.gc-lbl{font-size:15px;font-weight:600}
.gc-sub{font-size:12px;color:var(--t2);margin-top:1px}
.gc-ctrl{display:flex;align-items:center;gap:14px}
.gc-btn{width:40px;height:40px;border-radius:50%;border:1.5px solid var(--border);background:#fff;cursor:pointer;font-size:18px;font-weight:600;display:flex;align-items:center;justify-content:center;transition:all .18s}
.gc-btn:hover{border-color:var(--green);color:var(--green)}
.gc-val{font-size:16px;font-weight:700;min-width:24px;text-align:center}
.g-apply{width:100%;margin-top:18px;padding:14px;background:linear-gradient(135deg,var(--green),var(--green-d));color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;min-height:50px}
.fp-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9997;backdrop-filter:blur(2px)}
.fp-overlay.show{display:block}
.fp.mob-open{display:block!important;position:fixed;bottom:0;left:0;right:0;top:auto;z-index:9998;border-radius:var(--rl) var(--rl) 0 0;max-height:88vh;overflow-y:auto;border:none;box-shadow:0 -8px 40px rgba(0,0,0,.2)}
@media(max-width:1024px){
  .main{grid-template-columns:1fr;padding:16px}
  .fp{display:none}
  .fp.mob-open{display:block}
  .mob-filter{display:flex!important}
  .trust{grid-template-columns:repeat(3,1fr)}
}
@media(max-width:768px){
  .hero-bar{padding:14px 16px 0}
  .hero-nav{display:none}
  .hero-h1{font-size:30px}
  .hero-sub{font-size:14px}
  .hero-content{padding:28px 16px 24px}
  .sbox{border-radius:12px;margin:0 4px}
  .sfields{grid-template-columns:1fr}
  .sfield{border-right:none;border-bottom:1px solid var(--border);min-height:64px}
  .sfield:last-of-type{border-bottom:none}
  .sbtn{border-radius:0 0 12px 12px;padding:16px;min-height:56px;font-size:15px}
  .strip{gap:8px;padding:14px 12px 0}
  .hcard-main{flex-direction:column}
  .hcard-imgw{width:100%;height:200px;min-height:200px}
  .hcard-body{padding:14px}
  .hname{font-size:16px}
  .hfooter{flex-direction:column;align-items:stretch}
  .cactions{justify-content:stretch}
  .btn-d{flex:1;text-align:center;padding:12px}
  .btn-b{flex:2;justify-content:center;padding:12px}
  .trust{grid-template-columns:1fr}
  .rh{padding:12px 14px}
  .main{padding:12px}
  .rs{gap:12px}
  .pcard{width:180px}
  .cbtn{display:none}
  .pop-in{padding:0 16px}
}
@media(max-width:480px){
  .hero-h1{font-size:26px}
  .hero-sub{font-size:13px;margin-bottom:20px}
  .sfield{min-height:58px;padding:12px 14px}
  .trust{gap:8px}
  .hname{font-size:15px}
  .price-main{font-size:20px}
  .pcard{width:165px}
  .ctab{font-size:12px;padding:6px 13px}
  .strip-lbl{display:none}
}
`;

// ── STATIC DATA ──────────────────────────────────────────────────────────────

const POPULAR_CITIES = ['Goa','Coorg','Manali','Kerala','Rajasthan','Himalayas'];
const POP = {
  'Goa':[
    {id:'pg1',name:'Casa de Palmas',type:'Villa',stars:5,rating:9.2,reviews:142,address:'Assagao, North Goa',price:14500,image:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80'},
    {id:'pg2',name:'Jungle Treehouse Goa',type:'Treehouse',stars:5,rating:9.0,reviews:87,address:'Vagator, North Goa',price:8200,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
    {id:'pg3',name:'Arambol Beachfront',type:'Homestay',stars:4,rating:8.6,reviews:203,address:'Arambol Beach, North Goa',price:5400,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
    {id:'pg4',name:'Palolem Sea Villa',type:'Villa',stars:5,rating:8.8,reviews:156,address:'Palolem Beach, South Goa',price:12800,image:'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=400&q=80'},
  ],
  'Coorg':[
    {id:'pc1',name:'Kaveri River Cottage',type:'Cottage',stars:4,rating:9.1,reviews:178,address:'Kushalnagar, Coorg',price:6800,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
    {id:'pc2',name:'Coffee Estate Villa',type:'Villa',stars:5,rating:9.3,reviews:112,address:'Madikeri, Coorg',price:11200,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
    {id:'pc3',name:'Misty Hills Homestay',type:'Homestay',stars:4,rating:8.7,reviews:234,address:'Virajpet, Coorg',price:4200,image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80'},
    {id:'pc4',name:'Rainforest Retreat',type:'Treehouse',stars:5,rating:9.0,reviews:98,address:'Somwarpet, Coorg',price:9500,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
  ],
  'Manali':[
    {id:'pm1',name:'Alpine Wood Chalet',type:'Chalet',stars:4,rating:8.9,reviews:267,address:'Old Manali Village',price:7500,image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80'},
    {id:'pm2',name:'Riverside Homestay',type:'Homestay',stars:4,rating:9.1,reviews:189,address:'Naggar, Kullu',price:3800,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
    {id:'pm3',name:'Snow View Cottage',type:'Cottage',stars:4,rating:8.8,reviews:143,address:'Solang Valley, Manali',price:5600,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
    {id:'pm4',name:'Himalayan Glamping',type:'Glamping',stars:5,rating:8.6,reviews:76,address:'Hampta Pass Meadow',price:8900,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
  ],
  'Kerala':[
    {id:'pk1',name:'Backwater Houseboat',type:'Houseboat',stars:5,rating:9.4,reviews:312,address:'Alappuzha Backwaters',price:13500,image:'https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=400&q=80'},
    {id:'pk2',name:'Munnar Tea Estate',type:'Homestay',stars:4,rating:9.0,reviews:198,address:'Munnar, Idukki District',price:5800,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
    {id:'pk3',name:'Wayanad Treehouse',type:'Treehouse',stars:5,rating:9.2,reviews:156,address:'Kalpetta, Wayanad',price:10200,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
    {id:'pk4',name:'Thekkady Spice Villa',type:'Villa',stars:4,rating:8.8,reviews:224,address:'Kumily, Thekkady',price:9400,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
  ],
  'Rajasthan':[
    {id:'pr1',name:'Desert Haveli Camp',type:'Glamping',stars:5,rating:9.1,reviews:289,address:'Sam Dunes, Jaisalmer',price:8800,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
    {id:'pr2',name:'Udaipur Lake Haveli',type:'Homestay',stars:5,rating:9.3,reviews:176,address:'Old City, Udaipur',price:7600,image:'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80'},
    {id:'pr3',name:'Pushkar Organic Farm',type:'Farmhouse',stars:4,rating:8.7,reviews:134,address:'Pushkar, Ajmer',price:4900,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
    {id:'pr4',name:'Palace Courtyard Villa',type:'Villa',stars:5,rating:9.0,reviews:98,address:'Civil Lines, Jodhpur',price:15800,image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80'},
  ],
  'Himalayas':[
    {id:'ph1',name:'Rishikesh Ganga Cottage',type:'Cottage',stars:4,rating:8.9,reviews:201,address:'Laxman Jhula, Rishikesh',price:4800,image:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80'},
    {id:'ph2',name:'Uttarkashi Mountain Lodge',type:'Homestay',stars:4,rating:8.6,reviews:143,address:'Uttarkashi, Uttarakhand',price:3500,image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400&q=80'},
    {id:'ph3',name:'Chopta Eco Camp',type:'Glamping',stars:4,rating:9.0,reviews:89,address:'Tungnath Meadow, Chopta',price:6200,image:'https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=400&q=80'},
    {id:'ph4',name:'Nainital Lake View',type:'Cottage',stars:5,rating:9.2,reviews:267,address:'Mall Road, Nainital',price:9100,image:'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=400&q=80'},
  ],
};

const STATIC_PROPERTIES = [
  {
    id:'sv1', _id:'sv1', hotelName:'Aranya Forest Villa', propertyType:'Villa', hotelType:'Villa',
    city:'Coorg', area:'Madikeri', state:'Karnataka', landmark:'Near Raja\'s Seat',
    description:'Nestled in the heart of Coorg\'s coffee plantations, this stunning villa offers an immersive nature retreat with a private infinity pool overlooking misty hills.',
    pricePerNight:12000, discountPrice:9499, averageRating:4.8, totalReviews:142,
    amenities:['Free WiFi','Private Pool','Breakfast','Fireplace'],
    propertyHighlights:['Eco-Certified','Coffee Estate'],
    hotelImages:['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80'],
    featured:true, checkInTime:'2:00 PM', checkOutTime:'11:00 AM', petPolicy:'Allowed',
  },
  {
    id:'sv2', _id:'sv2', hotelName:'The Goan Treehouse', propertyType:'Treehouse', hotelType:'Treehouse',
    city:'Goa', area:'Assagao', state:'Goa', landmark:'Near Vagator Beach',
    description:'A magical treehouse experience just minutes from the beach. Suspended among banyan trees with panoramic views of the coconut grove below.',
    pricePerNight:7800, discountPrice:6299, averageRating:4.9, totalReviews:89,
    amenities:['Free WiFi','Breakfast','Hammock','Yoga Deck'],
    propertyHighlights:['Adults Only','Unique Stay'],
    hotelImages:['https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?w=800&q=80'],
    featured:false, checkInTime:'1:00 PM', checkOutTime:'10:00 AM', petPolicy:'Not Allowed',
  },
  {
    id:'sv3', _id:'sv3', hotelName:'Himalayan Heritage Homestay', propertyType:'Homestay', hotelType:'Homestay',
    city:'Manali', area:'Old Manali', state:'Himachal Pradesh', landmark:'Near Solang Valley',
    description:'A traditional Himachali home converted into a warm homestay. Wake up to snow-capped mountain views and enjoy home-cooked meals with the host family.',
    pricePerNight:4500, discountPrice:3799, averageRating:4.7, totalReviews:203,
    amenities:['Free WiFi','Meals Included','Fireplace','Trekking Guide'],
    propertyHighlights:['Family Run','Mountain View'],
    hotelImages:['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'],
    featured:true, checkInTime:'12:00 PM', checkOutTime:'11:00 AM', petPolicy:'Not Allowed',
  },
  {
    id:'sv4', _id:'sv4', hotelName:'Backwater Houseboat', propertyType:'Houseboat', hotelType:'Houseboat',
    city:'Alleppey', area:'Alappuzha', state:'Kerala', landmark:'Kerala Backwaters',
    description:'Float through the serene Kerala backwaters on this luxuriously appointed houseboat. Watch the sunset over still waters while sipping fresh coconut water.',
    pricePerNight:15000, discountPrice:11999, averageRating:4.6, totalReviews:167,
    amenities:['All Meals','AC','Fishing','Sunset Cruise'],
    propertyHighlights:['Private Boat','Chef On Board'],
    hotelImages:['https://images.unsplash.com/photo-1506974210756-8e1b8985d348?w=800&q=80'],
    featured:false, checkInTime:'12:00 PM', checkOutTime:'10:00 AM', petPolicy:'Not Allowed',
  },
  {
    id:'sv5', _id:'sv5', hotelName:'Rajasthani Desert Camp', propertyType:'Glamping', hotelType:'Camp',
    city:'Jaisalmer', area:'Sam Sand Dunes', state:'Rajasthan', landmark:'Thar Desert',
    description:'Experience the magic of the Thar Desert under a canopy of stars. Luxury tents with modern amenities set against the golden sand dunes.',
    pricePerNight:9500, discountPrice:7999, averageRating:4.5, totalReviews:318,
    amenities:['Meals Included','Camel Safari','Bonfire','Cultural Shows'],
    propertyHighlights:['Under the Stars','Camel Safari'],
    hotelImages:['https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80'],
    featured:true, checkInTime:'3:00 PM', checkOutTime:'10:00 AM', petPolicy:'Not Allowed',
  },
  {
    id:'sv6', _id:'sv6', hotelName:'Pondicherry Heritage Villa', propertyType:'Villa', hotelType:'Villa',
    city:'Pondicherry', area:'French Quarter', state:'Pondicherry', landmark:'Promenade Beach',
    description:'A lovingly restored 19th-century French Creole villa in the heart of the White Town. Mediterranean courtyard, vintage furniture, and rooftop sea views.',
    pricePerNight:11000, discountPrice:8999, averageRating:4.8, totalReviews:94,
    amenities:['Free WiFi','Breakfast','Rooftop Terrace','Bicycle'],
    propertyHighlights:['Heritage Property','French Quarter'],
    hotelImages:['https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80'],
    featured:false, checkInTime:'2:00 PM', checkOutTime:'11:00 AM', petPolicy:'Allowed',
  },
];

const API_BASE_URL = 'https://bmtadmin.onrender.com/api';
const IMG_BASE = 'https://bmtadmin.onrender.com/';
const FB = 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80';

const AMENITIES_OPTIONS = [
  {id:'wifi',label:'Free WiFi',Icon:Wifi},
  {id:'breakfast',label:'Breakfast',Icon:Coffee},
  {id:'parking',label:'Parking',Icon:Car},
  {id:'pool',label:'Pool',Icon:Waves},
  {id:'gym',label:'Gym',Icon:Dumbbell},
  {id:'spa',label:'Spa',Icon:Sparkles},
  {id:'restaurant',label:'Kitchen',Icon:Utensils},
  {id:'pets',label:'Pet Friendly',Icon:Dog},
];

const TRUST = [
  {Icon:Shield,title:'100% Verified Stays',desc:'Every property personally inspected'},
  {Icon:Award,title:'Genuine Guest Reviews',desc:'Only from real travellers like you'},
  {Icon:Clock,title:'24/7 Host Support',desc:'We are here whenever you need us'},
];

// ── HELPERS ──────────────────────────────────────────────────────────────────

const buildImg = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return IMG_BASE + path.replace(/\\/g, '/');
};

// ✅ FIXED: Proper mapProperty that converts API data to the same format as static data
const mapApiProperty = (h) => {
  // Build thumbnail image
  const thumb = h.thumbnail ? buildImg(h.thumbnail) : null;
  const galleryImgs = (h.gallery || []).map(buildImg).filter(Boolean);
  const allImgs = [thumb, ...galleryImgs].filter(Boolean);
  const image = allImgs.length > 0 ? allImgs[0] : FB;

  const price = Number(h.finalPrice) || Number(h.pricePerNight) || 2000;
  const origPrice = Number(h.pricePerNight) || Math.round(price / 0.85);

  return {
    // IDs — both _id and id point to same value so navigation works
    id: h._id,
    _id: h._id,

    // Names & type — use same field names as static data
    hotelName: h.propertyName || 'Property',
    propertyType: h.propertyType || 'Homestay',
    hotelType: h.propertyType || 'Homestay',

    // Location
    city: h.city || '',
    area: h.area || '',
    state: h.state || '',
    landmark: h.address || '',

    // Description
    description: h.description || `${h.propertyName || 'This property'} is a wonderful ${h.propertyType || 'stay'} in ${h.city || 'India'}.`,

    // Pricing
    pricePerNight: origPrice,
    discountPrice: price,

    // Ratings
    averageRating: Number(h.rating) || 4.5,
    totalReviews: Number(h.reviews) || 0,

    // Amenities — normalize to array of strings
    amenities: Array.isArray(h.amenities) ? h.amenities : [],

    // Highlights
    propertyHighlights: h.mealPlan ? [h.mealPlan] : [],

    // Images
    hotelImages: allImgs.length > 0 ? allImgs : [FB],

    // Meta
    featured: h.status === 'approved',
    checkInTime: h.checkInTime || '2:00 PM',
    checkOutTime: h.checkOutTime || '11:00 AM',
    petPolicy: '',

    // Keep raw API data for detail page
    _raw: h,
  };
};

// ── SUB-COMPONENTS ────────────────────────────────────────────────────────────

const DateModal = ({isOpen, onClose, onSelect, checkIn, checkOut}) => {
  const [ss, setSs] = useState(checkIn), [se, setSe] = useState(checkOut);
  const [cm, setCm] = useState(new Date().getMonth()), [cy, setCy] = useState(new Date().getFullYear());
  const MN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const days = () => {
    const a = []; const tot = new Date(cy,cm+1,0).getDate(); const fst = new Date(cy,cm,1).getDay();
    for (let i=0;i<fst;i++) a.push(null);
    for (let d=1;d<=tot;d++) a.push(new Date(cy,cm,d));
    return a;
  };
  const fmt = d => d ? d.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}) : '—';
  const click = d => { if (!ss||(ss&&se)){setSs(d);setSe(null);}else{if(d<ss){setSe(ss);setSs(d);}else setSe(d);} };
  const pM = () => { if(cm===0){setCm(11);setCy(y=>y-1);}else setCm(m=>m-1); };
  const nM = () => { if(cm===11){setCm(0);setCy(y=>y+1);}else setCm(m=>m+1); };
  if (!isOpen) return null;
  return (
    <div className="mov" onClick={onClose}>
      <div className="mcard" onClick={e=>e.stopPropagation()}>
        <div className="mhdr"><h3>Select Check-in & Check-out</h3><button className="mclose" onClick={onClose}><X size={17}/></button></div>
        <div className="mbody">
          <div className="cal-nav">
            <button className="cal-nbtn" onClick={pM}><ChevronLeft size={17}/></button>
            <span className="cal-month">{MN[cm]} {cy}</span>
            <button className="cal-nbtn" onClick={nM}><ChevronRight size={17}/></button>
          </div>
          <div className="cal-grid">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d=><div key={d} className="cal-dh">{d}</div>)}
            {days().map((date,i)=>{
              if(!date) return <div key={`e${i}`}/>;
              const past=date<new Date(new Date().setHours(0,0,0,0));
              const isS=ss&&date.getTime()===ss.getTime();const isE=se&&date.getTime()===se.getTime();const inR=ss&&se&&date>ss&&date<se;
              return <button key={date.toISOString()} disabled={past} onClick={()=>!past&&click(date)}
                className={`cal-d ${past?'past':''} ${inR?'inr':''} ${isS?'sd':''} ${isE?'ed':''}`}>{date.getDate()}</button>;
            })}
          </div>
          <div className="cal-sum">
            <div className="cal-db"><label>Check-in</label><span>{fmt(ss)}</span></div>
            <div className="cal-div"/>
            <div className="cal-db" style={{textAlign:'right'}}><label>Check-out</label><span>{fmt(se)}</span></div>
          </div>
          <button className="cal-apply" disabled={!ss||!se} onClick={()=>ss&&se&&onSelect(ss,se)}>Apply Dates</button>
        </div>
      </div>
    </div>
  );
};

const GuestsModal = ({isOpen, onClose, onApply, guests}) => {
  const [a,setA]=useState(guests.adults),[c,setC]=useState(guests.children),[r,setR]=useState(guests.rooms);
  if(!isOpen) return null;
  const Row = ({lbl,sub,val,set,min=0}) => (
    <div className="gcrow">
      <div><div className="gc-lbl">{lbl}</div><div className="gc-sub">{sub}</div></div>
      <div className="gc-ctrl">
        <button className="gc-btn" onClick={()=>set(v=>Math.max(min,v-1))}>−</button>
        <span className="gc-val">{val}</span>
        <button className="gc-btn" onClick={()=>set(v=>v+1)}>+</button>
      </div>
    </div>
  );
  return (
    <div className="mov" onClick={onClose}>
      <div className="mcard" onClick={e=>e.stopPropagation()}>
        <div className="mhdr"><h3>Who's staying?</h3><button className="mclose" onClick={onClose}><X size={17}/></button></div>
        <div className="mbody">
          <Row lbl="Adults" sub="Ages 13 or above" val={a} set={setA} min={1}/>
          <Row lbl="Children" sub="Ages 2–12" val={c} set={setC} min={0}/>
          <Row lbl="Rooms" sub="Number of rooms" val={r} set={setR} min={1}/>
          <button className="g-apply" onClick={()=>onApply(a,c,r)}>Done</button>
        </div>
      </div>
    </div>
  );
};

const PopularSection = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('Goa');
  const [canL, setCanL] = useState(false), [canR, setCanR] = useState(true);
  const ref = useRef(null);
  const hotels = POP[city] || [];
  const chk = () => { const el=ref.current;if(!el)return;setCanL(el.scrollLeft>0);setCanR(el.scrollLeft+el.clientWidth<el.scrollWidth-4); };
  useEffect(()=>{chk();},[city]);
  const scroll = d => { ref.current?.scrollBy({left:d==='l'?-220:220,behavior:'smooth'});setTimeout(chk,360); };
  const lbl = r => r>=9?'Exceptional':r>=8.5?'Excellent':r>=8?'Very Good':'Good';
  return (
    <div className="pop-sec">
      <div className="pop-in">
        <div className="sec-hdr">
          <h2 className="sec-ttl">Popular in <span>India</span></h2>
          <button className="see-all">See all <ChevronRight size={15}/></button>
        </div>
        <div className="ctabs">
          {POPULAR_CITIES.map(c=>(
            <button key={c} className={`ctab ${city===c?'on':''}`}
              onClick={()=>{setCity(c);if(ref.current)ref.current.scrollLeft=0;}}>{c}</button>
          ))}
        </div>
        <div className="cw">
          {canL&&<button className="cbtn lft" onClick={()=>scroll('l')}><ChevronLeft size={17}/></button>}
          <div className="ctrack" ref={ref} onScroll={chk}>
            {hotels.map(h=>(
              <div key={h.id} className="pcard" onClick={()=>navigate(`/homestay-details/${h.id}`,{state:{property:h}})}>
                <div className="pcard-img">
                  <img src={h.image} alt={h.name} onError={e=>{e.target.src=FB;}}/>
                  <div className="pcard-score"><Star size={10} fill="white" stroke="white"/>{h.rating} <span style={{opacity:.7,fontSize:9}}>{lbl(h.rating)}</span></div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-type"><Home size={9}/>{h.type}</div>
                  <div className="pcard-name">{h.name}</div>
                  <div className="pcard-addr">{h.address}</div>
                  <div className="pcard-price">₹{h.price.toLocaleString()} <span>/night</span></div>
                </div>
              </div>
            ))}
          </div>
          {canR&&<button className="cbtn rgt" onClick={()=>scroll('r')}><ChevronRight size={17}/></button>}
        </div>
      </div>
    </div>
  );
};

// ── MAIN ──────────────────────────────────────────────────────────────────────

const HomestayVilla = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = 'bmt-homestay-styles-v1';
    if (!document.getElementById(id)) {
      const el = document.createElement('style'); el.id = id; el.textContent = GLOBAL_CSS; document.head.appendChild(el);
    }
  }, []);

  const [apiProperties, setApiProperties] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [mobF, setMobF]         = useState(false);
  const [activeType, setActiveType] = useState(null);
  const [filters, setFilters]   = useState({
    searchQuery:'',priceRange:[0,100000],stars:[],amenities:[],propertyType:[],location:[],sort:'recommended'
  });
  const [showDate, setShowDate]     = useState(false);
  const [checkIn, setCheckIn]       = useState(() => { const d=new Date();d.setDate(d.getDate()+1);return d; });
  const [checkOut, setCheckOut]     = useState(() => { const d=new Date();d.setDate(d.getDate()+3);return d; });
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests]         = useState({adults:2,children:0,rooms:1});

  useEffect(() => {
    (async () => {
      try {
        setLoading(true); setError(null);
        const res  = await fetch(`${API_BASE_URL}/homestay/admin/all`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // ✅ Handle both {success, data:[]} and plain array response
        const arr  = Array.isArray(data) ? data : (data.data || data.homestays || data.villas || []);
        setApiProperties(arr.map(h => mapApiProperty(h)));
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (mobF) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobF]);

  // ✅ Show static first, then append API data when loaded
  const allProperties = useMemo(() => {
    return [...STATIC_PROPERTIES, ...apiProperties];
  }, [apiProperties]);

  // ── Getters — work on both static & API data ─────────────────────────────
  const gN  = h => h.hotelName || h.propertyName || h.name || 'Property';
  const gI  = h => {
    const r = h.hotelImages?.[0] || h.image;
    if (!r) return FB;
    if (r.startsWith('http')) return r;
    return IMG_BASE + r.replace(/\\/g, '/');
  };
  const gP  = h => h.discountPrice || h.finalPrice || h.pricePerNight || h.price || 0;
  const gO  = h => h.pricePerNight || h.originalPrice || Math.round(gP(h) / 0.85);
  const gR  = h => h.averageRating || h.rating || 0;
  const gRv = h => h.totalReviews || h.reviews || 0;
  const gAm = h => h.amenities || [];
  const gL  = h => {
    if (h.city && h.area) return `${h.area}, ${h.city}`;
    if (h.city && h.state) return `${h.city}, ${h.state}`;
    return h.address || h.city || '';
  };
  const gD    = h => h.landmark || h.distance || '';
  const gDesc = h => h.description || '';
  const gTags = h => h.propertyHighlights || h.tags || [];
  const gDeal = h => h.featured ? 'Featured' : h.deal || null;
  const gType = h => h.propertyType || h.hotelType || h.type || 'Homestay';
  const ratLbl = r => r>=4.8?'Exceptional':r>=4.5?'Excellent':r>=4?'Very Good':r>=3.5?'Good':'';
  const fmtDt = (s,e) => `${s.toLocaleDateString('en-IN',{day:'numeric',month:'short'})} — ${e.toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})}`;
  const nights = Math.max(1, Math.round((checkOut-checkIn)/(1000*60*60*24)));

  const filtered = useMemo(() => {
    const q = filters.searchQuery.toLowerCase();
    return allProperties.filter(h => {
      const p = gP(h), am = gAm(h);
      const name = (gN(h)).toLowerCase();
      const loc  = (h.city||h.area||h.address||'').toLowerCase();
      const type = (gType(h)).toLowerCase();
      return (
        (!q || name.includes(q) || loc.includes(q)) &&
        p >= filters.priceRange[0] && p <= filters.priceRange[1] &&
        (filters.propertyType.length===0 || filters.propertyType.some(pt=>type.toLowerCase().includes(pt))) &&
        (filters.location.length===0 || filters.location.some(l=>loc.includes(l))) &&
        (filters.amenities.length===0 || filters.amenities.every(a=>am.some(x=>String(x).toLowerCase().includes(a))))
      );
    }).sort((a,b) => {
      if(filters.sort==='price_low') return gP(a)-gP(b);
      if(filters.sort==='price_high') return gP(b)-gP(a);
      if(filters.sort==='rating') return gR(b)-gR(a);
      return 0;
    });
  }, [allProperties, filters]);

  const tog = (key,val) => setFilters(f=>({...f,[key]:f[key].includes(val)?f[key].filter(x=>x!==val):[...f[key],val]}));
  const togWL = id => setWishlist(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);
  const reset = () => setFilters({searchQuery:'',priceRange:[0,100000],stars:[],amenities:[],propertyType:[],location:[],sort:'recommended'});

  const typeIco = (type='') => {
    const t = type.toLowerCase();
    if(t.includes('villa')) return '🏡';
    if(t.includes('tree')) return '🌳';
    if(t.includes('farm')) return '🚜';
    if(t.includes('boat')) return '⛵';
    if(t.includes('camp')||t.includes('glamp')) return '⛺';
    if(t.includes('chalet')) return '⛰️';
    if(t.includes('cottage')) return '🌿';
    return '🏠';
  };

  const CBox = ({on,onClick,label}) => (
    <div className="fcrow" onClick={onClick}>
      <div className={`cbox ${on?'on':''}`}>{on&&<Check size={10} color="#fff"/>}</div>
      <span className="fc-lbl">{label}</span>
    </div>
  );

  const FiltersPanel = () => (
    <>
      {mobF && <div className="fp-overlay show" onClick={()=>setMobF(false)}/>}
      <div className={`fp ${mobF?'mob-open':''}`}>
        <div className="fp-hdr">
          <div className="fp-ttl"><Filter size={15}/>Filters</div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="fp-rst" onClick={reset}>Reset</button>
            {mobF&&<button onClick={()=>setMobF(false)} style={{background:'rgba(255,255,255,.15)',border:'none',color:'#fff',borderRadius:6,padding:'4px 8px',cursor:'pointer',display:'flex',alignItems:'center'}}><X size={15}/></button>}
          </div>
        </div>
        <div className="fs">
          <div className="fs-ttl">💰 Price per Night</div>
          <div className="pi-grid">
            {[0,1].map(i=>(
              <div key={i} className="pi-box"><label>{i===0?'Min':'Max'}</label>
                <input type="number" value={filters.priceRange[i]} onChange={e=>{const nr=[...filters.priceRange];nr[i]=parseInt(e.target.value)||0;setFilters({...filters,priceRange:nr});}}/>
              </div>
            ))}
          </div>
          <input className="pslider" type="range" min="0" max="100000" value={filters.priceRange[1]}
            onChange={e=>{const nr=[...filters.priceRange];nr[1]=parseInt(e.target.value);setFilters({...filters,priceRange:nr});}}/>
        </div>
        <div className="fs">
          <div className="fs-ttl">🏠 Property Type</div>
          <div className="fclist">
            {['villa','homestay','treehouse','cottage','farmhouse','houseboat','glamping','chalet'].map(t=>(
              <CBox key={t} on={filters.propertyType.includes(t)} onClick={()=>tog('propertyType',t)} label={t.charAt(0).toUpperCase()+t.slice(1)}/>
            ))}
          </div>
        </div>
        <div className="fs">
          <div className="fs-ttl">🛜 Amenities</div>
          <div className="achips">
            {AMENITIES_OPTIONS.map(({id,label,Icon})=>(
              <div key={id} className={`achip ${filters.amenities.includes(id)?'on':''}`} onClick={()=>tog('amenities',id)}>
                <Icon size={12}/>{label}
              </div>
            ))}
          </div>
        </div>
        <div className="fs">
          <div className="fs-ttl">📍 Region</div>
          <div className="fclist">
            {['goa','kerala','coorg','manali','rajasthan','himalayas','rishikesh','pondicherry'].map(l=>(
              <CBox key={l} on={filters.location.includes(l)} onClick={()=>tog('location',l)} label={l.charAt(0).toUpperCase()+l.slice(1)}/>
            ))}
          </div>
        </div>
        {mobF&&(
          <div style={{padding:'16px 18px',borderTop:'1px solid var(--border)',position:'sticky',bottom:0,background:'#fff'}}>
            <button onClick={()=>setMobF(false)} style={{width:'100%',padding:'14px',background:'var(--green)',color:'#fff',border:'none',borderRadius:10,fontWeight:700,fontFamily:'Poppins,sans-serif',fontSize:15,cursor:'pointer',minHeight:50}}>
              Show {filtered.length} Properties
            </button>
          </div>
        )}
      </div>
    </>
  );

  // ✅ Navigate to detail page with full property data passed via state
  const goToDetail = (property) => {
    const id = property._id || property.id;
    navigate(`/homestay-details/${id}`, { state: { property } });
  };

  return (
    <div className="hr">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-eyebrow"><Flame size={12}/>50,000+ Unique Stays Across India</div>
          <h1 className="hero-h1">Discover Your Dream <span className="acc">Escape</span></h1>
          <p className="hero-sub">Handpicked villas, treehouses, farms & homestays · Real reviews · Best prices</p>
          <div className="sbox">
            <div className="sfields">
              <div className="sfield">
                <MapPin size={19} className="sfield-ico"/>
                <div style={{flex:1}}>
                  <div className="sfield-lbl">Destination / Property</div>
                  <input placeholder="Goa, Coorg, Manali…" value={filters.searchQuery}
                    onChange={e=>setFilters({...filters,searchQuery:e.target.value})}/>
                </div>
              </div>
              <div className="sfield" onClick={()=>setShowDate(true)}>
                <Calendar size={19} className="sfield-ico"/>
                <div>
                  <div className="sfield-lbl">Check-in → Check-out</div>
                  <div className="sfield-val">{fmtDt(checkIn,checkOut)}</div>
                  <div className="sfield-sub">{nights} Night{nights>1?'s':''}</div>
                </div>
              </div>
              <div className="sfield" onClick={()=>setShowGuests(true)}>
                <Users size={19} className="sfield-ico"/>
                <div>
                  <div className="sfield-lbl">Guests</div>
                  <div className="sfield-val">{guests.adults+guests.children} Guest{guests.adults+guests.children>1?'s':''}</div>
                  <div className="sfield-sub">{guests.adults} Adult{guests.adults>1?'s':''}{guests.children>0?`, ${guests.children} Child`:''}</div>
                </div>
              </div>
              <button className="sbtn"><Search size={19}/>Search</button>
            </div>
          </div>
        </div>
        <div className="strip">
          <span className="strip-lbl">Quick Filter:</span>
          {['Villa','Treehouse','Cottage','Farmhouse','Houseboat'].map(t=>(
            <button key={t} className={`spill ${activeType===t?'on':''}`}
              onClick={()=>{const nxt=activeType===t?null:t;setActiveType(nxt);setFilters(f=>({...f,propertyType:nxt?[nxt.toLowerCase()]:[]}));}}>
              {typeIco(t)} {t}
            </button>
          ))}
          <button className="spill" onClick={()=>setFilters(f=>({...f,sort:'price_low'}))}><Tag size={10}/>Lowest Price</button>
          <button className="spill" onClick={()=>setFilters(f=>({...f,sort:'rating'}))}><TrendingUp size={10}/>Top Rated</button>
        </div>
      </section>

      <PopularSection/>

      <div className="main">
        <FiltersPanel/>
        <section className="rs">
          <div className="rh">
            <div>
              <div className="rh-ttl">{`${filtered.length} Stays Found`}</div>
              <div className="rh-sub">{`Sorted: ${filters.sort==='recommended'?'Recommended':filters.sort==='price_low'?'Price (Low→High)':filters.sort==='price_high'?'Price (High→Low)':'Top Rated'}`}</div>
            </div>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <button className="mob-filter" onClick={()=>setMobF(true)}><Filter size={14}/>Filters</button>
              <div className="sort-w">
                <select className="sort-s" value={filters.sort} onChange={e=>setFilters({...filters,sort:e.target.value})}>
                  <option value="recommended">Recommended</option>
                  <option value="price_low">Price: Low → High</option>
                  <option value="price_high">Price: High → Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={13} className="sort-arr"/>
              </div>
            </div>
          </div>

          <div className="trust">
            {TRUST.map(({Icon,title,desc})=>(
              <div key={title} className="tbadge">
                <div className="tbadge-ico"><Icon size={17}/></div>
                <div><div className="tbadge-ttl">{title}</div><div className="tbadge-sub">{desc}</div></div>
              </div>
            ))}
          </div>

          {/* API loading indicator */}
          {loading && (
            <div style={{background:'#f0faf4',border:'1px solid #b8ddc4',borderRadius:10,padding:'12px 16px',display:'flex',alignItems:'center',gap:10,fontSize:13,color:'var(--green)',fontWeight:600}}>
              <div style={{width:16,height:16,border:'2px solid var(--green)',borderTopColor:'transparent',borderRadius:'50%',animation:'spin 0.8s linear infinite'}}/>
              Loading more properties from our network…
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          )}

          {!loading && error && (
            <div style={{background:'#fff8e6',border:'1px solid #f0d060',borderRadius:10,padding:'12px 16px',fontSize:13,color:'#8a6000',fontWeight:500}}>
              ⚠️ Could not load additional properties. Showing curated selection.
            </div>
          )}

          {filtered.length === 0 && (
            <div className="empty">
              <div className="empty-ico"><Search size={26}/></div>
              <div className="empty-ttl">No properties found</div>
              <div className="empty-sub">Try adjusting your filters or search terms</div>
              <button className="empty-rst" onClick={reset}>Clear all filters</button>
            </div>
          )}

          {filtered.map(property => {
            const id = property._id || property.id;
            const name=gN(property), price=gP(property), orig=gO(property), rat=gR(property), rev=gRv(property);
            const am=gAm(property), tags=gTags(property), deal=gDeal(property), loc=gL(property);
            const dist=gD(property), desc=gDesc(property), img=gI(property), type=gType(property);
            const disc = orig>price ? Math.round((1-price/orig)*100) : 0;
            return (
              <div key={id} className="hcard">
                <div className="hcard-main">
                  <div className="hcard-imgw">
                    <img src={img} alt={name} onError={e=>{e.target.src=FB;}}/>
                    <button className={`wlbtn ${wishlist.includes(id)?'loved':''}`} onClick={()=>togWL(id)}>
                      <Heart size={16} fill={wishlist.includes(id)?'currentColor':'none'}/>
                    </button>
                    {tags.length>0&&<div className="tag-badges">{tags.slice(0,2).map((t,i)=><span key={i} className="tag-badge">{t}</span>)}</div>}
                    {deal&&<div className="deal-badge"><Tag size={10}/>{deal}</div>}
                  </div>
                  <div className="hcard-body">
                    <div className="hcard-top">
                      <div className="htype-pill">{typeIco(type)} {type.charAt(0).toUpperCase()+type.slice(1)}</div>
                      <h3 className="hname">{name}</h3>
                      <div className="hmeta">
                        <div className="hloc"><MapPin size={13}/>{loc||'India'}</div>
                        {dist&&<span className="hdist">{dist}</span>}
                      </div>
                      <div className="hrat-row">
                        {rat>0&&<div className="rpill"><Star size={12} fill="white" stroke="white"/>{Number(rat).toFixed(1)}</div>}
                        {rat>0&&<span className="rlbl">{ratLbl(rat)}</span>}
                        {rev>0&&<span className="rrev">{rev.toLocaleString()} reviews</span>}
                      </div>
                      {desc&&<p className="hdesc">{desc}</p>}
                      {am.length>0&&(
                        <div className="hams">
                          {am.slice(0,6).map((a,i)=>{
                            const opt=AMENITIES_OPTIONS.find(x=>x.id===String(a).toLowerCase()||x.label.toLowerCase()===String(a).toLowerCase());
                            return <div key={i} className="am-pill">{opt?<><opt.Icon size={11}/>{opt.label}</>:<span>{String(a)}</span>}</div>;
                          })}
                        </div>
                      )}
                    </div>
                    <div className="hfooter">
                      <div>
                        {disc>0&&<div className="price-was">₹{Number(orig).toLocaleString()}<span className="disc-badge">{disc}% off</span></div>}
                        <div className="price-main">₹{Number(price).toLocaleString()}</div>
                        <div className="price-per">per night · incl. taxes</div>
                      </div>
                      <div className="cactions">
                        {/* ✅ Pass full property via state so detail page gets all data */}
                        <button className="btn-d" onClick={()=>goToDetail(property)}>Details</button>
                        <button className="btn-b" onClick={()=>goToDetail(property)}>Book Now<ChevronRight size={15}/></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      <DateModal isOpen={showDate} onClose={()=>setShowDate(false)} onSelect={(s,e)=>{setCheckIn(s);setCheckOut(e);setShowDate(false);}} checkIn={checkIn} checkOut={checkOut}/>
      <GuestsModal isOpen={showGuests} onClose={()=>setShowGuests(false)} onApply={(a,c,r)=>{setGuests({adults:a,children:c,rooms:r});setShowGuests(false);}} guests={guests}/>
    </div>
  );
};

export default HomestayVilla;

