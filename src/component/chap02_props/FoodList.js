import React from 'react'
import FoodItem from './FoodItem'
import SayHello from '../../SayHello.js'

const FoodList = () => {

    // fetch를 통해서 음식목록 json을 불러옴

const foods = {
    id : 123,
    foodList : [
        {
            fName: '탕수육',
            price: 15000,
            id : 'chinese'
        },
        {
            fName: '지삼선',
            price: 18000,
            id: 'chinese'
        },
        {
            fName: '칠리새우',
            price: 20000,
            id: 'chinese'
        }
        
    ]
}

  return (

    
    <ul>
       <SayHello> 
            <a href='www.naver.com'>NAVER</a>

       </SayHello>
        {
            foods.foodList.map(f => <FoodItem foodName={f.fName} price={f.price} foodId={f.id} />)
            // MAPPING해서 반복시키는 것 
        }

    
    {/* <FoodItem foodName='순두부찌개' price={7000} foodId='korean'/>
    <FoodItem foodName='돈까스' price={7000} foodId='japanese'/>
     */}
    </ul>



  )
}

export default FoodList