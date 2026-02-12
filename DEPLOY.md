# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Valentine tribute experience"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)

3. Click "Import Project"

4. Select your GitHub repository

5. Vercel will auto-detect Next.js and configure everything

6. Click "Deploy"

7. Your site will be live in ~2 minutes! 🎉

## Alternative: Netlify

1. Push code to GitHub (same as above)

2. Go to [netlify.com](https://netlify.com)

3. Click "Add new site" → "Import an existing project"

4. Connect to GitHub and select your repository

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

6. Deploy!

## Local Preview of Production Build

```bash
npm run build
npm start
```

Visit `http://localhost:3000`

## Environment Setup (if needed)

If you add any API keys or secrets later, create a `.env.local` file:

```env
NEXT_PUBLIC_API_KEY=your_key_here
```

## Custom Domain

### On Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### On Netlify:
1. Go to "Domain settings"
2. Add custom domain
3. Follow DNS configuration steps

## Performance Tips

- The site is already optimized for production
- Use Lighthouse to check performance scores
- All animations are GPU-accelerated
- Images (if you add any) should be optimized

## Adding Custom Music

1. Add your `.mp3` file to a `public` folder (create if it doesn't exist)
2. Uncomment the audio code in `components/SoundToggle.tsx`
3. Update the file path

## Testing Before Deploy

✅ Test on multiple devices:
- Desktop (Chrome, Firefox, Safari)
- Mobile (iOS Safari, Android Chrome)
- Tablet

✅ Check all interactions:
- Hero button scrolls smoothly
- Cards open modals correctly
- Orbs reveal compliments
- Letters display with typewriter effect
- Final section animates properly

## Analytics (Optional)

To track visits, add Google Analytics or Vercel Analytics:

### Vercel Analytics
Already included if you deploy to Vercel!

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `app/layout.tsx`

---

**Your tribute experience is ready to share!** ✨

Make sure to send the link with context—this is a special moment for someone special.
