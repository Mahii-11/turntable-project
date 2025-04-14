import { motion } from "framer-motion";
import { Headphones, HandMetal, Disc } from "lucide-react";
import { useScrollAnimation, fadeIn, slideUp } from "@/lib/animations";

export default function Experience() {
  const { ref, controls } = useScrollAnimation();

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-black">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Vinyl Records Collection" 
          className="w-full h-full object-cover"
          style={{ transform: "translateZ(-10px) scale(1.15)" }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideUp}
            className="font-serif text-4xl md:text-5xl font-bold mb-8"
          >
            The <span className="text-[#D4AF37]">Vinyl Experience</span>
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="text-xl text-gray-300 mb-12"
          >
            There's something magical about placing the needle on a vinyl record. The subtle crackle, the warm tones, and the tactile experience create a connection to music that digital formats simply can't replicate.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <div className="text-4xl text-[#D4AF37] mb-4">
                <Headphones size={48} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Rich, Warm Sound</h3>
              <p className="text-gray-400">Experience the full dynamic range and warmth that makes vinyl sound legendary.</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl text-[#D4AF37] mb-4">
                <HandMetal size={48} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Tactile Experience</h3>
              <p className="text-gray-400">From handling the record to watching it spin, vinyl creates a physical connection to music.</p>
            </div>
            
            <div className="p-6">
              <div className="text-4xl text-[#D4AF37] mb-4">
                <Disc size={48} />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">Artistic Expression</h3>
              <p className="text-gray-400">Album artwork, liner notes, and physical media enhance the artistic experience.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
