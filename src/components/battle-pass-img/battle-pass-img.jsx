import './battle-pass-img.css'

export default function BattlePassImg() {

    const img = ['./battlepass1.png', './battlepass2.png']

    return (
        <>
                <img src={img[0]} alt=""/>
                <img src={img[1]} alt=""/>
        </>
    )
}