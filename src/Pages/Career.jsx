import React from "react";
import { motion } from "framer-motion";
import {
  FaPenNib,
  FaCameraRetro,
  FaLaptopCode,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import careerImg from "../assets/news-career.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Career = () => {
  return (
    <div className="relative overflow-hidden max-w-10/12 mx-auto mt-10">
      <div className="relative bg-transparent py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-gray-700">
            Careers at The Digital Tribune
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Join our mission to deliver truthful, impactful, and engaging
            stories to readers worldwide. At{" "}
            <strong>The Digital Tribune</strong>, we value creativity,
            collaboration, and curiosity.
          </p>
          <motion.img
            src={careerImg}
            alt="Teamwork"
            className="w-full h-[500px] object-fit rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="max-w-6xl mx-auto mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700 mt-20">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl text-reddish mb-3" />,
                title: "Collaborative Culture",
                desc: "Work with passionate journalists, creatives, and tech innovators.",
              },
              {
                icon: <FaGlobe className="text-4xl text-reddish mb-3" />,
                title: "Global Impact",
                desc: "Your work reaches a worldwide audience, shaping perspectives.",
              },
              {
                icon: <FaLaptopCode className="text-4xl text-reddish mb-3" />,
                title: "Innovation First",
                desc: "We embrace new ideas and technologies to deliver quality content.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="card bg-base-200 shadow-lg p-6"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i + 1) * 0.2 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Openings */}
        <motion.div
          className="max-w-6xl mx-auto mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700 mt-20">
            Current Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaPenNib className="text-4xl text-reddish mb-3" />,
                title: "Content Writer",
                desc: "Create compelling news stories, features, and editorials.",
                link: "#",
              },
              {
                icon: <FaCameraRetro className="text-4xl text-reddish mb-3" />,
                title: "Photojournalist",
                desc: "Capture powerful images that tell real stories.",
                link: "#",
              },
              {
                icon: <FaLaptopCode className="text-4xl text-reddish mb-3" />,
                title: "Front-End Developer",
                desc: "Build engaging and responsive news portal features.",
                link: "#",
              },
            ].map((job, i) => (
              <motion.div
                key={i}
                className="card bg-base-200 shadow-lg p-6 flex flex-col justify-between"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (i + 1) * 0.2 }}
              >
                {job.icon}
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-700 flex-grow">{job.desc}</p>
                <button
                  type="submit"
                  className=" w-full relative inline-flex items-center justify-center px-2 lg:px-7 py-2 overflow-hidden font-medium transition-all bg-gray-700 rounded group mt-4"
                >
                  <span className="w-full h-48 rounded rotate-[-40deg] bg-[#D72050] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-white text-center transition-colors duration-300 ease-in-out ">
                    Apply Now
                  </span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section with DaisyUI Accordion */}
        <motion.section
          className="mt-20 rounded-lg shadow-md p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {[
              {
                q: "Can I apply without all listed qualifications?",
                a: "Yes—please apply if you feel passionate, even if not all boxes are checked.",
              },
              {
                q: "Do you offer remote or flexible work?",
                a: "Yes, depending on the role and location, we offer flexible or hybrid work options.",
              },
              {
                q: "What is the hiring process?",
                a: "Our process includes application review, interviews, and a final selection phase.",
              },
              {
                q: "Will I receive feedback if not selected?",
                a: "Yes, we strive to provide constructive feedback whenever possible.",
              },
              {
                q: "Can I apply for multiple positions?",
                a: "Absolutely—you can apply for any roles that match your skills and interests.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="collapse collapse-arrow bg-base-100 border border-base-300"
              >
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                  {faq.q}
                </div>
                <div className="collapse-content">
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Career;
