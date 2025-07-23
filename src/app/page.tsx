"use client"

import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import useClientes from "@/hooks/useClientes";


export default function Home() {

  const { 
    tabelaVisivel,
    exibirTabela,
    cliente, 
    clientes, 
    novoCliente, 
    selecionarCliente, 
    excluirCliente, 
    salvarCliente
  } = useClientes()

  return (
    <div className={`
      flex h-screen items-center justify-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      rounded-md
    `}>
      <Layout titulo="Cadastro simples">
        <div className={`p-6`}>
          { tabelaVisivel ? (
            <>
              <div className={`flex justify-end`}>
                <Botao 
                  cor="green" 
                  className="mb-4"
                  onClick={novoCliente}
                >
                    Novo Cliente
                </Botao>
              </div>
              <Tabela 
                clientes={clientes} 
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente} ></Tabela>
            </>
          ) : (
            <Formulario 
              cliente={cliente} 
              clienteMudou={salvarCliente}
              cancelado={exibirTabela} />
          )} 
        </div>
      </Layout>
    </div> 
  )
}
