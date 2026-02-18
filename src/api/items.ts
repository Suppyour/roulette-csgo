import {Color, IItem} from '../types';

const mock: IItem[] = [
    {
        id: "1",
        name: "Фига крутой",
        price: 100,
        rarity: Color.gold,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/a8/Cosmetic_icon_Fractal_Horns_of_Inner_Abysm.png"
    },
    {
        id: "2",
        name: "Нормасельно",
        price: 100,
        rarity: Color.red,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/4/41/Cosmetic_icon_Feast_of_Abscession_Bundle.png"
    },
    {
        id: "3",
        name: "Херня чувак",
        price: 100,
        rarity: Color.blue,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/0/00/Cosmetic_icon_Anvil_of_the_Earthwright.png"
    },
    {
        id: "4",
        name: "Мда анлак",
        price: 100,
        rarity: Color.blue,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e8/Cosmetic_icon_Charge_of_the_Baleful_Reign.png"
    },
    {
        id: "5",
        name: "Какашки кармашки",
        price: 100,
        rarity: Color.blue,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/3/33/Cosmetic_icon_Dragonterror.png"
    },
    {
        id: "6",
        name: "Туз под разргуз",
        price: 100,
        rarity: Color.blue,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1d/Cosmetic_icon_Stoutheart_Growler.png"
    },
    {
        id: "7",
        name: "Чмошно",
        price: 100,
        rarity: Color.gold,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/af/Cosmetic_icon_Pachyderm_Powderwagon.png"
    },
]

export const getItems = async (): Promise<IItem[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mock);
        }, 500);
    })
}