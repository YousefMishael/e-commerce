import React, { useState, useEffect, useContext } from 'react'
import {FetchData} from '../../Utils/ApiUtils';
import ProductsCard from './SubComponent/ProductsCard';
import './Products.scss'
import SearchFilter from './SubComponent/SearchFilter';
import { GlobalContext } from '../../Utils/Context';
import ProductDetails from './SubComponent/ProductDetails';


function Products() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    // const [productDetails, setProductDetails] = useState({title: ''});
    const context = useContext(GlobalContext);

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         products: [],
    //         filteredProducts: [],
    //         productDetails: {
    //             title: ''
    //         }
    //     }
    // }


    async function getData(){

        const resp = await FetchData('https://fakestoreapi.com/products', 'GET');
    
        if (resp.status === 200) {
            // this.setState({ products: resp.data, filteredProducts: resp.data })
            setProducts(resp.data)
            setFilteredProducts(resp.data)
        } else {
            console.warn("sorry this api failed");
            //@TODO: we will handle it later 
        }
    }

    useEffect(() => {
        getData()
    }, []);

    // async componentDidMount() {
    //     const resp = await FetchData('https://fakestoreapi.com/products', 'GET');

    //     if (resp.status === 200) {
    //         this.setState({ products: resp.data, filteredProducts: resp.data })
    //     } else {
    //         console.warn("sorry this api failed");
    //         //@TODO: we will handle it later 
    //     }

    // }

    function onSearchFilterChangeed(searchText, filterBy) {
        const _filteredProducts = products.filter((item) => {
            const upperCaseTitle = item.title.toUpperCase();
            const upperCaseDesc = item.description.toUpperCase();
            const upperCaseSearchTxt = searchText.toUpperCase();

            if (filterBy === "title") {
                return upperCaseTitle.includes(upperCaseSearchTxt)
            } else if (filterBy === "desc") {
                return upperCaseDesc.includes(upperCaseSearchTxt)
            }
            return upperCaseTitle.includes(upperCaseSearchTxt) || upperCaseDesc.includes(upperCaseSearchTxt)
        })




        // this.setState({ filteredProducts: _filteredProducts })
        setFilteredProducts(_filteredProducts);
    }



    function getModalActions(){
        return [{className: 'btn btn-secondary', title: 'Close', dismiss: 'modal'},
                {className: 'btn btn-primary', title: 'Save changes', dismiss: ''}]
    }

    function onCardClicked(product){
        console.log(context.showModal)
       context.showModal(product.title, <ProductDetails product={product} />, getModalActions());
    }

  
        return (
            <div>
                <SearchFilter onChange={onSearchFilterChangeed} />
                <div className="row ms-5 me-5">
                    {filteredProducts.map((item, idx) => {

                        return (
                            <div className="col-lg-2 col-md-3" key={idx}>
                                <ProductsCard 
                                    onCardClicked={onCardClicked}
                                    product={item} />
                            </div>

                        )
                    })}
                </div>
            </div>
        )
}

// Products.contextType = GlobalContext;

export default Products;