import React from "react";
import "./navigator-element.css"

interface Props {
    id: string
}

export default function NavigatorElement(props: Props) {
    return (
        <div className="navigator-element">
            <span id={props.id}>&nbsp;</span>
        </div>
    );
}