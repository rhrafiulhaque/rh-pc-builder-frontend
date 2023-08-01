import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = ({ categories }) => {
    const { data: session } = useSession();
    return (
        <div className="navbar bg-base-100">
            <div class="lg:navbar-start ">
                <div class="dropdown">
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href={'/'}>Home</Link></li>
                        <li tabindex="0">
                            <details>
                                <summary>Category</summary>
                                <ul class="p-2 w-[135px]">
                                    {
                                        categories.map((cat) => (
                                            <li key={cat._id}><Link href={`/categories/${cat.category}`}>{cat.category}</Link></li>
                                        ))
                                    }
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <Link href={'/'} class="uppercase font-semibold  text-xl">RH PC Builderrr</Link>
            </div>



            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 z-[1]">
                    <li><Link href={'/'}>Home</Link></li>
                    <li tabindex="0">
                        <details>
                            <summary>Category</summary>
                            <ul class="p-2 w-[135px]">
                                {
                                    categories.map((cat) => (
                                        <li key={cat._id}><Link href={`/categories/${cat.category}`}>{cat.category}</Link></li>
                                    ))
                                }
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
            <div class="navbar-end">
                <Link href={'/pcbuilder'}>  <button className="btn btn-primary py-3 mr-10">PC builderr</button></Link>

                {!session?.user && <button className=" btn uppercase text-xl bg-green-700 text-white rounded-lg hover:bg-green-500 "><Link href={'/login'}>Login</Link></button>}
                {session?.user && <div className="flex flex-col mt-4"><button className="btn  uppercase text-xl bg-red-700 text-white rounded-lg hover:bg-red-500 " onClick={signOut}>Logout</button>
                    <p>{session?.user?.name}</p>
                </div>}
            </div>
        </div>
    );
};



export default Navbar;

