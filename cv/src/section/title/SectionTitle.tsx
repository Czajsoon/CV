import "./section-title.css"
import React from "react";

interface Props{
    title: string
}

export default function SectionTitle({title} : Props) {
    return (
        <div className="d-flex flex-row align-items-center justify-content-center exp-container">
            <div className="decoration-container">
                <span>&nbsp;</span>
            </div>
            <div className="large-content">
                <div className="d-flex flex-row justify-content-center align-items-center w-100">
                    <div className="d-flex flex-row justify-content-start align-items-center w-25 section-title">
                        <p>{title}</p>
                    </div>
                    <div className="exp-divider d-flex flex-row align-items-center w-50">
                        <span>&nbsp;</span>
                    </div>
                </div>
            </div>
            <div className="medium-content">
                <div className="d-flex flex-column justify-content-center align-items-center w-100 gap-2">
                    <div className="d-flex flex-row justify-content-center align-items-center w-75 section-title">
                        <p>{title}</p>
                    </div>
                    <div className="exp-divider d-flex flex-row align-items-center w-75">
                        <span>&nbsp;</span>
                    </div>
                </div>
            </div>
            <div className="small-content">
                <div className="d-flex flex-column justify-content-center align-items-center w-100 gap-2">
                    <div className="d-flex flex-row justify-content-center align-items-center w-75 section-title">
                        <p>{title}</p>
                    </div>
                    <div className="exp-divider d-flex flex-row align-items-center w-75">
                        <span>&nbsp;</span>
                    </div>
                </div>
            </div>

        </div>
    );
}