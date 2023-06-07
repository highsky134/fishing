import React from 'react'
import './scss/NsMain.scss'
import banner from './img/banner.png'
import ex from './img/ex.jpg'

const NsMain = () => {
  return (
    <section>
        <div className='banner'><img src={banner} /></div>
       <div className='mainbox'>

        <div className='contentbox'>

            <div className='ship'>
                <div className='title'>
                    <p className='t1'>오늘의 배낚시 > </p>
                    <p className='t2'>더보기</p>
                </div>
                <div className='shipboxs'>
                    <div><img src={ex} /></div>
                    <div><img src={ex} /></div>
                    <div><img src={ex} /></div>
                </div>
            </div>

            <div className='ship'>
                <div className='title'>
                    <p className='t1'>오늘의 배낚시 > </p>
                    <p className='t2'>더보기</p>
                </div>
                <div className='shipboxs'>
                    <div><img src={ex} /></div>
                    <div><img src={ex} /></div>
                    <div><img src={ex} /></div>
                </div>
            </div>

            <div className='ship'>
                <div className='title'>
                    <p className='t1'>오늘의 배낚시 > </p>
                    <p className='t2'>더보기</p>
                </div>
                <div className='shipboxs'>
                    <div><img src={ex} /></div>
                    <div><img src={ex} /></div>
                    <div><img src={ex} /></div>
                </div>
            </div>


        </div>
        <div className='apibox'>
            <div className='exbox'>날씨</div>
        </div>
       </div>
    </section>
  )
}

export default NsMain