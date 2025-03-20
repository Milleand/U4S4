import './App.css'
import ShoppingList from "./ShoppingList.jsx";

export default function App() {

    const list = [
        "Eggs",
        "Cheese",
        "Milk"
    ];

    return (
        <>
            <ShoppingList list={list}/>
        </>
    )

}

