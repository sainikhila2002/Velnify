import './Button.css'

const variants = {
  primary: 'btn btn--primary',
  secondary: 'btn btn--secondary',
  ghost: 'btn btn--ghost',
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  as: Tag = 'button',
  ...props
}) {
  const classes = `${variants[variant] ?? variants.primary} ${className}`.trim()

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
