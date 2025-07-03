import axios from "axios";

export const getCharacters = async (page: number = 1) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return data;
};

export const getCharacterById = async (id: string) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return data;
}