import "./interests.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceSmile, faTerminal} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InterestChip from "./intrest-chips/InterestChip";
import SkillChips from "../../experience/skill-chips/SkillChips";
import {useTranslation} from "react-i18next";

interface Props{
    usedInWork: string[],
    usedForFun: string[]
}

export default function Interests(props: Props){
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'about.interests' });
    return (
        <>
            <div className="d-flex flex-column gap-2 mt-3">
                <div className="d-flex gap-3 align-items-center interest-main">
                    <FontAwesomeIcon icon={faTerminal} style={{color: "var(--blue-color)", fontSize: "1.4em"}}/>
                    <p>{t("used-in-work")}</p>
                </div>
                <div className="d-flex flex-wrap py-3 gap-3">
                    {props.usedInWork.map((interest) => {
                        return (
                            <InterestChip name={interest}/>
                        )
                    })}
                </div>
            </div>
            <div className="d-flex flex-column ">
                <div className="d-flex gap-3 align-items-center interest-main">
                    <FontAwesomeIcon icon={faFaceSmile} style={{color: "var(--blue-color)", fontSize: "1.4em"}}/>
                    <p>{t("used-for-fun")}</p>
                </div>
                <div className="d-flex flex-wrap py-3 gap-3">
                    {props.usedForFun.map((interest) => {
                        return (
                            <InterestChip name={interest}/>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
