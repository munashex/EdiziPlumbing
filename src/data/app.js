import process1 from '../images/process1.svg'
import process2 from '../images/process2.svg'
import process3 from '../images/process3.svg'
import aboutUs from '../images/aboutUs.jpg'

const navlinks = [
    {
     name: "Home", 
     url: "/"
    }, 
    {
     name: "Services", 
     url: "/Services"
    }, 
    {
    name: "About", 
    url: "/About"
    }
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
      description: "Edizing Plumbing and Heating offers a wide range of services including leak repairs, pipe installations, water heater maintenance, drain cleaning, heating system repairs, and more."
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
  

export {navlinks, process, aboutData, plumbingFaq}