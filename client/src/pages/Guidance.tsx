import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FileText, Download, ExternalLink } from "lucide-react";

const LINKS = [
  { title: "जन्म/मृत्यू नोंदणी प्रमाणपत्र", url: "https://crsorgi.gov.in/web/index.php/auth/login", cat: "दाखले" },
  { title: "विवाह नोंदणी प्रमाणपत्र", url: "#", cat: "दाखले" },
  { title: "रहिवासी दाखला", url: "#", cat: "दाखले" },
  { title: "उत्पन्नाचा दाखला", url: "https://aaplesarkar.maharashtra.gov.in/", cat: "दाखले" },
  { title: "७/१२ उतारा (Bhulekh)", url: "https://bhulekh.mahabhumi.gov.in/", cat: "जमीन महसूल" },
  { title: "घरपट्टी / पाणीपट्टी भरणा", url: "#", cat: "कर भरणा" },
  { title: "मनरेगा जॉब कार्ड", url: "https://nrega.nic.in/", cat: "योजना" },
  { title: "पंतप्रधान आवास योजना", url: "https://pmaymis.gov.in/", cat: "योजना" },
];

export default function Guidance() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">मार्गदर्शक सेवा व लिंक्स</h1>
            <p className="text-xl opacity-90">नागरिकांच्या सुविधेसाठी उपयुक्त शासकीय लिंक्स</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {["दाखले", "जमीन महसूल", "कर भरणा", "योजना"].map((category) => (
              <div key={category} className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="bg-muted/50 p-4 border-b border-border">
                  <h2 className="text-xl font-bold text-primary">{category}</h2>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {LINKS.filter(l => l.cat === category).map((link, idx) => (
                      <li key={idx}>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center justify-between p-3 rounded hover:bg-muted/50 transition-colors group"
                        >
                          <span className="font-medium flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                            {link.title}
                          </span>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                        </a>
                      </li>
                    ))}
                    {LINKS.filter(l => l.cat === category).length === 0 && (
                      <li className="text-muted-foreground italic text-sm p-2">माहिती उपलब्ध नाही</li>
                    )}
                  </ul>
                </div>
              </div>
            ))}

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
