"use client"

import { Bell, Menu, Search, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardNav } from "./dashboard-nav"
import { useState } from "react"
import Link from "next/link"

export function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <header className="sticky top-0 z-10 py-4 flex items-center gap-2 bg-primary min-h-4 px-2 md:px-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-7 w-7 md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Basculer le menu de navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[60px] p-0 sm:max-w-none">
            <DashboardNav setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/sncf.svg?height=24&width=24" alt="SNCF SmartMove Logo" className="h-12 object-contain" />
          </Link>

        </div>
        <div className="mx-2 flex-1 md:grow-0 md:w-[180px] lg:w-[240px]">
          <form>
            <div className="flex justify-center relative">
              <Search className="absolute my-auto left-2 top-4 h-3.5 w-3.5 text-muted-foreground" />
              <Input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full rounded-md bg-background pl-7 md:w-[180px] lg:w-[240px] h-12 text-xs"
              />
            </div>
          </form>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" className="relative h-7 w-7">
            <Bell className="h-3.5 w-3.5" />
            <span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent text-[8px] text-accent-foreground">
            3
          </span>
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Settings className="h-3.5 w-3.5" />
            <span className="sr-only">Paramètres</span>
          </Button>
          <Avatar className="h-7 w-7">
            <AvatarImage src="/placeholder.svg?height=28&width=28" alt="User" />
            <AvatarFallback className="text-xs">TM</AvatarFallback>
          </Avatar>
        </div>
      </header>
  )
}

