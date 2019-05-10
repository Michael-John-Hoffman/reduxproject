import React, { Component } from 'react'; 
import  Navbar  from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import {updateProducts, search} from './Actions'
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/CommerceApi">Products</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/CartPage">Cart</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" onChange={e => {this.setState({search: e.target.value})}} className="mr-sm-2" />
            
            <Button onClick={() => {
              this.props.search(this.state.search)}} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    //products: state.products.products, // from Reducer.products
    route: state.products.route
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    updateProducts: (products) => {dispatch(updateProducts(products))},
    search: (category) => {dispatch(search(category))}
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

