import Frases from './components/Escena/Frases' 
import { useState } from 'react';
import Escena from './components/Escena/Escena'
import './App.css';
import { Button, Center, GlobalStyle, Portada } from './components/Escena/Styled';

function App() {

  //USando useState para mostrar la pagina de inicio y al presionar el btn de COmenzar, mostrara las frases
  //Utilizando el renderizado condicional
  let [pagInicial, setPagInicial] = useState(true);//pagInicial-Estado inicial de la variable = true

  const [currentScene, setCurrentScene] = useState(0); 

  //Aqui directamente ejecuto el map para mostrar y enviar el texto del fichero Frases
  const mostrarEscena = Frases.map(( frase, index ) => <Escena key={ index } text={ frase.texto } isActivated={ index === currentScene } />);

  const textMaxim = Frases.length - 1;//el numero maximo 

  //para obtener la imagen del array y colocarlo de fondo en la img 
  const imgFondo = Frases[currentScene].img;

  return(
    <Center>
      {/* Tag para mostrar la imagen de fondo segun se presiona el btn de anterior o siguiente */}
      <GlobalStyle puntero = {imgFondo} />
        {/* Este div lo utilizo para mostrar el menu principal */}
        <div>
          {pagInicial &&
            <Portada>
              <Center><h1>HEROES</h1></Center>
              <Center><p>Entraras en el universo de heroes</p>
                <p>Encontraras dos botones para avanzar o retroceder en la Historia.</p></Center>
              <Center><Button onClick={() => setPagInicial(pagInicial === true ? pagInicial = false : pagInicial = true)}>Comienza la historia</Button></Center>
            </Portada>
          }
        </div>
        {/* Este div mostrara las historiass */}
        {!pagInicial &&
          <Center>
            <Button onClick={()=>setCurrentScene(
              estado => estado === 0 ? estado + textMaxim : estado - 1
            )}>Anterior</Button>
            <Button onClick={()=>setCurrentScene(
              estado => estado === textMaxim ? estado - textMaxim : estado + 1
            )}>Siguiente</Button>
            {/* Mostramos cada una de las frases, con un map */}
            {mostrarEscena}
          </Center>
        }
    </Center>
  )
}

export default App;
