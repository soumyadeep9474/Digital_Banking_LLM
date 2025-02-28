"use client"

import Image from 'next/image'
import { ArrowRight2, Element3, Profile2User, Setting2, Setting4, Bank } from 'iconsax-react'
import ProfileImage from '../components/assets/profile.png'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { useCentralStore } from '@/Store'
import React, { useEffect } from 'react'


function Sidebar() {

    const pathname = usePathname()
    const { setIsSidebarOpen, isSidebarOpen, isAiChatAssistantOpen, setIsAiChatAssistantOpen } = useCentralStore()

    // useEffect(() => {
    //     if (!isSidebarOpen) setIsSidebarOpen(!isSidebarOpen)
    // }, [pathname])

    return (
        <div className='w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden'>
            <div className='w-full h-full bg-white border-r'>
                {/* logo */}
                <div className='h-[var(--h-nav)] p-4 md:p-6 flex cursor-pointer group items-center gap-2'>
                    <div className='h-10 outline outline-orange-300 w-10 flex items-center bg-primary justify-center rounded-full text-white'>
                        <Bank size={24} className='relative group-hover:scale-75 duration-200' />
                    </div>
                    <div>
                        <h1 className='text-sm font-bold text-gray-800'>Digital Bank</h1>
                        <p className='text-xs text-gray-500 font-medium'>Modern & Reliable</p>
                    </div>
                </div>

                {/* section divider */}
                <hr className='bg-gray-400 mx-2' />

                {/* other section */}
                <div className='flex flex-col h-full justify-between'>
                    {/* top */}
                    <div className='pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs'>
                        <Link href={'/app/dashboard'} className={`flex ${pathname === '/app/dashboard' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                            <Element3 variant='Outline' size={16} />
                            Dashboard
                        </Link>

                        <Link href={'/app/teams'} className={`flex ${pathname === '/app/teams' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                            <Profile2User size={16} />
                            Transactions
                        </Link>

                        <Link href={'/app/investments'} className={`flex ${pathname === '/app/investments' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                            <Profile2User size={16} />
                            Investments
                        </Link>

                        <Link href={'/app/cards'} className={`flex ${pathname === '/app/cards' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                            <Profile2User size={16} />
                            Cards
                        </Link>

                        <Link href={'/app/debtor'} className={`flex ${pathname === '/app/debtor' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                            <Profile2User size={16} />
                            Debtor Credit Risk Checking
                        </Link>

                        <Link href={'/app/integrations'} className={`flex ${pathname === '/app/integrations' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                            <Setting4 size={16} />
                            AI Chat Assistant
                        </Link>
                    </div>

                    <div>
                        <div className='text-gray-500 text-xs font-medium md:px-2'>
                            <button className={`flex ${pathname === '/app/settings' ? 'text-primary' : ''} hover:px-8 duration-200 px-6 py-2 items-center gap-2`}>
                                <Setting2 size={16} />
                                Settings
                            </button>
                        </div>

                        <hr className='bg-gray-400 mx-2 my-4' />

                        {/* bottom */}
                        <div className='flex pb-28 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200'>
                            <div className='flex items-center gap-2'>
                                <Image
                                    src={ProfileImage}
                                    alt='User'
                                    width={36}
                                    height={36}
                                    className='rounded-full'
                                />
                                <div className=''>
                                    <p className='text-sm font-semibold text-gray-800'>Soumyadeep Das</p>
                                    <p className='text-xs font-medium text-gray-500'>somya@das.com</p>
                                </div>
                            </div>

                            <button className='text-gray-500'>
                                <ArrowRight2 size={16} />
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


const NavbarLink = ({ href, active }: { href: string, active: boolean }) => {
    return (
        <Link
            href={href}

        >

        </Link>
    )
}

const NavLink = React.forwardRef<
    LinkProps,
    React.ComponentPropsWithoutRef<'a'>>
    (({ className, href, ...props }) =>
        <Link
            href={href!}
            className={`flex ${window.location.pathname === href! ? 'text-primary' : ''} hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
            {...props}
        />
    )
NavLink.displayName = 'NavLink'


export default Sidebar
