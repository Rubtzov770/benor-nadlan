import React from 'react';
import { motion } from 'motion/react';

export default function HotProperties() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            נכסים חמים
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            הזדמנויות נדל"ן שאסור לפספס. נכסים במחירים אטרקטיביים לזמן מוגבל!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100"
        >
          {/* 
            התמונה תוצג כאן. 
            כדי שהתמונה תעבוד, יש להעלות את התמונה שצירפת לתיקיית public 
            ולקרוא לה בשם hot-properties.jpg
          */}
          <img 
            src="/hot-properties.jpg" 
            alt="נכסים חמים למכירה ולהשכרה" 
            className="w-full h-auto object-contain"
            onError={(e) => {
              // Fallback if image is not uploaded yet
              e.currentTarget.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
              e.currentTarget.alt = 'תמונת נכסים חמים חסרה - אנא העלה את התמונה לתיקיית public';
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
