import { motion } from 'framer-motion';

const ProjectsShowcase = () => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/400/250",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management with drag-and-drop functionality.",
      tech: ["React", "Express", "Socket.io", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and charts.",
      tech: ["React", "Chart.js", "Weather API", "CSS3"],
      image: "/api/placeholder/400/250",
      link: "#"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-slate-50 to-blue-100 dark:bg-gray-900 dark:bg-none">
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
            Featured Projects
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-primary rounded-full"></span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Here are some of my recent projects that showcase my skills and experience.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-card-dark rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="material-icons text-4xl text-gray-400">image</i>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  whileHover={{ x: 5 }}
                >
                  View Project
                  <i className="material-icons text-sm">arrow_forward</i>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <motion.a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <i className="material-icons">arrow_forward</i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;