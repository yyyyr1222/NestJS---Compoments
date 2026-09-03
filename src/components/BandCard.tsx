import Image from "next/image";
import type { Band } from "@/types/band";
import MemberCard from "./MemberCard";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "1.25rem",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "200px", marginBottom: "1rem" }}>
        <Image
          src={band.imageUrl}
          alt={band.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </div>

      <h2 style={{ margin: "0 0 0.5rem 0", fontSize: "1.4rem" }}>{band.name}</h2>
      <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>
        <strong>แนวเพลง:</strong> {band.genre}
      </p>
      <p style={{ margin: "0.25rem 0", color: "#4b5563" }}>
        <strong>ปีก่อตั้ง:</strong> {band.formedYear}
      </p>

      {band.description && (
        <p style={{ margin: "0.5rem 0 1rem 0", fontStyle: "italic", color: "#374151" }}>
          {band.description}
        </p>
      )}

      <div style={{ marginTop: "1rem", borderTop: "1px solid #f3f4f6", paddingTop: "0.75rem" }}>
        <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>สมาชิกในวง:</h3>
        {band.members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </article>
  );
}