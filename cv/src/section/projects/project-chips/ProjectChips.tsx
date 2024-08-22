import "./project-chips.css"
import React from "react";
interface Props{
    name: string
}

export default function ProjectChips({name}: Props){
    return (
        <div className="project-chips">
            <p>{name}</p>
        </div>
    );
}
