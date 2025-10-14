import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./components/ui/header-with-search";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import PrincipalPage from "./pages/PrincipalPage";
import ScholarshipsPage from "./pages/ScholarshipsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Preloader />
        <CustomCursor />
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/principal" element={<PrincipalPage />} />
            <Route path="/scholarships" element={<ScholarshipsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
