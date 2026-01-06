import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import CountUp from 'react-countup';
import { 
    SiReact, SiJavascript, SiHtml5, SiCss3, SiTypescript, SiTailwindcss,
    SiBootstrap, SiSass, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiExpress,
    SiMongodb, SiMysql, SiPostgresql, SiGraphql, SiSocketdotio, SiRedis,
    SiGit, SiGithub, SiWebpack, SiVite, SiDocker,
    SiAmazon, SiPostman, SiFigma, SiNpm, SiJest
} from 'react-icons/si';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';
import './skills.css';

const Skills = ({ skills }) => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    const controls = useAnimation();
    const ref = useRef(null);

    // Icon mapping for skills with their brand colors
    const skillIcons = {
        'React.js': { icon: SiReact, color: '#61DAFB' },
        'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
        'HTML5': { icon: SiHtml5, color: '#E34F26' },
        'CSS3': { icon: SiCss3, color: '#1572B6' },
        'TypeScript': { icon: SiTypescript, color: '#3178C6' },
        'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
        'Bootstrap': { icon: SiBootstrap, color: '#7952B3' },
        'SASS/SCSS': { icon: SiSass, color: '#CC6699' },
        'Next.js': { icon: SiNextdotjs, color: '#000000' },
        'Vue.js': { icon: SiVuedotjs, color: '#4FC08D' },
        'Node.js': { icon: SiNodedotjs, color: '#339933' },
        'Express.js': { icon: SiExpress, color: '#000000' },
        'MongoDB': { icon: SiMongodb, color: '#47A248' },
        'MySQL': { icon: SiMysql, color: '#4479A1' },
        'PostgreSQL': { icon: SiPostgresql, color: '#336791' },
        'RESTful APIs': { icon: FaCode, color: '#FF6B6B' },
        'GraphQL': { icon: SiGraphql, color: '#E10098' },
        'JWT Authentication': { icon: FaCode, color: '#000000' },
        'Socket.io': { icon: SiSocketdotio, color: '#010101' },
        'Redis': { icon: SiRedis, color: '#DC382D' },
        'Git & GitHub': { icon: SiGit, color: '#F05032' },
        'VS Code': { icon: SiGithub, color: '#181717' },
        'Webpack': { icon: SiWebpack, color: '#8DD6F9' },
        'Vite': { icon: SiVite, color: '#646CFF' },
        'Docker': { icon: SiDocker, color: '#2496ED' },
        'AWS': { icon: SiAmazon, color: '#FF9900' },
        'Postman': { icon: SiPostman, color: '#FF6C37' },
        'Figma': { icon: SiFigma, color: '#F24E1E' },
        'NPM/Yarn': { icon: SiNpm, color: '#CB3837' },
        'Jest': { icon: SiJest, color: '#C21325' }
    };

    const categoryIcons = {
        0: FaCode,
        1: FaServer,
        2: FaTools
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    controls.start('visible');
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [controls]);

    // Simple animations
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

    // Clean Skill Card Component
    const SkillCard = ({ skill, categoryColor, index, delay }) => {
        const skillIconData = skillIcons[skill.name] || { icon: FaCode, color: categoryColor };
        const IconComponent = skillIconData.icon;
        const iconColor = skillIconData.color;
        
        const cardSpring = useSpring({
            from: { opacity: 0, transform: 'translateY(30px)' },
            to: { 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0px)' : 'translateY(30px)'
            },
            delay: delay * 50,
            config: { tension: 200, friction: 25 }
        });

        return (
            <animated.div style={cardSpring}>
                <motion.div
                    className="skill-card"
                    style={{ '--category-color': categoryColor }}
                    whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                    }}
                >
                    <div className="skill-icon-wrapper">
                        <IconComponent 
                            className="skill-icon" 
                            style={{ color: iconColor }}
                        />
                    </div>

                    <h4 className="skill-name">{skill.name}</h4>

                    {/* Simple Progress Bar */}
                    <div className="progress-container">
                        <div className="progress-info">
                            <span className="progress-label">Proficiency</span>
                            <span className="progress-percentage">
                                {isVisible && (
                                    <CountUp
                                        end={skill.level}
                                        duration={1.5}
                                        delay={delay * 0.05 + 0.5}
                                        suffix="%"
                                    />
                                )}
                            </span>
                        </div>
                        <div className="progress-bar">
                            <motion.div 
                                className="progress-fill"
                                style={{ backgroundColor: categoryColor }}
                                initial={{ width: 0 }}
                                animate={{ 
                                    width: isVisible ? `${skill.level}%` : 0
                                }}
                                transition={{ 
                                    duration: 1.2, 
                                    delay: delay * 0.05 + 0.5,
                                    ease: 'easeOut'
                                }}
                            />
                        </div>
                    </div>

                    {/* Skill Level Badge */}
                    <div 
                        className="skill-badge"
                        style={{ 
                            backgroundColor: `${categoryColor}15`, 
                            borderColor: `${categoryColor}40`,
                            color: categoryColor
                        }}
                    >
                        {skill.level >= 90 ? 'Expert' : 
                         skill.level >= 80 ? 'Advanced' : 
                         skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                    </div>
                </motion.div>
            </animated.div>
        );
    };

    // Category Button Component
    const CategoryButton = ({ category, index, isActive, onClick }) => {
        const IconComponent = categoryIcons[index];
        
        return (
            <motion.button
                className={`category-btn ${isActive ? 'active' : ''}`}
                onClick={onClick}
                style={{ '--category-color': category.color }}
                whileHover={{ 
                    y: -2,
                    transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
            >
                <IconComponent className="category-icon" />
                <span className="category-name">{category.name}</span>
                <span className="skill-count">{category.skills.length}</span>
            </motion.button>
        );
    };

    return (
        <div className="skills-section" ref={ref}>
            {/* Header Section */}
            <motion.div 
                className="skills-header"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.h2 
                    className="skills-title"
                    variants={itemVariants}
                >
                    <motion.span
                        className="title-animated"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {skills.title.split(' ').map((word, index) => (
                            <motion.span
                                key={index}
                                className="title-word"
                                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15 + 0.3,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    color: "#3b82f6",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.span>
                    
                    {/* Animated underline */}
                    <motion.div
                        className="title-underline"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ 
                            duration: 1.2, 
                            delay: skills.title.split(' ').length * 0.15 + 0.8,
                            ease: "easeInOut"
                        }}
                    />
                </motion.h2>
                
                <motion.p 
                    className="skills-description"
                    variants={itemVariants}
                >
                    {skills.description}
                </motion.p>
            </motion.div>

            {/* Category Navigation */}
            <motion.div 
                className="category-nav"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {skills.categories.map((category, index) => (
                    <CategoryButton
                        key={category.name}
                        category={category}
                        index={index}
                        isActive={activeCategory === index}
                        onClick={() => setActiveCategory(index)}
                    />
                ))}
            </motion.div>

            {/* Skills Display */}
            <motion.div 
                className="skills-display"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {skills.categories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.name}
                        className={`skill-category ${activeCategory === categoryIndex ? 'active' : ''}`}
                        initial={{ opacity: 0 }}
                        animate={{ 
                            opacity: activeCategory === categoryIndex ? 1 : 0,
                            display: activeCategory === categoryIndex ? 'block' : 'none'
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="category-header"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className="category-title">{category.name}</h3>
                            <p className="category-subtitle">
                                {category.skills.length} Technologies • 
                                <CountUp
                                    end={Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length)}
                                    duration={1.5}
                                    delay={0.3}
                                    suffix="% Average Proficiency"
                                />
                            </p>
                        </motion.div>

                        <div className="skills-grid">
                            {category.skills.map((skill, skillIndex) => (
                                <SkillCard
                                    key={skill.name}
                                    skill={skill}
                                    categoryColor={category.color}
                                    index={skillIndex}
                                    delay={skillIndex}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

           
        </div>
    );
};

export default Skills;