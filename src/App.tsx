import { motion } from 'motion/react';
import { Heart, Instagram, Mail, Send } from 'lucide-react';

const images = [
  { src: "https://storage.googleapis.com/aistudio-user-content-prod/user-content-406158226064/f1442116-2470-496a-867c-9b19e2c60c87.png", alt: "Crochet Unicorn" },
  { src: "https://storage.googleapis.com/aistudio-user-content-prod/user-content-406158226064/f4039832-6028-4f10-911e-0d1c790d04b6.png", alt: "Crochet Bunny in Egg" },
  { src: "https://storage.googleapis.com/aistudio-user-content-prod/user-content-406158226064/2a665287-293e-4366-b337-124976450f26.png", alt: "Crochet Dog with Bandana" },
  { src: "https://storage.googleapis.com/aistudio-user-content-prod/user-content-406158226064/443d3401-d007-4e01-a28c-443b74966d54.png", alt: "Crochet Horse" },
  { src: "https://storage.googleapis.com/aistudio-user-content-prod/user-content-406158226064/22589f2a-87b6-4b68-80f4-52328701986c.png", alt: "Crochet Dog with Burger" },
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-purple selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-brand-bg/80 backdrop-blur-md z-50 border-b border-brand-purple/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-brand-purple fill-brand-purple" />
            <span className="font-display font-bold text-2xl tracking-tight text-gray-900">
              The Shimmering Hook
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <a href="#gallery" className="hover:text-brand-purple transition-colors">Gallery</a>
            <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
            <a href="#contact" className="px-5 py-2.5 bg-brand-purple text-white rounded-full hover:bg-purple-600 transition-colors shadow-sm shadow-brand-purple/30">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image Collage */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px] sm:h-[500px] w-full"
        >
          <img src={images[0].src} alt={images[0].alt} className="absolute top-0 left-0 w-3/5 h-[60%] object-cover rounded-3xl shadow-md border-4 border-white z-10" referrerPolicy="no-referrer" />
          <img src={images[2].src} alt={images[2].alt} className="absolute bottom-0 right-0 w-3/5 h-[60%] object-cover rounded-3xl shadow-md border-4 border-white z-10" referrerPolicy="no-referrer" />
          <img src={images[1].src} alt={images[1].alt} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[50%] object-cover rounded-3xl shadow-xl border-4 border-white z-20" referrerPolicy="no-referrer" />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Whimsical <span className="text-brand-purple">Crochet</span> Art
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Handcrafted with love, yarn, and a touch of magic. Explore my collection of unique, cuddly companions designed to bring joy to your everyday life.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#gallery" className="px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              View Gallery
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:border-brand-purple hover:text-brand-purple transition-colors">
              Commission a Piece
            </a>
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-4xl font-bold text-gray-900">Featured Works</h2>
          <div className="h-px bg-gray-200 flex-grow ml-8 hidden sm:block"></div>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-bg rounded-[3rem] p-8 md:p-16 shadow-sm border border-brand-purple/10 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">Let's Create Something Special</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have a custom request or just want to say hello? I'd love to hear from you. Fill out the form and I'll get back to you as soon as I put my hook down.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-purple">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Email</p>
                      <p className="font-medium text-gray-900">hello@shimmeringhook.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-brand-purple">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">Instagram</p>
                      <p className="font-medium text-gray-900">@theshimmeringhook</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-5 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-brand-purple/50 outline-none transition-shadow"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-5 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-brand-purple/50 outline-none transition-shadow"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-5 py-4 rounded-2xl border-none bg-white shadow-sm focus:ring-2 focus:ring-brand-purple/50 outline-none transition-shadow resize-none"
                    placeholder="Tell me about your idea..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 px-6 bg-brand-purple text-white rounded-2xl font-medium hover:bg-purple-600 transition-colors shadow-sm shadow-brand-purple/30 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} The Shimmering Hook. All rights reserved.</p>
      </footer>
    </div>
  );
}
