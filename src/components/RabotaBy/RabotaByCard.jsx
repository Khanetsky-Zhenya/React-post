import React from 'react';
import styles from './RabotaByCard.module.css'
export class RabotaByCard extends React.Component {
    render (){
        const { title, nameOrg, region, mainDescription, secondDescription, date } = this.props;
        return <div className={styles.wrapper}>
            <div className={styles.vacancy}>
                <h2 className={styles.vacancy_title}>{`${title}`}</h2>
                <p className={styles.vacancy_nameOrg}>{`${nameOrg}`} &#10003;</p>
                <p className={styles.vacancy_region}>{`${region}`}</p>
                <p className={styles.vacancy_mainDescription}>{`${mainDescription}`}</p>
                <p className={styles.vacancy_secondDescription}>{`${secondDescription}`}</p>
                <div className={styles.vacancy_footer}>
                    <button className={styles.vacancy_button}>Откликнуться</button>
                    <p className={styles.vacancy_date}>{`${date}`}</p>
                </div>
            </div>
        </div>
    }
}
