import { useState } from "react";
import { services } from "../data/app";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Plumbing Services | Edizi</title>
        <meta
          name="description"
          content="Explore Edizi's full range of plumbing and heating services including repairs, installations, emergency plumbing and more."
        />
        <meta
          name="keywords"
          content="Edizi plumbing, heating services, emergency plumbing, tap repair, toilet repair, shower installation"
        />
        <meta name="author" content="Edizi Plumbing and Heating Ltd" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Plumbing Services | Edizi" />
        <meta
          property="og:description"
          content="Professional plumbing and heating solutions by Edizi. Taps, showers, toilets, emergency leaks and more."
        />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plumbing Services | Edizi" />
        <meta
          name="twitter:description"
          content="Edizi provides professional plumbing and heating services for homes and businesses."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />
      </Helmet>

      <div className="mt-12 md:mt-16 lg:mt-24">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">Services</h1>
          <p className="text-center lg:max-w-xl lg:text-lg">
            We offer a comprehensive range of plumbing services designed to
            address all your plumbing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16 lg:mt-24 px-4 md:px-8 lg:px-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

const ServiceCard = ({ service }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="w-full h-52 lg:h-64 bg-gray-200 relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
            <span className="text-sm text-gray-400">Loading image...</span>
          </div>
        )}
        <img
          src={service.image}
          alt={service.name}
          className={`w-full h-full object-cover ${loading ? "hidden" : "block"}`}
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            setLoading(false);
          }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{service.name}</h2>
        <p className="text-sm text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

export default Services;
