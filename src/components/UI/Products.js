/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Products = ({ products }) => {
    return (
        <div>
            <h1 className="text-center font-bold uppercase text-3xl my-10">Featured Products</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    products.map((product) => (
                        <div key={product._id} class=" bg-base-100 shadow-xl  ">
                            <img src={product.image} alt="Shoes" className="w-[220px] mx-auto" />
                            <div class="card-body overflow-hidden">
                                <h2 class="card-title">{product.productName}</h2>
                                <ul className="text-xl ml-8 space-y-4">
                                    <li className="list-disc">Category: {product.category}</li>
                                    <li className="list-disc">Price: {product.price}</li>
                                    <li className="list-disc">Status: {product.status ? "Available" : "Stock Out"}</li>
                                    <li className="list-disc">Ratings: {product.ratings}</li>
                                </ul>
                                <div class="card-actions justify-center ">
                                    <Link href={`/products/${product._id}`} class="btn btn-primary mt-5 ">Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;