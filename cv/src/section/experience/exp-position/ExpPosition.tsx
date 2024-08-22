import "./exp-position.css";
import {dividerClasses} from "@mui/material";
import SkillChips from "../skill-chips/SkillChips";
import React from "react";

interface Props{
    children?: JSX.Element | JSX.Element[],
    company: string,
    position: string,
    time: string,
    skills: string[]
}

export default function ExpPosition(props: Props) {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 my-3 mb-5">
            <div className="large-content">
                <div className="d-flex flex-row w-75 gap-3">
                    <div className="d-flex flex-column w-25">
                        <div className="company">
                            <p>{props.company}</p>
                        </div>
                        <div className="position">
                            <p>{props.position}</p>
                        </div>
                        <div className="time">
                            <p>{props.time}</p>
                        </div>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {props.skills.map((skill) => {
                                return (
                                    <SkillChips name={skill}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="description w-75">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="medium-content">
                <div className="d-flex flex-row w-75 gap-3">
                    <div className="d-flex flex-column w-25">
                        <div className="company">
                            <p>{props.company}</p>
                        </div>
                        <div className="position">
                            <p>{props.position}</p>
                        </div>
                        <div className="time">
                            <p>{props.time}</p>
                        </div>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {props.skills.map((skill) => {
                                return (
                                    <SkillChips name={skill}/>
                                )
                            })}
                        </div>
                    </div>
                    <div className="description w-75">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="small-content">
                <div className="d-flex flex-column w-75 gap-3">
                    <div className="d-flex flex-column justify-content-center align-items-center w-100">
                        <div className="company">
                            <p>{props.company}</p>
                        </div>
                        <div className="position">
                            <p>{props.position}</p>
                        </div>
                        <div className="time">
                            <p>{props.time}</p>
                        </div>

                    </div>
                    <div className="description w-100">
                        {props.children}
                    </div>
                    <div className="d-flex flex-wrap gap-3 mt-3">
                        {props.skills.map((skill) => {
                            return (
                                <SkillChips name={skill}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}