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
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-white to-stone-50 shadow-2xl rounded-b-3xl relative z-10">
          <Header />
          <main>
            <Hero />
            <MenuSection />
            <BeveragesSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
        <FloatingButtons />
        <Mascot />
      </div>
    </CartProvider>
  )
}
