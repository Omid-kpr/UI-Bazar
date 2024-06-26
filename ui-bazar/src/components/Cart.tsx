'use client'

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import Image from "next/image"
import { useState } from "react"

const Cart = () => {

    const [itemCount, setItemCount] = useState(0)
    const fee = 100000

    return <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart aria-hidden='true' className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
        </SheetTrigger>
        <SheetContent side={"left"} className="flex w-full flex-col pr-0 sm:max-w-lg">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle className="mx-auto mt-6 text-blue-700">سبد خرید ({itemCount})</SheetTitle>
            </SheetHeader>
            {itemCount > 0 ? (
                <>
                    <div className="flex w-full flex-col pr-6 text-right">
                        {/* TODO: cart logic */}
                        محصولات در سبد
                    </div>
                    <div className="pr-6 space-y-4 text-right">
                        <Separator />
                        <div className="text-sm space-y-1.5">
                            <div className="flex">
                                <span>{formatPrice(0)}</span>
                                <span className='flex-1'>هزینه ارسال</span>
                            </div>
                            <div className="flex">
                                <span>{formatPrice(fee)}</span>
                                <span className='flex-1'>قیمت</span>
                            </div>
                            <div className="flex">
                                <span className="text-blue-600">{formatPrice(fee)}</span>
                                <span className='flex-1'>مجموع</span>
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href='/cart' className={buttonVariants({ className: 'w-full' })}>رفتن به پرداخت</Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                </>
            ) : (<div className="flex h-full flex-col items-center justify-center space-y-1">
                <div aria-hidden='true' className="relative mb-4 h-60 w-60 to-muted-foreground">
                    <Image src='/hippo-empty-cart.png' fill alt="empty cart" />
                </div>
                <div className="text-xl font-semibold">سبد خرید شما خالی است</div>
                <SheetTrigger asChild>
                    <Link href='/products' className={buttonVariants({
                        variant: 'link',
                        size: 'sm',
                        className: 'text-sm to-muted-foreground'
                    })}>
                        افزودن به سبد خرید
                    </Link>
                </SheetTrigger>
            </div>
            )}
        </SheetContent>
    </Sheet>
}

export default Cart

