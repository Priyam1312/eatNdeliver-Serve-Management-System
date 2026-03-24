# 🍽️ eatNdeliver × Zomito

A multi-page food delivery and restaurant discovery web application built with vanilla HTML, CSS, and JavaScript.

---

## 📌 Overview

**eatNdeliver** is the main landing platform that connects users to two core services:

- **Food Delivery** — Browse menus and get food delivered to your door.
- **Zomito** — A restaurant discovery platform (inspired by Zomato) to explore restaurants, view menus, make table reservations, and track bookings.

---

## 📁 Project Structure (May differ)

```
project/
│
├── index.html              # Main landing page (eatNdeliver homepage)
├── zomago.html             # Zomito — restaurant discovery hub
├── restaurant.html         # Restaurant listing/browse page
├── restaurant-details.html # Individual restaurant detail page
├── delivery.html           # Food delivery page
├── buffe.html              # Buffet listing/discovery page
├── top_trending.html       # Top trending restaurants page
├── the_legend.html         # Featured/legend restaurants page
├── res.html                # Additional restaurant page
├── booking-history.html    # User booking history page
│
├── style.css               # Global shared styles (auth modal, navbar, responsive)
└── script.js               # Global JavaScript (scroll animations, counters, auth)
```

---

## ✨ Features

### 🏠 Landing Page (`index.html`)
- Animated loading screen with brand logo
- Sticky navbar with smooth scroll and active link highlighting
- Hero section with a Zomito redirect (with branded transition animation)
- Animated statistics counter (5M+ users, 50+ cities, 5000+ restaurants, 24/7 service)
- Services section highlighting delivery and dining features
- Scroll-triggered fade-in and scale animations
- Footer with quick links, contact info, and social media

### 🔍 Zomito — Restaurant Discovery (`zomago.html`)
- Full restaurant discovery interface
- Search and filter functionality
- Branded red-themed UI with custom scrollbar
- Marquee strip transition animations

### 🏪 Restaurant Pages
- **`restaurant.html`** — Browse all restaurants
- **`restaurant-details.html`** — Detailed view with menu, images, and booking
- **`top_trending.html`** — Curated trending restaurants
- **`the_legend.html`** — Featured legendary restaurants
- **`buffe.html`** — Buffet-specific listings
- **`res.html`** — Additional restaurant discovery view

### 🚚 Delivery (`delivery.html`)
- Food delivery flow and menu browsing under the Zomito brand

### 📋 Booking History (`booking-history.html`)
- View and manage past restaurant reservations and orders

### 🔐 Authentication
- Login / Signup redirect flow (`login.html` / `signup.html`)
- `localStorage`-based session persistence
- Dynamic navbar updates on login (shows user name + logout button)
- Auto auth prompt modal after 5 minutes of inactivity (shown once per session via `sessionStorage`)
- Logout clears session and reloads the page

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure and semantics |
| CSS3 | Animations, transitions, responsive layout |
| Vanilla JavaScript | DOM manipulation, scroll events, counters, auth |
| Bootstrap 5.3 | Grid system, navbar, utility classes |
| Font Awesome 6.4 | Icons throughout the UI |
| Google Fonts | Poppins (body), Playfair Display (headings), Montserrat |
| Animate.css 4.1 | Supplementary entry animations |

> **No frameworks, no build tools.** This is a fully static front-end project — open any HTML file directly in a browser.

---

## 🚀 Getting Started

### Prerequisites
No installations required. Just a modern web browser.

### Running Locally

1. **Clone or download** the project files into a single folder.
2. Open `index.html` in your browser.

```bash
# Option: serve with a simple local server to avoid any CORS issues
npx serve .
# or
python -m http.server 8000
```

3. Navigate to `http://localhost:8000` (if using a local server).

---

## 🎨 Design System

| Element | Value |
|---|---|
| Primary Font | Poppins |
| Display Font | Playfair Display |
| Brand Gold | `rgba(238, 208, 15, 0.87)` |
| Zomito Red | `#ff0000` / `rgba(255, 0, 0, 0.95)` |
| Accent Green | `#1dd1a1` |
| Danger/CTA | `#ff6b6b` |

---

## 📱 Responsive Design

The project is mobile-responsive using Bootstrap's grid and custom media queries. Key breakpoints are handled at `768px` for navbar, modals, and user menu layouts.

---

## 🔧 Key JavaScript Modules (`script.js`)

| Function | Description |
|---|---|
| `animateCounter()` | Animates stat numbers from 0 to target with formatting (K/M/B) |
| `animateBoxes()` | Fades in service cards on scroll |
| `animateStats()` | Scales in stat items and triggers counters once in viewport |
| `updateNavbarAuth()` | Swaps auth buttons for user menu if logged in |
| `logout()` | Clears localStorage session and reloads |
| `setupAutoAuthModal()` | Schedules the login prompt modal after 5 minutes |
| `scrollToServices()` | Smooth scrolls to the services section |

---

## 📄 License

This project is for educational/personal use. All brand names and design references are fictional.
