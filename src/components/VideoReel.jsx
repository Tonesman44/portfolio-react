import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { FaPlay, FaPause, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6'

// Gameplay reel: plays the clips back to back, muted by default, and pauses when scrolled away.
export default function VideoReel({ clips, stills = [] }) {
  const [index, setIndex] = useState(0)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showStills, setShowStills] = useState(false)
  const videoRef = useRef(null)
  const wrapRef = useRef(null)
  const inView = useInView(wrapRef, { amount: 0.4 })
  const clip = clips[index]

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    if (inView && !showStills) v.play().catch(() => {})
    else v.pause()
  }, [inView, index, showStills])

  const next = () => setIndex((i) => (i + 1) % clips.length)
  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  return (
    <div className="reel" ref={wrapRef}>
      <div className="reel__stage">
        <AnimatePresence mode="wait">
          {showStills ? (
            <motion.div key="stills" className="reel__stills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              {stills.map((s, i) => (
                <motion.figure key={s.src} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.06 }}>
                  <img src={s.src} alt={s.alt} loading="lazy" />
                </motion.figure>
              ))}
            </motion.div>
          ) : (
            <motion.div key={clip.src} className="reel__video" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              <video
                ref={videoRef}
                src={clip.src}
                poster={clip.poster}
                muted={muted}
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={next}
                onTimeUpdate={(e) => setProgress(e.currentTarget.duration ? e.currentTarget.currentTime / e.currentTarget.duration : 0)}
                onClick={toggle}
                aria-label={clip.title}
              />
              <span className="reel__live"><i />{playing ? 'Gameplay' : 'Paused'}</span>
              <div className="reel__controls">
                <button onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>{playing ? <FaPause /> : <FaPlay />}</button>
                <button onClick={() => setMuted((m) => !m)} aria-label={muted ? 'Unmute' : 'Mute'}>{muted ? <FaVolumeXmark /> : <FaVolumeHigh />}</button>
              </div>
              <span className="reel__bar" style={{ transform: `scaleX(${progress})` }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="reel__caption" aria-live="polite">
        <span className="reel__count">
          <b>{String(index + 1).padStart(2, '0')}</b>
          <span>/ {String(clips.length).padStart(2, '0')}</span>
        </span>
        <AnimatePresence mode="wait">
          <motion.div key={showStills ? 'stills' : clip.src} className="reel__text" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.2 }}>
            <h4>{showStills ? 'Screenshots' : clip.title}</h4>
            <p>{showStills ? 'Cover art, the lobby, and Monster Manor.' : clip.caption}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="reel__clips">
        {clips.map((c, i) => (
          <button
            key={c.src}
            className={`reel__clip ${i === index && !showStills ? 'is-on' : ''}`}
            onClick={() => { setShowStills(false); setIndex(i) }}
            aria-label={`Play clip ${i + 1}: ${c.title}`}
            aria-current={i === index && !showStills}
          >
            <img src={c.poster} alt="" />
            <span>{String(i + 1).padStart(2, '0')}</span>
          </button>
        ))}
        {stills.length > 0 && (
          <button className={`reel__clip reel__clip--stills ${showStills ? 'is-on' : ''}`} onClick={() => setShowStills(true)} aria-pressed={showStills}>
            <img src={stills[0].src} alt="" />
            <span>Stills</span>
          </button>
        )}
      </div>
    </div>
  )
}
