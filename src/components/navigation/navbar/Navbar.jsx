import React from 'react'
import { Link } from 'react-router-dom'
import devLogo from '/code.png'
function Navbar() {
    return (
        <div className=''>
            <header className="fixed  top-4 inset-x-0 before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:border before:border-gray-200  after:absolute after:inset-0 after:-z-[1] after:max-w-[66rem] after:mx-2  after:lg:mx-auto after:rounded-[26px] after:bg-white  flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
                <nav className="relative max-w-[66rem] w-full md:flex md:items-center md:justify-between md:gap-3 ps-5 pe-2 mx-2 lg:mx-auto py-2 ">
                    <div className="flex items-center justify-between gap-10 ">
                        <Link to="/" className="flex items-center flex-grow font-semibold text-xl text-black  focus:opacity-80" aria-label="Dev Tool">
                            <img src={devLogo} alt="Dev Tool Logo" className="w-6 h-6 mr-2" />
                            <p className=" whitespace-normal flex-shrink-0">Dev Tool</p>
                        </Link>
                        <div className="md:hidden">
                            <button type="button" className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none " id="hs-header-classic-collapse" aria-expanded="false" aria-controls="hs-header-classic" aria-label="Toggle navigation" data-hs-collapse="#hs-header-classic">
                                <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                        </div>
                    </div>
                    <div id="hs-header-classic" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block " aria-labelledby="hs-header-classic-collapse">
                        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                                <Link to='/' className={`p-2 flex items-center text-sm ${location.pathname === '/' ? 'text-blue-600' : 'text-gray-800'} hover:text-gray-500 focus:outline-none`} aria-current={location.pathname === '/' ? 'page' : undefined}>
                                    <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                                    Landing
                                </Link>

                                <Link to='/json-formator' className={`p-2 flex items-center text-sm ${location.pathname === '/json-formator' ? 'text-blue-600' : 'text-gray-800'} hover:text-gray-500`} aria-current={location.pathname === '/json-formator' ? 'page' : undefined}>
                                    <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    Json Formator
                                </Link>

                                <Link to='/json-to-csv' className={`p-2 flex items-center text-sm ${location.pathname === '/json-to-csv' ? 'text-blue-600' : 'text-gray-800'} hover:text-gray-500`} aria-current={location.pathname === '/json-to-csv' ? 'page' : undefined}>
                                    <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    Json to Csv
                                </Link>
                                <Link to='/html-to-pdf' className={`p-2 flex items-center text-sm ${location.pathname === '/html-to-pdf' ? 'text-blue-600' : 'text-gray-800'} hover:text-gray-500`} aria-current={location.pathname === '/html-to-pdf' ? 'page' : undefined}>
                                    <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                    Html to Pdf
                                </Link>

                                <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5  md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2 dark:before:bg-neutral-700">
                                    <Link to='/signin' className={`p-2 flex items-center text-sm ${location.pathname === '/signin' ? 'text-blue-600' : 'text-gray-800'} hover:text-gray-500`} aria-current={location.pathname === '/json-to-csv' ? 'page' : undefined}>
                                        <svg className="shrink-0 size-4 me-3 md:me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
