import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
export const Input = styled.input`\
  width: 100%;
  border: 0;
  opacity: 15%;
  padding: 1.5rem 1rem 0.5rem;
  height: 70px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    height: 50px;
    padding: 8px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 10px;
  font-size: 1.125rem;
  border: 0;
  width: auto;
  cursor: pointer;
  transition: background-color 0.3s ease;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    
    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Breakk = styled.div`
  max-width: 5px;
  width:100%;
  height: 70px;
`;