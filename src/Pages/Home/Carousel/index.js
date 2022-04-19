import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { getAllProducts } from "../../../Service/Api";

export default function Carousel() {

  const [products, setProducts] = useState([]);
  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
    getAllProducts().then(data => setProducts(data.content));
  }, []);
  
  var ProdutosCar = products.slice(11, 15).map((product) => (
    <div className='Box_carro' key={product.id}>
      <img className='image_box' src={product.image} onDragStart={handleDragStart} />
      <div className="d-grid gap-2">
        <Button className='button' variant="outline-dark"><p className='Text_button'>Comprar por R$ {product.price}</p></Button>
      </div>
    </div>
    ))

  return (

    
    <div className='container box_geral'>
    
    <AliceCarousel 
    responsive={ {
      0: {
          items: 1,
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
      infinite/>
      
      </div>

  );
};