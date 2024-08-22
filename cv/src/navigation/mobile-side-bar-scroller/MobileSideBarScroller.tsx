import {SideBarScrollerElement} from "../side-bar-scroller/side-bar-scroller.model";
import {Drawer} from "@mui/material";
import React from "react";
import {scrollToElement} from "../../shared/scroll/ScrollToElement";
import "./mobile-side-bar-scroller.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    elements: SideBarScrollerElement[],
    drawerState: boolean,
    changeDrawerState: (value: boolean) => void
}

export default function MobileSideBarScroller(props: Props) {
    return (

        <div className="small-content">
            <Drawer open={props.drawerState} onClose={() => props.changeDrawerState(!props.drawerState)}>
                <div className="mobile-side-bar-scroller d-flex flex-column gap-3">
                    {props.elements.map((element) => {
                        return (
                            <div
                                className="h-17 my-4 d-flex justify-content-center align-items-center scroll-element"
                                onClick={() => scrollToElement(element.id)}>
                                <FontAwesomeIcon icon={element.icon}/>
                            </div>
                        );
                    })}
                </div>
            </Drawer>
        </div>

    );
}
