import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { Preloader } from "@/components/ui/preloader";
import { PageTransition } from "@/components/ui/page-transition";
import { LanguageProvider } from "@/lib/i18n";
import { Home } from "@/pages/Home";
import { WhoWeAre } from "@/pages/WhoWeAre";
import { OurStory } from "@/pages/OurStory";
import { Mission } from "@/pages/Mission";
import { Events } from "@/pages/Events";
import { GetInvolved } from "@/pages/GetInvolved";
import { Contact } from "@/pages/Contact";
import { NotFound } from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <PageTransition key={location.pathname}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/about" element={<Navigate to="/who-we-are" replace />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/programs" element={<Navigate to="/events" replace />} />
        <Route path="/events" element={<Events />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Preloader />
        <ScrollProgress />
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Header />
          <PageWrapper>
            <AppRoutes />
          </PageWrapper>
          <Footer />
        </div>
        <BackToTop />
      </BrowserRouter>
    </LanguageProvider>
  );
}
