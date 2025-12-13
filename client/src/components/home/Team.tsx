import { Users } from "lucide-react";
// Fall back to the provided silhouette image for uniform presentation
const fallbackAvatar = "https://freesvg.org/img/cliente.png";

const MEMBERS = [
  { name: "जयश्री पांडुरंग बागुल", role: "सरपंच", image: fallbackAvatar },
  { name: "आकाश मधुकर हिरे", role: "उपसरपंच", image: fallbackAvatar },
  { name: "योगिता विपुल नंदाळे", role: "सदस्य", image: fallbackAvatar },
  { name: "भारती भावराव हिरे", role: "सदस्य", image: fallbackAvatar },
  { name: "शरद कारभारी ठाकरे", role: "सदस्य", image: fallbackAvatar },
  { name: "उर्मिला अरुण पाटील", role: "सदस्य", image: fallbackAvatar },
];

export function Team() {
  return (
    <section id="team" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-2">आमचे पदाधिकारी</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">गावाच्या विकासासाठी कटिबद्ध असलेले आमचे प्रतिनिधी</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MEMBERS.map((member, idx) => (
            <div 
              key={idx} 
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border/50"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">संपर्क साधा</span>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
