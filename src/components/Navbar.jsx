// // import React, { useState, useContext, useEffect, useRef } from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { FaBars, FaUserCircle, FaBell } from "react-icons/fa";
// // import { MdPhoneIphone } from "react-icons/md";
// // import { AuthContext } from "../contexts/AuthContext";
// // import AuthForm from "./AuthForm";
// // import logo from "../assets/logo.jpeg";
// // import i18n from "i18next";
// // import { useTranslation } from "react-i18next";  
// // // import { initReactI18next, useTranslation, I18nextProvider } from "react-i18next";

// // // ─── i18n INIT (inline, no separate file) ────────────────────────────────────
// // // if (!i18n.isInitialized) {
// // //   i18n.use(initReactI18next).init({
// // //     lng: "en",
// // //     fallbackLng: "en",
// // //     interpolation: { escapeValue: false },
// // //     resources: {
// // //       en:    { translation: { listProperty: "List Your Property", login: "Login or", createAccount: "Create Account", myWallet: "myWallet" } },
// // //       hi:    { translation: { listProperty: "अपनी संपत्ति सूचीबद्ध करें", login: "लॉगिन करें या", createAccount: "खाता बनाएं", myWallet: "मेरा वॉलेट" } },
// // //       "zh-TW": { translation: { listProperty: "列出您的房產", login: "登錄或", createAccount: "創建賬戶", myWallet: "我的錢包" } },
// // //       ja:    { translation: { listProperty: "物件を掲載する", login: "ログインまたは", createAccount: "アカウント作成", myWallet: "マイウォレット" } },
// // //       ko:    { translation: { listProperty: "숙소 등록하기", login: "로그인 또는", createAccount: "계정 만들기", myWallet: "내 지갑" } },
// // //       th:    { translation: { listProperty: "ลงประกาศที่พัก", login: "เข้าสู่ระบบหรือ", createAccount: "สร้างบัญชี", myWallet: "กระเป๋าเงิน" } },
// // //       uk:    { translation: { listProperty: "Розмістити об'єкт", login: "Увійти або", createAccount: "Створити акаунт", myWallet: "Мій гаманець" } },
// // //       ar:    { translation: { listProperty: "أدرج عقارك", login: "تسجيل الدخول أو", createAccount: "إنشاء حساب", myWallet: "محفظتي" } },
// // //       id:    { translation: { listProperty: "Daftarkan Properti", login: "Masuk atau", createAccount: "Buat Akun", myWallet: "Dompet Saya" } },
// // //       ms:    { translation: { listProperty: "Senaraikan Hartanah", login: "Log masuk atau", createAccount: "Buat Akaun", myWallet: "Dompet Saya" } },
// // //       da:    { translation: { listProperty: "Opret din bolig", login: "Log ind eller", createAccount: "Opret konto", myWallet: "Min Pung" } },
// // //       de:    { translation: { listProperty: "Immobilie inserieren", login: "Anmelden oder", createAccount: "Konto erstellen", myWallet: "Meine Geldbörse" } },
// // //       es:    { translation: { listProperty: "Listar su propiedad", login: "Iniciar sesión o", createAccount: "Crear cuenta", myWallet: "Mi billetera" } },
// // //       fr:    { translation: { listProperty: "Lister votre propriété", login: "Connexion ou", createAccount: "Créer un compte", myWallet: "Mon portefeuille" } },
// // //       it:    { translation: { listProperty: "Pubblica il tuo immobile", login: "Accedi o", createAccount: "Crea account", myWallet: "Il mio portafoglio" } },
// // //       nl:    { translation: { listProperty: "Plaats uw woning", login: "Inloggen of", createAccount: "Account aanmaken", myWallet: "Mijn portemonnee" } },
// // //       pl:    { translation: { listProperty: "Dodaj ogłoszenie", login: "Zaloguj się lub", createAccount: "Utwórz konto", myWallet: "Mój portfel" } },
// // //       pt:    { translation: { listProperty: "Anuncie seu imóvel", login: "Entrar ou", createAccount: "Criar conta", myWallet: "Minha carteira" } },
// // //       fi:    { translation: { listProperty: "Listaa kohteesi", login: "Kirjaudu tai", createAccount: "Luo tili", myWallet: "Lompakkoni" } },
// // //       sv:    { translation: { listProperty: "Lägg upp boende", login: "Logga in eller", createAccount: "Skapa konto", myWallet: "Min plånbok" } },
// // //       vi:    { translation: { listProperty: "Đăng chỗ ở của bạn", login: "Đăng nhập hoặc", createAccount: "Tạo tài khoản", myWallet: "Ví của tôi" } },
// // //       tr:    { translation: { listProperty: "Mülkünüzü listeleyin", login: "Giriş yap veya", createAccount: "Hesap oluştur", myWallet: "Cüzdanım" } },
// // //       el:    { translation: { listProperty: "Καταχωρήστε το ακίνητό σας", login: "Σύνδεση ή", createAccount: "Δημιουργία λογαριασμού", myWallet: "Το πορτοφόλι μου" } },
// // //       ru:    { translation: { listProperty: "Разместить объект", login: "Войти или", createAccount: "Создать аккаунт", myWallet: "Мой кошелёк" } },
// // //     },
// // //   });
// // // }

