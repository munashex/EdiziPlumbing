import process1 from '../images/process1.svg'
import process2 from '../images/process2.svg'
import process3 from '../images/process3.svg'
import aboutUs from '../images/aboutUs.jpg'
 
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';
import img11 from '../images/11.jpg';
import img12 from '../images/12.jpg';
import img13 from '../images/13.jpg';
import img14 from '../images/14.jpg';

const navlinks = [
    {
     name: "Home", 
     url: "/"
    }, 
    {
     name: "Services", 
     url: "/Services"
    },    
]

const process =  [
{
name: "Contact us", 
description: "We're always here when you need us for any plumbing emergency", 
image: process1
}, 
{
name: "Expert evaluation", 
description: "Our experts will evaluate the situation and look for solutions.", 
image: process2
}, 
{
name: "Problem Solved with Care", 
description: "Our team will arrive with all the necessary equipment.", 
image: process3
}
]

const aboutData = [
    {
     image: aboutUs, 
     tite: "Plumbing solutions tailored to your needs", 
     description: "Our team of skilled and experienced plumbers is dedicated to delivering prompt, professional, and courteous service, keeping your plumbing system in top condition.", 
     shortDescription1: "Experienced and certified plumbers", 
     shortDescription2: "High-quality materials and equipment", 
     shortDescription3: "Customer satisfaction guarantee"
    }
]

const plumbingFaq = [ 
    {
      id: 1,
      name: "What plumbing services do you offer?",
      description: "Nearby Plumbers offers a wide range of services including leak repairs, pipe installations, water heater maintenance, drain cleaning, heating system repairs, and more."
    }, 
    {
      id: 2, 
      name: "How can I request emergency plumbing help?", 
      description: "For urgent plumbing issues, you can call us directly for immediate assistance. We're always ready to respond quickly and resolve emergencies as soon as possible."
    }, 
    {
      id: 3, 
      name: "How do I know if I have a hidden leak?", 
      description: "Signs of hidden leaks include unusually high water bills, damp spots on walls or floors, and mold or mildew growth. If you suspect a leak, contact us for a professional inspection."
    },
    {
      id: 4, 
      name: "Do you provide maintenance services?", 
      description: "Yes, we offer routine plumbing and heating maintenance to help prevent future issues and keep your systems running efficiently year-round."
    }
  ]


const services = [
    {
      name: "Mixer & Single Taps",
      description:
        "At Nearby Plumbers, we repair or install all types of taps including sink, shower mixers, bath, basin, and outside taps. We can also fit the taps you provide.",
      image: img1,
    },
    {
      name: "Toilet Flushes & Valves",
      description:
        "Toilet issues are our specialty at Nearby Plumbers. We repair, replace, and install flushes, float valves, overflows, and leaking toilet components.",
      image: img2,
    },
    {
      name: "Shower Repairs & Installs",
      description:
        "With Nearby Plumbers’ deep shower expertise, we handle installation and repairs of power, electric, and mixer showers with ease.",
      image: img3,
    },
    {
      name: "Hot Water Cylinders",
      description:
        "We know hot water systems inside out. Nearby Plumbers handles all hot water cylinders, immersion heaters, and roof storage tank issues efficiently.",
      image: img4,
    },
    {
      name: "Cold Water Storage Tanks",
      description:
        "Leaking or dusty cold water storage tanks? Nearby Plumbers inspects, replaces lids, and ensures proper lagging to avoid damage or contamination.",
      image: img5,
    },
    {
      name: "Emergency Plumbing",
      description:
        "Plumbing emergency? Don’t worry. Call Nearby Plumbers for immediate response. We fix emergency leaks fast – your LOCAL plumber is nearby!",
      image: img6,
    },
    {
      name: "Clogged Sinks & Traps",
      description:
        "Blocked kitchen or bathroom sink? Nearby Plumbers brings the latest tools to unblock fast and get your space functioning again.",
      image: img7,
    },
    {
      name: "Blocked Showers & Baths",
      description:
        "Don’t let a blocked shower or bath ruin your day. Nearby Plumbers uses expert methods to clear blockages quickly and cleanly.",
      image: img8,
    },
    {
      name: "Blocked Toilets & Pipes",
      description:
        "Blocked toilets are no match for Nearby Plumbers. We handle both upstairs and downstairs issues with speed and professionalism.",
      image: img9,
    },
    {
      name: "Leaking Pipes & Fittings",
      description:
        "Those tiny pipe leaks can cause big problems. Nearby Plumbers fixes leaking pipes and fittings fast with reliable long-term solutions.",
      image: img10,
    },
    {
      name: "Ballvalves & Overflows",
      description:
        "A dripping overflow? Nearby Plumbers sorts all ballvalves and overflow pipe issues quickly to stop that annoying constant drip.",
      image: img11,
    },
    {
      name: "Mains Water Stopcocks",
      description:
        "The most important valve in your home! Nearby Plumbers ensures your mains stopcock is working and under control.",
      image: img12,
    },
    {
      name: "Kitchen Plumbing",
      description:
        "Need a washing machine or sink plumbed in? Nearby Plumbers does all kitchen plumbing from water lines to waste pipework, quickly and neatly.",
      image: img13,
    },
    {
      name: "Bathroom Plumbing",
      description:
        "Bathroom leaks or blockages? Nearby Plumbers handles all types of bathroom plumbing issues with minimal disruption and fast service.",
      image: img14,
    },
  ];
  

export {navlinks, process, aboutData, plumbingFaq, services}