import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;

  max-width: 90%;
  width: 90%;
  border-radius: ${props => props.theme.radii.medium};
`;

export const Thead = styled.thead`
  border-radius: ${props => props.theme.radii.medium};
  background-color: #00bcd5;
  color: #fff;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: #00bcd5;
`;

export const ExtendedTr = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? props.theme.colors.muted : 'transparent'};
`;

export const Th = styled.th`
  padding: 10px;
  text-align: center;
`;

export const Tb = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;

  :hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;
