import type { ReactNode } from "react";
import './index.css'

interface ButtonProps {
    children: ReactNode;
    href: string;
    download?: string;
    target?: string;
    rel?: string
    arialabel: string;
    classe?: string
}

export default function Button({ children, href, download, arialabel, classe, target, rel }: ButtonProps)
{
    return (
        <a 
            href= { href } 
            download={ download }
            className= { classe }
            aria-label= { arialabel }
            rel= {rel}
            target= {target} >
                 { children } 
        </a>
    )
}