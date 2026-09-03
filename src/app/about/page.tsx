import { bands } from "@/data/bands";
import BandCard from "@/components/BandCard";
export default function BandsPage() {
  
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>วงดนตรีที่ชื่นชอบ (Favorite Bands)</h1>
        <p style={{ color: "#6b7280" }}>แสดงข้อมูลวงดนตรีและสมาชิกด้วย Reusable Component</p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}