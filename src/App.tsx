import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";
import { Preloader } from "@/components/ui/preloader";
import { PageTransition } from "@/components/ui/page-transition";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Mission } from "@/pages/Mission";
import { Programs } from "@/pages/Programs";
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
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/programs" element={<Programs />} />
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
  );
}
