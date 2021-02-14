import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)

    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n

}

function calcParImp(num) {
    const n = parseInt(num)

    if (n === 0) return "Nulo"
    if (n % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }

}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    const [numParImp, setNumParImp] = useState(1)
    const [parImp, setParImp] = useState("")


    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        if (fatorial > 10000) {
            document.title = "Mudou Querido"
        }
    }, [fatorial])

    useEffect(function () {
        setParImp(calcParImp(numParImp))
    }, [numParImp])

    return (

        < div className="UseEffect" >
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio 01"></SectionTitle>

            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial}</span>
                </div>

                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio 02"></SectionTitle>

            <div className="center">
                <div>
                    <span className="text">Par ou Ímpar:</span>
                    <span className="text red">{parImp}</span>
                </div>

                <input type="number" className="input" value={numParImp} onChange={e => setNumParImp(e.target.value)} />
            </div>

        </div >
    )
}

export default UseEffect
