import React from 'react';
import { FileText, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureItem = ({ icon, title, description }) => (
    <div className="flex gap-x-5 sm:gap-x-8">
        <span className="shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto">
            {icon}
        </span>
        <div className="grow">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {title}
            </h3>
            <p className="mt-1 text-gray-600">
                {description}
            </p>
        </div>
    </div>
);

const Features = () => {
    return (
        <section className="max-w-[66rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <h1 className='text-center font-semibold text-4xl mb-8' aria-level="1">
                Our Features
            </h1>
            <div className="max-w-5xl mx-auto">
                <div className="border shadow-sm rounded-xl p-4 lg:p-8 text-black grid grid-cols-1 sm:grid-cols-3 gap-y-20 gap-x-12">
                    <StatItem icon="🌟" stat="2+" description="JSON Products" />
                    <StatItem icon="😊" stat="85%" description="Happy Customers" />
                    <StatItem icon="📊" stat="20+ CSV" description="Downloads Daily" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="lg:w-3/4">
                    <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl">
                        Powerful Tools for Effortless JSON Management
                    </h2>
                    <p className="mt-3 text-gray-800">
                        Transform the way you handle data with our intuitive tools designed specifically for JSON manipulation and visualization.
                    </p>
                    <p className="mt-5">
                        <Link to={'/json-formator'} className="inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium hover:underline">
                            Manage Your JSON Now
                            <span className="ml-1 transition-transform duration-300 transform">
                                <ArrowRight />
                            </span>
                        </Link>
                    </p>
                </div>

                <div className="space-y-6 lg:space-y-10">
                    <FeatureItem
                        icon={<FileText />}
                        title="Streamlined JSON Parsing"
                        description="Quickly parse and validate JSON data structures, enabling developers to focus on building without data handling worries."
                    />
                    <FeatureItem
                        icon={<ArrowRight />}
                        title="Dynamic Data Transformation"
                        description="Effortlessly transform your JSON data for improved workflows, facilitating real-time updates and integrations."
                    />
                    <FeatureItem
                        icon={<Eye />}
                        title="Interactive JSON Viewer"
                        description="Visualize your JSON data interactively, making it easier to analyze and share insights with your team."
                    />
                </div>
            </div>
        </section>
    );
};

const StatItem = ({ icon, stat, description }) => (
    <div className="relative text-center">
        <span className="text-3xl sm:text-4xl font-semibold text-black">{icon}</span>
        <div className="mt-3 sm:mt-5">
            <h3 className="text-lg sm:text-3xl font-semibold text-black">{stat}</h3>
            <p className="mt-1 text-sm sm:text-base text-neutral-400">{description}</p>
        </div>
    </div>
);

export default Features;
