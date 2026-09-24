import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { AnimatePresence, motion } from 'motion/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import ScreenMock from './ScreenMock.jsx'

export default function Slideshow({ slides, host }) {
  const [mainRef, main] = useEmblaCarousel({ loop: true })
  const [thumbRef, thumbs] = useEmblaCarousel({ containScroll: 'keepSnaps', dragFree: true })
  const [index, setIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!main) return
    const i = main.selectedScrollSnap()
    setIndex(i)
    thumbs?.scrollTo(i)
  }, [main, thumbs])

  useEffect(() => {
    if (!main) return
    main.on('select', onSelect).on('reInit', onSelect)
    return () => main.off('select', onSelect).off('reInit', onSelect)
  }, [main, onSelect])

  const go = (dir) => (dir < 0 ? main?.scrollPrev() : main?.scrollNext())
  const onKey = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
  }
  const slide = slides[index]

  return (
    <section className="show" aria-roledescription="carousel" aria-label="Project walkthrough" tabIndex={0} onKeyDown={onKey}>
      <div className="show__stage">
        <div className="show__viewport" ref={mainRef}>
          <div className="show__track">
            {slides.map((s, i) => (
              <div className="show__slide" key={i} aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}: ${s.title}`}>
                {s.image ? <img src={s.image} alt={s.title} className="show__img" /> : <ScreenMock layout={s.layout} path={s.path} host={host} />}
              </div>
            ))}
          </div>
        </div>
        <button className="show__arrow show__arrow--prev" onClick={() => go(-1)} aria-label="Previous screen"><FaArrowLeft /></button>
        <button className="show__arrow show__arrow--next" onClick={() => go(1)} aria-label="Next screen"><FaArrowRight /></button>
      </div>

      <div className="show__caption" aria-live="polite">
        <span className="show__count">
          <b>{String(index + 1).padStart(2, '0')}</b>
          <span>/ {String(slides.length).padStart(2, '0')}</span>
        </span>
        <AnimatePresence mode="wait">
          <motion.div key={index} className="show__text" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
            <h3>{slide.title}</h3>
            <p>{slide.caption}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="show__thumbs" ref={thumbRef}>
        <div className="show__thumbtrack">
          {slides.map((s, i) => (
            <button key={i} className={`show__thumb ${i === index ? 'is-on' : ''}`} onClick={() => main?.scrollTo(i)} aria-label={`Show ${s.title}`} aria-current={i === index}>
              <span className="show__thumbnum">{i + 1}</span>
              <span className="show__thumblabel">{s.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
