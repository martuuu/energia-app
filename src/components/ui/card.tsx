import * as React from "react"

import { cn } from "@/lib/utils"
import { SportIcon, SportType } from "./sport-icon"

interface CardProps extends React.ComponentProps<"div"> {
  iconPattern?: SportType;
}

function Card({ className, iconPattern, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm relative overflow-hidden",
        className
      )}
      {...props}
    >
      {iconPattern && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[30%] h-full flex flex-col justify-center items-center overflow-hidden">
            <div className="grid grid-cols-4 gap-x-10 gap-y-6 transform rotate-45 scale-150 translate-x-6">
              {Array.from({ length: 20 }).map((_, index) => (
                <div 
                  key={index} 
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <SportIcon sport={iconPattern} size={28} opacity={0.15} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="relative z-10">
        {props.children}
      </div>
    </div>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
