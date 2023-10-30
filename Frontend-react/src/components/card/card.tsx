import "./card.css";

interface CardProps {
    
    descricao: string,
    titulo: string,
    imagen: string
    visualizacao: string
}

export function Card({ descricao, imagen, titulo, visualizacao } : CardProps){
    return(
        <div className="card">
            <img src={ imagen}/>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <p>Visualizações 
                - {visualizacao}</p>
            
        </div>
    )
}