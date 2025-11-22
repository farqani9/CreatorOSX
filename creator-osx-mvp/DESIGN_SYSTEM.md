# 🎨 Creator OSX Design System

**Version**: 1.0  
**Last Updated**: November 22, 2024  
**Status**: Official design system for all pages

---

## 🎯 Design Principles

All pages in Creator OSX MUST maintain consistency with the landing page design. This document defines the official color palette, typography, spacing, and component patterns.

---

## 🎨 Color Palette

### Primary Brand Colors

Based on the landing page, our brand uses **sky blue** tones:

```css
/* Brand Colors - Use these for primary actions and brand elements */
--color-brand-50:  #f0f9ff   /* Lightest blue */
--color-brand-100: #e0f2fe   /* Very light blue */
--color-brand-500: #0ea5e9   /* Primary brand blue */
--color-brand-600: #0284c7   /* Darker blue for hover states */
--color-brand-900: #0c4a6e   /* Darkest blue for text */
```

**Usage in Tailwind:**
```jsx
<div className="bg-brand-50 text-brand-900">
  <button className="bg-brand-500 hover:bg-brand-600 text-white">
    Primary Action
  </button>
</div>
```

### Neutral Colors (Slate)

The landing page uses **slate** for text, backgrounds, and borders:

```css
/* Neutral Slate Colors - Use for backgrounds, text, borders */
slate-50:  #f8fafc   /* Lightest backgrounds */
slate-100: #f1f5f9   /* Light backgrounds */
slate-200: #e2e8f0   /* Borders, dividers */
slate-300: #cbd5e1   /* Subtle borders */
slate-400: #94a3b8   /* Placeholder text */
slate-500: #64748b   /* Secondary text */
slate-600: #475569   /* Body text */
slate-700: #334155   /* Emphasis text */
slate-800: #1e293b   /* Headings */
slate-900: #0f172a   /* Primary text */
```

**Usage Examples:**
```jsx
/* Backgrounds */
<div className="bg-white">White background (default)</div>
<div className="bg-slate-50">Light gray background</div>
<div className="bg-slate-100">Slightly darker background</div>

/* Text */
<h1 className="text-slate-900">Primary heading</h1>
<h2 className="text-slate-800">Secondary heading</h2>
<p className="text-slate-700">Body text</p>
<span className="text-slate-500">Secondary text</span>
<span className="text-slate-400">Placeholder/disabled</span>

/* Borders */
<div className="border border-slate-100">Subtle border</div>
<div className="border border-slate-200">Default border</div>
```

### Status Colors

For status badges, use these colors consistently:

```jsx
/* Contact Statuses */
New:           bg-blue-50 text-blue-700 border-blue-100
Contacted:     bg-yellow-50 text-yellow-700 border-yellow-100
In Discussion: bg-orange-50 text-orange-700 border-orange-100
Closed:        bg-green-50 text-green-700 border-green-100

/* Deal Statuses */
Negotiating:   bg-blue-50 text-blue-700 border-blue-100
Pending:       bg-yellow-50 text-yellow-700 border-yellow-100
Active:        bg-purple-50 text-purple-700 border-purple-100
Completed:     bg-green-50 text-green-700 border-green-100
Lost:          bg-red-50 text-red-700 border-red-100

/* Content Statuses */
Idea:          bg-gray-50 text-gray-700 border-gray-100
Drafting:      bg-blue-50 text-blue-700 border-blue-100
Scheduled:     bg-yellow-50 text-yellow-700 border-yellow-100
Posted:        bg-green-50 text-green-700 border-green-100
```

---

## 📝 Typography

### Font Families

```css
/* Primary Font (Body, UI) */
font-family: 'Inter', sans-serif;

/* Serif Font (Headings, Emphasis) */
font-family: 'Playfair Display', serif;
```

**Already configured in Next.js:**
- Inter is loaded via `next/font/google` as `geistSans`
- Available as `font-sans` in Tailwind

### Font Sizes & Weights

```jsx
/* Headings */
<h1 className="text-5xl sm:text-6xl font-bold font-serif text-slate-900">
  Main Heading
</h1>

<h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
  Section Heading
</h2>

<h3 className="text-xl sm:text-2xl font-semibold text-slate-800">
  Subsection Heading
</h3>

<h4 className="text-lg font-semibold text-slate-800">
  Card Heading
</h4>

/* Body Text */
<p className="text-base text-slate-700">
  Regular body text
</p>

<p className="text-lg text-slate-700">
  Large body text (landing page style)
</p>

<span className="text-sm text-slate-600">
  Small text
</span>

<span className="text-xs text-slate-500">
  Extra small text (labels, metadata)
</span>
```

