interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}
export default function Botao(props: BotaoProps){

    const cor = props.cor ?? 'gray'
    
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r
            ${props.cor === 'green' 
                ? 'from-green-500 to-green-700' 
                : (props.cor === 'blue' 
                    ? 'from-blue-500 to-blue-700'
                    : 'from-gray-500 to-gray-700')} 
            text-white px-4 py-2 rounded-md ${props.className ?? ''}
        `}>
            {props.children}
        </button>
    )
}