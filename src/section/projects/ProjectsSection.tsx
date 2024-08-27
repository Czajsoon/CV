import "./projects-section.css"
import SectionTitle from "../title/SectionTitle";
import React from "react";
import Project from "./project/Project";
import {IProject} from "./projects-section.model";
import {useTranslation} from "react-i18next";

export default function ProjectsSection() {
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'projects' });

    const expenseJournalProject: IProject = {
        projectName: t("journal.title"),
        tech: ["Spring Boot", "Angular"],
        sourceCode: [
            {name: "FE", link: "https://github.com/Czajsoon/expense-journal-client", icon: "github"},
            {name: "BE", link: "https://github.com/Czajsoon/expense-journal-api", icon: "github"}
        ]
    }

    const hotelManagementProject: IProject = {
        projectName: t("hotel.title"),
        tech: ["Spring Boot", "Angular", "PostrgeSQL", "Docker", "Architektura mikrousługowa", "JWT", "2FA"],
        sourceCode: [
            { link: "https://gitlab.com/hotel-management-system8963305", icon: "gitlab"}
        ]
    }

    const cvProject: IProject = {
        projectName: t("cv.title"),
        tech: ["React"],
        sourceCode: [
            { link: "https://github.com/Czajsoon/CV", icon: "github"}
        ]
    }

    return (
        <div>
            <SectionTitle title={t("title")}/>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <div className="d-flex flex-column w-75">
                    <Project data={hotelManagementProject}>
                        <p>{t("hotel.description.p1")}</p>
                        <p>{t("hotel.description.p2")}</p>
                        <p>{t("hotel.description.p3")}</p>
                        <p>{t("hotel.description.p4")}</p>
                        <p>{t("hotel.description.p5")}</p>
                    </Project>
                    <Project data={expenseJournalProject}>
                        <p>{t("journal.description.p1")}</p>
                        <p>{t("journal.description.p2")}</p>
                        <p>{t("journal.description.p3")}</p>
                    </Project>
                    <Project data={cvProject}>
                        <p>{t("cv.description.p1")}</p>
                    </Project>
                </div>
            </div>
        </div>
    );
}