### Font Weights

```jsx
font-light    (300) - Rarely used
font-normal   (400) - Body text
font-medium   (500) - Emphasis, buttons
font-semibold (600) - Subheadings, labels
font-bold     (700) - Main headings
```

---

## 🎯 Buttons

### Button Variants (from landing page)

```jsx
/* Primary Button (Brand Color) */
<button className="
  px-6 py-3 
  bg-brand-500 hover:bg-brand-600 
  text-white 
  rounded-lg 
  font-medium 
  transition-colors
  flex items-center gap-2
">
  Primary Action
  <ArrowRight size={20} />
</button>

/* Secondary Button (White/Outline) */
<button className="
  px-6 py-3 
  bg-white hover:bg-slate-50 
  text-slate-900 
  border border-slate-200 hover:border-slate-300
  rounded-lg 
  font-medium 
  transition-colors
">
  Secondary Action
</button>

/* Ghost Button */
<button className="
  px-4 py-2 
  text-slate-600 hover:text-slate-900 
  hover:bg-slate-50 
  rounded-lg 
  transition-colors
">
  Ghost Action
</button>
```

### Button Sizes

```jsx
/* Large (Landing page CTA) */
className="px-6 py-3 text-base"

/* Default */
className="px-4 py-2 text-sm"

/* Small */
className="px-3 py-1.5 text-xs"

/* Icon Only */
className="p-2"
```

---

## 📦 Cards & Containers

### Card Styles (from landing page mockup)

```jsx
/* White Card with Border */
<div className="
  bg-white 
  rounded-xl 
  shadow-sm 
  border border-slate-100 
  p-4
">
  Card Content
</div>

/* Card with Shadow (Landing page style) */
<div className="
  bg-white 
  rounded-2xl 
  shadow-xl shadow-slate-900/10 
  p-6
">
  Elevated Card
</div>

/* Subtle Background Card */
<div className="
  bg-slate-50 
  rounded-lg 
  border border-slate-100 
  p-3
">
  Subtle Card
</div>

/* Colored Status Card */
<div className="
  bg-blue-50 
  rounded-lg 
  border border-blue-100 
  p-4
">
  Status Card
</div>
```

### Border Radius

```jsx
rounded-sm     4px   - Small elements
rounded        6px   - Default
rounded-md     8px   - Buttons, inputs
rounded-lg     12px  - Cards, containers
rounded-xl     16px  - Large cards
rounded-2xl    24px  - Hero sections, main containers
rounded-full   9999px - Pills, avatars
```

---

## 📏 Spacing & Layout

### Container Widths

```jsx
/* Page Container */
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  Content
</div>

/* Narrow Content (Text-heavy) */
<div className="max-w-4xl mx-auto px-4">
  Content
</div>

/* Wide Content (Dashboard) */
<div className="max-w-full mx-auto px-4">
  Content
</div>
```

### Spacing Scale

```jsx
/* Use these consistently */
gap-1    4px
gap-2    8px
gap-3    12px
gap-4    16px  ← Default gap for most layouts
gap-6    24px  ← Section spacing
gap-8    32px
gap-12   48px
gap-16   64px
```

### Section Padding

```jsx
/* Page Sections (Landing page pattern) */
<section className="py-16 sm:py-20 lg:py-28">
  Section Content
</section>

/* Dashboard Content */
<main className="p-4 sm:p-6 lg:p-8">
  Dashboard Content
</main>
```

---

## 🎭 Shadows

### Shadow Scale (from landing page)

```jsx
/* Subtle Shadow (Cards) */
shadow-sm       - Subtle elevation
className="shadow-sm"

/* Default Shadow */
shadow          - Default card shadow
className="shadow-md"

/* Large Shadow (Hero elements) */
shadow-xl shadow-slate-900/10
className="shadow-xl shadow-slate-900/10"

/* Dramatic Shadow (Mockup) */
shadow-2xl shadow-slate-200/50
className="shadow-2xl shadow-slate-200/50"
```

