"use client";
import React from 'react'

function OurCompanies() {
    const sites = [
        "https://bhartisharemarket.com/",
        "https://ravindrabharti.com/",
        "https://bhartiresort.com/index.html",
        "https://ravindrabharti.com/",
        "https://bhartisofttech.com/",
        "https://bhartisharemarket.com/",
        "https://ravindrabharti.com/",
        "https://bhartiresort.com/index.html",
    ];

    const redirectToSite = (index) => {
        // Redirect to the selected site based on the index
        window.open(sites[index], '_blank'); // Opens in a new tab
    };

    const companies = [
        {
            name: "Bharti Share Market", description: "Bharti Share Market, your premier destination for comprehensive stock market education.Our range of popular courses caters to both beginners and advanced traders, ensuring that everyone can benefit from ourexpertise.With options for both online and offline training, participants delve into the fundamentals of stock market investing, covering essential topics like fundamental analysis and intraday trading strategies.", image: "/bsm.jpg"
        },
        { name: "R Bharti Enterprises", description: "As a leader in financial education, Bharti Share Market addresses India’s financial literacy gap. We offer comprehensive training in stock market trading and investing, with a focus on risk management, trading fundamentals, technical analysis, and real-world applications.", image: "/bhartilogo.jpg" },
        { name: "Bharti Resort", description: "At Bharti Resort Adventure & Amusement Park, we offer a unique blend of luxury and adventure. Located in Boriaindi near Uruli Kanchan on the Pune-Solapur Highway, our 52-acre resort features India’s largest Ferris wheel and a range of amusement and adventure activities.We provide an exceptional escape from the everyday hustle, perfect for family outings, corporate events, and one-day picnics. ", image: "/bhartiresort.jpg" },
        { name: "Bharti Business Consultancy", description: "Inspired by Prof. Ravindra Bharti Sir, Bharti Business Consultancy is dedicated to nurturing entrepreneurs and guiding them from inception to IPO. We provide tailored solutions and strategic insights to help businesses overcome challenges and achieve sustainable growth.", image: "/bbc.jpg" },
        { name: "Bharti SoftTech", description: "Bharti SoftTech is committed to advancing business success by leveraging cutting-edge technology. Our approach involves synergistically incentivizing effective strategies through thoroughly researched intellectual capital, allowing us to craft bespoke solutions tailored to each client’s needs.", image: "/bst.jpg" },
        { name: "Bharti Realty", description: "Bharti Realty is dedicated to creating unparalleled living experiences.Our flagship project, 7 KINGDOMS, offers seven exclusive plots     designed to transform your vision of luxury into a reality. Each plot is meticulously crafted to offer the highest standards of elegance and tranquillity, providing a perfect canvas for your dream home.", image: "/br.jpg" },
        { name: "Bharti Digital Marketing", description: "Bharti Media and Marketing is a leading full-service marketing agency specializing in innovative media solutions.  Our mission is to help businesses enhance their online presence and achieve their marketing goals through tailored campaigns and creative strategies.", image: "/bdm.jpg" },
        // { name: "Company 4", description: "Innovative tech solutions.", image: "https://via.placeholder.com/150" }
        // Add more companies as needed
    ];
    return (
        <div className="p-6 lg:p-10">
            <h2 className="text-5xl font-bold mb-5 text-center">Our Companies</h2>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2  gap-4">
                {companies.map((company, index) => (
                    <div key={index} className="bg-white rounded shadow-md p-4 transition-transform duration-300 hover:scale-95 flex flex-col space-y-3 px-3 justify-between">
                        <img src={company.image} alt={company.name} className="w-full 
                        object-cover md:h-24" />
                        <h3 className="text-lg font-bold  text-center">{company.name}</h3>
                        <p className="text-gray-600 text-sm text-justify lg:h-60 h-auto">{company.description}</p>
                        <div className="flex justify-center  ">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 my-4 rounded-full transition duration-300 ease-in-out" onClick={() => redirectToSite(index)}>
                                Know More
                            </button>
                        </div>
                    </div>
                ))},
            </div>
        </div>
    )
}

export default OurCompanies