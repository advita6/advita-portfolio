# Advita Singh - Personal Portfolio Website

## Overview
This is a production-ready personal portfolio website for Advita Singh, featuring a modern, professional design with smooth animations and dark mode support.

## Tech Stack
- **Frontend**: React 19 with React Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Fonts**: Inter (headings) + Source Sans Pro (body)

## Features
- ✅ Responsive single-page design
- ✅ Smooth scroll navigation
- ✅ Light/Dark mode toggle
- ✅ Animated sections with Framer Motion
- ✅ Interactive tech stack with hover effects
- ✅ Project showcase with images
- ✅ Contact form with toast notifications
- ✅ Professional typography and spacing
- ✅ Sticky header with active section tracking

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Yarn package manager

### Steps to Run Locally

1. **Extract the ZIP file**
   ```bash
   unzip advita-portfolio.zip
   cd advita-portfolio/frontend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   yarn start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Header.js        # Sticky navigation header
│   │   ├── Hero.js          # Hero section with name & image
│   │   ├── About.js         # About section
│   │   ├── TechStack.js     # Animated tech stack
│   │   ├── Experience.js    # Work experience & projects
│   │   ├── Certifications.js # Certifications section
│   │   ├── Blog.js          # Blog section (Coming Soon)
│   │   ├── Contact.js       # Contact form & social links
│   │   └── Footer.js        # Footer (empty as per requirements)
│   ├── contexts/
│   │   └── ThemeContext.js  # Light/Dark mode context
│   ├── hooks/
│   │   └── use-toast.js     # Toast notification hook
│   ├── pages/
│   │   └── Portfolio.js     # Main portfolio page
│   ├── App.js               # Main App component
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global styles & Tailwind
│   └── index.js             # Entry point
├── package.json
├── tailwind.config.js
└── craco.config.js
```

## Customization Guide

### Update Personal Information
Edit the following files:
- **Hero Section**: `src/components/Hero.js`
- **About Section**: `src/components/About.js`
- **Contact Details**: `src/components/Contact.js`

### Change Your Photo
Replace the image URL in `src/components/Hero.js`:
```javascript
<img
  src="YOUR_IMAGE_URL_HERE"
  alt="Advita Singh"
  className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl"
/>
```

### Update Projects
Edit the `projects` array in `src/components/Experience.js`

### Update Tech Stack
Edit the `skills` object in `src/components/TechStack.js`

### Change Colors
Modify the color palette in:
- `src/components/Hero.js` (gradient colors)
- `src/components/TechStack.js` (skill card colors)
- `src/index.css` (CSS variables for light/dark mode)

### Add Blog Posts
When ready to add blog content, update `src/components/Blog.js`

## Building for Production

```bash
yarn build
```

This creates an optimized production build in the `build/` directory.

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Set build command: `yarn build`
4. Set publish directory: `build`

### GitHub Pages
```bash
yarn add --dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "yarn build",
  "deploy": "gh-pages -d build"
}
```

Deploy:
```bash
yarn deploy
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Design Features
- **Typography**: Professional font pairing (Inter + Source Sans Pro)
- **Color Palette**: Soft blues/purples (#A8D4DC, #959BB9, #73617B) with dark accents
- **Animations**: Subtle entrance animations and hover effects
- **Spacing**: Generous whitespace for professional look
- **Accessibility**: Proper contrast ratios and semantic HTML

## Contact Information
- **LinkedIn**: [linkedin.com/in/advita-singh-984a6a289](https://www.linkedin.com/in/advita-singh-984a6a289/)
- **GitHub**: [github.com/advita6](https://github.com/advita6)
- **Email**: advitacloud@gmail.com
- **Phone**: +91 9839110240

## License
This project is for personal use by Advita Singh.

## Support
For any issues or questions, please contact advitacloud@gmail.com

---

**Built with ❤️ for Advita Singh**
**Made possible by Emergent AI**
