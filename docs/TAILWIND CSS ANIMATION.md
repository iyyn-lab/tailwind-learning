## Tailwind CSS v4

# 1. CSS Transitions

## 1.1 What is a CSS Transition?

A CSS transition allows an element to change from one CSS property value to another smoothly over a specified period.

Without a transition, a property change generally happens immediately.

**Example use cases:**
- Button background-color change on hover.
- Card shadow changes.
- Image zoom effects.
- Input border-color changes.
- Sidebar opening and closing.

## 1.2 Main Transition Properties

CSS transitions consist of four main properties.

### A. transition-property

Specifies which CSS property should transition.

```css
.button {
  transition-property: background-color;
}
```

Examples:

```css
transition-property: color;
transition-property: background-color;
transition-property: transform;
transition-property: opacity;
transition-property: all;
```

Tailwind utilities:

```text
transition-colors
transition-transform
transition-opacity
transition-shadow
transition-all
```

### B. transition-duration

Specifies how long the transition takes.

```css
.button {
  transition-property: background-color;
  transition-duration: 500ms;
}
```

Tailwind:

```text
duration-150
duration-300
duration-500
duration-700
```

### C. transition-timing-function

Controls how the transition progresses over time.

```css
.button {
  transition-timing-function: ease-in-out;
}
```

Common values:

| Value | Behavior |
|---|---|
| `linear` | Constant speed |
| `ease` | Starts and ends slowly |
| `ease-in` | Starts slowly |
| `ease-out` | Ends slowly |
| `ease-in-out` | Starts and ends slowly |

Tailwind:

```text
ease-linear
ease-in
ease-out
ease-in-out
ease
```

### D. transition-delay

Specifies how long to wait before starting the transition.

```css
.button {
  transition-delay: 200ms;
}
```

Tailwind:

```text
delay-100
delay-200
delay-300
```

## 1.3 Transition Shorthand

Instead of writing all four properties separately, CSS provides a shorthand.

```css
.button {
  transition: background-color 300ms ease-in-out 100ms;
}
```

Order:

```text
transition: property duration timing-function delay;
```

Tailwind equivalent:

```jsx
<button className="transition-colors duration-300 ease-in-out delay-100">
  Submit
</button>
```

## 1.4 Multiple Property Transitions

You can transition multiple CSS properties together.

CSS:

```css
.card {
  transition:
    transform 300ms ease,
    box-shadow 300ms ease,
    background-color 300ms ease;
}
```

Tailwind:

```jsx
<div className="transition-all duration-300 hover:-translate-y-2 hover:bg-blue-50 hover:shadow-xl">
  Dashboard Card
</div>
```

**Production tip:** Prefer specific transition utilities when possible instead of using `transition-all` unnecessarily.

---

# 2. CSS Transforms

## 2.1 What is a CSS Transform?

CSS transforms modify an element's position, size, rotation or shape without changing the normal document flow.

Transforms are commonly used for animations and interactive effects.

There are five important 2D transform functions.

## 2.2 Translate

Moves an element from its original position.

CSS:

```css
.box {
  transform: translate(20px, 30px);
}
```

- X-axis: Horizontal movement.
- Y-axis: Vertical movement.

Tailwind:

```jsx
<div className="translate-x-5 translate-y-5">
  Translate
</div>
```

Other utilities:

```text
translate-x-5
-translate-x-5
translate-y-5
-translate-y-5
```

## 2.3 Rotate

Rotates an element around its transform origin.

CSS:

```css
.box {
  transform: rotate(45deg);
}
```

Tailwind:

```jsx
<div className="rotate-45">
  Rotate
</div>
```

Common utilities:

```text
rotate-0
rotate-45
rotate-90
rotate-180
-rotate-45
```

## 2.4 Scale

Increases or decreases the size of an element.

CSS:

```css
.box {
  transform: scale(1.2);
}
```

Here, `1.2` means 120% of the original size.

Tailwind:

