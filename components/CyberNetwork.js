"use client"
import { useEffect, useRef } from "react"

export default function CyberNetwork(){

  const canvasRef = useRef(null)

  useEffect(()=>{

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let particles = []
    const count = 90

    const resize = ()=>{
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    for(let i=0;i<count;i++){
      particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        vx: (Math.random()-0.5)*0.5,
        vy: (Math.random()-0.5)*0.5
      })
    }

    const draw = ()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height)

      for(let p of particles){

        p.x += p.vx
        p.y += p.vy

        if(p.x<0||p.x>canvas.width) p.vx *= -1
        if(p.y<0||p.y>canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x,p.y,2,0,Math.PI*2)
        ctx.fillStyle = "#22d3ee"
        ctx.fill()

        for(let q of particles){
          const dist = Math.hypot(p.x-q.x,p.y-q.y)
          if(dist<120){
            ctx.strokeStyle = "rgba(34,211,238,0.15)"
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x,p.y)
            ctx.lineTo(q.x,q.y)
            ctx.stroke()
          }
        }

      }

      requestAnimationFrame(draw)
    }

    draw()

    return ()=>window.removeEventListener("resize", resize)

  },[])

  return(
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10"
    />
  )
}