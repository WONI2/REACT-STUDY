import React from 'react'

const FoodItem = ({foodId: Id,foodName,price}) => {
// 디스트럭쳐링으로 props였던 것들을 분해해 줌 
    // console.log('props : ',props);
  return (
    
    <li id={Id}>{foodName}({price}원)</li>
    
    )

}

export default FoodItem
