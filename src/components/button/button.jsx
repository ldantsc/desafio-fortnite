import './button.css'

export default function Button(props) {
    return (
        <>
            <button type="button" className='btn-custom' href="/">
                    <p className='btn-font'>{props.name}</p>
            </button>
        </>
    )
}