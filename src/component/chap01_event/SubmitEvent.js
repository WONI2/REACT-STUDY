import React from 'react'

const SubmitEvent = () => {
    const send = e => {
        e.preventDefault(); //submit기능 중지

      const $nick =  document.getElementById('nickName');
      console.log($nick.value);

    };

const buttonStyle = {
    color : 'yellow',
    backgroundColor: 'orangered',
    fontSize : '1.2em'

};

  return (
    // action을 넣어서 submit을 진행시키지 않도록 주의. 
    <form onSubmit={send}>
        <input type='text' id='nickName' name='nick'/>
        <button style={buttonStyle} type='submit'>확인</button>
    </form>
    
  )
}

export default SubmitEvent