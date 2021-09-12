import React from 'react';
import style from './style.css'
export class OnlinerCard extends React.Component {
    render (){
        const { avatarUrl, sectionTitle, nameNews, commentCounter } = this.props;
        return <div className="wrapper">
            <div className="news" >
                <img className="news-img" src={avatarUrl} alt="image news" />
                <div className="news-info">
                    <p className="news-info__section">{`${sectionTitle}`}</p>
                    <p className="news-info__commentCounter">{`${commentCounter}`}</p>
                </div>
                <h2 className="news-name">{`${nameNews}`}</h2>
            </div>
        </div>
    }
}
