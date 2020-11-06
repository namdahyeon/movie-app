import React from 'react';
import Macaron from './Macaron';
import Coffee from './Coffee';
import PropTypes from 'prop-types';

/* 방법1 */
// function Food(props) { //자식컴포넌트 //(괄호 안 props - 매개변수)
//   return (
//     <h1>I Like {props.propsName}</h1>
//   );
// }

/* 방법2 */
// function Food(props) { //구조 분해 할당
//   const {propsName} = props;
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

// /* 방법3 */
// function Food({propsName}) { //구조 분해 할당
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

// function Food({propsName}) { //구조 분해 할당
//   return (
//     <h1>I Like {propsName}</h1>
//   );
// }

function Food({propsname, propsrating, propsid, propsimage}){ // "{}"받아올 내용
  return(
    <div>
      <p>No.{propsid}</p>
      <h1>I Love {propsname}</h1>
      <h2>{propsrating}/5.0</h2>
      <img src={propsimage} alt={propsname} />
    </div>
  );
}
//서버에서 가져온 데이터를 저장하는 변수
//const foodLike = [];

const foodLike = [ // "[]"배열
  {
    id:1,
    name: 'macaron1',
    image: 'https://i.pinimg.com/236x/dc/73/22/dc732232d7ae5680041bb0a4d23b76a9.jpg',
    rating: 5,
  }, // "{}"객체
  {
    id:2,
    name: 'macaron2',
    image: 'https://i.pinimg.com/236x/60/14/18/601418b040a5e78ddcde902065e88dc1.jpg',
    rating: 4.9,
  },
  {
    id:3,
    name: 'macaron3',
    image: 'https://i.pinimg.com/236x/e5/42/ab/e542abbd9dd5d2163c0df0745d98fe2c.jpg',
    rating: 4.5,
  },
  {
    id:4,
    name: 'macaron4',
    image: 'https://i.pinimg.com/236x/82/18/a4/8218a40cf4b9a575878a4c864dbbcc68.jpg',
    rating: 4.3,
  },
  {
    id:5,
    name: 'macaron5',
    image: 'https://i.pinimg.com/236x/0f/85/0c/0f850c4ea23a6060ffdab4a5d9ea873f.jpg',
    rating: 4,
  }
];

const cakes = [ // "[]"배열
  {
    id:1,
    name: 'Cookie Dough Cake',
    image: 'https://i.pinimg.com/236x/18/73/14/1873143b9b3c05c81bf61dfec3130a39.jpg',
  }, // "{}"객체
  {
    id:2,
    name: 'Rainbow Cake',
    image: 'https://i.pinimg.com/236x/6a/9e/12/6a9e12a3d0dd1b872605887a737ece1f.jpg',
  },
  {
    id:3,
    name: 'Soft & Moist Funfetti Cake',
    image: 'https://i.pinimg.com/236x/68/c4/d4/68c4d4cfc04e7b82341e2dcde1dd99a1.jpg',
  }
];


function App() { //부모컴포넌트 //return - App이 호출된 곳으로 보내겠다
  return ( //return 안에서 괄호로 다수의 태그를 사용할때는 태그로 함수들을 묶어줘야한다.
    <> 
      <div>안녕하세요!!</div>
      <Macaron />
      {/* <Food propsName = {"macaron"}/> */}
      {foodLike.map(dish => (
                              <Food 
                              propsname={dish.name} //프롬프스={객체.속성}
                              propsrating={dish.rating}
                              propsimage={dish.image}
                              />
                            ))}
      {cakes.map(cake => (
                              <Food 
                              propsid={cake.id}
                              propsname={cake.name} //프롬프스={객체.속성}
                              propsimage={cake.image}
                              />
                            ))}
      {/* 위의 화살표 함수부분과 동일 표현.
      function map (dish) {
        <Food
          name={dish.name}
          rating={dish.rating}
          image={dish.image}
          />
      }
      */}
      
      
    </>//dish요소 하나하나를 오른쪽처럼 만들어라.
    // "=>": 화살표 함수 - function ~()과 같다.
    //부모컴포넌트(App)에서 자식 컴포넌트(Food)에 props 즉 데이터를 전달하면 데이터가 하나의 객체로 변환되어 자식 컴포넌트의 인자로 전달됨.
  );
}

Food.PropTypes = { //isRequired: 필수로 하게 함
  propsid: PropTypes.number.isRequired,
  propsname: PropTypes.string.isRequired,
  propsimage: PropTypes.string
}

export default App; //App을 사용할 수 있게 밖으로 보낸다(내보낸다)
