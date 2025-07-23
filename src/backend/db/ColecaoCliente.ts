import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import firebase from "firebase/compat/app";
import { db } from '../config'
import { collection, addDoc, updateDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 

export default class ColecaoCliente implements ClienteRepositorio{

    #conversor = {
        toFirestore(cliente: Cliente){
            return {
                nome: cliente.nome,
                idade: cliente.idade
            }
        },
        fromFirestore(
            snapshot: firebase.firestore.QueryDocumentSnapshot, 
            options: firebase.firestore.SnapshotOptions) : Cliente {
               const dados = snapshot.data(options) 
               return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if(cliente?.id){
            const docRef = doc(db, "clientes", cliente.id);
            await updateDoc(docRef, {
                nome: cliente.nome,
                idade: cliente.idade
            });
            return cliente
        }else{
            const docRef = await addDoc(collection(db, "clientes"), {
                nome: cliente.nome,
                idade: cliente.idade
            })
            return docRef.id 
                ? new Cliente(cliente.nome, cliente.idade, docRef.id) 
                : Cliente.vazio()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        (await this.colecao()).docs.map((d) => {
            if(d.id === cliente.id){
                deleteDoc(doc(db, 'clientes', d.id))
            }
        }) 
    }

    async obterTodos(): Promise<Cliente[]> {
        const data =  await this.colecao()
        return data.docs.map((doc) => {
            return new Cliente(doc.data().nome, doc.data().idade, doc.id)
        }) ?? []
    }

    private async colecao(){
       return await getDocs(collection(db, 'clientes'))
    }

}