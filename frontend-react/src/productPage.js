import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup"
import Button from "react-bootstrap/Button";
import service1 from "./assets/service1.jpg"
import service2 from "./assets/service2.jpg"
import service3 from "./assets/service3.jpg"
import Modal from "react-bootstrap/Modal";
import {FormField} from '@rmwc/formfield';

class ProductPage extends Component{
  state = {
    show: false,
    selected: null
  }
  takeDate = (choice, date)=>{
    this.props.addToCart(choice, date)
  }
  handleShow = (e) => {
    this.setState({
      show: true,
      selected: e
    })
  }
  handleClick = (e) => {
    if (e!=="closing"){
      const choice = e.target.id
      const date = document.getElementById('date').value
      this.setState({
        show: false
      })
      return this.takeDate(choice, date)
    }
      console.log('nothing selected')
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        <h1 className='panel-title text-center'>Best Shop ever</h1>
        <div className='container'>
          <CardGroup>
            <Card style={{ width: '18rem' }} className='cards'>
              <Card.Img variant="top" src={service1} />
              <Card.Body>
                <Card.Title className='text-center'>Economic</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                  Clean your card with some oiling and maintainance with door set work and onsite service work.
                </Card.Text>
                <Button variant="secondary" onClick={()=>this.handleShow('economic')}>Add To Cart</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='cards'>
              <Card.Img variant="top" src={service2} />
              <Card.Body>
                <Card.Title className='text-center'>Premium</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                  premium car service with custom maintainance and premium oil service, with door step.
                </Card.Text>
                <Button variant="primary" onClick={()=>this.handleShow('premium')}>Add To Cart</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='cards'>
              <Card.Img variant="top" src={service3} />
              <Card.Body>
                <Card.Title className='text-center'>Ultimate</Card.Title>
                <Card.Text style={{textAlign: 'center'}}>
                  ultimate car maintainance service, the best you have ever seen, make your car new as ever.
                </Card.Text>
                <Button variant="success" onClick={()=>this.handleShow('ultimate')}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </CardGroup>
          <PickDate handleClick={this.handleClick} show={this.state.show} name={this.state.selected}/>
        </div>
      </div>
    )
  }
}


function PickDate(props) {

  return (
    <>
      <Modal show={props.show} onHide={() => props.handleClick('closing')}>
        <Modal.Header closeButton>
          <Modal.Title>Select Day</Modal.Title>
        </Modal.Header>
        <Modal.Body>Select the date you want us to come
        <FormField>
          <input type="date" id="date" />
        </FormField>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" id ='closing' onClick={(e) => props.handleClick(e)}>
            Close
          </Button>
          <Button variant="primary" id = {props.name} onClick={(e) => props.handleClick(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductPage