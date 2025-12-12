import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GraduationCap, BookOpen, School as SchoolIcon, Award } from "lucide-react";
import schoolImage from "@assets/stock_images/indian_rural_school__2429099a.jpg";

export default function Education() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">शिक्षण</h1>
            <p className="text-xl opacity-90">ज्ञान हेच अमृत, शिक्षण हेच जीवन</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={schoolImage} alt="Students in Classroom" className="w-full h-auto object-cover" />
            </div>

            <section>
              <h2 className="text-3xl font-bold text-primary mb-8 text-center flex justify-center items-center gap-3">
                <SchoolIcon className="h-8 w-8" />
                गावातील शाळा व अंगणवाड्या
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">जिल्हा परिषद प्राथमिक शाळा</h3>
                  <p className="text-muted-foreground mb-4">इयत्ता १ ली ते ७ वी पर्यंत दर्जेदार शिक्षण, डिजिटल क्लासरूम, आणि पोषण आहार सुविधा.</p>
                  <div className="flex justify-between text-sm font-medium pt-4 border-t border-border">
                    <span>विद्यार्थी संख्या: २५०+</span>
                    <span className="text-accent">A Grade</span>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">माध्यमिक विद्यालय</h3>
                  <p className="text-muted-foreground mb-4">इयत्ता ८ वी ते १० वी. विज्ञान प्रयोगशाळा आणि क्रीडांगण उपलब्ध.</p>
                  <div className="flex justify-between text-sm font-medium pt-4 border-t border-border">
                    <span>विद्यार्थी संख्या: १८०+</span>
                    <span className="text-accent">100% Result</span>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all md:col-span-2">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                      <Award className="h-8 w-8" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">अंगणवाड्या (बालवाडी)</h3>
                      <p className="text-muted-foreground">
                        गावात एकूण ४ अंगणवाड्या कार्यरत आहेत. ३ ते ६ वयोगटातील बालकांसाठी पूर्व-प्राथमिक शिक्षण 
                        आणि पोषण आहाराची उत्तम सोय केली जाते. गरोदर माता आणि स्तनदा मातांसाठी मार्गदर्शन शिबिरे घेतली जातात.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