---

## 🖼️ Component Patterns

### Badge (Status Indicator)

```jsx
<span className="
  inline-flex items-center gap-1
  px-3 py-1 
  bg-blue-50 
  text-blue-700 
  text-xs font-medium 
  rounded-lg 
  border border-blue-100
">
  <div className="w-2 h-2 rounded-full bg-blue-400" />
  Status Text
</span>
```

### Avatar

```jsx
/* With Initials */
<div className="
  w-8 h-8 
  rounded-full 
  bg-gradient-to-br from-purple-400 to-blue-400 
  flex items-center justify-center 
  text-white text-sm font-semibold
">
  AK
</div>

/* With Ring */
<div className="
  w-8 h-8 
  rounded-full 
  bg-blue-500 
  ring-2 ring-white
" />
```

### Input Fields

```jsx
<input 
  type="text"
  placeholder="Search..."
  className="
    w-full
    px-4 py-2
    bg-white
    border border-slate-200
    rounded-lg
    text-slate-900
    placeholder:text-slate-400
    focus:outline-none
    focus:ring-2
    focus:ring-brand-500
    focus:border-transparent
  "
/>
```

### Search Bar (Landing page style)

```jsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
  <input 
    type="text" 
    placeholder="Search leads..." 
    className="
      pl-9 pr-4 py-2 
      bg-slate-50 
      rounded-full 
      text-sm 
      border-none 
      focus:ring-2 
      focus:ring-slate-200 
      w-64 
      outline-none
    "
  />
</div>
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)

```jsx
sm:   640px  - Small tablets
md:   768px  - Tablets
lg:   1024px - Laptops
xl:   1280px - Desktops
2xl:  1536px - Large desktops
```

### Mobile-First Patterns

```jsx
/* Stack on mobile, grid on desktop */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  Cards
</div>

/* Hidden on mobile, visible on desktop */
<div className="hidden md:block">
  Desktop Only
</div>

/* Full width on mobile, contained on desktop */
<div className="w-full md:w-auto">
  Content
</div>
```

---

## 🎨 Page Background Pattern

### Landing Page Pattern

```jsx
/* White background with selection color */
<div className="
  min-h-screen 
  bg-white 
  font-sans 
  text-slate-900 
  selection:bg-blue-100 
  selection:text-blue-900
">
  Page Content
</div>
```

### Dashboard Pattern

```jsx
/* Light gray background for app */
<div className="
  min-h-screen 
  bg-slate-50
">
  Dashboard Content
</div>
```

---

## ✨ Interactive States

### Hover Effects

```jsx
/* Button Hover */
hover:bg-brand-600        - Primary button
hover:bg-slate-50         - Secondary button
hover:text-slate-900      - Text/ghost button

/* Card Hover */
hover:border-slate-200    - Subtle border change
hover:shadow-md           - Elevation increase
hover:scale-[1.02]        - Slight scale (use sparingly)

/* Link Hover */
hover:underline           - Text links
hover:text-brand-600      - Brand color links
```

### Focus States

```jsx
/* Forms */
focus:outline-none
focus:ring-2
focus:ring-brand-500
focus:border-transparent

/* Buttons (keyboard navigation) */
focus-visible:ring-2
focus-visible:ring-brand-500
focus-visible:ring-offset-2
```

### Transition

```jsx
/* Default transition for interactive elements */
transition-colors duration-200
transition-all duration-300
```

---

## 🎯 Icon Usage

### Icon Library

```jsx
import { 
  LayoutDashboard,
  Users,
  Briefcase,
  Calendar,
  CheckSquare,
  FileText,
  Settings,
  // ... more from lucide-react
} from 'lucide-react';
```

### Icon Sizes

```jsx
<Icon size={16} />  - Small (xs text, tight spaces)
<Icon size={20} />  - Default (buttons, body text)
<Icon size={24} />  - Large (headings, emphasis)
<Icon size={32} />  - Extra large (hero sections)
```

### Icon Colors

```jsx
/* Match with text color */
className="text-slate-400"  - Muted/secondary
className="text-slate-600"  - Body text
className="text-slate-900"  - Primary
className="text-brand-500"  - Brand emphasis
```

---

## 📋 Dashboard Specific Patterns

### Sidebar

```jsx
<aside className="
  w-60 
  border-r border-slate-100 
  bg-white 
  p-4
