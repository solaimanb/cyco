import React from 'react';
import { FaFacebook,FaGithub,FaInstagramSquare } from "react-icons/fa";

const About = () => {
    return (
        <div>
            <h2 className='text-center text-4xl mt-3'>About Cyco Tv</h2>
            <span className='divider'></span>
            <p>"Cyco TV" is a streaming platform and movie collection website, it's likely that it offers a range of movies, TV shows, and possibly other forms of entertainment content for users to watch online. Streaming platforms have become increasingly popular for their convenience and wide selection of content.Our Goal Selective and issue based online OTT platform to make a positive impact in our
                targeted audience life.For providing LIVE news, DSNG (Digital satellite news gathering) and Bonding Technology are used for emergency and live news. For news coverage beyond Dhaka, there are nine Bureau offices including all the divisional cities and more than 56 district correspondents with modern technologies to send news and video footage instantly.International News feed is taken directly from Reuters, APTN and SNTV. Special emphasis is given on Channel look and feel; Branding and Look is created by an international branding agency. Somoy Television can be seen throughout North America, some countries of Europe, Middle East, South Africa and some countries of Asia. It can also be seen through Internet with the web address www.somoynews.tv, Programs are also news based, focusing on the news and information, analysis of the news.</p>
            <div>
                <p className='text-center text-3xl'>Meet Our Development Team </p>
                <div className='grid md:grid-cols-3'>
                    {/* it will be dynamic when we interigate backend  */}
                    {/* Team Leader Info */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://avatars.githubusercontent.com/u/128588177?v=4" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Soloman Badsha</h2>
                            <p>Team Leader at CYCO</p>
                            <div className="card-actions">
                                <FaFacebook className='text-3xl'/>
                                <FaGithub className='text-3xl'/>
                                <FaInstagramSquare className='text-3xl'/>
                            </div>
                        </div>
                    </div>
                    {/* Kabir Ahmed Bhai */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://avatars.githubusercontent.com/u/26973543?v=4" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Kabir Shuvo</h2>
                            <p>Web Developer at CYCO</p>
                            <div className="card-actions">
                                <FaFacebook className='text-3xl'/>
                                <FaGithub className='text-3xl'/>
                                <FaInstagramSquare className='text-3xl'/>
                            </div>
                        </div>
                    </div>
                    {/* Sarowar Islam */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://camo.githubusercontent.com/919e0398bad60d0bf005d1332f535a204996d600d90dc369f6bc4dac4f7b242c/68747470733a2f2f692e6962622e636f2f506d59314664372f5361726f3537363134393139303139383935302d353435393331333437393439303031353139332d6e2d72656d6f766562672d707265766965772e706e67" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Mohammad Sarowar</h2>
                            <p>Web Developer at CYCO</p>
                            <div className="card-actions">
                                <FaFacebook className='text-3xl'/>
                                <FaGithub className='text-3xl'/>
                                <FaInstagramSquare className='text-3xl'/>
                            </div>
                        </div>
                    </div>
                    {/* Naimul Islam */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://cdn.discordapp.com/attachments/1135706366275756032/1141088402301796403/Naimulhasan.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Naimul Islam</h2>
                            <p>Web Developer at CYCO</p>
                            <div className="card-actions">
                                <FaFacebook className='text-3xl'/>
                                <FaGithub className='text-3xl'/>
                                <FaInstagramSquare className='text-3xl'/>
                            </div>
                        </div>
                    </div>
                    {/* Raihan SHARIF */}
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://avatars.githubusercontent.com/u/109515629?s=400&u=9de12aeb47e008185184a5b598ca288e4db86442&v=4" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Raihanul Islam Sharif</h2>
                            <p>Web Developer at CYCO</p>
                            <div className="card-actions">
                                <FaFacebook className='text-3xl'/>
                                <FaGithub className='text-3xl'/>
                                <FaInstagramSquare className='text-3xl'/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Question Answer:  */}
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;