// components/HeartCursor.jsx
'use client'

import { useEffect } from 'react'

export default function HeartCursor() {
  useEffect(() => {
    const colours = ['#FFB6C1', '#E6E6FA', '#FFFACD', '#ADD8E6']
    const minisize = 14
    const maxisize = 20
    const heartsCount = 30
    const over_or_under = 'over'

    let x = 400,
      y = 300,
      ox = 400,
      oy = 300
    let swide = 800,
      shigh = 600,
      sleft = 0,
      sdown = 0
    const herz: any[] = [],
      herzx: any[] = [],
      herzy: any[] = [],
      herzs: any[] = []
    let kissTimeout: any = null

    let lastSpawn = 0
    const spawnInterval = 200

    const setScroll = () => {
      sdown =
        window.pageYOffset ||
        window.document.documentElement.scrollTop ||
        window.document.body.scrollTop ||
        0
      sleft =
        window.pageXOffset ||
        window.document.documentElement.scrollLeft ||
        window.document.body.scrollLeft ||
        0
    }
    const setSize = () => {
      swide =
        window.innerWidth ||
        window.document.documentElement.clientWidth ||
        window.document.body.clientWidth
      shigh =
        window.innerHeight ||
        window.document.documentElement.clientHeight ||
        window.document.body.clientHeight
    }

    const onMouseMove = (e: any) => {
      x = e.pageX
      y = e.pageY
    }

    for (let i = 0; i < heartsCount; i++) {
      const heart = window.document.createElement('div')
      heart.style.position = 'absolute'
      heart.style.height = heart.style.width = 'auto'
      heart.style.overflow = 'hidden'
      heart.style.backgroundColor = 'transparent'
      heart.style.visibility = 'hidden'
      heart.style.zIndex = over_or_under === 'over' ? '1001' : '0'
      heart.style.pointerEvents = 'none'
      heart.style.color = colours[i % colours.length]
      heart.style.opacity = '0.6'
      heart.innerText = '🎔' // 하트
      window.document.body.appendChild(heart)

      herz[i] = heart
      herzy[i] = false
    }

    const animate = () => {
      const now = Date.now()

      if ((Math.abs(x - ox) > 1 || Math.abs(y - oy) > 1) && now - lastSpawn > spawnInterval) {
        lastSpawn = now
        ox = x
        oy = y
        for (let i = 0; i < heartsCount; i++) {
          if (herzy[i] === false) {
            herz[i].innerText = '\u2665'
            herzx[i] = x - minisize / 2
            herzy[i] = y - minisize
            herz[i].style.left = `${herzx[i]}px`
            herz[i].style.top = `${herzy[i]}px`
            herz[i].style.fontSize = `${minisize}px`
            herz[i].style.fontWeight = 'normal'
            herz[i].style.visibility = 'visible'
            herzs[i] = minisize
            break
          }
        }
      }

      for (let i = 0; i < heartsCount; i++) {
        if (herzy[i] !== false) {
          const speed = (herzs[i] / minisize + (i % 2)) / 2
          herzy[i] -= speed
          herzx[i] += ((i % 5) - 2) / 5
          if (
            herzy[i] < sdown - herzs[i] ||
            herzx[i] < sleft - herzs[i] ||
            herzx[i] > sleft + swide - herzs[i]
          ) {
            herz[i].style.visibility = 'hidden'
            herzy[i] = false
          } else {
            if (Math.random() < maxisize / herzy[i] && herzs[i] < maxisize) {
              herz[i].style.fontSize = `${++herzs[i]}px`
            }
            herz[i].style.top = `${herzy[i]}px`
            herz[i].style.left = `${herzx[i]}px`
          }
        }
      }
      window.requestAnimationFrame(animate)
    }

    const onMouseDown = () => {
      ox = -1
      oy = -1
      kissTimeout = window.setTimeout(onMouseDown, 100)
    }
    const onMouseUp = () => {
      window.clearTimeout(kissTimeout)
    }

    setScroll()
    setSize()
    window.addEventListener('resize', setSize)
    window.addEventListener('scroll', setScroll)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    animate()

    return () => {
      window.removeEventListener('resize', setSize)
      window.removeEventListener('scroll', setScroll)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      herz.forEach((h: any) => window.document.body.removeChild(h))
      window.cancelAnimationFrame(Number(animate))
    }
  }, [])

  return null
}
