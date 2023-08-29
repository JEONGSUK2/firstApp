import React, { useState } from 'react'
//import "./../App.css" css를 연결하고싶을 때

function Content(props) {
let [title, setTitle] = useState(["쌍둥이 아기판다","쌍둥이 아기판다","주토피아 동물 아카데미","귀엽게 찰칵!"])
let [desc, setDesc] = useState(["스페셜 이벤트","이름을 지어주세요","판다는 곰이 맞을까?","에버랜드 AR필터"])


let [good, setGood] = useState(0)
// setGood = useState값과 동일
function goodFun(){
    setGood(good+1)
}
function Change(){
    let copy = [...title];
    copy[0] = "쌍둥이 아기판다77"
    setTitle(copy);
    setTitle(title);

    let copy2 = [...desc];
    copy2[2] = "판다는 곰이맞음"
    setDesc(copy2);
    // 대괄호를 없애는 코드
}
let [modalChk, setModalChk] = useState(false);
function Modal(){
    // if(modalChK === false){
    //     setModalChk(true)
    // }else{
    //     setModalChk(false)
    // }
    // (modalChk === true ? setModalChk(false) : setModalChk(true))
    setModalChk(!modalChk)
}

return (
<>
  <div className="content-item" onClick={Modal}>
<img src="https://via.placeholder.com/320" alt="테스트" />


<h3 className='font-bold text-2xl my-1 text-green-500'>{title[props.arrayNum]}</h3>
<p>{desc[props.arrayNum]}</p>
<p onClick={goodFun}>👍{good}</p>
<button onClick={Change}>수정</button>
</div>
{
    (modalChk === true && <div className='window' onClick={Modal}></div>)
}
    
</>
 )
}

export default Content