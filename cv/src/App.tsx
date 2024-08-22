import React, {useState} from 'react'
import RevealFromBottom from "./reveal/RevealFromBottom";
import WelcomeSection from "./section/welcome/WelcomeSection";
import Navigation from "./navigation/Navigation";
import ExperienceSection from "./section/experience/ExperienceSection";
import Divider from "./shared/Divider";
import NavigatorElement from "./shared/navigator-element/NavigatorElement";
import SideBarScroller from "./navigation/side-bar-scroller/SideBarScroller";
import EducationSection from "./section/education/EducationSection";
import {SideBarScrollerElement} from "./navigation/side-bar-scroller/side-bar-scroller.model";
import MobileSideBarScroller from "./navigation/mobile-side-bar-scroller/MobileSideBarScroller";
import ProjectsSection from "./section/projects/ProjectsSection";
import ContactSection from "./section/contact/ContactSection";
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCheckSquare,
    faCircleInfo,
    faGraduationCap,
    faEnvelope,
    faStar,
    faCode, faPhone
} from '@fortawesome/free-solid-svg-icons'

import AboutSection from "./section/about/AboutSection";
import GoToTop from "./shared/go-to-top/GoToTop";

const cvElements: SideBarScrollerElement[] = [
    {name: "about", id: "about-section", icon: faCircleInfo},
    {name: "experience", id: "experience-section", icon: faStar},
    {name: "education", id: "education-section", icon: faGraduationCap},
    {name: "projects", id: "projects-section", icon: faCode},
    {name: "contact", id: "contact-section", icon: faPhone}
]

library.add( faCheckSquare, faEnvelope, faGraduationCap)

export default function App() {

    const [drawerState, setDrawerState] = useState(false)
    const changeDrawerState = (state: boolean) => setDrawerState(state)

    return (
        <div>
            <SideBarScroller elements={cvElements}/>
            <Navigation onValueNavigationChange={changeDrawerState}>
                <GoToTop/>
                <RevealFromBottom width={"100%"}>
                    <WelcomeSection/>
                </RevealFromBottom>
                <Divider/>
                <NavigatorElement id="about-section"/>
                <RevealFromBottom width={"100%"} duration={1}>
                    <AboutSection/>
                </RevealFromBottom>
                <Divider/>
                <NavigatorElement id="experience-section"/>
                <RevealFromBottom width={"100%"} duration={1}>
                    <ExperienceSection/>
                </RevealFromBottom>
                <Divider/>
                <NavigatorElement id="education-section"/>
                <RevealFromBottom width={"100%"} duration={1}>
                    <EducationSection/>
                </RevealFromBottom>
                <Divider/>
                <NavigatorElement id="projects-section"/>
                <RevealFromBottom width={"100%"} duration={1}>
                    <ProjectsSection/>
                </RevealFromBottom>
                <Divider/>
                <NavigatorElement id="contact-section"/>
                <RevealFromBottom width={"100%"} duration={1}>
                    <ContactSection/>
                </RevealFromBottom>
                <Divider marginTop="10%"/>
            </Navigation>
            <MobileSideBarScroller
                elements={cvElements}
                drawerState={drawerState}
                changeDrawerState={changeDrawerState}/>

        </div>

    );
}
