import { motion } from "framer-motion";
import { FaNewspaper, FaGlobe, FaUsers, FaHistory } from "react-icons/fa";
import aboutImg from "../assets/news-about.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
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
            About The Digital Tribune
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            <strong>The Digital Tribune</strong> is a forward-thinking news
            platform dedicated to delivering factual, timely, and engaging
            journalism. Rooted in the tradition of classic newspapers, we bring
            those values into the digital era—making news accessible to
            everyone, anywhere, anytime.
          </p>
          <motion.img
            src={aboutImg}
            alt="Newspaper"
            className="w-full h-[500px] object-fit rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
          />
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          className="max-w-6xl mx-auto mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700 mt-20">
            Mission & Vision
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FaNewspaper className="text-4xl text-reddish mb-3" />,
                title: "Our Mission",
                desc: "To provide readers with authentic and meaningful stories that matter—stories that spark conversations, challenge perspectives, and connect communities.",
              },
              {
                icon: <FaGlobe className="text-4xl text-reddish mb-3" />,
                title: "Our Vision",
                desc: "To become the go-to platform for news in the digital age—trusted, accessible, and dedicated to delivering diverse perspectives from around the globe.",
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
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="max-w-6xl mx-auto mt-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-700 mt-20">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl text-reddish mb-3" />,
                title: "People-Centered",
                desc: "Our readers are at the heart of everything we do. We amplify voices, share experiences, and bring communities closer.",
              },
              {
                icon: <FaHistory className="text-4xl text-reddish mb-3" />,
                title: "Rooted in Tradition",
                desc: "While our platform is digital, our principles are built on the strong foundation of traditional journalism—truth, accuracy, and integrity.",
              },
              {
                icon: <FaGlobe className="text-4xl text-reddish mb-3" />,
                title: "Global Perspective",
                desc: "We cover stories beyond borders, providing a global view while staying relevant to local audiences.",
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

        {/* Closing Statement */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-3 text-gray-700 mt-20">
            Why Choose Us?
          </h2>
          <p className="text-gray-700">
            At <strong>The Digital Tribune</strong>, we merge the authenticity
            of traditional journalism with the power of modern technology. We
            understand that the news is more than just headlines—it’s about
            stories that shape our lives and our future.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
