import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MenuSection } from "@/components/menu-section"
import { BeveragesSection } from "@/components/beverages-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Mascot } from "@/components/mascot"
import { CartProvider } from "@/components/cart-provider"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <MenuSection />
          <BeveragesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingButtons />
        <Mascot />
      </div>
    </CartProvider>
  )
}
