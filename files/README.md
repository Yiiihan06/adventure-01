# Orange - Figma Design Implementation

This project is a complete HTML/CSS/JavaScript implementation of the Figma design from:
https://www.figma.com/design/SK6CuHEjSoyoPwm07S26pB/orange

## Features

### 🎨 Design Implementation
- **3 Pages**: Fully responsive implementation of all 3 pages (pg1, pg2, pg3)
- **Accurate Styling**: Matches Figma design specifications including:
  - Custom Jacquard 12 font
  - Exact positioning and dimensions
  - Background colors and images
  - Text styling and layout

### 🎯 Navigation & Interactions

#### Multiple Navigation Methods:
1. **Click on Text**: Click "text test" on any page to navigate to the next page
2. **Navigation Buttons**: Use the buttons in the top-right corner
3. **Keyboard Shortcuts**:
   - `→` (Right Arrow): Next page
   - `←` (Left Arrow): Previous page
   - `1`, `2`, `3`: Jump directly to a specific page
4. **Mouse Wheel**: Scroll up/down to navigate between pages
5. **Touch Gestures**: Swipe left/right on mobile devices
6. **Page Indicators**: Click the dots at the bottom to jump to a page

### ✨ Smooth Transitions
- Fade in/out animations between pages
- Scale effects on hover
- Smooth page transitions
- Preloaded images for optimal performance

### 📱 Responsive Design
- Scales down gracefully on smaller screens
- Touch-friendly navigation on mobile
- Maintains aspect ratio of original design

## File Structure

```
├── index.html      # Main HTML file with all 3 pages
├── styles.css      # Complete styling matching Figma design
├── script.js       # Navigation logic and interactions
└── README.md       # This file
```

## How to Use

### Quick Start
1. Open `index.html` in a web browser
2. Navigate between pages using any of the methods listed above

### Customization

#### Modifying Pages
Each page is contained in a `<div class="page">` element:
- `#page1`: White background with large house fly image
- `#page2`: Brown/olive background (#575039)
- `#page3`: White background with small house fly image and drawing

#### Changing Navigation
The navigation behavior is controlled in `script.js`:
- `navigateToPage(pageNum)`: Jump to a specific page
- `navigateNext()`: Go to next page
- `navigatePrev()`: Go to previous page

#### Styling Adjustments
All styles are in `styles.css`:
- Page backgrounds
- Text positioning and styling
- Image positioning
- Navigation controls
- Transition effects

## Browser Compatibility
- Chrome/Edge: ✅ Fully supported
- Firefox: ✅ Fully supported
- Safari: ✅ Fully supported
- Mobile browsers: ✅ Touch navigation supported

## Technical Details

### Font
The design uses **Jacquard 12** font from Google Fonts, which is automatically loaded from the CDN.

### Images
Images are hosted on Figma's CDN and are valid for 7 days. After that, you'll need to:
1. Download the images from Figma
2. Save them locally
3. Update the image URLs in `index.html`

### Performance
- Images are preloaded on page load
- Smooth 60fps transitions
- Optimized CSS animations
- Minimal JavaScript overhead

## Prototype Flow
Based on the Figma prototype:
1. **Page 1** → Click text → **Page 2**
2. **Page 2** → Click text → **Page 3**
3. **Page 3** → Click text → **Page 1** (loops back)

## Notes

- The design is fixed at 1440x1024px and scales to fit the viewport
- All positioning matches the Figma file exactly
- The brown color used is #575039
- Text color is #060405
- Font size for main text is 200px

## Future Enhancements

Possible additions:
- Add more page transitions (slide, flip, etc.)
- Implement URL routing for deep linking
- Add loading states for images
- Create mobile-specific layouts
- Add accessibility features (ARIA labels, keyboard focus indicators)

## Credits

Design: Original Figma file from SK6CuHEjSoyoPwm07S26pB
Implementation: Generated from Figma design specifications

---

Enjoy exploring the design! 🎨
