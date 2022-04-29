import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { BsAlarm } from 'react-icons/bs'
import './style.css'
import { Link } from 'react-router-dom'
import { formatMoney } from '../../Administracao/useUtils'

const Countdown = ({ products }) => {
  // const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')

  let interval = useRef()

  const startTimer = () => {
    const countDownDate = new Date('April 27, 2025 23:59:59').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      // const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (distance < 0) {
        clearInterval(interval.current)
        // setTimerDays("00")
        setTimerHours("00")
        setTimerMinutes("00")
        setTimerSeconds("00")
      } else {
        // setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer()
  })

  return (
    <div className="container Box_promocao">
      {products.slice(13, 14).map(product => (
        <div key={product.id} className="timer-container">
          <div className="timer-box">
            <div className="timer">
              <div>
                <h2 className="h2_timer">
                  Promoção <BsAlarm />
                </h2>
                <h2 className="h2_timer">{product.title}</h2>
              </div>
              <div className="contador">
                {/* <div>
                  <p className="p_timer">{timerDays}</p>
                  <p className="p_timer">
                    <small>Dias</small>
                  </p>
                </div>
                <span className="span_timer">:</span> */}
                <div>
                  <p className="p_timer">{timerHours}</p>
                  <p className="p_timer">
                    <small>Horas</small>
                  </p>
                </div>
                <span className="span_timer">:</span>
                <div>
                  <p className="p_timer">{timerMinutes}</p>
                  <p className="p_timer">
                    <small>Minutos</small>
                  </p>
                </div>
                <span className="span_timer">:</span>
                <div>
                  <p className="p_timer">{timerSeconds}</p>
                  <p className="p_timer">
                    <small>Segundos</small>
                  </p>
                </div>
              </div>
              <div className="d-grid gap-2">
                <Link to={`/details/${product.id}`}>
                  <Button
                    className="button_Timer"
                    variant="outline-dark"
                    size="lg"
                  >
                    Compre agora por {formatMoney(product.price)}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="img_card">
            <img
              className="imagem_count img-fluid"
              alt={product.title}
              src={product.image}
            ></img>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Countdown
