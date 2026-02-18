import {IItem} from "../types";
import Box from '@mui/material/Box';
import RouletteItem from "./RouletteItem";

interface Props {
    items: IItem[],
    offset: number,
}

export default function RouletteTape({items = [], offset}: Props) {
    return (
        <Box sx={{
            width: '50%',
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',
        }}>
            <Box sx={{
                width: '4px',
                backgroundColor: 'green',
                position: 'absolute',
                left: '50%',
                zIndex: 2,
                transform: 'translateX(-50%)',
                height: '100%'
            }}>

            </Box>

            <Box sx={{
                display: 'flex',
                transition: offset === 0 ? 'none' : 'transform 8s cubic-bezier(0.12, 0.8, 0.33, 1)',
                transform: `translateX(-${offset}px)`
            }}>
                {items.map(skin => <RouletteItem key={skin.id} items={skin}/>)}
            </Box>
        </Box>
    );
}