```jsx
<div className="scale-110">
  Scale
</div>
```

Common utilities:

```text
scale-50
scale-75
scale-100
scale-110
scale-125
```

## 2.5 Skew

Slants an element along the X or Y axis.

CSS:

```css
.box {
  transform: skewX(15deg);
}
```

Tailwind:

```jsx
<div className="skew-x-12">
  Skew
</div>
```

## 2.6 Transform Origin

Specifies the point around which a transformation happens.

CSS:

```css
.box {
  transform-origin: top left;
}
```

Tailwind:

```text
origin-center
origin-top
origin-bottom
origin-left
origin-right
origin-top-left
```

Example:

```jsx
<div className="origin-top-left rotate-45">
  Rotated from top-left
</div>
```

**Production use cases:**
- Zooming product images.
- Moving dashboard cards.
- Rotating menu icons.
- Hovering over buttons.
- Creating dropdown and popup effects.

---

# 3. 2D and 3D Transforms

## 3.1 Difference Between 2D and 3D

| 2D Transform | 3D Transform |
|---|---|
| Works in two dimensions | Works in three dimensions |
| Uses X and Y axes | Uses X, Y and Z axes |
| No depth dimension | Includes depth |
| Common for simple movement and rotation | Common for flipping and 3D effects |

## 3.2 Understanding the Axes

**2D:**

- X-axis: Left and right.
- Y-axis: Up and down.

**3D:**

- X-axis: Rotation around the horizontal axis.
- Y-axis: Rotation around the vertical axis.
- Z-axis: Depth direction.

## 3.3 2D Transform Examples

CSS:

```css
.box {
  transform: translateX(20px);
  transform: rotate(45deg);
  transform: scale(1.2);
}
```

Tailwind:

```jsx
<div className="translate-x-5 rotate-45 scale-110">
  2D Transform
</div>
```

## 3.4 3D Transform Functions

### A. rotateX()

Rotates an element around the X-axis.

```css
.box {
  transform: rotateX(45deg);
}
```

Tailwind:

```text
rotate-x-45
```

### B. rotateY()

Rotates an element around the Y-axis.

```css
.box {
  transform: rotateY(45deg);
}
```

Tailwind:

```text
rotate-y-45
```

### C. rotateZ()

Rotates an element around the Z-axis.

```css
.box {
  transform: rotateZ(45deg);
}
```

Tailwind:

```text
rotate-z-45
```

### D. translateZ()

Moves an element along the Z-axis.

```css
.box {
  transform: translateZ(30px);
}
```

Tailwind:

```text
translate-z-12
```

### E. Perspective

Perspective controls how close or far the 3D object appears to the viewer.

CSS:

```css
.container {
  perspective: 700px;
}
```

Tailwind:

```text
perspective-dramatic
perspective-near
perspective-normal
perspective-midrange
perspective-distant
```

Example:

```jsx
<div className="perspective-distant">
  <div className="size-32 bg-blue-500 transition-transform duration-500 hover:rotate-y-45">
    3D Card
  </div>
</div>
```

**Production use cases:**
- Flip cards.
- 3D product previews.
- Interactive image galleries.
- 3D navigation effects.

---

# 4. CSS Keyframes

## 4.1 What are Keyframes?

Keyframes define different stages of an animation.

They allow an element to move, rotate, change colors, or change opacity automatically.

Unlike transitions, keyframe animations do not require a user to hover or focus an element to start.

## 4.2 Keyframe Structure

CSS:

```css
@keyframes example {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(200px);
  }
}
```

- `from`: Starting point (0%).
- `to`: Ending point (100%).
- Percentage values: Intermediate stages.

Example with multiple stages:

```css
@keyframes example {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(100px);
  }

  100% {
    transform: translateX(200px);
  }
}
```

## 4.3 Built-in Tailwind Animations

Tailwind provides built-in animations:

| Utility | Purpose |
|---|---|
| `animate-spin` | Continuous rotation |
| `animate-ping` | Expanding ping effect |
| `animate-pulse` | Fades between opacity levels |
| `animate-bounce` | Bouncing movement |

