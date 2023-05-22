// import logo from './logo.svg';
// import './App.css';
// import SayHello from './SayHello';

import ChangeEvent from "./component/chap01_event/ChangeEvent";
import ClickEvent from "./component/chap01_event/ClickEvent";
import SubmitEvent from "./component/chap01_event/SubmitEvent";

function App() {
  
   // <> 
    // {/* // 이름없는 태그를 작성하면 부모태그 없는 형제로 작성할 수 있음  */}
    //   <h1 className='aaa'>신기한 REACT</h1> 
    //   {/* //실제로 나타날 떄는 class로 나타남.  */}
    //   <label htmlFor='aaa'>gg</label> 
    //   {/* //label에서 for를 작성할 때 htmlFor로 작성해 줄 것. 
    //                                  // 부모태그 없는 형제가 존재하는 경우 에러가 나므로 부모태그로 감싸줄 것  */}
    // </>   
    // {/* 부품화 시키는 것 : component */}



  
  // ()는 jsx의 영역. 이 안에서는 스크립트코드를 직접 쓸 수 없음. 사용하려면 {}를 써야하는데, 변수나 함수호출문만 사용 가능

// const looping = () => {
// const helloList = [];

//   for(let i = 0; i< 5; i++ ){
//     helloList.push(<SayHello />);

//   }
//   return helloList;
// }

// {}안에 함수 호출문이나 변수 참조를 할 수 있음

  return (
   
  <>
      
    
<SubmitEvent />

  </>

    );
}

export default App;
