import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Stethoscope, Ambulance, Phone, Activity } from "lucide-react";
import healthImage from "@assets/stock_images/indian_rural_hospita_d669287c.jpg";

export default function Health() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">आरोग्य सेवा</h1>
            <p className="text-xl opacity-90">निरोगी गाव, समृद्ध गाव</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-xl overflow-hidden shadow-md">
                <img src={healthImage} alt="Health Center" className="w-full h-64 object-cover" />
              </div>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Stethoscope className="h-6 w-6" /> प्राथमिक आरोग्य केंद्र (PHC)
                </h2>
                <div className="bg-card p-6 rounded-xl border border-border space-y-4">
                  <p className="text-muted-foreground">
                    गावातील नागरिकांच्या आरोग्याची काळजी घेण्यासाठी प्राथमिक आरोग्य केंद्र सुसज्ज आहे. 
                    येथे बाह्यरुग्ण विभाग (OPD), लसीकरण, आणि प्रथमोपचार सुविधा उपलब्ध आहेत.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-1">वेळ</h4>
                      <p className="text-sm">सकाळी ९:०० ते सायं ५:००</p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h4 className="font-bold mb-1">वैद्यकीय अधिकारी</h4>
                      <p className="text-sm">डॉ. सुरेश पाटील</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Activity className="h-6 w-6" /> उपलब्ध सेवा
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "नियमित आरोग्य तपासणी",
                    "गर्भवती मातांची तपासणी व लसीकरण",
                    "बालकांचे लसीकरण (दर बुधवारी)",
                    "हिवताप व डेंग्यू नियंत्रण",
                    "कुटुंब कल्याण सल्ला",
                    "संसर्गजन्य रोग नियंत्रण"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 bg-white p-3 rounded shadow-sm border border-border">
                      <div className="h-2 w-2 bg-accent rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Emergency Sidebar */}
            <div className="space-y-6">
              <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-destructive mb-4 flex items-center gap-2">
                  <Ambulance className="h-6 w-6" /> आपत्कालीन संपर्क
                </h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                    <span className="font-medium">रुग्णवाहिका</span>
                    <a href="tel:108" className="font-bold text-destructive flex items-center gap-1 hover:underline">
                      <Phone className="h-4 w-4" /> 108
                    </a>
                  </li>
                  <li className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                    <span className="font-medium">आरोग्य सेविका</span>
                    <a href="tel:1234567890" className="font-bold text-primary flex items-center gap-1 hover:underline">
                      <Phone className="h-4 w-4" /> Call
                    </a>
                  </li>
                  <li className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                    <span className="font-medium">आशा वर्कर</span>
                    <a href="tel:1234567890" className="font-bold text-primary flex items-center gap-1 hover:underline">
                      <Phone className="h-4 w-4" /> Call
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/10 border border-secondary/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-secondary-foreground mb-2">शासकीय योजना</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  महात्मा ज्योतिबा फुले जन आरोग्य योजनेचा लाभ घेण्यासाठी ग्रामपंचायतीशी संपर्क साधा.
                </p>
                <button className="w-full bg-secondary text-white py-2 rounded font-medium hover:bg-secondary/90 transition-colors">
                  अधिक माहिती
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
