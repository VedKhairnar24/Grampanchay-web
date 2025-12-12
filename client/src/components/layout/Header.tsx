import { Link } from "wouter";
import { Phone, Clock, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Top Bar - Marquee & Info */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            <span>कार्यालय वेळ: सोम-शुक्र ९.४५ ते ६.१५</span>
          </div>
          <div className="flex-1 overflow-hidden mx-4 max-w-xl">
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
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="h-12 w-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-md">
                नि
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary leading-tight">निमगाव</span>
                <span className="text-sm text-muted-foreground font-medium">ग्रामपंचायत</span>
              </div>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-foreground">
            <Link href="/"><a className="hover:text-primary transition-colors">मुख्यपृष्ठ</a></Link>
            <Link href="#about"><a className="hover:text-primary transition-colors">गावाबद्दल</a></Link>
            <Link href="#team"><a className="hover:text-primary transition-colors">पदाधिकारी</a></Link>
            <Link href="#gallery"><a className="hover:text-primary transition-colors">गॅलरी</a></Link>
            <Link href="#contact"><a className="hover:text-primary transition-colors">संपर्क</a></Link>
            <Button variant="default" size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              तक्रार निवारण
            </Button>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8 font-medium">
                <Link href="/"><a onClick={() => setIsOpen(false)} className="text-lg hover:text-primary">मुख्यपृष्ठ</a></Link>
                <Link href="#about"><a onClick={() => setIsOpen(false)} className="text-lg hover:text-primary">गावाबद्दल</a></Link>
                <Link href="#team"><a onClick={() => setIsOpen(false)} className="text-lg hover:text-primary">पदाधिकारी</a></Link>
                <Link href="#gallery"><a onClick={() => setIsOpen(false)} className="text-lg hover:text-primary">गॅलरी</a></Link>
                <Link href="#contact"><a onClick={() => setIsOpen(false)} className="text-lg hover:text-primary">संपर्क</a></Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
