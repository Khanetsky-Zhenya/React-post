import React from 'react';
import style from './style.css'
export class RabotaByCard extends React.Component {
    render (){
        const { title, nameOrg, region, mainDescription, secondDescription, date } = this.props;
        return <div className="wrapper">
            <div className="vacancy" >
                <h2 className="vacancy-title">{`${title}`}</h2>
                <p className="vacancy-nameOrg">{`${nameOrg}`} &#10003;</p>
                <p className="vacancy-region">{`${region}`}</p>
                <p className="vacancy-mainDescription">{`${mainDescription}`}</p>
                <p className="vacancy-secondDescription">{`${secondDescription}`}</p>
                <div className="vacancy-footer">
                    <button>Откликнуться</button>
                    <p className="vacancy-date">{`${date}`}</p>
                </div>
            </div>
        </div>
    }
}
