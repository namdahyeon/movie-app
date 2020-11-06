import { render } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';
import './Home.css';

/*
('https://yts-proxy.now.sh/list_movies.json');

aixos로 영화 API 호출하겠다

axios는 네트워크를 사용함으로 느리다
그래서 axios를 별도의 함수로 만들어서 자바스크립트에게 이 함수는 시간이 필요하고 (async)즉 이 함수는 비동기이다.
axisio.get()
*/


class App extends React.Component {

  state = { //동적 데이터 (데이터값이 바뀐다.)
    isLoading: true, // key:key value
    movies: [], //<여기에 영화 데이터 저장.
  }

  getMovies = async () => { //async : 이것들은 비동기 함수다 라고해줌.
    const{
      data:{
        data:{movies}, // movies에 axios정보가 들어있다.
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count'); // 불러올때까지 자바스크립트 기다리게 함.
    // animation&sort_by=like_count: 애니메이션 장르 & 좋아요 수가 높은 수대로 정렬한다.
    // console.log(movies.data.data.movies);
    this.setState({movies, isLoading: false}); // 키:키값 -> 이름이 동일하면 // 새로운 값을 넣을때, this.setState를 사용한다. // movies: movies -> movies로 표현
  }

  // componentDidMount - 화면이 그려지고 실행되게 함.
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading: false});
    // },6000)
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state; //구조분해할당
    return(
      <section className="container"> 
        {isLoading ? 
          (<div className="loader">
            <span className="loader_text">'Loading...'</span>
          </div>) :
          (<div className="movies">
              {movies.map(movie => ( <Movie 
                                  id={movie.id}
                                  year={movie.year}
                                  title={movie.title}
                                  summary={movie.summary}
                                  poster={movie.medium_cover_image}
                                  genres={movie.genres}
                  /> )
                )
              }
          </div>)
        }
      </section>
      // ? -삼항연산자.true면 앞에 것이 나옴.false면 뒤에 것이 나옴.
    );
  }
}

export default App;