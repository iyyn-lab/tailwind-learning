# Tailwind CSS Learning Notes -- Continued Topics

## Responsive Design, Core Utilities, Theme Tokens, and Reusable Component Styling

**Learning focus:** Production-oriented Tailwind CSS v4 with Next.js App
Router\
**Scope:** Additional topics studied after the initial Tailwind CSS
fundamentals notes. Interview questions and the mini inventory dashboard
implementation are intentionally excluded.

## Contents

1.  CSS variables: `:root` vs `@theme`
2.  Custom theme tokens in Tailwind CSS v4
3.  Core utility classes -- quick reference
4.  Flexbox vs CSS Grid
5.  Responsive design
6.  Reusable components: React/Next.js concepts and Tailwind's role
7.  Production-oriented takeaways
8.  Learning progress

------------------------------------------------------------------------

## 1. CSS variables: `:root` vs `@theme`

CSS variables (custom properties) let us define values once and reuse
them throughout a stylesheet.

### 1.1 Ordinary CSS variables with `:root`

``` css
:root {
  --app-background: #f8fafc;
  --app-text: #1e293b;
}
```

Use an ordinary CSS variable with `var()`:

``` css
.page {
  background-color: var(--app-background);
  color: var(--app-text);
}
```

`:root` is a CSS pseudo-class selector that targets the document's root
element. It is commonly used for globally available CSS custom
properties.

### 1.2 Tailwind theme variables with `@theme`

``` css
@import "tailwindcss";

@theme {
  --color-primary: #2563eb;
  --color-secondary: #16a34a;
}
```

Recognized Tailwind theme namespaces allow Tailwind to generate
corresponding utility classes.

``` tsx
<div className="bg-primary text-white">
  Welcome
</div>
```

### 1.3 Key difference

  -----------------------------------------------------------------------
  Feature                 `:root`                 `@theme`
  ----------------------- ----------------------- -----------------------
  What it is              CSS pseudo-class        Tailwind CSS at-rule
                          selector                

  Main purpose            Declare normal CSS      Declare Tailwind theme
                          custom properties       tokens

  How to use values       Usually with `var()`    Generated Tailwind
                                                  utilities and/or CSS
                                                  variables

  Generates Tailwind      No, not by itself       Yes, for recognized
  utilities                                       theme namespaces

  Can both be used        Yes                     Yes
  together?                                       
  -----------------------------------------------------------------------

Example using both in `globals.css`:

``` css
@import "tailwindcss";

:root {
  --app-background: #f8fafc;
}

@theme {
  --color-primary: #2563eb;
}
```

``` tsx
<main className="bg-[var(--app-background)]">
  <h1 className="text-primary">Welcome</h1>
</main>
```

**Remember:** Use `:root` for general CSS variables. Use `@theme` when a
value should participate in Tailwind's theme system and generate
utilities or variants.

------------------------------------------------------------------------

## 2. Custom theme tokens in Tailwind CSS v4

Tailwind v4 uses CSS-first configuration. Theme tokens are declared
inside `@theme` in the global stylesheet.

### 2.1 Understanding a theme variable

``` css
@theme {
  --color-primary: #2563eb;
}
```

  Part         Meaning
  ------------ --------------------------------------------
  `--color-`   Theme namespace; identifies the token type
  `primary`    Custom token name
  `#2563eb`    Actual color value

The complete CSS custom property name is `--color-primary`.

### 2.2 Custom colors

Use the `--color-*` namespace.

``` css
@theme {
  --color-primary: #2563eb;
  --color-secondary: #16a34a;
  --color-danger: #dc2626;
  --color-brand: #9333ea;
}
```

Example utilities:

``` tsx
<div className="bg-primary text-white">Primary background</div>
<p className="text-secondary">Secondary text</p>
<div className="border border-danger">Error panel</div>
```

Common patterns include `bg-primary`, `text-primary`, `border-primary`,
and `ring-primary`.

### 2.3 Custom fonts

Use the `--font-*` namespace.

``` css
@theme {
  --font-display: "Inter", sans-serif;
  --font-heading: "Poppins", sans-serif;
}
```

Usage:

``` tsx
<h1 className="font-heading text-3xl">Welcome</h1>
<p className="font-display">Application description</p>
```

**Important:** Defining a font token does not download or load the font.
The font must be made available to the browser. In Next.js, `next/font`
is a suitable production option.

### 2.4 Custom spacing

