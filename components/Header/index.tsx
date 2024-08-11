'use client'
import Link from 'next/link'
import React from 'react'
import LargeButton from '../Buttons/LargeButton'
 
import { usePathname } from 'next/navigation'


const Header = () => {
    const pathname = usePathname()
    const navItems = [
        { href: '/earn', label: 'Earn' },
        { href: '/borrow', label: 'Borrow' },
        { href: '/swap', label: 'Swap' },
        { href: '/auctions', label: 'Auctions' },
        { href: '/portfolio', label: 'Portfolio' },
    ]

  return (
   <header className='flex fixed top-0 left-0 w-full bg-white justify-between px-2 sm:px-8 border-b-[1px] '>
    <div className='flex justify-between gap-8'>
        <Link href="/" className='flex justify-center items-center text-primary'>Nosen</Link>

    <nav className='hidden sm:flex justify-between items-center gap-8 text-base font-normal'>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`h-full flex items-center text-sm 2xl:text-xl hover:border-b-[2px] hover:border-b-black ${
            pathname === item.href ? "border-b-[2px] border-b-black" : ""
             }`}
             >
                            {item.label}
                        </Link>
                    ))}
    </nav>
    </div>
    
    <div className='py-2'> 
        <LargeButton>Connect Wallet</LargeButton>
    </div>
   </header>
  )
}

export default Header