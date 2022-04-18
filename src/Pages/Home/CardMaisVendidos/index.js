import { Card, Button } from "react-bootstrap";
import "./style.css";
import { useEffect, useState } from "react";
import { getAllProducts } from '../../../Service/Api';


export default function CardMaisVendidos() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(data => setProducts(data.content));
  }, []);

    return (
  <div className="group_card container">
  {/* slice limita o número de produtos que serão exibidos */}
  {products.slice(0, 3).map((product) => (
  <Card className="box_card" key={product.id}>
    <div className="box_imageMaisvend">
    <Card.Img className="image_maisvend" variant="top" src={product.image} />
    </div>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>{product.description}</Card.Text>
    </Card.Body>
    <Card.Footer className="d-grid gap-2">
    <Button className="link-buy" variant="outline-dark" size="lg">Comprar por R$ {product.price}</Button>
    </Card.Footer>
  </Card>
  ))}
  </div>
);
}