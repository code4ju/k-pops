# Extracting Tailwind Classes into Reusable Components

## 1. Common UI Patterns

After reviewing the codebase, several repetitive Tailwind patterns emerged:

### Button Styles
- Multiple button implementations with similar styles
- Repetitive classes: `text-3xl border-0 px-6 py-4 mt-5 md:mt-0 rounded-lg tracking-wide md:text-base bg-neutral-900 text-white`

### Form Input Fields
- Identical styling across input fields
- Repetitive classes: `border focus:ring-0 focus:outline-none focus:border-neutral-900 border-gray-300 rounded-md p-5`

### Container Layouts
- Similar container patterns for page layouts
- Repetitive classes: `md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl`

### Typography Patterns
- Consistent heading styles
- Repetitive responsive text scaling: `text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl`

### Flex Layouts
- Common flex patterns across components
- Repetitive classes: `flex flex-col gap-X` or `md:flex md:flex-row md:gap-X`

## 2. Extraction Strategy

### Create a UI Component Library

1. **Create base components**:
   - Extract common patterns into standalone components
   - Use props for variations
   - Consider using Tailwind's `@apply` directive for component styles

2. **Implement Composition Pattern**:
   - Design components to be composable
   - Allow for extending styles via className props

3. **Use a consistent naming convention**:
   - Follow a pattern like `Base + Variant`
   - Example: `Button`, `ButtonPrimary`, `ButtonOutline`

## 3. Implementation Examples

### Button Component

#### Before:
```tsx
// In navbar.tsx
<button
  className="text-3xl border-0 px-6 py-4 mt-5 md:mt-0 rounded-lg tracking-wide md:text-base bg-neutral-900 text-white"
  onClick={handleClick}>
  SCHEDULE A CALL
</button>

// In slider.tsx
<button
  onClick={() => {
    setPage((prevpage) => {
      if (prevpage === 1) {
        return 4;
      }
      return prevpage - 1;
    });
  }}
  className="text-4xl bg-neutral-900 text-white rounded-lg px-10 py-1">
  1
</button>
```

#### After:
```tsx
// src/components/ui/Button.tsx
import React from 'react';
import clsx from 'clsx';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}) => {
  const baseStyles = "border-0 rounded-lg tracking-wide";
  
  const variantStyles = {
    primary: "bg-neutral-900 text-white",
    secondary: "bg-yellow-600 text-blue-600",
    danger: "bg-red-600 text-white",
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-4 md:text-base text-3xl",
    lg: "px-8 py-5 text-4xl",
  };
  
  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

// Usage in Navbar.tsx
import { Button } from '../components/ui/Button';

// Inside component:
<Button variant="primary" size="md" onClick={handleClick}>
  SCHEDULE A CALL
</Button>
```

### Input Field Component

#### Before:
```tsx
// In input.tsx
<input
  type="text"
  name="name"
  placeholder="Your Name"
  className="border focus:ring-0 focus:outline-none focus:border-neutral-900 border-gray-300 rounded-md p-5"
/>
<input
  type="email"
  name="mail"
  placeholder="Your email"
  className="border focus:ring-0 focus:outline-none focus:border-neutral-900 border-gray-300 rounded-md p-5"
/>
```

#### After:
```tsx
// src/components/ui/Input.tsx
import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  return (
    <input
      className={clsx(
        "border focus:ring-0 focus:outline-none focus:border-neutral-900 border-gray-300 rounded-md p-5",
        className
      )}
      {...rest}
    />
  );
};

// Usage in forms
import { Input } from '../components/ui/Input';

// Inside component:
<Input 
  type="text"
  name="name"
  placeholder="Your Name"
/>
```

## 4. Benefits of This Approach

### 1. Improved Maintainability
- **Centralized Styling**: Changes to component styles only need to be made in one place
- **Consistency**: Ensures UI elements look and behave consistently across the application
- **Easier Refactoring**: Makes large-scale style changes more manageable

### 2. Enhanced Developer Experience
- **Reduced Boilerplate**: Shorter, more readable JSX with less repetitive classes
- **Self-Documenting Code**: Component props clearly communicate available options
- **Faster Development**: Simplifies the process of adding new UI elements

### 3. Better Performance
- **Smaller CSS Bundle**: Reduces duplication in the final CSS output
- **Optimized Rendering**: Properly componentized UI can lead to better React rendering performance

### 4. Scalability
- **Design System Foundation**: Creates the building blocks for a comprehensive design system
- **Easier Onboarding**: New team members can quickly understand and use existing components
- **Future-proofing**: Makes it easier to adapt to design changes or implement new features

## 5. Implementation Strategy

1. **Start with high-frequency components**:
   - Begin by extracting the most commonly used UI elements (buttons, inputs, containers)
   - Focus on elements with the most repetitive Tailwind classes

2. **Create a component hierarchy**:
   - Base components → Composite components → Page templates
   - Allow for composition and customization at each level

3. **Document components**:
   - Add JSDoc comments to document component props
   - Consider setting up Storybook for visual documentation

4. **Gradually refactor existing code**:
   - Replace repetitive Tailwind classes with new components incrementally
   - Test thoroughly after each refactoring step