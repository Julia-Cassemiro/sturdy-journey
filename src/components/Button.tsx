import { ButtonHTMLAttributes } from 'react'//o react exporta para nós um atributo onde voce pode escolher o seu tipo de botão, essa importação nos ajudara bastante 

import '../style/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>// para funcionar esses atributos passamos uma tag de <> que é um elemnto globalpois independente de onde o codigo esteja 

export function Button(props: ButtonProps) //named export = estou dando um nome a exportação e assim se eu mudar o nome ele nao continua ele nos deixa mais fluidos a criar varios botoes nesse caso e ele nos permite a exportar mais coisas dentro do mesmo
{
  return(
    <button className="button" {...props}/> 
  )
}



  //let counter = 0; //let deixa voce mudar seu componente

  //const [counter, setCounter] = useState(0) //Nos criamos um estado sempre com uma constante mpor mais que seu valor seja alterado

  // function increment()
  // {
  //   setCounter(counter + 1);
  //   //counter += 1;
  //   console.log(counter)
  // }
  

