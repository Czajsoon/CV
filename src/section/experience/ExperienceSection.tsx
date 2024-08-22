import "./experience-section.css"
import SectionTitle from "../title/SectionTitle";
import ExpPosition from "./exp-position/ExpPosition";
import React from "react";
import {useTranslation} from "react-i18next";

export default function ExperienceSection() {
    const altarSkills = [
        "Spring Boot",
        "Angular"
    ]

    const comarchSkills = [
        "Spring Boot",
        "Angular"
    ]
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'experience' });
    return (
        <div>
            <SectionTitle title={t("title")}/>
            <ExpPosition company={t("altar.name")} position={t("altar.position")} skills={altarSkills}
                         time={t("altar.time")}>
                <ul>
                    <li>{t("altar.description.li1")}</li>
                    <li>{t("altar.description.li2")}</li>
                    <li>{t("altar.description.li3")}</li>
                    <li>{t("altar.description.li4")}</li>
                    <li>{t("altar.description.li5")}</li>
                </ul>
            </ExpPosition>
            <ExpPosition company={t("comarch.name")} position={t("comarch.position")} skills={comarchSkills}
                         time={t("comarch.time")}>
                <p>{t("comarch.description.p")}</p>
            </ExpPosition>
        </div>

    );
}