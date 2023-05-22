import React from 'react'
import './style.css';

// 플러그인 설치 후 rafce 

const ClickEvent = () => {
//   const $btn1 = document.getElementById('btn1');
//   $btn1.onclick = e =>{
//     alert('GOOD!');
//   } 순서상 문제가 생기기 때문에 이런식으로 만들 수 없음 
  
const greeting = e => {
    alert('HI!')
};

const changeBox = e =>{

    const $box = document.querySelector('.box')
    $box.style.background = 'yellow';
    $box.style.width='100px';
    $box.style.height='100px';

};

    return (
    <>
        <button id='btn1' onClick={() => alert('GOOD!')}>CLICK!</button>
        <button id='btn2' onClick={greeting}>CLICK2</button>    
        {/* 함수를 정의하고 쓸 때, 함수 이름 뒤에 소괄호 붙이지 않는 것 주의! */}
        <button id='btn3' onClick={changeBox}>CLICK3</button>

        <div className='box'></div>
   </>
    );
}

export default ClickEvent