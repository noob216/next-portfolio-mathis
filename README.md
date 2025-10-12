# Portfolio Mathis Ali

A modern, responsive portfolio website built with Next.js 14, showcasing projects, experience, and professional information with smooth animations and an interactive carousel.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.7-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

##  Features

- **Modern Design**: Clean and professional interface with responsive layout
- **Interactive Carousel**: Smooth project showcase powered by Embla Carousel
- **Fluid Animations**: Enhanced user experience with Framer Motion
- **SEO Optimized**: Built with Next.js 14 App Router for optimal performance
- **Fully Responsive**: Mobile-first design that works on all devices
- **Type Safe**: Written in TypeScript for better development experience

##  Tech Stack

### Core
- **[Next.js 14.2.5](https://nextjs.org/)** - React framework with App Router
- **[React 18.3.1](https://react.dev/)** - UI library
- **[TypeScript 5.5.4](https://www.typescriptlang.org/)** - Type safety and better DX

### Styling
- **[Tailwind CSS 3.4.7](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS 8.4.41](https://postcss.org/)** - CSS transformations
- **[Autoprefixer 10.4.19](https://github.com/postcss/autoprefixer)** - Browser compatibility

### UI/UX
- **[Framer Motion 11.0.24](https://www.framer.com/motion/)** - Animation library
- **[Embla Carousel 8.1.7](https://www.embla-carousel.com/)** - Carousel component
- **[Embla Carousel Autoplay 8.1.7](https://www.embla-carousel.com/plugins/autoplay/)** - Auto-scroll functionality

### Development Tools
- **[ESLint 8.57.0](https://eslint.org/)** - Code linting
- **[eslint-config-next](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)** - Next.js ESLint configuration

##  Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/noob216/next-portfolio-mathis.git
cd next-portfolio-mathis
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

##  Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page with all sections
├── components/
│   ├── Navbar.tsx           # Navigation bar component
│   ├── ProjectCard.tsx      # Individual project card
│   ├── ProjectsCarousel.tsx # Carousel wrapper
│   └── projects.data.ts     # Projects data configuration
├── public/
│   ├── cv.pdf              # Resume/CV file
│   ├── profile-circle.png  # Profile picture (circular)
│   └── profile.jpg         # Profile picture (original)
├── next.config.mjs         # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

##  Available Scripts

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint for code quality
```

##  Customization

### Update Projects
Edit `components/projects.data.ts` to add or modify projects:
```typescript
export const projects = [
  {
    title: "Your Project",
    description: ["Feature 1", "Feature 2"],
    link: "https://your-project-url.com"
  }
];
```

### Modify Sections
Edit `app/page.tsx` to customize:
- Hero section (introduction)
- Projects showcase
- Professional experience
- Contact information

### Replace Assets
- **CV**: Replace `public/cv.pdf` with your resume
- **Profile Picture**: Update `public/profile-circle.png` and `public/profile.jpg`

### Styling
- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.js`
- Component-specific styles: Tailwind classes in TSX files

##  Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy" (zero configuration needed)

Vercel will automatically:
- Detect Next.js
- Configure build settings
- Deploy your portfolio
- Provide a production URL

### Alternative Platforms
This project can also be deployed to:
- **Netlify**: `npm run build` → Deploy `out/` or `.next/` folder
- **AWS Amplify**: Connect your Git repository
- **Cloudflare Pages**: Import repository and deploy

##  Configuration

### Next.js
Configuration is minimal by default. Modify `next.config.mjs` for:
- Image optimization settings
- Custom redirects
- Environment variables
- Build optimizations

### TypeScript
Strict mode is enabled. Adjust `tsconfig.json` for your preferences.

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Mathis Ali**

Feel free to reach out for collaborations or questions!

---

Built with ❤️ using Next.js and modern web technologies
