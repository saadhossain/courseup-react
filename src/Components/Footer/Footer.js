import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#181A1B] py-5 mt-10'>
            <div className='md:w-10/12 mx-auto'>
                <section className='md:flex justify-between gap-5 md:gap-10 ml-10 md:ml-0'>
                    {/* Compnay information */}
                    <div>
                        <h4 className='text-xl font-bold'>Company</h4>
                        <ul className='mt-2 md:mt-5'>
                            <li>About</li>
                            <li>Blogs</li>
                            <li>Careers</li>
                            <li>Affiliate</li>
                            <li>Partnership</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Comunity</h4>
                        <ul className='mt-2 md:mt-5'>
                            <li>Team Plans</li>
                            <li>Refer a Friend</li>
                            <li>Limited Membership</li>
                            <li>Schoolership</li>
                            <li>Free Classes</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Importants</h4>
                        <ul className='mt-2 md:mt-5'>
                            <li>Become a Teacher</li>
                            <li>Teacher Help Center</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Student Care Team</li>
                        </ul>
                    </div>
                </section>
                <section className='border-t border-violet-500 mt-5 text-center'>
                    <p className='py-2'>&copy; 2023, CourseUp Inc.</p>
                </section>
            </div>
        </div>
    );
};

export default Footer;