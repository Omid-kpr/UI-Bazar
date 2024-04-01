import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Icons } from "./Icons"
import NavItems from './NavItems'
import { buttonVariants } from "./ui/button"
import Cart from "./Cart"

const Navbar = () => {

  const user = null

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className='relative bg-white'>
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-end">
              {/* TODO: Mobile Nav */}
              <div className="mr-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                  {user ? null : <div className="flex"><span className="h-6 w-px bg-gray-200" aria-hidden='true'></span></div>}
                  {user ? <p>داشبورد</p> : (<Link href='/sign-up' className={buttonVariants({ variant: 'ghost' })}>ثبت نام</Link>)}
                  {user ? null : (<span aria-hidden='true' className="h-6 w-px bg-gray-200"></span>)}
                  {user ? null : (<Link href='/sign-in' className={buttonVariants({ variant: "ghost" })}>ورود</Link>)}
                  {user ? (<span aria-hidden='true' className="h-6 w-px bg-gray-200"></span>) : null}

                </div>
              </div>
              <div className="hidden mr-3 z-50 lg:block lg:ml-8 lg:self-stretch">
                <NavItems />
              </div>
              <div className="mr-6 flex lg:ml-0">
                <Link href='/'>
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar