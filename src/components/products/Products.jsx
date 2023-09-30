import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; // Import the uuidv4 function

const Products = ({ searchQuery, listItem, user }) => {

    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        // Filter items based on the search query
        const filtered = listItem.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(filtered);
    }, [searchQuery]);

    const handleAddToCart = async ( elem ) => {
        const uuid = uuidv4(); // Generate a UUID using uuidv4

        try {
            const response = await fetch('http://localhost:7777/carts/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email:user.email,
                    shoeVariation:{
                        id: uuid,
                        checkmark: true,
                        img: elem.img,
                        name: elem.name,
                        type: elem.type,
                        size: elem.size,
                        quantity: 1,
                        price: elem.price,
                    }
                }),
            });

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };


    return (
        <div className='products-component'>
            <h1> All Products </h1>
            <div className="product-subcomponent">
                <div className="product-body">
                    {filteredItems.map((elem,i) => {
                        return(
                            <div className="item-show" key={i}>
                                <div className="title">
                                    <h4>{elem.name}</h4>
                                </div>
                                <div className="item-body"><img src={elem.img} alt="" /></div>
                                <div className="item-details">
                                    <div className="d1">
                                        <button className="add-to-cart" onClick={e => handleAddToCart(elem)}>
                                            Add to Cart
                                        </button>
                                        <h5 className="price">
                                            {elem.price}$
                                        </h5>
                                    </div>
                                    <div className="d2">
                                        <h4>
                                            Size || {elem.size}'cm
                                        </h4>
                                    </div>
                                </div>
                                {elem?.new == true ? <> 
                                <div className="new-mark">
                                    <h5> New Release </h5>
                                </div>
                                </> : <></>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products