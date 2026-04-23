# Prixma — Component Library Docs

> A beautifully crafted, accessible UI component library built directly from your Figma design system. Purple-forward, token-driven, and drop-in ready.

Built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

🔗 Figma source: [Form Primitives](https://www.figma.com/design/4THILk0BZ2HLgL2dBU7uBJ/Form-Primitives)

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

## 📦 Project Structure

```
src/
└── app/
    ├── layout.tsx              # Root layout + metadata
    ├── page.tsx                # Main docs page
    ├── page.module.css         # Page-level styles
    ├── globals.css             # Design tokens + resets
    └── components/
        └── ui/
            ├── Button.tsx      # Button component
            ├── Button.module.css
            ├── Header.tsx      # Top navigation bar
            ├── Header.module.css
            ├── Sidebar.tsx     # Left nav sidebar
            ├── Sidebar.module.css
            ├── DemoBox.tsx     # Live demo + code tabs
            ├── DemoBox.module.css
            ├── CodeBlock.tsx   # Syntax block with copy
            └── CodeBlock.module.css
```

## 🎨 Design Tokens

All design values live in `src/app/globals.css` as CSS custom properties:

```css
--purple-500: #6037d3;      /* Primary brand */
--surface-elevated: #f8f7fa;
--border-default: #dad9df;
--radius-m: 12px;
```

## ✏️ Adding a New Component

1. Create `src/app/components/ui/MyComponent.tsx`
2. Create `src/app/components/ui/MyComponent.module.css`
3. Add a `<section id="my-component">` in `page.tsx`
4. Add the nav entry in `Sidebar.tsx`
5. Add a TOC entry in `page.tsx`

## 🌐 Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```

## 📄 License

MIT — made with ❤️ by Prixma
