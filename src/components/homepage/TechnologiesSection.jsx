import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVscodium
} from 'react-icons/si';

const TechnologiesSection = () => {
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

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-slate-50 to-blue-100 dark:bg-gray-900 dark:bg-none border-b border-gray-200 dark:border-gray-800">
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
            Technologies & Skills
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-primary rounded-full"></span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            My technical toolbox. I leverage the MERN stack and modern development tools to build robust, scalable applications.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Frontend Category */}
          <motion.div 
            className="bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group/cat"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <i className="material-icons">laptop_mac</i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Frontend</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Specializing in building responsive, pixel-perfect user interfaces. I leverage React's component-based architecture to create dynamic and accessible web experiences.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <TechIcon name="React" icon={<SiReact />} iconColor="#61DAFB" />
              <TechIcon name="JavaScript" icon={<SiJavascript />} iconColor="#F7DF1E" />
              <TechIcon name="HTML5" icon={<SiHtml5 />} iconColor="#E34F26" />
              <TechIcon name="CSS3" icon={<SiCss3 />} iconColor="#1572B6" />
            </div>
          </motion.div>

          {/* Backend Category */}
          <motion.div 
            className="bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group/cat"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <i className="material-icons">dns</i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Backend</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Developing robust server-side logic and REST APIs. I use Node.js and Express to build scalable backends that handle complex business logic securely.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <TechIcon name="Node.js" icon={<SiNodedotjs />} iconColor="#339933" />
              <TechIcon name="Express" icon={<SiExpress />} iconColor="#000000" />
              <TechIcon name="REST API" icon="API" iconColor="#8B5CF6" />
            </div>
          </motion.div>

          {/* Database Category */}
          <motion.div 
            className="bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group/cat"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <i className="material-icons">storage</i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Database</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Expertise in designing flexible data schemas. I utilize MongoDB for scalable document storage and Firebase for real-time data synchronization needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <TechIcon name="MongoDB" icon={<SiMongodb />} iconColor="#47A248" />
              </div>
              <TechIcon name="MySQL" icon={<SiMysql />} iconColor="#4479A1" />
              <TechIcon name="Firebase" icon={<SiFirebase />} iconColor="#FFCA28" />
            </div>
          </motion.div>

          {/* Tools Category */}
          <motion.div 
            className="bg-white dark:bg-card-dark rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group/cat"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <i className="material-icons">build</i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Tools</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Streamlining the development lifecycle. I rely on Git for version control and GitHub for collaboration, ensuring code quality and efficient deployment workflows.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <TechIcon name="Git" icon={<SiGit />} iconColor="#F05032" />
              <TechIcon name="GitHub" icon={<SiGithub />} iconColor="#181717" />
              <TechIcon name="VS Code" icon={<SiVscodium />} iconColor="#007ACC" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TechIcon = ({ name, icon, iconColor }) => (
  <motion.div 
    className="tech-icon-container flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 group transition-all duration-300"
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <div 
      className="tech-icon w-10 h-10 mb-3 flex items-center justify-center text-3xl" 
      style={{ color: iconColor }}
    >
      {typeof icon === 'string' ? (
        <span className="font-bold text-lg" style={{ color: iconColor }}>
          {icon}
        </span>
      ) : (
        <span style={{ color: iconColor }}>
          {icon}
        </span>
      )}
    </div>
    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
      {name}
    </span>
  </motion.div>
);

export default TechnologiesSection;