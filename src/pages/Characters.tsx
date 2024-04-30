import { getCharaterList } from '../api';
import Card from '../components/Card';
import { useState, useEffect } from 'react'

export interface CharacterData {
    id: string;
    attributes: {
        name: string;
        born: string;
        died: string;
        species: string;
        blood_status: string;
        house: string;
        patronous: string;
        romances: [string];
        image: string;
    };
}
  

const Characters = () => {
    const [characters, setCharacters] = useState<CharacterData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const characterList = await getCharaterList();
                setCharacters(characterList.data);
            } catch (error) {
                console.error('Error fetching character list:', error);
            }
        };
    
        fetchData();
    
        return () => {
            // 클린업 코드
        };
      }, []);

    return (
        <>
            <Card characters={characters} />
        </>
    );
}

export default Characters;