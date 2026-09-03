import Image from "next/image";
import type { Member } from "@/types/band";

type MemberCardProps = {
  member: Member;
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
      {member.imageUrl && (
        <Image
          src={member.imageUrl}
          alt={member.name}
          width={40}
          height={40}
          style={{ objectFit: "cover", borderRadius: "50%" }}
        />
      )}
      <div>
        <p style={{ margin: 0, fontWeight: "bold", fontSize: "0.95rem" }}>{member.name}</p>
        <p style={{ margin: 0, fontSize: "0.85rem", color: "#666" }}>{member.role}</p>
      </div>
    </div>
  );
}