import { useParams } from "react-router-dom"
import { Container, Col, Row } from "reactstrap"
import products from '../assets/data/products'
import Helment from '../componets/Helmet/Helmet'
import CommoSection from "../componets/UI/CommonSection"
import ProductDetails from "../styles/ProductDetails.css"
import ProductsList from '../componets/UI/ProductsList'
import { useDispatch } from "react-redux"
import {cardActions} from '../redux/slice/cartSlice'
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { toast } from "react-toastify"

export default function ProductDetals() {

    const { id } = useParams()
    const [tabs, setTabs] = useState('desc')
    const [rating, setRaiting] = useState(null)
    const inputRef = useRef('')
    const textareaRef = useRef('')
    const dispatch = useDispatch()

    const product = products.find((item) => item.id === id)

    const { imgUrl, productName, price, avgRating, shortDesc, reviews, description, category } = product;

    const relatedproducts = products.filter(item => item.category === category )

    const heandleSubit = (e) => {
        e.preventDefault()

        const inputRefValue = inputRef.current.value
        const textareaRefValue = textareaRef.current.value

        const reviewObj = {
            userName:inputRefValue,
            text: textareaRefValue,
            rating, 
        }

        console.log(reviewObj);
        toast.success("Review submitted")
    }

    const addToCart = () => {
        dispatch(cardActions.addItem({
            id,
            image: imgUrl,
            productName,
            price,

        }))

        toast.success("Product added successfully")
    }



    return (
        <Helment title={productName}>
            <CommoSection title={productName} />

            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="" />
                        </Col>

                        <Col lg="6">
                            <div className="product__details">
                                <h2>{productName}</h2>

                                <div className="product__rating">
                                    <div>
                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>

                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>


                                        <span>
                                            <i className="ri-star-s-fill"></i>
                                        </span>

                                        <span>
                                            <i className="ri-star-half-s-line"></i>
                                        </span>
                                    </div>

                                    <p>(<span>{avgRating}</span> ratings)</p>
                                </div>

                               <div className="mt-3 d-flex align-items-center gap-5">
                                    <span className="product__price">${price}</span>
                                    <span>Category: {category.toUpperCase()}</span>
                               </div>

                                <p className="mt-3">{shortDesc}</p>

                                <motion.button whileTap={{ scale: 1.2 }} onClick={addToCart} className="buy__btn">Add to Cart</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' >
                            <div className="tab__wrapper d-flex aligin-items-center gap-5   ">
                                <h6 onClick={() => setTabs('desc')} className={`${tabs === 'desc' ? 'active__tab' : ''}`}>Decription</h6>
                                <h6 onClick={() => setTabs('rev')} className={`${tabs === 'rev' ? 'active__tab' : ''}`}>Revies ({reviews.length})</h6>
                            </div>

                            {
                                tabs === 'desc' ? (
                                    <div className="tab__content">
                                        <p className="mt-5">
                                            {description}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="mt-5  product__riview">
                                        <div className="product__wrapper">
                                            <ul>
                                                {
                                                    reviews?.map((item, index) => (
                                                        <li key={index} className="mb-2">
                                                            <h6>John Doe</h6>

                                                            <span>{item.rating} (rating)</span>
                                                            
                                                            <p>{item.text}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>

                                            <div className="review__form">
                                                <h4>Leave your experience</h4>

                                                <form onSubmit={heandleSubit} action="">
                                                    <div className="form__group   d-flex align-items-center gap-5  rating__group ">
                                                        <input ref={inputRef} type="text" placeholder="Enter name" required />
                                                    </div>

                                                    <div className="form__group   d-flex align-items-center gap-5">
                                                      <span onClick={() => setRaiting(1)}>1 <i className="ri-star-s-fill"></i></span>
                                                      <span onClick={() => setRaiting(2)}>2 <i className="ri-star-s-fill"></i></span>
                                                      <span  onClick={() => setRaiting(3)}>3 <i className="ri-star-s-fill"></i></span>
                                                      <span onClick={() => setRaiting(4)}>4 <i className="ri-star-s-fill"></i></span>
                                                      <span onClick={() => setRaiting(5)}>5 <i className="ri-star-s-fill"></i></span>
                                                    </div>

                                                    <div className="form__group">
                                                        <textarea ref={textareaRef} rows={4} type="text" placeholder="Review Massage..." required />
                                                    </div>

                                                    <button type="submit" className="buy__btn">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }


                        </Col>

                        <Col className="mt-5" lg='12'>
                            <h2 className="related__title">You might also like</h2>
                        </Col>

                        <ProductsList data = {relatedproducts}/>
                    </Row>
                </Container>
            </section>
        </Helment>
    )
}