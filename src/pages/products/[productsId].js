/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/UI/Shared/Footer";
import Navbar from "@/components/UI/Shared/Navbar";

const ProductDetails = ({ categories, product }) => {
    return (
        <div className="container mx-auto">
            <Navbar categories={categories} />

            <div className="grid grid-cols-2 gap-5">
                <img src={product.image} alt="" />
                <div className="mt-5 space-y-3 text-xl">
                    <h1 className="text-2xl font-semibold">{product.productName}</h1>
                    <p><span className="font-semibold">Ratings:</span> {product.ratings}</p>
                    <p><span className="font-semibold">Category:</span> {product.category}</p>
                    <p className="bg-green-500 p-3 font-semibold w-[110px]">{product.status ? "In Stock" : "Out of Stock"}</p>
                    <p className="bg-gray-400 rounded-sm w-[120px] p-3 text-white">Price: {product.price}</p>
                    <p className=""><span className="font-semibold">Brand:</span> {product.brand}</p>
                    <p className="font-semibold text-2xl">Description</p>
                    <p>{product.description}</p>




                </div>
            </div>
            <div>
                <p className="text-3xl font-bold mb-5">Reviews</p>
                {
                    product.reviews.map((review) => (
                        <div className="border p-4 mb-5 " key={review}>
                            <p className="font-semibold">{review.reviewerName}</p>
                            <p>{review.review}</p>
                        </div>

                    ))
                }
            </div>
            <Footer />
        </div>
    );
};


export const getStaticPaths = async () => {
    const res = await fetch("https://pc-builder-backend-delta-eight.vercel.app/api/products")
    const products = await res.json()
    const paths = products.data.map((product) => ({
        params: { productsId: product._id }
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://pc-builder-backend-delta-eight.vercel.app/api/product/${params.productsId}`)
    const data = await res.json();
    const categories = await fetch("https://pc-builder-backend-delta-eight.vercel.app/api/categories");
    const category = await categories.json();
    return {
        props: {
            product: data,
            categories: category.data,
        }
    }
}


export default ProductDetails;

