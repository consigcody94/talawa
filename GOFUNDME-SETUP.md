# GoFundMe Integration Guide

## 📍 Where is the GoFundMe Placeholder?

The GoFundMe placeholder is located in the **Donate page**:

**File:** `app/donate/page.tsx`
**Lines:** 117-149

## What You'll See

When you visit `http://localhost:3000/donate`, you'll see a section titled **"Make Your Donation"** with a white card containing:

- ❤️ Heart icon
- "GoFundMe Campaign Coming Soon" heading
- Brief message about setting up the campaign
- Instructions on how to add the embed code

## How to Add Your GoFundMe Campaign

### Step 1: Create Your Campaign

1. Go to [gofundme.com](https://www.gofundme.com)
2. Click "Start a GoFundMe"
3. Set up your campaign with:
   - Title: "Talawa - Empowering Jamaican Youth Through Education"
   - Goal amount
   - Your story and mission
   - Photos of students, Jamaica, or your organization

### Step 2: Get the Embed Code

1. Once your campaign is live, go to your campaign page
2. Click the **"Share"** button
3. Look for **"Embed"** option
4. Copy the embed code (it will look something like this):

```html
<div class="gfm-embed" data-url="https://www.gofundme.com/f/your-campaign-name/widget/medium"></div>
<script defer src="https://www.gofundme.com/static/js/embed.js"></script>
```

### Step 3: Replace the Placeholder

1. Open `app/donate/page.tsx` in your editor
2. Find the section around line 117 (look for the comment `{/* GoFundMe Embed Container */}`)
3. Replace the entire placeholder div (lines 131-149) with your GoFundMe embed code

**Before:**
```tsx
<div className="text-center">
  <div className="text-6xl mb-6">❤️</div>
  <h3 className="text-2xl font-bold text-primary-green mb-4">
    GoFundMe Campaign Coming Soon
  </h3>
  <p className="text-gray-600 mb-8 max-w-md">
    We're setting up our GoFundMe campaign...
  </p>
  ...
</div>
```

**After:**
```tsx
<div className="gfm-embed" data-url="https://www.gofundme.com/f/your-campaign-name/widget/medium"></div>
<script defer src="https://www.gofundme.com/static/js/embed.js"></script>
```

### Step 4: Test It

1. Save the file
2. The development server will automatically reload
3. Visit `http://localhost:3000/donate`
4. You should now see your live GoFundMe campaign widget!

## Alternative: Using Next.js Script Component

For better Next.js compatibility, you can use the Script component:

```tsx
import Script from 'next/script';

// In your component:
<>
  <div className="gfm-embed" data-url="https://www.gofundme.com/f/your-campaign-name/widget/medium"></div>
  <Script
    src="https://www.gofundme.com/static/js/embed.js"
    strategy="lazyOnload"
  />
</>
```

## Troubleshooting

**Widget not showing?**
- Make sure your campaign is published and live
- Check browser console for any JavaScript errors
- Try using the full URL in the data-url attribute
- Ensure the script tag is loading correctly

**Styling issues?**
- The GoFundMe widget comes with its own styling
- You can wrap it in a container div to control width/spacing
- The white card around it (lines 117-118) provides good framing

**Need help?**
- GoFundMe support: [https://support.gofundme.com](https://support.gofundme.com)
- Contact your developer if you run into technical issues

---

**That's it!** Once your GoFundMe is embedded, visitors can donate directly through your website. 🎉
