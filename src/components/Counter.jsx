import "../css/counter.css"

const Counter = ({ numClics }) => {
    return(
        <div className="contador">
            { numClics }
        </div>
    )
}

export default Counter