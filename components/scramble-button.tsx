"use client"

import React, { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

interface ScrambleButtonProps {
  label: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  className?: string
  variant?: "primary" | "outline"
  type?: "button" | "submit" | "reset"
  asChild?: boolean
  children?: React.ReactNode
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function ScrambleButton({
  label,
  onClick,
  href,
  target,
  rel,
  className,
  variant = "primary",
  type = "button",
  children,
}: ScrambleButtonProps) {
  const [displayText, setDisplayText] = useState(label)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  const scramble = useCallback(() => {
    let iteration = 0
    const totalIterations = label.length * 2
    
    if (intervalRef.current) clearInterval(intervalRef.current)
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        label
          .split("")
          .map((char, index) => {
            if (index < iteration / 2) {
              return label[index]
            }
            if (char === " ") return " "
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )
      
      if (iteration >= totalIterations) {
        clearInterval(intervalRef.current!)
      }
      
      iteration += 1
    }, 30)
  }, [label])

  useEffect(() => {
    if (isHovered) {
      scramble()
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setDisplayText(label)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered, label, scramble])

  const content = (
    <div className={cn(
      "relative px-6 sm:px-10 py-3.5 flex items-center justify-center min-w-[160px] sm:min-w-[200px] group cursor-pointer transition-all duration-500 rounded-full overflow-hidden border border-primary/20",
      variant === "primary" ? "bg-primary text-primary-foreground" : "bg-background/60 backdrop-blur-md text-foreground hover:text-primary-foreground"
    )}>
      {/* Background Fill Effect */}
      <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10" />
      <div className={cn(
        "absolute inset-0 bg-foreground translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out -z-10",
        variant === "primary" && "hidden"
      )} />

      {/* Stable Content Container to prevent shifting */}
      <div className="relative flex items-center">
        {/* Dot appearance - absolute to avoid layout shift */}
        <div className={cn(
          "absolute -left-1 w-1.5 h-1.5 bg-current rounded-full transition-all duration-300 transform",
          isHovered ? "scale-100 opacity-100 translate-x-0" : "scale-0 opacity-0 -translate-x-2"
        )} />

        <div className={cn(
          "flex items-center transition-transform duration-300",
          isHovered ? "translate-x-3" : "translate-x-0"
        )}>
          <span className="font-sans font-medium tracking-[1.5px] uppercase text-xs select-none">
            {displayText}
          </span>
          
          {children && <span className="ml-2 group-hover:translate-x-1 transition-transform">{children}</span>}
        </div>
      </div>
    </div>
  )

  const containerClasses = cn(
    "inline-block no-underline rounded-full",
    className
  )

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={rel} 
        className={containerClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <button 
      type={type}
      className={cn(containerClasses, "bg-transparent border-none p-0 w-full")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {content}
    </button>
  )
}
