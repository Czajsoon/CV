import "./side-bar-scroller.css"
import {SideBarScrollerElement} from "./side-bar-scroller.model";
import React from "react";
import {scrollToElement} from "../../shared/scroll/ScrollToElement";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next";


interface Props {
    elements: SideBarScrollerElement[]
}

export default function SideBarScroller(props: Props) {
    const {t, i18n} = useTranslation('translation', {keyPrefix: 'sidebar-scroller'});

    return (
        <>
            <div className="normal-height-content">
                <div className="large-content">
                    <div className="side-bar-scroller d-flex flex-column">
                        {props.elements.map((element) => {
                            return (
                                <div
                                    className="h-17 my-1 gap-3 d-flex flex-column justify-content-center align-items-center scroll-element"
                                    onClick={() => scrollToElement(element.id)}>
                                    <p>{t(element.name)}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="medium-content">
                    <div className="side-bar-scroller d-flex flex-column gap-3">
                        {props.elements.map((element) => {
                            return (
                                <div
                                    className="h-17 my-1 d-flex justify-content-center align-items-center scroll-element"
                                    onClick={() => scrollToElement(element.id)}>
                                    <p>{t(element.name)}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="small-height-content">
                <div className="large-content">

                    <div className="side-bar-scroller d-flex flex-column">
                        {props.elements.map((element) => {
                            return (
                                <div
                                    className="h-17 d-flex justify-content-center align-items-center scroll-element"
                                    onClick={() => scrollToElement(element.id)}>
                                    <FontAwesomeIcon icon={element.icon} style={{fontSize: "1.4em"}}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="medium-content">

                    <div className="side-bar-scroller d-flex flex-column">
                        {props.elements.map((element) => {
                            return (
                                <div
                                    className="h-17 d-flex justify-content-center align-items-center scroll-element"
                                    onClick={() => scrollToElement(element.id)}>
                                    <FontAwesomeIcon icon={element.icon} style={{fontSize: "1.4em"}}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}