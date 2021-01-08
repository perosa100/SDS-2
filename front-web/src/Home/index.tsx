import React from 'react'
import Footer from '../Footer'
import { ReactComponent as Main } from './home.svg'
import './styles.css'

const Home: React.FC = () => {
  return (
    <>
    <div className="home-container">
      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title">
            Faça seu pedido <br /> que entregamos pra você!!!
          </h1>
          <h3 className="home-subtitle">
            Escolha o seu pedido e em poucos minutos <br /> levaremoss na sua
            porta
          </h3>
          <a href="orders" className="home-btn-order">
            FAZER PEDIDO
          </a>
        </div>

        <div className="home-image">
          <Main />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home
