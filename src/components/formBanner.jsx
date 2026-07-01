import BannerImg from "../assets/images/banners/formBanner.png";
export default function formbanner({title, description}){
    return(
        <section className="relative overflow-hidden">
                  <img
                    src={BannerImg}
                    alt="Banner"
                    className="w-full h-full py:20 object-cover"
                  />
              
               
                
                <div className="absolute inset-0 px-6 flex ">
                  <div className="max-w-auto mt-4 lg:max-w-8xl pl-6 md:pl-12 lg:pl-20">
                     <div className="max-w-full lg:max-w-full">
                  <h1 className=" playpen text-3xl lg:text-7xl md:text-4xl font-bold text-[#88b62c] lg:leading-loose">
                    {title}
                 </h1>
        
                  <p className=" text-m w-[100%] lg:text-2xl mt-2 text-white lg:leading-tight">
                    {description}
                </p>
                
                </div>
                </div>
                </div>
              </section>
    
    );
} 