Example:

```jsx
<div className="animate-spin">Loading</div>
<div className="animate-pulse">Loading content</div>
<div className="animate-bounce">Scroll down</div>
```

## 4.4 Custom Keyframes in Tailwind v4

You can define custom animations inside `@theme` in `globals.css`.

```css
@theme {
  --animate-wiggle: wiggle 1s ease-in-out infinite;

  @keyframes wiggle {
    0%, 100% {
      transform: rotate(-5deg);
    }

    50% {
      transform: rotate(5deg);
    }
  }
}
```

Use it:

```jsx
<div className="animate-wiggle">
  Custom Animation
</div>
```

**Production use cases:**
- Notification effects.
- Loading indicators.
- Attention-grabbing icons.
- Decorative animations.

---

# 5. Animation Properties

## 5.1 What are Animation Properties?

Animation properties control how an animation runs, including its duration, delay, repetition, direction and final state.

There are eight main CSS animation properties.

## 5.2 animation-name

Specifies which keyframe animation should be applied.

```css
.box {
  animation-name: move;
}
```

## 5.3 animation-duration

Specifies how long one animation cycle takes.

```css
.box {
  animation-duration: 2s;
}
```

Tailwind arbitrary property:

```text
[animation-duration:2s]
```

## 5.4 animation-timing-function

Controls the speed progression of an animation.

```css
.box {
  animation-timing-function: ease-in-out;
}
```

## 5.5 animation-delay

Specifies when the animation starts.

```css
.box {
  animation-delay: 1s;
}
```

## 5.6 animation-iteration-count

Specifies how many times the animation runs.

```css
.box {
  animation-iteration-count: 3;
}
```

You can also use:

```css
animation-iteration-count: infinite;
```

## 5.7 animation-direction

Specifies the direction in which an animation runs.

| Value | Meaning |
|---|---|
| `normal` | Plays from beginning to end |
| `reverse` | Plays from end to beginning |
| `alternate` | Alternates between normal and reverse |
| `alternate-reverse` | Starts in reverse and alternates |

CSS:

```css
.box {
  animation-direction: alternate;
}
```

## 5.8 animation-fill-mode

Controls which styles apply before and after an animation.

| Value | Meaning |
|---|---|
| `none` | No animation styles are retained |
| `forwards` | Retains the final keyframe styles |
| `backwards` | Applies the starting keyframe during the delay |
| `both` | Combines forwards and backwards |

CSS:

```css
.box {
  animation-fill-mode: forwards;
}
```

Tailwind arbitrary property:

```text
[animation-fill-mode:forwards]
```

## 5.9 animation-play-state

Controls whether an animation is running or paused.

CSS:

```css
.box {
  animation-play-state: paused;
}
```

Tailwind arbitrary property:

```text
[animation-play-state:paused]
```

## 5.10 Complete Animation Example

```css
@keyframes move {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(200px);
  }
}

.box {
  animation-name: move;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 500ms;
  animation-iteration-count: 3;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}
```

Equivalent Tailwind custom animation:

```jsx
<div className="animate-[move_2s_ease-in-out_500ms_3_alternate_forwards]">
  Animated Box
</div>
```

The `move` keyframes must be defined in your CSS.

---

# 6. Animation Timing Functions

## 6.1 What are Timing Functions?

Timing functions control how quickly or slowly an animation progresses throughout its duration.

They do not change the total animation duration. They change how the speed varies within that duration.

## 6.2 Main Timing Functions

### A. Linear

Moves at a constant speed from start to finish.

```css
animation-timing-function: linear;
```

Tailwind:

```text
ease-linear
```

### B. Ease

Starts slowly, speeds up and slows down towards the end.

```css
animation-timing-function: ease;
```

Tailwind:

```text
ease
```

### C. Ease-in

Starts slowly and gradually speeds up.

