import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  background-color: transparent !important;
  margin-top: 1em !important;
  border: none !important;
`;

const CompanyName = styled.div`
  font-size: 2.5em;
  font-family: "Staatliches", cursive;
  line-height: 1em;
`;

const Price = styled.h1`
  font-size: 5em;
`;
//Need to pass a property to this Component to access props in color
const Percent = styled.h3`
  color: ${props => (props.change >= 0 ? "green" : "red")};
  font-size: 2em !important;
`;

const MainDisplay = props => {
  return (
    <Wrapper>
      <CompanyName>company name</CompanyName>
      <div>symbol</div>
      <Price>$ price</Price>
      <Percent>
    
      </Percent>
    </Wrapper>
  );
};

//had to add ternary below. side affect of adding react-router (something to do with passing down props in <Route />)
const mapStateToProps = state => {
};

export default connect(mapStateToProps)(MainDisplay);
