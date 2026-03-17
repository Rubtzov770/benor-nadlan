/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Bed, Bath, Square, Home, Award, TrendingUp, Menu, X, ArrowLeft, Star, Quote, CheckCircle, Globe } from 'lucide-react';
import VideoTestimonials from './pages/VideoTestimonials';
import HotProperties from './pages/HotProperties';

const testimonials = [
  {
    id: 1,
    name: 'מנחם אברהם',
    text: 'ערב טוב, תודה רבה רבה רבה על הדירה המושלמת שתווכת לי, תדע שאני מעריך מאוד, אני ואשתי (אפילו הילדים) מאושרים מהדירה, אז תודה רבה שוב על הכל, ואני מאחל לך ולמשפחה שלך שתמיד תהיו מאושרים ושמחים, ושתמיד תעשה טוב לעוד יהודים.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    role: 'קונה נכס'
  },
  {
    id: 2,
    name: 'פנחס פריד',
    text: 'ברצוני להודות למשרד תיווך בן אור על שירות מעולה ומהיר שהעניקו לי בעת רכישת דירה. הצוות היה מסור ומקצועי, מאיר פנים, סבלני, אחראי וקשוב וניהל את התהליך במהירות. אני ממליץ בחום עליהם.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    role: 'קונה נכס'
  },
  {
    id: 3,
    name: 'רחל ושמעון',
    text: 'אחרי חיפושים ארוכים עם מתווכים אחרים, הגענו למושיק. הוא מיד הבין מה אנחנו מחפשים ותוך שבועיים סגרנו עסקה מצוינת. שירות מעל ומעבר.',
    image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    role: 'משקיעים'
  }
];

const listings = [
  {
    id: 1,
    title: 'דירת 4 חדרים מרכזית',
    location: 'כנען, צפת',
    price: '₪1,650,000',
    beds: 4,
    baths: 1,
    sqm: 100,
    image: 'https://res.cloudinary.com/ds4095jem/image/upload/v1773775429/KNAAN_ayozno.jpg',
    featured: true,
    description: 'זכויות בניה נוספות. חצר, מחסן. קרובה לכל המוסדות, מיקום מרכזי מאד.'
  },
  {
    id: 2,
    title: 'בית פרטי עם צימרים ובריכה',
    location: 'הגדוד השלישי, צפת',
    price: '₪7,000,000',
    beds: 6,
    baths: 3,
    sqm: 450,
    image: 'https://res.cloudinary.com/ds4095jem/image/upload/v1773775429/GDUD_jdtsph.jpg',
    featured: true,
    description: 'שטח 1,000 מ"ר. 2 יחידות מושכרות כצימרים. בריכת שחיה, חצר וחניות פרטיות.'
  },
  {
    id: 3,
    title: 'דירת 4 חדרים עם נוף פסטורלי',
    location: 'מצפה האגם, צפת',
    price: '₪1,420,000',
    beds: 4,
    baths: 1,
    sqm: 105,
    image: 'https://res.cloudinary.com/ds4095jem/image/upload/v1773775429/MIZPE_hnmuo8.jpg',
    featured: true,
    description: 'קומה ראשונה. מרפסת סגורה בהיתר. נוף פסטורלי לכינרת. יש ממ"ד.'
  }
];

const LogoGraphic = ({ className = "h-12 w-auto", dark = false }: { className?: string, dark?: boolean }) => {
  const strokeColor = dark ? "white" : "black";
  return (
    <svg viewBox="0 0 200 80" className={className}>
      {/* Thin line left */}
      <line x1="25" y1="55" x2="70" y2="10" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      
      {/* Right Black/White Roof */}
      <polyline points="95,55 130,20 175,65" fill="none" stroke={strokeColor} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Thin line right */}
      <line x1="140" y1="15" x2="185" y2="60" stroke={strokeColor} strokeWidth="2" strokeLinecap="round"/>
      
      {/* Red block under black roof */}
      <rect x="118" y="55" width="24" height="10" fill="#D32F2F"/>

      {/* Left Red Roof (drawn last to overlap) */}
      <polyline points="25,70 75,20 110,55" fill="none" stroke="#D32F2F" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round"/>
      
      {/* Window under red roof */}
      <rect x="55" y="55" width="24" height="10" fill="none" stroke={strokeColor} strokeWidth="3"/>
    </svg>
  );
};

