import { useState } from 'react'
import './App.css'

function App() {
 
  const [telaAtiva, setTelaAtiva] = useState('inicio');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [info, setInfo] = useState('');

 
  const calcularIMC = () => {
    if (!peso || !altura) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const h = altura / 100; 
    const imc = (peso / (h * h)).toFixed(1);

    setResultado(imc);

    if (imc < 18.5) setInfo('Abaixo do peso');
    else if (imc < 24.9) setInfo('Peso normal');
    else if (imc < 29.9) setInfo('Sobrepeso');
    else if (imc < 34.9) setInfo('Obesidade Grau I');
    else setInfo('Obesidade Severa');
  };

  return (
    <div className="container">
      {telaAtiva === 'inicio' ? (
        <div className="home-card">
          <div className="icon-saude">⚖️</div>
          <h1 className='Calculadora'>Calculadora de IMC</h1>
          <p className='Descubra'>Descubra se seu peso está ideal de forma rápida e simples.</p>
          <button className="btn-comecar" onClick={() => setTelaAtiva('calculadora')}>
            Começar Agora
          </button>
        </div>
      ) : (
        <div className="calculadora-card">
          <h2>Sua Calculadora</h2>
          
          <div className="input-group">
            <label>Peso (kg)</label>
            <input 
              type="number" 
              placeholder="Ex: 75" 
              value={peso}
              onChange={(e) => setPeso(e.target.value)} 
            />
          </div>

          <div className="input-group">
            <label>Altura (cm)</label>
            <input 
              type="number" 
              placeholder="Ex: 170" 
              value={altura}
              onChange={(e) => setAltura(e.target.value)} 
            />
          </div>

          <button className="btn-calcular" onClick={calcularIMC}>Calcular IMC</button>

          {resultado && (
            <div className="resultado-area">
              <h3>Seu IMC: {resultado}</h3>
              <p className="info-texto">{info}</p>
            </div>
          )}

          <button className="btn-voltar" onClick={() => {
            setTelaAtiva('inicio');
            setResultado(null);
            setPeso('');
            setAltura('');
          }}>
            ← Voltar para o início
          </button>
        </div>
      )}
    </div>
  )
}

export default App