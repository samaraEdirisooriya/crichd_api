# Cricket Promotion Webapp - Project Outline

## File Structure
```
/mnt/okcomputer/output/
├── index.html          # Main landing page with app download
├── matches.html        # Match selection and bidding page  
├── leaderboard.html    # Winners and leaderboard page
├── main.js            # Core JavaScript functionality
├── resources/         # Images and assets folder
│   ├── hero-cricket.png
│   ├── prize-trophy.png
│   ├── vs-screen.png
│   ├── app-download.png
│   └── leaderboard-celebration.png
└── README.md          # Project documentation
```

## Page Content Structure

### index.html - Main Landing Page
**Purpose**: High-energy landing page focused on app downloads and prize promotion

**Sections**:
1. **Hero Section**
   - Dynamic cricket background with animated particles
   - Large comic-style "CRICKET BETTING CHAMPIONSHIP" title
   - Prominent glowing "DOWNLOAD APP NOW" button (redirects to crickgd.live)
   - Hero image with dramatic cricket action scene

2. **App Download Section** (Main Focus)
   - Large, pulsing download button with neon glow
   - App store badges with hover effects
   - "Join 100,000+ players" social proof text
   - Animated app preview mockups

3. **Prize Showcase Section**
   - Animated prize boxes with golden trophies
   - "WIN UP TO $10,000" with comic explosion graphics
   - "Want to win this prize? Go to match and bid your team!" CTA
   - Rotating prize display with shadow effects

4. **Quick Match Preview**
   - Horizontal scrolling match cards
   - "Live matches available now" with team logos
   - Quick navigation to matches page

5. **Navigation Bar**
   - Bottom navigation for mobile
   - Home, Matches, Leaderboard tabs

### matches.html - Match Selection & Bidding
**Purpose**: Interactive match cards with team selection and bidding system

**Sections**:
1. **Match Cards Grid**
   - 5 cricket matches with real team data:
     - AFG vs BAN (1st ODI)
     - IND vs WI (Test Series)
     - NAM vs SA (T20, Oct 11)
     - PAK vs SA (Test, Oct 12-16)
     - BAN vs IND (2nd Test, Oct 10)

2. **Match Detail Modal**
   - Team captain images and names
   - VS animation with electric effects
   - Match details (date, format, venue)
   - Google-style win predictor chart
   - Team selection buttons

3. **Bidding Form**
   - Username input field
   - Email input field
   - Team selection (A or B)
   - Bid amount slider
   - "PLACE BID" button with confetti animation

4. **Success Animation**
   - Full-screen confetti explosion
   - "BID PLACED SUCCESSFULLY!" message
   - Prize notification: "When your team wins, you could win $10,000!"
   - Return to matches button

### leaderboard.html - Winners & Leaderboard
**Purpose**: Display fake winners and create excitement for new users

**Sections**:
1. **Winner Celebration Header**
   - Animated celebration graphic
   - "CONGRATULATIONS WINNERS!" title
   - Confetti and fireworks effects

2. **Recent Winners Carousel**
   - Scrolling winner cards with:
     - Fake winner names and photos
     - Winning amounts ($500 - $10,000)
     - Winning teams and matches
     - Timestamps ("2 hours ago", "Yesterday")

3. **Top Winners Leaderboard**
   - Table with fake winner data:
     - Rank, Name, Winning Amount, Matches Won
     - Highlighted top 3 with gold/silver/bronze styling
     - Animated counter for total prizes given

4. **Prize Distribution Chart**
   - Visual breakdown of prizes won
   - "10 random winners every match" promotion
   - "You could be next!" call-to-action

## JavaScript Functionality (main.js)

### Core Features
1. **Navigation System**
   - Bottom tab navigation
   - Smooth page transitions
   - Active state management

2. **Animation Controllers**
   - Prize box rotations and glows
   - Match card hover effects
   - Confetti particle systems
   - Typewriter text animations

3. **Interactive Components**
   - Match card click handlers
   - Team selection logic
   - Form validation and submission
   - Success/error state management

4. **Data Management**
   - Fake winner data generation
   - Match data and team information
   - Local storage for user preferences
   - Bid tracking and history

### Animation Libraries Integration
- **Anime.js**: Button animations, prize reveals
- **Pixi.js**: Confetti particle effects
- **Typed.js**: Dramatic text reveals
- **Splitting.js**: Letter-by-letter animations
- **ECharts.js**: Win predictor charts
- **Splide.js**: Match card carousel
- **p5.js**: Dynamic background effects

## Content Data Structure

### Match Data
```javascript
{
  id: "afg-vs-ban-odi",
  teamA: { name: "Afghanistan", captain: "Rashid Khan", flag: "afg-flag.png" },
  teamB: { name: "Bangladesh", captain: "Najmul Hossain Shanto", flag: "ban-flag.png" },
  format: "1st ODI",
  date: "2024-10-08",
  venue: "Sheikh Zayed Stadium, Abu Dhabi",
  winProbability: { teamA: 45, teamB: 55 }
}
```

### Fake Winner Data
```javascript
{
  name: "Rajesh Kumar",
  amount: 5000,
  team: "India",
  match: "IND vs AUS",
  timestamp: "2 hours ago",
  avatar: "winner-avatar-1.png"
}
```

## Mobile Optimization Features
- Touch-friendly button sizes (minimum 44px)
- Swipe gestures for match navigation
- Optimized images for mobile bandwidth
- Fast loading animations
- Bottom navigation for thumb accessibility
- Responsive typography scaling