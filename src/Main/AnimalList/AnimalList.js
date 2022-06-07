import React from 'react';
import './AnimalList.css';
import backgroundImg from '../../background.jpeg';
import Animals from '../../Animals/Animals';

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