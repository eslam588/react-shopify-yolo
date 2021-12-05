import React ,{useEffect , useState} from 'react'
import Helmet from '../components/Helmet';
import {useSelector} from 'react-redux';
import productData from '../assets/fake-data/products';
import numberWithCommas from '../utils/numberWithCommas';
import Button from '../components/Button';
import {Link} from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    
    const cartItems = useSelector((state) => state.cartItems.value)

    const [cartProducts , setcartProducts] = useState(productData.getCartItemsDetail(cartItems))

    const [totalProducts , settotalProducts] = useState(0)

    const [totalPrice , settotalPrice] = useState(0);


    // console.log(productData.getCartItemsDetail(productData))

    useEffect(() => {
        setcartProducts(productData.getCartItemsDetail(cartItems))
        settotalProducts(cartItems.reduce((total , item) => total + Number(item.quantity) , 0))
        settotalPrice(cartItems.reduce((total , item) => total + (Number(item.quantity) * Number(item.price)) , 0))
    }, [cartItems])
    return (
        <Helmet title="cart">
            <div className="cart">
                <div className="cart__info">
                    <div className="cart__info__txt">
                        <p>
                            fsvfbthuyn{totalProducts}
                        </p>
                        <div className="cart__info__txt__price">
                            <span>uhuhhuihi</span>
                            <span>{numberWithCommas(totalPrice)}</span>
                        </div>
                    </div>
                    <div className="cart__info__btn">
                        <Button size="block">gk hjhk</Button>
                        <Link to="/catalog">
                             <Button size="block">Go To Catalog</Button>
                        </Link>
                    </div>
                </div>
                <div className="cart__list">
                    {
                        cartProducts.map((item , index) => (
                            <CartItem key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </Helmet>
    )
}

export default Cart
