import './Container.css';

export default function Container(props) {
  return (
    <div className='container-div'>
      <h3 className='container-title'>{props.title}</h3>
      <div className='container-cards'>
        {props.children}
      </div>
    </div>
  )
}