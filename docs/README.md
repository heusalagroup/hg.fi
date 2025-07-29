# Heusala Group Website

A professional single-page marketing website for Heusala Group, showcasing custom software development and IT consulting services for Finnish small businesses.

## 🚀 Quick Start

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Local development**: Use a local server for best experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have npx)
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. **View online**: Visit `https://hg.fi` (when deployed)

## 📁 Project Structure

```
docs/
├── index.html          # Main website file
├── index.css           # All styles and responsive design
├── assets/             # Images and other assets
└── README.md           # This file
```

## 🎨 Design Features

- **Apple-inspired minimalism**: Clean, modern design with abundant whitespace
- **Mobile-first responsive**: Optimized for all screen sizes (320px+)
- **Accessibility compliant**: WCAG AA standards with keyboard navigation
- **Performance optimized**: Fast loading with minimal dependencies
- **SEO ready**: Proper meta tags, semantic HTML, and structured content

## 🛠 Technical Stack

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Modern features with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: Lightweight interactions without frameworks
- **SVG Icons**: Inline SVG for crisp, scalable icons
- **No external dependencies**: Self-contained for maximum performance

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## 🎯 Key Sections

1. **Hero** - Main value proposition and primary CTA
2. **Services** - Three core service offerings with icons
3. **Packages** - Four solution packages with pricing
4. **Process** - 3-step guided process
5. **Why Choose Us** - Four key differentiators
6. **Testimonial** - Social proof (placeholder)
7. **About** - Founder bio and company values
8. **Contact** - Contact information and direct links

## 🔧 Customization

### Colors
Update CSS variables in `:root`:
```css
--color-accent: #2563eb;        /* Primary brand color */
--color-text: #0f172a;          /* Main text color */
--color-bg: #ffffff;            /* Background color */
```

### Content
- **Company info**: Update contact details in the contact section
- **Pricing**: Modify package prices in the packages grid
- **Services**: Edit service descriptions and icons
- **About**: Update founder bio and company values

### Images
- Replace the hero image placeholder with your own image
- Add founder photo in the about section
- Optimize images for web (WebP format recommended)

## 📧 Contact Information

The contact section includes:
- **Direct email link**: Click to open email client
- **Phone number**: Direct dial link for mobile devices
- **Availability**: Clear business hours and appointment information
- **Mobile optimized**: Touch-friendly contact links

## 🔍 SEO & Analytics

### Current SEO Features
- Proper meta tags and Open Graph
- Semantic HTML structure
- Single H1, logical heading hierarchy
- Alt text for images
- Fast loading times

### Analytics Integration
To add analytics, insert your tracking code before the closing `</body>` tag:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>

<!-- Or Plausible Analytics -->
<script async defer data-domain="hg.fi" src="https://plausible.io/js/plausible.js"></script>
```

## 🚀 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to `/docs` folder
4. Custom domain: Add `CNAME` file with `hg.fi`

### Netlify
1. Connect GitHub repository
2. Set build directory to `docs`
3. Deploy automatically on push

### Vercel
1. Import GitHub repository
2. Set root directory to `docs`
3. Deploy with zero configuration

## 🔒 Security & Compliance

### GDPR Compliance
- No cookies by default
- Contact information with clear purpose
- Legal information in footer
- Privacy policy ready for implementation

### Security Features
- HTTPS recommended for production
- Form validation and sanitization
- No external scripts (unless analytics added)
- Content Security Policy ready

## 📈 Performance

### Current Optimizations
- **CSS**: Minified and optimized (under 15KB)
- **JavaScript**: Lightweight vanilla JS (under 5KB)
- **Images**: Optimized hero image with data URL
- **Fonts**: System font stack (no external fonts)
- **Icons**: Inline SVG (no external requests)

### Performance Targets
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🧪 Testing

### Manual Testing Checklist
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness (iPhone, Android)
- [ ] Form validation and submission
- [ ] Navigation and smooth scrolling
- [ ] Accessibility (keyboard navigation, screen readers)
- [ ] Performance (Lighthouse audit)

### Automated Testing
```bash
# HTML validation
npx html-validate index.html

# CSS validation
npx stylelint index.css

# Performance testing
npx lighthouse index.html --output=html
```

## 🔄 Maintenance

### Regular Updates
- **Content**: Update testimonials, case studies, and pricing
- **Contact info**: Keep phone, email, and availability current
- **Legal**: Update company information and compliance details
- **Performance**: Monitor and optimize loading times

### Future Enhancements
- Blog section (hidden markup ready)
- Newsletter signup (hidden markup ready)
- Multi-language support
- Advanced analytics dashboard
- Customer portal integration

## 📞 Support

For technical support or customization requests:
- **Email**: info@hg.fi
- **Phone**: +358 45 1734604
- **Hours**: Mon–Fri 17:00–21:00 EET

## 📄 License

© 2024 Heusala Group. All rights reserved.

---

*Built with ❤️ for Finnish small businesses* 