
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Variant  = 'primary' | 'outline' | 'accent' | 'ghost'
type Size     = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   Variant
  size?:      Size
  href?:      string
  external?:  boolean
  children:   React.ReactNode
  className?: string
}

// In v4 our btn-* classes are defined as @utility in globals.css
const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  accent:  'btn-accent',
  ghost:   'btn-ghost',
}

// Size overrides — plain CSS, no Tailwind config needed
const sizes: Record<Size, string> = {
  sm: 'text-[0.65rem] px-5 py-2.5',
  md: '',
  lg: 'px-10 py-5',
}

export default function Button({
  variant  = 'primary',
  size     = 'md',
  href,
  external = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(variants[variant], sizes[size], className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return <button className={classes} {...props}>{children}</button>
}
