import { Card, Button } from 'react-bootstrap'
import './style.css'
import { Link } from 'react-router-dom'
import { formatMoney } from '../../Administracao/useUtils'

export default function CardNovos({products}) {

  return (
    <div className="group_card container">
      {/* slice limita o número de produtos que serão exibidos */}
      {products.slice(0, 4).map(product => (
        <Card
          className="box_cardNovos"
          style={{ width: '18rem' }}
          key={product.id}
        >
          <div className="box_imageNovos">
            <Card.Img
              className="image_novos"
              variant="top"
              src={product.image}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text className="Text_price">
              Apenas {formatMoney(product.price)}
            </Card.Text>
            <Card.Footer>
              <div className="d-grid gap-2 Box_botao_novos">
                <Link to={`/details/${product.id}`}>
                  <Button className="link-buy" variant="outline-dark" size="lg">
                    Comprar por {formatMoney(product.price)}
                  </Button>
                </Link>
              </div>
            </Card.Footer>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
