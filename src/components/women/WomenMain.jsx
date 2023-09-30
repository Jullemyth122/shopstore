import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import Products from '../products/Products';
import { femaleShoesList } from '../utilities/female';
import { Link } from 'react-router-dom';

const WomenMain = ({ user }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showcarts,setShowCarts] = useState(false)
    const [cart,setShowCart] = useState()
    
    useEffect(() => {
        const getCarts = async () => {
            try {
                const carts = await fetch(`http://localhost:7777/carts/cart/${user.email}`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const data = await carts.json();
                console.log(data);
    
                // Update the cartLists state with the retrieved cart data
                setShowCart(data.cart);
            } catch (error) {
                console.error('Error fetching user carts:', error);
            }
        }
    
        getCarts();
    }, [user]);

    return (
        <div className='home-component'>
            <Navbar user={user} setSearchQuery={setSearchQuery} showcarts={showcarts} setShowCarts={setShowCarts}/>
            <div className="center-comp">
                <Products searchQuery={searchQuery} user={user} listItem={femaleShoesList}/>
            </div>

            <div className={`carts_shop_list ${showcarts ? 'in' : 'out'}`}>
                <div className="textline-header">
                    <h4>
                        Carts 
                    </h4>
                    <svg onClick={e => setShowCarts(false)} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 3.75C7.5 3.55109 7.42098 3.36032 7.28033 3.21967C7.13968 3.07902 6.94891 3 6.75 3C6.55109 3 6.36032 3.07902 6.21967 3.21967C6.07902 3.36032 6 3.55109 6 3.75C5.98662 6.02081 6.66509 8.24186 7.94512 10.1176C9.22516 11.9933 11.0461 13.4347 13.1655 14.25C11.0461 15.0653 9.22516 16.5067 7.94512 18.3824C6.66509 20.2581 5.98662 22.4792 6 24.75C6 24.9489 6.07902 25.1397 6.21967 25.2803C6.36032 25.421 6.55109 25.5 6.75 25.5C6.94891 25.5 7.13968 25.421 7.28033 25.2803C7.42098 25.1397 7.5 24.9489 7.5 24.75C7.5 19.314 11.814 15 17.25 15H18.4395L16.719 16.719C16.6493 16.7887 16.594 16.8715 16.5562 16.9626C16.5185 17.0537 16.4991 17.1514 16.4991 17.25C16.4991 17.3486 16.5185 17.4463 16.5562 17.5374C16.594 17.6285 16.6493 17.7113 16.719 17.781C16.7887 17.8507 16.8715 17.906 16.9626 17.9438C17.0537 17.9815 17.1514 18.0009 17.25 18.0009C17.3486 18.0009 17.4463 17.9815 17.5374 17.9438C17.6285 17.906 17.7113 17.8507 17.781 17.781L20.781 14.781C20.8508 14.7113 20.9063 14.6286 20.9441 14.5374C20.9819 14.4463 21.0013 14.3487 21.0013 14.25C21.0013 14.1513 20.9819 14.0537 20.9441 13.9626C20.9063 13.8714 20.8508 13.7887 20.781 13.719L17.781 10.719C17.7113 10.6493 17.6285 10.594 17.5374 10.5562C17.4463 10.5185 17.3486 10.4991 17.25 10.4991C17.1514 10.4991 17.0537 10.5185 16.9626 10.5562C16.8715 10.594 16.7887 10.6493 16.719 10.719C16.6493 10.7887 16.594 10.8715 16.5562 10.9626C16.5185 11.0537 16.4991 11.1514 16.4991 11.25C16.4991 11.3486 16.5185 11.4463 16.5562 11.5374C16.594 11.6285 16.6493 11.7113 16.719 11.781L18.4395 13.5H17.25C15.9672 13.5086 14.6955 13.2622 13.5087 12.7753C12.3219 12.2883 11.2437 11.5705 10.3366 10.6634C9.42952 9.75632 8.71166 8.67808 8.22472 7.49128C7.73777 6.30449 7.49143 5.03278 7.5 3.75ZM12.75 6C12.5511 6 12.3603 6.07902 12.2197 6.21967C12.079 6.36032 12 6.55109 12 6.75C12 6.94891 12.079 7.13968 12.2197 7.28033C12.3603 7.42098 12.5511 7.5 12.75 7.5H22.5C23.286 7.5 24 8.214 24 9V19.5C24 20.286 23.286 21 22.5 21H12.75C12.5511 21 12.3603 21.079 12.2197 21.2197C12.079 21.3603 12 21.5511 12 21.75C12 21.9489 12.079 22.1397 12.2197 22.2803C12.3603 22.421 12.5511 22.5 12.75 22.5H22.5C24.114 22.5 25.5 21.114 25.5 19.5V9C25.5 7.386 24.114 6 22.5 6H12.75Z" fill="white"/>
                    </svg>
                </div>
                <div className="list-of-carts">
                    {cart?.shoeVariations.map((elem,i) => {
                        return (
                            <div className="item-cart" key={i}>
                                <div className="img-side">
                                    <img src={elem.img} alt="" />
                                </div>
                                <div className="text-side">
                                    <div className="head-text">
                                        <h5> {elem.name} </h5>
                                        <h5> Gender | {elem.type} </h5>
                                    </div>
                                    <div className="bottom-text">
                                        <h5> Size | {elem.size} </h5>
                                        <h5> Price | {elem.price} </h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Link to={'/checkout'} className="below-text">
                    <h5>
                        Checkout 
                    </h5>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 25.5C7.0625 25.5 6.47375 25.255 5.98375 24.765C5.49375 24.275 5.24917 23.6867 5.25 23C5.25 22.3125 5.495 21.7238 5.985 21.2338C6.475 20.7438 7.06334 20.4992 7.75 20.5C8.4375 20.5 9.02625 20.745 9.51625 21.235C10.0063 21.725 10.2508 22.3133 10.25 23C10.25 23.6875 10.005 24.2763 9.515 24.7663C9.025 25.2563 8.43667 25.5008 7.75 25.5ZM20.25 25.5C19.5625 25.5 18.9738 25.255 18.4838 24.765C17.9938 24.275 17.7492 23.6867 17.75 23C17.75 22.3125 17.995 21.7238 18.485 21.2338C18.975 20.7438 19.5633 20.4992 20.25 20.5C20.9375 20.5 21.5263 20.745 22.0163 21.235C22.5063 21.725 22.7508 22.3133 22.75 23C22.75 23.6875 22.505 24.2763 22.015 24.7663C21.525 25.2563 20.9367 25.5008 20.25 25.5ZM2.75 3H1.5C1.14584 3 0.848754 2.88 0.608754 2.64C0.368754 2.4 0.249171 2.10334 0.250004 1.75C0.250004 1.39584 0.370004 1.09875 0.610004 0.858754C0.850004 0.618754 1.14667 0.499171 1.5 0.500004H3.5625C3.79167 0.500004 4.01042 0.562504 4.21875 0.687504C4.42709 0.812504 4.58334 0.989588 4.6875 1.21875L9.65625 11.75H18.4063L22.9375 3.625C23.0417 3.41667 23.1875 3.26042 23.375 3.15625C23.5625 3.05209 23.7708 3 24 3C24.4792 3 24.8388 3.20334 25.0788 3.61C25.3188 4.01667 25.3238 4.42792 25.0938 4.84375L20.625 12.9375C20.3958 13.3542 20.0883 13.6771 19.7025 13.9063C19.3167 14.1354 18.895 14.25 18.4375 14.25H9.125L7.75 16.75H21.5C21.8542 16.75 22.1513 16.87 22.3913 17.11C22.6313 17.35 22.7508 17.6467 22.75 18C22.75 18.3542 22.63 18.6513 22.39 18.8913C22.15 19.1313 21.8533 19.2508 21.5 19.25H7.75C6.8125 19.25 6.09875 18.8438 5.60875 18.0313C5.11875 17.2188 5.10334 16.3958 5.5625 15.5625L7.25 12.5L2.75 3ZM14.2188 6.75001H10.25C9.89584 6.75001 9.59875 6.63 9.35875 6.39C9.11875 6.15 8.99917 5.85334 9 5.5C9 5.14584 9.12 4.84876 9.36 4.60876C9.6 4.36876 9.89667 4.24917 10.25 4.25H14.2188L13.0938 3.125C12.8438 2.875 12.7238 2.58334 12.7338 2.25C12.7438 1.91667 12.8742 1.625 13.125 1.375C13.375 1.14584 13.6667 1.02584 14 1.015C14.3333 1.00417 14.625 1.12417 14.875 1.375L18.125 4.62501C18.375 4.87501 18.5 5.16667 18.5 5.5C18.5 5.83334 18.375 6.125 18.125 6.375L14.875 9.62501C14.6458 9.85417 14.3596 9.97417 14.0163 9.98501C13.6729 9.99584 13.3758 9.87584 13.125 9.62501C12.8958 9.39584 12.7813 9.10417 12.7813 8.75001C12.7813 8.39584 12.8958 8.10417 13.125 7.87501L14.2188 6.75001Z" fill="white"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default WomenMain;
