import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
      <>
          <Container>
              <Row>
                  <Col className="text-center py-3">copyright &copy; SHOPPER</Col>
              </Row>
          </Container>
    </>
  )
}

export default Footer
