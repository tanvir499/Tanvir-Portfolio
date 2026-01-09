import { motion } from 'framer-motion';

const EducationTimeline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const education = [
    {
      year: "2020 - 2024",
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      description: "Focused on software engineering, data structures, and web development technologies.",
      icon: "school"
    },
    {
      year: "2022 - 2023",
      degree: "Full Stack Web Development",
      institution: "Online Certification",
      description: "Comprehensive training in MERN stack development and modern web technologies.",
      icon: "code"
    },
    {
      year: "2023 - Present",
      degree: "Continuous Learning",
      institution: "Self-Directed",
      description: "Staying updated with latest technologies, frameworks, and industry best practices.",
      icon: "trending_up"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block"
            variants={itemVariants}
          >
            Education & Learning
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-primary rounded-full"></span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            My educational journey and continuous learning path in web development.
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex items-start mb-12 last:mb-0"
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
              
              {/* Timeline Icon */}
              <div className="absolute left-4 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center ml-12">
                <i className="material-icons text-blue-600 dark:text-blue-400 text-sm">{item.icon}</i>
              </div>

              {/* Content */}
              <div className="ml-24 bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                  {item.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationTimeline;