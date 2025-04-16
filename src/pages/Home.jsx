import review1 from '../images/review1.avif';
import review2 from '../images/review2.avif';
import review3 from '../images/review3.avif';
import { FaStar } from 'react-icons/fa';
import homeImage from '../images/homeImage.jpg';
import { process, aboutData} from '../data/app'; 


const Home = () => {
  const reviews = [
    { image: review3, id: 1 },
    { image: review2, id: 2 },
    { image: review1, id: 3 },
  ];

  return (
    <div>
    <div className="mt-11 lg:mt-24 flex flex-col lg:flex-row gap-x-2 gap-y-20">
      
      {/* Left Content */}
      <div className="space-y-8 lg:space-y-12 lg:w-1/2">
        <div className="space-y-4 lg:max-w-3xl">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
            Your trusted plumbing and heating solutions
          </h1>
          <h1>
            At Edizi Plumbing and Heating, we’ve built a reputation for delivering top-notch
            plumbing solutions tailored to meet your needs
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <button className="bg-red w-fit text-white text-lg py-1 px-5 rounded-lg font-bold cursor-pointer transition delay-75 duration-100 hover:scale-105 hover:bg-red-700">
            Explore our services
          </button>

          {/* Reviews Section */}
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="flex -space-x-4">
              {reviews.map((review) => (
                <img
                  key={review.id}
                  src={review.image}
                  alt={`review-${review.id}`}
                  className="w-12 h-12 object-cover rounded-full border-2 border-[#F5F5F5]"
                />
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    <FaStar color="#C10007" />
                  </span>
                ))}
              </div>
              <h1 className="font-bold">From 100+ ratings</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image + Overlay */}
      <div className="lg:w-1/2 relative">
        <img
          src={homeImage}
          alt="ediziplumbing"
          className="w-full h-96 lg:h-[500px] object-cover border rounded-2xl border-[#F5F5F5]"
        />

        <ul
          role="list"
          className="absolute list-disc list-inside bottom-5 left-5 bg-black/60 text-white p-4 rounded-lg space-y-2 font-bold"
        >
          <li className="text-xl md:text-2xl">24/7 emergency service</li>
          <li className="text-xl md:text-2xl">Certified plumbers</li>
        </ul>
      </div>
    </div>

    {/* process section */}
   <div className="my-16 md:mt-24 lg:mt-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {process.map((item) => (
    <div key={item.name} className="flex flex-col items-center text-center md:items-start md:text-left space-y-3">
      <div className="bg-[#E5E4E2] w-fit p-4 rounded-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-12 md:w-14 lg:w-16"
        />
      </div>
      <h1 className="font-bold text-lg">{item.name}</h1>
      <p className="text-sm text-gray-700">{item.description}</p>
    </div>
    ))}
   </div>

    {/* short information about us section */}
     <div className="mt-20 md:mt-24 lg:mt-44 w-full">
        {aboutData.map((info) => (
        //  left section item
        <div key={info.description} className="flex flex-col gap-y-9 gap-x-16 lg:flex-row"> 
         <div className="lg:w-1/2"> 
         <img src={info.image}  
         alt="ediziplumbing" 
          className="w-full h-96 lg:h-[500px] object-cover border rounded-2xl border-[#F5F5F5]"
         />
         </div>

         {/* right side section  */} 
         <div className="space-y-6 lg:space-y-12 lg:max-w-3xl lg:w-1/2"> 
            <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">{info.tite}</h1> 
            <h1>{info.description}</h1> 

            <ul role="list"  className="text-lg list-disc list-inside font-bold space-y-2"> 
            <li>{info.shortDescription1}</li> 
            <li>{info.shortDescription2}</li> 
            <li>{info.shortDescription3}</li>
            </ul>
         </div>
        </div>
        ))}
     </div>
    </div>
  );
};

export default Home;
