import Footer from "@/components/UI/Shared/Footer";
import Navbar from "@/components/UI/Shared/Navbar";
import { clearComponent, removeComponent } from "@/redux/features/componentSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const PcBuilder = ({ categories }) => {
    const { processor, motherboard, ram, storage, psu, monitor } = useSelector((state) => state.component)
    const dispatch = useDispatch();
    let count = 0;
    if (processor && motherboard && ram && storage && psu && monitor) {
        count = 6
    }
    const router = useRouter();

    const handleSubmit = () => {
        toast.success("PC Build Successfully");
        dispatch(clearComponent())
        router.push('/')
    }

    return (
        <div className="container mx-auto">
            <Navbar categories={categories} />
            <div className=" mt-10 mb-20">
                <div className="text-center">
                    <h1 className="font-bold text-3xl">PC Builder</h1>
                    <p className="text-xl">Select Your Components</p>
                </div>
                <div className="mt-5">
                    <div className="bg-gray-600 text-white font-semibold p-5">
                        <h1>Your Build PC</h1>
                    </div>
                    <div className="flex justify-between border border-gray-400 p-5">
                        {processor ? (<><div className="flex  items-center ">
                            <img className="pr-4 w-[120px]" src={processor.image} alt="" />
                            <h1 className="text-2xl">{processor.productName}</h1>
                        </div><div className="flex items-center">
                                <button onClick={() => dispatch(removeComponent(processor))} className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">X</button>
                            </div></>) : (<><div className="flex  items-center ">
                                <img className="pr-4" src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/cpu-48x48_1686724838.png" alt="" />
                                <h1 className="text-2xl">Processor</h1>
                            </div><div className="flex items-center">
                                    <Link href={'/pcbuilder/Processor'}><button className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">Select</button></Link>
                                </div></>)}

                    </div>
                    <div className="flex justify-between border border-gray-400 p-5">
                        {motherboard ? (<><div className="flex  items-center ">
                            <img className="pr-4 w-[120px]" src={motherboard.image} alt="" />
                            <h1 className="text-2xl">{motherboard.productName}</h1>
                        </div><div className="flex items-center">
                                <button onClick={() => dispatch(removeComponent(motherboard))} className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">X</button>
                            </div></>) : (<><div className="flex  items-center " >
                                <img className="pr-4" src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2310600_1686989058.png" alt="" />
                                <h1 className="text-2xl">Motherboard</h1>
                            </div>
                                <div className="flex items-center">
                                    <Link href={'/pcbuilder/Motherboard'}><button className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">Select</button></Link>
                                </div></>)}

                    </div>
                    <div className="flex justify-between border border-gray-400 p-5">
                        {ram ? (<><div className="flex  items-center ">
                            <img className="pr-4 w-[120px]" src={ram.image} alt="" />
                            <h1 className="text-2xl">{ram.productName}</h1>
                        </div><div className="flex items-center">
                                <button onClick={() => dispatch(removeComponent(ram))} className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">X</button>
                            </div></>) : (<><div className="flex  items-center " >
                                <img className="pr-4" src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/RAM_1686989592.png" alt="" />
                                <h1 className="text-2xl">RAM</h1>
                            </div>
                                <div className="flex items-center">
                                    <Link href={'/pcbuilder/RAM'}><button className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">Select</button></Link>
                                </div></>)}
                    </div>
                    <div className="flex justify-between border border-gray-400 p-5">
                        {storage ? (<><div className="flex  items-center ">
                            <img className="pr-4 w-[120px]" src={storage.image} alt="" />
                            <h1 className="text-2xl">{storage.productName}</h1>
                        </div><div className="flex items-center">
                                <button onClick={() => dispatch(removeComponent(storage))} className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">X</button>
                            </div></>) : (<><div className="flex  items-center " >
                                <img className="pr-4" src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/hard-disk_1686990181.png" alt="" />
                                <h1 className="text-2xl">Storage Device</h1>
                            </div>
                                <div className="flex items-center">
                                    <Link href={'/pcbuilder/Storage Device'}><button className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">Select</button></Link>
                                </div></>)}
                    </div>
                    <div className="flex justify-between border border-gray-400 p-5">
                        {psu ? (<><div className="flex  items-center ">
                            <img className="pr-4 w-[120px]" src={psu.image} alt="" />
                            <h1 className="text-2xl">{psu.productName}</h1>
                        </div><div className="flex items-center">
                                <button onClick={() => dispatch(removeComponent(psu))} className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">X</button>
                            </div></>) : (<><div className="flex  items-center " >
                                <img className="pr-4" src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/1470116_1686990072.png" alt="" />
                                <h1 className="text-2xl">Power Supply Unit</h1>
                            </div>
                                <div className="flex items-center">
                                    <Link href={'/pcbuilder/Power Supply Unit'}><button className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">Select</button></Link>
                                </div></>)}
                    </div>
                    <div className="flex justify-between border border-gray-400 p-5">
                        {monitor ? (<><div className="flex  items-center ">
                            <img className="pr-4 w-[120px]" src={monitor.image} alt="" />
                            <h1 className="text-2xl">{monitor.productName}</h1>
                        </div><div className="flex items-center">
                                <button onClick={() => dispatch(removeComponent(monitor))} className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">X</button>
                            </div></>) : (<><div className="flex  items-center " >
                                <img className="pr-4" src="https://www.cloud.ryanscomputers.com/cdn/pc-builder-components/2194087-200_1686989982.png" alt="" />
                                <h1 className="text-2xl">Monitor</h1>
                            </div>
                                <div className="flex items-center">
                                    <Link href={'/pcbuilder/Monitor'}><button className="bg-white border px-5 py-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300">Select</button></Link>
                                </div></>)}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="btn btn-primary w-[120px] disabled:bg-slate-100" onClick={handleSubmit} disabled={count < 6} >Build</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export const getStaticProps = async () => {
    const categories = await fetch("https://pc-builder-backend-delta-eight.vercel.app/api/categories");
    const category = await categories.json();
    return {
        props: {
            categories: category.data,
        }
    }
}


export default PcBuilder;