import { 
    FaWrench, 
    FaShower, 
    FaToilet, 
    FaFire, 
    FaTshirt, 
    FaWater, 
    FaTools,
    FaTemperatureHigh
  } from "react-icons/fa";
  
  const ServiceSlider = () => {
    const services = [
      { icon: <FaWater size={20} />, name: "Plumbing Leaks" },
      { icon: <FaShower size={20} />, name: "Showers" },
      { icon: <FaToilet size={20} />, name: "Toilet Flushes" },
      { icon: <FaFire size={20} />, name: "Leaky Radiators & Valves" },
      { icon: <FaTools size={20} />, name: "Pipes & Cylinders" },
      { icon: <FaTshirt size={20} />, name: "Washing Machines & Plumbed-in Appliances" },
      { icon: <FaWrench size={20} />, name: "Ball Valves" },
      { icon: <FaToilet size={20} />, name: "Blocked Toilets" },
      { icon: <FaTemperatureHigh size={20} />, name: "Immersion Heaters" },
      // Duplicate items for seamless looping
      { icon: <FaWater size={20} />, name: "Plumbing Leaks" },
      { icon: <FaShower size={20} />, name: "Showers" },
      { icon: <FaToilet size={20} />, name: "Toilet Flushes" },
      { icon: <FaFire size={20} />, name: "Leaky Radiators & Valves" },
    ];
  
    return (
      <div className="bg-red text-white py-2 overflow-hidden group">
        <div className="inline-flex items-center animate-infinite-scroll group-hover:pause whitespace-nowrap">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center mx-4 px-4 py-1 transition-transform hover:scale-105"
            >
              <span className="flex items-center justify-center rounded-full p-2 bg-white text-red-600 mr-3">
                {service.icon}
              </span>
              <span className="font-semibold text-lg">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServiceSlider;
