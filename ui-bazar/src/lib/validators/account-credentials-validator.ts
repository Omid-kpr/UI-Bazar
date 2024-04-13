import { z } from "zod"

export const AuthCredentialsValidator = z.object({
    email: z.string().email({ message: 'ایمیل وارد شده معتبر نمیباشد' }),
    password: z.string().min(8, { message: "رمز عبور باید حداقل ۸ کاراکتر باشد " })
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>