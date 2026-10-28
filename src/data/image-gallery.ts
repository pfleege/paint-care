// src/data/image-gallery.ts

import type { GallerySlide } from "@/types/images";
import { PLACEHOLDER } from "@/lib/images";

export const imageGallery: GallerySlide[] = [
  {
    id: "studio",
    title: "Studio mornings",
    caption:
      "Big paper, small hands and no wrong colours. We start our mornings with some painting in a relaxed setting where we listen to soft music and let the children be creative.",
    colorAccent: "tomato",
    image: {
      path: `2022/12/17/12/59/fuzzy-7661669_1280.jpg`,
      alt: "Cute monster in pyjamas",
    },
  },
  {
    id: "puddles",
    title: "Puddle patrol",
    caption:
      "We spend a lot of time outside exploring nature, which is why we focus on proper clothing that suits the season and weather conditions.",
    colorAccent: "sky",
    image: {
      path: `2025/07/07/10/23/ai-generated-9700784_1280.jpg`,
      alt: "Child splashing in a puddle",
    },
  },
  {
    id: "garden",
    title: "Garden snack time",
    caption:
      "The children get to do some own gardening in our back yard, because tomatoes and carrots taste so much better when you planted them yourself.",
    colorAccent: "mint",
    image: {
      path: `2023/01/19/19/41/ai-generated-7730087_1280.jpg`,
      alt: "Children picking vegetables in a garden",
    },
  },
  {
    id: "stories",
    title: "Story corner",
    caption:
      "Cushions, blankets and a very patient reader takes the children on a journey each afternoon.",
    colorAccent: "grape",
    image: {
      path: `2024/08/21/20/01/monster-8987397_1280.jpg`,
      alt: "Children listening to a story on cushions",
    },
  },
  {
    id: "clay",
    title: "Clay and colour",
    caption:
      "Everything gets shaped, squished and shaped again. It might get messy, but we sure have fun and we all help to clean up after ourselves when we're done.",
    colorAccent: "sun",
    image: {
      path: `2024/03/08/14/10/ai-generated-8621004_1280.jpg`,
      alt: "Children shaping clay at a table",
    },
  },
];
