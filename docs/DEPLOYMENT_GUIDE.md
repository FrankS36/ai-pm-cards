# Deployment Guide - AI PM Cards

This guide covers deploying the AI PM Cards application to Vercel.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Deployment Methods](#deployment-methods)
- [Post-Deployment](#post-deployment)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

1. **Node.js 18+** installed
2. **npm 10+** installed
3. A **Vercel account** (free - sign up at vercel.com)
4. **(Optional)** Git installed for GitHub integration

---

## Pre-Deployment Checklist

### 1. Test Production Build Locally

Before deploying, verify the production build works:

```bash
cd ai-pm-cards
npm run build
npm run preview
```

Visit `http://localhost:4173` to test the production build locally.

**What to check:**
- [ ] All pages load correctly
- [ ] Navigation works between all routes
- [ ] Cards display properly
- [ ] Filters and search work
- [ ] Modal windows open/close correctly
- [ ] No console errors in browser

### 2. Review Project Structure

Ensure these files exist:
- `package.json` - Has correct build scripts
- `vite.config.js` - Properly configured
- `index.html` - Entry point in root
- `src/` - All source files
- `dist/` - Will be created during build (git-ignored)

### 3. Environment Variables

Currently, this project has no environment variables. If you add any in the future:
- Create `.env.example` with dummy values
- Never commit `.env` files to git
- Add them in Vercel dashboard under Settings → Environment Variables

---

## Deployment Methods

### Method 1: Vercel CLI (Fastest - 2 minutes)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Navigate to Project**
```bash
cd /Users/franksellhausen/Desktop/pip\ deck\ clone/ai-pm-cards
```

**Step 3: Build and Test**
```bash
npm run build
```
Verify no errors in the build output.

**Step 4: Deploy**
```bash
vercel
```

**First-time prompts:**
```
? Set up and deploy "~/Desktop/pip deck clone/ai-pm-cards"? [Y/n] y
? Which scope do you want to deploy to? [Your Account]
? Link to existing project? [y/N] n
? What's your project's name? ai-pm-cards
? In which directory is your code located? ./
? Want to override the settings? [y/N] n
```

**Step 5: Get Your URL**
After deployment completes, you'll see:
```
✅ Production: https://ai-pm-cards-abc123.vercel.app
```

**Step 6: Deploy to Production Domain**
```bash
vercel --prod
```
This creates the final production URL: `ai-pm-cards.vercel.app`

---

### Method 2: GitHub + Vercel Dashboard (Recommended for Teams)

**Step 1: Initialize Git Repository**
```bash
cd ai-pm-cards
git init
git add .
git commit -m "Initial commit - AI PM Cards application"
```

**Step 2: Create GitHub Repository**
1. Go to github.com
2. Click "New Repository"
3. Name: `ai-pm-cards`
4. Keep it Public or Private
5. Don't initialize with README (we already have files)
6. Click "Create Repository"

**Step 3: Push to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-pm-cards.git
git branch -M main
git push -u origin main
```

**Step 4: Connect Vercel to GitHub**
1. Go to [vercel.com](https://vercel.com)
2. Sign in (or create account with GitHub)
3. Click "Add New Project"
4. Click "Import Git Repository"
5. Select your `ai-pm-cards` repository
6. Vercel auto-detects settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
7. Click "Deploy"

**Step 5: Wait for Deployment**
- First deployment takes 1-2 minutes
- You'll see real-time build logs
- ✅ Success: You get a live URL

**Step 6: Auto-Deploy on Every Push**
From now on, every `git push` automatically triggers a new deployment:
```bash
git add .
git commit -m "Update cards content"
git push
```

---

### Method 3: Vercel Drag & Drop (Simplest, No Git)

**Step 1: Build Locally**
```bash
cd ai-pm-cards
npm run build
```

**Step 2: Upload to Vercel**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop the `dist` folder onto the page
3. Wait for upload and deployment
4. Get your URL

**Note:** This method doesn't support auto-deployments. You must manually rebuild and re-upload for updates.

---

## Post-Deployment

### 1. Verify Deployment

Visit your live URL and check:
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Diagnostic flow works
- [ ] Path pages load correctly
- [ ] Browse view shows all cards
- [ ] Card modals open/close
- [ ] Filters work correctly

### 2. Set Up Custom Domain (Optional)

**Via Vercel Dashboard:**
1. Go to your project
2. Settings → Domains
3. Add your domain (e.g., `aipmcards.com`)
4. Follow DNS configuration instructions
5. Vercel provides free SSL certificate

**Recommended domain registrars:**
- Namecheap
- Google Domains
- Cloudflare Registrar

### 3. Configure Production Settings

**Vercel Dashboard → Settings:**

**General:**
- Project Name: `ai-pm-cards`
- Framework: Vite

**Domains:**
- Production: `ai-pm-cards.vercel.app`
- Custom: (add your domain here)

**Environment Variables:**
- None currently needed
- Add here if you integrate APIs later

**Git:**
- Production Branch: `main`
- Auto-deploy: Enabled

### 4. Performance Optimization

Vercel automatically provides:
- ✅ CDN distribution globally
- ✅ Automatic HTTPS/SSL
- ✅ Compression (gzip/brotli)
- ✅ Image optimization
- ✅ Edge caching

**Optional: Add Analytics**
```bash
npm install @vercel/analytics
```

Then in `src/main.jsx`:
```javascript
import { inject } from '@vercel/analytics';
inject();
```

### 5. Set Up Monitoring

**Vercel Dashboard → Analytics:**
- Web Vitals (free)
- Page views
- Top pages
- Device/browser stats

---

## Troubleshooting

### Build Fails

**Error: "Command failed: npm run build"**

**Fix:**
1. Test build locally first:
   ```bash
   npm run build
   ```
2. Check for errors in console
3. Verify all dependencies installed:
   ```bash
   npm install
   ```

---

**Error: "Module not found"**

**Fix:**
- Ensure all imports use correct paths
- Check case sensitivity (macOS is case-insensitive, Linux is not)
- Verify file extensions included in imports

---

**Error: "Cannot find module 'vite'"**

**Fix:**
```bash
npm install vite --save-dev
```

---

### Routes Don't Work (404 on Refresh)

**Problem:** Refreshing `/paths` gives 404

**Fix:** Add `vercel.json` in project root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

This tells Vercel to serve `index.html` for all routes (SPA mode).

---

### Deployment Succeeds But Shows Blank Page

**Causes:**
1. Build output directory incorrect
2. Base path misconfigured
3. JavaScript errors in production

**Fix:**
1. Check Vercel logs for errors
2. Verify `vite.config.js`:
   ```javascript
   export default {
     base: '/',
     build: {
       outDir: 'dist'
     }
   }
   ```
3. Test production build locally:
   ```bash
   npm run build
   npm run preview
   ```

---

### Environment Variables Not Working

**Fix:**
1. Add them in Vercel Dashboard → Settings → Environment Variables
2. Redeploy after adding variables
3. Prefix with `VITE_` for client-side access:
   ```
   VITE_API_KEY=your-key
   ```

---

### Slow Build Times

**Optimization:**
1. Check `package.json` dependencies
2. Remove unused packages:
   ```bash
   npm prune
   ```
3. Update Vite to latest:
   ```bash
   npm update vite
   ```

---

## Deployment Checklist

Before going live with custom domain:

- [ ] All pages tested and working
- [ ] No console errors in production
- [ ] Mobile responsive checked
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Performance tested (Lighthouse score)
- [ ] Analytics set up
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Backup of cardData.json
- [ ] README updated with live URL

---

## Useful Commands

```bash
# Deploy preview
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove a deployment
vercel rm [deployment-url]

# Pull environment variables locally
vercel env pull

# Link local project to Vercel project
vercel link
```

---

## Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html
- **React Router on Vercel**: https://vercel.com/guides/deploying-react-with-vercel

---

## Support

**Vercel Support:**
- Help: https://vercel.com/help
- Discord: https://vercel.com/discord
- Status: https://www.vercel-status.com/

**Project Issues:**
- Check browser console for errors
- Review Vercel deployment logs
- Test production build locally first

---

## Next Steps After Deployment

1. **Share the URL** with users and get feedback
2. **Monitor analytics** to see which paths are most popular
3. **Iterate based on usage** - add most-requested features
4. **Set up custom domain** for professional appearance
5. **Add social sharing** for viral growth
6. **Create landing page optimizations** based on conversion data

---

**Last Updated:** 2025-10-08
**Vercel Version:** Latest
**Node Version:** 18.20.8+
**Deployment Status:** Ready ✅
