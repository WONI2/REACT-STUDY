// react component는 대체로 앞글자를 대문자로 표현해서 구별하도록 만듦

import React from "react";

// 캄포넌트 렌더링의 조각 
function SayHello(props) {
    return (

    <div>
      <p>hello</p>
      {props.children}<br/>
      <span>bye</span>
    </div>

    );
}

export default SayHello;