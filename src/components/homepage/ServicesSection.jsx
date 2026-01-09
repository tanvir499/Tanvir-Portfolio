import { motion } from 'framer-motion';

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const services = [
    {
      icon: "web",
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Node.js, and MongoDB."
    },
    {
      icon: "mobile_friendly",
      title: "Responsive Design",
      description: "Mobile-first responsive websites that work seamlessly across all devices and screen sizes."
    },
    {
      icon: "api",
      title: "API Development",
      description: "RESTful APIs and backend services with secure authentication and data management."
    },
    {
      icon: "speed",
      title: "Performance Optimization",
      description: "Website speed optimization and performance tuning for better user experience."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
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
            Services I Offer
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-primary rounded-full"></span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            I provide comprehensive web development services to help bring your ideas to life.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group text-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <i className="material-icons text-2xl">{service.icon}</i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;