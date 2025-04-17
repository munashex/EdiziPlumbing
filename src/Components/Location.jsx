import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Location = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-16">
      {/* Left section */}
      <div className="space-y-6 w-full lg:w-1/2">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
          Let's get in touch and work together!
        </h1>
        <h1>
          Whether you’re dealing with an emergency, need routine maintenance, or have a question about our services, our team at Edizing Plumbing and Heating is ready to assist you.
        </h1>

        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-3">
            <span className="bg-red p-2 rounded-full">
              <FaPhoneAlt color="white" size={17} />
            </span>
            <a href="tel:07397191375" className="font-bold lg:text-lg hover:underline">
              07397 191 375
            </a>
          </div>

          <div className="inline-flex items-center gap-3">
            <span className="bg-red p-2 rounded-full animate-pulse">
              <MdLocationOn size={20} color="white" />
            </span>
            <span className="font-bold lg:text-lg">Based in Cardiff, Wales</span>
          </div>
        </div>
      </div>

      {/* Right section: Map */}
      <div className="w-full lg:w-1/2 h-[400px] lg:h-[450px] rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79475.14192800935!2d-3.20505!3d51.50224075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e02d434ec53f5%3A0x143406db6586670e!2sCardiff%2C%20UK!5e0!3m2!1sen!2sza!4v1744873984283!5m2!1sen!2sza"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;


