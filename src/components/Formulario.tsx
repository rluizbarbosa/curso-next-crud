
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";
import { useState } from "react";

interface FormularioProps{
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}
export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada 
                    texto="Código"
                    valor={id}
                    somenteLeitura 
                    className="mb-5"/>
            ) : false}
            <Entrada
                texto="Nome" 
                valor={nome} 
                valorMudou={setNome}
                className="mb-5"/>
            <Entrada 
                texto="Idade" 
                valor={idade} 
                tipo="number" 
                valorMudou={setIdade}/>
            <div className={`mt-7 flex justify-end`}>
                <Botao onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id ?? ''))} cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} cor="gray">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}