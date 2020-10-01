import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup"
import Button from "react-bootstrap/Button";
import service1 from "./assets/service1.jpg"
import service2 from "./assets/service2.jpg"
import service3 from "./assets/service3.jpg"
class ProductPage extends Component{
  render() {
    return (
      <div style={{width: '100%'}}>
        <h1 className='panel-title text-center'>Best Shop ever</h1>
        <div className='container'>
          <CardGroup>
            <Card style={{ width: '18rem' }} className='cards'>
              <Card.Img variant="top" src={service1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='cards'>
              <Card.Img variant="top" src={service2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='cards'>
              <Card.Img variant="top" src={service3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    )
  }
}

export default ProductPage