```css
animation-timing-function: ease-in;
```

Tailwind:

```text
ease-in
```

### D. Ease-out

Starts quickly and gradually slows down.

```css
animation-timing-function: ease-out;
```

Tailwind:

```text
ease-out
```

### E. Ease-in-out

Starts slowly, speeds up in the middle and slows down at the end.

```css
animation-timing-function: ease-in-out;
```

Tailwind:

```text
ease-in-out
```

### F. Cubic Bezier

Allows you to create a custom timing curve.

CSS:

```css
animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

Tailwind arbitrary value:

```text
ease-[cubic-bezier(0.4,0,0.2,1)]
```

### Difference Between Timing Functions

| Function | Speed behavior |
|---|---|
| Linear | Constant speed |
| Ease | Slow → Fast → Slow |
| Ease-in | Slow → Fast |
| Ease-out | Fast → Slow |
| Ease-in-out | Slow → Fast → Slow |

**Production use cases:**
- Smooth card movement.
- Natural popup transitions.
- Loading animations.
- Interactive navigation.

---

# 7. Hover and Focus Effects

## 7.1 What are Hover Effects?

Hover effects apply styles when the pointer moves over an element.

CSS:

```css
button:hover {
  background-color: blue;
}
```

Tailwind:

```jsx
<button className="bg-blue-500 hover:bg-blue-700">
  Hover Me
</button>
```

## 7.2 What are Focus Effects?

Focus effects apply styles when an element receives focus.

This commonly happens when a user clicks an input or navigates to it using the keyboard.

CSS:

```css
input:focus {
  border-color: blue;
  outline: none;
}
```

Tailwind:

```jsx
<input className="border focus:border-blue-600 focus:ring-2 focus:ring-blue-200" />
```

## 7.3 Focus-visible

Focus-visible helps provide keyboard-friendly focus indicators.

```jsx
<button className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
  Submit
</button>
```

## 7.4 Active State

Active applies styles while an element is being activated, such as while a button is pressed.

```jsx
<button className="bg-blue-600 active:scale-95">
  Click Me
</button>
```

## 7.5 Group Hover

Allows a child element to respond when its parent is hovered.

```jsx
<div className="group rounded-lg p-5 hover:bg-blue-50">
  <h2 className="group-hover:text-blue-600">
    Dashboard Card
  </h2>
</div>
```

## 7.6 Other Useful State Variants

| Variant | Purpose |
|---|---|
| `hover:` | Pointer hover |
| `focus:` | Focus state |
| `focus-visible:` | Visible focus indication |
| `active:` | Active or pressed state |
| `disabled:` | Disabled state |
| `group-hover:` | Parent hover affects child |
| `peer-checked:` | Sibling responds to a checked peer |

**Production use cases:**
- Form input focus.
- Button interactions.
- Dropdown menus.
- Navigation links.
- Cards and interactive components.

---

# 8. Loading Animations

## 8.1 What are Loading Animations?

Loading animations provide visual feedback while an application is processing a request or fetching information.

They help users understand that an operation is in progress.

## 8.2 Spinner Loader

A rotating circular indicator.

```jsx
<div className="size-10 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin" />
```

Commonly used for API requests and form submissions.

## 8.3 Loading Dots

Three dots move to indicate activity.

```jsx
<div className="flex gap-2">
  <span className="size-3 rounded-full bg-blue-600 animate-bounce" />
  <span className="size-3 rounded-full bg-blue-600 animate-bounce [animation-delay:150ms]" />
  <span className="size-3 rounded-full bg-blue-600 animate-bounce [animation-delay:300ms]" />
</div>
```

## 8.4 Skeleton Loader

A placeholder that represents content before actual data loads.

```jsx
<div className="animate-pulse space-y-3">
  <div className="h-4 w-48 rounded bg-gray-300" />
  <div className="h-4 w-32 rounded bg-gray-300" />
  <div className="h-20 w-full rounded bg-gray-300" />
