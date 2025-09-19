import { Container } from './components/Container';

import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';


export function App() {

  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}
