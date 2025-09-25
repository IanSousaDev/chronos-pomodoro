import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CirclePlay } from 'lucide-react';
import { DefaultInput } from './components/DefaultInput';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              labelText='Tarefa'
              id='meuInput'
              type='text' 
              required
            />
          </div>

          <div className='formRow'>
            <span>Lorem ipsum dolor sit amet consectetur.</span>
          </div>

          <div className='formRow'>
            <span>ciclos</span>
            <span>0 0 0 0 0</span>
          </div>

          <div className='formRow'>
            <button>
              <CirclePlay />
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}
