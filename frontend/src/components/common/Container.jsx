
export default function Container({children, className = ""}) {
    return (
        <div className={`px-4 py-2 ${className}`}>
            {children}
        </div>
    )
}