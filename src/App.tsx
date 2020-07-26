import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./App.css";
import Table from "./Table";

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggle1 = () => setDropdownOpen1((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
  return (
    <Container className="root_container">
      <Row>
        <Col>
          <Row className="root_container-row">
            <label className="root_container-label">Month :</label>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                outline
                color="secondary"
                caret
                className="root_container-button"
              >
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Row>
        </Col>
        <Col>
          <Row className="root_container-row">
            <label className="root_container-label">Year :</label>
            <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
              <DropdownToggle
                color="secondary"
                outline
                caret
                className="root_container-button"
              >
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Row>
        </Col>
        <Col>
          <Row className="root_container-row">
            <label className="root_container-label">Amount :</label>
            <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
              <DropdownToggle
                color="secondary"
                outline
                caret
                className="root_container-button"
              >
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Row>
        </Col>
      </Row>
      <Row className="root_container-actions">
        <Col></Col>
        <Col>
          <Button color="primary">Search</Button>
        </Col>
        <Col>
          <Button color="primary">Clear All</Button>
        </Col>
        <Col>
          <Button color="primary">Export</Button>
        </Col>
        <Col>
          <Button color="primary">Columns</Button>
        </Col>

        <Col></Col>
      </Row>
      <Row className="root_container-table">
        <Table />
      </Row>
    </Container>
  );
}

export default App;
