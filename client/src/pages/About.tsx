import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Info, MapPin, Users, Building, TreePine, Droplets } from "lucide-react";
import landscapeImage from "@assets/stock_images/indian_village_lands_5cdf1fb5.jpg";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">आपल गाव - निमगाव</h1>
            <p className="text-xl opacity-90">ऐतिहासिक वारसा आणि आधुनिक विकासाचा संगम</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-8">
              <section className="prose prose-lg max-w-none text-muted-foreground">
                <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
                  <Info className="h-8 w-8 text-secondary" />
                  परिचय
                </h2>
                <p>
                  निमगाव (Nimgaon) हे नाशिक जिल्ह्यातील मालेगाव तालुक्यात असलेले एक प्रमुख गाव आहे. 
                  हे गाव मालेगाव उपजिल्हा मुख्यालयापासून सुमारे २० किमी आणि जिल्हा मुख्यालय नाशिकपासून सुमारे १२५ किमी अंतरावर वसलेले आहे.
                  नैसर्गिक सौंदर्याने नटलेले हे गाव आपल्या शांत आणि सलोख्याच्या वातावरणासाठी ओळखले जाते.
                </p>
                <p>
                  गावात विविध जाती-धर्माचे लोक गुण्यागोविंदाने राहतात. शेती हा गावाचा मुख्य व्यवसाय असून, 
                  गावात ज्वारी, बाजरी, मका, कांदा आणि डाळिंब या पिकांचे प्रामुख्याने उत्पादन घेतले जाते.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Building className="h-6 w-6 text-secondary" />
                  भौगोलिक माहिती व सुविधा
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <span className="text-sm text-muted-foreground block">तालुका</span>
                    <span className="text-lg font-semibold">मालेगाव</span>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <span className="text-sm text-muted-foreground block">जिल्हा</span>
                    <span className="text-lg font-semibold">नाशिक</span>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <span className="text-sm text-muted-foreground block">पिन कोड</span>
                    <span className="text-lg font-semibold">४२३१०५</span>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border">
                    <span className="text-sm text-muted-foreground block">जवळचे रेल्वे स्टेशन</span>
                    <span className="text-lg font-semibold">मनमाड जंक्शन (४० किमी)</span>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                  <TreePine className="h-6 w-6 text-secondary" />
                  वैशिष्ट्ये
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "तंटामुक्त गाव पुरस्कार प्राप्त",
                    "संत गाडगेबाबा ग्रामस्वच्छता अभियान पुरस्कार",
                    "संपूर्ण विद्युतीकरण",
                    "नळ पाणी पुरवठा योजना",
                    "डिजिटल शाळा व अंगणवाडी",
                    "सांडपाणी व्यवस्थापन प्रणाली"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-muted/30 p-3 rounded-lg">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <Users className="h-5 w-5" /> लोकसंख्या सांख्यिकी
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">एकूण लोकसंख्या</span>
                    <span className="font-bold text-xl">६,९९५</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">पुरुष</span>
                    <span className="font-bold">३,६३७</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">स्त्रिया</span>
                    <span className="font-bold">३,३५८</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">कुटुंब संख्या</span>
                    <span className="font-bold">१,२००+</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md">
                <img src={landscapeImage} alt="Nimgaon Landscape" className="w-full h-auto object-cover" />
                <div className="bg-primary p-4 text-primary-foreground text-center">
                  <p className="font-medium">निमगाव - निसर्गाच्या कुशीत</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
