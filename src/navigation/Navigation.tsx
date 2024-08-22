import React, {useState} from "react";
import {jsx} from "@emotion/react";
import "./navigation.css";
import {Button, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import JSX = jsx.JSX;
import MenuIcon from '@mui/icons-material/Menu';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {openInNewTab} from "../shared/open-in-new-tab/open-in-new-tab";
import {useTranslation} from "react-i18next";


interface Props {
    children: JSX.Element | JSX.Element[],
    scrollingNavigationOpen?: boolean,
    onValueNavigationChange: (value: boolean) => void;
}

export default function Navigation({children, scrollingNavigationOpen = false, onValueNavigationChange}: Props) {
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'navigation' });
    const [openScrollingNavigation, setOpenScrollingNavigation] = useState(scrollingNavigationOpen);
    const [language, setLanguage] = useState(i18n.language);
    const handleChangeLanguage = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
        i18n.changeLanguage(event.target.value)
    };

    const changeScrollingNavigation = (state: boolean) => {
        setOpenScrollingNavigation(state)
        onValueNavigationChange(openScrollingNavigation)
    }

    return (
        <div>
            <div className="top-bar d-flex flex-row">
                <div className="large-content">
                    <div className="d-flex flex-row gap-4 mx-4 align-items-center">
                        <img className="service" height="30px" src="./github-logo.svg" alt="Github logo"
                             onClick={() => openInNewTab("https://github.com/Czajsoon")}/>
                        <img className="service" height="43px" src="./gitlab-logo.svg" alt="Gitlab Logo"
                             onClick={() => openInNewTab("https://gitlab.com/Czajsoon")}/>
                        <img className="service" height="30px" src="./linkedin-logo.svg" alt="LinkedIn Logo"
                             onClick={() => openInNewTab("https://www.linkedin.com/in/jakub-czajkowski-a3280523a/")}/>
                    </div>
                </div>
                <div className="small-content">
                    <div className="d-flex flex-row gap-4 mx-4 align-items-center">
                        <MenuIcon className="burger-icon" onClick={() => changeScrollingNavigation(!openScrollingNavigation)}/>
                    </div>
                </div>

                <div className="large-content">
                    <div className="d-flex flex-column  justify-content-center align-items-end w-100 mx-5">
                        <div className="d-flex flex-row justify-content-end gap-2 w-50">
                            <Select className="language-selector" labelId="label" id="select" onChange={handleChangeLanguage} value={language}>
                                <MenuItem value="pl-PL">
                                    <div className="language-item d-flex gap-3">
                                        <img width="30px" src="./pl-PL.svg"/>
                                        <span>Polski (PL)</span>
                                    </div>
                                </MenuItem>
                                <MenuItem  value="en-US">
                                    <div className="language-item d-flex gap-3">
                                        <img width="30px" src="./en-US.svg"/>
                                        <span>English (EN)</span>
                                    </div>
                                </MenuItem>
                            </Select>
                            <Button className="btn w-25 text-nowrap" variant="contained"
                                    onClick={() => openInNewTab(
                                        i18n.language == "pl-PL"
                                            ? "https://drive.google.com/file/d/1pMFoaETQ5zFpyFs57DqTSobk99YlSkLz/view?usp=sharing"
                                            : "https://drive.google.com/file/d/1EcudVaBW9DvJ-VHyzO6CZd-veZyGidQ4/view?usp=sharing"
                                    )}
                            >
                                {t("download-cv")}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="medium-content">
                    <div className="d-flex flex-column  justify-content-center align-items-end w-100 mx-5">
                        <div className="d-flex flex-row justify-content-center w-100">
                            <div className="d-flex justify-content-start w-50">
                                <Select className="language-selector" labelId="label" id="select" onChange={handleChangeLanguage} value={language}>
                                    <MenuItem value="pl-PL">
                                        <div className="language-item d-flex gap-3">
                                            <img width="30px" src="./pl-PL.svg"/>
                                            <span>Polski (PL)</span>
                                        </div>
                                    </MenuItem>
                                    <MenuItem  value="en-US">
                                        <div className="language-item d-flex gap-3">
                                            <img width="30px" src="./en-US.svg"/>
                                            <span>English (EN)</span>
                                        </div>
                                    </MenuItem>
                                </Select>
                            </div>
                            <div className="d-flex justify-content-end w-50">
                                <Button className="btn w-75" variant="contained"
                                        onClick={() => openInNewTab(
                                            i18n.language == "pl-PL"
                                                ? "https://drive.google.com/file/d/1pMFoaETQ5zFpyFs57DqTSobk99YlSkLz/view?usp=sharing"
                                                : "https://drive.google.com/file/d/1EcudVaBW9DvJ-VHyzO6CZd-veZyGidQ4/view?usp=sharing"
                                        )}
                                >
                                    {t("download-cv")}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="small-content">
                    <div className="d-flex flex-column  justify-content-center align-items-end w-100 mx-3">
                        <div className="d-flex flex-row justify-content-end w-100">
                            <Select className="language-selector" labelId="label" id="select" onChange={handleChangeLanguage} value={language}>
                                <MenuItem value="pl-PL">
                                    <div className="language-item d-flex gap-3">
                                        <img width="30px" src="./pl-PL.svg"/>
                                        <span>PL</span>
                                    </div>
                                </MenuItem>
                                <MenuItem  value="en-US">
                                    <div className="language-item d-flex gap-3">
                                        <img width="30px" src="./en-US.svg"/>
                                        <span>EN</span>
                                    </div>
                                </MenuItem>
                            </Select>
                            <Button className="btn text-nowrap" variant="contained"
                                    onClick={() => openInNewTab(
                                        i18n.language == "pl-PL"
                                            ? "https://drive.google.com/file/d/1pMFoaETQ5zFpyFs57DqTSobk99YlSkLz/view?usp=sharing"
                                            : "https://drive.google.com/file/d/1EcudVaBW9DvJ-VHyzO6CZd-veZyGidQ4/view?usp=sharing"
                                    )}
                            >
                                {t("download-cv")}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                {children}
            </div>
        </div>
    );
}