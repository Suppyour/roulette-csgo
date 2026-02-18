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
        name: "Попробуйте еще раз",
        price: 100,
        rarity: Color.blue,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e8/Cosmetic_icon_Charge_of_the_Baleful_Reign.png"
    },
    {
        id: "5",
        name: "Какашки в кармашки",
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
    {
        id: "8",
        name: "Ильнурчик",
        price: 100,
        rarity: Color.purple,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/8/87/Cosmetic_icon_Pale_Mausoleum.png"
    },
    {
        id: "9",
        name: "Повестка в армию",
        price: 100,
        rarity: Color.purple,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/1/14/Cosmetic_icon_Daemonfell_Flame.png"
    },
    {
        id: "10",
        name: "Полярис",
        price: 100,
        rarity: Color.green,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f8/Cosmetic_icon_Worldforger.png"
    },
    {
        id: "11",
        name: "Машоночный итем",
        price: 100,
        rarity: Color.blue,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/8/86/Cosmetic_icon_Frosty_the_Sew-Man_Loading_Screen.png"
    },
    {
        id: "12",
        name: "Свастозявр",
        price: 100,
        rarity: Color.red,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/a/af/Cosmetic_icon_Pachyderm_Powderwagon.png"
    },
    {
        id: "13",
        name: "Дреды на жопе Ваzи",
        price: 100,
        rarity: Color.green,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c4/Cosmetic_icon_Benevolent_Companion.png"
    },
    {
        id: "14",
        name: "Повестка на сво",
        price: 100,
        rarity: Color.gold,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/b/bc/Cosmetic_icon_The_True_Crow.png"
    },
    {
        id: "15",
        name: "Тинкер",
        price: 100,
        rarity: Color.gold,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e2/Cosmetic_icon_Tidosaurus.png"
    },
    {
        id: "16",
        name: "Общежитие №9",
        price: 100,
        rarity: Color.gold,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f8/Cosmetic_icon_Majesty_of_the_Colossus.png"
    },

]

export const getItems = async (): Promise<IItem[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(mock);
        }, 500);
    })
}