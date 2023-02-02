import '../styles/Cart.css'
import Helmet from '../componets/Helmet/Helmet'
import CommoSection from '../componets/UI/CommonSection'
import { Col, Container, Row } from 'reactstrap'
import cardActions from '../redux/slice/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Cart() {

    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)


    return (
        <Helmet title='Cart'>
            <CommoSection title='Shopping Cart' />

            <section>
                <Container>
                    <Row>
                        <Col lg='9'>

                            {
                                cartItems.length === 0 ? (
                                    <h2 className='fs-4 text-center'>No item added to the
                                        cart</h2>
                                ) : (
                                    <table className='table bordered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cartItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }

                        </Col>

                        <Col lg='3'>
                            <div>
                                <h6 className='d-flex align-items-center justify-content-between'>Subtotal</h6>
                                <span>${totalAmount}</span>
                            </div>
                            
                            <p>taxes and shipping will calculate in checkout</p>

                            <div>
                                <button className="buy__btn"><Link  to ='/shop'>Continiu Shopping</Link></button>
                                <button className="buy__btn"><Link  to ='/checkout'>Checkout</Link></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({ item }) => {

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(cardActions.deleteItem(item.id))
    }

    return <tr >
        <td><img src={item.imgUrl} alt="" /></td>
        <td>{item.productName}</td>
        <td>${item.totalPrice}</td>
        <td>{item.quantity}px</td>
        <td>
            <i onClick={deleteProduct} className='ri-delete-bin-line'></i>
        </td>
    </tr>
}