// Slanted broadcast name plate. tone: 'red' | 'bone' | 'dark'
export default function Plate({ children, tone = 'red', as: Tag = 'span', className = '' }) {
  return (
    <Tag className={`plate plate--${tone} ${className}`}>
      <span className="plate__text">{children}</span>
    </Tag>
  )
}
