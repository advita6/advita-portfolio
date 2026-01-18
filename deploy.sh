#!/bin/bash

# 🚀 Quick Deploy Script for Advita Singh Portfolio
# This script helps you deploy your portfolio to Vercel in just a few steps!

echo "🎨 Advita Singh Portfolio - Quick Deploy Script"
echo "================================================"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the frontend directory"
    echo "   cd advita-portfolio/frontend"
    exit 1
fi

echo "✅ Found package.json"
echo ""

# Step 1: Install dependencies
echo "📦 Step 1: Installing dependencies..."
if ! command -v yarn &> /dev/null; then
    echo "⚠️  Yarn not found. Installing Yarn..."
    npm install -g yarn
fi

yarn install
if [ $? -ne 0 ]; then
    echo "❌ Dependency installation failed. Please check the errors above."
    exit 1
fi
echo "✅ Dependencies installed successfully"
echo ""

# Step 2: Test build locally
echo "🔨 Step 2: Testing production build..."
yarn build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors above before deploying."
    exit 1
fi
echo "✅ Build successful!"
echo ""

# Step 3: Initialize git (if not already)
if [ ! -d ".git" ]; then
    echo "📝 Step 3: Initializing git repository..."
    git init
    git add .
    git commit -m "Initial portfolio commit"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi
echo ""

# Step 4: Instructions for GitHub
echo "🐙 Step 4: Push to GitHub"
echo "================================"
echo "1. Create a new repository on GitHub:"
echo "   👉 https://github.com/new"
echo ""
echo "2. Run these commands (replace YOUR-USERNAME):"
echo ""
echo "   git remote add origin https://github.com/YOUR-USERNAME/portfolio.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""

# Wait for user
read -p "Press Enter after you've pushed to GitHub..."

# Step 5: Deploy instructions
echo ""
echo "🚀 Step 5: Deploy on Vercel"
echo "================================"
echo "1. Go to: https://vercel.com"
echo "2. Sign in with GitHub"
echo "3. Click 'Add New' → 'Project'"
echo "4. Select your portfolio repository"
echo "5. Click 'Deploy' (Vercel auto-detects settings)"
echo ""
echo "⏱️  Deployment takes 1-2 minutes"
echo "🎉 You'll get a live URL like: https://portfolio-username.vercel.app"
echo ""

echo "✅ All Done! Your portfolio is ready to deploy!"
echo ""
echo "📚 For detailed instructions, see DEPLOYMENT_GUIDE.md"
echo ""
echo "🎊 Good luck with your internships and placements!"
