import { Users, User, UserCheck } from "lucide-react";

export function Stats() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <Users className="h-10 w-10 mx-auto mb-4 opacity-80" />
            <div className="text-4xl font-bold mb-1">६९९५</div>
            <div className="text-sm opacity-80 uppercase tracking-wide">एकूण लोकसंख्या</div>
          </div>
          <div className="p-4">
            <User className="h-10 w-10 mx-auto mb-4 opacity-80" />
            <div className="text-4xl font-bold mb-1">३६३७</div>
            <div className="text-sm opacity-80 uppercase tracking-wide">पुरुष</div>
          </div>
          <div className="p-4">
            <UserCheck className="h-10 w-10 mx-auto mb-4 opacity-80" />
            <div className="text-4xl font-bold mb-1">३३५८</div>
            <div className="text-sm opacity-80 uppercase tracking-wide">स्त्रिया</div>
          </div>
          <div className="p-4">
            <div className="h-10 w-10 mx-auto mb-4 opacity-80 font-bold text-2xl border-2 border-white/50 rounded-full flex items-center justify-center">९</div>
            <div className="text-4xl font-bold mb-1">३</div>
            <div className="text-sm opacity-80 uppercase tracking-wide">वार्ड संख्या</div>
          </div>
        </div>
      </div>
    </section>
  );
}
