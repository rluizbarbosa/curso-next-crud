import Titulo from "./Titulo"

interface LayoutPros{
    titulo: string
    children: any
}

export default function Layout(props: LayoutPros){
    return (
        <div className={`
            flex flex-col w-2/3
            bg-white text-gray-800
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div>
                {props.children}
            </div>
        </div>
    )
}