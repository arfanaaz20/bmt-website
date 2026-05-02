import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, MapPin, Calendar, Users, Star, Filter, Heart, ChevronRight,
  ChevronDown, X, Check,
  Wifi, Coffee, Car, Dumbbell, Waves, ChefHat, ShoppingBag,
  Sparkles, Shield, Award, Clock, ChevronLeft, Flame, TrendingUp, Tag, BedDouble,
  Maximize2, Users2, Wind, Tv, Bath
} from 'lucide-react';

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --red:#e8232a;--red-d:#c01c22;--blue:#008cff;--navy:#0a2463;
  --orange:#ff6f00;--yellow:#ffc107;--green:#00897b;
  --bg:#f5f7fa;--card:#ffffff;--border:#e8ecf0;
  --t1:#212b36;--t2:#637381;--t3:#919eab;
  --sh-card:0 2px 12px rgba(0,0,0,.08);--sh-hover:0 8px 32px rgba(0,0,0,.13);
  --r:12px;--rl:16px;
}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--t1);-webkit-tap-highlight-color:transparent}
.hr{min-height:100vh}

/* HERO */
.hero{background:linear-gradient(135deg,#0a2463 0%,#1a3a8f 45%,#c01c22 100%);position:relative;overflow:hidden;padding-bottom:48px}
.hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=1600&q=60') center/cover;opacity:.12}
.hero-bar{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:18px 40px 0;max-width:1280px;margin:0 auto}
.hero-logo{font-family:'Poppins',sans-serif;font-size:26px;font-weight:900;color:#fff;letter-spacing:-.5px}
.hero-logo b{color:var(--yellow)}
.hero-nav{display:flex;gap:22px}
.hero-nav a{color:rgba(255,255,255,.78);font-size:13px;font-weight:500;text-decoration:none;transition:color .2s}
.hero-nav a:hover{color:#fff}
.hero-content{position:relative;z-index:2;text-align:center;padding:38px 16px 30px;max-width:920px;margin:0 auto}
.hero-eyebrow{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.22);padding:5px 14px;border-radius:99px;color:#fff;font-size:12px;font-weight:600;margin-bottom:14px;letter-spacing:.3px}
.hero-h1{font-family:'Poppins',sans-serif;font-size:50px;font-weight:900;color:#fff;line-height:1.1;margin-bottom:10px;text-shadow:0 2px 20px rgba(0,0,0,.18)}
.hero-h1 .acc{color:var(--yellow)}
.hero-sub{color:rgba(255,255,255,.72);font-size:15px;margin-bottom:30px}

/* SEARCH BOX */
.sbox{background:#fff;border-radius:var(--rl);box-shadow:0 20px 60px rgba(0,0,0,.2);overflow:hidden;max-width:920px;margin:0 auto}
.sfields{display:grid;grid-template-columns:2fr 1.5fr 1.2fr auto;min-height:78px}
.sfield{display:flex;align-items:center;gap:12px;padding:15px 20px;border-right:1px solid var(--border);cursor:pointer;transition:background .2s;min-height:72px}
.sfield:hover{background:#fafbfc}
.sfield-ico{color:var(--red);flex-shrink:0}
.sfield-lbl{font-size:10px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.8px;margin-bottom:3px}
.sfield-val{font-size:15px;font-weight:700;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sfield-sub{font-size:11px;color:var(--t2);margin-top:1px}
.sfield input{border:none;outline:none;font-size:15px;font-weight:700;color:var(--t1);background:transparent;width:100%;font-family:'Inter',sans-serif}
.sfield input::placeholder{color:#b0bac4;font-weight:500}
.sbtn{background:linear-gradient(135deg,var(--red),var(--red-d));color:#fff;border:none;padding:0 36px;font-size:16px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;transition:all .25s;display:flex;align-items:center;justify-content:center;gap:8px;min-height:72px}
.sbtn:hover{box-shadow:0 4px 20px rgba(232,35,42,.4);filter:brightness(1.05)}
.strip{position:relative;z-index:2;display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center;padding:18px 16px 0}
.strip-lbl{color:rgba(255,255,255,.68);font-size:12px;font-weight:600;letter-spacing:.3px}
.spill{display:flex;align-items:center;gap:5px;padding:6px 14px;border-radius:99px;border:1px solid rgba(255,255,255,.32);background:rgba(255,255,255,.1);color:#fff;font-size:12px;font-weight:600;cursor:pointer;backdrop-filter:blur(8px);transition:all .2s;min-height:36px}
.spill:hover,.spill.on{background:rgba(255,255,255,.22);border-color:rgba(255,255,255,.55)}

/* POPULAR */
.pop-sec{background:#fff;padding:40px 0;border-bottom:1px solid var(--border)}
.pop-in{max-width:1280px;margin:0 auto;padding:0 20px}
.sec-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
.sec-ttl{font-family:'Poppins',sans-serif;font-size:20px;font-weight:800;color:var(--t1)}
.sec-ttl span{color:var(--red)}
.see-all{display:flex;align-items:center;gap:4px;color:var(--red);font-size:13px;font-weight:700;background:none;border:none;cursor:pointer;white-space:nowrap}
.see-all:hover{text-decoration:underline}
.ctabs{display:flex;gap:8px;margin-bottom:22px;flex-wrap:nowrap;overflow-x:auto;padding-bottom:4px;-webkit-overflow-scrolling:touch}
.ctabs::-webkit-scrollbar{display:none}
.ctab{padding:7px 16px;border-radius:99px;font-size:13px;font-weight:600;border:1.5px solid var(--border);background:#fff;color:var(--t2);cursor:pointer;transition:all .2s;white-space:nowrap;flex-shrink:0;min-height:36px}
.ctab.on{background:var(--red);color:#fff;border-color:var(--red)}
.ctab:hover:not(.on){border-color:var(--red);color:var(--red)}
.cw{position:relative}
.ctrack{display:flex;gap:14px;overflow-x:auto;padding-bottom:8px;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}
.ctrack::-webkit-scrollbar{height:3px}
.ctrack::-webkit-scrollbar-track{background:#e8ecf0;border-radius:99px}
.ctrack::-webkit-scrollbar-thumb{background:var(--red);border-radius:99px}
.cbtn{position:absolute;top:50%;transform:translateY(-50%);z-index:10;width:38px;height:38px;border-radius:50%;background:#fff;border:1.5px solid var(--border);box-shadow:0 2px 12px rgba(0,0,0,.12);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;color:var(--t1)}
.cbtn:hover{background:var(--red);color:#fff;border-color:var(--red)}
.cbtn.lft{left:-10px}.cbtn.rgt{right:-10px}
.pcard{flex:none;width:210px;background:#fff;border-radius:var(--r);border:1px solid var(--border);overflow:hidden;cursor:pointer;transition:all .25s}
.pcard:hover{box-shadow:var(--sh-hover);transform:translateY(-3px)}
.pcard:active{transform:scale(.98)}
.pcard-img{position:relative;height:140px;overflow:hidden}
.pcard-img img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.pcard:hover .pcard-img img{transform:scale(1.07)}
.pcard-score{position:absolute;bottom:9px;left:9px;background:rgba(10,36,99,.88);backdrop-filter:blur(6px);color:#fff;font-size:11px;font-weight:700;padding:4px 9px;border-radius:6px;display:flex;align-items:center;gap:5px}
.pcard-body{padding:11px}
.pcard-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:4px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.pcard-stars{display:flex;gap:2px;margin-bottom:5px}
.pcard-addr{font-size:11px;color:var(--t2);line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:7px}
.pcard-price{font-size:15px;font-weight:800;color:var(--t1)}
.pcard-price span{font-size:11px;font-weight:500;color:var(--t2)}

/* LAYOUT */
.main{max-width:1280px;margin:0 auto;padding:20px 16px;display:grid;grid-template-columns:260px 1fr;gap:20px}

/* FILTERS */
.fp{background:#fff;border-radius:var(--rl);border:1px solid var(--border);overflow:hidden;align-self:start;position:sticky;top:16px}
.fp-hdr{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:linear-gradient(135deg,#0a2463,#1a3a8f)}
.fp-ttl{font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;color:#fff;display:flex;align-items:center;gap:7px}
.fp-rst{font-size:12px;font-weight:600;color:rgba(255,255,255,.72);background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.25);border-radius:6px;padding:3px 10px;cursor:pointer}
.fp-rst:hover{background:rgba(255,255,255,.22);color:#fff}
.fs{padding:16px 18px;border-bottom:1px solid var(--border)}
.fs:last-child{border-bottom:none}
.fs-ttl{font-size:11px;font-weight:700;color:var(--t1);text-transform:uppercase;letter-spacing:.6px;margin-bottom:12px}
.pi-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
.pi-box{background:#f8f9fa;border:1.5px solid var(--border);border-radius:8px;padding:8px 11px}
.pi-box label{display:block;font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:3px}
.pi-box input{width:100%;background:none;border:none;outline:none;font-size:14px;font-weight:700;color:var(--t1);font-family:'Inter',sans-serif}
.pslider{width:100%;accent-color:var(--red);height:4px;cursor:pointer}
.fclist{display:flex;flex-direction:column;gap:9px}
.fcrow{display:flex;align-items:center;gap:9px;cursor:pointer;min-height:32px}
.cbox{width:17px;height:17px;border-radius:4px;border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all .18s}
.cbox.on{background:var(--red);border-color:var(--red)}
.fc-lbl{font-size:13px;color:var(--t1);font-weight:500;flex:1}
.star-row{display:flex;align-items:center;gap:7px;cursor:pointer;min-height:32px}
.star-row .cbox{flex-shrink:0}
.achips{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.achip{display:flex;align-items:center;gap:5px;padding:8px 9px;border-radius:8px;border:1.5px solid var(--border);font-size:11px;font-weight:600;color:var(--t2);cursor:pointer;transition:all .18s;background:#fff;min-height:36px}
.achip.on{border-color:var(--red);color:var(--red);background:#fff5f5}
.achip:hover:not(.on){border-color:#c0c8d0}

/* RESULTS */
.rs{display:flex;flex-direction:column;gap:14px}
.rh{background:#fff;border-radius:var(--r);border:1px solid var(--border);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
.rh-ttl{font-family:'Poppins',sans-serif;font-size:16px;font-weight:800;color:var(--t1)}
.rh-sub{font-size:12px;color:var(--t2);margin-top:2px}
.sort-w{position:relative}
.sort-s{appearance:none;background:#f5f7fa;border:1.5px solid var(--border);border-radius:8px;padding:8px 34px 8px 13px;font-size:13px;font-weight:600;color:var(--t1);cursor:pointer;outline:none;font-family:'Inter',sans-serif;min-height:40px}
.sort-s:focus{border-color:var(--red)}
.sort-arr{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--t2)}
.mob-filter{display:none;align-items:center;gap:6px;padding:8px 14px;border:1.5px solid var(--border);border-radius:8px;background:#fff;font-size:13px;font-weight:700;cursor:pointer;min-height:40px}

/* TRUST STRIP */
.trust{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.tbadge{background:linear-gradient(135deg,#f0f7ff,#e8f4fd);border:1px solid #c8dff5;border-radius:var(--r);padding:12px 13px;display:flex;align-items:flex-start;gap:10px}
.tbadge-ico{background:#fff;padding:7px;border-radius:8px;color:var(--blue);box-shadow:0 1px 4px rgba(0,0,0,.08);flex-shrink:0}
.tbadge-ttl{font-size:12px;font-weight:700;color:#0a2463;margin-bottom:2px}
.tbadge-sub{font-size:10px;color:#4a6fa5}

/* SKELETON */
.skel{animation:pulse 1.5s ease-in-out infinite}
.skel-b{background:#e8ecf0;border-radius:8px}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}

/* HOTEL CARD */
.hcard{background:#fff;border-radius:var(--rl);border:1px solid var(--border);overflow:hidden;display:flex;transition:all .25s;flex-direction:column}
.hcard:hover{box-shadow:var(--sh-hover);transform:translateY(-2px)}
.hcard-main{display:flex}
.hcard-imgw{position:relative;width:260px;flex-shrink:0;overflow:hidden;min-height:210px}
.hcard-imgw img{width:100%;height:100%;object-fit:cover;transition:transform .5s}
.hcard:hover .hcard-imgw img{transform:scale(1.06)}
.wlbtn{position:absolute;top:12px;right:12px;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.9);backdrop-filter:blur(8px);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#bbb;transition:all .2s;box-shadow:0 1px 6px rgba(0,0,0,.12)}
.wlbtn.loved{color:var(--red)}.wlbtn:hover{color:var(--red);background:#fff}
.deal-badge{position:absolute;bottom:12px;left:12px;background:var(--red);color:#fff;font-size:10px;font-weight:700;padding:4px 10px;border-radius:6px;display:flex;align-items:center;gap:4px}
.tag-badges{position:absolute;top:12px;left:12px;display:flex;flex-direction:column;gap:4px}
.tag-badge{background:rgba(255,255,255,.9);font-size:10px;font-weight:700;color:var(--t1);padding:3px 8px;border-radius:5px}
.hcard-body{flex:1;padding:16px 18px;display:flex;flex-direction:column;min-width:0}
.hcard-top{flex:1}
.hname{font-family:'Poppins',sans-serif;font-size:17px;font-weight:800;color:var(--t1);margin-bottom:5px;line-height:1.3;transition:color .2s}
.hcard:hover .hname{color:var(--red)}
.hmeta{display:flex;align-items:center;gap:8px;margin-bottom:7px;flex-wrap:wrap}
.hloc{display:flex;align-items:center;gap:4px;font-size:12px;color:var(--t2)}
.hloc svg{color:var(--red)}
.hdist{font-size:11px;color:var(--t3);background:#f5f7fa;padding:2px 8px;border-radius:99px}
.hrat-row{display:flex;align-items:center;gap:8px;margin-bottom:9px;flex-wrap:wrap}
.rpill{display:flex;align-items:center;gap:5px;background:var(--navy);color:#fff;padding:4px 10px;border-radius:6px;font-size:13px;font-weight:700}
.rlbl{font-size:13px;font-weight:600;color:var(--t1)}
.rrev{font-size:12px;color:var(--t2)}
.hdesc{font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:11px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.hams{display:flex;flex-wrap:wrap;gap:5px}
.am-pill{display:flex;align-items:center;gap:5px;background:#f5f7fa;border:1px solid var(--border);padding:4px 8px;border-radius:6px;font-size:11px;font-weight:600;color:var(--t2)}
.hfooter{border-top:1px solid var(--border);margin-top:13px;padding-top:12px;display:flex;align-items:flex-end;justify-content:space-between;gap:10px;flex-wrap:wrap}
.price-was{font-size:12px;color:var(--t3);text-decoration:line-through;margin-bottom:2px}
.disc-badge{display:inline-block;background:#e6f4ea;color:var(--green);font-size:10px;font-weight:700;padding:1px 6px;border-radius:4px;margin-left:6px}
.price-main{font-family:'Poppins',sans-serif;font-size:23px;font-weight:900;color:var(--t1);line-height:1}
.price-per{font-size:11px;color:var(--t2);margin-top:2px}
.cactions{display:flex;gap:8px;flex-shrink:0}
.btn-d{padding:10px 14px;border-radius:8px;border:1.5px solid var(--border);font-size:13px;font-weight:700;color:var(--t1);background:#fff;cursor:pointer;transition:all .2s;min-height:42px}
.btn-d:hover{border-color:var(--red);color:var(--red)}
.btn-b{padding:10px 18px;border-radius:8px;border:none;background:linear-gradient(135deg,var(--red),var(--red-d));color:#fff;font-size:13px;font-weight:700;cursor:pointer;transition:all .25s;font-family:'Poppins',sans-serif;display:flex;align-items:center;gap:5px;white-space:nowrap;min-height:42px}
.btn-b:hover{box-shadow:0 4px 16px rgba(232,35,42,.35);transform:translateY(-1px)}
.btn-b:active{transform:scale(.97)}

/* ROOM TYPES */
.rts-wrap{border-top:1px solid var(--border);background:#f8f9fa}
.rts-trigger{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;cursor:pointer;transition:background .18s;user-select:none;gap:10px;min-height:60px}
.rts-trigger:hover{background:#f0f2f5}
.rts-trigger:active{background:#eaecef}
.rts-trigger-left{display:flex;align-items:center;gap:10px;flex:1;min-width:0}
.rts-icon-wrap{width:32px;height:32px;border-radius:8px;background:linear-gradient(135deg,#fff0f0,#ffe0e0);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.rts-trigger-lbl{font-size:13px;font-weight:700;color:var(--navy);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rts-trigger-sub{font-size:11px;color:var(--t2);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rts-sel-badge{background:var(--red);color:#fff;font-size:10px;font-weight:700;padding:2px 9px;border-radius:99px;white-space:nowrap;flex-shrink:0}
.rts-chevron{color:var(--t2);transition:transform .22s;flex-shrink:0}
.rts-chevron.open{transform:rotate(180deg)}
.rts-panel{padding:0 16px 16px;animation:rtsSlide .22s ease}
@keyframes rtsSlide{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
.rts-panel-hdr{font-size:11px;font-weight:700;color:var(--t2);text-transform:uppercase;letter-spacing:.5px;margin-bottom:12px;display:flex;align-items:center;gap:6px}
.rts-track{display:flex;gap:10px;overflow-x:auto;padding-bottom:6px;scroll-behavior:smooth;-webkit-overflow-scrolling:touch}
.rts-track::-webkit-scrollbar{height:3px}
.rts-track::-webkit-scrollbar-track{background:#e8ecf0;border-radius:99px}
.rts-track::-webkit-scrollbar-thumb{background:var(--red);border-radius:99px}
.rtc{flex:none;width:190px;background:#fff;border-radius:12px;border:2px solid var(--border);overflow:hidden;cursor:pointer;transition:all .22s;position:relative;display:flex;flex-direction:column}
.rtc:hover{border-color:#ccc;box-shadow:0 4px 18px rgba(0,0,0,.1);transform:translateY(-2px)}
.rtc:active{transform:scale(.97)}
.rtc.rtc-sel{border-color:var(--red);box-shadow:0 4px 20px rgba(232,35,42,.2)}
.rtc-img{position:relative;height:115px;overflow:hidden;background:#e8ecf0;flex-shrink:0}
.rtc-img img{width:100%;height:100%;object-fit:cover;transition:transform .45s}
.rtc:hover .rtc-img img{transform:scale(1.07)}
.rtc-disc{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(90deg,#00695c,#00897b);color:#fff;font-size:10px;font-weight:700;padding:3px 10px;text-align:center;letter-spacing:.3px}
.rtc-badge{position:absolute;top:8px;left:8px;background:rgba(10,36,99,.78);backdrop-filter:blur(4px);color:#fff;font-size:9px;font-weight:700;padding:3px 8px;border-radius:5px}
.rtc-chk{position:absolute;top:8px;right:8px;width:22px;height:22px;border-radius:50%;background:var(--red);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(232,35,42,.45);z-index:2}
.rtc-body{padding:9px 10px 10px;flex:1;display:flex;flex-direction:column;gap:5px}
.rtc-type{display:inline-flex;align-items:center;gap:4px;background:#fff5f5;color:var(--red);font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;text-transform:uppercase;letter-spacing:.4px;width:fit-content}
.rtc-name{font-size:12px;font-weight:800;color:var(--t1);line-height:1.3}
.rtc-specs{display:flex;flex-wrap:wrap;gap:4px;margin-top:1px}
.rtc-spec{display:flex;align-items:center;gap:3px;font-size:10px;font-weight:600;color:var(--t2);background:#f5f7fa;padding:2px 6px;border-radius:5px}
.rtc-spec.green{color:#00695c;background:#e8f5f0}
.rtc-ams{display:flex;flex-wrap:wrap;gap:3px;margin-top:3px}
.rtc-am{display:flex;align-items:center;gap:3px;font-size:9px;color:var(--t2);font-weight:500;background:#f0f2f5;padding:2px 5px;border-radius:4px}
.rtc-am.more{color:var(--red);background:#fff5f5;font-weight:700}
.rtc-foot{margin-top:auto;padding-top:8px;border-top:1px solid var(--border);display:flex;align-items:flex-end;justify-content:space-between;gap:5px}
.rtc-orig{font-size:10px;color:var(--t3);text-decoration:line-through;line-height:1;margin-bottom:2px}
.rtc-price{font-family:'Poppins',sans-serif;font-size:14px;font-weight:900;color:var(--t1);line-height:1}
.rtc-per{font-size:9px;color:var(--t2);margin-top:2px}
.rtc-btn{padding:7px 10px;border-radius:7px;border:1.5px solid var(--red);background:#fff;color:var(--red);font-size:11px;font-weight:700;cursor:pointer;transition:all .18s;white-space:nowrap;font-family:'Poppins',sans-serif;flex-shrink:0;min-height:34px}
.rtc.rtc-sel .rtc-btn{background:var(--red);color:#fff}
.rtc-btn:hover{background:var(--red);color:#fff}
.rts-sel-bar{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(90deg,#fff5f5,#fff9f9);border-top:1px solid #ffd0d0;padding:10px 16px;gap:10px;flex-wrap:wrap}
.rts-sel-left{display:flex;align-items:center;gap:8px;flex:1;min-width:0}
.rts-sel-dot{width:8px;height:8px;border-radius:50%;background:var(--red);flex-shrink:0}
.rts-sel-name{font-size:12px;font-weight:700;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rts-sel-meta{font-size:11px;color:var(--t2)}
.rts-sel-right{display:flex;align-items:center;gap:8px;flex-shrink:0}
.rts-sel-price{font-size:13px;color:var(--red);font-weight:800;font-family:'Poppins',sans-serif}
.rts-change{font-size:11px;color:var(--t2);background:none;border:1px solid var(--border);padding:4px 10px;border-radius:6px;cursor:pointer;font-weight:600;transition:all .18s;min-height:32px}
.rts-change:hover{border-color:var(--red);color:var(--red)}

/* EMPTY */
.empty{text-align:center;padding:60px 20px;background:#fff;border-radius:var(--rl);border:2px dashed var(--border)}
.empty-ico{width:60px;height:60px;border-radius:50%;background:#fff5f5;color:var(--red);display:flex;align-items:center;justify-content:center;margin:0 auto 14px}
.empty-ttl{font-family:'Poppins',sans-serif;font-size:18px;font-weight:700;margin-bottom:6px}
.empty-sub{font-size:14px;color:var(--t2);margin-bottom:18px}
.empty-rst{color:var(--red);font-weight:700;background:none;border:none;cursor:pointer;font-size:14px;text-decoration:underline}

/* MODAL */
.mov{position:fixed;inset:0;z-index:9999;display:flex;align-items:flex-end;justify-content:center;background:rgba(10,36,99,.42);backdrop-filter:blur(4px);padding:0}
.mcard{background:#fff;border-radius:var(--rl) var(--rl) 0 0;box-shadow:0 -8px 40px rgba(0,0,0,.18);width:100%;max-width:480px;overflow:hidden;max-height:92vh;overflow-y:auto}
.mhdr{display:flex;align-items:center;justify-content:space-between;padding:17px 20px;background:linear-gradient(135deg,#0a2463,#1a3a8f);position:sticky;top:0;z-index:2}
.mhdr h3{font-family:'Poppins',sans-serif;font-size:16px;font-weight:700;color:#fff}
.mclose{background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:6px;padding:7px;cursor:pointer;display:flex;min-width:36px;min-height:36px;align-items:center;justify-content:center}
.mbody{padding:20px}
.cal-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
.cal-nbtn{background:#f5f7fa;border:1px solid var(--border);border-radius:8px;padding:8px;cursor:pointer;display:flex;color:var(--t1);transition:all .2s;min-width:40px;min-height:40px;align-items:center;justify-content:center}
.cal-nbtn:hover{background:var(--red);color:#fff;border-color:var(--red)}
.cal-month{font-family:'Poppins',sans-serif;font-size:15px;font-weight:700}
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:14px}
.cal-dh{text-align:center;font-size:11px;font-weight:700;color:var(--t3);padding:5px 0}
.cal-d{height:40px;display:flex;align-items:center;justify-content:center;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:none;background:none;transition:all .15s;width:100%}
.cal-d:hover:not(:disabled){background:#f5f7fa}
.cal-d.past{color:#d1d5db;cursor:not-allowed}
.cal-d.inr{background:#fff0f0;color:var(--red);border-radius:0}
.cal-d.sd{background:var(--red);color:#fff;border-radius:8px 0 0 8px}
.cal-d.ed{background:var(--red);color:#fff;border-radius:0 8px 8px 0}
.cal-d.sd.ed{border-radius:8px}
.cal-sum{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;background:#f5f7fa;border-radius:10px;padding:13px;margin-bottom:14px}
.cal-db label{display:block;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:var(--t2);margin-bottom:3px}
.cal-db span{font-size:14px;font-weight:700;color:var(--t1)}
.cal-div{width:18px;height:2px;background:var(--border)}
.cal-apply{width:100%;padding:14px;background:linear-gradient(135deg,var(--red),var(--red-d));color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;min-height:50px}
.cal-apply:disabled{opacity:.42;cursor:not-allowed}
.gcrow{display:flex;align-items:center;justify-content:space-between;padding:15px 0;border-bottom:1px solid var(--border)}
.gcrow:last-of-type{border-bottom:none}
.gc-lbl{font-size:15px;font-weight:600}
.gc-sub{font-size:12px;color:var(--t2);margin-top:1px}
.gc-ctrl{display:flex;align-items:center;gap:14px}
.gc-btn{width:40px;height:40px;border-radius:50%;border:1.5px solid var(--border);background:#fff;cursor:pointer;font-size:18px;font-weight:600;display:flex;align-items:center;justify-content:center;transition:all .18s}
.gc-btn:hover{border-color:var(--red);color:var(--red)}
.gc-val{font-size:16px;font-weight:700;min-width:24px;text-align:center}
.g-apply{width:100%;margin-top:18px;padding:14px;background:linear-gradient(135deg,var(--red),var(--red-d));color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;font-family:'Poppins',sans-serif;min-height:50px}

/* ═══ MOBILE FILTER OVERLAY ═══ */
.fp-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:9997;backdrop-filter:blur(2px)}
.fp-overlay.show{display:block}
.fp.mob-open{display:block!important;position:fixed;bottom:0;left:0;right:0;top:auto;z-index:9998;border-radius:var(--rl) var(--rl) 0 0;max-height:88vh;overflow-y:auto;border:none;box-shadow:0 -8px 40px rgba(0,0,0,.2)}

/* ═══ RESPONSIVE BREAKPOINTS ═══ */

/* Tablet */
@media(max-width:1024px){
  .main{grid-template-columns:1fr;padding:16px}
  .fp{display:none}
  .fp.mob-open{display:block}
  .mob-filter{display:flex!important}
  .trust{grid-template-columns:repeat(3,1fr)}
}

/* Large Mobile */
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
  .spill{font-size:11px;padding:5px 11px}

  .hcard-main{flex-direction:column}
  .hcard-imgw{width:100%;height:200px;min-height:200px}
  .hcard-body{padding:14px}
  .hname{font-size:16px}
  .hfooter{flex-direction:column;align-items:stretch}
  .cactions{justify-content:stretch}
  .btn-d{flex:1;text-align:center;padding:12px}
  .btn-b{flex:2;justify-content:center;padding:12px}

  .trust{grid-template-columns:1fr}
  .tbadge{padding:12px}

  .rh{padding:12px 14px}
  .rh-ttl{font-size:15px}

  .main{padding:12px}
  .rs{gap:12px}

  .pcard{width:180px}
  .pcard-img{height:125px}

  .cbtn{display:none}
  .pop-in{padding:0 16px}
}

/* Small Mobile */
@media(max-width:480px){
  .hero-h1{font-size:26px}
  .hero-eyebrow{font-size:11px;padding:4px 12px}
  .hero-sub{font-size:13px;margin-bottom:20px}

  .sfield{min-height:58px;padding:12px 14px}
  .sfield input{font-size:14px}
  .sfield-val{font-size:14px}

  .trust{gap:8px}
  .tbadge-ttl{font-size:11px}
  .tbadge-sub{font-size:10px}

  .hname{font-size:15px}
  .price-main{font-size:20px}

  .rtc{width:170px}
  .rts-trigger{padding:11px 14px}

  .pcard{width:165px}
  .ctab{font-size:12px;padding:6px 13px}

  .mcard{border-radius:var(--rl) var(--rl) 0 0}
  .cal-d{height:38px;font-size:12px}

  .sec-ttl{font-size:17px}

  .strip-lbl{display:none}
  .strip{gap:7px}
}
`;

const ROOM_TYPES_DATA = [
  {id:'deluxe-std',type:'Deluxe',emoji:'🛏️',name:'Deluxe Room',image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',size:'28 sq.m',guests:2,originalPrice:6500,price:5299,discount:18,amenities:['Free WiFi','Breakfast','AC','TV'],highlight:'City View',badge:null},
  {id:'deluxe-pool',type:'Deluxe',emoji:'🏊',name:'Deluxe Pool View',image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',size:'30 sq.m',guests:2,originalPrice:7800,price:6499,discount:17,amenities:['Free WiFi','Breakfast','AC','Pool'],highlight:'Pool View',badge:'Most Popular'},
  {id:'premium-sea',type:'Premium',emoji:'⭐',name:'Premium Sea View',image:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',size:'36 sq.m',guests:2,originalPrice:10500,price:8999,discount:14,amenities:['Free WiFi','Breakfast','AC','Minibar','Bathtub'],highlight:'Sea View',badge:null},
  {id:'suite-junior',type:'Suite',emoji:'✨',name:'Junior Suite',image:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80',size:'52 sq.m',guests:3,originalPrice:18000,price:14999,discount:17,amenities:['Free WiFi','All Meals','AC','Jacuzzi','Club Lounge'],highlight:'Garden View',badge:'Top Pick'},
  {id:'suite-exec',type:'Suite',emoji:'💼',name:'Executive Suite',image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80',size:'65 sq.m',guests:3,originalPrice:24000,price:19999,discount:17,amenities:['Free WiFi','All Meals','AC','Butler','Lounge Access'],highlight:'City Panorama',badge:null},
  {id:'presidential',type:'Presidential',emoji:'👑',name:'Presidential Suite',image:'https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80',size:'120 sq.m',guests:4,originalPrice:60000,price:49999,discount:17,amenities:['Free WiFi','All Meals','Private Pool','Butler','Spa','Limo'],highlight:'Panoramic View',badge:'🏆 Luxury'},
];

const AMENITIES_OPTIONS = [
  {id:'wifi',label:'Free WiFi',Icon:Wifi},
  {id:'breakfast',label:'Breakfast',Icon:Coffee},
  {id:'parking',label:'Parking',Icon:Car},
  {id:'pool',label:'Pool',Icon:Waves},
  {id:'gym',label:'Gym',Icon:Dumbbell},
  {id:'spa',label:'Spa',Icon:Sparkles},
  {id:'restaurant',label:'Restaurant',Icon:ChefHat},
  {id:'shop',label:'Shopping',Icon:ShoppingBag},
];
const TRUST = [
  {Icon:Shield,title:'Price Match Guarantee',desc:"We'll match any lower price you find"},
  {Icon:Award,title:'Verified Reviews',desc:'Only from real guests like you'},
  {Icon:Clock,title:'24/7 Support',desc:'We are always here to help you'},
];
const POPULAR_CITIES = ['New Delhi','Mumbai','Bengaluru','Jaipur','Goa'];
const POP = {
  'New Delhi':[
    {id:'p1',name:'Roseate House New Delhi',stars:5,rating:8.8,reviews:113,address:'GMR Hospitality District, Aerocity',price:10773,image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'},
    {id:'p2',name:'Pride Plaza Hotel Aerocity',stars:5,rating:8.5,reviews:222,address:'IGI Airport, Aerocity, New Delhi',price:7790,image:'https://images.unsplash.com/photo-1551882547-ff40c4fe1fa7?w=600&q=80'},
    {id:'p3',name:'Ibis New Delhi Aerocity',stars:4,rating:8.3,reviews:306,address:'IGI Rd, Aerocity, New Delhi',price:5298,image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'},
    {id:'p4',name:'Welcomhotel by ITC Dwarka',stars:5,rating:8.4,reviews:121,address:'District Center, Sector 10 Dwarka',price:5557,image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80'},
    {id:'p5',name:'The Leela Palace New Delhi',stars:5,rating:9.1,reviews:89,address:'Diplomatic Enclave, Chanakyapuri',price:18500,image:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80'},
  ],
  'Mumbai':[
    {id:'m1',name:'The Taj Mahal Palace',stars:5,rating:9.2,reviews:412,address:'Apollo Bunder, Colaba',price:22000,image:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'},
    {id:'m2',name:'JW Marriott Juhu',stars:5,rating:8.9,reviews:287,address:'Juhu Tara Road, Mumbai',price:14500,image:'https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80'},
    {id:'m3',name:'Trident Nariman Point',stars:5,rating:8.7,reviews:198,address:'Nariman Point, Sea View',price:11200,image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'},
    {id:'m4',name:'Novotel Juhu Beach',stars:4,rating:8.2,reviews:345,address:'Balraj Sahani Marg, Juhu',price:7800,image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'},
  ],
  'Bengaluru':[
    {id:'b1',name:'The Oberoi Bengaluru',stars:5,rating:9.0,reviews:156,address:'37-39 MG Road, Bengaluru',price:16800,image:'https://images.unsplash.com/photo-1551882547-ff40c4fe1fa7?w=600&q=80'},
    {id:'b2',name:'ITC Windsor Bengaluru',stars:5,rating:8.8,reviews:203,address:'25 Golf Course Road',price:12400,image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80'},
    {id:'b3',name:'Taj West End',stars:5,rating:9.1,reviews:178,address:'25 Race Course Road',price:14200,image:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80'},
    {id:'b4',name:'Sheraton Grand',stars:5,rating:8.5,reviews:267,address:'Whitefield Main Road',price:9600,image:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'},
  ],
  'Jaipur':[
    {id:'j1',name:'Rambagh Palace',stars:5,rating:9.3,reviews:321,address:'Bhawani Singh Rd',price:28000,image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'},
    {id:'j2',name:'Fairmont Jaipur',stars:5,rating:8.9,reviews:189,address:'Riico Institutional Area, Kukas',price:13500,image:'https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80'},
    {id:'j3',name:'ITC Rajputana',stars:5,rating:8.6,reviews:244,address:'Palace Road',price:9800,image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'},
    {id:'j4',name:'Hilton Jaipur',stars:5,rating:8.4,reviews:156,address:'Ashram Marg, Jaipur',price:8200,image:'https://images.unsplash.com/photo-1551882547-ff40c4fe1fa7?w=600&q=80'},
  ],
  'Goa':[
    {id:'g1',name:'Taj Exotica Resort & Spa',stars:5,rating:9.2,reviews:398,address:'Benaulim, South Goa',price:19500,image:'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80'},
    {id:'g2',name:'Park Hyatt Goa',stars:5,rating:9.0,reviews:312,address:'Arossim Beach, South Goa',price:16200,image:'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80'},
    {id:'g3',name:'Leela Goa',stars:5,rating:8.8,reviews:276,address:'Mobor, Cavelossim, South Goa',price:14800,image:'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80'},
    {id:'g4',name:'W Goa',stars:5,rating:8.7,reviews:201,address:'Vagator Beach, North Goa',price:13200,image:'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80'},
  ],
};
const BASE_URL = 'https://bmtadmin.onrender.com/';

/* ══ ROOM TYPES SECTION ══ */
const RoomTypesSection = ({ hotelId, hotelName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const selectedRoom = ROOM_TYPES_DATA.find(r => r.id === selectedId);

  const amIcon = (am) => {
    const l = am.toLowerCase();
    if (l.includes('wifi')) return <Wifi size={9}/>;
    if (l.includes('breakfast') || l.includes('meal')) return <Coffee size={9}/>;
    if (l.includes('pool')) return <Waves size={9}/>;
    if (l.includes('spa')) return <Sparkles size={9}/>;
    if (l.includes('ac')) return <Wind size={9}/>;
    if (l.includes('tv')) return <Tv size={9}/>;
    if (l.includes('bath') || l.includes('jacuzzi')) return <Bath size={9}/>;
    return null;
  };

  const handleSelect = (roomId) => {
    setSelectedId(prev => prev === roomId ? null : roomId);
    setIsOpen(false);
  };

  return (
    <div className="rts-wrap">
      <div className="rts-trigger" onClick={() => setIsOpen(o => !o)}>
        <div className="rts-trigger-left">
          <div className="rts-icon-wrap"><BedDouble size={16} color="var(--red)"/></div>
          <div style={{minWidth:0}}>
            <div className="rts-trigger-lbl">{selectedRoom ? selectedRoom.name : 'Choose Room Type'}</div>
            <div className="rts-trigger-sub">
              {selectedRoom
                ? `${selectedRoom.size} · ${selectedRoom.highlight} · ₹${selectedRoom.price.toLocaleString()}/night`
                : `${ROOM_TYPES_DATA.length} room types available — tap to explore`}
            </div>
          </div>
          {selectedRoom && <span className="rts-sel-badge">✓ Selected</span>}
        </div>
        <ChevronDown size={16} className={`rts-chevron ${isOpen ? 'open' : ''}`}/>
      </div>

      {isOpen && (
        <div className="rts-panel">
          <div className="rts-panel-hdr"><BedDouble size={11}/> Select a Room Type</div>
          <div className="rts-track">
            {ROOM_TYPES_DATA.map((room) => {
              const isSel = selectedId === room.id;
              return (
                <div key={room.id} className={`rtc ${isSel ? 'rtc-sel' : ''}`} onClick={() => handleSelect(room.id)}>
                  <div className="rtc-img">
                    <img src={room.image} alt={room.name} onError={e=>{e.target.onerror=null;e.target.src='https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80';}}/>
                    {room.discount > 0 && <div className="rtc-disc">{room.discount}% OFF · Limited time</div>}
                    {room.badge && <div className="rtc-badge">{room.badge}</div>}
                    {isSel && <div className="rtc-chk"><Check size={12} color="#fff"/></div>}
                  </div>
                  <div className="rtc-body">
                    <div className="rtc-type">{room.emoji} {room.type}</div>
                    <div className="rtc-name">{room.name}</div>
                    <div className="rtc-specs">
                      <div className="rtc-spec"><Maximize2 size={9}/> {room.size}</div>
                      <div className="rtc-spec"><Users2 size={9}/> {room.guests} Guest{room.guests > 1 ? 's' : ''}</div>
                      <div className="rtc-spec green"><MapPin size={9}/> {room.highlight}</div>
                    </div>
                    <div className="rtc-ams">
                      {room.amenities.slice(0, 4).map((am, i) => (
                        <div key={i} className="rtc-am">{amIcon(am)}{am}</div>
                      ))}
                      {room.amenities.length > 4 && <div className="rtc-am more">+{room.amenities.length - 4} more</div>}
                    </div>
                    <div className="rtc-foot">
                      <div>
                        <div className="rtc-orig">₹{room.originalPrice.toLocaleString()}</div>
                        <div className="rtc-price">₹{room.price.toLocaleString()}</div>
                        <div className="rtc-per">per night · incl. taxes</div>
                      </div>
                      <button className="rtc-btn" onClick={e=>{e.stopPropagation();handleSelect(room.id);}}>
                        {isSel ? '✓ Selected' : 'Select'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {selectedRoom && !isOpen && (
        <div className="rts-sel-bar">
          <div className="rts-sel-left">
            <div className="rts-sel-dot"/>
            <div>
              <div className="rts-sel-name">{selectedRoom.name}</div>
              <div className="rts-sel-meta">{selectedRoom.size} · {selectedRoom.highlight} · {selectedRoom.guests} Guests</div>
            </div>
          </div>
          <div className="rts-sel-right">
            <span className="rts-sel-price">₹{selectedRoom.price.toLocaleString()}/night</span>
            <button className="rts-change" onClick={e=>{e.stopPropagation();setSelectedId(null);setIsOpen(true);}}>Change</button>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── DATE PICKER ── */
const DateModal = ({isOpen, onClose, onSelect, checkIn, checkOut}) => {
  const [ss, setSs] = useState(checkIn), [se, setSe] = useState(checkOut);
  const [cm, setCm] = useState(new Date().getMonth()), [cy, setCy] = useState(new Date().getFullYear());
  const MN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const days = () => {
    const a = []; const tot = new Date(cy, cm+1, 0).getDate(); const fst = new Date(cy, cm, 1).getDay();
    for (let i = 0; i < fst; i++) a.push(null);
    for (let d = 1; d <= tot; d++) a.push(new Date(cy, cm, d));
    return a;
  };
  const fmt = d => d ? d.toLocaleDateString('en-IN', {day:'2-digit', month:'short', year:'numeric'}) : '—';
  const click = d => {
    if (!ss || (ss && se)) { setSs(d); setSe(null); }
    else { if (d < ss) { setSe(ss); setSs(d); } else setSe(d); }
  };
  const pM = () => { if (cm === 0) { setCm(11); setCy(y => y-1); } else setCm(m => m-1); };
  const nM = () => { if (cm === 11) { setCm(0); setCy(y => y+1); } else setCm(m => m+1); };
  if (!isOpen) return null;
  return (
    <div className="mov" onClick={onClose}>
      <div className="mcard" onClick={e => e.stopPropagation()}>
        <div className="mhdr">
          <h3>Select Check-in & Check-out</h3>
          <button className="mclose" onClick={onClose}><X size={17}/></button>
        </div>
        <div className="mbody">
          <div className="cal-nav">
            <button className="cal-nbtn" onClick={pM}><ChevronLeft size={17}/></button>
            <span className="cal-month">{MN[cm]} {cy}</span>
            <button className="cal-nbtn" onClick={nM}><ChevronRight size={17}/></button>
          </div>
          <div className="cal-grid">
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="cal-dh">{d}</div>)}
            {days().map((date, i) => {
              if (!date) return <div key={`e${i}`}/>;
              const past = date < new Date(new Date().setHours(0,0,0,0));
              const isS = ss && date.getTime() === ss.getTime();
              const isE = se && date.getTime() === se.getTime();
              const inR = ss && se && date > ss && date < se;
              return <button key={date.toISOString()} disabled={past} onClick={() => !past && click(date)}
                className={`cal-d ${past?'past':''} ${inR?'inr':''} ${isS?'sd':''} ${isE?'ed':''}`}>{date.getDate()}</button>;
            })}
          </div>
          <div className="cal-sum">
            <div className="cal-db"><label>Check-in</label><span>{fmt(ss)}</span></div>
            <div className="cal-div"/>
            <div className="cal-db" style={{textAlign:'right'}}><label>Check-out</label><span>{fmt(se)}</span></div>
          </div>
          <button className="cal-apply" disabled={!ss || !se} onClick={() => ss && se && onSelect(ss, se)}>Apply Dates</button>
        </div>
      </div>
    </div>
  );
};

/* ── GUESTS MODAL ── */
const GuestsModal = ({isOpen, onClose, onApply, guests}) => {
  const [a, setA] = useState(guests.adults), [c, setC] = useState(guests.children), [r, setR] = useState(guests.rooms);
  if (!isOpen) return null;
  const Row = ({lbl, sub, val, set, min=0}) => (
    <div className="gcrow">
      <div><div className="gc-lbl">{lbl}</div><div className="gc-sub">{sub}</div></div>
      <div className="gc-ctrl">
        <button className="gc-btn" onClick={() => set(v => Math.max(min, v-1))}>−</button>
        <span className="gc-val">{val}</span>
        <button className="gc-btn" onClick={() => set(v => v+1)}>+</button>
      </div>
    </div>
  );
  return (
    <div className="mov" onClick={onClose}>
      <div className="mcard" onClick={e => e.stopPropagation()}>
        <div className="mhdr"><h3>Who's travelling?</h3><button className="mclose" onClick={onClose}><X size={17}/></button></div>
        <div className="mbody">
          <Row lbl="Adults" sub="Ages 13 or above" val={a} set={setA} min={1}/>
          <Row lbl="Children" sub="Ages 2–12" val={c} set={setC} min={0}/>
          <Row lbl="Rooms" sub="Number of rooms" val={r} set={setR} min={1}/>
          <button className="g-apply" onClick={() => onApply(a, c, r)}>Done</button>
        </div>
      </div>
    </div>
  );
};

/* ── POPULAR CAROUSEL ── */
const PopularSection = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState('New Delhi');
  const [canL, setCanL] = useState(false), [canR, setCanR] = useState(true);
  const ref = useRef(null);
  const hotels = POP[city] || [];
  const chk = () => { const el = ref.current; if (!el) return; setCanL(el.scrollLeft > 0); setCanR(el.scrollLeft + el.clientWidth < el.scrollWidth - 4); };
  useEffect(() => { chk(); }, [city]);
  const scroll = d => { ref.current?.scrollBy({left: d === 'l' ? -220 : 220, behavior: 'smooth'}); setTimeout(chk, 360); };
  const lbl = r => r >= 9 ? 'Exceptional' : r >= 8.5 ? 'Excellent' : r >= 8 ? 'Very Good' : 'Good';
  return (
    <div className="pop-sec">
      <div className="pop-in">
        <div className="sec-hdr">
          <h2 className="sec-ttl">Popular in <span>India</span></h2>
          <button className="see-all">See all <ChevronRight size={15}/></button>
        </div>
        <div className="ctabs">
          {POPULAR_CITIES.map(c => (
            <button key={c} className={`ctab ${city === c ? 'on' : ''}`}
              onClick={() => { setCity(c); if (ref.current) ref.current.scrollLeft = 0; }}>{c}</button>
          ))}
        </div>
        <div className="cw">
          {canL && <button className="cbtn lft" onClick={() => scroll('l')}><ChevronLeft size={17}/></button>}
          <div className="ctrack" ref={ref} onScroll={chk}>
            {hotels.map(h => (
              <div key={h.id} className="pcard" onClick={() => navigate(`/hotel-details/${h.id}`, {state:{hotel:h}})}>
                <div className="pcard-img">
                  <img src={h.image} alt={h.name} onError={e=>{e.target.onerror=null;e.target.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80';}}/>
                  <div className="pcard-score"><Star size={10} fill="white" stroke="white"/>{h.rating} <span style={{opacity:.7,fontSize:9}}>{lbl(h.rating)}</span></div>
                </div>
                <div className="pcard-body">
                  <div className="pcard-name">{h.name}</div>
                  <div className="pcard-stars">{[...Array(5)].map((_,i) => <Star key={i} size={11} fill={i<h.stars?'#ffc107':'none'} stroke={i<h.stars?'#ffc107':'#d1d5db'}/>)}</div>
                  <div className="pcard-addr">{h.address}</div>
                  <div className="pcard-price">₹{h.price.toLocaleString()} <span>/night</span></div>
                </div>
              </div>
            ))}
          </div>
          {canR && <button className="cbtn rgt" onClick={() => scroll('r')}><ChevronRight size={17}/></button>}
        </div>
      </div>
    </div>
  );
};

/* ── MAIN COMPONENT ── */
const Hotels = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const id = 'mmt-styles-v6';
    if (!document.getElementById(id)) {
      const el = document.createElement('style'); el.id = id; el.textContent = GLOBAL_CSS; document.head.appendChild(el);
    }
  }, []);

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [mobF, setMobF] = useState(false);
  const [filters, setFilters] = useState({searchQuery:'',priceRange:[0,100000],stars:[],amenities:[],propertyType:[],location:[],sort:'recommended'});
  const [showDate, setShowDate] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date(2026,2,29));
  const [checkOut, setCheckOut] = useState(new Date(2026,3,5));
  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState({adults:2,children:0,rooms:1});
  const [activeStar, setActiveStar] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true); setError(null);
        const res = await fetch('https://bmtadmin.onrender.com/api/hotels/all');
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const d = await res.json();
        setHotels(Array.isArray(d) ? d : d.hotels ?? d.data ?? []);
      } catch(e) { setError(e.message || 'Failed to load'); }
      finally { setLoading(false); }
    })();
  }, []);

  // Lock body scroll when filter open
  useEffect(() => {
    if (mobF) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobF]);

  const gN = h => h.hotelName ?? h.name ?? 'Unnamed Hotel';
  const gI = h => { const r = h.hotelImages?.[0] || h.roomImages?.[0] || h.images?.[0] || h.image || h.thumbnail; if (!r) return 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'; if (r.startsWith('http')) return r; return BASE_URL + r.replace(/\\/g, '/'); };
  const gP = h => { const r = h.rooms?.[0]?.offerPrice; if (r && r > 0) return r; return h.pricePerNight ?? h.discountPrice ?? h.price ?? h.rate ?? 0; };
  const gO = h => { const b = h.rooms?.[0]?.basePrice; const s = h.pricePerNight ?? h.price ?? h.mrp; if (b && b > gP(h)) return b; return s ?? gP(h); };
  const gR = h => h.averageRating ?? h.rating ?? h.starRating ?? h.stars ?? 0;
  const gRv = h => h.totalReviews ?? h.reviews ?? h.reviewCount ?? 0;
  const gAm = h => h.amenities ?? h.facilities ?? [];
  const gL = h => { if (h.city && h.area) return `${h.area}, ${h.city}`; if (h.city && h.state) return `${h.city}, ${h.state}`; return h.address ?? h.city ?? ''; };
  const gD = h => h.distance ?? h.distanceFromCenter ?? h.landmark ?? '';
  const gDesc = h => h.description ?? h.about ?? h.summary ?? '';
  const gTags = h => h.propertyHighlights ?? h.tags ?? h.badges ?? h.highlights ?? [];
  const gDeal = h => h.deal ?? h.offer ?? h.badge ?? null;
  const ratLbl = r => r >= 9 ? 'Exceptional' : r >= 8.5 ? 'Excellent' : r >= 8 ? 'Very Good' : r >= 7 ? 'Good' : '';
  const fmtDt = (s, e) => `${s.toLocaleDateString('en-IN', {day:'numeric', month:'short'})} — ${e.toLocaleDateString('en-IN', {day:'numeric', month:'short', year:'numeric'})}`;
  const nights = Math.max(1, Math.round((checkOut - checkIn) / (1000*60*60*24)));

  const allH = useMemo(() => [...hotels, ...Object.values(POP).flat()], [hotels]);
  const filtered = useMemo(() => allH.filter(h => {
    const p = gP(h), r = gR(h), am = gAm(h);
    const name = (h.hotelName || h.name || '').toLowerCase();
    const loc = (h.city || h.location || h.address || '').toLowerCase();
    const type = (h.propertyType || h.type || '').toLowerCase();
    return (
      (!filters.searchQuery || name.includes(filters.searchQuery.toLowerCase()) || loc.includes(filters.searchQuery.toLowerCase())) &&
      p >= filters.priceRange[0] && p <= filters.priceRange[1] &&
      (filters.stars.length === 0 || filters.stars.some(s => r >= s)) &&
      (filters.propertyType.length === 0 || filters.propertyType.includes(type)) &&
      (filters.location.length === 0 || filters.location.some(l => loc.includes(l.toLowerCase()))) &&
      (filters.amenities.length === 0 || filters.amenities.every(a => am.some(x => String(x).toLowerCase().includes(a))))
    );
  }).sort((a, b) => {
    if (filters.sort === 'price_low') return gP(a) - gP(b);
    if (filters.sort === 'price_high') return gP(b) - gP(a);
    if (filters.sort === 'rating') return gR(b) - gR(a);
    return 0;
  }), [allH, filters]);

  const tog = (key, val) => setFilters(f => ({...f, [key]: f[key].includes(val) ? f[key].filter(x => x !== val) : [...f[key], val]}));
  const togWL = id => setWishlist(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  const reset = () => setFilters({searchQuery:'',priceRange:[0,100000],stars:[],amenities:[],propertyType:[],location:[],sort:'recommended'});

  const CBox = ({on, onClick, label}) => (
    <div className="fcrow" onClick={onClick}>
      <div className={`cbox ${on ? 'on' : ''}`}>{on && <Check size={10} color="#fff"/>}</div>
      <span className="fc-lbl">{label}</span>
    </div>
  );

  const FiltersPanel = () => (
    <>
      {/* Overlay for mobile */}
      {mobF && <div className="fp-overlay show" onClick={() => setMobF(false)}/>}
      <div className={`fp ${mobF ? 'mob-open' : ''}`}>
        <div className="fp-hdr">
          <div className="fp-ttl"><Filter size={15}/>Filters</div>
          <div style={{display:'flex',gap:8,alignItems:'center'}}>
            <button className="fp-rst" onClick={reset}>Reset</button>
            {mobF && <button onClick={() => setMobF(false)} style={{background:'rgba(255,255,255,.15)',border:'none',color:'#fff',borderRadius:6,padding:'4px 8px',cursor:'pointer',display:'flex',alignItems:'center'}}><X size={15}/></button>}
          </div>
        </div>
        <div className="fs">
          <div className="fs-ttl">💰 Price Range</div>
          <div className="pi-grid">
            {[0,1].map(i => (
              <div key={i} className="pi-box"><label>{i === 0 ? 'Min' : 'Max'}</label>
                <input type="number" value={filters.priceRange[i]} onChange={e => {const nr=[...filters.priceRange];nr[i]=parseInt(e.target.value)||0;setFilters({...filters,priceRange:nr});}}/>
              </div>
            ))}
          </div>
          <input className="pslider" type="range" min="0" max="100000" value={filters.priceRange[1]}
            onChange={e => {const nr=[...filters.priceRange];nr[1]=parseInt(e.target.value);setFilters({...filters,priceRange:nr});}}/>
        </div>
        <div className="fs">
          <div className="fs-ttl">⭐ Star Rating</div>
          <div className="fclist">
            {[5,4,3,2].map(n => (
              <div key={n} className="star-row" onClick={() => tog('stars', n)}>
                <div className={`cbox ${filters.stars.includes(n) ? 'on' : ''}`}>{filters.stars.includes(n) && <Check size={10} color="#fff"/>}</div>
                <div style={{display:'flex',gap:2}}>{[...Array(5)].map((_,i) => <Star key={i} size={12} fill={i<n?'#ffc107':'none'} stroke={i<n?'#ffc107':'#d1d5db'}/>)}</div>
                <span className="fc-lbl" style={{fontSize:12}}>{n} & above</span>
              </div>
            ))}
          </div>
        </div>
        <div className="fs">
          <div className="fs-ttl">🏨 Property Type</div>
          <div className="fclist">
            {['hotel','resort','apartment','homestay','villa','hostel','cottage','motel'].map(t => (
              <CBox key={t} on={filters.propertyType.includes(t)} onClick={() => tog('propertyType', t)} label={t.charAt(0).toUpperCase()+t.slice(1)}/>
            ))}
          </div>
        </div>
        <div className="fs">
          <div className="fs-ttl">🛜 Amenities</div>
          <div className="achips">
            {AMENITIES_OPTIONS.map(({id, label, Icon}) => (
              <div key={id} className={`achip ${filters.amenities.includes(id) ? 'on' : ''}`} onClick={() => tog('amenities', id)}>
                <Icon size={12}/>{label}
              </div>
            ))}
          </div>
        </div>
        <div className="fs">
          <div className="fs-ttl">📍 Locations</div>
          <div className="fclist">
            {['Aerocity','Dwarka','Karol Bagh','Paharganj','Connaught Place','Hauz Khas'].map(l => (
              <CBox key={l} on={filters.location.includes(l.toLowerCase())} onClick={() => tog('location', l.toLowerCase())} label={l}/>
            ))}
          </div>
        </div>
        {mobF && (
          <div style={{padding:'16px 18px',borderTop:'1px solid var(--border)',position:'sticky',bottom:0,background:'#fff'}}>
            <button onClick={() => setMobF(false)} style={{width:'100%',padding:'14px',background:'var(--red)',color:'#fff',border:'none',borderRadius:10,fontWeight:700,fontFamily:'Poppins,sans-serif',fontSize:15,cursor:'pointer',minHeight:50}}>
              Show {filtered.length} Properties
            </button>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="hr">
      {/* HERO */}
      <section className="hero">
        {/* <div className="hero-bar">
          
          <nav className="hero-nav">
            <a href="#">Hotels</a><a href="#">Flights</a><a href="#">Holidays</a><a href="#">Trains</a>
          </nav>
        </div> */}
        <div className="hero-content">
          <div className="hero-eyebrow"><Flame size={12}/>Over 1.2 Lakh Hotels Across India</div>
          <h1 className="hero-h1">Find Your Perfect <span className="acc">Stay</span></h1>
          <p className="hero-sub">Best prices · Verified reviews · Instant booking · No hidden charges</p>
          <div className="sbox">
            <div className="sfields">
              <div className="sfield">
                <MapPin size={19} className="sfield-ico"/>
                <div style={{flex:1}}>
                  <div className="sfield-lbl">Destination / Property</div>
                  <input placeholder="Where are you going?" value={filters.searchQuery}
                    onChange={e => setFilters({...filters, searchQuery: e.target.value})}/>
                </div>
              </div>
              <div className="sfield" onClick={() => setShowDate(true)}>
                <Calendar size={19} className="sfield-ico"/>
                <div>
                  <div className="sfield-lbl">Check-in → Check-out</div>
                  <div className="sfield-val">{fmtDt(checkIn, checkOut)}</div>
                  <div className="sfield-sub">{nights} Night{nights > 1 ? 's' : ''}</div>
                </div>
              </div>
              <div className="sfield" onClick={() => setShowGuests(true)}>
                <Users size={19} className="sfield-ico"/>
                <div>
                  <div className="sfield-lbl">Rooms & Guests</div>
                  <div className="sfield-val">{guests.rooms} Room{guests.rooms > 1 ? 's' : ''}, {guests.adults+guests.children} Guest{guests.adults+guests.children > 1 ? 's' : ''}</div>
                  <div className="sfield-sub">{guests.adults} Adult{guests.adults > 1 ? 's' : ''}{guests.children > 0 ? `, ${guests.children} Child` : ''}</div>
                </div>
              </div>
              <button className="sbtn"><Search size={19}/>Search</button>
            </div>
          </div>
        </div>
        <div className="strip">
          <span className="strip-lbl">Quick Filter:</span>
          {[2,3,4,5].map(n => (
            <button key={n} className={`spill ${activeStar === n ? 'on' : ''}`}
              onClick={() => { const nxt = activeStar === n ? null : n; setActiveStar(nxt); setFilters(f => ({...f, stars: nxt ? [nxt] : []})); }}>
              {n}★
            </button>
          ))}
          <button className="spill" onClick={() => setFilters(f => ({...f, sort:'price_low'}))}><Tag size={10}/>Lowest Price</button>
          <button className="spill" onClick={() => setFilters(f => ({...f, sort:'rating'}))}><TrendingUp size={10}/>Top Rated</button>
        </div>
      </section>

      <PopularSection/>

      <div className="main">
        <FiltersPanel/>
        <section className="rs">
          <div className="rh">
            <div>
              <div className="rh-ttl">{loading ? 'Searching…' : `${filtered.length} Properties Found`}</div>
              <div className="rh-sub">{!loading && `Sorted: ${filters.sort === 'recommended' ? 'Recommended' : filters.sort === 'price_low' ? 'Price (Low→High)' : filters.sort === 'price_high' ? 'Price (High→Low)' : 'Top Rated'}`}</div>
            </div>
            <div style={{display:'flex',gap:8,alignItems:'center'}}>
              <button className="mob-filter" onClick={() => setMobF(true)}><Filter size={14}/>Filters</button>
              <div className="sort-w">
                <select className="sort-s" value={filters.sort} onChange={e => setFilters({...filters, sort: e.target.value})}>
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
            {TRUST.map(({Icon, title, desc}) => (
              <div key={title} className="tbadge">
                <div className="tbadge-ico"><Icon size={17}/></div>
                <div><div className="tbadge-ttl">{title}</div><div className="tbadge-sub">{desc}</div></div>
              </div>
            ))}
          </div>

          {loading && [1,2,3].map(i => (
            <div key={i} className="hcard skel" style={{minHeight:180}}>
              <div className="hcard-main">
                <div className="skel-b" style={{width:260,height:210}}/>
                <div style={{flex:1,padding:16,display:'flex',flexDirection:'column',gap:10}}>
                  <div className="skel-b" style={{height:20,width:'55%'}}/>
                  <div className="skel-b" style={{height:14,width:'40%'}}/>
                  <div className="skel-b" style={{height:14,width:'75%'}}/>
                  <div style={{marginTop:'auto',display:'flex',justifyContent:'space-between'}}>
                    <div className="skel-b" style={{height:28,width:100}}/>
                    <div className="skel-b" style={{height:38,width:90}}/>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {!loading && error && (
            <div className="empty">
              <div className="empty-ico"><X size={26}/></div>
              <div className="empty-ttl">Couldn't load hotels</div>
              <div className="empty-sub">{error}</div>
              <button className="empty-rst" onClick={() => window.location.reload()}>Retry</button>
            </div>
          )}

          {!loading && !error && filtered.map(hotel => {
            const id = hotel._id ?? hotel.id;
            const name = gN(hotel), price = gP(hotel), orig = gO(hotel), rat = gR(hotel), rev = gRv(hotel), am = gAm(hotel);
            const tags = gTags(hotel), deal = gDeal(hotel), loc = gL(hotel), dist = gD(hotel), desc = gDesc(hotel), img = gI(hotel);
            const disc = orig > price ? Math.round((1 - price/orig) * 100) : 0;
            return (
              <div key={id} className="hcard">
                <div className="hcard-main">
                  <div className="hcard-imgw">
                    <img src={img} alt={name} onError={e=>{e.target.onerror=null;e.target.src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80';}}/>
                    <button className={`wlbtn ${wishlist.includes(id) ? 'loved' : ''}`} onClick={() => togWL(id)}>
                      <Heart size={16} fill={wishlist.includes(id) ? 'currentColor' : 'none'}/>
                    </button>
                    {tags.length > 0 && <div className="tag-badges">{tags.slice(0,2).map((t,i) => <span key={i} className="tag-badge">{t}</span>)}</div>}
                    {deal && <div className="deal-badge"><Tag size={10}/>{deal}</div>}
                  </div>
                  <div className="hcard-body">
                    <div className="hcard-top">
                      <h3 className="hname">{name}</h3>
                      <div className="hmeta">
                        <div className="hloc"><MapPin size={13}/>{loc || 'India'}</div>
                        {dist && <span className="hdist">{dist}</span>}
                      </div>
                      <div className="hrat-row">
                        {rat > 0 && <div className="rpill"><Star size={12} fill="white" stroke="white"/>{Number(rat).toFixed(1)}</div>}
                        {rat > 0 && <span className="rlbl">{ratLbl(rat)}</span>}
                        {rev > 0 && <span className="rrev">{rev.toLocaleString()} reviews</span>}
                      </div>
                      {desc && <p className="hdesc">{desc}</p>}
                      {am.length > 0 && (
                        <div className="hams">
                          {am.slice(0,6).map((a,i) => {
                            const opt = AMENITIES_OPTIONS.find(x => x.id === String(a).toLowerCase() || x.label.toLowerCase() === String(a).toLowerCase());
                            return <div key={i} className="am-pill">{opt ? <><opt.Icon size={11}/>{opt.label}</> : String(a)}</div>;
                          })}
                        </div>
                      )}
                    </div>
                    <div className="hfooter">
                      <div>
                        {disc > 0 && <div className="price-was">₹{Number(orig).toLocaleString()}<span className="disc-badge">{disc}% off</span></div>}
                        <div className="price-main">₹{Number(price).toLocaleString()}</div>
                        <div className="price-per">per night · incl. taxes</div>
                      </div>
                      <div className="cactions">
                        <button className="btn-d" onClick={() => navigate(`/hotel-details/${id}`)}>Details</button>
                        <button className="btn-b" onClick={() => navigate(`/book/${id}`)}>Book Now<ChevronRight size={15}/></button>
                      </div>
                    </div>
                  </div>
                </div>
                <RoomTypesSection hotelId={id} hotelName={name}/>
              </div>
            );
          })}

          {!loading && !error && filtered.length === 0 && (
            <div className="empty">
              <div className="empty-ico"><Search size={26}/></div>
              <div className="empty-ttl">No properties found</div>
              <div className="empty-sub">Try adjusting your filters or search terms</div>
              <button className="empty-rst" onClick={reset}>Clear all filters</button>
            </div>
          )}
        </section>
      </div>

      <DateModal isOpen={showDate} onClose={() => setShowDate(false)} onSelect={(s,e) => {setCheckIn(s);setCheckOut(e);setShowDate(false);}} checkIn={checkIn} checkOut={checkOut}/>
      <GuestsModal isOpen={showGuests} onClose={() => setShowGuests(false)} onApply={(a,c,r) => {setGuests({adults:a,children:c,rooms:r});setShowGuests(false);}} guests={guests}/>
    </div>
  );
};

export default Hotels;
