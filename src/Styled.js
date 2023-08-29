import React from 'react'
import { styled } from 'styled-components'

const Style = styled.div`
    background-color : orange;
    font-size: 3rem;
    ul{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
`


function Styled() {
    let Menu = ["메뉴1","메뉴2","메뉴3","메뉴4","메뉴5"];
  return (
    <Style>
        <ul>
            {
                Menu.map((el,i)=>{
                    return <li className='text-center' key={i}>{el}</li>
                })
            }
            
        </ul>
    </Style>
  )
}
// map문의 경우 고유값(key)값을 설정해야한다. 그래서 key={i}를 통해 키값을 적어주자. 중복을방지
// 실제로는 인식되지 않음
export default Styled