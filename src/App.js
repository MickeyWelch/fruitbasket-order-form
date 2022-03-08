import React, {useState} from 'react';
import './App.css';
import Fruitcounter from "./Components/Fruitcounter";
import Form from "./Components/Form";

function App() {
    // functions FruitCounter
    const [counterAardbeien, setCounterAardbeien] = useState(0);
    const [counterBananen, setCounterBananen] = useState(0);
    const [counterKiwis, setCounterKiwis] = useState(0);
    const [counterAppels, setCounterAppels] = useState(0);

    function resetCounters() {
        setCounterKiwis(0);
        setCounterAppels(0);
        setCounterAardbeien(0);
        setCounterBananen(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div className="fruitform">
                <Fruitcounter
                    title="&#127827; Aardbeien"
                    counter={counterAardbeien}
                    setCounter={setCounterAardbeien}
                />
                <Fruitcounter
                    title="&#127820; Bananen"
                    counter={counterBananen}
                    setCounter={setCounterBananen}
                />
                <Fruitcounter
                    title="&#127823; Appels"
                    counter={counterAppels}
                    setCounter={setCounterAppels}
                />
                <Fruitcounter
                    title="&#129373; Kiwi's"
                    counter={counterKiwis}
                    setCounter={setCounterKiwis}
                />
                <button
                    type="button"
                    onClick={resetCounters}
                >Resetbutton
                </button>
            </div>

            <Form />
        </>
    );
}

export default App;
