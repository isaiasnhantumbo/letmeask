import logoImg from '../assets/images/logo.svg';
import streamImg from '../assets/images/stream.svg';

import { Button } from '../components/Button';

import '../styles/landing.scss';




export function LandingPage() {

  return (
    <div id="page-landing">
      <main>
        <div className="content">
            <img src={logoImg} alt="" />
         <h2>
         Crie salas Q&amp;A ao-vivo
         </h2>
         <h1>
         Toda pergunta tem uma resposta.
         </h1>
         <Button><a href="/rooms">Começar</a></Button>
        </div>
        <div className="ilustration">
            <img src={streamImg} alt="Ilustração de Streamer" />
        </div>
      </main>
    </div>
  );
}