</div>
```

## 8.5 Progress Bar

Shows how much of an operation has been completed.

```jsx
<div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
  <div className="h-full w-1/2 rounded-full bg-blue-600 transition-all duration-500" />
</div>
```

This is a static 50% example. In production, the width should be connected to actual progress.

## 8.6 Production Considerations

- Connect loading indicators to real application state.
- Prevent duplicate submissions when a request is in progress.
- Provide accessible status text.
- Avoid indefinite loading indicators when a request has failed.
- Use skeletons for content-heavy pages where appropriate.

---

# 9. Micro-interactions

## 9.1 What are Micro-interactions?

Micro-interactions are small visual or functional responses to user actions.

They improve the usability and feedback of an application.

Examples:
- Button press feedback.
- Like and favorite animations.
- Add-to-cart feedback.
- Copy confirmation.
- Form validation feedback.
- Notification badges.

## 9.2 Button Interaction

```jsx
<button className="rounded-lg bg-blue-600 px-5 py-3 text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg active:scale-95">
  Submit
</button>
```

Behavior:
- Hover: Button moves slightly upward.
- Shadow: Shadow becomes stronger.
- Active: Button becomes slightly smaller when pressed.

## 9.3 Card Interaction

```jsx
<div className="rounded-xl bg-white p-6 shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
  Reservation Details
</div>
```

## 9.4 Favorite Interaction

```jsx
<button className="group">
  <span className="inline-block transition-transform group-hover:scale-125 group-hover:text-red-500">
    ♥
  </span>
  Add to Favorites
</button>
```

This demonstrates visual feedback. Actual favorite functionality requires application state and a click handler.

## 9.5 Copy Button Feedback

A production copy button can show a temporary "Copied!" label after successfully copying text.

The interaction requires JavaScript functionality in addition to CSS styling.

## 9.6 Micro-interaction Best Practices

- Keep effects subtle.
- Give immediate feedback.
- Avoid unnecessary movement.
- Maintain consistent interaction styles.
- Make keyboard interactions accessible.
- Use animations to communicate meaningful changes, not just decoration.

---

# 10. Important Differences to Remember

| Concept | Main purpose |
|---|---|
| Transition | Smoothly changes between CSS states |
| Transform | Changes position, size, rotation or shape |
| 2D Transform | Works with X and Y dimensions |
| 3D Transform | Adds depth through the Z dimension |
| Keyframes | Define animation stages |
| Animation Properties | Control animation behavior |
| Timing Functions | Control speed progression |
| Hover | Responds to pointer hover |
| Focus | Responds to element focus |
| Loading Animation | Indicates processing |
| Micro-interaction | Gives feedback for user actions |

# 11. Production Best Practices

1. Prefer `transform` and `opacity` for many animated effects.
2. Avoid unnecessary `transition-all`.
3. Use meaningful animation durations.
4. Preserve keyboard focus indicators.
5. Respect reduced-motion preferences.
6. Avoid animating too many elements simultaneously.
7. Connect loading animations to real loading states.
8. Use accessible labels for meaningful status indicators.

Example:

```jsx
<div className="motion-safe:animate-bounce">
  Animated Content
</div>
```

`motion-safe:` applies the animation when the user has not requested reduced motion.

# 12. Official Documentation

- [Tailwind CSS Transitions](https://tailwindcss.com/docs/transition-property)
- [Tailwind CSS Transform](https://tailwindcss.com/docs/transform)
- [Tailwind CSS Rotate](https://tailwindcss.com/docs/rotate)
- [Tailwind CSS Perspective](https://tailwindcss.com/docs/perspective)
- [Tailwind CSS Animation](https://tailwindcss.com/docs/animation)
- [Tailwind CSS Theme Variables](https://tailwindcss.com/docs/theme)
- [Tailwind CSS Hover and Focus States](https://tailwindcss.com/docs/hover-focus-and-other-states)
- [MDN CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions)
- [MDN CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transforms)
- [MDN CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)

 