
import SelectProduct from "@/components/UI/SelectProduct";
import Footer from "@/components/UI/Shared/Footer";
import Navbar from "@/components/UI/Shared/Navbar";

const SelectComponent = ({ products, categories }) => {
    return (
        <div className="container mx-auto">
            <Navbar categories={categories} />

            <SelectProduct products={products} />
            <Footer />
        </div>
    );
};


export const getStaticPaths = async () => {
    const res = await fetch("https://pc-builder-backend-delta-eight.vercel.app/api/categories")
    const categories = await res.json()
    const paths = categories.data.map((category) => ({
        params: { selectcomponent: category.category }
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`https://pc-builder-backend-delta-eight.vercel.app/api/categories/${params.selectcomponent}`)
    const product = await res.json();
    const categories = await fetch("https://pc-builder-backend-delta-eight.vercel.app/api/categories");
    const category = await categories.json();
    return {
        props: {
            products: product.data,
            categories: category.data,
        }
    }
}


export default SelectComponent;

