import { useEffect, useState, Suspense } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Products = ({ products, bg ,LOTTIEanimationData,ProductsCardData}) => {
  
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

  const productCount = Math.min(products.length, 6);
  const productAreaClass = `lg:w-2/5 w-full grid place-items-center gap-1 ${
    productCount < 6 ? `lg:col-span-${6 / productCount}` : ""
  }`;

  return (
    <section
      className={`rounded-[40px] m-auto  my-12 mt-0 p-4 w-11/12 lg:flex-row flex flex-col gap-4 min-h-[500px] lg:min-h-[700px] max-w-screen-2xl ${bg}`}
      aria-label='Products Section'
      role='region'>
      <div className={productAreaClass}>
        {products.slice(0, productCount).map((product, index) => (
          <button
            className={`flex justify-start items-start  border-t-2 border-gray-100/20 p-4 text-start text-white overflow-hidden transition-all duration-500 rounded-xl before:aspect-square before:translate-x-1 before:translate-y-1/2 before:rounded-full before:bg-white before:absolute before:bottom-0 before: after:w-3/4 after:bg-gradient-to-r after:from-transparent after:to-white after:bottom-0 after:absolute relative ${
              activeProductIndex === index
                ? "bg-white/10 w-full opacity-100 after:h-1  h-full after:animate-slideFromRightToLeft after:right-full before:h-2 before:animate-slideFromRightToLeft before:shadow-[0px_0px_100px_30px_rgb(200,200,255)]"
                : "bg-transparent w-full after:right-0 h-full  opacity-60 after:h-0 after:animate-none before:h-0 before:animate-none before:shadow-none"
            } hover:bg-white/20 hover:opacity-90`}
            key={index}
            onClick={() => handleActiveProduct(index)}
            role='tab'
            aria-controls={`product-tab-${index}`}
            aria-selected={activeProductIndex === index}
            style={{ zIndex: 1 }}>
            <span className='pr-4 text-3xl  transition-all duration-500'>
              {product.icon}
            </span>
            <div
              className={`flex flex-col   justify-start items-start transition-all  overflow-hidden ${
                activeProductIndex === index ? "h-[150px] lg:h-28" : "h-8"
              }`}>
              <span className='lg:text-2xl relative w-full font-semibold mb-2'>
                {product.title}
              </span>
              <span className='text-base  text-left text-white/80'>
                {product.description}
                {activeProductIndex === index && (
                  <span className=' '>
                    <Link
                      to={product.link}
                      className='text-white  hover:text-black/40 duration-500 select-none underline  px-2 rounded-full text-sm font-semibold  cursor-pointer'
                      style={{
                        opacity: activeProductIndex === index ? 1 : 0,
                        transform: `translateY(${
                          activeProductIndex === index ? 0 : 20
                        }px)`,
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        transitionDelay: `${index * 0.1}s`, // Add this line to delay the transition for each element
                      }}>
                      Learn more
                    </Link>
                  </span>
                )}
              </span>
            </div>
          </button>
        ))}
      </div>
      <div
        className='lg:w-3/5 w-full  min-h-[400px] bg-[#3092DB] relative rounded-3xl overflow-hidden '
        role='tabpanel'
        id={`product-tab-${activeProductIndex}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsCard
            title={ProductsCardData.cards[activeProductIndex].title}
            discription={ProductsCardData.cards[activeProductIndex].description}
            LOTTIEanimationData={LOTTIEanimationData[activeProductIndex]}
          />
        </Suspense>
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
  bg: PropTypes.string.isRequired,
  LOTTIEanimationData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Products;
  