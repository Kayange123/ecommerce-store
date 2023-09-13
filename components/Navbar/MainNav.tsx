"use client";

import { cn } from "@/lib/utils";
import { ICategory } from "@/common.types";
import Link from "next/link";
import {usePathname} from "next/navigation"

interface IMainNav {
    data: ICategory[];
}

const MainNav = ({data}: IMainNav) => {
    const pathname = usePathname();
    const routes = data.map(route=>({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))
  return (
    <nav className='mx-6 flex items-center space-x-4 lg:space-x-6'>
        {routes.map(route=> (
            <Link 
            key={route.label} 
            href={route.href}
            className={cn("text-sm font-medium transition-colors text-neutral-500 hover:text-black", route.active && "text-black") 
        }
            >{route.label}</Link>
        ))}
    </nav>
  )
}

export default MainNav