// // // ─── DATA ────────────────────────────────────────────────────────────────────
// // const LANGUAGES = [
// //   { code: "en",    label: "English (India)",   flag: "🇮🇳" },
// //   { code: "zh-TW", label: "繁體中文",            flag: "🇹🇼" },
// //   { code: "ja",    label: "日本語",              flag: "🇯🇵" },
// //   { code: "ko",    label: "한국어",              flag: "🇰🇷" },
// //   { code: "th",    label: "ภาษาไทย",            flag: "🇹🇭" },
// //   { code: "uk",    label: "Українська",         flag: "🇺🇦" },
// //   { code: "ar",    label: "العربية",            flag: "🌐" },
// //   { code: "id",    label: "Bahasa Indonesia",   flag: "🇮🇩" },
// //   { code: "ms",    label: "Bahasa Melayu",      flag: "🇲🇾" },
// //   { code: "da",    label: "Dansk",              flag: "🇩🇰" },
// //   { code: "de",    label: "Deutsch",            flag: "🇩🇪" },
// //   { code: "en",    label: "English",            flag: "🌐" },
// //   { code: "es",    label: "Español",            flag: "🇪🇸" },
// //   { code: "fr",    label: "Français",           flag: "🇫🇷" },
// //   { code: "it",    label: "Italiano",           flag: "🇮🇹" },
// //   { code: "nl",    label: "Nederlands",         flag: "🇳🇱" },
// //   { code: "pl",    label: "Polski",             flag: "🇵🇱" },
// //   { code: "pt",    label: "Português (Brasil)", flag: "🇧🇷" },
// //   { code: "fi",    label: "Suomi",              flag: "🇫🇮" },
// //   { code: "sv",    label: "Svenska",            flag: "🇸🇪" },
// //   { code: "vi",    label: "Tiếng Việt",         flag: "🇻🇳" },
// //   { code: "tr",    label: "Türkçe",             flag: "🇹🇷" },
// //   { code: "el",    label: "Ελληνικά",           flag: "🇬🇷" },
// //   { code: "ru",    label: "Русский",            flag: "🇷🇺" },
// // ];

// // const TOP_CURRENCIES = [
// //   { code: "INR", label: "Indian Rupee" },
// //   { code: "EUR", label: "Euro (€)" },
// //   { code: "USD", label: "United States Dollar ($)" },
// // ];

// // const ALL_CURRENCIES = [
// //   { code: "INR", label: "Indian Rupee" },
// //   { code: "AED", label: "United Arab Emirates Dirh..." },
// //   { code: "AZN", label: "Azerbaijani manat" },
// //   { code: "AUD", label: "Australian Dollar (AU$)" },
// //   { code: "BHD", label: "Bahraini Dinar" },
// //   { code: "BRL", label: "Brazilian Real" },
// //   { code: "BYN", label: "Belarusian ruble" },
// //   { code: "CAD", label: "Canadian Dollar" },
// //   { code: "CHF", label: "Swiss Franc" },
// //   { code: "CLP", label: "Chilean Peso" },
// //   { code: "CNY", label: "Chinese Yuan" },
// //   { code: "COP", label: "Colombian Peso" },
// //   { code: "DKK", label: "Danish Krone" },
// //   { code: "EUR", label: "Euro (€)" },
// //   { code: "GBP", label: "British Pound (£)" },
// //   { code: "HKD", label: "Hong Kong Dollar (HK$)" },
// //   { code: "IDR", label: "Indonesian Rupiah" },
// //   { code: "ILS", label: "Israeli New Shekel" },
// //   { code: "JOD", label: "Jordanian Dinar" },
// //   { code: "JPY", label: "Japanese Yen" },
// //   { code: "KRW", label: "Korean Won (₩)" },
// //   { code: "KWD", label: "Kuwaiti Dinar" },
// //   { code: "KZT", label: "Kazakhstani tenge" },
// //   { code: "LAK", label: "Lao Kip" },
// //   { code: "MNT", label: "Mongolian Tugrik" },
// //   { code: "MOP", label: "Macau Pataca" },
// //   { code: "MXN", label: "Mexican Peso (Mex$)" },
// //   { code: "MYR", label: "Malaysian Ringgit" },
// //   { code: "NZD", label: "New Zealand Dollar" },
// //   { code: "OMR", label: "Omani Rial" },
// //   { code: "PHP", label: "Philippine Peso" },
// //   { code: "PKR", label: "Pakistani Rupee" },
// //   { code: "PLN", label: "Polish Zloty" },
// //   { code: "QAR", label: "Qatari Riyal" },
// //   { code: "RUB", label: "Russian Ruble" },
// //   { code: "SAR", label: "Saudi Riyal" },
// //   { code: "SEK", label: "Swedish Krona" },
// //   { code: "SGD", label: "Singapore Dollar" },
// //   { code: "THB", label: "Thai Baht" },
// //   { code: "TRY", label: "Turkish Lira" },
// //   { code: "TWD", label: "New Taiwan Dollar" },
// //   { code: "USD", label: "United States Dollar ($)" },
// //   { code: "VND", label: "Vietnamese Dong" },
// //   { code: "ZAR", label: "South African Rand" },
// // ];

// // // ─── MODAL COMPONENT ─────────────────────────────────────────────────────────
// // const LangCurrencyModal = ({ onClose, selectedCurrency, setSelectedCurrency, selectedLang, setSelectedLang }) => {
// //   const [activeTab, setActiveTab] = useState("language");
// //   const modalRef = useRef();

// //   useEffect(() => {
// //     const handler = (e) => {
// //       if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
// //     };
// //     document.addEventListener("mousedown", handler);
// //     return () => document.removeEventListener("mousedown", handler);
// //   }, [onClose]);

// //   const handleLanguageSelect = (lang) => {
// //     setSelectedLang(lang);
// //     i18n.changeLanguage(lang.code);
// //     onClose();
// //   };

// //   return (
// //     <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/40 backdrop-blur-sm">
// //       <div
// //         ref={modalRef}
// //         className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[85vh] flex flex-col overflow-hidden"
// //       >
// //         {/* Tabs Header */}
// //         <div className="flex items-center px-6 pt-5 border-b border-gray-200">
// //           <div className="flex gap-6 flex-1">
// //             <button
// //               onClick={() => setActiveTab("language")}
// //               className={`pb-3 text-base font-semibold border-b-2 transition-all ${
// //                 activeTab === "language" ? "border-black text-black" : "border-transparent text-gray-400 hover:text-gray-600"
// //               }`}
// //             >
// //               Languages
// //             </button>
// //             <button
// //               onClick={() => setActiveTab("currency")}
// //               className={`pb-3 text-base font-semibold border-b-2 transition-all ${
// //                 activeTab === "currency" ? "border-black text-black" : "border-transparent text-gray-400 hover:text-gray-600"
// //               }`}
// //             >
// //               Currency
// //             </button>
// //           </div>
// //           <button onClick={onClose} className="mb-3 text-gray-400 hover:text-black text-2xl leading-none">✕</button>
// //         </div>

