import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'משפחת כהן מספרת על תהליך הקנייה',
    thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '2:15'
  },
  {
    id: 2,
    title: 'מכירת דירה ב-30 יום - הסיפור של דוד',
    thumbnail: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '3:40'
  },
  {
    id: 3,
    title: 'השקעה נכונה בצפת - ראיון עם משקיע',
    thumbnail: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '1:50'
  },
  {
    id: 4,
    title: 'למצוא את בית החלומות בעיר העתיקה',
    thumbnail: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    duration: '4:10'
  }
];

export default function VideoTestimonials() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            לקוחות ממליצים ווידיאו
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            צפו בסיפורי ההצלחה של הלקוחות שלנו שקנו, מכרו או השקיעו בנכסים בצפת והסביבה.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:scale-110">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{video.title}</h3>
                <p className="text-slate-600">
                  לחצו לצפייה בסרטון המלא ולשמוע את החוויה האישית של הלקוח.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
