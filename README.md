# Prixma Beta

An open-source React component library with a built-in design system. Copy, install, and ship.

> **Beta release** — components are stable and actively used in production. More components ship frequently.

[![npm version](https://img.shields.io/npm/v/prixma-beta?color=6037d3&label=prixma-beta)](https://www.npmjs.com/package/prixma-beta)
[![npm downloads](https://img.shields.io/npm/dm/prixma-beta?color=6037d3)](https://www.npmjs.com/package/prixma-beta)
[![bundle size](https://img.shields.io/bundlephobia/minzip/prixma-beta?color=6037d3)](https://bundlephobia.com/package/prixma-beta)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6?logo=typescript&logoColor=white)](https://www.npmjs.com/package/prixma-beta)
[![React](https://img.shields.io/badge/React-18%2B-61dafb?logo=react&logoColor=white)](https://www.npmjs.com/package/prixma-beta)
[![license](https://img.shields.io/npm/l/prixma-beta?color=green)](https://www.npmjs.com/package/prixma-beta)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://www.npmjs.com/package/prixma-beta)

---

## Installation

```bash
npm install prixma-beta
```

---

## Setup

Import the stylesheet once at the root of your app (e.g. `layout.tsx` in Next.js or `main.tsx` in Vite):

```tsx
import 'prixma-beta/dist/index.css';
```

---

## Components

### Button

```tsx
import { Button } from 'prixma-beta';

<Button variant="primary" size="md">Get started</Button>
<Button variant="secondary" size="md">Learn more</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'danger'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Height and padding |
| `disabled` | `boolean` | `false` | Disables the button |

---

### Input

Three label variants — Top, Floating, and Inline.

```tsx
import { Input } from 'prixma-beta';

// Top label (default)
<Input label="Work email" placeholder="you@example.com" hint="We'll use this to send updates." />

// Floating label — animates to the top border on focus/fill
<Input variant="floating" label="Password" type="password" />

// Inline label — small label stacked inside the field
<Input variant="inline" label="Account ID" placeholder="ABCDE12345" />

// States
<Input label="Email" error="Enter a valid email address." />
<Input label="Email" success defaultValue="valid@email.com" />
<Input label="Email" disabled />
<Input label="Email" required />
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'top' \| 'floating' \| 'inline'` | `'top'` | Label style |
| `label` | `string` | — | Label text |
| `placeholder` | `string` | — | Placeholder text |
| `hint` | `string` | — | Helper text below the field |
| `error` | `string` | — | Error message; applies red border |
| `success` | `boolean` | `false` | Applies green border |
| `required` | `boolean` | `false` | Appends * to the label |
| `optional` | `boolean` | `false` | Appends (optional) to the label |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Field height — 32 / 40 / 48px |
| `leadingIcon` | `ReactNode` | — | Icon inside the field, left side |
| `trailingIcon` | `ReactNode` | — | Icon inside the field, right side |
| `disabled` | `boolean` | `false` | Disables the field |

---

### Checkbox

```tsx
import { Checkbox } from 'prixma-beta';

<Checkbox label="I agree to the terms" />
<Checkbox label="Subscribe to updates" defaultChecked />
<Checkbox label="Disabled option" disabled />
```

---

### Switch

```tsx
import { Switch } from 'prixma-beta';

<Switch label="Enable notifications" />
<Switch label="Dark mode" defaultChecked />
<Switch label="Disabled" disabled />
```

---

### Toggle

```tsx
import { Toggle } from 'prixma-beta';

<Toggle options={['Monthly', 'Annual']} defaultIndex={0} onChange={(i) => console.log(i)} />
```

---

### Chip

```tsx
import { Chip } from 'prixma-beta';

<Chip>Default</Chip>
<Chip variant="success">Active</Chip>
<Chip variant="error">Failed</Chip>
<Chip variant="warning">Pending</Chip>
```

---

### Stepper

```tsx
import { Stepper } from 'prixma-beta';

const steps = [
  { title: 'Account',  subheader: 'Your profile details', status: 'completed' },
  { title: 'Payment',  subheader: 'Billing information',  status: 'active' },
  { title: 'Review',   subheader: 'Final confirmation',   status: 'default' },
];

// Horizontal (default)
<Stepper steps={steps} variant="number" size="md" />

// Vertical
<Stepper steps={steps} orientation="vertical" variant="dot" size="sm" />
```

**Props**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `Step[]` | `[]` | Array of step objects |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Indicator size |
| `variant` | `'number' \| 'dot'` | `'number'` | Indicator style |

---

## Usage with Next.js

```tsx
// app/layout.tsx
import 'prixma-beta/dist/index.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx
'use client';
import { Button, Input } from 'prixma-beta';

export default function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Input label="Work email" placeholder="you@example.com" required />
      <Button variant="primary">Continue</Button>
    </div>
  );
}
```

---

## Usage with Vite / Create React App

```tsx
// src/main.tsx
import 'prixma-beta/dist/index.css';
```

```tsx
// src/App.tsx
import { Button, Input } from 'prixma-beta';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Input label="Work email" placeholder="you@example.com" required />
      <Button variant="primary">Continue</Button>
    </div>
  );
}
```

---

## TypeScript

All components are fully typed. No separate `@types/prixma-beta` package needed.

---

## Peer Dependencies

Requires React 18 or later:

```bash
npm install react react-dom
```

---

## Roadmap

- [x] Button
- [x] Input (Top / Floating / Inline)
- [x] Checkbox
- [x] Switch
- [x] Toggle
- [x] Chip
- [x] Stepper
- [x] Select / Dropdown
- [ ] Modal / Dialog
- [ ] Toast / Notification
- [ ] Table
- [ ] Card
- [ ] Progress Bar
- [ ] Date Picker

---

## License

MIT
