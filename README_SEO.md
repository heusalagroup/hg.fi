# SEO Improvements for hg.fi

This document outlines the SEO improvements implemented to achieve a Lighthouse SEO score ≥95.

## Changes Made

### 1. Enhanced Meta Tags (`index.html`)

**Primary Meta Tags:**
- ✅ Title: "Heusala Group – Custom Software Development & IT Consulting in Finland" (≤60 chars)
- ✅ Description: "Fixed-scope software packages delivered in 1-2 weeks. 12 months support included. Custom software, web development & automation for Finnish small businesses." (≈155 chars)
- ✅ Added keywords, author, and robots meta tags
- ✅ Canonical URL: `https://hg.fi/`

**Language & International Targeting:**
- ✅ Hreflang tags for English (`en`) and Finnish (`fi`)
- ✅ X-default hreflang for international users
- ✅ Open Graph locale tags (`en_US` and `fi_FI`)

### 2. Open Graph & Twitter Cards

**Open Graph:**
- ✅ `og:title`, `og:description`, `og:image`
- ✅ `og:image:width` and `og:image:height` (1200x630)
- ✅ `og:image:alt` for accessibility
- ✅ `og:locale` and `og:locale:alternate`
- ✅ `og:site_name`

**Twitter Cards:**
- ✅ `twitter:card` = "summary_large_image"
- ✅ `twitter:title`, `twitter:description`, `twitter:image`
- ✅ `twitter:image:alt` for accessibility

### 3. Structured Data (JSON-LD)

**LocalBusiness Schema:**
- ✅ Company name, URL, telephone, email
- ✅ Complete address with PostalAddress schema
- ✅ Price range (€€€)
- ✅ Social media links (`sameAs`)
- ✅ Service area (Finland)
- ✅ Offer catalog with three main packages:
  - Startup Launch Package (€15,000)
  - Online Presence Package (€6,000)
  - Business Process Automation (€10,000)

### 4. Performance Optimizations

**Resource Preloading:**
- ✅ Preload hero image: `<link rel="preload" href="assets/hero.png" as="image">`
- ✅ Preload CSS: `<link rel="preload" href="index.css" as="style">`

**JavaScript Optimization:**
- ✅ Added `defer` attribute to script tag for non-blocking loading

**Font Optimization:**
- ✅ Added `font-display: swap` to CSS for faster text rendering

### 5. Image Optimization

**Alt Text:**
- ✅ Hero image: "Software development and IT solutions illustration"
- ✅ About avatar: "Heusala Group Founder - Professional headshot"

**Loading Strategy:**
- ✅ Hero image: `loading="eager"` (above the fold)
- ✅ About avatar: `loading="lazy"` (below the fold)

### 6. Sitemap & Robots

**robots.txt:**
- ✅ Already existed and was correct
- ✅ Points to sitemap.xml

**sitemap.xml:**
- ✅ Updated with today's date (2025-01-27)
- ✅ Added anchor fragments for major sections:
  - `/` (priority 1.0)
  - `/#services` (priority 0.9)
  - `/#process` (priority 0.8)
  - `/#about` (priority 0.7)
  - `/#contact` (priority 0.8)

## How to Update Meta Tags

### For Content Changes

1. **Title Tag** (keep ≤60 characters):
   ```html
   <title>Your New Title Here</title>
   ```

2. **Meta Description** (keep ≈155 characters):
   ```html
   <meta name="description" content="Your new description here">
   ```

3. **Open Graph & Twitter** (update all three):
   ```html
   <meta property="og:title" content="Your New Title">
   <meta property="twitter:title" content="Your New Title">
   <meta property="og:description" content="Your new description">
   <meta property="twitter:description" content="Your new description">
   ```

### For New Services/Packages

1. **Update Structured Data** in the JSON-LD script:
   ```json
   {
     "@type": "Offer",
     "itemOffered": {
       "@type": "Service",
       "name": "New Service Name",
       "description": "Service description"
     },
     "price": "15000",
     "priceCurrency": "EUR"
   }
   ```

2. **Add to sitemap.xml** if it's a new major section:
   ```xml
   <url>
     <loc>https://hg.fi/#newsection</loc>
     <lastmod>YYYY-MM-DD</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.8</priority>
   </url>
   ```

### For New Images

1. **Add descriptive alt text**:
   ```html
   <img src="path/to/image.jpg" alt="Descriptive alt text here" loading="lazy">
   ```

2. **Use loading="eager"** for above-the-fold images, **loading="lazy"** for below-the-fold

## Testing SEO Score

### Local Testing
```bash
# Install Lighthouse globally
npm install -g lighthouse

# Run SEO audit
lighthouse https://hg.fi --only-categories=seo --chrome-flags="--headless"

# Or test locally
lighthouse http://localhost:8000 --only-categories=seo --chrome-flags="--headless"
```

### CI/CD Integration
Add to your CI pipeline:
```bash
# Fail if SEO score drops below 95
lighthouse https://hg.fi --only-categories=seo --chrome-flags="--headless" --output=json | jq '.categories.seo.score * 100' | awk '{if($1 < 95) exit 1}'
```

## Monitoring

### Key Metrics to Watch
- **Lighthouse SEO Score** (target: ≥95)
- **Core Web Vitals** (LCP, FID, CLS)
- **Google Search Console** performance
- **Rich snippet** appearance in search results

### Tools for Monitoring
- Google Search Console
- Google PageSpeed Insights
- Lighthouse CI
- Google Analytics (if implemented)

## Notes

- All changes maintain the existing visual design
- No build tools or frameworks were introduced
- The site remains a single-page application
- All improvements are client-side only
- Structured data follows Schema.org standards
- Performance optimizations focus on Core Web Vitals

## Files Modified

1. `docs/index.html` - Enhanced head section with meta tags, structured data, and performance optimizations
2. `docs/index.css` - Added font-display: swap
3. `docs/sitemap.xml` - Updated with current date and anchor fragments
4. `docs/robots.txt` - Already existed and was correct

## Next Steps

1. Test the site with Lighthouse to confirm ≥95 SEO score
2. Submit updated sitemap to Google Search Console
3. Monitor rich snippet appearance in search results
4. Consider implementing Google Analytics for better tracking
5. Set up automated SEO testing in CI/CD pipeline 