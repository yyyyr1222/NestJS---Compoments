 
 import type { Band } from "@/types/band";

export const bands: Band[] = [
  {
    id: 1,
    name: "TheFatRat",  
    genre: "Electronic",
    formedYear: 2000,
    imageUrl: "/images/bands/band1.jpg",
    description: "TheFatRat is a Dutch electronic music duo known for their energetic and melodic style.",
    members: [
      {
        id: 1,
        name: "Christian Büttner",
        role: "Producer / DJ",
        imageUrl: "/images/bands/member/TheFatRat.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "NewJeans",
    genre: "K-Pop / R&B",
    formedYear: 2022,
    imageUrl: "/images/bands/band2.jpg",
    description: "NewJeans is a South Korean girl group known for their nostalgic easy-listening pop and 90s/2000s R&B style.",
    members: [
      {
        id: 1,
        name: "Minji",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Minji.jpg",
      },
      {
        id: 2,
        name: "Hanni",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Hanni.jpg",
      },
      {
        id: 3,
        name: "Danielle",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Danielle.jpg",
      },
      {
        id: 4,
        name: "Haerin",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Haerin.jpg",
      },
      {
        id: 5,
        name: "Hyein",
        role: "Vocalist / Dancer",
        imageUrl: "/images/bands/member/Hyein.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Adele",
    genre: "Pop / Soul",
    formedYear: 2006,
    imageUrl: "/images/bands/band3.jpg",
    description: "Adele is an English singer-songwriter known for her powerful mezzo-soprano vocals and sentimental ballads.",
    members: [
      {
        id: 1,
        name: "Adele Laurie Blue Adkins",
        role: "Lead Vocalist / Songwriter",
        imageUrl: "/images/bands/member/adele_member.jpg",
      },
    ],
  },
];