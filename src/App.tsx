import React, {useEffect, useState} from 'react';
import {getItems} from "./api/items";
import {IItem} from "./types";
import RouletteTape from "./components/RouletteTape";
import {Button} from "@mui/material";

function App() {
    const [items, setItems] = useState<IItem[]>([]);
    const [fullTape, setFullTape] = useState<IItem[]>([]);
    const [offset, setOffset] = useState(0);

    const handleSpin = () => {

        const winner = items[Math.floor(Math.random() * items.length)];
        const newTape = [...fullTape];
        newTape[75] = winner;
        setFullTape(newTape);

        if (isSpin) return;

        setIsSpin(true);
        setOffset(0);

        setTimeout(() => {
            const newOffset = ((75 * 150) - (600 / 2) + (150 / 2) + (Math.random() * 50 - 25));
            setOffset(newOffset);
        }, 50);

        setTimeout(() => {
            setIsSpin(false);
        }, 8000);
    };
    const [isSpin, setIsSpin] = useState(false);

    useEffect(() => {
        getItems().then(data => {
            setItems(data);
            const tempTape: IItem[] = [];
            for (let i = 0; i < 80; i++) {
                const randomIndex = Math.floor(Math.random() * data.length);
                tempTape.push(data[randomIndex]);
            }
            if (data.length > 0) {
                tempTape[75] = data[Math.floor(Math.random() * data.length)];
            }

            setFullTape(tempTape);
        });
    }, []);

    return (
        <div className="App" style={{
            backgroundColor: '#121212',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {fullTape.length > 0 && <RouletteTape items={fullTape} offset={offset}/>}
            <div style={{marginTop: '1%'}}>
                <Button variant="contained" color="success" disabled={isSpin} onClick={handleSpin}>КРУТИТЬ!</Button>
            </div>
        </div>

    );
}

export default App;
