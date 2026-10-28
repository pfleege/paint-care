// src/data/daycare-groups.ts

import type { DaycareGroup } from "@/types/daycare-group";
import { PLACEHOLDER } from "@/lib/images";

export const daycareGroups: DaycareGroup[] = [
  {
    id: "little-sprouts",
    name: "Little Sprouts",
    ages: "1–2 years",
    groupSize: "8 children, 2 educators",
    summary:
      "Gentle days built around cuddles, sensory play and the first wobbly steps.",
    features: [
      "Sensory baskets and water play",
      "Daily songs and rhymes",
      "Nap rhythm set with each family",
    ],
    accent: "mint",
    image: {
      path: `${PLACEHOLDER}/little-sprouts.jpg`,
      alt: "Toddlers playing with soft sensory toys",
    },
  },
  {
    id: "puddle-jumpers",
    name: "Puddle Jumpers",
    ages: "2–3 years",
    groupSize: "12 children, 3 educators",
    summary:
      "Language blooms, friendships begin and every puddle is an invitation.",
    features: [
      "Daily outdoor adventures",
      "Finger painting and clay",
      "First steps in sharing and turn-taking",
    ],
    accent: "sky",
    image: {
      path: `${PLACEHOLDER}/puddle-jumpers.jpg`,
      alt: "Children in rain boots jumping in puddles",
    },
  },
  {
    id: "colour-explorers",
    name: "Colour Explorers",
    ages: "3–5 years",
    groupSize: "16 children, 3 educators",
    summary:
      "Big questions, bigger projects. Children lead and we help them follow the thread.",
    features: [
      "Project weeks led by the children",
      "Music, movement and drama",
      "Garden and forest days",
    ],
    accent: "tomato",
    image: {
      path: `${PLACEHOLDER}/colour-explorers.jpg`,
      alt: "Children painting together at a large table",
    },
  },
  {
    id: "school-pioneers",
    name: "School Pioneers",
    ages: "5–6 years",
    groupSize: "16 children, 3 educators",
    summary:
      "Confidence, independence and a love of learning, ready for the first school bell.",
    features: [
      "Early letters and numbers through play",
      "Responsibility roles in the group",
      "Visits to local schools",
    ],
    accent: "grape",
    image: {
      path: `${PLACEHOLDER}/school-pioneers.jpg`,
      alt: "Older children reading a picture book together",
    },
  },
];
