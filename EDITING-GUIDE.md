# Quick Edit Guide for Beginners

## Most Common Edits

### 🖼️ Replace Placeholder Images

**Step 1:** Open `index.html` in VS Code  
**Step 2:** Find any line like:
```html
<img src="https://via.placeholder.com/300?text=Image+1" alt="...">
```

**Step 3:** Replace with your image path:
```html
<img src="assets/your-photo.jpg" alt="Your Title">
```

**Save** (Ctrl+S) and refresh your browser to see changes.

---

### 📝 Edit Text on Pages

**For Hero Title & Subtitle** (`index.html`):
```html
<h1 class="hero-title">katha löffler</h1>
<p class="hero-subtitle">dancer, artist, activist, facilitator</p>
```

**For Gallery Row Titles** (`index.html`):
```html
<h2 class="gallery-row-title">Upcoming Events</h2>
```

Change the text inside the tags, **save**, and you're done!

---

### 🎨 Update Colors

**File:** `style.css`

Find the top section:
```css
:root {
  --primary-dark: #2a2a2a;      ← Change this for dark background
  --accent-warm: #d4a574;       ← Change this for warm accents
  --accent-rust: #c44536;       ← Change this for rust/red
}
```

Use a color picker tool and paste new hex codes.

**List of color websites:**
- https://colorpicker.com/
- https://colorsafe.co/  
- https://coolors.co/

---

### 🔗 Update Email & Phone (Contact Page)

**File:** `contact.html`

Find:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+4912345678">+49 123 45678</a>
```

Replace with your actual contact info.

---

### 📸 Add Gallery Images to a Project

**File:** Any subpage like `caminho-do-corpo.html`

Find:
```html
<div class="gallery-grid">
  <div class="gallery-image">
    <img src="https://via.placeholder.com/400?text=Image+1" alt="...">
  </div>
  <!-- Add more here -->
</div>
```

**To add images:**
```html
<div class="gallery-grid">
  <div class="gallery-image">
    <img src="assets/photo-1.jpg" alt="Your description">
  </div>
  <div class="gallery-image">
    <img src="assets/photo-2.jpg" alt="Your description">
  </div>
  <div class="gallery-image">
    <img src="assets/photo-3.jpg" alt="Your description">
  </div>
</div>
```

Copy-paste the `<div class="gallery-image">` block as many times as needed!

---

### ✏️ Edit Bio Page

**File:** `bio.html`

Find all the `[Add ... here]` sections and replace with your actual text:

```html
<p>
  [Add your bio content here. Tell your story...]
</p>
```

becomes:

```html
<p>
  I'm a dancer and facilitator based in Berlin. My work explores movement, 
  community, and social change through contemporary dance and artistic activism.
</p>
```

---

### 📰 Add News Items

**File:** `news.html`

To add a new news item, copy this block:

```html
<article style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 2rem; margin-bottom: 2rem;">
  <h3 style="color: var(--accent-rust); margin-bottom: 0.5rem;">News Item Title</h3>
  <p style="color: #999; font-size: 0.9rem; margin-bottom: 1rem;">Date: March 19, 2024</p>
  <p>
    Add your news content here...
  </p>
</article>
```

Paste it before `</div>` and update the title, date, and text.

---

### 🎥 Change Background Video

**File:** `index.html` (around line 30)

```html
<video class="hero-background" autoplay muted loop playsinline>
  <source src="assets/20250717_125915.mp4" type="video/mp4">
  <img src="assets/251126-53.jpg" alt="...">
</video>
```

Replace `20250717_125915.mp4` with your video filename.

---

## File Types to Use

✅ **Images:** 
- `.jpg` or `.jpeg` (photos)
- `.png` (graphics, transparent backgrounds)
- `.gif` (animations)

✅ **Video:**
- `.mp4` (best for all browsers)

✅ **Web Files:**
- `.html` (structure)
- `.css` (styling)
- `.js` (interactions)

---

## Testing Your Changes

1. **Save your file** (Ctrl+S)
2. **Refresh browser** (F5 or Ctrl+R)
3. **See the changes immediately!**

If something breaks:
- Check for typos in file paths
- Make sure quotes match: `"path/image.jpg"`
- Verify file exists in the `assets/` folder

---

## Need to Duplicate a Page?

1. Right-click a `.html` file in VS Code
2. Select "Copy"
3. Right-click and "Paste"
4. Rename the copy
5. Edit the title and content

Example: Copy `caminho-do-corpo.html` → rename to `my-new-project.html` → update text.

---

## How to Link to a New Page

When you create a new subpage, add a link to it in `index.html`:

```html
<a href="my-new-project.html" class="carousel-item">
  <img src="assets/image.jpg" alt="...">
  <div class="carousel-item-title">My New Project</div>
</a>
```

---

## Quick Checklist for Updates

- [ ] Replace placeholder images with real photos
- [ ] Update your name and tagline
- [ ] Fill in bio.html with your story
- [ ] Add contact info (email, phone, social media)
- [ ] Update news.html with latest announcements
- [ ] Choose your color palette
- [ ] Add real image paths to all galleries
- [ ] Test all links work (click them!)
- [ ] Test on mobile phone view

---

**You've got this!** 🚀  
Start with small changes and build from there.
