export default function MyButton({id, className, type, children, onClick}) {
    return (
        <button id={id} className={`button ${className}`} type={type} onClick={onClick}>{children}</button>
    )
}