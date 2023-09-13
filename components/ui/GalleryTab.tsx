import { IImage } from '@/common.types'
import React from 'react'
import { Tab} from "@headlessui/react";
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface GalleryTabProps {
    image: IImage;
}
const GalleryTab = ({image}:GalleryTabProps) => {
  return (
    <Tab className="flex cursor-pointer relative aspect-square items-center bg-white justify-center rounded-md">
        {({selected})=>(
            <div className="">
                <span className="absolute h-full w-full rounded-md aspect-square inset-0 overflow-hidden">
                    <Image fill src={image?.url} alt='image' className='object-cover object-center' />
                </span>
                <span className={cn("absolute insert-0 rounded-md ring-2 ring-offset-2 ", selected? "ring-black": "ring-transparent")}>
                    
                </span>
            </div>
        )}
    </Tab>
  )
}

export default GalleryTab