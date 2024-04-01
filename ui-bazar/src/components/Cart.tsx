'use client'

import { ShoppingCart } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"

const Cart = () => {

    const itemCount = 1

    return <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <ShoppingCart aria-hidden='true' className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
        </SheetTrigger>
        <SheetContent side={"left"} className="flex w-full flex-col pr-0 sm:max-w-lg">
            <SheetHeader className="space-y-2.5 pr-6">
                <SheetTitle className="mx-auto mt-6">سبد خرید (۰)</SheetTitle>
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
                                <span>{formatPrice(100000)}</span>
                                <span className='flex-1'>کمیسیون</span>

                            </div>
                        </div>
                    </div>
                </>
            ) : (<div></div>)}
        </SheetContent>
    </Sheet>
}

export default Cart

