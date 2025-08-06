// components/ClickSplosion.jsx
'use client'

import { useEffect } from 'react'

export default function ClickSplosion() {
  useEffect(() => {
    const sparks = 10
    const speed = 25
    const bangs = 3
    const colours = ['#FFB6C1', '#E6E6FA', '#FFFACD', '#ADD8E6']

    let intensity: any[] = []
    let Xpos: any[] = []
    let Ypos: any[] = []
    let dX: any[] = []
    let dY: any[] = []
    let hearts: HTMLDivElement[] = []
    let decay = []
    let timers: any[] = []
    let swide = window.innerWidth
    let shigh = window.innerHeight
    let sleft = 0
    let sdown = 0
    let count = 0

    // 화면 크기/스크롤 업데이트 함수
    const setDimensions = () => {
      swide = window.innerWidth
      shigh = window.innerHeight
    }
    const setScroll = () => {
      sdown = window.pageYOffset
      sleft = window.pageXOffset
    }

    const createheart = (char: string, size: number) => {
      const div = window.document.createElement('div')
      const sty = div.style
      sty.font = `${size}px monospace`
      sty.position = 'absolute'
      sty.backgroundColor = 'transparent'
      sty.visibility = 'hidden'
      sty.zIndex = '101'
      div.textContent = char
      return div
    }

    const bang = (N: number) => {
      let alive = 0
      for (let i = sparks * N; i < sparks * (N + 1); i++) {
        if (decay[i] > 0) {
          const Z = hearts[i].style
          Xpos[i] += dX[i]
          Ypos[i] += dY[i] += 1.25 / intensity[N]
          if (Xpos[i] < 0 || Xpos[i] > swide || Ypos[i] < 0 || Ypos[i] > shigh + sdown) {
            decay[i] = 0
          } else {
            Z.left = `${Xpos[i]}px`
            Z.top = `${Ypos[i]}px`
            alive++
          }
          decay[i]--
        }
      }
      if (alive > 0) {
        timers[N] = window.setTimeout(() => bang(N), speed)
      }
    }

    const onClick = (e: MouseEvent) => {
      setScroll()
      const x = e.pageX
      const y = e.pageY
      const N = ++count % bangs
      const idx1 = Math.floor(Math.random() * colours.length)
      let idx2 = Math.floor(Math.random() * colours.length)
      while (idx2 === idx1) {
        idx2 = Math.floor(Math.random() * colours.length)
      }
      intensity[N] = 5 + Math.random() * 4

      for (let i = N * sparks; i < (N + 1) * sparks; i++) {
        Xpos[i] = x
        Ypos[i] = y - 5
        dY[i] = (Math.random() - 0.5) * intensity[N]
        dX[i] = (Math.random() - 0.5) * (intensity[N] - Math.abs(dY[i])) * 1.25
        decay[i] = 16 + Math.floor(Math.random() * 16)

        const Z = hearts[i].style
        const localIndex = i - N * sparks
        const colorIndex = localIndex < sparks / 2 ? idx1 : idx2
        Z.color = colours[colorIndex]
        Z.fontSize = '13px'
        Z.visibility = 'visible'

        window.setTimeout(() => {
          hearts[i].style.visibility = 'hidden'
        }, 1000)
      }
      window.clearTimeout(timers[N])
      bang(N)
    }

    // 초기화
    setDimensions()
    setScroll()
    window.addEventListener('resize', setDimensions)
    window.addEventListener('scroll', setScroll)
    window.addEventListener('click', onClick)

    for (let b = 0; b < bangs; b++) {
      for (let j = sparks * b; j < sparks * (b + 1); j++) {
        const heart = createheart('🎔', 4) // 하트
        window.document.body.appendChild(heart)
        hearts[j] = heart
      }
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', setDimensions)
      window.removeEventListener('scroll', setScroll)
      window.removeEventListener('click', onClick)
      timers.forEach((t) => window.clearTimeout(t))
      hearts.forEach((s) => window.document.body.removeChild(s))
    }
  }, [])

  return null
}