Tailwind provides spacing utilities such as:

  Class     Purpose
  --------- -----------------------------
  `p-4`     Padding on all sides
  `px-4`    Horizontal padding
  `py-4`    Vertical padding
  `m-4`     Margin on all sides
  `mt-4`    Top margin
  `gap-4`   Gap between flex/grid items

The base spacing scale can be customized using `--spacing`:

``` css
@theme {
  --spacing: 4px;
}
```

With this scale, `p-5` corresponds to `20px` (5 × 4px), and `mt-4`
corresponds to `16px`.

**Production note:** Changing the base spacing variable affects the
spacing scale globally. Avoid changing it casually in an existing
application. Use arbitrary values for isolated one-off requirements, for
example `p-[18px]`.

### 2.5 Custom breakpoints

Use the `--breakpoint-*` namespace.

``` css
@theme {
  --breakpoint-3xl: 120rem;
}
```

Usage:

``` tsx
<div className="bg-blue-500 3xl:bg-purple-500">
  Responsive content
</div>
```

The `3xl:` variant applies at the configured breakpoint and above.

------------------------------------------------------------------------

## 3. Core utility classes -- quick reference

The purpose of this section is to recognize commonly used utility names
and understand what they control. Memorizing every available utility is
not necessary; focus on selecting the right utility for the layout
requirement.

### 3.1 Sizing

  Utility          Purpose
  ---------------- ---------------------------------------------------
  `w-full`         Full width of the containing block
  `w-1/2`          Half width
  `w-screen`       Viewport width
  `max-w-7xl`      Maximum width
  `h-full`         Full height of the containing block
  `h-screen`       Viewport height
  `min-h-screen`   At least viewport height
  `flex-1`         Allow a flex item to grow and use available space
  `shrink-0`       Prevent a flex item from shrinking

### 3.2 Display and positioning

  Utility          Purpose
  ---------------- ----------------------------
  `block`          Block display
  `inline`         Inline display
  `inline-block`   Inline-level block display
  `hidden`         Hide an element
  `flex`           Enable Flexbox
  `grid`           Enable CSS Grid
  `relative`       Relative positioning
  `absolute`       Absolute positioning
  `fixed`          Fixed positioning
  `sticky`         Sticky positioning

### 3.3 Typography, borders, and shadows

  Utility             Purpose
  ------------------- ---------------------
  `text-xl`           Text size
  `font-bold`         Bold font weight
  `text-center`       Center-align text
  `leading-relaxed`   Relaxed line height
  `border`            Add a border
  `rounded-lg`        Large border radius
  `shadow-md`         Medium shadow
  `shadow-lg`         Large shadow

------------------------------------------------------------------------

## 4. Flexbox vs CSS Grid

Flexbox and Grid are layout systems. Tailwind provides utility classes
that apply their CSS properties.

### 4.1 Flexbox

Flexbox is mainly used for one-dimensional layouts: arranging items in a
row or a column.

  Class               Purpose
  ------------------- ---------------------------------------
  `flex`              Enable Flexbox
  `flex-row`          Arrange items horizontally
  `flex-col`          Arrange items vertically
  `flex-wrap`         Allow items to wrap onto another line
  `flex-1`            Allow an item to grow
  `items-center`      Align items along the cross axis
  `justify-center`    Align items along the main axis
  `justify-between`   Distribute space between items
  `gap-4`             Add space between items

Example -- navigation bar:

``` tsx
<nav className="flex items-center justify-between gap-4">
  <h1 className="text-xl font-bold">My App</h1>
  <div className="flex items-center gap-6">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </div>
</nav>
```

### 4.2 CSS Grid

Grid is mainly used for two-dimensional layouts: arranging content in
rows and columns.

  Class           Purpose
  --------------- -------------------------------
  `grid`          Enable CSS Grid
  `grid-cols-2`   Define two columns
  `grid-cols-3`   Define three columns
  `grid-cols-4`   Define four columns
  `grid-rows-2`   Define two rows
  `col-span-2`    Make an item span two columns
  `gap-4`         Add space between grid items

Example -- product cards:

``` tsx
<div className="grid grid-cols-3 gap-6">
  <article>Product 1</article>
  <article>Product 2</article>
  <article>Product 3</article>
</div>
```

