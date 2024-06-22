'use client';

import clsx from "clsx";
import { FC, ReactNode, useState } from "react";

interface AccordionProps {
    children: ReactNode,
    className: string,
    contentClassName: string,
    ctaTextOpen: string,
    ctaTextClose?: string,
}

export const Accordion: FC<AccordionProps> = ({
    children,
    className,
    contentClassName,
    ctaTextOpen,
    ctaTextClose = ctaTextOpen
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={clsx(className, isOpen ? 'max-h-screen' : 'max-h-8')}>
            <button type="button" onClick={() => setIsOpen(!isOpen)} className={clsx("w-full flex gap-1 items-center justify-center border-dashed border-b-white font-light pb-1", { 'border-b-2': isOpen })}>{isOpen ? ctaTextClose : ctaTextOpen}
                <img src="/images/Arrow.png" alt="arrow" className={clsx("h-3 w-5 transition-transform ease-in-out duration-1000", isOpen ? 'rotate-180' : 'rotate-0')} />
            </button>
            <div className={contentClassName}>
                {children}
            </div>
        </div>
    )
}