import Image from 'next/image'
import React from 'react'
import Logo from '../styles/hulu-white.webp'
import HeaderItem from './HeaderItem'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem  title="HOME" Icon={HomeIcon} />
            <HeaderItem  title="TRENDING" Icon={LightningBoltIcon} />
            <HeaderItem  title="COLLECTIONS" Icon={CollectionIcon} />
            <HeaderItem  title="SEARCH" Icon={SearchIcon} />
            <HeaderItem  title="ACCOUNT" Icon={UserIcon} />
            <HeaderItem  title="VERIFIED" Icon={BadgeCheckIcon} />
        </div>
        <Image className='object-contain' src={Logo} height={100} width={200} />
    </header>
  )
}

export default Header