/* eslint-disable @next/next/no-img-element */

const ProductsHome = ({ products }) => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {
                products.map((product) => (
                    <div key={product._id} class=" bg-base-100 shadow-xl  ">
                        <img src={product.image} alt="Shoes" className="w-[220px] mx-auto" />
                        <div class="card-body">
                            <h2 class="card-title">{product.productName}</h2>
                            <ul className="text-xl ml-8 space-y-4">
                                <li className="list-disc">Category: {product.category}</li>
                                <li className="list-disc">Price: {product.price}</li>
                                <li className="list-disc">Status: {product.status ? "Available" : "Stock Out"}</li>
                                <li className="list-disc">Ratings: {product.ratings}</li>
                            </ul>
                            <div class="card-actions justify-center ">
                                <button class="btn btn-primary mt-5 ">Details</button>
                            </div>
                        </div>
                    </div>
                ))
            }



        </div>
    );
};

export const getStaticProps = async () => {
    const products = await fetch("https://pc-builder-backend-delta-eight.vercel.app/api/products")
    const product = await products.json()
    return {
        props: {
            products: product.data
        }
    }
}


export default ProductsHome;