// //         {/* Scrollable Body */}
// //         <div className="overflow-y-auto px-6 py-5 flex-1">
// //           {activeTab === "language" ? (
// //             <>
// //               <p className="text-sm font-bold text-gray-700 mb-3">All Languages</p>
// //               <div className="grid grid-cols-3 gap-x-4 gap-y-1">
// //                 {LANGUAGES.map((lang, idx) => {
// //                   const isSelected = selectedLang?.code === lang.code && selectedLang?.label === lang.label;
// //                   return (
// //                     <button
// //                       key={`${lang.code}-${idx}`}
// //                       onClick={() => handleLanguageSelect(lang)}
// //                       className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-left transition hover:bg-gray-100 ${
// //                         isSelected ? "bg-gray-100 text-blue-600 font-semibold" : "text-gray-700"
// //                       }`}
// //                     >
// //                       <span className="text-lg">{lang.flag}</span>
// //                       <span className="truncate">{lang.label}</span>
// //                     </button>
// //                   );
// //                 })}
// //               </div>
// //             </>
// //           ) : (
// //             <>
// //               <p className="text-sm font-bold text-gray-700 mb-3">Top currencies</p>
// //               <div className="grid grid-cols-3 gap-x-4 gap-y-1 mb-6">
// //                 {TOP_CURRENCIES.map((c) => {
// //                   const isSelected = selectedCurrency?.code === c.code;
// //                   return (
// //                     <button
// //                       key={c.code}
// //                       onClick={() => { setSelectedCurrency(c); onClose(); }}
// //                       className={`flex items-center gap-1 px-3 py-2.5 rounded-lg text-sm text-left transition hover:bg-gray-100 ${
// //                         isSelected ? "bg-gray-100 text-blue-600 font-semibold" : "text-gray-700"
// //                       }`}
// //                     >
// //                       <span className="font-bold text-blue-500">{c.code}</span>
// //                       <span className="text-gray-500 truncate">- {c.label}</span>
// //                     </button>
// //                   );
// //                 })}
// //               </div>

// //               <p className="text-sm font-bold text-gray-700 mb-3">All currencies</p>
// //               <div className="grid grid-cols-3 gap-x-4 gap-y-1">
// //                 {ALL_CURRENCIES.map((c, i) => {
// //                   const isSelected = selectedCurrency?.code === c.code;
// //                   return (
// //                     <button
// //                       key={`${c.code}-${i}`}
// //                       onClick={() => { setSelectedCurrency(c); onClose(); }}
// //                       className={`flex items-center gap-1 px-3 py-2.5 rounded-lg text-sm text-left transition hover:bg-gray-100 ${
// //                         isSelected ? "bg-gray-100 text-blue-600 font-semibold" : "text-gray-700"
// //                       }`}
// //                     >
// //                       <span className="font-bold">{c.code}</span>
// //                       <span className="text-gray-500 truncate">- {c.label}</span>
// //                     </button>
// //                   );
// //                 })}
// //               </div>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ─── MAIN NAVBAR ─────────────────────────────────────────────────────────────
// // const Navbar = ({ toggleSidebar }) => {
// //   const { isAuthenticated, logout } = useContext(AuthContext);
// //   const navigate = useNavigate();
// //   const { t } = useTranslation();

// //   const [scrolled, setScrolled]               = useState(false);
// //   const [showAuthForm, setShowAuthForm]       = useState(false);
// //   const [showLangCurr, setShowLangCurr]       = useState(false);
// //   const [selectedCurrency, setSelectedCurrency] = useState({ code: "INR", label: "Indian Rupee" });
// //   const [selectedLang, setSelectedLang]       = useState({ code: "en", label: "English (India)", flag: "🇮🇳" });

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 10);
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <>
// //       <header
// //         className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-300 border-b border-gray-200
// //         ${scrolled ? "bg-white shadow-md h-20" : "bg-white h-20"} flex items-center px-4 md:px-8`}
// //       >
// //         <div className="w-full mx-auto flex justify-between items-center">

// //           {/* LEFT */}
// //           <div className="flex items-center gap-3 md:gap-4">
// //             <button className="text-blue-500 text-2xl hover:scale-110 transition" onClick={toggleSidebar}>
// //               <FaBars />
// //             </button>
// //             <NavLink to="/" className="flex items-center">
// //               <img src={logo} alt="Logo" className="h-10 md:h-12 object-contain" />
// //             </NavLink>
// //           </div>

// //           {/* RIGHT */}
// //           <div className="flex items-center gap-3 md:gap-5">

// //             {/* Desktop: List Your Property */}
// //             <NavLink
// //               to="/list-your-property"
// //               className="hidden md:inline-block border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md text-xs font-bold uppercase hover:bg-blue-500 hover:text-white transition"
// //             >
// //               {t("listProperty")}
// //             </NavLink>

// //             {/* App + Lang/Currency pill button */}
// //             <button
// //               onClick={() => setShowLangCurr(true)}
// //               className="hidden md:flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 hover:shadow-md transition"
// //             >
// //               <MdPhoneIphone className="text-base text-gray-500" />
// //               <span className="text-xs font-medium text-gray-600">App</span>
// //               <span className="w-px h-4 bg-gray-300 mx-0.5" />
// //               <span className="text-base">{selectedLang.flag}</span>
// //               <span className="text-xs font-semibold text-gray-700">{selectedCurrency.code}</span>
// //             </button>

// //             {/* Mobile */}
// //             <div className="flex items-center gap-4 md:hidden">
// //               <span className="text-gray-700 font-semibold text-lg">{t("myWallet")}</span>
// //               <div className="relative">
// //                 <FaBell className="text-xl text-black" />
// //                 <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">3</span>
// //               </div>
// //             </div>

// //             {/* Auth */}
// //             {!isAuthenticated ? (
// //               <button
// //                 onClick={() => setShowAuthForm(true)}
// //                 className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-700 px-4 py-2 rounded-md text-white hover:-translate-y-0.5 hover:shadow-lg transition"
// //               >
// //                 <FaUserCircle className="text-xl md:text-2xl" />
// //                 <div className="flex flex-col leading-tight">
// //                   <span className="text-[10px] opacity-90">{t("login")}</span>
// //                   <strong className="text-sm font-bold">{t("createAccount")}</strong>
// //                 </div>
// //               </button>
// //             ) : (
// //               <button
// //                 onClick={() => setShowAuthForm(true)}
// //                 className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2 rounded-full text-white hover:shadow-lg transition"
// //               >
// //                 <FaUserCircle className="text-2xl" />
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </header>

