import axios from "axios";

export interface Character {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: string;
}

export const getCharacters = async (page: number = 1) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return data;
};

export const getCharacterById = async (id: string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return data;
}