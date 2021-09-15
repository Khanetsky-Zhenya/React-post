import React from "react";
import styles from "./GithubCard.module.css"
export class GithubCard extends React.Component {
    render() {
        const { title, type, programmingLanguage, dateUpd } = this.props;
        return <div className={styles.wrapper}>
            <div className={styles.repository}>
                <div className={styles.repository_header}>
                    <div className={styles.repository_header_firstFlex}>
                        <h2 className={styles.repository_header_title}>{`${title}`}</h2>
                        <p className={styles.repository_header_type}>{`${type}`}</p>
                    </div>
                    <button className={styles.repository_header_button}>   &#9734; Star</button>
                </div>
                <div className={styles.repository_footer}>
                    <div className={styles.repository_footer_firstFlex}>
                        <p className={styles.repository_footer_programmingLanguage}><span>&#9899;</span> {`${programmingLanguage}`}</p>
                        <p className={styles.repository_footer_dateUpd}>{`${dateUpd}`}</p>
                    </div>
                    <button className={styles.repository_footer__activity}>activity</button>
                </div>
            </div>
        </div>
    }
}
