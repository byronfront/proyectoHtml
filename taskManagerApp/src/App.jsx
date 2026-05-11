import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const tarjetas = [
  {
    id: 1,
    imagen: 'https://picsum.photos/400/240?random=1',
    titulo: 'Primera tarjeta',
    descripcion: 'Contenido de la primera tarjeta. Puedes dar "Me gusta" y ver cómo se actualiza el contador.',
  },
  {
    id: 2,
    imagen: 'https://picsum.photos/400/240?random=2',
    titulo: 'Segunda tarjeta',
    descripcion: 'Contenido de la segunda tarjeta. Cada tarjeta mantiene su propio estado con useState.',
  },
  {
    id: 3,
    imagen: 'https://picsum.photos/400/240?random=3',
    titulo: 'Tercera tarjeta',
    descripcion: 'Contenido de la tercera tarjeta. Renderizadas dinámicamente con .map() desde un arreglo.',
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="cards-grid">
          {tarjetas.map((item) => (
            <Card
              key={item.id}
              imagen={item.imagen}
              titulo={item.titulo}
              descripcion={item.descripcion}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
