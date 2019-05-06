import React from 'react'; 
import  Navbar  from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import  NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import CommerceApi from './CommerceApi'
// import _ from 'lodash';
import {updateProducts} from './Actions'
import { connect } from 'react-redux';

const App = () => {
    return (
      <div>
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Products</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Product Details</Nav.Link>
      <Nav.Link href="#link">Cart</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<CommerceApi />
</div>
    )
}

const mapStateToProps = (state) => {
  console.log("state", state)
  console.log(state.products.products)
  return {
    products: state.products.products, // from Reducer.products
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    updateProducts: (products) => {dispatch(updateProducts(products))}
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

