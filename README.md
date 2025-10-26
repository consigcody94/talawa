# Talawa - Empowering Jamaican Youth Through Education

A modern, immersive website for the Talawa charitable organization, built with Next.js 16, TypeScript, and Tailwind CSS v4.

## 🌟 About Talawa

"Talawa" is a Jamaican Patois word meaning **strong**, **fearless**, and **resilient**. This website showcases our mission to provide scholarships and educational tools for children in Jamaica.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

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

## 🎨 Features

- **Modern Design**: Bold, vibrant design inspired by Jamaican culture
- **Responsive**: Mobile-first, works on all devices
- **Animations**: Smooth scroll effects and animations using Framer Motion
- **Forms**: Validated forms with React Hook Form
- **TypeScript**: Full type safety throughout
- **Performance**: Optimized with Next.js 16 and Tailwind CSS v4

## 🔧 Configuration Tasks

### 1. Add GoFundMe Campaign

1. Create your GoFundMe campaign at [gofundme.com](https://www.gofundme.com)
2. Get the embed code from your campaign page
3. Open `app/donate/page.tsx`
4. Replace the placeholder around line 74 with your GoFundMe embed code

### 2. Set Up Email Notifications

The forms currently log submissions to the console. To enable email notifications:

1. Sign up for an email service:
   - [Resend](https://resend.com) (recommended, free tier available)
   - [SendGrid](https://sendgrid.com)

2. Create a `.env.local` file:
```bash
cp .env.example .env.local
```

3. Add your API key to `.env.local`:
```
RESEND_API_key=your_api_key_here
CONTACT_EMAIL=info@talawa.ca
```

4. Uncomment and configure the email code in:
   - `app/api/apply/route.ts`
   - `app/api/contact/route.ts`

5. Install the email package:
```bash
npm install resend
```

### 3. Customize Content

- Update text in each page to reflect your organization's story
- Add photos to `public/images/`
- Update the logo at `public/images/logo.png`

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

## 🎨 Color Palette

The site uses a Jamaican-inspired color palette:

- **Primary Green**: `#009B3A` - Represents growth and prosperity
- **Primary Gold**: `#FDB913` - Represents warmth and optimism
- **Primary Black**: `#000000` - Represents strength and resilience
- **Accent Ocean**: `#4A90E2` - Caribbean blues
- **Accent Coral**: `#FF6B6B` - Vibrant energy
- **Earth Tones**: Clay, Sand, Forest

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Support

For questions about the website, contact the development team or visit the Contact page.

## 📄 License

© 2025 Talawa. All rights reserved.

---

**Built with ❤️ for Jamaican youth**
