import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";


const UseStateX = (props) => {

    const [num, setNum] = useState(0)
    const [text, setText] = useState("")

    return (
        <div className="UseStateX">
            <PageTitle
                title="UseState X -Teste Bruno"
                subtitle="Retorna Estado da Função!"
            />
            <div className="center">
                <span>{num}</span>

                <div>
                    <button className="btn" onClick={() => setNum(current => current + 1000)}>+1000</button>
                    <button className="btn" onClick={() => setNum(num + 1)}>+1</button>
                    <button className="btn" onClick={() => setNum(num - 1)}>-1</button>
                    <button className="btn" onClick={() => setNum(current => current - 1000)}>-1000</button>
                </div>
            </div>
            <PageTitle
                title="UseState X -Teste Bruno 2"
                subtitle="Altera Estado da Função!"
            />

            <input type="text" value={text} onChange={e => setText(e.target.value)} />
        </div>


    )
}


export default UseStateX