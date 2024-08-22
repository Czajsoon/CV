import React from "react";

interface Props{
    marginTop?: string;
}

export default function Divider({marginTop = "14%"}: Props) {
    return (
        <div style={{marginTop: marginTop}}><span>&nbsp;</span></div>
    )
}