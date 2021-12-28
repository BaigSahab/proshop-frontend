import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Product from '../Components/Product'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../store/actions/productActions';
import Loader from '../Components/Loader';
import Message from '../Components/Message';

const HomeScreen = () => {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)

    const { products, loading, error } = productList


    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <>
            <h1>Latest Products</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant={"danger"}>{error}</Message>
            ) : (
                <Row>
                    {products.map(product => (
                        <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                            {/* <h3>{product.name}</h3> */}
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )
            }
        </>
    )
}

export default HomeScreen