// //       {showAuthForm && <AuthForm open={showAuthForm} onClose={() => setShowAuthForm(false)} />}

// //       {showLangCurr && (
// //         <LangCurrencyModal
// //           onClose={() => setShowLangCurr(false)}
// //           selectedCurrency={selectedCurrency}
// //           setSelectedCurrency={setSelectedCurrency}
// //           selectedLang={selectedLang}
// //           setSelectedLang={setSelectedLang}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default Navbar;




















// import React, { useState, useContext, useEffect, useRef } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaBars, FaUserCircle, FaBell, FaGlobe, FaChevronDown } from "react-icons/fa";
// import { MdPhoneIphone } from "react-icons/md";
// import { AuthContext } from "../contexts/AuthContext";
// import AuthForm from "./AuthForm";
// import logo from "../assets/logo.jpeg";

// // ─── CURRENCY DATA ────────────────────────────────────────────────────────────
// const TOP_CURRENCIES = [
//   { code: "INR", label: "Indian Rupee", symbol: "₹" },
//   { code: "EUR", label: "Euro",         symbol: "€" },
//   { code: "USD", label: "US Dollar",    symbol: "$" },
// ];

// const ALL_CURRENCIES = [
//   { code: "INR", label: "Indian Rupee",                  symbol: "₹" },
//   { code: "AED", label: "UAE Dirham",                    symbol: "د.إ" },
//   { code: "AUD", label: "Australian Dollar",             symbol: "A$" },
//   { code: "BHD", label: "Bahraini Dinar",                symbol: "BD" },
//   { code: "BRL", label: "Brazilian Real",                symbol: "R$" },
//   { code: "CAD", label: "Canadian Dollar",               symbol: "C$" },
//   { code: "CHF", label: "Swiss Franc",                   symbol: "Fr" },
//   { code: "CLP", label: "Chilean Peso",                  symbol: "CLP" },
//   { code: "CNY", label: "Chinese Yuan",                  symbol: "¥" },
//   { code: "COP", label: "Colombian Peso",                symbol: "COP" },
//   { code: "DKK", label: "Danish Krone",                  symbol: "kr" },
//   { code: "EUR", label: "Euro",                          symbol: "€" },
//   { code: "GBP", label: "British Pound",                 symbol: "£" },
//   { code: "HKD", label: "Hong Kong Dollar",              symbol: "HK$" },
//   { code: "IDR", label: "Indonesian Rupiah",             symbol: "Rp" },
//   { code: "ILS", label: "Israeli Shekel",                symbol: "₪" },
//   { code: "JPY", label: "Japanese Yen",                  symbol: "¥" },
//   { code: "KRW", label: "Korean Won",                    symbol: "₩" },
//   { code: "KWD", label: "Kuwaiti Dinar",                 symbol: "KD" },
//   { code: "MXN", label: "Mexican Peso",                  symbol: "Mex$" },
//   { code: "MYR", label: "Malaysian Ringgit",             symbol: "RM" },
//   { code: "NZD", label: "New Zealand Dollar",            symbol: "NZ$" },
//   { code: "OMR", label: "Omani Rial",                    symbol: "OMR" },
//   { code: "PHP", label: "Philippine Peso",               symbol: "₱" },
//   { code: "PKR", label: "Pakistani Rupee",               symbol: "₨" },
//   { code: "PLN", label: "Polish Zloty",                  symbol: "zł" },
//   { code: "QAR", label: "Qatari Riyal",                  symbol: "QR" },
//   { code: "RUB", label: "Russian Ruble",                 symbol: "₽" },
//   { code: "SAR", label: "Saudi Riyal",                   symbol: "SR" },
//   { code: "SEK", label: "Swedish Krona",                 symbol: "kr" },
//   { code: "SGD", label: "Singapore Dollar",              symbol: "S$" },
//   { code: "THB", label: "Thai Baht",                     symbol: "฿" },
//   { code: "TRY", label: "Turkish Lira",                  symbol: "₺" },
//   { code: "TWD", label: "New Taiwan Dollar",             symbol: "NT$" },
//   { code: "USD", label: "United States Dollar",          symbol: "$" },
//   { code: "VND", label: "Vietnamese Dong",               symbol: "₫" },
//   { code: "ZAR", label: "South African Rand",            symbol: "R" },
// ];

// // ─── CURRENCY MODAL ───────────────────────────────────────────────────────────
// const CurrencyModal = ({ onClose, selectedCurrency, setSelectedCurrency }) => {
//   const [search, setSearch] = useState("");
//   const modalRef = useRef();

//   useEffect(() => {
//     const handler = (e) => {
//       if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [onClose]);

//   const filtered = ALL_CURRENCIES.filter(
//     (c) =>
//       c.code.toLowerCase().includes(search.toLowerCase()) ||
//       c.label.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/40 backdrop-blur-sm">
//       <div
//         ref={modalRef}
//         style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[85vh] flex flex-col overflow-hidden"
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
//           <div>
//             <h2 className="text-lg font-bold text-gray-900">Select Currency</h2>
//             <p className="text-xs text-gray-400 mt-0.5">Prices will be shown in selected currency</p>
//           </div>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition text-lg font-bold"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Search */}
//         <div className="px-6 py-3">
//           <div className="relative">
//             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
//             <input
//               type="text"
//               placeholder="Search currency..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
//             />
//           </div>
//         </div>

//         {/* Body */}
//         <div className="overflow-y-auto px-6 pb-6 flex-1">
//           {!search && (
//             <>
//               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Top Currencies</p>
//               <div className="grid grid-cols-3 gap-2 mb-6">
//                 {TOP_CURRENCIES.map((c) => {
//                   const isSelected = selectedCurrency?.code === c.code;
//                   return (
//                     <button
//                       key={c.code + "-top"}
//                       onClick={() => { setSelectedCurrency(c); onClose(); }}
//                       className={`flex flex-col items-start gap-0.5 px-3 py-3 rounded-xl border-2 text-left transition-all ${
//                         isSelected
//                           ? "border-blue-500 bg-blue-50 text-blue-700"
//                           : "border-gray-100 bg-gray-50 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
//                       }`}
//                     >
//                       <span className="text-base font-bold">{c.symbol}</span>
//                       <span className="text-xs font-semibold">{c.code}</span>
//                       <span className="text-[10px] text-gray-400 truncate w-full">{c.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">All Currencies</p>
//             </>
//           )}

