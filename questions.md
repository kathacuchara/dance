# Design & Structure Questions

## 1. Subpages & Navigation
- How many separate subpages do you need? I see mentions of: "caminho do corpo", "confessions of a body" (external link), "cuerpo tierra", "pies sucios", "radical essence", and potentially more. Should each have its own HTML file?
- Should all subpages have the same navigation menu and layout as the home page?

**Options:**
- **a)** Create individual HTML file for each subpage (cleaner for beginners, easiest to manage)
- **b)** Use a template system where all subpages share the same header/footer
- **c)** Some pages as external links (like the wisper.be link), others as HTML files

**Recommendation:** Option (a) is best for beginners — each subpage gets its own .html file with a shared navigation menu.

**Your answer:**a
```

```

---

## 2. The Image Grid Behavior
- When you "click the arrow on the right," should it: (a) scroll horizontally showing the next batch of 3 images, or (b) load/append more images below?
- Do the hidden placeholder images need to load dynamically, or is it okay to hide them with CSS?

**Options:**
- **a)** Horizontal scroll (carousel style) — shows 3 images at a time, click arrow to slide
- **b)** Vertical approach — more images appear below when you click "show more"
- **c)** Grid that expands — rows stay, but columns increase when you click arrow

**Recommendation:** Option (a) creates a smooth, artistic carousel effect that works well for portfolios. Simpler to build with CSS + basic JavaScript.

**Your answer:**a
```

```

---

## 3. Video Background
- Do you have the video file ready? What format (mp4, webm)?
- Should the video autoplay silently, and loop continuously?

**Options:**
- **a)** Self-hosted video file (mp4) — autoplay muted, loops infinitely (best quality, full control)
- **b)** Self-hosted video with fallback still image if video doesn't load
- **c)** Skip video for now, use a high-quality still image as background instead

**Recommendation:** Option (a) or (b) if you have the video ready. Option (c) if you don't have it yet — we can add video later without breaking anything.

**Your answer:**b video: assets\20250717_125915.mp4 and I want to be able to change the video later. still background if video does not load: assets\251126-53.jpg 
```

```

---

## 4. Responsiveness
- Do you need this to work well on mobile/tablets, or is desktop-primary fine to start?

**Options:**
- **a)** Desktop-first approach (optimal for this design, easier to build)
- **b)** Mobile-friendly layout (requires more CSS, stacks images vertically on small screens)
- **c)** Full responsive design (time-intensive but works everywhere)

**Recommendation:** Option (a) for now — this artistic portfolio is best experienced on desktop/laptop. Mobile responsiveness can be added later if needed.

**Your answer:**I want it to work well on laptop AND on mobile phone. 
```

```

---

## 5. Subpage Content
- For the subpages (like "caminho do corpo"), what content should they show? Just galleries, text, or both?

**Options:**
- **a)** Image galleries only (simple, clean, focuses on the art)
- **b)** Text + image galleries (title, description, then images)
- **c)** Mix of both — some pages have text, others are gallery-only (you decide per page)

**Recommendation:** Option (b) — text at the top gives context to your work, galleries below show the visuals. Most professional for an artist.

**Your answer:**b
```

```

---

## 6. Styling Approach
- Would you like me to suggest a color palette and create a single CSS file for all pages, or keep styling simple?

**Options:**
- **a)** I suggest a color palette (artistic, warm, professional choices) + one shared CSS file
- **b)** You provide color preferences, I build the CSS around them
- **c)** Minimal styling for now (basic, clean look) — you can customize colors later

**Recommendation:** Option (a) — I can suggest colors that match your artistic brand (earth tones, vibrant accents, etc.) and a single CSS file keeps the site consistent and easy to maintain.

**Your answer:** select some colours that fit with the images provided and also have one or 2 vibrant accent colours, almost in neon tones. it should be artistic but not into a very gentle direction but a bit brave. 
```

```

---

**Fill in your answers above and I'll build your site!**
