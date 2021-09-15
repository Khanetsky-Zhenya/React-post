import React from 'react';
import styles from './OnlinerCard.module.css'
export class OnlinerCard extends React.Component {
    render (){
        const { avatarUrl, sectionTitle, nameNews, commentCounter } = this.props;
        return <div className={styles.wrapper}>
            <div className={styles.news}>
                <img className={styles.news_img} src={avatarUrl} alt="image news" />
                <div className={styles.news_info}>
                    <p className={styles.news_info__section}>{`${sectionTitle}`}</p>
                    <p className={styles.news_info__commentCounter}>{`${commentCounter}`}</p>
                </div>
                <h2 className={styles.news_name}>{`${nameNews}`}</h2>
            </div>
        </div>
    }
}
