import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Accessibility, FileCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DisabledRegistration() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">दिव्यांग नोंदणी कक्ष</h1>
            <p className="text-xl opacity-90">दिव्यांग बांधवांसाठी सहाय्य आणि नोंदणी सुविधा</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Info Section */}
            <div className="space-y-8">
              <section className="bg-accent/10 p-6 rounded-xl border border-accent/20">
                <h2 className="text-2xl font-bold text-accent-foreground mb-4 flex items-center gap-2">
                  <Accessibility className="h-7 w-7" />
                  दिव्यांग कल्याण योजना
                </h2>
                <p className="text-muted-foreground mb-4">
                  ग्रामपंचायतीमार्फत गावातील दिव्यांग व्यक्तींचे सर्वेक्षण आणि नोंदणी केली जाते. 
                  शासकीय योजनांचा लाभ मिळवून देण्यासाठी आम्ही कटिबद्ध आहोत.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>UDID कार्ड नोंदणी सहाय्य</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>संजय गांधी निराधार योजना</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>मोफत एसटी प्रवास पास</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>कृत्रिम अवयव व साधने वाटप</span>
                  </li>
                </ul>
              </section>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold mb-2">संपर्क व्यक्ती</h3>
                <p className="font-medium text-lg">श्री. ए. बी. पाटील (ग्रामसेवक)</p>
                <p className="text-muted-foreground">मोबाईल: ९९xxxxxx०१</p>
                <p className="text-muted-foreground mt-2 text-sm">
                  टीप: नोंदणीसाठी आधार कार्ड, पासपोर्ट फोटो, आणि अपंगत्व प्रमाणपत्र सोबत आणावे.
                </p>
              </div>
            </div>

            {/* Registration Form Mockup */}
            <div className="bg-card p-8 rounded-xl shadow-md border border-border">
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <FileCheck className="h-6 w-6" />
                नवीन नोंदणी अर्ज
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">नाव</Label>
                    <Input id="firstName" placeholder="प्रथम नाव" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">आडनाव</Label>
                    <Input id="lastName" placeholder="आडनाव" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="aadhar">आधार क्रमांक</Label>
                  <Input id="aadhar" placeholder="xxxx-xxxx-xxxx" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="disabilityType">अपंगत्वाचा प्रकार</Label>
                  <Input id="disabilityType" placeholder="उदा. अस्थिव्यंग, कर्णबधिर..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="percentage">टक्केवारी (%)</Label>
                  <Input id="percentage" placeholder="40%" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">पत्ता</Label>
                  <Textarea id="address" placeholder="मु. पो. निमगाव, ता. मालेगाव..." />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                  अर्ज जमा करा
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  * हा अर्ज फक्त प्राथमिक माहितीसाठी आहे. अंतिम नोंदणीसाठी ग्रामपंचायत कार्यालयास भेट द्या.
                </p>
              </form>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
