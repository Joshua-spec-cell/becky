// ============================================================
//  EDIT EVERYTHING HERE.
//  You should almost never need to touch the other files.
// ============================================================

export const person = {
  name: "Becky Esther",
  initials: "B.E.",
  heroPhoto: "/images/IMG-20260914-WA0036.jpg", // put the cut-out / portrait here

  heroKicker: "September 16",
  heroLine:
    "A little celebration of the beautiful moments, memories, laughter and person that is Becky Esther.",
};

export const music = {
  src: "/audio/Happy Birthday LoFi 🎂✨ Relaxing Birthday Song Chill LoFi Birthday Wishes Happy Birthday Music - Atharv Joshi.mp3",
  volume: 0.56, // 0 to 1
};

// ------------------------------------------------------------
//  GALLERY — "A Collection of Moments"
//  Happy Birthday LoFi 🎂✨ Relaxing Birthday Song Chill LoFi Birthday Wishes Happy Birthday Music - Atharv Joshi
//  Drop your files in public/images/ and list them here. y2mate.com - Blue Wednesday feat Shopan  Murmuration
//  Images are never cropped; they keep their real shape.
//  `wide: true` makes a photo span two columns on desktop.
// ------------------------------------------------------------
export const memories = [
  { image: "/images/IMG-20260914-WA0033.jpg", caption: "The smile that needed no explanation.", tilt: -2 },
  { image: "/images/IMG-20260914-WA0035.jpg", caption: "Dressed up and living for it.", tilt: 1.5 },
  { image: "/images/IMG-20260914-WA0025.jpg", caption: "A pop of colour, always.", tilt: -1 },
  { image: "/images/IMG-20260914-WA0028.jpg", caption: "Good food, better company.", tilt: 2 },
  { image: "/images/IMG-20260914-WA0034.jpg", caption: "Main character energy.", tilt: -1.5 },
  { image: "/images/IMG-20260914-WA0032.jpg", caption: "One of those moments worth keeping.", tilt: 1 },
  { image: "/images/IMG-20260914-WA0021.jpg", caption: "Sunshine behaves differently around her.", tilt: -2.5 },
  { image: "/images/IMG-20260914-WA0027.jpg", caption: "No notes. None at all.", tilt: 1.8 },
];

// ------------------------------------------------------------
//  TIMELINE — "The Moments Along the Way"
// ------------------------------------------------------------
export const timeline = [
  {
    year: "2022",
    title: "Where it started",
    text: "When you first showed up",
    image: "/images/becky 1.jpg",
  },
  {
    year: "2023",
    title: "Finding the rhythm",
    text: "A year of figuring things out and doing it anyway.",
    image: "/images/IMG-20260914-WA0023.jpg",
  },
  {
    year: "2024",
    title: "Bigger rooms",
    text: "New people, new places, same unmistakable laugh.",
    image: "/images/Becky.jpg",
  },
  {
    year: "2025",
    title: "Hitting her stride",
    text: "The year things clicked into place.",
    image: "/images/IMG-20260914-WA0021.jpg",
  },
  {
    year: "2026",
    title: "Still going",
    text: "And somehow only getting better at it.",
    image: "/images/IMG-20260914-WA0031.jpg",
  },
];

// ------------------------------------------------------------
//  MESSAGE CARDS — "A Few Words For You"
// ------------------------------------------------------------
export const messages = [
  { text: "May this new chapter bring you more reasons to smile.", from: "" },
  { text: "May you keep becoming the person you're meant to be.", from: "" },
  { text: "May the memories ahead be even better than the ones behind.", from: "" },
  { text: "Keep being wonderfully you. It's working.", from: "" },
  { text: "Here's to the plans that work out and the detours that turn out better.", from: "" },
];

// ------------------------------------------------------------
//  "WANT ANOTHER MEMORY?" — each tap shows a photo + a line
// ------------------------------------------------------------
export const randomMemories = [
  { image: "/images/becky 2.jpg", text: "Remember this day? 😂" },
  { image: "/images/becky 4.jpg", text: "This picture deserves its own museum." },
  { image: "/images/IMG-20260914-WA0030.jpg", text: "Proof that Becky Esther has never had a bad photo." },
  { image: "/images/IMG-20260914-WA0026.jpg", text: "Okay, this one is definitely going in the archives." },
  { image: "/images/IMG-20260914-WA0022.jpg", text: "Unreasonably photogenic. It's genuinely unfair." },
  { image: "/images/IMG-20260914-WA0034.jpg", text: "Screenshotted. Saved. Framed. Sorry." },
];

// ------------------------------------------------------------
//  WISH + FINALE
// ------------------------------------------------------------
export const wish = {
  heading: "For The Year Ahead",
  main:
    "May the year ahead bring you growth, laughter, meaningful moments, answered prayers, beautiful surprises and plenty of reasons to smile.",
  personal:
    "To one of the most inspiring souls I've met, you challenge me in ways you don't know and show such amazing growth and resolve it's blinding, keep shining Becky",
  signoff: "— Joshua",
};

export const finale = {
  headline: "HAPPY BIRTHDAY, BECKY ESTHER",
  sub: "Here's to another chapter, another collection of memories, and many more reasons to celebrate.",
  button: "Replay the memories",
  footer: "Made with ❤️ for Becky Esther",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "memories", label: "Memories" },
  { id: "timeline", label: "Timeline" },
  { id: "messages", label: "Messages" },
  { id: "wish", label: "Final Wish" },
];
