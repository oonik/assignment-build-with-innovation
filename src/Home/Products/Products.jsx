/* eslint-disable */
import { useRef, useState } from "react";
import { useQuery } from "react-query";
import ProductCard from "./ProductCard";
import { FaCartArrowDown } from "react-icons/fa";


const Products = () => {
    const [search, setSearch] = useState('');
    const [price, setPrice] = useState('');
    const [cart, setCart] = useState([]);
    const searchRef = useRef();
    const filterRef = useRef();

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', search],
        queryFn: async () => {
            const res = await fetch(`https://dummyjson.com/products/search?q=${search}`)
            const data = await res.json();
            return data;
        }
    });

    const handleSearch = () => {
        setSearch(searchRef.current.value)
    };

    const handleSortByPrice = () => {
        setPrice(filterRef.current.value)
    };

    const handleCart = (product) => {
        setCart([...cart, product])
    };
    console.log(cart)

    if (isLoading) {
        return <h3 className="text-3xl text-yellow-500 text-center mt-20">Loading....</h3>
    }
    return (
        <div>
            <h1 className="text-4xl font-semibold ml-2">Products:</h1>
            <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-2">
                <div className="lg:ml-10 mt-5">
                    <input ref={searchRef} type="text" placeholder="Search by product name" className="input input-bordered input-warning input-sm max-w-xs" />
                    <button onClick={handleSearch} className="btn btn-sm btn-warning ml-2 text-white">Search</button>
                </div>
                <div className="lg:mt-5 flex flex-row gap-2">
                    <div>
                        <select ref={filterRef} className="select select-bordered select-sm max-w-sm">
                            <option selected value="1200">$1200</option>
                            <option value="100">$100</option>
                            <option value="50">$50</option>
                        </select>
                        <button onClick={handleSortByPrice} className="btn btn-sm btn-warning ml-2 text-white">Filter</button>
                    </div>
                    <div>
                        <div className="tooltip tooltip-open tooltip-right tooltip-warning text-white" data-tip={cart.length}>
                            <FaCartArrowDown className="text-yellow-500 text-3xl" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-10">
                {
                    products.products?.map(product => <ProductCard
                        key={product.id}
                        product={product}
                        handleCart={handleCart}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;