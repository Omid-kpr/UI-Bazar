'use client'

import { PRODUCT_CATEGORIES } from "@/config"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/click-outside"
import { handler } from "tailwindcss-animate"

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    //for open/close menu
    const isAnyOpen = activeIndex !== null

    //clicking outside closes the menu
    const navRef = useRef<HTMLDivElement | null>(null)

    useOnClickOutside(navRef, () => setActiveIndex(null))

    //pressing Escape key closes the menu
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveIndex(null)
            }
        }

        document.addEventListener("keydown", handler)

        return () => {
            document.removeEventListener("keydown", handler)
        }
    }, []);


    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {PRODUCT_CATEGORIES.map((category, i) => {

                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null)
                    }
                    else {
                        setActiveIndex(i)
                    }
                }

                const isOpen = activeIndex === i


                return <NavItem
                    key={category.value}
                    category={category}
                    handleOpen={handleOpen}
                    isOpen={isOpen}
                    isAnyOpen={isAnyOpen} />
            })}
        </div>
    )
}

export default NavItems