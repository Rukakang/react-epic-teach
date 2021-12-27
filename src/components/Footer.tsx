import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #485D6A;
  color: #aaa;
  padding: 10px 100px;
`;
function Footer(){
    return(
        <StyledFooter>
            Footer
        </StyledFooter>
    )
}
export default Footer