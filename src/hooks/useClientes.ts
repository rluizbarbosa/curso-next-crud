import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";
import useTabelaOuFormulario from "./useTabelaOuFormulario";

export default function useClientes(){
    const repo : ClienteRepositorio = new ColecaoCliente()
    
      const {tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuFormulario()
      const [cliente, setCliente] = useState<Cliente>(Cliente.vazio)
      const [clientes, setClientes] = useState<Cliente[]>([])
    
    
      useEffect(obterTodos, [])
    
      function obterTodos(){
        repo.obterTodos().then(clientes => {
          setClientes(clientes)
          exibirTabela()
        })
      }
    
      function selecionarCliente(cliente: Cliente){
        setCliente(cliente)
        exibirFormulario()
      }
    
      async function excluirCliente(cliente: Cliente){
        await repo.excluir(cliente)
        await repo.obterTodos().then(clientes => {
          setClientes(clientes)
        })
      }
    
      async function salvarCliente(cliente: Cliente){
        await repo.salvar(cliente)
        obterTodos()
      }
    
      function novoCliente(){
        setCliente(Cliente.vazio)
        exibirFormulario()
      }

      return {
        cliente,
        clientes,
        selecionarCliente,
        excluirCliente,
        novoCliente,
        salvarCliente,
        tabelaVisivel,
        exibirTabela
      }
}