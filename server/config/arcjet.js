import arcjet, { detectBot, shield, tokenBucket } from "@arcjet/node";

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // Common web attacks থেকে protect করে (SQL injection, XSS)
    shield({ mode: "LIVE" }),

    // Bot detection — search engine allow, বাকি সব block
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),

    // Rate limiting — ১০ সেকেন্ডে ৫ request এর বেশি হলে block
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

export default aj;
