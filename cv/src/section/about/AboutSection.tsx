import "./about-section.css"
import SectionTitle from "../title/SectionTitle";
import React from "react";
import Interests from "./intrests/Interests";
import {useTranslation} from "react-i18next";
import {faTerminal, faWifi} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import InterestChip from "./intrests/intrest-chips/InterestChip";
import {openInNewTab} from "../../shared/open-in-new-tab/open-in-new-tab";

export default function AboutSection() {
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'about' });
    const usedInWork: string[] = ["Spring Boot", "Angular", "Java", "Kotlin", "TypeScript", "Spring Data", "JooQ", "liquidbase", "Git"]
    const usedForFun: string[] = ["React", "React Native"]

    return (
        <div>
            <SectionTitle title={t("title")}/>
            <div className="large-content">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex w-75 gap-4">
                        <div className="d-flex flex-column w-50 info-description my-3">
                            <p>{t("p1")}</p>
                            <p>{t("p2")}</p>
                            <p>{t("p3")}</p>
                        </div>
                        <div className="d-flex flex-column w-50">
                            <Interests usedInWork={usedInWork} usedForFun={usedForFun}/>
                            <div className="d-flex flex-column">
                                <div className="d-flex gap-3 align-items-center interest-main">
                                    <FontAwesomeIcon icon={faWifi}
                                                     style={{color: "var(--blue-color)", fontSize: "1.4em"}}/>
                                    <p>{t("socials")}</p>
                                </div>
                                <div className="d-flex flex-wrap align-items-center py-3 gap-3">
                                    <img className="service" height="30px" src="./github-logo.svg" alt="Github logo"
                                         onClick={() => openInNewTab("https://github.com/Czajsoon")}/>
                                    <img className="service" height="43px" src="./gitlab-logo.svg" alt="Gitlab Logo"
                                         onClick={() => openInNewTab("https://gitlab.com/Czajsoon")}/>
                                    <img className="service" height="30px" src="./linkedin-logo.svg" alt="LinkedIn Logo"
                                         onClick={() => openInNewTab("https://www.linkedin.com/in/jakub-czajkowski-a3280523a/")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="medium-content">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex w-75 gap-4">
                        <div className="d-flex flex-column w-50 info-description my-3">
                            <p>{t("p1")}</p>
                            <p>{t("p2")}</p>
                            <p>{t("p3")}</p>
                        </div>
                        <div className="d-flex flex-column w-50">
                            <Interests usedInWork={usedInWork} usedForFun={usedForFun}/>
                            <div className="d-flex flex-column">
                                <div className="d-flex gap-3 align-items-center interest-main">
                                    <FontAwesomeIcon icon={faWifi}
                                                     style={{color: "var(--blue-color)", fontSize: "1.4em"}}/>
                                    <p>{t("socials")}</p>
                                </div>
                                <div className="d-flex flex-wrap align-items-center py-3 gap-3">
                                    <img className="service" height="30px" src="./github-logo.svg" alt="Github logo"
                                         onClick={() => openInNewTab("https://github.com/Czajsoon")}/>
                                    <img className="service" height="43px" src="./gitlab-logo.svg" alt="Gitlab Logo"
                                         onClick={() => openInNewTab("https://gitlab.com/Czajsoon")}/>
                                    <img className="service" height="30px" src="./linkedin-logo.svg" alt="LinkedIn Logo"
                                         onClick={() => openInNewTab("https://www.linkedin.com/in/jakub-czajkowski-a3280523a/")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="small-content">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column w-75 gap-4">
                        <div className="d-flex flex-column info-description my-3">
                            <p>{t("p1")}</p>
                            <p>{t("p2")}</p>
                            <p>{t("p3")}</p>
                        </div>
                        <div className="d-flex flex-column">
                            <Interests usedInWork={usedInWork} usedForFun={usedForFun}/>
                            <div className="d-flex flex-column">
                                <div className="d-flex gap-3 align-items-center interest-main">
                                    <FontAwesomeIcon icon={faWifi}
                                                     style={{color: "var(--blue-color)", fontSize: "1.4em"}}/>
                                    <p>{t("socials")}</p>
                                </div>
                                <div className="d-flex flex-wrap align-items-center py-3 gap-3">
                                    <img className="service" height="30px" src="./github-logo.svg" alt="Github logo"
                                         onClick={() => openInNewTab("https://github.com/Czajsoon")}/>
                                    <img className="service" height="43px" src="./gitlab-logo.svg" alt="Gitlab Logo"
                                         onClick={() => openInNewTab("https://gitlab.com/Czajsoon")}/>
                                    <img className="service" height="30px" src="./linkedin-logo.svg" alt="LinkedIn Logo"
                                         onClick={() => openInNewTab("https://www.linkedin.com/in/jakub-czajkowski-a3280523a/")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}