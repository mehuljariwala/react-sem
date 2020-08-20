import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
} from "reactstrap";

export default class Drop1 extends Component {
  state = {
    currency: "",
    dropDownOpen: false,
  };

  toggle = () => {
    this.setState({
      dropDownOpen: !this.state.dropDownOpen,
    });
  };
  handleChange = (code: string) => {
    console.log(code);
    this.setState({
      currency: code,
    });
  };
  render() {
    return (
      <div>
        <ButtonDropdown>
          <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
            <DropdownToggle color="primary" caret className="dropdown-toggle">
              Select Currency
            </DropdownToggle>
            <DropdownMenu className="currency-dropdown">
              <DropdownItem
                onClick={() => this.handleChange("01")}
                dropDownValue="01"
              >
                A
              </DropdownItem>
              <DropdownItem
                onClick={() => this.handleChange("02")}
                dropDownValue="02"
              >
                B
              </DropdownItem>
              <DropdownItem
                onClick={() => this.handleChange("03")}
                dropDownValue="03"
              >
                C
              </DropdownItem>
              <DropdownItem
                onClick={() => this.handleChange("04")}
                dropDownValue="04"
              >
                D
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonDropdown>
      </div>
    );
  }
}
