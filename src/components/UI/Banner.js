
const Banner = () => {
    return (
        <section style={{ backgroundImage: `url('https://nzxt.com/assets/cms/34299/1659593175-custom-pc-category-hero-bg-web.png?auto=format&dpr=0.75&fit=max&h=1500&w=2500')`, backgroundSize: 'cover', height: '100%' }} className="dark:bg-gray-900 p-10">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="z-[2] mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Empower Your PC Experience: Build, Customize, Conquer</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to our PC builder website! Unlock your dream PC potential with our intuitive and user-friendly platform. Build your custom rig, tailored to your needs and budget, with ease. </p>

                </div>
            </div>
        </section>
    );
};

export default Banner;