import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, User, Phone, Mail } from "lucide-react";
// Fallback silhouette/avatar design for members (4:3)
const fallbackAvatar = "https://freesvg.org/img/cliente.png";

const MEMBERS = [
  { name: "जयश्री पांडुरंग बागुल", role: "सरपंच", image: fallbackAvatar, phone: "98xxxxxx01" },
  { name: "आकाश मधुकर हिरे", role: "उपसरपंच", image: fallbackAvatar, phone: "98xxxxxx02" },
  { name: "योगिता विपुल नंदाळे", role: "सदस्य", image: fallbackAvatar, phone: "98xxxxxx03" },
  { name: "भारती भावराव हिरे", role: "सदस्य", image: fallbackAvatar, phone: "98xxxxxx04" },
  { name: "शरद कारभारी ठाकरे", role: "सदस्य", image: fallbackAvatar, phone: "98xxxxxx05" },
  { name: "उर्मिला अरुण पाटील", role: "सदस्य", image: fallbackAvatar, phone: "98xxxxxx06" },
  { name: "सरला तुषार जगताप", role: "सदस्य", image: fallbackAvatar, phone: "98xxxxxx07" },
  { name: "मनोज तुकाराम हिरे", role: "सदस्य", image: fallbackAvatar, phone: "98xxxxxx08" },
];

const STAFF = [
  { name: "श्री. ए. बी. पाटील", role: "ग्रामसेवक", phone: "99xxxxxx01" },
  { name: "श्री. आर. के. जाधव", role: "लिपिक", phone: "99xxxxxx02" },
  { name: "श्री. एस. एम. पवार", role: "शिपाई", phone: "99xxxxxx03" },
  { name: "श्री. पी. डी. साळुंखे", role: "पाणीपुरवठा कर्मचारी", phone: "99xxxxxx04" },
];

export default function Staff() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">पदाधिकारी व सेवकवर्ग</h1>
            <p className="text-xl opacity-90">गावाच्या विकासासाठी अहोरात्र कार्यरत असलेली आमची टीम</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Main Content */}
          <div className="grid grid-cols-1 gap-12">
            
            {/* Elected Members Section */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-8 border-b pb-2 flex items-center gap-2">
                <Users className="h-6 w-6" />
                ग्रामपंचायत सदस्य (पदाधिकारी)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {MEMBERS.map((member, idx) => (
                  <div key={idx} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border group hover:shadow-md transition-all">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <div className="text-primary font-medium text-sm mb-3">{member.role}</div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        <span>{member.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Staff Section */}
            <section className="bg-muted/30 p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-primary mb-8 border-b pb-2 flex items-center gap-2">
                <User className="h-6 w-6" />
                ग्रामपंचायत कर्मचारी (सेवकवर्ग)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {STAFF.map((staff, idx) => (
                  <div key={idx} className="bg-background p-6 rounded-lg shadow-sm border border-border flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xl shrink-0">
                      {staff.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{staff.name}</h3>
                      <p className="text-primary text-sm font-medium mb-1">{staff.role}</p>
                      <p className="text-muted-foreground text-sm flex items-center gap-2">
                        <Phone className="h-3 w-3" /> {staff.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
