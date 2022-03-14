import { PokemenData } from '../types';

export const randomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
};

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const composeData = (original: any, pokemenData: PokemenData) => {
    pokemenData.id = original.id;
    pokemenData.weight = original.weight;
    pokemenData.height = original.height;
    pokemenData.name = capitalizeFirstLetter(original.name);
    pokemenData.sprite = original.sprites.front_default;
    pokemenData.types = original.types.map(
        (pokemenType: { type: { name: string } }) => pokemenType.type.name
    );

    return pokemenData;
};
