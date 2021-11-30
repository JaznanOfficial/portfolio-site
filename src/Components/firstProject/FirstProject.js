import React from 'react';
import { Card, Col, Row,Button } from 'react-bootstrap';

import first from './part-one.png';
import second from './part-two.png';
import third from './part-three.png';

const FirstProject = () => {
    
       
      
    return (
        <div>
        <Row xs={1} md={1} className="g-4 justify-content-center align-items-center">
        
                <Col>
                
                    <Card>
                        <div className='d-flex flex-column'>
                        <div className='d-flex flex-column mx-3 justify-content-center align-items-center'>
                        <Card.Img variant="top" src={first} className='w-25 h-25' />
                        <Card.Img variant="top" src={second} className='w-25 h-25' />
                        <Card.Img variant="top" src={third} className='w-25 h-25' />
                        </div>
                        <div>
                        <Button variant="outline-dark">Live Site Link</Button>
                        <Button variant="outline-primary">Client Side Code</Button>
                        <Button variant="outline-success">Server Side Code</Button>
                        </div>
                        </div>
            </Card>
          </Col>
      </Row>
        </div>
    );
};

export default FirstProject;