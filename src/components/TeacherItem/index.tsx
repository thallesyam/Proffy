import React from 'react'

/* ICONS */
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

/* CSS */
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/59545660?s=460&u=90f09bcadd23faf9ab59697ccc78d81a43e64102&v=4" alt="Thalles Ian"/>
        <div>
          <strong>Thalles Ian</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias do mercado!
        <br></br>
        Apaixonado por criar coisas de visual bonito e com uma funcionalidade agradavel,
        Desenvolvedor Front-End porém visando um dia chegar proximo ao FullStack
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
