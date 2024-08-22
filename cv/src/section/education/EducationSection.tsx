import SectionTitle from "../title/SectionTitle";
import React from "react";
import "./education-section.css"
import EduPosition from "./edu-position/EduPosition";
import {useTranslation} from "react-i18next";

export default function EducationSection() {
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'education' });
    return (
        <div>
            <SectionTitle title={t("title")}/>
            <EduPosition fieldOfStudy={t("bachelor.fieldOfStudy")}
                         location={t("bachelor.location")}
                         kind={t("bachelor.kind")}
                         specialization={t("bachelor.specialization")}
                         time={t("bachelor.time")}
            />
            <EduPosition fieldOfStudy={t("master.fieldOfStudy")}
                         location={t("master.location")}
                         kind={t("master.kind")}
                         specialization={t("master.specialization")}
                         time={t("master.time")}
            />
        </div>
    )
}