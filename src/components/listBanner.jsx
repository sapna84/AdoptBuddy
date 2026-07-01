export default function formbanner({BannerImage, title, description}){
    return(
        <section className="relative overflow-hidden">
                  <img
                    src={BannerImage}
                    alt="Banner"
                    className="w-full lg:h-[255px]  object-cover"
                  />
              
               
                
                <div className="absolute inset-0 px-6 flex ">
                  <div className="max-w-auto mt-4 lg:max-w-8xl pl-6 md:pl-12 lg:pl-18">
                     <div className="max-w-xl lg:max-w-6xl">
                  <h1 className=" playpen text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#144a36] lg:leading-loose">
                    {title}
                 </h1>
        
                  <p className=" text-lg lg:text-2xl lg:mt-2 text-[#88b62c] font-semibold lg:leading-tight">
                    {description}
                </p>
                </div>
                </div>
                </div>
              </section>
    
    );
} 