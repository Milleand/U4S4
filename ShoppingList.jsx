const ShoppingList = ({list}) => {
    return (
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default ShoppingList
