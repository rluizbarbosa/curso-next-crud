import Cliente from "@/core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    function renderizarCabecalho(){
        return(
            <tr>
                <th className={`text-left p-4`}>Código</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {exibirAcoes ? (
                    <th className={`p-4`}>Ações</th>
                ) : false}
            </tr>   
        )
    }

    function rederizarAcoes(cliente: Cliente){
        return(
            <td className={`
                flex justify-center items-center
            `}>
                {props.clienteSelecionado ? (
                    <button className={`
                        flex justify-center items-center 
                        text-green-600 rounded-full p-2 m-1 
                        hover:bg-purple-50 cursor-pointer`}
                        onClick={() => props.clienteSelecionado?.(cliente)} 
                    >
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.clienteExcluido ? (
                    <button className={`
                        flex justify-center items-center 
                        text-red-600 rounded-full p-2 m-1 
                        hover:bg-purple-50 cursor-pointer`}
                        onClick={() => props.clienteExcluido?.(cliente)} 
                    >
                        {IconeLixo}
                    </button>
                ) : false}
                
            </td>
        )
    }

    function renderizarDados(){
        return(
            <>                
                {props.clientes?.map((cliente, i) => {
                    return (
                        <tr key={cliente.id} className={`
                           ${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}
                        `}>
                            <td className={`text-left p-4`}>{cliente.id}</td>
                            <td className={`text-left p-4`}>{cliente.nome}</td>
                            <td className={`text-left p-4`}>{cliente.idade}</td>
                            {exibirAcoes ? (
                               rederizarAcoes(cliente)
                            ) : false}
                        </tr>
                    )
                })}
            </>
        )
    }

    return (
        <table className={`
            w-full rounded-xl overflow-hidden
        `}>
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800    
                text-gray-100
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}