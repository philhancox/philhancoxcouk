"use client";
import styled from 'styled-components';

const StyledBox = styled.div`
  padding: 15px;
  background-color: white;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px; /* Adjust the height as needed */
    background: ${({ colour, percentage }) => `linear-gradient(to right, ${colour} ${percentage}%, lightgray ${percentage}%)`};
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export default StyledBox;
