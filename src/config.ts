// ─────────────────────────────────────────────────────────────
//  Single source of truth for the library.
//  Change PACKAGE_NAME here → every code snippet, playground,
//  install command, and import on the docs site updates automatically.
// ─────────────────────────────────────────────────────────────

export const PACKAGE_NAME = 'prixma-beta';

// CSS import path users paste into their root layout
export const CSS_IMPORT = `${PACKAGE_NAME}/dist/index.css`;

// Helpers used in code snippet templates
export const pkgImport = (component: string) =>
  `import { ${component} } from '${PACKAGE_NAME}';`;

export const pkgImportMulti = (...components: string[]) =>
  `import { ${components.join(', ')} } from '${PACKAGE_NAME}';`;

/*
Example 
npm version patch --no-git-tag-version
npm run build:lib
npm publish --access=public
*/
// Install commands
export const INSTALL_COMMANDS = {
  npm:  `npm install ${PACKAGE_NAME}`,
  yarn: `yarn add ${PACKAGE_NAME}`,
  pnpm: `pnpm add ${PACKAGE_NAME}`,
};

// All components shipped in the library.
// Add a new entry here when a new component is built —
// it will automatically appear in the sidebar and routing.
export const COMPONENTS = [
  { slug: 'button',   label: 'Button' },
  { slug: 'input',    label: 'Input Fields' },
  { slug: 'stepper',  label: 'Stepper' },
  { slug: 'chip',     label: 'Chips' },
  { slug: 'uploader', label: 'Uploader' },
  { slug: 'progress', label: 'Progress Bar' },
  { slug: 'switch',   label: 'Switch' },
  { slug: 'select',   label: 'Select' },
  { slug: 'toggle',   label: 'Toggle' },
  { slug: 'checkbox', label: 'Checkbox' },
] as const;

export type ComponentSlug = typeof COMPONENTS[number]['slug'];
