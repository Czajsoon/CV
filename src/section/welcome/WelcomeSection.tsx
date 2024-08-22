import React from "react";
import {Avatar} from "@mui/material";
import "./welcome-section.css";
import {useTranslation} from "react-i18next";

export default function WelcomeSection() {
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'welcome' });

    return (
        <div className="d-flex flex-column align-items-center main-container">
            <div className="large-content">
                <div className="decoration-container">
                    <span>&nbsp;</span>
                </div>
                <div className="d-flex flex-row gap-5 justify-content-center  w-75">
                    <Avatar className="avatar-large" sx={{width: 200, height: 200}} alt="Avatar" src="CV/jcimage.jpg"/>
                    <div className="d-flex flex-column">
                        <h1 className="welcome third-text-color m-0">{t("hi")}</h1>
                        <div className="d-flex flex-row gap-2">
                            <p className="casual-text m-0">{t("myNameIs")}</p>
                            <p className="blue-text-color m-0">{t("nameAndSurname")}</p>
                        </div>
                        <div className="d-flex flex-row gap-2">
                            <p className="casual-text m-0">{t("im")}</p>
                            <p className="blue-text-color m-0">{t("profession")}</p>
                        </div>
                        <span className="divider position-relative bottom-0">
                        &nbsp;
                    </span>
                    </div>
                </div>
                <div className="w-50 mt-3">
                    <p className="description-text m-0">
                        {t("description")}
                    </p>
                </div>
            </div>
            <div className="small-content">
                <div className="decoration-container">
                    <span>&nbsp;</span>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-row gap-3 justify-content-center align-items-center">
                        <Avatar className="avatar-large" sx={{width: 100, height: 100}} alt="Avatar"
                                src="/CV/jcimage.jpg"/>
                        <div className="d-flex flex-column">
                            <h1 className="welcome third-text-color m-0">{t("hi")}</h1>
                            <p className="casual-text m-0">{t("myNameIs")}</p>
                            <p className="blue-text-color m-0">{t("nameAndSurname")}</p>
                            <p className="casual-text m-0">{t("im")}</p>
                            <p className="blue-text-color m-0">{t("profession")}</p>
                        </div>
                    </div>
                    <span className="divider position-relative bottom-0 w-75">
                        &nbsp;
                    </span>
                    <div className="w-75 mt-3">
                        <p className="description-text m-0">
                            {t("description")}
                        </p>
                    </div>
                </div>
            </div>
            <div className="medium-content">
                <div className="decoration-container">
                    <span>&nbsp;</span>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-row gap-3 justify-content-center align-items-center">
                        <Avatar className="avatar-large" sx={{width: 200, height: 200}} alt="Avatar"
                                src="/CV/jcimage.jpg"/>
                        <div className="d-flex flex-column">
                            <h1 className="welcome third-text-color m-0">{t("hi")}</h1>
                            <p className="casual-text m-0">{t("myNameIs")}</p>
                            <p className="blue-text-color m-0">{t("nameAndSurname")}</p>
                            <p className="casual-text m-0">{t("im")}</p>
                            <p className="blue-text-color m-0">{t("profession")}</p>
                        </div>
                    </div>
                    <span className="divider position-relative bottom-0 w-75">
                        &nbsp;
                    </span>
                    <div className="w-75 mt-3">
                        <p className="description-text m-0">
                            {t("description")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}