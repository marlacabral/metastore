import './Slider.css'

export default function Slider(props){

    return(
        <div>
            <div className='slider'>
                <span className='slider-text'>Jogos em Destaque</span>

                <button className='btn-descubra'>
                    <a href={props.cardLink}>Descubra Mais</a>
                </button>
            </div>

            <div className='slider-img'>
                <img src={props.imageLink} alt={props.alt}/>
                
            </div>
        </div>
    )
}