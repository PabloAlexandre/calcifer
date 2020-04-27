import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vW;
  height: 100vH;
  background: url(${props => props.image});
  background-size: cover;

  &:before {
    position: absolute;
    z-index: -1;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background: black;
  }
`;


export default Wrapper;