">
  <nav className="flex flex-col gap-1">
    {/* Active item */}
    <a className="
      flex items-center gap-3 
      px-3 py-2 
      bg-brand-50 
      text-brand-700 
      rounded-lg
    ">
      <LayoutDashboard size={20} />
      Dashboard
    </a>
    
    {/* Inactive item */}
    <a className="
      flex items-center gap-3 
      px-3 py-2 
      text-slate-600 
      hover:bg-slate-50 
      rounded-lg
    ">
      <Users size={20} />
      Contacts
    </a>
  </nav>
</aside>
```

### Top Navigation Bar

```jsx
<header className="
  h-16 
  border-b border-slate-100 
  bg-white 
  px-6 
  flex items-center justify-between
">
  <h1 className="text-xl font-semibold text-slate-900">
    Page Title
  </h1>
  
  <div className="flex items-center gap-4">
    {/* Search, notifications, user menu */}
  </div>
</header>
```

### Stats Card

```jsx
<div className="
  bg-white 
  rounded-xl 
  border border-slate-100 
  p-6
">
  <div className="text-xs text-slate-500 mb-1">
    Metric Label
  </div>
  <div className="text-2xl font-bold text-slate-800">
    24
  </div>
  <div className="text-xs text-green-600 mt-1">
    +12% from last week
  </div>
</div>
```

---

## 🚨 Don'ts - Avoid These

### ❌ Colors to Avoid
- Don't use green, yellow, or purple as primary brand colors
- Don't use pure black (#000000) - use slate-900 instead
- Don't use pure white text on colored backgrounds - reduce opacity
- Don't mix color systems - stick to slate for neutrals

### ❌ Typography Mistakes
- Don't use font sizes smaller than text-xs (12px)
- Don't use more than 3 font weights per page
- Don't use uppercase for body text (ONLY FOR LABELS)
- Don't mix serif and sans-serif in body text

### ❌ Spacing Issues
- Don't use arbitrary values like `p-[17px]` - use the scale
- Don't use inconsistent gaps in similar components
- Don't forget responsive spacing (py-4 sm:py-6)

### ❌ Component Mistakes
- Don't create buttons without hover states
- Don't forget focus states for accessibility
- Don't use shadows heavier than shadow-xl
- Don't create cards without borders (use border-slate-100)

---

## ✅ Checklist for New Pages

Before submitting any new page, verify:

- [ ] Uses slate colors for text/backgrounds (not gray)
- [ ] Uses brand-500 for primary actions
- [ ] Buttons have hover and focus states
- [ ] Cards have subtle borders (border-slate-100)
- [ ] Typography follows the scale (no custom sizes)
- [ ] Spacing uses the 4px scale (gap-4, p-6, etc.)
- [ ] Icons are from lucide-react
- [ ] Shadows are subtle (shadow-sm or shadow-md)
- [ ] Responsive on mobile (test at 375px width)
- [ ] Status colors match the defined palette
- [ ] Transitions are smooth (transition-colors)
- [ ] Selection color is blue-100/blue-900

---

## 🎨 Quick Reference

### Copy-Paste Components

**Primary CTA Button:**
```jsx
<button className="px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-colors">
  Call to Action
</button>
```

**Card:**
```jsx
<div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
  Content
</div>
```

**Badge:**
```jsx
<span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-100">
  Status
</span>
```

**Input:**
```jsx
<input 
  className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
  placeholder="Enter text..."
/>
```

---

## 📚 Resources

- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **Lucide Icons**: https://lucide.dev/icons/
- **Landing Page Reference**: `creator-osx-mvp/app/page.tsx`
- **Component Examples**: `creator-osx-mvp/components/marketing/`

---

**Last Updated**: November 22, 2024  
**Maintained By**: Creator OSX Team  
**Questions?** Reference the landing page components for examples.

---

## 🎯 Remember

> **Consistency is key!** When in doubt, reference the landing page. All colors, spacing, and patterns should feel like they belong to the same product.

**Primary Brand Color**: `bg-brand-500` (#0ea5e9 - Sky Blue)  
**Neutral Colors**: Slate (not Gray)  
**Typography**: Inter (sans) + Playfair Display (serif for headings)  
**Border Radius**: rounded-lg to rounded-2xl  
**Shadows**: Subtle (shadow-sm to shadow-xl)

