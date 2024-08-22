import "./edu-position.css"
import {useTranslation} from "react-i18next";

interface Props {
    fieldOfStudy: string;
    location: string;
    specialization: string;
    time: string;
    kind: string;
}

export default function EduPosition(props: Props) {
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'education.edu-position' });

    return (
        <div className="my-5">
            <div className="large-content">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row w-75">
                        <div className="d-flex flex-column w-75">
                            <div className="field-of-study">
                                <p>{props.fieldOfStudy}</p>
                            </div>
                            <div className="location">
                                <p>{props.location}</p>
                            </div>
                            <div className="specialization">
                          <span className="d-flex flex-row gap-2 flex-nowrap">
                              <p>{t("spec")} </p>
                              <p className="spec-name">{props.specialization}</p>
                          </span>

                            </div>
                            <div className="edu-time">
                                <p>{props.time}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center kind">
                            <p className="text-end text-nowrap">{props.kind}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="medium-content">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row w-75 justify-content-center align-items-center">
                        <div className="d-flex flex-column ">
                            <div className="field-of-study">
                                <p>{props.fieldOfStudy}</p>
                            </div>
                            <div className="location">
                                <p>{props.location}</p>
                            </div>
                            <div className="specialization">
                              <span className="d-flex flex-row gap-2 flex-nowrap">
                                  <p>{t("spec")}  </p>
                                  <p className="spec-name text-nowrap">{props.specialization}</p>
                              </span>
                            </div>
                            <div className="edu-time">
                                <p>{props.time}</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center kind my-4">
                                <p className="text-end text-nowrap">{props.kind}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="small-content">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-row w-75 justify-content-center align-items-center">
                        <div className="d-flex flex-column ">
                            <div className="field-of-study">
                                <p>{props.fieldOfStudy}</p>
                            </div>
                            <div className="location">
                                <p>{props.location}</p>
                            </div>
                            <div className="specialization">
                              <span className="d-flex flex-row gap-2 flex-nowrap">
                                  <p>{t("spec")}  </p>
                                  <p className="spec-name text-nowrap">{props.specialization}</p>
                              </span>
                            </div>
                            <div className="edu-time">
                                <p>{props.time}</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center kind my-4">
                                <p className="text-end text-nowrap">{props.kind}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}