import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Products = ({ products ,bg}) => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const handleActiveProduct = (index) => setActiveProductIndex(index);

  useEffect(() => {
    const changeProductIndexByTime = () => {
      const numOfProducts = products.length;
      setActiveProductIndex((prevIndex) => (prevIndex + 1) % numOfProducts);
    };

    const intervalId = setInterval(changeProductIndexByTime, 10000);
    return () => clearInterval(intervalId);
  }, [activeProductIndex, products]);

  return (
    <section

 
      className={`rounded-3xl m-auto my-64 mt-0 p-4 w-11/12 lg:flex-row flex flex-col gap-4 min-h-[500px] lg:h-[700px] max-w-screen-2xl ${bg}`}
      aria-label='Products Section'
      role='region'>
      <div className='lg:w-2/5 w-full grid place-items-center gap-1'>
        {products.map((product, index) => (
          <button
            className={`flex justify-start items-start p-4 text-start text-white overflow-hidden transition-all duration-500 rounded-xl before:aspect-square before:translate-x-1 before:translate-y-1/2 before:rounded-full before:bg-white before:absolute before:bottom-0 before: after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:bottom-0 after:absolute relative ${
              activeProductIndex === index
                ? "bg-white/10 opacity-100 after:h-1 after:animate-slideFromRightToLeft after:right-full before:h-2 before:animate-slideFromRightToLeft before:shadow-[0px_0px_100px_30px_rgb(200,200,255)]"
                : "bg-transparent after:right-0 opacity-60 after:h-0 after:animate-none before:h-0 before:animate-none before:shadow-none"
            } hover:bg-white/20 hover:opacity-90`}
            key={index}
            onClick={() => handleActiveProduct(index)}
            role='tab'
            aria-controls={`product-tab-${index}`}
            aria-selected={activeProductIndex === index}>
            <span className='pr-4 text-3xl transition-all duration-500'>
              {product.icon}
            </span>
            <div
              className={`flex flex-col  justify-start items-start transition-all duration-500 overflow-hidden ${
                activeProductIndex === index ? "h-28" : "h-8"
              }`}>
              <span className='text-2xl font-semibold mb-2'>
                {product.title}
              </span>
              <span className='text-base text-white/80'>
                {product.description}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div
        className='lg:w-3/5 w-full  rounded-3xl overflow-hidden h-full'
        role='tabpanel'
        id={`product-tab-${activeProductIndex}`}>
        {products[activeProductIndex].data}
      </div>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.object.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
      data: PropTypes.object.isRequired,
    }).isRequired
  ).isRequired,
  bg:PropTypes.string.isRequired,
};

export default Products;
