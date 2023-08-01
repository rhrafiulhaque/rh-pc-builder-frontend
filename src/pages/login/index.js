/* eslint-disable @next/next/no-img-element */
import { signIn } from "next-auth/react";
const LoginHome = () => {

    return (
        <div>

            <div
                className="flex flex-col items-center justify-center align-middle content-center mx-auto h-screen ">
                <p className="text-3xl mt-2 font-semibold  ">You Have to Login with Your Google Authentication Only</p>
                <p className="text-sm mb-20 text-red-700">[Others Authentication System will be added soon]</p>

                {/* <!-- Google --> */}
                <button
                    onClick={() => signIn("google", {
                        callbackUrl: "https://rh-pc-builder.vercel.app"
                    })}
                    className="hover:border-white hover:bg-green-500 font-semibold mx-1 h-12 w-[220px] rounded-full  uppercase border border-gray-800 leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">

                    <p className="text-gray-950 flex text-center mx-auto justify-center text-2xl hover:text-white"> <img className="h-9 w-9 mr-3" src="https://freesvg.org/img/1534129544.png" alt="" /> Google</p>
                </button>


            </div>

        </div>
    );
};

export default LoginHome;