import { Phone, Shield, Ambulance, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Emergency Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-primary-foreground/30 pb-2 inline-block">आपातकालीन सेवा</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-secondary" />
                <a href="tel:100" className="hover:text-secondary transition-colors">पोलीस दल - १००</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <a href="tel:112" className="hover:text-secondary transition-colors">अग्निशमन दल - ११२</a>
              </li>
              <li className="flex items-center gap-2">
                <Ambulance className="h-5 w-5 text-secondary" />
                <a href="tel:108" className="hover:text-secondary transition-colors">रुग्णवाहिका - १०८</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-primary-foreground/30 pb-2 inline-block">महत्वपूर्ण लिंक्स</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="https://aaplesarkar.maharashtra.gov.in/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline"><ExternalLink className="h-3 w-3" /> आपले सरकार</a></li>
              <li><a href="https://www.india.gov.in/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline"><ExternalLink className="h-3 w-3" /> भारत सरकार</a></li>
              <li><a href="https://rdd.maharashtra.gov.in/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline"><ExternalLink className="h-3 w-3" /> ग्राम विकास विभाग</a></li>
              <li><a href="http://sbm.gov.in/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline"><ExternalLink className="h-3 w-3" /> स्वच्छ भारत मिशन</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-primary-foreground/30 pb-2 inline-block">संपर्क</h3>
            <address className="not-italic text-sm opacity-90 space-y-2">
              <p>ग्रामपंचायत कार्यालय, भारदेनगर</p>
              <p>ता. मालेगाव, जि. नाशिक</p>
              <p>महाराष्ट्र - ४२३१०५</p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} ग्रामपंचायत भारदेनगर. सर्व हक्क राखीव.</p>
        </div>
      </div>
    </footer>
  );
}
