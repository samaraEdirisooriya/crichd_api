# Cricket Betting Championship - Promotion Website

A stunning, high-energy cricket betting promotion website with comic book aesthetics and gambling franchise styling. Built with mobile-first design and featuring interactive match betting, prize showcases, and animated celebrations.

## Features

### 🎨 Design
- **Comic Book Aesthetic**: Bold, high-energy design with neon glows and explosive graphics
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Gambling Franchise Look**: Professional betting platform appearance

### 🏏 Core Functionality
- **App Download Promotion**: Main focus on driving downloads to crickgd.live
- **Live Match Betting**: Interactive match cards with team selection
- **Prize Showcase**: Animated prize boxes with win incentives
- **Leaderboard**: Fake winner data to create excitement and FOMO
- **Success Celebrations**: Confetti animations and success modals

### 🎭 Interactive Elements
- **Match Selection**: Click on match cards to open detailed betting interface
- **Team Selection**: Choose between two teams with visual feedback
- **Bid Placement**: Form with validation and success animations
- **Navigation**: Bottom navigation bar for mobile optimization
- **Carousels**: Smooth scrolling match and winner displays

### ⚡ Animations & Effects
- **Anime.js**: Smooth button animations and prize reveals
- **Typed.js**: Typewriter effects for dramatic text
- **Pixi.js**: Particle confetti celebrations
- **Splide.js**: Touch-friendly carousels
- **Custom CSS**: Neon glows, pulsing effects, and floating animations

## File Structure

```
├── index.html              # Main landing page
├── matches.html            # Match selection and betting
├── leaderboard.html        # Winners and leaderboard
├── main.js                # Core JavaScript functionality
├── resources/             # Images and assets
│   ├── hero-cricket.png
│   ├── prize-trophy.png
│   ├── vs-screen.png
│   ├── app-download.png
│   └── leaderboard-celebration.png
└── README.md              # This file
```

## Pages Overview

### Index.html - Landing Page
- Hero section with animated cricket background
- Prominent app download button (redirects to crickgd.live)
- Prize showcase with animated boxes
- Quick match preview carousel
- Statistics counters

### Matches.html - Betting Interface
- Interactive match cards with real team data
- Modal interface for team selection
- Bid placement form with validation
- Success celebrations with confetti
- Win probability indicators

### Leaderboard.html - Winners Display
- Recent winners carousel
- Top winners leaderboard with rankings
- Prize distribution information
- Call-to-action for new users

## Technical Implementation

### Libraries Used
1. **Anime.js** - Smooth animations
2. **Typed.js** - Typewriter effects
3. **Pixi.js** - Particle systems
4. **Splide.js** - Carousels
5. **Tailwind CSS** - Utility-first styling

### Key Features
- **Mobile Optimization**: Touch-friendly interactions
- **Form Validation**: Email and required field validation
- **Local Storage**: User preference storage
- **Error Handling**: Graceful fallbacks
- **Performance**: Lazy loading and optimized animations

### Match Data
- Afghanistan vs Bangladesh (1st ODI)
- India vs West Indies (Test Series)
- Namibia vs South Africa (T20)
- Pakistan vs South Africa (Test)

## Deployment

The website is designed to be deployed as a static site. All files are self-contained with CDN-hosted libraries.

### Local Development
```bash
python -m http.server 8000
```

### Production Deployment
- Upload all files to web server
- Ensure images are in resources/ directory
- Test all navigation and interactions

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Performance Notes
- Images optimized for web
- Lazy loading implemented
- Minimal external dependencies
- Efficient animation loops

## Legal Compliance
- High contrast design for accessibility
- Clear visual hierarchy
- Responsible gambling messaging
- Age verification reminders

---

**Note**: This is a promotional website for entertainment purposes. All betting functionality is simulated and no real money is involved.