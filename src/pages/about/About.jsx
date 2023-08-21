import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare } from 'react-icons/fa';
import Divider from '../../components/divider/Divider';

const About = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mt-4 bg-base-100 opacity-60 py-4 rounded-3xl hover:text-white">About Cyco Tv</h2>
      <span className="divider">
        <Divider />
      </span>
      <p className='text-center py-4'>
        "Cyco TV" is a streaming platform and movie collection website, it's
        likely that it offers a range of movies, TV shows, and possibly other
        forms of entertainment content for users to watch online. Streaming
        platforms have become increasingly popular for their convenience and
        wide selection of content.Our Goal Selective and issue based online OTT
        platform to make a positive impact in our targeted audience life.For
        providing LIVE news, DSNG (Digital satellite news gathering) and Bonding
        Technology are used for emergency and live news. For news coverage
        beyond Dhaka, there are nine Bureau offices including all the divisional
        cities and more than 56 district correspondents with modern technologies
        to send news and video footage instantly.International News feed is
        taken directly from Reuters, APTN and SNTV. Special emphasis is given on
        Channel look and feel; Branding and Look is created by an international
        branding agency. Somoy Television can be seen throughout North America,
        some countries of Europe, Middle East, South Africa and some countries
        of Asia. It can also be seen through Internet with the web address
        www.somoynews.tv, Programs are also news based, focusing on the news and
        information, analysis of the news.
      </p>
      <div className='py-4'>
        <p className="text-center text-3xl bg-base-100 opacity-60 my-8 rounded-3xl py-4  hover:text-white">Meet Our Development Team </p>
        <div className="grid md:grid-cols-3">
          {/* it will be dynamic when we interigate backend  */}
          {/* Team Leader Info */}
          <div className="card w-96 bg-base-100 opacity-60 mb-4 rounded-3xl shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/BKxwwSr/badsha-removebg-preview.png"
                alt="A Person Image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Soloman Badsha</h2>
              <p>Team Leader at CYCO</p>
              <div className="card-actions">
                <FaFacebook className="text-3xl" />
                <FaGithub className="text-3xl" />
                <FaInstagramSquare className="text-3xl" />
              </div>
            </div>
          </div>
          {/* Kabir Ahmed Bhai */}
          <div className="card w-96 bg-base-100 opacity-60 mb-4 rounded-3xl shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/W6sDx0C/kabuir-removebg-preview.png"
                alt="A Person Image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Kabir Shuvo</h2>
              <p>Web Developer at CYCO</p>
              <div className="card-actions">
                <FaFacebook className="text-3xl" />
                <FaGithub className="text-3xl" />
                <FaInstagramSquare className="text-3xl" />
              </div>
            </div>
          </div>
          {/* Sarowar Islam */}
          <div className="card w-96 bg-base-100 opacity-60 mb-4 rounded-3xl shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/mNKBrT0/saro-removebg-preview.png"
                alt="A Person Image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Mohammad Sarowar</h2>
              <p>Web Developer at CYCO</p>
              <div className="card-actions">
                <FaFacebook className="text-3xl" />
                <FaGithub className="text-3xl" />
                <FaInstagramSquare className="text-3xl" />
              </div>
            </div>
          </div>
          {/* Naimul Islam */}
          <div className="card w-96 bg-base-100 opacity-60 mb-4 rounded-3xl shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/9cJht8r/Naimulhasan-removebg-preview.png"
                alt="A Person Image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Naimul Islam</h2>
              <p>Web Developer at CYCO</p>
              <div className="card-actions">
                <FaFacebook className="text-3xl" />
                <FaGithub className="text-3xl" />
                <FaInstagramSquare className="text-3xl" />
              </div>
            </div>
          </div>
          {/* Raihan SHARIF */}
          <div className="card w-96 bg-base-100 opacity-60 mb-4 rounded-3xl shadow-xl">
            <figure className="px-10 pt-8">
              <img
                src="https://i.ibb.co/3r79kgW/109515629-1.png"
                alt="A Person Image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Raihanul Islam Sharif</h2>
              <p>Web Developer at CYCO</p>
              <div className="card-actions">
                <FaFacebook className="text-3xl" />
                <FaGithub className="text-3xl" />
                <FaInstagramSquare className="text-3xl" />
              </div>
            </div>
          </div>
          {/* Annisha Siddika */}
          <div className="card w-96 bg-base-100 opacity-60 mb-4 rounded-3xl shadow-xl">
            <figure className="px-10 pt-8">
              <img
                src="https://i.ibb.co/hLTyV0w/annisha.jpg"
                alt="A Person Image"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Annisha Siddika</h2>
              <p>Web Developer at CYCO</p>
              <div className="card-actions">
                <FaFacebook className="text-3xl" />
                <FaGithub className="text-3xl" />
                <FaInstagramSquare className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
        {/* Question Answer:  */}
        <div>
          <h2 className="text-3xl text-center bg-base-100 opacity-60 py-4 rounded-3xl my-16  hover:text-white">
            Important Question And Answer (FQA)
          </h2>
          {/* <div tabIndex={0} className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
                        <div className="collapse-title">
                            
                        </div>
                        <div className="collapse-content">
                            <p> </p>
                        </div>
                    </div> */}
          {/* 1 */}
          <div
            tabIndex={0}
            className="collapse bg-base-100 bg-opacity-60 mb-4 rounded-3xl text-primary-content focus:bg-secondary focus:text-secondary-content"
          >
            <div className="collapse-title">
              Transforming OTT with User-Centric Experience
            </div>
            <div className="collapse-content">
              <p>
                CYCO is on a mission to transform the Over-The-Top (OTT)
                platform landscape. Using the robust MERN stack (MongoDB,
                Express.js, React, Node.js). we're crafting a unique,
                user-centric entertainment experience.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div
            tabIndex={0}
            className="collapse bg-base-100 bg-opacity-60 mb-4 rounded-3xl text-primary-content focus:bg-secondary focus:text-secondary-content"
          >
            <div className="collapse-title">Our Vision</div>
            <div className="collapse-content">
              <p>
                CYCO leverages modern tech for positive societal impact. Our OTT
                platform surpasses traditional entertainment by delivering
                high-quality content directly to personal devices.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div
            tabIndex={0}
            className="collapse bg-base-100 bg-opacity-60 mb-4 rounded-3xl text-primary-content focus:bg-secondary focus:text-secondary-content"
          >
            <div className="collapse-title">Industry Insights</div>
            <div className="collapse-content">
              <p>
                {' '}
                Market analysis confirms the thriving future of OTT platforms.
                With smartphones and smart TVs ubiquitous, the demand for
                on-demand entertainment soars. CYCO is poised to meet these
                evolving needs.
              </p>
            </div>
          </div>
          {/* 4 */}
          <div
            tabIndex={0}
            className="collapse bg-base-100 bg-opacity-60 mb-4 rounded-3xl  text-primary-content focus:bg-secondary focus:text-secondary-content"
          >
            <div className="collapse-title">User-Centric Approach</div>
            <div className="collapse-content">
              <p>
                {' '}
                Differentiated by user-focused design, CYCO is more than content
                delivery. Our role-based system seamlessly shifts viewers to
                contributors. This iterative approach evolves alongside user
                engagement.
              </p>
            </div>
          </div>
          {/* 5 */}
          <div
            tabIndex={0}
            className="collapse bg-base-100 bg-opacity-60 mb-4 rounded-3xl  text-primary-content focus:bg-secondary focus:text-secondary-content"
          >
            <div className="collapse-title">Personalization at its Core</div>
            <div className="collapse-content">
              <p>
                {' '}
                Meticulously curated content, advanced search, and personalized
                recommendations define CYCO's video library. Categories, tags,
                and genres cater to diverse interests, offering an unmatched
                viewing experience.
              </p>
            </div>
          </div>
          {/* 5 */}
          <div
            tabIndex={0}
            className="collapse bg-base-100 bg-opacity-60 mb-4 rounded-3xl text-primary-content focus:bg-secondary focus:text-secondary-content"
          >
            <div className="collapse-title">Roadmap to Success</div>
            <div className="collapse-content">
              <p>
                Collaboration is key. The CYCO team's unity drives limitless
                potential. Attracting stakeholders who share our vision, we're
                redefining engaging and personalized OTT experiences.
              </p>
            </div>
          </div>
          {/* 6 */}
          <div
            tabIndex={0}
            className="collapse bg-base-100 bg-opacity-60 mb-4 rounded-3xl  text-primary-content focus:bg-secondary focus:text-secondary-content"
          >
            <div className="collapse-title">Join the Revolution</div>
            <div className="collapse-content">
              <p>
                CYCO is a tech-driven mission to reshape entertainment for the
                better. Embracing innovation, collaboration, and tech's power
                for positive change, we invite you to join us in revolutionizing
                OTT platforms. In search of a sponsor, donor, or investor to
                support our vision. With unwavering belief in our plan's
                potential, we welcome your valuable suggestions as we forge
                ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
