import React from 'react';

function Testimonial() {
    return (
        <div className='w-full'>
            <div className='max-w-[40rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10'>
                {/* Headline for Testimonials Section */}
                <h2 className="text-3xl font-bold text-gray-800  text-center mb-10">
                    What Our Users Are Saying
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-center gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 ">
                    <div className="sm:-ms-4 py-6 sm:px-4">
                        <blockquote>
                            <span className="text-sm text-gray-800 ">
                                "Using <span className="font-semibold text-blue-600">DevTool</span> has completely transformed how I handle <span className="font-semibold text-blue-600">JSON data</span>. The parsing and validation features save me hours of work. I can't imagine going back to my old process!"
                            </span>

                            <footer className="mt-3 flex items-center">
                                <img className="shrink-0 w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                <div className="ml-2">
                                    <div className="text-xs text-gray-500 ">Josh Grazioso, Developer</div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>

                    <div className="py-6 sm:px-4 ">
                        <blockquote className='flex flex-col justify-between h-full'>
                            <span className="text-sm text-gray-800 ">
                                "<span className="font-semibold text-blue-600">DevTool</span> has been a <span className="font-semibold text-blue-600">game changer</span> for my workflow. Highly recommended for any developer!"
                            </span>

                            <footer className="mt-3 flex items-center">
                                <img className="shrink-0 w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                                <div className="ml-2">
                                    <div className="text-xs text-gray-500 ">Nita Vaidya, Software Engineer</div>
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
