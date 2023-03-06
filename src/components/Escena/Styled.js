import styled, {createGlobalStyle} from 'styled-components';

//Para mostrar el color de fondo cuando se presiona el btn
export const DivEscena = styled.div`
    border: 1px solid black;
    border-radius: 50px;
    text-align: center;
    width: 98%;
    padding: 1.2rem 0;
    margin: 1.5rem auto;
    background-color: ${({isActivated}) => isActivated ? 'pink' : 'grey'};
    color: ${({isActivated}) => isActivated ? 'black' : 'white'};
`;

//estilos para los btn
export const Button = styled.button`
  width: 20%;
  padding:20px;
  &:hover{
    filter:brightness(0.8)
  }
`
//para centrar los elementos
export const Center = styled.div`
    text-align: center;
    padding: 20px; 
`;

export const Portada = styled.div`
  color:white;
  background-color:rgba(0,0,0,.5);
`

//Para dar estilo a la imagen de fondo
export const GlobalStyle = createGlobalStyle`
  body{
    background-repeat:no-repeat;
    background-size:cover;
    background-image: url(${(props) => props.puntero});
    
  }
`

