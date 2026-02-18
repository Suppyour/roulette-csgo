import { IItem } from "../types";
import Box from '@mui/material/Box';
import RouletteItem from "./RouletteItem";

interface Props {
    items: IItem[],
    offset: number,
}

export default function RouletteTape({ items = [], offset }: Props) {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center', // Vertically center items
            position: 'relative',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', // Optional: Soft edges
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}>
            <Box sx={{
                display: 'flex',
                transition: offset === 0 ? 'none' : 'transform 8s cubic-bezier(0.12, 0.8, 0.33, 1)',
                transform: `translateX(-${offset}px)`,
                willChange: 'transform', // Performance optimization
            }}>
                {items.map((skin, index) => <RouletteItem key={`${skin.id}-${index}`} items={skin} />)}
            </Box>
        </Box>
    );
}