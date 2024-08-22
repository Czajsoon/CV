import "./source-code-element.css"
import {openInNewTab} from "../../../../shared/open-in-new-tab/open-in-new-tab";
import React from "react";
interface Props{
    name?: string,
    link: string,
    icon: "github" | "gitlab"
}

export default function SourceCodeElement(props: Props){
    const getName = (name?: string) => {
        if (name) {
            return (<p>{name}</p>);
        }
        return (
          <></>
        );
    }

    const getLogo = (icon: "github" | "gitlab") => {
        if (icon == "github"){
            return "./CV/github-logo.svg"
        }
        return "./CV/gitlab-logo.svg"
    }

    return (
        <div className="d-flex flex-row flex-wrap gap-2 align-items-center service"
             onClick={() => openInNewTab(props.link)}>
            {getName(props.name)}
            <img height={props.icon == "github" ? "25px" : "40px"} src={getLogo(props.icon)} alt="Repository logo"/>
        </div>
    );
}