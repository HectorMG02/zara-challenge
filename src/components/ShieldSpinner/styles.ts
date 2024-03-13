import styled, { keyframes } from 'styled-components';



const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


const ShieldSpinner = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Captain_America_Shield.svg/768px-Captain_America_Shield.svg.png');
  background-size: cover;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;

export const S = {
    ShieldSpinner
}