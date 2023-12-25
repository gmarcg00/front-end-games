import {useEffect, useState} from "react";


export const useAvatars = () => {
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        setAvatars([
            {id: "1", name: "Elie - The Last Of Us", price: "1.0", backgroundImage: "images/ellie.jpg"},
            {id: "2", name: "Joel - The Last Of Us", price: "1.0", backgroundImage:"images/joel.jpg"},
            {id: "3", name: "Obi Wan Kenobi - Star Wars", price: "1.0", backgroundImage:"images/obi-wan.jpg"},
            {id: "4", name: "Harry Potter", price: "0.5", backgroundImage:"images/wizard-harry.jpg"},
            {id: "5", name: "Hermione Granger - Harry Potter", price: "0.5", backgroundImage:"images/hermione.jpg"},
            {id: "6", name: "Alvus Dumbledore - Harry Potter", price: "0.5", backgroundImage:"images/dumbledore.jpg"},
            {id: "7", name: "Yoda - Star Wars", price: "0.5", backgroundImage:"images/yoda.jpg"},
            {id: "8", name: "Ezio Auditore - Assassin's Creed", price: "0.5", backgroundImage:"images/ezio.jpg"},
            {id: "9", name: "Mary Mcfly - Back To The Future", price: "0.5", backgroundImage:"images/marty.jpg"},
            {id: "10", name: "Nathan Drake - Uncharted", price: "0.5", backgroundImage:"images/nathan.jpg"},
            {id: "11", name: "Gandalf - The Lord Of The Rings", price: "0.5", backgroundImage:"images/gandalf.jpg"},
            {id: "12", name: "Ahsoka - Star Wars", price: "0.5", backgroundImage:"images/ahsoka.jpg"},
        ]);
    },[])
    return avatars;
}