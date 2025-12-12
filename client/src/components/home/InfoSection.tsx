import { CheckCircle2 } from "lucide-react";

export function InfoSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="h-8 w-1 bg-secondary rounded-full"></span>
              गावाबद्दल माहिती
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                निमगाव (Nimgaon) हे नाशिक जिल्ह्यातील मालेगाव तालुक्यात असलेले एक गाव आहे, जे मालेगाव उपजिल्हा मुख्यालयापासून सुमारे २० किमी आणि जिल्हा मुख्यालय नाशिकपासून सुमारे १२५ किमी अंतरावर आहे.
              </p>
              <p className="mb-4">
                निमगाव हे मालेगाव पंचायत समितीच्या अखत्यारीत येते. गावात ३ वार्ड असून ९ ग्रामपंचायत पदाधिकारी आहेत. गाव आपल्या कृषी संपन्नतेसाठी आणि शांततेसाठी ओळखले जाते.
              </p>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-muted/30 p-8 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">ग्रामपंचायतीची उद्दिष्टे</h2>
            <ul className="space-y-4">
              {[
                "ग्रामस्थांना पिण्याचे पाणी, रस्ते, वीज, स्वच्छता उपलब्ध करून देणे.",
                "शाळा, अंगणवाडी, व आरोग्य केंद्रांद्वारे शिक्षण व आरोग्य सुधारणा.",
                "महिला व बालकल्याणासाठी स्व-सहायता गट व पोषण योजना.",
                "जलसंधारण, सिंचन व कृषी प्रशिक्षणाद्वारे शाश्वत कृषी विकास.",
                "डिजिटल तंत्रज्ञानाद्वारे पारदर्शक व उत्तरदायी प्रशासन."
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
