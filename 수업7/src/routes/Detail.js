//route props
//라우팅 대상이되는 컴포넌트에 넘겨주는 기본 props

// 리다이렉트
// detail컴포넌트를 직접 주소를 입력해서 들어가면 props가 전달이 안됨. 그때 강제로 Home 컴포넌트로 돌려보내는 것.

import React, { Component } from 'react';
import './Detail.css';

export default class Detail extends Component {
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        console.log(location.state);
        if(location.state){
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
        }else{
            return null;
        }
    }
}

