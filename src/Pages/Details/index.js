import "./style.css";
import { BiCheckShield } from "react-icons/bi";
import { RiTruckFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Details() {

  const params = useParams();

  const[quantidade, setQuantidade] =useState(1);
  const [producto, setProduct] = useState({});

  useEffect(() => {
    getProductsByid();
  }, []);

  async function getProductsByid(){
    const response = await fetch(`http://3.16.56.233:8080/products/${params.id}`);
    const data = await response.json();
    setProduct(data)
  }

  function handleAddQuantidade(){
    if(quantidade > 1){
      setQuantidade(quantidade - 1);
    }	
  }


  return (
    <section id="products" className="container">

      
      <div className="container-up container-fluid">
        <div className="container-img container-fluid ">
          <img src={producto.image} className="img-fluid" alt="foto produto" />
        </div>

        <div className="container-product container-fluid">
          <h3>{producto.title}</h3>
          <h3>Valor: R$ {producto.price}</h3>
          <h3>parcele em 12x sem juros </h3>
          <h4>
            <RiTruckFill size={25} color="black" /> Envio para todo o país
          </h4>
       
          <h4>Quantidade</h4>

          <div>
            <span>{quantidade}</span>
            <button className='button' onClick={()=>setQuantidade(quantidade+1)}> + </button>
            <button className='button' onClick={()=>handleAddQuantidade()}> - </button>
          </div>

          <div className="container-fluid text-center">
            <button className="button-buy"> Comprar agora </button>
            <button className="button-add"> Adicionar ao carrinho </button>
          </div>
          <h4>
            <BiCheckShield size={25} color="black" /> 90 dias de garantia
          </h4>
        </div>
      
      </div> 

      <div className="container-info-title">
        <h2>Descrição</h2>
        <hr/>
      </div>

      <div className="container-info">
        <p>{producto.description}</p>
      </div>
    </section>
  );
}
