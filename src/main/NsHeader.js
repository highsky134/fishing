import React from 'react'

import './scss/NsHeader.scss'
import logoPath from './img/logo.png'
export const NsHeader = () => {
  return (
    <header>
      <div className='header1'>
        <div className='hdleft'>

        <img src={logoPath}/>
        <ul>
          <li>배낚시</li>
          <li>낚시터</li>
          <li>클래스</li>
          <li>커뮤니티</li>
        </ul>
        </div>
   
        <div>
          {/* <div>사장님 등록</div> */}
          {/* <img src="#" alt="프로필" /> */}
          <button className='userLogin'>로그인</button>
        </div>
      </div>
   
    </header>

  )
}