### 4.3 Flexbox vs Grid -- key differences

  -----------------------------------------------------------------------
  Feature                 Flexbox (`flex`)        Grid (`grid`)
  ----------------------- ----------------------- -----------------------
  Dimensionality          One-dimensional: row or Two-dimensional: rows
                          column                  and columns

  Design approach         Content-first; items    Layout-first; define a
                          are arranged along one  track structure and
                          axis                    place items in it

  Core utility classes    `flex`, `flex-row`,     `grid`, `grid-cols-3`,
                          `flex-col`,             `grid-rows-2`,
                          `flex-wrap`, `flex-1`   `col-span-2`

  Wrapping behavior       Wrapped items form      Items are placed in the
                          another flex line       grid's row and column
                                                  tracks

  Common use cases        Navigation bars, button Page layouts, card
                          groups, form rows,      galleries, dashboards,
                          aligning items          multi-column sections
  -----------------------------------------------------------------------

### 4.4 When should we use each?

-   Use **Flexbox** when arranging or aligning items in one direction,
    such as a navbar, button group, or content row.
-   Use **Grid** when building a layout with rows and columns, such as a
    dashboard, product gallery, or card listing.
-   Combining Flexbox and Grid is common in production applications.

------------------------------------------------------------------------

## 5. Responsive design

### 5.1 What is responsive design?

Responsive design means creating an application whose layout and
appearance adapt to different viewport sizes and devices.

Example design ranges (illustrative, not Tailwind's exact breakpoint
definitions):

-   Mobile: approximately 320px--767px
-   Tablet: approximately 768px--1023px
-   Desktop: approximately 1024px and above

### 5.2 Tailwind's default responsive breakpoints

Tailwind uses a mobile-first approach. The default breakpoint prefixes
are minimum-width breakpoints.

  Prefix              Default minimum width
  ----------- -----------------------------
  No prefix     Applies at all screen sizes
  `sm:`                               640px
  `md:`                               768px
  `lg:`                              1024px
  `xl:`                              1280px
  `2xl:`                             1536px

### 5.3 Mobile-first approach

Write default utility classes for smaller screens first. Add
breakpoint-prefixed utilities to change styles at larger viewport
widths.

``` tsx
<div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-4
">
  <div>Product 1</div>
  <div>Product 2</div>
  <div>Product 3</div>
</div>
```

Result:

-   Below `sm`: one column.
-   At `sm` and above: two columns.
-   At `lg` and above: three columns.

A breakpoint-prefixed utility applies at that breakpoint and above
unless another later breakpoint utility overrides it.

### 5.4 Common responsive patterns

  -----------------------------------------------------------------------
  Class pattern                       Purpose
  ----------------------------------- -----------------------------------
  `hidden md:block`                   Hide by default; display as block
                                      from `md` and above

  `w-full md:w-1/2`                   Full width by default; half width
                                      from `md` and above

  `flex-col md:flex-row`              Column by default; row from `md`
                                      and above

  `text-sm md:text-xl`                Change text size at `md` and above

  `grid-cols-1 lg:grid-cols-3`        One column by default; three
                                      columns from `lg` and above
  -----------------------------------------------------------------------

### 5.5 Responsive design checklist

-   Start with the smallest supported viewport.
-   Add breakpoint variants only where the layout needs to change.
-   Check navigation, content width, tables, cards, and forms at narrow
    widths.
-   Avoid fixed widths when a fluid width or max-width is more suitable.
-   Test the actual page at multiple viewport sizes; responsive behavior
    should be verified, not assumed.

------------------------------------------------------------------------

## 6. Reusable components: React/Next.js concepts and Tailwind's role

Reusable component architecture is primarily a **React and Next.js
concept**, not a Tailwind-specific feature. Tailwind is used to style
those components.

  -----------------------------------------------------------------------
  Concept                             Main area
  ----------------------------------- -----------------------------------
  Reusable components                 React / Next.js

  Props and `children`                React

  Component composition               React

  Component organization              React / Next.js

  Tailwind utility classes            Tailwind CSS

  Theme tokens and responsive         Tailwind CSS
  variants                            

  Consistent styling across           React / Next.js + Tailwind CSS
  components                          
  -----------------------------------------------------------------------

### 6.1 What is a reusable component?

A reusable component is a UI element created once and used in multiple
places. Examples include buttons, cards, inputs, badges, navigation
elements, and tables.

Instead of repeating the same markup and styling on several pages,
create a component and pass the content or configuration it needs.

### 6.2 A reusable button

``` tsx
type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-lg bg-blue-600 px-5 py-2 text-white">
      {children}
    </button>
  );
}
```

Usage:

``` tsx
<Button>Save</Button>
<Button>Submit</Button>
<Button>Update</Button>
```

React provides the component and `children` API. Tailwind utility
classes define the button's appearance.

### 6.3 Props and variants

