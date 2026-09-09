import CustomCursor from "@/components/common/CustomCursor";
import ScrollProgress from "@/components/common/ScrollProgress";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
