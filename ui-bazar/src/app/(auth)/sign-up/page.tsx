'use client'

import { Icons } from "@/components/Icons"
import { buttonVariants } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const page = () => {
    return (
        <>
            <div className="cantainer relative flex pt-20 flex-col items-center justify-center lg:px-0">
                <div className="flex mx-auto w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Icons.logo className="h-20 w-20" />
                        <h1 className="text-2xl font-bold">
                            ساختن اکانت
                        </h1>

                        <Link href='/sign-in' className={buttonVariants({ variant: 'link', className: 'gap-1' })}>
                            <ArrowLeft className="h-4 w-4" />
                            اکانت دارید؟ ورود
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default page