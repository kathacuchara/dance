# Katha Löffler - Artist Portfolio Website

A simple, beginner-friendly artistic portfolio built with **plain HTML, CSS, and JavaScript**.

## 📁 File Structure

```
WEBSITE/
├── index.html              # Main landing page
├── style.css              # All styling for the site
├── script.js              # Interactive features (carousels)
├── assets/                # Images, videos, and media
│   ├── 20250717_125915.mp4  # Background video
│   ├── 251126-53.jpg      # Fallback background image
│   ├── decapagem1.jpg     # Project image
│   └── femtaakt.jpeg      # Project image
├── projects.html          # All projects list
├── bio.html              # Your biography
├── news.html             # News & updates
├── contact.html          # Contact information
│
├── Subpage Files (Projects):
├── caminho-do-corpo.html
├── cuerpo-tierra.html
├── pies-sucios.html
├── performance.html
├── decapagem.html
├── loops-of-belonging.html
├── workshops-classes.html
├── radical-essence.html
├── dance-activism.html
├── feministische-tanz-aktion.html
└── dance-for-democracy.html
```

## 🎨 Color Palette

The site uses warm, artistic earth tones:

- **Primary Dark**: `#2a2a2a` (charcoal)
- **Accent Warm**: `#d4a574` (terracotta/tan)
- **Accent Rust**: `#c44536` (burnt red)
- **Text**: `#333` (dark gray)
- **Background**: `#f5f5f5` (light)

## 🔧 How to Edit

### 1. **Update Your Images**

Replace placeholder images with your own:

**In `index.html`:**
- Find lines with `https://via.placeholder.com/...` and replace with your image paths
- Example: `<img src="assets/your-image.jpg" alt="...">`

### 2. **Edit Photo Galleries (Subpages)**

Open any subpage like `caminho-do-corpo.html`:

```html
<div class="gallery-image">
  <img src="https://via.placeholder.com/400?text=Image+1" alt="Your Title">
</div>
```

Replace the `src` with your image path:
```html
<div class="gallery-image">
  <img src="assets/your-photo-1.jpg" alt="Caminho do Corpo">
</div>
```

### 3. **Add Text Content**

**Bio Page (`bio.html`):**
- Find: `[Add your bio content here...]`
- Replace with your actual text

**News Page (`news.html`):**
- Duplicate the `<article>` section to add more news items
- Update dates and titles

**Contact Page (`contact.html`):**
- Replace email: `your-email@example.com`
- Replace phone: `+4912345678`
- Update social media links

### 4. **Change Text You See**

Look for text in the HTML and change directly:

```html
<!-- OLD -->
<h1 class="hero-title">katha löffler</h1>

<!-- NEW (if needed) -->
<h1 class="hero-title">Your Name</h1>
```

### 5. **Add New Subpage**

1. Copy an existing subpage (e.g., `caminho-do-corpo.html`)
2. Rename it: `my-new-project.html`
3. Update:
   - `<title>` tag
   - `<h1 class="subpage-title">` 
   - Description text
   - Images
4. In `index.html`, add a new carousel item linking to it

### 6. **Change Colors**

All colors are in `style.css` at the top (`:root` section):

```css
:root {
  --primary-dark: #2a2a2a;    /* Navigation background */
  --accent-warm: #d4a574;     /* Hover colors, titles */
  --accent-rust: #c44536;     /* Buttons, accents */
}
```

Change any hex color value to a new color.

## 📱 Responsive Design

The site automatically adapts to:
- **Desktop** (1200px+): Full 3-column carousel
- **Tablet** (768px-1199px): Reduced size
- **Mobile** (below 768px): Single-column layout

## 🎬 Video Background

The hero section uses **auto-playing video**:
- Video: `assets/20250717_125915.mp4`
- Fallback image: `assets/251126-53.jpg`

To change it:
```html
<!-- In index.html, around line 30 -->
<video class="hero-background" autoplay muted loop playsinline>
  <source src="assets/your-video.mp4" type="video/mp4">
  <img src="assets/fallback-image.jpg" alt="...">
</video>
```

## ⚙️ JavaScript Functions

**Carousel Scrolling:**
The `‹` and `›` buttons scroll through images. Built with vanilla JavaScript in `script.js`.

You don't need to change this — it works automatically!

## 🚀 Hosting on GitHub Pages

Your website is set to be hosted at: `https://github.com/kathacuchara/dance`

When you're ready:
1. Initialize git in this folder
2. Add all files
3. Commit and push to your GitHub repo
4. Enable GitHub Pages in repository settings

## 📝 Common Tasks

### Remove a Project Row
Find the row in `index.html` and delete the entire `carousel-container` div:

```html
<!-- DELETE THIS ENTIRE SECTION -->
<h2 class="gallery-row-title">Placeholder Row</h2>
<div class="carousel-container">
  ...
</div>
```

### Make Navigation Link to Different Page
In any HTML file, change:
```html
<a href="contact.html">Contact</a>
```

### Add More Images to a Carousel
In `index.html`, add `<a>` tags inside any carousel:
```html
<div class="carousel" data-carousel="0">
  <!-- existing images -->
  <a href="..." class="carousel-item">
    <img src="assets/new-image.jpg" alt="...">
    <div class="carousel-item-title">Title Here</div>
  </a>
</div>
```

## 💡 Tips for Beginners

✅ **Always keep backups** of files before editing
✅ **Use Firefox/Chrome DevTools** (F12) to test changes instantly
✅ **Image formats**: Use `.jpg` for photos, `.png` for graphics
✅ **Image optimization**: Try compressing images before uploading for faster loading
✅ **Keep consistent naming**: Use lowercase, hyphens instead of spaces (e.g., `my-project.html`)

## ❓ Need Help?

- **CSS changes**: Edit `style.css`
- **Add pages**: Duplicate and rename any `.html` file
- **Images not showing**: Check the file path is correct (relative or absolute)
- **Links broken**: Verify the filename matches exactly (case-sensitive!)

---

**Happy creating!** 🎨💃

