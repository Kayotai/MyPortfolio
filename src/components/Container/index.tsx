import type React from "react"
import { Children } from "react";

import "./index.css"


type Children = {
    children: React.ReactNode;
};

export default function Container({children}: Children)
{
    <div> {children} </div>
}