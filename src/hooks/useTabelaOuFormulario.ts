import { useState } from "react";

export default function useTabelaOuFormulario(){
    const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('formulario')

    return {
        formularioVisivel: visivel === 'formulario',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario
    }
}