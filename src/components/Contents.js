import { useState, useEffect } from 'react'
// useState : 데이터를 담아서 배열을 관리
// useEffect : fetch api 사용

import axios from 'axios'

const Contents = () => {
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get("https://api.covid19api.com/total/dayone/country/kr")
      console.log(res)
    }

    fetchEvents()
  })

  return (
    <section>
      <h2> 국내 코로나 현황</h2>
      <div className="contents">

      </div>
    </section>
  )
}

export default Contents
