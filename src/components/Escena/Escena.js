import React from 'react';
import { DivEscena } from './Styled'; 

//este componente mostrara cada una de las frases
const frase = (props) => <DivEscena isActivated = {props.isActivated}> {props.text} </DivEscena>;

export default frase;

