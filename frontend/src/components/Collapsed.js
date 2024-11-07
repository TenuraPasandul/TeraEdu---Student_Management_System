import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

import {
  MDBCollapse,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Collapsed() {
  const [showShow, setShowShow] = useState(false);
  const [collapse1, setCollapse1] = useState(true);
  const [collapse2, setCollapse2] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <MDBCollapse show={showShow} tag="nav" className="d-lg-block bg-white sidebar">
      <div className="position-sticky">
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Introduction</Accordion.Header>
        <Accordion.Body>
          hi
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Chapter 01</Accordion.Header>
        <Accordion.Body>
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </div>
    </MDBCollapse>
  );
}
