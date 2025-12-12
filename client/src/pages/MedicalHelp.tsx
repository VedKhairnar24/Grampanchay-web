import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeartPulse, PhoneCall, Pill } from "lucide-react";

export default function MedicalHelp() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="bg-destructive text-destructive-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">वैद्यकीय मदत कक्ष</h1>
            <p className="text-xl opacity-90">तात्काळ वैद्यकीय सहाय्यासाठी</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="bg-card border-l-4 border-destructive p-6 rounded-r-lg shadow-sm">
              <h2 className="text-2xl font-bold text-destructive mb-4 flex items-center gap-2">
                <HeartPulse className="h-7 w-7" /> २४x७ आपत्कालीन सेवा
              </h2>
              <p className="text-lg mb-6">
                गावात कोणतीही वैद्यकीय आणीबाणी उद्भवल्यास खालील क्रमांकांवर संपर्क साधा. 
                ग्रामपंचायत प्रशासन आपल्याला मदत करण्यास कटिबद्ध आहे.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="tel:108" className="flex items-center justify-center gap-3 bg-destructive text-white p-4 rounded-lg font-bold text-xl hover:bg-destructive/90 transition-colors">
                  <PhoneCall className="h-6 w-6" /> १०८ (रुग्णवाहिका)
                </a>
                <a href="tel:104" className="flex items-center justify-center gap-3 bg-primary text-white p-4 rounded-lg font-bold text-xl hover:bg-primary/90 transition-colors">
                  <PhoneCall className="h-6 w-6" /> १०४ (आरोग्य सल्ला)
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Pill className="h-5 w-5 text-secondary" /> जवळील औषध दुकाने (Medical Stores)
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>साई समर्थ मेडिकल</span>
                    <span className="font-mono text-sm">९४२०xxxxxx</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>जीवन मेडिकल स्टोअर्स</span>
                    <span className="font-mono text-sm">८८८८xxxxxx</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <HeartPulse className="h-5 w-5 text-secondary" /> जवळील खाजगी दवाखाने
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>डॉ. पाटील क्लिनिक</span>
                    <span className="font-mono text-sm">सका. १०-२ / सायं. ५-९</span>
                  </li>
                  <li className="flex justify-between border-b border-border pb-2">
                    <span>संजीवनी हॉस्पिटल (मालेगाव)</span>
                    <span className="font-mono text-sm">२४ तास</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
