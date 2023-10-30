import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import "./modal.css";
import { FoodData } from '../../interface/FoodData';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagen, setImagen] = useState("");
    const [visualizacao, setVisualizacao] = useState("")
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            titulo, 
            descricao,
            imagen,
            visualizacao
    
        }
        mutate(foodData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadrastre um novo aviso</h2>
                <form className="input-container">
                    <Input label="Título" value={titulo} updateValue={setTitulo}/>
                    <Input label="Descrição" value={descricao} updateValue={setDescricao}/>
                    <Input label="imagen" value={imagen} updateValue={setImagen}/>
                    <Input label="Visualizações" value={visualizacao} updateValue={setVisualizacao}/>
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}