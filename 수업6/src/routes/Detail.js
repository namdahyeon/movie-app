
//route props
//라우팅 대상이되는 컴포넌트에 넘겨주는 기본 props

import React, { Component } from 'react';
import './Detail.css';

export default class Detail extends Component {
    render(props) {
        const {location} = this.props;
        return (
            <div className="detail">
                <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                <div className="detail_data">
                    <h3 className="detail_title" style={{backgroundColor:'#eee'}}>{location.state.title}</h3>
                    <h4 className="detail_year">{location.state.year}</h4>
                    <ul className="detail_genres">
                        {location.state.genres.map((genres, index) => {
                            return (
                                <li key={index} className="detail_genre">{genres}</li>
                            );
                        })}
                    </ul>
                    <p className="detail_summary">{location.state.summary.slice(0,180)} ...</p>
                </div>
            </div>
        )
    }
}

