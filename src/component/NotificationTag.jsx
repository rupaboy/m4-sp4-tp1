import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const NotificationTag = ({
  notificationTag = 'notificationTag',
  ratio = '',
  show = true,
  duration = 2000,
  withProgress = true,
  progress = null, // Valor fijo por defecto
  index = 0,       // índice para calcular desplazamiento vertical
}) => {
  const [visible, setVisible] = useState(show)

  useEffect(() => {
    const isStaticProgress = progress === null

    if (show && duration && isStaticProgress) {
      const timeout = setTimeout(() => setVisible(false), duration)
      return () => clearTimeout(timeout)
    }
  }, [show, duration, progress === null])

  // Offset vertical en px para apilar las notificaciones (ejemplo: 60px por notificación)
  const verticalOffset = index * 60

  return (
    <AnimatePresence>
      {visible && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ top: 10 + verticalOffset }} // mover hacia abajo según índice
          className={`${ratio}
            fixed left-1/2 -translate-x-1/2 z-50
            grid items-center text-slate-300/78
            py-1 mt-3 bg-slate-800/70 select-none cursor-pointer
            min-w-0 max-w-[86vw] min-h-[3em] rounded-sm px-2 text-center
            hover:bg-slate-500/30
          `}
        >
          <span className="line-clamp-3">{notificationTag}</span>

          {withProgress && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-white/50 rounded-sm"
              initial={progress === null ? { width: 0 } : false}
              animate={
                progress === null
                  ? { width: '100%' }
                  : { width: `${Math.min(progress * 100, 100)}%` }
              }
              transition={
                progress === null
                  ? { duration: duration / 1000, ease: 'linear' }
                  : { duration: 0.2, ease: 'easeOut' }
              }
            />
          )}
        </motion.main>
      )}
    </AnimatePresence>
  )
}

export default NotificationTag
