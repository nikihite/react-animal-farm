import './Animals.css';

export default function Animals({ name, type }) {
  return (
    <div className='animal'>
      <img src={`animalImgs/${type}.svg`}/>
      <p>This is {name} the</p>
      <p>{type}</p>
    </div>
  );
}