import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Construction, CheckCircle2, Clock } from "lucide-react";
import roadImage from "@assets/stock_images/indian_village_road__7f5b9203.jpg";

const COMPLETED_WORKS = [
  { title: "मुख्य रस्ता काँक्रिटीकरण", desc: "शिवाजी चौक ते मारुती मंदिर", status: "Completed", date: "२०२४" },
  { title: "सांडपाणी गटार योजना", desc: "वार्ड क्र. १ व २ मध्ये भूमिगत गटार", status: "Completed", date: "२०२३" },
  { title: "पथदिवे (Street Lights)", desc: "गावात ५० नवीन LED दिवे बसवण्यात आले", status: "Completed", date: "२०२३" },
  { title: "स्मशानभूमी सुशोभीकरण", desc: "शेड आणि पाण्याची व्यवस्था", status: "Completed", date: "२०२२" },
  { title: "अंगणवाडी इमारत दुरुस्ती", desc: "रंगकाम आणि नवीन खेळणी", status: "Completed", date: "२०२४" },
];

const ONGOING_WORKS = [
  { title: "जलजीवन मिशन", desc: "प्रत्येक घराला नळ जोडणी", status: "In Progress", progress: 75 },
  { title: "समाज मंदिर बांधकाम", desc: "वार्ड क्र. ३ मध्ये नवीन समाज मंदिर", status: "In Progress", progress: 40 },
  { title: "वृक्षारोपण मोहीम", desc: "रस्त्याच्या दुतर्फा ५०० झाडे लावणे", status: "In Progress", progress: 60 },
];

export default function Development() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">विकास कामे माहिती</h1>
            <p className="text-xl opacity-90">गावाच्या प्रगतीचा आलेख</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          
          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg h-[300px] relative">
            <img src={roadImage} alt="Development Work" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <h2 className="text-2xl font-bold mb-2">पायाभूत सुविधा विकास</h2>
                <p className="opacity-90 max-w-2xl">
                  गावात रस्ते, पाणी, वीज आणि स्वच्छता या मूलभूत सुविधांचे जाळे मजबूत करण्यासाठी ग्रामपंचायत कटिबद्ध आहे.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Completed Works */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 text-accent" />
                पूर्ण झालेली कामे
              </h2>
              <div className="space-y-4">
                {COMPLETED_WORKS.map((work, idx) => (
                  <div key={idx} className="bg-card p-5 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{work.title}</h3>
                      <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded-full font-medium">
                        {work.date}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{work.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ongoing Works */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Clock className="h-7 w-7 text-secondary" />
                प्रगतीपथावर असलेली कामे
              </h2>
              <div className="space-y-6">
                {ONGOING_WORKS.map((work, idx) => (
                  <div key={idx} className="bg-card p-5 rounded-lg border border-border shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{work.title}</h3>
                      <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full font-medium">
                        काम चालू
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{work.desc}</p>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span>प्रगती</span>
                        <span>{work.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-secondary transition-all duration-1000" 
                          style={{ width: `${work.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
