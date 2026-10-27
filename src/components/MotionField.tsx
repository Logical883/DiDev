import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string
}

export function MotionField({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let nodes: Node[] = []

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(width * ratio))
      canvas.height = Math.max(1, Math.floor(height * ratio))
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = Math.max(18, Math.round((width * height) / 28000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 2.2 + 1.1,
        color: Math.random() > 0.82 ? '#f8d618' : Math.random() > 0.55 ? '#7dffe0' : '#ffffff',
      }))
    }

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      context.clearRect(0, 0, width, height)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        if (!reduce) {
          a.x += a.vx
          a.y += a.vy
          if (a.x < 0 || a.x > width) a.vx *= -1
          if (a.y < 0 || a.y > height) a.vy *= -1
        }
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < 150) {
            context.strokeStyle = `rgba(255,255,255,${(1 - dist / 150) * 0.22})`
            context.lineWidth = 1
            context.beginPath()
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
          }
        }
      }
      for (const node of nodes) {
        context.fillStyle = node.color
        context.globalAlpha = node.color === '#f8d618' ? 0.95 : 0.75
        context.beginPath()
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        context.fill()
        context.globalAlpha = 1
      }
    }

    resize()
    draw()
    const observer = new ResizeObserver(() => {
      resize()
      draw()
    })
    observer.observe(canvas)

    if (!reduce) {
      const loop = () => {
        draw()
        frame = requestAnimationFrame(loop)
      }
      frame = requestAnimationFrame(loop)
    }

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
