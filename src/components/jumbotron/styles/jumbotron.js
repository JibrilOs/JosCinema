import styled from "styled-components/macro";
export const Inner = styled.div`
  display: flex;
  font-size: 2em;
  background: red;
  max-width: 1100px;
  height: 60vh;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  margin: auto;
  width: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  } ;
`;
