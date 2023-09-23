import './page-title.css'

export default function PageTitle(props) {
    return (
        <div className="page-title-container">
            <div className="page-title-custom">
                <h1>{props.title}</h1>
                <h2>{props.backgroundText}</h2>
            </div>
        </div>
    )
}