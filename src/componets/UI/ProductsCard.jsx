
import '../../styles/Product-card.css'
import { motion } from 'framer-motion';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { cardActions } from '../../redux/slice/cartSlice';
import {  toast } from 'react-toastify';

export default function ProductsCard({item}) {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(
        cardActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            imgUrl: item.imgUrl
        }))

        toast.success('Product added successfully')

    }

    return (
        <Col md=' 4' lg='3' mb-2>
            <div className="product__item" >
                <div className="product__img">
                    <motion.img whileHover={{scale: 1.1}} src={item.imgUrl} alt="" />
                </div>

                <div className='p-2  product__info'>
                    <h3 className='product_name'><Link to = {`/shop/${item.id}`}>{item.productName}</Link></h3>

                    <span >{item.category}</span>
                </div>

                <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">${item.price}</span>

                    <motion.span whileTap={{scale: 1.2}} onClick={addToCart}> 
                        <i className='ri-add-line'></i>
                    </motion.span>
                </div>
            </div>
        </Col>
    )
}