export interface IItem {
    id: string;
    name: string;
    image: string;
    price: number;
    rarity: Color
}

export interface ISpinResult {
    winnerItem: IItem;
    rollId: string;
}

export enum Color {
    'blue' = 'blue',
    'purple' = 'purple',
    'red' = 'red',
    'gold' = 'gold',
    'green' = 'green'
}
