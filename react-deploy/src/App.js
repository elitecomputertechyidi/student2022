import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Card className="mb-6" style={{color: "red" }}>
          <Card.Img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg" height="150" width="200"/>
          <Card.Body>
            <Card.Title>
            VIRTUAL SCHOOL OF NIGERIA
              </Card.Title>
              <Card.Text>
              Learn at your convenient place and time
              </Card.Text>
              <Button variant="primary">read more</Button>
          </Card.Body>
        </Card>

        <Alert variant="success">This is a button</Alert>
        <Button>
Test Button
        </Button>
       
       
        <Breadcrumb>
        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
        </Breadcrumb>

        <Form>
          <Row>
            <Col md>
          <Form.Group  controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Example@email.com" />
          <Form.Text className="text-muted">
            We'll never share your email address, trust us!
          </Form.Text>
          </Form.Group>
          </Col>
          <Col md>
          <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          </Col>
          <Button variant="secondary">Log In</Button>
          </Row>
        </Form>
        
        </Container>
      </header>
    </div>
  );
}

export default App;

