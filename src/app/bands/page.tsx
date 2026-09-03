import SectionTitle from "@/components/SectionTitle";
import BandCard from "@/components/BandCard";
import { bands } from "@/data/bands";
 
export default function BandsPage() {
  return (
    <main className="container">
 
      <section className="band-grid">
        {bands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}