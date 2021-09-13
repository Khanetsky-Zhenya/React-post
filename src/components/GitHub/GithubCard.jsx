import React from "react";
import style from "./style.css"
export class GithubCard extends React.Component {
    render() {
        const { title, type, programmingLanguage, dateUpd } = this.props;
        return <div className="wrapper">
            <div className="repository" >
                <div className="repository-header">
                    <div className="repository-header-firstFlex">
                        <h2 className="repository-header_title">{`${title}`}</h2>
                        <p className="repository-header_type">{`${type}`}</p>
                    </div>
                    <button className="repository-header_button">   &#9734; Star</button>
                </div>
                <div className="repository-footer">
                    <div className="repository-footer-firstFlex">
                        <p className="repository-footer_programmingLanguage"><span>&#9899;</span> {`${programmingLanguage}`}</p>
                        <p className="repository-footer_dateUpd">{`${dateUpd}`}</p>
                    </div>
                    <button className="repository-footer_activity">activity</button>
                </div>
            </div>
        </div>
    }
}
