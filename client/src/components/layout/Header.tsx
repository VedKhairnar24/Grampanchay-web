import { Link, useLocation } from "wouter";
import { Phone, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const NAV_ITEMS = [
    { label: "मुख्यपृष्ठ", href: "/" },
    { label: "आपल गाव", href: "/about" },
    { label: "पदाधिकारी", href: "/staff" },
    { label: "विकास कामे", href: "/development" },
    { label: "आरोग्य", href: "/health" },
    { label: "शिक्षण", href: "/education" },
    { label: "मार्गदर्शक सेवा", href: "/guidance" },
    { label: "दिव्यांग नोंदणी", href: "/disabled-registration" },
    { label: "वैद्यकीय मदत", href: "/medical-help" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <header className="w-full font-sans">
      {/* Top Bar - Marquee & Info */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            <span>कार्यालय वेळ: सोम-शुक्र ९.४५ ते ६.१५</span>
          </div>
          <div className="flex-1 overflow-hidden mx-4 max-w-xl hidden md:block">
            <div className="animate-marquee whitespace-nowrap">
              गाव हा विश्वाचा नकाशा | स्मार्ट जिल्हा | आदर्श गाव | तंटामुक्त गाव | निमगाव ग्रामपंचायत आपले सहर्ष स्वागत करीत आहे
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs md:text-sm">
            <span>शासकीय सुट्टी: शनिवार व रविवार</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="h-10 w-10 md:h-12 md:w-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-md shrink-0">
                नि
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-primary leading-tight">निमगाव</span>
                <span className="text-xs md:text-sm text-muted-foreground font-medium">ग्रामपंचायत</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav - Split into top links or dropdown if too many */}
          <nav className="hidden xl:flex items-center gap-6 font-medium text-sm text-foreground">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={cn(
                  "hover:text-primary transition-colors py-2 border-b-2 border-transparent",
                  isActive(item.href) ? "border-primary text-primary font-bold" : ""
                )}>
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="xl:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col gap-2 mt-8 font-medium">
                {NAV_ITEMS.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a 
                      onClick={() => setIsOpen(false)} 
                      className={cn(
                        "text-lg px-4 py-3 rounded-md hover:bg-muted transition-colors",
                        isActive(item.href) ? "bg-primary/10 text-primary font-bold" : ""
                      )}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
