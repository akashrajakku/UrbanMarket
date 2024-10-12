/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    
                    {/* para  */}
                    <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-blue-700'>customers</span> are saying</h2>

                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.pngplay.com/wp-content/uploads/15/Smiling-Businessman-Transparent-Images.png" />
                                <p className="leading-relaxed">I’ve been shopping at UrbanMarket for a few months now, and I’m consistently impressed. From fashion to tech gadgets, everything I’ve purchased has been of premium quality. The user experience is seamless, and I appreciate how quickly they process orders. I recently bought a new laptop from them, and it was delivered ahead of time. UrbanMarket is my go-to for online shopping!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Alex Hales</h2>
                                <p className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.freepik.com/premium-photo/real-professional-smiling-businesswoman-looking-confident-determined-face-expression-standing-sui_1258-88420.jpg?w=996" />
                                <p className="leading-relaxed">Shopping at UrbanMarket has been a game-changer! The variety of products is impressive, and the quality is always top-notch. I recently bought a jacket and some home decor items, and both exceeded my expectations. Their delivery is super fast, and the customer service is always responsive. I’m definitely a loyal customer now!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Hailey Nikki</h2>
                                <p className="text-gray-500">UI Developer</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://www.pngfind.com/pngs/m/19-195264_business-professional-png-black-man-business-png-transparent.png" />
                                <p className="leading-relaxed">UrbanMarket makes online shopping so easy and reliable. I love how the website is organized, and the categories make it effortless to find exactly what I need. I ordered a pair of shoes and a new phone case, and both arrived in perfect condition. Plus, their prices are always competitive without compromising on quality. Highly recommend!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Neil Sanders</h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial