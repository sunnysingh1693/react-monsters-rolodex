import './card.styles.css';

export const Card = ({ monster }) => {
  return <div className='card-container'>
    <img alt={'monster-' + monster.id} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
    <h2 key={monster.id}>{monster.name}</h2>
    <a href={`mailto:${monster.email}`}>{monster.email}</a>
  </div>
}