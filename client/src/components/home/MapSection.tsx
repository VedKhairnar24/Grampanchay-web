import { MapPin } from "lucide-react";

export function MapSection() {
  return (
    <section id="contact" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">गावाचा नकाशा व दिशा</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-card p-4 rounded-xl shadow-md border border-border">
          <div className="aspect-video w-full rounded-lg overflow-hidden relative bg-muted flex items-center justify-center">
            {/* Placeholder for Google Map - using an iframe for a real location would be ideal, but for now we use a visual placeholder or a generic iframe */}
            <iframe 
              src="https://www.google.com/maps?q=20.7905449,74.6224755&z=15&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
            
            <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 font-bold text-primary">
                <MapPin className="h-5 w-5 text-secondary" />
                भारदेनगर ग्रामपंचायत
              </div>
              <p className="text-xs text-muted-foreground ml-7">ता. मालेगाव, जि. नाशिक</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
