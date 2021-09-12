import React from 'react';
import style from './style.css'
export class TheFacebookCard extends React.Component {
    render (){
        const { avatarUrl, firstName, secondName, career, text, like, reply, time } = this.props;
        return <div className="wrapper">
            <div className="post">
                <img className="post-img"src={avatarUrl} alt="photo user" />
                <div className="info">
                    <div className="info-title">
                        <h2 className="info-title__name">{`${firstName}`}</h2>
                        <h2 className="info-title__secondName">{`${secondName}`} </h2>
                        <h2 className="info-title__career">&middot; {`${career}`}</h2>
                    </div>
                    <p  className="info-text">{`${text}`}</p>
                    <div className="info-subtitle">
                    <p  className="info-subtitle__like">{`${like}`} &middot;</p>
                    <p  className="info-subtitle__reply">{`${reply}`} &middot;</p>
                    <p  className="info-subtitle__time">{`${time}`}</p>
                    </div>
                </div>
            </div>
        </div>
    }
}
