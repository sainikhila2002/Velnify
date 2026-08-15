import './SectionHeading.css'

export default function SectionHeading({
  eyebrow,
  title,
  displayTitle,
  description,
  align = 'center',
  className = '',
}) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      {displayTitle ? (
        <h2 className="section-heading__display">{displayTitle}</h2>
      ) : (
        title && <h2 className="section-heading__title">{title}</h2>
      )}
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}
