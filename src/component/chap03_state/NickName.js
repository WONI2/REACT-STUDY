import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NickName = props => {
  

    // useState 훅은 배열을 리턴. 0번에는 상태변수값, 1번에는 상태변수값을 변경하는 setter 함수가 들어있음
    // useState('a') : 면 0번에 'a'가 나타나는 것
    // const statement =  useState('김철수');


        // 배열이니까 디스트럭쳐링으로 표현 가능 
        const [nickName, setNickName] = useState('김철수');

    // const nickName =statement[0];
    // const setNickName = statement[1];

    // console.log('statement: ',statement);

    // let nickName= '김철수';

    const changeNickName = e => {
        console.log('changeNickName call');
        
        // nickName = '찰스김';
        setNickName('찰스김');
        console.log('nickName :' , nickName);
    }

    return (

        <>
            <h1>Hello {nickName}</h1>
            {/* <button className='btn' onClick={changeNickName}>뿅</button> */}
            <button className='btn' onClick={() => setNickName('Charlie')}>뿅</button>
        </>  
  
    )
}

NickName.propTypes = {}

export default NickName