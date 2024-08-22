import "./source-code.css"
import React from "react";
import SourceCodeElement from "./source-code-element/SourceCodeElement";
import {ProjectLink} from "../projects-section.model";

interface Props {
    projects: ProjectLink[]
}


export default function SourceCode(props: Props) {
    return (
        <div className="d-flex flex-row flex-wrap gap-4 align-items-center project-links">
            {props.projects.map((project) => {
                return (
                    <SourceCodeElement name={project.name} link={project.link} icon={project.icon}/>
                )
            })}
        </div>
    );
}