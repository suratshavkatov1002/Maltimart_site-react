import CommoSection from "../componets/UI/CommonSection"
import Helmet from "../componets/Helmet/Helmet"
import { Col, Container, Row } from "reactstrap"
import '../styles/Shop.css'
import products  from '../assets/data/products'
import { useState } from "react"
import ProductList from "../componets/UI/ProductsList"


export default function Shop() {

    const [productsData, setProductsData] = useState(products)

    const heandleFilter = e => {
        const filterValue = e.target.value

        if(filterValue === "sofa")   {
            const filteredProduct = products.filter(item => item.category === 'sofa')
            setProductsData(filteredProduct)
        } 

        if(filterValue === "watch")   {
            const filteredProduct = products.filter(item => item.category === 'watch')
            setProductsData(filteredProduct)
        } 

        if(filterValue === "mobile")   {
            const filteredProduct = products.filter(item => item.category === 'mobile')
            setProductsData(filteredProduct)
        } 

        
        if(filterValue === "wireless")   {
            const filteredProduct = products.filter(item => item.category === 'wireless')
            setProductsData(filteredProduct)
        } 

           
        if(filterValue === "chair")   {
            const filteredProduct = products.filter(item => item.category === 'chair')
            setProductsData(filteredProduct)
        } 
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value

        const searchProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchProducts)
    }

    return (
        <Helmet title='shop'>
            <CommoSection title="Products" />

            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className="filter__eidged">
                                <select onChange={heandleFilter}>
                                    <option>Filter By Category</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="chair">Chair</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>
                            </div>
                        </Col>

                        <Col lg='3' md='6' className="text-end">
                            <div className="filter__eidged">
                                <select>
                                    <option>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                        </Col>

                        <Col lg='6' md='12'>
                            <div className="search__box">
                                <input onChange={handleSearch} type="text" placeholder="Search...." />
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                       {
                            productsData.length === 0 ? (<h1 className="fs-4 text-center">No products are found!</h1>) : <ProductList data={productsData}/>
                       }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}