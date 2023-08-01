import Banner from "@/components/UI/Banner";
import Categories from "@/components/UI/Categories";
import Products from "@/components/UI/Products";
import Footer from "@/components/UI/Shared/Footer";
import Navbar from "@/components/UI/Shared/Navbar";


const HomePage = ({ categories, products }) => {
  return (
    <div className="container mx-auto">
      <Navbar categories={categories} />
      <Banner />
      <div className="max-h-full">
        <Products products={products} />
        <Categories categories={categories} />
      </div>
      <Footer />

    </div>
  );
};

export default HomePage;


export const getStaticProps = async () => {
  const categories = await fetch("https://pc-builder-backend-delta-eight.vercel.app/api/categories");
  const category = await categories.json();
  const products = await fetch("https://pc-builder-backend-delta-eight.vercel.app/api/products")
  const product = await products.json()
  return {
    props: {
      categories: category.data,
      products: product.data
    }
  }
}




