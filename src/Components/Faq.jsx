import { useState } from "react";
import {plumbingFaq} from '../data/app'
import { AiOutlinePlus } from "react-icons/ai"; 
import { TfiClose } from "react-icons/tfi";

const Faq = () => {
  const [tab, setTab] = useState('');

  const toggleTab = (name) => {
    setTab(name);
  };

  const findActiveTabInformation = plumbingFaq.find((faq) => faq.name === tab);

  const closeAccordion = () => {
    setTab('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl text-center lg:text-start">Frequently Asked Questions</h1> 
      <div className="py-16 lg:p-16 p-3 mt-11 rounded-xl bg-gray-100">
        <div className="space-y-11">
          {plumbingFaq.map((faq) => (
            <div key={faq.id}> 
              {faq.name === findActiveTabInformation?.name ? 
                <div className="bg-[#0A0308] transition delay-75 duration-100 animate-fade-down text-[#C5C4C5] py-9 px-4 rounded-2xl">
                  <div className="space-y-4"> 
                    <div className="flex flex-row justify-between items-start"> 
                      <h1 className="md:text-lg text-start font-extrabold lg:text-xl max-w-[90%] md:max-w-xl lg:max-w-none">
                        {findActiveTabInformation.name}
                      </h1> 
                      <button onClick={closeAccordion} className="rounded-none outline-none">
                        <TfiClose size={18} />
                      </button>
                    </div>
                    <h1 className="max-w-lg md:max-w-3xl lg:max-w-5xl">
                      {findActiveTabInformation.description}
                    </h1>
                  </div>
                </div>
              : 
                <div>
                  <button 
                    onClick={() => toggleTab(faq.name)} 
                    className="flex border-none outline-none flex-row justify-between w-full"
                  > 
                    <h1 className="md:text-lg text-start lg:text-xl max-w-sm md:max-w-xl lg:max-w-none">
                      {faq.name}
                    </h1> 
                    <button>
                      <AiOutlinePlus size={20} />
                    </button>
                  </button>
                </div>
              }
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
};

export default Faq;
