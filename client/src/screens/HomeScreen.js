import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import axios from 'axios'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('/api/products')
                setLoading(false)
                setProducts(data)
            } catch (err) {
                setError(err.message)
                setLoading(false)
                console.log(err)
            }

        }
        fetchData();
    }, [])

    return (

        <div>
            {loading ? <LoadingBox></LoadingBox> :
                error ? <MessageBox variant="danger">{error}</MessageBox>
                    : (
                        <div className="row center">
                            {
                                products.map(product => (
                                    <Product key={product._id} product={product} />
                                ))
                            }

                        </div>

                    )
            }

        </div>

    )
}

export default HomeScreen
