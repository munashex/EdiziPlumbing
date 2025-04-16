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

export {navlinks, process, aboutData}