const Logo = ({ className = "", dark = false }: { className?: string, dark?: boolean }) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <LogoGraphic className="h-10 md:h-12 w-auto mb-1" dark={dark} />
    <div className={`text-2xl md:text-3xl font-black tracking-tight leading-none mb-1 flex items-center gap-1.5 ${dark ? 'text-white' : 'text-black'}`}>
      <span>בן אור</span>
      <span className="font-normal">נכסים</span>
    </div>
    <div className={`flex items-center gap-2 text-[8px] md:text-[10px] tracking-widest ${dark ? 'text-slate-300' : 'text-gray-600'}`}>
      <span>תיווך</span>
      <div className={`w-1.5 h-1.5 ${dark ? 'bg-slate-300' : 'bg-black'}`}></div>
      <span>השקעות</span>
      <div className={`w-1.5 h-1.5 ${dark ? 'bg-slate-300' : 'bg-black'}`}></div>
      <span>ניהול נכסים</span>
    </div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Also check on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure navbar is dark on pages other than home if not scrolled
  const isHomePage = location.pathname === '/';
  const shouldBeDark = !isScrolled && isHomePage;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${!shouldBeDark ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Logo dark={shouldBeDark} className="scale-75 md:scale-90 origin-right" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/#home" className={`font-medium hover:text-amber-500 transition-colors ${!shouldBeDark ? 'text-slate-700' : 'text-slate-200'}`}>ראשי</a>
            <a href="/#about" className={`font-medium hover:text-amber-500 transition-colors ${!shouldBeDark ? 'text-slate-700' : 'text-slate-200'}`}>אודות</a>
            <a href="/#credo" className={`font-medium hover:text-amber-500 transition-colors ${!shouldBeDark ? 'text-slate-700' : 'text-slate-200'}`}>אני מאמין</a>
            <a href="/#properties" className={`font-medium hover:text-amber-500 transition-colors ${!shouldBeDark ? 'text-slate-700' : 'text-slate-200'}`}>נכסים נבחרים</a>
            <Link to="/hot-properties" className={`font-medium hover:text-amber-500 transition-colors ${!shouldBeDark ? 'text-slate-700' : 'text-slate-200'}`}>נכסים חמים</Link>
            <a href="/#testimonials" className={`font-medium hover:text-amber-500 transition-colors ${!shouldBeDark ? 'text-slate-700' : 'text-slate-200'}`}>המלצות</a>
            <Link to="/video-testimonials" className={`font-medium hover:text-amber-500 transition-colors ${!shouldBeDark ? 'text-slate-700' : 'text-slate-200'}`}>לקוחות ממליצים ווידיאו</Link>
            <a href="/#contact" className={`font-medium hover:text-amber-500 transition-colors ${!shouldBeDark ? 'text-slate-700' : 'text-slate-200'}`}>צור קשר</a>
          </nav>

          <div className="hidden md:block">
            <a href="tel:0556662393" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span dir="ltr">055-666-2393</span>
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={`w-7 h-7 ${!shouldBeDark ? 'text-slate-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-7 h-7 ${!shouldBeDark ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          <a href="/#home" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">ראשי</a>
          <a href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">אודות</a>
          <a href="/#credo" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">אני מאמין</a>
          <a href="/#properties" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">נכסים נבחרים</a>
          <Link to="/hot-properties" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">נכסים חמים</Link>
          <a href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">המלצות</a>
          <Link to="/video-testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">לקוחות ממליצים ווידיאו</Link>
          <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg">צור קשר</a>
          <a href="tel:0556662393" className="bg-amber-600 text-white p-3 rounded-lg font-medium flex items-center justify-center gap-2 mt-2">
            <Phone className="w-5 h-5" />
            <span dir="ltr">055-666-2393</span>
          </a>
        </div>
      )}
    </header>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // סימולציה של שליחת טופס למושיק בן אור
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">בואו נדבר על הנכס הבא שלכם</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            השאירו פרטים ואחזור אליכם בהקדם האפשרי לפגישת ייעוץ ללא התחייבות.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full text-amber-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400">טלפון נייד</p>
                <p className="text-xl font-medium" dir="ltr">055-666-2393</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full text-amber-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400">דוא"ל</p>
                <p className="text-xl font-medium">MBO770@GMAIL.COM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full text-amber-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400">משרד</p>
                <p className="text-xl font-medium">רחוב השבעה 204 כנען, צפת</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-4 rounded-full text-amber-500">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400">אתר אינטרנט</p>
                <p className="text-xl font-medium" dir="ltr">BENOR-NADLAN.CO.IL</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center min-h-[400px]"
              >
                <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">הפנייה נשלחה בהצלחה!</h3>
                <p className="text-emerald-200">תודה שפנית אליי. אחזור אליך בהקדם האפשרי.</p>
              </motion.div>
            ) : (
              <form className="bg-white/5 p-8 rounded-2xl border border-white/10" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">שם מלא *</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="ישראל ישראלי" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">טלפון *</label>
                    <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-right" placeholder="055-0000000" dir="ltr" />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">דוא"ל *</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-right" placeholder="example@email.com" dir="ltr" />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-slate-300 mb-2">הודעה *</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all" placeholder="ספר/י לי קצת על מה שאתם מחפשים..."></textarea>
                </div>
                <button disabled={isSubmitting} type="submit" className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-600/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors text-lg flex items-center justify-center gap-2">
                  {isSubmitting ? 'שולח...' : 'שלח פנייה'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Safed Real Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            הבית הבא שלכם ב<span className="text-amber-500">צפת</span> מתחיל כאן
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-200 mb-10"
          >
            מושיק בן אור - מומחה הנדל"ן שלכם בעיר המקובלים והסביבה.
            <br className="hidden md:block" /> ליווי אישי, מקצועיות ללא פשרות ותוצאות.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#properties" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center justify-center gap-2">
              צפו בנכסים <ArrowLeft className="w-5 h-5" />
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-colors flex items-center justify-center gap-2">
              דברו איתי <Phone className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://res.cloudinary.com/ds4095jem/image/upload/v1773776090/Screenshot_2026-03-16_205024_scvwod.jpg"
                alt="Moshik Ben-Or"
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">נעים להכיר, מושיק בן אור</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                עם ניסיון של למעלה מעשור בשוק הנדל"ן המקומי, אני מביא איתי היכרות מעמיקה עם כל שכונה, רחוב וסמטה בעיר צפת.
                העיר צפת היא לא רק אזור פעילות עבורי, היא הבית.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                האני מאמין שלי דוגל בשקיפות מלאה, אמינות וליווי צמוד לכל אורך התהליך - החל משלב חיפוש הנכס או הקונה, דרך המשא ומתן ועד לחתימה המוצלחת.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">מקצוענות</h4>
                    <p className="text-sm text-slate-500">סטנדרט שירות גבוה</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-3 rounded-lg text-amber-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">תוצאות</h4>
                    <p className="text-sm text-slate-500">מאות עסקאות מוצלחות</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credo Section */}
      <section id="credo" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              אני מאמין
            </motion.h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              הדרך שלנו להצלחה בעסקת הנדל"ן שלכם
            </p>
          </div>
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-4xl"
            >
              <img
                src="https://res.cloudinary.com/ds4095jem/image/upload/v1773776090/WhatsApp_Image_2026-03-16_at_21.02.37_grzfhl.jpg"
                alt="אני מאמין - עסקת חייכם או איך קונים נכס?"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              נכסים נבחרים בצפת
            </motion.h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              הזדמנויות נדל"ן ייחודיות שאספתי עבורכם. מבתים היסטוריים בעיר העתיקה ועד וילות יוקרתיות.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {listing.featured && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      נכס מבוקש
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-slate-900 font-bold px-4 py-2 rounded-lg shadow-md">
                    {listing.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    {listing.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1">{listing.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 h-[40px]">{listing.description}</p>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Bed className="w-5 h-5 text-slate-400" />
                      <span>{listing.beds} חד'</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Bath className="w-5 h-5 text-slate-400" />
                      <span>{listing.baths} מקל'</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Square className="w-5 h-5 text-slate-400" />
                      <span>{listing.sqm} מ"ר</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-white border-2 border-slate-200 hover:border-amber-500 hover:text-amber-600 text-slate-700 font-medium px-8 py-3 rounded-full transition-colors inline-flex items-center gap-2">
              לכל הנכסים <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              לקוחות ממליצים
            </motion.h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              ההצלחה שלי נמדדת בשביעות הרצון של הלקוחות שלי. הנה מה שיש להם להגיד.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl relative h-full flex flex-col"
              >
                <Quote className="absolute top-6 left-6 w-10 h-10 text-amber-200" />
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-8 relative z-10 leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section removed from here, now in App layout */}
    </main>
  );
}

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 text-center">
    <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-8">
      <Logo dark={true} className="opacity-80 hover:opacity-100 transition-opacity" />
      <p>© {new Date().getFullYear()} מושיק בן אור תיווך נדל"ן. כל הזכויות שמורות.</p>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <a
    href="https://wa.me/972556662393"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform flex items-center justify-center"
    aria-label="שלח הודעת וואטסאפ"
  >
    <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 fill-current">
      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.21 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.195-.572-.345z"/>
      <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.48-8.45zM12.046 21.84c-1.774 0-3.512-.473-5.035-1.363l-.36-.211-3.741.975.996-3.626-.235-.37A9.896 9.896 0 011.99 11.89c.003-5.522 4.529-10.022 10.063-10.022 2.69 0 5.215 1.04 7.114 2.93 1.898 1.89 2.94 4.4 2.94 7.085-.004 5.524-4.53 10.025-10.061 10.025z"/>
    </svg>
  </a>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans" dir="rtl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video-testimonials" element={<VideoTestimonials />} />
          <Route path="/hot-properties" element={<HotProperties />} />
        </Routes>
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