//           <div className="flex flex-col gap-1">
//             {filtered.map((c, i) => {
//               const isSelected = selectedCurrency?.code === c.code;
//               return (
//                 <button
//                   key={`${c.code}-${i}`}
//                   onClick={() => { setSelectedCurrency(c); onClose(); }}
//                   className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm text-left transition-all ${
//                     isSelected
//                       ? "bg-blue-50 text-blue-700"
//                       : "hover:bg-gray-50 text-gray-700"
//                   }`}
//                 >
//                   <div className="flex items-center gap-3">
//                     <span
//                       className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold flex-shrink-0 ${
//                         isSelected ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"
//                       }`}
//                     >
//                       {c.symbol}
//                     </span>
//                     <div>
//                       <p className="font-semibold text-sm leading-tight">{c.code}</p>
//                       <p className="text-xs text-gray-400">{c.label}</p>
//                     </div>
//                   </div>
//                   {isSelected && (
//                     <span className="text-blue-500 text-base">✓</span>
//                   )}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ─── MAIN NAVBAR ─────────────────────────────────────────────────────────────
// const Navbar = ({ toggleSidebar }) => {
//   const { isAuthenticated, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [scrolled, setScrolled]                 = useState(false);
//   const [showAuthForm, setShowAuthForm]         = useState(false);
//   const [showCurrency, setShowCurrency]         = useState(false);
//   const [selectedCurrency, setSelectedCurrency] = useState({ code: "INR", label: "Indian Rupee", symbol: "₹" });
//   const [mobileMenuOpen, setMobileMenuOpen]     = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header
//         style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
//         className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-300
//           ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-white border-b border-gray-100"}
//           h-[68px] flex items-center px-4 md:px-8`}
//       >
//         <div className="w-full flex justify-between items-center gap-4">

//           {/* ── LEFT: Hamburger + Logo ── */}
//           <div className="flex items-center gap-3">
//             <button
//               onClick={toggleSidebar}
//               className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-blue-50 text-blue-500 transition-all hover:scale-105"
//             >
//               <FaBars className="text-xl" />
//             </button>
//             <NavLink to="/" className="flex items-center gap-2">
//               <img src={logo} alt="Bird My Trip" className="h-9 md:h-11 object-contain" />
//             </NavLink>
//           </div>

//           {/* ── CENTER: Search bar (desktop only) ── */}
//           <div className="hidden lg:flex flex-1 max-w-md mx-4">
//             <div className="relative w-full">
//               <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
//               <input
//                 type="text"
//                 placeholder="Search destinations, hotels..."
//                 className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-gray-50 hover:bg-white transition"
//               />
//             </div>
//           </div>

//           {/* ── RIGHT ── */}
//           <div className="flex items-center gap-2 md:gap-3">

//             {/* List Your Property — desktop */}
//             <NavLink
//               to="/list-your-property"
//               className="hidden md:inline-flex items-center gap-1.5 border-2 border-blue-500 text-blue-600 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-blue-500 hover:text-white transition-all hover:shadow-md hover:shadow-blue-100"
//             >
//               List Property
//             </NavLink>

//             {/* ── Google Translate pill ── */}
//             <div
//               className="hidden md:flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer group"
//               title="Translate page"
//             >
//               <FaGlobe className="text-sm text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
//               <div id="google_translate_element" className="translate-widget" />
//             </div>

//             {/* ── Currency pill ── */}
//             <button
//               onClick={() => setShowCurrency(true)}
//               className="hidden md:flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-300 hover:bg-blue-50 transition-all group"
//             >
//               <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700">
//                 {selectedCurrency.symbol}
//               </span>
//               <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-800">
//                 {selectedCurrency.code}
//               </span>
//               <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-gray-600" />
//             </button>

//             {/* ── Auth button — desktop ── */}
//             {!isAuthenticated ? (
//               <button
//                 onClick={() => setShowAuthForm(true)}
//                 className="hidden md:flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2.5 rounded-xl text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 transition-all"
//               >
//                 <FaUserCircle className="text-xl flex-shrink-0" />
//                 <div className="flex flex-col leading-tight text-left">
//                   <span className="text-[10px] opacity-80 font-medium">Login or</span>
//                   <span className="text-xs font-bold">Create Account</span>
//                 </div>
//               </button>
//             ) : (
//               <button
//                 onClick={() => setShowAuthForm(true)}
//                 className="hidden md:flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-0.5"
//               >
//                 <FaUserCircle className="text-xl" />
//               </button>
//             )}

//             {/* ── Mobile right side ── */}
//             <div className="flex items-center gap-3 md:hidden">
//               {/* Mobile currency */}
//               <button
//                 onClick={() => setShowCurrency(true)}
//                 className="flex items-center gap-1 text-sm font-bold text-blue-600 border border-blue-200 rounded-lg px-2.5 py-1.5"
//               >
//                 {selectedCurrency.symbol} <span className="text-xs text-gray-500">{selectedCurrency.code}</span>
//               </button>

//               {/* Notifications */}
//               <div className="relative">
//                 <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition">
//                   <FaBell className="text-lg text-gray-700" />
//                 </button>
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
//                   3
//                 </span>
//               </div>

//               {/* Mobile auth */}
//               <button
//                 onClick={() => setShowAuthForm(true)}
//                 className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white"
//               >
//                 <FaUserCircle className="text-lg" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ── MODALS ── */}
//       {showAuthForm && (
//         <AuthForm open={showAuthForm} onClose={() => setShowAuthForm(false)} />
//       )}

//       {showCurrency && (
//         <CurrencyModal
//           onClose={() => setShowCurrency(false)}
//           selectedCurrency={selectedCurrency}
//           setSelectedCurrency={setSelectedCurrency}
//         />
//       )}

