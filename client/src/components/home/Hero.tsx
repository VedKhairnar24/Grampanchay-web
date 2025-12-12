import { motion } from "framer-motion";
import heroImage from "@assets/stock_images/indian_village_lands_5cdf1fb5.jpg";

export function Hero() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-bold mb-4">
            नाशिक जिल्हा, मालेगाव तालुका
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            निमगाव ग्रामपंचायत
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
            "गाव हा विश्वाचा नकाशा | गाव वरून देशाची परीक्षा | गावाची भंगता अवदेशा | येईल देशा"
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg">
              आमचे कार्य
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              संपर्क साधा
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
