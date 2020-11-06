import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, title, year, summary, poster}){
    return(
        <div>
            <img src={poster} alt={title} title={title} />
            <h1>영화제목 : {title}</h1>
            <h2>개봉일 : {year}</h2>
            <p>줄거리 : {summary.slice(0,180)} ...</p> {/* "slice"메소드: 0~180까지 추출하겠다 */}
            <span>No. {id}</span>
            {/* <span>장르 : {genre}</span> */}
        </div>
    );
}

/* const Movies = [
    {//movie1

    },
    {//movie2
        
    }
] */

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired, //string.isRequired : 문자가 아니면 에러가 나게 한다.
    poster : PropTypes.string.isRequired,
};

export default Movie;