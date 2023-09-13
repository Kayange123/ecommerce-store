import React from 'react'
import Container from '../ui/Container'
import Link from 'next/link'
import MainNav from './MainNav'
import { getCategories } from '@/actions/actions'
import NavbarActions from './NavbarActions'


const Navbar = async () => {
    const categories = await getCategories();
    //console.log(categories);
  return (
    <div className='border-b'>
        <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
            <Link href='/' className='ml-4 flex gap-x-2 lg:ml-0'>
                <p className='text-xl font-bold'>STORE</p>
            </Link>
            <MainNav data={categories} />
            <NavbarActions />
            </div>
        </Container>
    </div>
  )
}

export default Navbar