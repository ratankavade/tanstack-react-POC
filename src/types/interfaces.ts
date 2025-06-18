import type { QueryObserverResult } from '@tanstack/react-query';

export type Character = {
    id: number;
    image: string;
    name: string;
    gender: string;
    species: string;
    location: {name: string};
    created: string;
    origin: {name: string}
    status: string;
  }
  
export type Table_Props = {
    data: Character[]
    totalPages: number
    refetch: () => Promise<QueryObserverResult<Character[]>>,
    page: number
  }