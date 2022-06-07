import './Main.css';
import Animals from '../Animals/Animals';
import backgroundImg from '../background.jpeg';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        animals.map((animal, i) => 
          <Animals {...animal}
            key={animal.name + i} />)
      }
    </main>
  );
}