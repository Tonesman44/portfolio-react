export const NAV_H = 68

export function sectionTop(id) {
  if (id === 'top') return 0
  const el = document.getElementById(id)
  if (!el) return 0
  return Math.max(0, el.getBoundingClientRect().top + window.scrollY - NAV_H + 1)
}

export function scrollToId(id, { instant = false } = {}) {
  window.scrollTo({ top: sectionTop(id), behavior: instant ? 'instant' : 'smooth' })
}
