import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formatMoney } from '../../Administracao/useUtils'

export default function Carousel({ products }) {
  const handleDragStart = e => e.preventDefault()

  var ProdutosCar = products.slice(13, 17).map(product => (
    <div className="Box_carro" key={product.id}>
      <img
        className="image_box"
        src={product.image}
        alt={product.title}
        onDragStart={handleDragStart}
      />
      <div className="d-grid gap-2">
        <Link to={`/details/${product.id}`}>
          <Button className="button_carro" variant="outline-dark">
            Comprar por {formatMoney(product.price)}
          </Button>
        </Link>
      </div>
    </div>
  ))

  return (
    <div className="container box_geral">
      <AliceCarousel
        responsive={{
          0: {
            items: 1
          },
          1024: {
            items: 3
          }
        }}
        mouseDragEnabled
        autoPlay
        autoPlayInterval={2000}
        disableButtonsControls={false}
        disableDotsControls={true}
        mouseTracking
        items={ProdutosCar}
        infinite
      />
    </div>
  )
}
