# Quick Start Guide - Advita Singh Portfolio

## Download Your Portfolio

Your complete portfolio website is ready! Download the ZIP file:
**File Location**: `/app/advita-portfolio.zip` (259 KB)

## 3-Step Setup (macOS)

### Step 1: Extract the ZIP
```bash
# Navigate to Downloads folder
cd ~/Downloads

# Extract the ZIP file
unzip advita-portfolio.zip

# Navigate to the project
cd advita-portfolio/frontend
```

### Step 2: Install Dependencies
```bash
# Install Yarn if you don't have it
npm install -g yarn

# Install project dependencies
yarn install
```

### Step 3: Run Locally
```bash
# Start the development server
yarn start
```

Your portfolio will open automatically at `http://localhost:3000`

## What's Included

✅ **Fully Functional Portfolio** with all sections:
- Hero section with your photo and name
- About section with education details
- Animated tech stack with hover effects
- Work experience and projects
- Certifications
- Blog section (ready for content)
- Contact form with social links
- Light/Dark mode toggle

✅ **Production-Ready Code**:
- Clean, organized file structure
- Professional design with Tailwind CSS
- Smooth animations with Framer Motion
- Responsive for all screen sizes

✅ **Easy to Customize**:
- Update your photo by changing the image URL
- Add more projects or certifications
- Modify colors and styles
- Add blog posts when ready

## Updating Your Photo

1. Open `frontend/src/components/Hero.js`
2. Find this line:
```javascript
src="https://customer-assets.emergentagent.com/..."
```
3. Replace with your own image URL or local path:
```javascript
src="/path/to/your/photo.jpg"
```

## Next Steps

1. **Test Locally**: Run the site and make sure everything works
2. **Customize**: Update any content you want to change
3. **Deploy**: Push to GitHub and deploy on Vercel or Netlify
4. **Share**: Use this portfolio for internships and placements!

## Need Help?

Check the full `README_PORTFOLIO.md` for detailed documentation.

Contact: advitacloud@gmail.com

---

🎉 **Your portfolio is ready to launch!** 🎉