//       {/* Google Translate inline widget style */}
//       <style>{`
//         .translate-widget .goog-te-gadget { margin: 0 !important; }
//         .translate-widget .goog-te-gadget-simple {
//           background: transparent !important;
//           border: none !important;
//           padding: 0 !important;
//           line-height: 1 !important;
//         }
//         .translate-widget .goog-te-gadget-simple span { display: none; }
//         .translate-widget .goog-te-menu-value span:last-child { display: none !important; }
//         .translate-widget .goog-te-menu-value {
//           color: #6b7280 !important;
//           font-family: 'Plus Jakarta Sans', sans-serif !important;
//           font-size: 12px !important;
//           font-weight: 600 !important;
//         }
//         .translate-widget .goog-te-gadget-simple img { display: none !important; }
//         .translate-widget .goog-te-gadget-simple .goog-te-menu-value::before {
//           content: "Translate";
//           font-size: 12px;
//           font-weight: 600;
//           color: #6b7280;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .goog-te-banner-frame { display: none !important; }
//         body { top: 0 !important; }
//       `}</style>
//     </>
//   );
// };

// export default Navbar;



















import React, { useState, useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaUserCircle, FaBell, FaGlobe, FaChevronDown, FaCheck } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import AuthForm from "./AuthForm";
import logo from "../assets/logo.jpeg";

// ─── LANGUAGES ────────────────────────────────────────────────────────────────
const LANGUAGES = [
  { code: "en",      label: "English",                 flag: "🇮🇳", native: "English"          },
  { code: "hi",    label: "Hindi",                   flag: "🇮🇳", native: "हिन्दी"            },
  { code: "ar",    label: "Arabic",                  flag: "🌐",  native: "العربية"           },
  { code: "zh-TW", label: "Chinese (Traditional)",   flag: "🇹🇼", native: "繁體中文"           },
  { code: "zh-CN", label: "Chinese (Simplified)",    flag: "🇨🇳", native: "简体中文"           },
  { code: "da",    label: "Danish",                  flag: "🇩🇰", native: "Dansk"             },
  { code: "nl",    label: "Dutch",                   flag: "🇳🇱", native: "Nederlands"        },
  { code: "fi",    label: "Finnish",                 flag: "🇫🇮", native: "Suomi"             },
  { code: "fr",    label: "French",                  flag: "🇫🇷", native: "Français"          },
  { code: "de",    label: "German",                  flag: "🇩🇪", native: "Deutsch"           },
  { code: "el",    label: "Greek",                   flag: "🇬🇷", native: "Ελληνικά"         },
  { code: "id",    label: "Indonesian",              flag: "🇮🇩", native: "Bahasa Indonesia"  },
  { code: "it",    label: "Italian",                 flag: "🇮🇹", native: "Italiano"          },
  { code: "ja",    label: "Japanese",                flag: "🇯🇵", native: "日本語"             },
  { code: "ko",    label: "Korean",                  flag: "🇰🇷", native: "한국어"             },
  { code: "ms",    label: "Malay",                   flag: "🇲🇾", native: "Bahasa Melayu"     },
  { code: "pl",    label: "Polish",                  flag: "🇵🇱", native: "Polski"            },
  { code: "pt",    label: "Portuguese (Brazil)",     flag: "🇧🇷", native: "Português"         },
  { code: "ru",    label: "Russian",                 flag: "🇷🇺", native: "Русский"           },
  { code: "es",    label: "Spanish",                 flag: "🇪🇸", native: "Español"           },
  { code: "sv",    label: "Swedish",                 flag: "🇸🇪", native: "Svenska"           },
  { code: "th",    label: "Thai",                    flag: "🇹🇭", native: "ภาษาไทย"          },
  { code: "tr",    label: "Turkish",                 flag: "🇹🇷", native: "Türkçe"            },
  { code: "uk",    label: "Ukrainian",               flag: "🇺🇦", native: "Українська"        },
  { code: "vi",    label: "Vietnamese",              flag: "🇻🇳", native: "Tiếng Việt"        },
];

// ─── CURRENCIES ──────────────────────────────────────────────────────────────
const TOP_CURRENCIES = [
  { code: "INR", label: "Indian Rupee",        symbol: "₹" },
  { code: "EUR", label: "Euro",                symbol: "€" },
  { code: "USD", label: "US Dollar",           symbol: "$" },
];

const ALL_CURRENCIES = [
  { code: "INR", label: "Indian Rupee",          symbol: "₹"   },
  { code: "AED", label: "UAE Dirham",            symbol: "د.إ" },
  { code: "AUD", label: "Australian Dollar",     symbol: "A$"  },
  { code: "BHD", label: "Bahraini Dinar",        symbol: "BD"  },
  { code: "BRL", label: "Brazilian Real",        symbol: "R$"  },
  { code: "CAD", label: "Canadian Dollar",       symbol: "C$"  },
  { code: "CHF", label: "Swiss Franc",           symbol: "Fr"  },
  { code: "CNY", label: "Chinese Yuan",          symbol: "¥"   },
  { code: "COP", label: "Colombian Peso",        symbol: "COP" },
  { code: "DKK", label: "Danish Krone",          symbol: "kr"  },
  { code: "EUR", label: "Euro",                  symbol: "€"   },
  { code: "GBP", label: "British Pound",         symbol: "£"   },
  { code: "HKD", label: "Hong Kong Dollar",      symbol: "HK$" },
  { code: "IDR", label: "Indonesian Rupiah",     symbol: "Rp"  },
  { code: "ILS", label: "Israeli Shekel",        symbol: "₪"   },
  { code: "JPY", label: "Japanese Yen",          symbol: "¥"   },
  { code: "KRW", label: "Korean Won",            symbol: "₩"   },
  { code: "KWD", label: "Kuwaiti Dinar",         symbol: "KD"  },
  { code: "MXN", label: "Mexican Peso",          symbol: "Mex$"},
  { code: "MYR", label: "Malaysian Ringgit",     symbol: "RM"  },
  { code: "NZD", label: "New Zealand Dollar",    symbol: "NZ$" },
  { code: "OMR", label: "Omani Rial",            symbol: "OMR" },
  { code: "PHP", label: "Philippine Peso",       symbol: "₱"   },
  { code: "PKR", label: "Pakistani Rupee",       symbol: "₨"   },
  { code: "PLN", label: "Polish Zloty",          symbol: "zł"  },
  { code: "QAR", label: "Qatari Riyal",          symbol: "QR"  },
  { code: "RUB", label: "Russian Ruble",         symbol: "₽"   },
  { code: "SAR", label: "Saudi Riyal",           symbol: "SR"  },
  { code: "SEK", label: "Swedish Krona",         symbol: "kr"  },
  { code: "SGD", label: "Singapore Dollar",      symbol: "S$"  },
  { code: "THB", label: "Thai Baht",             symbol: "฿"   },
  { code: "TRY", label: "Turkish Lira",          symbol: "₺"   },
  { code: "TWD", label: "New Taiwan Dollar",     symbol: "NT$" },
  { code: "USD", label: "United States Dollar",  symbol: "$"   },
  { code: "VND", label: "Vietnamese Dong",       symbol: "₫"   },
  { code: "ZAR", label: "South African Rand",    symbol: "R"   },
];

