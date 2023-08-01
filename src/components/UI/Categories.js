/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Categories = ({ categories }) => {
    return (
        <>
            <h1 className="text-center font-bold uppercase text-3xl my-10">Featured Categories</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4'>
                {
                    categories.map((category) => (
                        <div key={category._id} class=" bg-base-100 shadow-xl text-center group ">
                            <Link href={`/categories/${category.category}`}>
                                <div className="relative overflow-hidden py-7 cursor-pointer">
                                    <img src={category.image} alt="Shoes" className="w-[220px] h-[220px] mx-auto bg-cover" />
                                    <div className="absolute w-full h-full text-white bg-black/20 flex items-center justify-center  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <button>{category.category}</button>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Categories;