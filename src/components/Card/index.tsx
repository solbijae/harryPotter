import {
    CardWrapper,
    CardBlock,
    CardItem
} from "./styles"

import { CharacterData } from '../../pages/Characters';

interface CardProps {
    characters: CharacterData[];
}

const Card: React.FC<CardProps> = ({ characters }) => {
    console.log(characters)
    return (
        <>
            <CardWrapper>
                <CardBlock>
                {characters.map(character => (
                    <CardItem key={character.id} imageUrl={character.attributes.image}>
                        {character.attributes.name}
                    </CardItem>
                ))}
                </CardBlock>
            </CardWrapper>
        </>
    );
}

export default Card;