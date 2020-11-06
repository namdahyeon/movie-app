import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({id, title, year, summary, poster, genres}){
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie_data">
                <h3 className="movie_title" style={{backgroundColor:'#eee'}}>{title}</h3>
                <h4 className="movie_year">{year}</h4>
                <ul className="movie_genres"> {/* 장르 갯수에 맞게 li를 생성한다. */}
                    {genres.map((genre,index) => {
                        return ( /* "return" - ~를 내보낸다 */
                            <li key={index} className="movie_genre">{genre}</li>
                        );
                    })} {/* genres는 배열이므로 ".map()"사용 가능 */}
                </ul>
                <p className="movie_summary">{summary.slice(0,180)} ...</p> {/* "slice"메소드: 0~180까지 추출하겠다 */}
            </div>
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

//SPA (single page application)
// npm install react-router-dom  >>설치(터미널)
// router라우터는 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러옴
// Route 에는 2가지 props를 전달,URL을 위한  path props 와 URL에 맞는 컴포넌트를 불러주기 위한 component props