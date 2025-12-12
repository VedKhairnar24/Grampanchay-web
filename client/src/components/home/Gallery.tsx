import schoolImage from "@assets/stock_images/indian_government_sc_fce6e85c.jpg";
import landscapeImage from "@assets/stock_images/indian_village_lands_3d79165f.jpg";

const IMAGES = [
  schoolImage,
  landscapeImage,
  schoolImage,
  landscapeImage,
  landscapeImage,
  schoolImage,
];

export function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">माझी स्वच्छ आदर्श पंचायत</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {IMAGES.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg aspect-video cursor-pointer">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  पहा
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
