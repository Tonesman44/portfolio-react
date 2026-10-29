import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

// 3D tilt that follows the pointer. Wrap any block in it.
export default function Tilt({ children, className = '', max = 10, as = 'div', style, ...rest }) {
  const Tag = motion[as] ?? motion.div
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 260, damping: 22 })
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 260, damping: 22 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const reset = () => { px.set(0.5); py.set(0.5) }

  return (
    <Tag
      className={className}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 700, ...style }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      {...rest}
    >
      {children}
    </Tag>
  )
}
