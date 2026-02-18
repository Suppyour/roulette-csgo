import React, { useEffect, useState } from 'react';
import { getItems } from "./api/items";
import { IItem } from "./types";
import RouletteTape from "./components/RouletteTape";
import MainLayout from "./components/layout/MainLayout";
import RouletteContainer from "./components/game/RouletteContainer";
import GameControls from "./components/game/GameControls";
import { Box } from "@mui/material";

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
        <MainLayout>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                {/* Optional: Add a title or status text here */}
            </Box>

            <RouletteContainer>
                {fullTape.length > 0 && <RouletteTape items={fullTape} offset={offset} />}
            </RouletteContainer>

            <GameControls onSpin={handleSpin} isSpinning={isSpin} />

            {/* Recent History or other components could go here */}
        </MainLayout>
    );
}

export default App;