// ─── GOOGLE TRANSLATE TRIGGER ─────────────────────────────────────────────────
// Sets cookie and reloads — this is the only reliable way to switch GT language
const triggerGoogleTranslate = (langCode) => {
  const hostname = window.location.hostname;
  // const value    = langCode ? `/en/${langCode}` : "/en/en";
  const value = `/en/${langCode}`;

  // Write cookie on both root domain and subdomain
  document.cookie = `googtrans=${value}; path=/`;
  document.cookie = `googtrans=${value}; path=/; domain=${hostname}`;
  document.cookie = `googtrans=${value}; path=/; domain=.${hostname}`;

  window.location.reload();
};

// ─── MODAL ────────────────────────────────────────────────────────────────────
const LangCurrencyModal = ({
  onClose,
  defaultTab,
  selectedLang,     setSelectedLang,
  selectedCurrency, setSelectedCurrency,
}) => {
  const [tab,        setTab]        = useState(defaultTab);
  const [langSearch, setLangSearch] = useState("");
  const [currSearch, setCurrSearch] = useState("");
  const [confirming, setConfirming] = useState(null); // lang being confirmed
  const modalRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const filteredLangs = LANGUAGES.filter(
    (l) =>
      l.label.toLowerCase().includes(langSearch.toLowerCase()) ||
      l.native.toLowerCase().includes(langSearch.toLowerCase())
  );

  const filteredCurrs = ALL_CURRENCIES.filter(
    (c) =>
      c.code.toLowerCase().includes(currSearch.toLowerCase()) ||
      c.label.toLowerCase().includes(currSearch.toLowerCase())
  );

  const handleLangClick = (lang) => {
    // If same language, do nothing
    if (selectedLang?.code === lang.code && selectedLang?.label === lang.label) {
      onClose();
      return;
    }
    setConfirming(lang);
  };

  const confirmLang = () => {
    if (!confirming) return;
    setSelectedLang(confirming);
    localStorage.setItem("bmt_lang", JSON.stringify(confirming));
    triggerGoogleTranslate(confirming.code);
  };

  const handleCurrSelect = (c) => {
    setSelectedCurrency(c);
    localStorage.setItem("bmt_currency", JSON.stringify(c));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={modalRef}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 flex flex-col overflow-hidden"
        style={{ maxHeight: "88vh", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {/* ── Header tabs ── */}
        <div className="flex items-center gap-3 px-6 pt-5 pb-0">
          <div className="flex gap-1 flex-1 bg-gray-100 rounded-xl p-1">
            {[
              { key: "language", icon: "🌐", label: "Language" },
              { key: "currency", icon: "💱", label: "Currency" },
            ].map(({ key, icon, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold transition-all ${
                  tab === key
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <span>{icon}</span> {label}
              </button>
            ))}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-500 transition text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* ── LANGUAGE TAB ── */}
        {tab === "language" && (
          <div className="flex flex-col overflow-hidden flex-1" style={{ minHeight: 0 }}>
            <div className="px-6 pt-4 pb-3 flex-shrink-0">
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <input
                  type="text"
                  placeholder="Search language..."
                  value={langSearch}
                  onChange={(e) => setLangSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                />
              </div>
              <div className="mt-3 flex items-start gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                <span className="text-amber-500 flex-shrink-0 mt-0.5">⚠️</span>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Changing language will reload the page and translate the entire website using Google Translate.
                </p>
              </div>
            </div>

            <div className="overflow-y-auto px-6 pb-6 flex-1">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                {langSearch ? `${filteredLangs.length} result${filteredLangs.length !== 1 ? "s" : ""}` : "All Languages"}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {filteredLangs.map((lang, idx) => {
                  const isActive = selectedLang?.code === lang.code && selectedLang?.label === lang.label;
                  return (
                    <button
                      key={`${lang.code}-${idx}`}
                      onClick={() => handleLangClick(lang)}
                      className={`flex items-center gap-3 px-3.5 py-3 rounded-xl border-2 text-left transition-all hover:-translate-y-0.5 ${
                        isActive
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-100 hover:border-blue-300 hover:bg-blue-50/40"
                      }`}
                    >
                      <span className="text-xl flex-shrink-0">{lang.flag}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold truncate leading-tight ${isActive ? "text-blue-700" : "text-gray-800"}`}>
                          {lang.native}
                        </p>
                        <p className="text-[11px] text-gray-400 truncate">{lang.label}</p>
                      </div>
                      {isActive && <FaCheck className="text-blue-500 text-xs flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── CURRENCY TAB ── */}
        {tab === "currency" && (
          <div className="flex flex-col overflow-hidden flex-1" style={{ minHeight: 0 }}>
            <div className="px-6 pt-4 pb-3 flex-shrink-0">
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <input
                  type="text"
                  placeholder="Search currency..."
                  value={currSearch}
                  onChange={(e) => setCurrSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                />
              </div>
            </div>

            <div className="overflow-y-auto px-6 pb-6 flex-1">
              {!currSearch && (
                <>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Top Currencies</p>
                  <div className="grid grid-cols-3 gap-2 mb-5">
                    {TOP_CURRENCIES.map((c) => {
                      const isSel = selectedCurrency?.code === c.code;
                      return (
                        <button
                          key={c.code + "-top"}
                          onClick={() => handleCurrSelect(c)}
                          className={`flex flex-col items-start gap-1 px-3 py-3 rounded-xl border-2 text-left transition-all hover:-translate-y-0.5 ${
                            isSel ? "border-blue-500 bg-blue-50" : "border-gray-100 hover:border-blue-300 hover:bg-blue-50/40"
                          }`}
                        >
                          <span className={`text-lg font-bold ${isSel ? "text-blue-600" : "text-gray-700"}`}>{c.symbol}</span>
                          <span className={`text-xs font-bold ${isSel ? "text-blue-700" : "text-gray-800"}`}>{c.code}</span>
                          <span className="text-[10px] text-gray-400 truncate w-full">{c.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">All Currencies</p>
                </>
              )}
              <div className="flex flex-col gap-1">
                {filteredCurrs.map((c, i) => {
                  const isSel = selectedCurrency?.code === c.code;
                  return (
                    <button
                      key={`${c.code}-${i}`}
                      onClick={() => handleCurrSelect(c)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                        isSel ? "bg-blue-50 text-blue-700" : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold flex-shrink-0 ${isSel ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}>
                          {c.symbol}
                        </span>
                        <div>
                          <p className="font-semibold text-sm leading-tight">{c.code}</p>
                          <p className="text-xs text-gray-400">{c.label}</p>
                        </div>
                      </div>
                      {isSel && <FaCheck className="text-blue-500 text-sm" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Language change confirmation popup ── */}
      {confirming && (
        <div className="absolute inset-0 flex items-center justify-center z-[3100]">
          <div
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="bg-white rounded-2xl shadow-2xl p-6 mx-4 w-full max-w-sm border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{confirming.flag}</span>
              <div>
                <p className="font-bold text-gray-900 text-base">{confirming.native}</p>
                <p className="text-xs text-gray-400">{confirming.label}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              The page will reload and translate to <strong>{confirming.label}</strong> using Google Translate. Continue?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirming(null)}
                className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmLang}
                className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition"
              >
                Yes, Translate
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── MAIN NAVBAR ─────────────────────────────────────────────────────────────
const Navbar = ({ toggleSidebar }) => {
  const { isAuthenticated } = useContext(AuthContext);

  const [scrolled, setScrolled]   = useState(false);
  const [showAuth, setShowAuth]   = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalTab, setModalTab]   = useState("language");

  const [selectedLang, setSelectedLang] = useState(
    () => JSON.parse(localStorage.getItem("bmt_lang")) ||
          { code: "en", label: "English", flag: "🇮🇳", native: "English" }
  );
  const [selectedCurrency, setSelectedCurrency] = useState(
    () => JSON.parse(localStorage.getItem("bmt_currency")) ||
          { code: "INR", label: "Indian Rupee", symbol: "₹" }
  );

  const openModal = (tab) => { setModalTab(tab); setShowModal(true); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        className={`fixed top-0 left-0 w-full z-[2000] h-[68px] flex items-center px-4 md:px-8 transition-all duration-300
          ${scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/60 border-b border-gray-100"
            : "bg-white border-b border-gray-100"}`}
      >
        <div className="w-full flex items-center justify-between gap-4">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-blue-50 text-blue-500 transition-all hover:scale-105"
            >
              <FaBars className="text-xl" />
            </button>
            <NavLink to="/">
              <img src={logo} alt="Bird My Trip" className="h-9 md:h-11 object-contain" />
            </NavLink>
          </div>

          {/* CENTER SEARCH — desktop */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search destinations, hotels..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 hover:bg-white transition"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 md:gap-2.5">

            {/* List Property */}
            <NavLink
              to="/list-your-property"
              className="hidden md:inline-flex items-center gap-1.5 border-2 border-blue-500 text-blue-600 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-blue-500 hover:text-white transition-all hover:shadow-md hover:shadow-blue-100"
            >
              List Property
            </NavLink>

            {/* Language pill */}
            <button
              onClick={() => openModal("language")}
              className="hidden md:flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <span className="text-base leading-none">{selectedLang.flag}</span>
              <span className="text-xs font-semibold text-gray-600 group-hover:text-blue-700 max-w-[80px] truncate">
                {selectedLang.native}
              </span>
              <FaChevronDown className="text-[9px] text-gray-400 group-hover:text-blue-500" />
            </button>

            {/* Currency pill */}
            <button
              onClick={() => openModal("currency")}
              className="hidden md:flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700">
                {selectedCurrency.symbol}
              </span>
              <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-800">
                {selectedCurrency.code}
              </span>
              <FaChevronDown className="text-[9px] text-gray-400 group-hover:text-blue-500" />
            </button>

            {/* Auth — desktop */}
            {!isAuthenticated ? (
              <button
                onClick={() => setShowAuth(true)}
                className="hidden md:flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2.5 rounded-xl text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 transition-all"
              >
                <FaUserCircle className="text-xl flex-shrink-0" />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[10px] opacity-80 font-medium">Login or</span>
                  <span className="text-xs font-bold">Create Account</span>
                </div>
              </button>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="hidden md:flex w-10 h-10 items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white hover:shadow-lg hover:shadow-blue-200 transition-all hover:-translate-y-0.5"
              >
                <FaUserCircle className="text-xl" />
              </button>
            )}

            {/* MOBILE right side */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => openModal("language")}
                className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold"
              >
                <span>{selectedLang.flag}</span>
                <span className="text-blue-600 font-bold">{selectedCurrency.code}</span>
              </button>
              <div className="relative">
                <button className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50">
                  <FaBell className="text-lg text-gray-700" />
                </button>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">3</span>
              </div>
              <button
                onClick={() => setShowAuth(true)}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white"
              >
                <FaUserCircle className="text-lg" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Hidden Google Translate mount point */}
      {/* <div id="google_translate_element" style={{ display: "none" }} /> */}

      {showAuth && <AuthForm open={showAuth} onClose={() => setShowAuth(false)} />}

      {showModal && (
        <LangCurrencyModal
          defaultTab={modalTab}
          onClose={() => setShowModal(false)}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
        />
      )}
    </>
  );
};

export default Navbar;