import { Button } from '../components/Button'
import '../style/main.scss'
// import '../js/main'
export function Main()
{
  return(
    <div id="page-auth">
    {/* <header>
      <div className='tabs'>

        <a className='tab tab-lifted tab-active'></a>
        <a className='tab tab-lifted'></a>

      </div>
    </header> */}
    <aside >
      
      
    </aside>
    <main>
      <div className='main-content'>
        
        {/* <div className='separator'>ou entre em uma sala</div> */}
        <div className='box-acesso'>
        <h2>Entre como ADM</h2>
        <form >
          <input 
          type="text" 
          placeholder='Usuario'
          />
          <input 
          type="password" 
          placeholder='Senha'
          />
          {/* <input 
          type="text"
          placeholder="Digite o código da sala"
          /> */}
          <Button type="submit">
            Entrar
          </Button>
        </form>
        </div>
      </div>
    </main>
  </div>
  )
}