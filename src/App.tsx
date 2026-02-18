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

    const generateTape = () => {
        const tempTape: IItem[] = [];
        for (let i = 0; i < 80; i++) {
            const randomIndex = Math.floor(Math.random() * items.length);
            tempTape.push(items[randomIndex]);
        }
        return tempTape;
    };

    const handleSpin = () => {
        if (isSpin || items.length === 0) return;

        // Generate a Completely NEW tape for this spin
        const newTape = generateTape();

        // Pick a random winner
        const winner = items[Math.floor(Math.random() * items.length)];
        // Place winner at the winning index (75)
        newTape[75] = winner;

        setFullTape(newTape);
        setIsSpin(true);

        // Reset offset to 0 to start animation from the beginning
        setOffset(0);

        // Allow a small delay for the render to update with the new tape at position 0
        // before starting the animation to the target offset
        setTimeout(() => {
            // Calculate random stop position within the winning item
            // 75 * 150 (item width) = start of winning item
            // - (600 / 2) + (150 / 2) = center the item in the viewport (viewport 600px, item 150px)
            // + random offset (-25 to +25) to simulate realistic friction
            const randomOffset = Math.floor(Math.random() * 50 - 25);
            const targetOffset = (75 * 150) - (600 / 2) + (150 / 2) + randomOffset;
            setOffset(targetOffset);
        }, 50);

        setTimeout(() => {
            setIsSpin(false);
        }, 8500); // Slightly longer than the CSS transition to be safe
    };

    const [isSpin, setIsSpin] = useState(false);

    useEffect(() => {
        getItems().then(data => {
            setItems(data);
            // Initial tape just for visuals before first spin
            const initialTape: IItem[] = [];
            for (let i = 0; i < 80; i++) {
                initialTape.push(data[Math.floor(Math.random() * data.length)]);
            }
            setFullTape(initialTape);
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
