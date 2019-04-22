import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: transparent !important;
  color: black !important;
  text-align: center !important;
  font-size: 1em !important;
  padding-top: 1em !important;
  margin-bottom: 10em !important;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="ui divider" />
      <div>
        <i className="copyright outline icon" />
        Powered By IEX
      </div>
    </StyledFooter>
  );
};

export default Footer;
