import { useState } from 'react';
import { getRandomColor } from '../utils/colorUtils';
import { ColorResult } from '@uiw/react-color';

interface ColorCard {
    id: number;
    color: string;
}

export const useCardList = () => {
    // A list of all the cards
    const [cards, setCards] = useState<ColorCard[]>([]);

    // Adding a card by creating new card with { id = date, color = randomColor}
    // Then add new card to card list
    const addCard = () => {
        const newCard = {
            id: Date.now(),
            color: getRandomColor()
        };
        setCards(prevCards => [...prevCards, newCard]);
    };

    // Copies a specific cards color to clipboard
    const copyColor = (id: number) => {
        const rectangle = cards.find(card => card.id === id);

        if (rectangle) {
            const color = rectangle.color;
            navigator.clipboard.writeText(color);
            alert("Copied the color: " + color);
        } else {
            alert("Failed to copy color");
        }
    };

    // Refreshes the color of a card to a new random color
    const refreshColor = (id: number) => {
        const newColor = getRandomColor();
        
        setCards(prevCards =>
            prevCards.map(card =>
                card.id === id ? { ...card, color: newColor } : card
            )
        );
    };

    // Change the color of a card to be the same as its colorpicker
    const colorChange = (id: number, color: ColorResult) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { ...card, color: color.hex } : card
            )
        );
    };

    // Deletes a specific rectangle from the list
    const deleteRectangle = (id: number) => {
        setCards(prevCards => 
            prevCards.filter(card => card.id !== id)
        );
    };

    return {
        cards,
        addCard,
        copyColor,
        refreshColor,
        deleteRectangle,
        colorChange
    };
};
