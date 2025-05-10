import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProgressiveRelaxation from "./pages/ProgressiveRelaxation";
import MindfulnessMeditation from "./pages/MindfulnessMeditation";
import BreathingTechniques from "./pages/BreathingTechniques";
import Visualization from "./pages/Visualization";
import AIAssistant from "@/components/AIAssistant";
import SelfAssessment from "./pages/SelfAssessment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/techniques/progressive-relaxation"
            element={<ProgressiveRelaxation />}
          />
          <Route
            path="/techniques/mindfulness-meditation"
            element={<MindfulnessMeditation />}
          />
          <Route
            path="/techniques/breathing"
            element={<BreathingTechniques />}
          />
          <Route path="/techniques/visualization" element={<Visualization />} />
          <Route path="/assessment" element={<SelfAssessment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIAssistant />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
