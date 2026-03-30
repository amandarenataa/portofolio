# Amanda Renata Go — Personal Portfolio

> **Information Systems Engineer · Data Scientist · Strategic Analyst**  
> Universitas Ciputra Surabaya · GPA 3.98 / 4.00 · IELTS 7.5

A single-page personal portfolio website built with pure HTML5, CSS3, and Vanilla JavaScript — no frameworks, no dependencies.

---

## 🔗 Live Preview

Open `index.html` directly in any browser, or deploy to GitHub Pages / Netlify for a shareable link.

---

## ✨ Features

- **Responsive design** — mobile-first with hamburger navigation menu
- **Custom cursor** — gold dot + trailing ring animation
- **Scroll-reveal animations** — Intersection Observer API for staggered card entrances
- **Interactive skills tabs** — Business Analysis / Data Science / Software Engineering
- **Draggable photo** — click and drag to reposition the hero image within its frame
- **Scroll progress bar** — gold gradient indicator at the top of the page
- **Resume download** — direct Google Drive link

---

## 📁 File Structure

```
portfolio/
├── index.html        ← entire site (HTML + CSS + JS in one file)
├── picture.jpg       ← your profile photo (place in same folder)
└── README.md
```

---

## 🖼 Adding Your Photo

Place your photo file in the **same folder** as `index.html` and make sure the filename matches:

```html
<img id="heroImg" src="picture.jpg" alt="Amanda Renata Go">
```

Rename your file to `picture.jpg`, or change the `src` value to match your filename (e.g. `photo.png`).

Once loaded, you can **click and drag** the photo inside the frame to adjust the crop position.

---

## 🔧 Personalisation Checklist

| Item | Where to find it in the HTML |
|---|---|
| Profile photo | `src="picture.jpg"` in the hero section |
| LinkedIn URL | `href="https://www.linkedin.com/in/..."` in contact section |
| GitHub URL | `href="https://github.com/..."` in contact section |
| Email address | `href="mailto:..."` in contact section |
| Resume download | `href="https://drive.google.com/uc?export=download&id=..."` |
| Project links | `href="..."` inside each `.project-footer` |
| Certification links | `href="..."` inside each `.cert-footer` |
| Award documentation | `href="..."` inside each `.cert-footer` in awards section |

---

## 🚀 Deployment

### GitHub Pages (free)
1. Create a new GitHub repository
2. Upload `index.html` and `picture.jpg`
3. Go to **Settings → Pages → Source → main branch**
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (free, custom domain support)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop your project folder onto the Netlify dashboard
3. Done — you get a live URL instantly

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox + Grid + CSS Variables) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Playfair Display + DM Sans + DM Mono |
| Icons | Inline SVG |
| Animations | CSS transitions + Intersection Observer API |

---

## 📄 Sections

1. **Hero** — headline, sub-headline, GPA, CTA buttons, photo with floating stats
2. **Skills** — tabbed cards across Business Analysis, Data Science, Software Engineering
3. **Projects** — impact-first cards with live project links
4. **Research** — academic publications with result badges
5. **Professional Experience** — Teaching Assistant timeline (104 students)
6. **Organizational Experience** — Student Council progression timeline
7. **Certifications** — IBM, RevoU, Apple, Stanford with certificate links
8. **Awards** — 7 national competition entries with documentation links
9. **Education** — university + high school cards with transcript link
10. **Contact** — LinkedIn, GitHub, email, resume download + IELTS badge

---

## 📬 Contact

**Amanda Renata Go**  
📧 amandarenata05@gmail.com  
💼 [linkedin.com/in/amandarenata05](https://www.linkedin.com/in/amandarenata05/)  
🐙 [github.com/amandarenataa](https://github.com/amandarenataa)
