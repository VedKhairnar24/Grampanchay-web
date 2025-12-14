import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/layout/ScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Staff from "@/pages/Staff";
import Development from "@/pages/Development";
import Health from "@/pages/Health";
import Education from "@/pages/Education";
import Guidance from "@/pages/Guidance";
import DisabledRegistration from "@/pages/DisabledRegistration";
import MedicalHelp from "@/pages/MedicalHelp";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/staff" component={Staff} />
      <Route path="/development" component={Development} />
      <Route path="/health" component={Health} />
      <Route path="/education" component={Education} />
      <Route path="/guidance" component={Guidance} />
      <Route path="/disabled-registration" component={DisabledRegistration} />
      <Route path="/medical-help" component={MedicalHelp} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
