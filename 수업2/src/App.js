import React from 'react';
import Cake from './Cake';

//state:
// 컴포넌트의 상태 state를 저장하고 변경할 수 있는 데이터
// 동적 데이터, 변경될 가능성이 있는 데이터를 다룰 때 사용,
// 클래스형 컴포넌트(중요!)에서 사용하는 개념, 객체형 데이터(형태)

class App extends React.Component {

  //컴포넌트의 생명주기 함수
  constructor(props){
    super(props);
    console.log('constructor함수는 클래스형 컴포넌트가 생성할 때 호출됨')
  }

  componentDidMount(){
    console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate함수는 화면이 새로그려지면 즉 업데이트되면 실행되는 함수')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount함수는 컴포넌트가 죽을 때 실행되는 함수')
  }



  state = {
    count: 0, // count- 키 값
    sum: 0,
    avg: 0,
  };

  // function add(){
  //   console.log('더하기');
  // }
  add = () => {
    console.log('더하기');
    // this.state.count += 1; //render함수를 실행해줘야 값이 바뀐다.(상단의count는 바뀜)
    // this.setState({count:this.state.count + 1}); //setState함수를 사용해야 값을 바꿀 수 있음. (set저장/get가져오기)
    this.setState( //setSatte()함수의 인자로 함수를 전달하면 성능 문제없이 
      current => ({ //current는 this.state
        count: current.count +1,
        sum: current.sum +1,
        avg: current.avg +1,
      }));
  }

  minus = () => {
    console.log('빼기');
    // this.state.count -= -1;
    this.setState(
      current => ({
        count:current.count -1
      }));
  }

  //set


  render(){
    return(
    <>
      <div>
        <h1>현재 숫자는 {this.state.count} 입니다</h1>
        <button onClick={this.add}>더하기</button> {/* 자바스크립트는 onclick / JSX는 onClick. 대문자 주의!! */}
        <button onClick={this.minus}>빼기</button>
      </div>
      <Cake/>
    </>
    ); 
  }



}

export default App;