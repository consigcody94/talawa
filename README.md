<div align="center">

<!-- Animated Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,4&height=200&section=header&text=🌴%20TALAWA&fontSize=80&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Empowering%20Black%20Youth%20Through%20Education&descAlignY=55&descSize=18"/>

<br/>

<!-- Badges Row 1 -->
<p>
<a href="#"><img src="https://img.shields.io/badge/Charity-Scholarships-009B3A?style=for-the-badge" alt="Charity"/></a>
<a href="#"><img src="https://img.shields.io/badge/Jamaica-🇯🇲-FDB913?style=for-the-badge" alt="Jamaica"/></a>
<a href="#"><img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/></a>
</p>

<!-- Badges Row 2 -->
<p>
<img src="https://img.shields.io/badge/TypeScript-✓-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
<img src="https://img.shields.io/badge/Framer_Motion-✓-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer"/>
<img src="https://img.shields.io/badge/GoFundMe-Integration-00B964?style=flat-square" alt="GoFundMe"/>
</p>

<br/>

<!-- Tagline Box -->
<table>
<tr>
<td>

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║   🌴  TALAWA: Strong, Fearless, Resilient                                   ║
║                                                                              ║
║       📚  Scholarships for Jamaican children                                 ║
║       🎓  Educational tools and resources                                    ║
║       💚  Bold, vibrant Jamaican-inspired design                            ║
║       🌍  Making a difference, one student at a time                        ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

</td>
</tr>
</table>

<br/>

<!-- Quick Links -->
[**🚀 Quick Start**](#-getting-started) · [**🎨 Features**](#-features) · [**🔧 Setup**](#-configuration-tasks) · [**🌐 Deploy**](#-deployment)

<br/>

</div>

---

<br/>

## 🌟 About Talawa

**"Talawa"** is a Jamaican Patois word meaning **strong**, **fearless**, and **resilient**. This website showcases our mission to provide scholarships and educational tools for children in Jamaica.

<br/>

---

<br/>

## 🎨 Features

```
┌─────────────────────────────────────────────────────────────────┐
│                    WEBSITE FEATURES                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🎨  JAMAICAN-INSPIRED DESIGN                                   │
│      Bold greens, golds, and vibrant Caribbean colors          │
│                                                                 │
│  📱  FULLY RESPONSIVE                                           │
│      Mobile-first, works beautifully on all devices            │
│                                                                 │
│  ✨  SMOOTH ANIMATIONS                                          │
│      Scroll effects powered by Framer Motion                    │
│                                                                 │
│  📝  VALIDATED FORMS                                            │
│      React Hook Form for scholarship applications               │
│                                                                 │
│  💳  GOFUNDME INTEGRATION                                       │
│      Easy donation flow                                         │
│                                                                 │
│  ⚡  HIGH PERFORMANCE                                           │
│      Next.js 16 + Tailwind CSS v4                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Color Palette

<div align="center">

| Color | Hex | Meaning |
|:------|:----|:--------|
| **Primary Green** | `#009B3A` | Growth and prosperity |
| **Primary Gold** | `#FDB913` | Warmth and optimism |
| **Primary Black** | `#000000` | Strength and resilience |
| **Accent Ocean** | `#4A90E2` | Caribbean blues |
| **Accent Coral** | `#FF6B6B` | Vibrant energy |

</div>

<br/>

---

<br/>

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Open http://localhost:3000
```

<br/>

---

<br/>

## 📁 Project Structure

```
talawah-site/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── donate/page.tsx       # Donate page (GoFundMe integration)
│   ├── apply/page.tsx        # Scholarship application form
│   ├── contact/page.tsx      # Contact form
│   ├── api/
│   │   ├── apply/route.ts    # Application form API
│   │   └── contact/route.ts  # Contact form API
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   └── Footer.tsx            # Site footer
├── public/
│   └── images/
│       └── logo.png          # Talawa logo
└── package.json
```

<br/>

---

<br/>

## 🔧 Configuration Tasks

### 1. Add GoFundMe Campaign

1. Create your GoFundMe campaign at [gofundme.com](https://www.gofundme.com)
2. Get the embed code from your campaign page
3. Open `app/donate/page.tsx`
4. Replace the placeholder with your GoFundMe embed code

### 2. Set Up Email Notifications

```bash
# Create environment file
cp .env.example .env.local
```

Add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=info@talawa.ca
```

Install email package:
```bash
npm install resend
```

<br/>

---

<br/>

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Custom Domain

Once deployed on Vercel:
1. Go to your project settings
2. Add `talawa.ca` as a custom domain
3. Update your DNS settings as instructed

<br/>

---

<br/>

## 📝 Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

<br/>

---

<br/>

## 📄 License

<div align="center">

© 2025 Talawa. All rights reserved.

**Built with ❤️ for Jamaican youth**

</div>

<br/>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,4&height=100&section=footer"/>

<br/>

**🌴 Talawa** — *Strong, Fearless, Resilient*

<br/>

*"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela*

<br/>

[⬆ Back to Top](#-talawa)

</div>
