import React from 'react';

function Testimonial() {
    return (
        <div className='w-full'>
            <div className='max-w-[40rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10'>
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10" aria-level="2">
                    What Our Users Are Saying
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                    <div className="sm:-ms-4 py-6 sm:px-4">
                        <blockquote>
                            <span className="text-sm text-gray-800">
                        Great product! I particularly love the <span className="font-semibold text-blue-600"> JSON formatter </span> it works well even on <span className="font-semibold text-blue-600"> compact JSON.</span> Although it's a relatively simple product, it performs admirably and has a nice user interface
                        </span>
                            <footer className="mt-3 flex items-center">
                                <img
                                    className="shrink-0 w-10 h-10 rounded-full"
                                    src="https://avatars.githubusercontent.com/u/144354322?v=4"
                                    alt="Vaibhav Suryawansi, Data Analyst"
                                    loading="lazy"
                                />
                                <div className="ml-2">
                                    <div className="text-xs text-gray-500">Vaibhav Suryawansi, Data Analyst</div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>

                    <div className="py-6 sm:px-4">
                        <blockquote className='flex flex-col justify-between h-full'>
                            <span className="text-sm text-gray-800">
                                "<span className="font-semibold text-blue-600">DevTool</span> has been a <span className="font-semibold text-blue-600">game changer</span> for my workflow. Highly recommended for any developer!"
                            </span>

                            <footer className="mt-3 flex items-center">
                                <img
                                    className="shrink-0 w-10 h-10 rounded-full"
                                    src="https://avatars.githubusercontent.com/u/143414991?v=4"
                                    alt="Abhinav Shinde, Web Devloper"
                                    loading="lazy"
                                />
                                <div className="ml-2">
                                    <div className="text-xs text-gray-500">Abhinav Shinde, Web Devloper</div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
