import { Link, useLocation } from "wouter";
import {
  Phone,
  Clock,
  Menu,
  FileText,
  UserPlus,
  Search,
  LogIn,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const NAV_ITEMS = [
    { label: "मुख्यपृष्ठ", href: "/" },
    {
      label: "आपल गाव",
      href: "/about",
      children: [
        { label: "गाव माहिती", href: "/about" },
        { label: "गॅलरी", href: "/about#gallery" },
      ],
    },
    { label: "पदाधिकारी व सेवकवर्ग", href: "/staff" },
    { label: "विकास कामे माहिती", href: "/development" },
    {
      label: "मार्गदर्शक सेवा",
      href: "/guidance",
      children: [
        { label: "सेवा 1", href: "/guidance#1" },
        { label: "सेवा 2", href: "/guidance#2" },
      ],
    },
    {
      label: "आरोग्य सेवा",
      href: "/health",
      children: [
        { label: "आरोग्य केंद्र", href: "/health" },
        { label: "वैद्यकीय मदत", href: "/medical-help" },
      ],
    },
    { label: "शिक्षण", href: "/education" },
    { label: "वैद्यकीय मदत कक्ष", href: "/medical-help" },
    { label: "तक्रार नोंदणी", href: "/complaints" },
  ];

  const isActive = (path?: string) => location === path;

  useEffect(() => {
    const el = headerRef.current;
    if (!el || typeof document === "undefined") return;

    const setHeight = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--site-header-height", `${h}px`);
    };

    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);
    window.addEventListener("resize", setHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setHeight);
      document.documentElement.style.removeProperty("--site-header-height");
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 w-full font-sans backdrop-blur-sm" role="banner" aria-label="Site header">

      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground px-4 py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>कार्यालय वेळ: सोम-शुक्र ९.४५ ते ६.१५</span>
          </div>
          <span className="hidden md:block">
            शनिवार व रविवार शासकीय सुट्टी
          </span>
        </div>
      </div>

      {/* Logo Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center gap-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Seal_of_Maharashtra.svg/500px-Seal_of_Maharashtra.svg.png"
                className="h-14 w-14 rounded-full"
                alt="Seal"
              />
              <div>
                <h1 className="text-lg font-semibold text-blue-900">
                  ग्रामपंचायत कार्यालय, भारदेनगर
                </h1>
                <p className="text-sm text-slate-600">
                  पंचायत समिती, मालेगाव, जि. नाशिक
                </p>
              </div>
            </a>
          </Link>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-2">
            <Link href="/disabled-registration">
              <Button size="sm" className="cursor-pointer">
                <FileText className="h-4 w-4 mr-1" /> अर्ज
              </Button>
            </Link>
            <Link href="/disabled-registration">
              <Button size="sm" className="cursor-pointer">
                <UserPlus className="h-4 w-4 mr-1" /> नोंदणी
              </Button>
            </Link>
            <Link href="/medical-help">
              <Button size="sm" className="cursor-pointer">
                <Search className="h-4 w-4 mr-1" /> हेल्पलाईन
              </Button>
            </Link>
            <Link href="/admin/login">
              <Button size="sm" className="cursor-pointer">
                <LogIn className="h-4 w-4 mr-1" /> लॉगिन
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right">
              {NAV_ITEMS.map(item => (
                <Link key={item.label} href={item.href || "#"}>
                  <a
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-lg border-b"
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="bg-slate-900/95 sticky top-0 z-50 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 flex justify-center h-14">
          <ul className="hidden lg:flex gap-6 items-center text-sm text-white">
            {NAV_ITEMS.map(item =>
              item.children ? (
                <li key={item.label} className="relative group">
                  <span className="flex items-center gap-1 cursor-pointer px-3 py-2 hover:bg-slate-800">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </span>
                  <div className="absolute top-full left-0 bg-white text-black rounded shadow-md hidden group-hover:block min-w-[200px]">
                    {item.children.map(child => (
                      <Link key={child.href} href={child.href}>
                        <a className="block px-4 py-2 hover:bg-slate-100">
                          {child.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link href={item.href || "#"}>
                    <a
                      className={cn(
                        "px-3 py-2 hover:bg-slate-800",
                        isActive(item.href) && "border-b-2 border-sky-400"
                      )}
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* No manual spacer required; --site-header-height variable (set by header) controls main padding */}

    </header>
  );
}
