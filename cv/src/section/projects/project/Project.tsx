import "./project.css"
import React from "react";
import ProjectChips from "../project-chips/ProjectChips";
import SourceCode from "../source-code/SourceCode";
import {IProject} from "../projects-section.model";
import {useTranslation} from "react-i18next";

interface Props {
    children?: JSX.Element | JSX.Element[]
    data: IProject
}


export default function Project(props: Props) {
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'projects.project' });
    return (
        <div className="d-flex flex-column w-100 my-4">
            <div className="project-title">
                <p>{props.data.projectName}</p>
            </div>
            <div className="large-content">
                <div className="d-flex flex-row mt-2">
                    <div className="d-flex flex-column justify-content-start w-25 gap-3">
                        <div className="d-flex flex-column source-code gap-2">
                            <p>{t("source-code")}</p>
                            <SourceCode projects={props.data.sourceCode}/>
                        </div>
                        <div className="d-flex flex-column project-technologies-stack">
                            <p>{t("tech-stack")}</p>
                            {props.data.tech.map((tech) => {
                                return (
                                    <ProjectChips name={tech}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="d-flex flex-column w-75 project-description">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="medium-content">
                <div className="d-flex flex-row mt-2">
                    <div className="d-flex flex-column justify-content-start w-25 gap-3">
                        <div className="d-flex flex-column source-code gap-2">
                            <p>{t("source-code")}</p>
                            <SourceCode projects={props.data.sourceCode}/>
                        </div>
                        <div className="d-flex flex-column project-technologies-stack">
                            <p>{t("tech-stack")}</p>
                            {props.data.tech.map((tech) => {
                                return (
                                    <ProjectChips name={tech}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="d-flex flex-column w-75 project-description">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="small-content">
                <div className="d-flex flex-column flex-row mt-2">
                    <div className="d-flex flex-column project-description">
                        {props.children}
                    </div>
                    <div className="d-flex flex-column justify-content-start gap-3">
                        <div className="d-flex flex-column source-code gap-2">
                            <p>{t("source-code")}</p>
                            <SourceCode projects={props.data.sourceCode}/>
                        </div>
                        <div className="d-flex flex-column project-technologies-stack">
                            <p>{t("tech-stack")}</p>
                            {props.data.tech.map((tech) => {
                                return (
                                    <ProjectChips name={tech}/>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}