import "./contact-section.css"
import SectionTitle from "../title/SectionTitle";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useTranslation} from "react-i18next";

export default function ContactSection(){
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'contact' });

    return (
        <div>
            <SectionTitle title={t("title")}/>
            <div className="d-flex w-100 justify-content-center align-items-center">
                <div className="d-flex flex-column w-75 contacts">
                    <div className="d-flex flex-row my-3 gap-2">
                        <p>{t("email")}</p>
                        <p className="email-contact-value">kubaczajkowski25@gmail.com</p>
                    </div>
                    <div className="d-flex flex-row mb-3 gap-2">
                        <p>{t("phone")}</p>
                        <p className="phone-contact-value">+48 533 403 063</p>
                    </div>
                </div>
            </div>
        </div>
    );
}