import React, { useState, useEffect } from 'react'

const Counter = () => {

    // const [초기값을 담을 변수, 변경해주는 함수이름 ] = useState(상태관리하고 싶은 초기값);
    const [number, setNumber] = useState(0);
    const [nick, setNick] = useState('익명');

    const increase = () => {
        // number++;
        setNumber(number+1);
    };
    const decrease = () => {
        // number--;
        setNumber(number-1);
    };  

const changeNick = () => {setNick('찰리')}; 

// useEffect : 1. 화면이 처음 렌더링(마운트) 될 때 자동 호출되는 함수 
//             2. 상태값이 변경될 떄마다 호출 
//             3. 실행순서는  '1. component function execute! ' -> '2. rendered html!' -> '3. useEffect call' -> `4. nick : ${nick}, number : ${number}`
//             4. 첫 렌더링 시에만 useEffect를 호출하고 싶다면 두번째 파라미터로 빈 배열(의존성 배열- 빈배열)을 넣으면 된다  -- 모든 변수 변해도 업데이트 안되도록 할 때 빈배열
//             5. 의존성 배열에 상태변수 넣으면 해당 상태변수가 업데이트 될 때마다 useEffect가 재호출
// useEffect는 

useEffect(() => {
    //화면이 처음 렌더링 될 때 서버 api를 호출하는 경우 
    // 처음 한 번 호출 후 또 호출 할 필요가 있을까?
    console.log('3. useEffect call');
    console.log(`4. nick : ${nick}, number : ${number}`);
        }, [nick]);

console.log('1. component function execute! ');

  return (
        <> 
            {console.log('2. rendered html!')}
            <h1>닉네임 : {nick}</h1>
            <h2>{number}</h2>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={changeNick}>닉네임변경</button>
        </> 
    )
}

export default Counter