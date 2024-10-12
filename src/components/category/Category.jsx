import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: '/img/fashion.png',
        name: 'fashion'
    },
    {
        image: '/img/shirt.png',
        name: 'shirt'
    },
    {
        image: '/img/jacket.png',
        name: 'jacket'
    },
    {
        image: '/img/phone.png',
        name: 'mobile'
    },
    {
        image: '/img/laptop.png',
        name: 'laptop'
    },
    {
        image: '/img/shoe.png',
        name: 'shoes'
    },
    {
        image: '/img/home.png',
        name: 'home'
    },
    {
        image: '/img/book.png',
        name: 'books'
    },
    {
        image: '/img/furniture.png',
        name: 'furniture'
    }
]

const Category = () => {
   
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div 
                                      onClick={() => navigate(`/category/${item.name}`)} 
                                      className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-blue-700 transition-all hover:bg-blue-800 cursor-pointer mb-1 flex items-center justify-center" 
                                    >
                                        <img 
                                          src={item.image} 
                                          alt="img" 
                                          className="w-full h-full object-cover rounded-full" 
                                        />
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className='text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase'>
                                        {item.name}
                                    </h1>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;
