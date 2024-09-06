import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import Music from '../components/contents/Music'

const Home = () => {
  return (
    <Main title = "Ahn My 유튜브 채널" 
    description="유튜브 채널 방문을 환영합니다.">

     <Today />
     <Developer />
     <Music />

   
    </Main>
  )
}

export default Home
