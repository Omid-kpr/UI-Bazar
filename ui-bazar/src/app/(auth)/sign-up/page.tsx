'use client'

import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"

const Page = () => {



    const { register, handleSubmit, formState: { errors } } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator)
    })

    const submit = ({ email, password }: TAuthCredentialsValidator) => {
        //send data to server
    }

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

                    <div className="grid gap-6 text-right">
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label className="pb-1 pr-2" htmlFor="email">ایمیل</Label>
                                    <Input
                                        {...register('email')}
                                        className={cn({ 'focus-visible:ring-red-500': errors.email })}
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div className="grid gap-1 py-2">
                                    <Label className="pb-1 pr-2" htmlFor="password">رمز عبور</Label>
                                    <Input
                                        {...register('password')}
                                        className={cn({ 'focus-visible:ring-red-500': errors.password })}
                                        placeholder="password"
                                    />
                                </div>
                                <Button>ثبت نام</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page