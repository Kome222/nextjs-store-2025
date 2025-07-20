import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};
export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>مرحبًا بك في متجر مصطفى 🛒</h1>
      <p>هذا مشروع تجريبي باستخدام Next.js وVercel</p>
      <a
        href="https://wa.me/966598715145" // ضع رقمك هنا
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "10px 20px",
          backgroundColor: "#25D366",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        تواصل عبر واتساب
      </a>
    </main>
  );
}