Props allow a component's caller to provide values that change its
content or behavior. A variant prop can select among predefined visual
styles.

``` tsx
type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

const styles = {
  primary: "bg-blue-600 hover:bg-blue-700",
  secondary: "bg-gray-600 hover:bg-gray-700",
  danger: "bg-red-600 hover:bg-red-700",
};

export default function Button({
  children,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg px-5 py-2 text-white ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
```

Usage:

``` tsx
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete</Button>
<Button disabled>Submit</Button>
```

This demonstrates one component with multiple styling variants.

### 6.4 Component composition and `children`

Component composition means building a larger UI by combining smaller
components.

For example, a product card may contain a product image, product
details, product price, and an add-to-cart button. The parent component
can compose these pieces rather than keeping all UI logic in one large
component.

The `children` prop allows nested content to be rendered inside a
component:

``` tsx
type CardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function Card({
  title,
  description,
  children,
}: CardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      {children}
    </div>
  );
}
```

Usage:

``` tsx
<Card
  title="Inventory"
  description="Manage your products and stock."
>
  <Button>View Products</Button>
</Card>
```

### 6.5 The `className` prop

A reusable component can accept an optional `className` prop so its
caller can add layout-specific styling.

``` tsx
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div className={`rounded-xl border p-5 ${className}`}>
      {children}
    </div>
  );
}
```

Usage:

``` tsx
<Card className="max-w-md bg-blue-50">
  Dashboard content
</Card>
```

For larger projects, `clsx` can help build conditional class strings,
while `tailwind-merge` can help resolve conflicting Tailwind utility
classes. Use them when they solve a real project need; they are not
required for every component.

### 6.6 What makes a reusable component maintainable?

-   Give each component a clear responsibility.
-   Use props for data and configuration rather than duplicating markup.
-   Use variants for supported visual differences.
-   Use `children` when the component should accept nested content.
-   Keep shared UI components separate from feature-specific components
    when that improves organization.
-   Keep class names statically detectable by Tailwind. Avoid
    constructing partial class names dynamically; map complete class
    strings to variants instead.

**Key clarification:** Reusable components are not a new Tailwind
feature. They are a React/Next.js development pattern that gives
Tailwind styles a consistent place to live and be reused.

------------------------------------------------------------------------

## 7. Production-oriented takeaways

1.  Understand the layout requirement before choosing Flexbox or Grid.
2.  Use mobile-first responsive classes and verify layouts at real
    viewport sizes.
3.  Centralize shared design tokens in `@theme` when they should
    generate Tailwind utilities.
4.  Use `:root` for ordinary CSS custom properties that do not need to
    become Tailwind theme tokens.
5.  Avoid changing global design scales, such as `--spacing`, without
    checking the impact across the application.
6.  Build reusable React components around clear responsibilities and
    APIs.
7.  Use Tailwind classes inside those components to keep visual styling
    consistent.
8.  Learn common utility patterns and how to find the right utility;
    memorizing every class is unnecessary.

------------------------------------------------------------------------

## 8. Learning progress

### Covered in this learning session

-   [x] CSS variables and the purpose of `:root`
-   [x] Difference between `:root` and Tailwind v4 `@theme`
-   [x] Theme namespaces and custom token names
-   [x] Custom colors
-   [x] Custom fonts and the need to load the font separately
-   [x] Custom spacing scale
-   [x] Custom breakpoints
-   [x] Core utility class quick reference
-   [x] Flexbox utilities and use cases
-   [x] Grid utilities and use cases
-   [x] Flexbox vs Grid comparison
-   [x] Responsive design fundamentals
-   [x] Tailwind's mobile-first responsive breakpoints
-   [x] Responsive utility patterns
-   [x] Reusable components as a React/Next.js concept
-   [x] Props, variants, `children`, composition, and `className`
-   [x] How Tailwind CSS is used to style reusable components

### Deliberately not included

-   Interview questions and answers
-   Mini inventory dashboard implementation
-   Advanced styling and animation topics assigned for separate study

------------------------------------------------------------------------

## References

-   Tailwind CSS documentation: https://tailwindcss.com/docs
-   Tailwind CSS theme variables: https://tailwindcss.com/docs/theme
-   Tailwind CSS responsive design:
    https://tailwindcss.com/docs/responsive-design
-   Tailwind CSS upgrade guide:
    https://tailwindcss.com/docs/upgrade-guide
-   Next.js documentation: https://nextjs.org/docs

> Check the documentation for the exact Tailwind CSS version installed
> in the project, especially when working with configuration or
> migration behavior.
