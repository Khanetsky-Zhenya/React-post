import React from 'react';
import styles from './TheFasebookCard.module.css'
export class TheFacebookCard extends React.Component {
    render (){
        const { avatarUrl, firstName, secondName, career, text, like, reply, time } = this.props;
        return <div className={styles.wrapper}>
            <div className={styles.post}>
                <img className={styles.post_img} src={avatarUrl} alt="photo user" />
                <div className={styles.info}>
                    <div className={styles.info_title}>
                        <h2 className={styles.info_title__name}>{`${firstName}`}</h2>
                        <h2 className={styles.info_title__secondName}>{`${secondName}`} </h2>
                        <h2 className={styles.info_title__career}>&middot; {`${career}`}</h2>
                    </div>
                    <p  className={styles.info_text}>{`${text}`}</p>
                    <div className={styles.info_subtitle}>
                    <p  className={styles.info_subtitle__like}>{`${like}`} &middot;</p>
                    <p  className={styles.info_subtitle__reply}>{`${reply}`} &middot;</p>
                    <p  className={styles.info_subtitle__time}>{`${time}`}</p>
                    </div>
                </div>
            </div>
        </div>
    }
}
