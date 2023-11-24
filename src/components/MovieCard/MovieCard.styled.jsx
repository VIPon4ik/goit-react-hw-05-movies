import styled from 'styled-components';

export const MovieTitle = styled.h2`
  color: #eb4034;
  text-align: center;
  font-size: 16px;
  margin: 10px;
  text-decoration: none;
`;


export const MovieListItem = styled.li`
  background-color: #212121;
  border-radius: 8px;

  &:hover ${MovieTitle},
  &:focus ${MovieTitle} {
    color: #eb0034;
  }
`;
