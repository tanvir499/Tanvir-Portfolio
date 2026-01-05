import { useState, useEffect, useRef } from 'react';
import './skills.css';

const Skills = ({ skills }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [animatedSkills, setAnimatedSkills] = useState({});
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [viewMode, setViewMode] = useState('circular'); // 'circular' or 'bars'
    const [activeCategory, setActiveCategory] = useState(0);
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Start animating skill bars after component becomes visible
                    setTimeout(() => {
                        const animated = {};
                        skills.categories.forEach(category => {
                            category.skills.forEach(skill => {
                                animated[skill.name] = skill.level;
                            });
                        });
                        setAnimatedSkills(animated);
                    }, 500);
                }
            },
            { threshold: 0.2 }
        );

        if (skillsRef.current) {
            observer.observe(skillsRef.current);
        }

        return () => {
            if (skillsRef.current) {
                observer.unobserve(skillsRef.current);
            }
        };
    }, [skills]);

    const CircularProgress = ({ skill, categoryColor, delay }) => {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        const strokeDasharray = circumference;
        const strokeDashoffset = circumference - (skill.level / 100) * circumference;

        return (
            <div className="circular-progress" style={{ animationDelay: `${delay}s` }}>
                <svg width="120" height="120" className="progress-ring">
                    <defs>
                        <linearGradient id={`gradient-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={categoryColor} />
                            <stop offset="50%" stopColor={`${categoryColor}CC`} />
                            <stop offset="100%" stopColor={`${categoryColor}80`} />
                        </linearGradient>
                        <filter id={`glow-${skill.name}`}>
                            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                            <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                        <filter id={`shadow-${skill.name}`}>
                            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={categoryColor} floodOpacity="0.3"/>
                        </filter>
                    </defs>
                    
                    {/* Background circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="6"
                        fill="transparent"
                        className="progress-bg"
                    />
                    
                    {/* Progress circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        stroke={`url(#gradient-${skill.name})`}
                        strokeWidth="6"
                        fill="transparent"
                        strokeLinecap="round"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={isVisible ? strokeDashoffset : circumference}
                        className="progress-circle"
                        filter={`url(#shadow-${skill.name})`}
                        style={{
                            transition: 'stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            transitionDelay: `${delay}s`
                        }}
                    />
                    
                    {/* Animated dots along the circle */}
                    <circle
                        cx="60"
                        cy="15"
                        r="3"
                        fill={categoryColor}
                        className="progress-dot"
                        style={{
                            transformOrigin: '60px 60px',
                            animation: `rotateDot 3s linear infinite ${delay}s`
                        }}
                    />
                </svg>
                
                <div className="progress-content">
                    <div className="skill-icon-large">{skill.icon}</div>
                    <div className="skill-percentage-large">
                        <span className="percentage-number">
                            {isVisible ? skill.level : 0}
                        </span>
                        <span className="percentage-symbol">%</span>
                    </div>
                    <div className="skill-name-small">{skill.name}</div>
                </div>
            </div>
        );
    };

    const SkillBar = ({ skill, categoryColor, delay }) => {
        return (
            <div 
                className="skill-item"
                style={{ animationDelay: `${delay}s` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
            >
                <div className="skill-header">
                    <div className="skill-info">
                        <div className="skill-icon" style={{ backgroundColor: `${categoryColor}20`, color: categoryColor }}>
                            {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage" style={{ color: categoryColor }}>
                        {animatedSkills[skill.name] || 0}%
                    </span>
                </div>
                
                <div className="skill-bar-container">
                    <div 
                        className="skill-bar"
                        style={{
                            width: `${animatedSkills[skill.name] || 0}%`,
                            background: `linear-gradient(90deg, ${categoryColor}, ${categoryColor}CC, ${categoryColor}80)`,
                            boxShadow: `0 0 20px ${categoryColor}40`
                        }}
                    >
                        <div className="skill-bar-shine"></div>
                        <div className="skill-bar-pulse" style={{ backgroundColor: `${categoryColor}60` }}></div>
                    </div>
                </div>

                <div className={`skill-details ${hoveredSkill === skill.name ? 'visible' : ''}`}>
                    <div className="skill-level-indicator" style={{ 
                        backgroundColor: `${categoryColor}20`, 
                        color: categoryColor,
                        borderColor: `${categoryColor}40`
                    }}>
                        {skill.level >= 90 ? 'Expert' : 
                         skill.level >= 80 ? 'Advanced' : 
                         skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={`skills-section ${isVisible ? 'visible' : ''}`} ref={skillsRef}>
            {/* Enhanced animated background elements */}
            <div className="skills-bg-animation">
                <div className="floating-shapes">
                    {[...Array(12)].map((_, i) => (
                        <div 
                            key={i} 
                            className={`floating-shape shape-${i % 4}`}
                            style={{
                                left: `${5 + (i * 8)}%`,
                                top: `${10 + (i % 4) * 20}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${8 + (i % 3) * 2}s`
                            }}
                        />
                    ))}
                </div>
                
                {/* Geometric patterns */}
                <div className="geometric-patterns">
                    {[...Array(6)].map((_, i) => (
                        <div 
                            key={i}
                            className={`geometric-shape geo-${i % 3}`}
                            style={{
                                left: `${20 + (i * 15)}%`,
                                top: `${15 + (i % 2) * 40}%`,
                                animationDelay: `${i * 0.8}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="skills-header">
                <h2 className="skills-title">
                    <span className="title-gradient">{skills.title}</span>
                    <div className="title-underline"></div>
                </h2>
                <p className="skills-description">{skills.description}</p>
                
                {/* View Mode Toggle */}
                <div className="view-toggle">
                    <button 
                        className={`toggle-btn ${viewMode === 'circular' ? 'active' : ''}`}
                        onClick={() => setViewMode('circular')}
                    >
                        <span className="toggle-icon">⭕</span>
                        Circular
                    </button>
                    <button 
                        className={`toggle-btn ${viewMode === 'bars' ? 'active' : ''}`}
                        onClick={() => setViewMode('bars')}
                    >
                        <span className="toggle-icon">📊</span>
                        Bars
                    </button>
                </div>
            </div>

            {/* Category Navigation */}
            <div className="category-navigation">
                {skills.categories.map((category, index) => (
                    <button
                        key={category.name}
                        className={`category-nav-btn ${activeCategory === index ? 'active' : ''}`}
                        onClick={() => setActiveCategory(index)}
                        style={{ '--category-color': category.color }}
                    >
                        <span className="nav-icon">
                            {index === 0 ? '🎨' : index === 1 ? '⚙️' : '🛠️'}
                        </span>
                        <span className="nav-text">{category.name}</span>
                    </button>
                ))}
            </div>

            <div className="skills-categories">
                {skills.categories.map((category, categoryIndex) => (
                    <div 
                        key={category.name} 
                        className={`skill-category ${activeCategory === categoryIndex ? 'active' : ''}`}
                        style={{ 
                            animationDelay: `${categoryIndex * 0.3}s`,
                            '--category-color': category.color 
                        }}
                    >
                        <div className="category-header">
                            <div className="category-icon-wrapper">
                                <div className="category-icon" style={{ backgroundColor: category.color }}>
                                    {categoryIndex === 0 ? '🎨' : categoryIndex === 1 ? '⚙️' : '🛠️'}
                                </div>
                                <div className="category-pulse" style={{ backgroundColor: `${category.color}40` }}></div>
                            </div>
                            <h3 className="category-title">{category.name}</h3>
                            <div className="category-line" style={{ backgroundColor: category.color }}></div>
                        </div>

                        <div className="skills-display-container">
                            {viewMode === 'circular' ? (
                                <div className="skills-circular-grid">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div 
                                            key={skill.name}
                                            className="skill-circular-item"
                                            onMouseEnter={() => setHoveredSkill(skill.name)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                        >
                                            <CircularProgress 
                                                skill={skill}
                                                categoryColor={category.color}
                                                delay={categoryIndex * 0.3 + skillIndex * 0.1}
                                            />
                                            <div className={`skill-tooltip ${hoveredSkill === skill.name ? 'visible' : ''}`}>
                                                <strong>{skill.name}</strong>
                                                <br />
                                                <span style={{ color: category.color }}>
                                                    Proficiency: {skill.level}%
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="skills-bar-grid">
                                    {category.skills.map((skill, skillIndex) => (
                                        <SkillBar
                                            key={skill.name}
                                            skill={skill}
                                            categoryColor={category.color}
                                            delay={categoryIndex * 0.3 + skillIndex * 0.1}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Enhanced floating particles animation */}
            <div className="skills-particles">
                {[...Array(15)].map((_, i) => (
                    <div 
                        key={i} 
                        className={`particle particle-${i % 3}`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${4 + Math.random() * 4}s`
                        }}
                    />
                ))}
            </div>

            {/* Enhanced skill stats summary */}
            <div className="skills-stats">
                <div className="stat-item">
                    <div className="stat-icon">💻</div>
                    <span className="stat-number">{skills.categories.reduce((acc, cat) => acc + cat.skills.length, 0)}</span>
                    <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">📂</div>
                    <span className="stat-number">{skills.categories.length}</span>
                    <span className="stat-label">Categories</span>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">📈</div>
                    <span className="stat-number">
                        {Math.round(skills.categories.reduce((acc, cat) => 
                            acc + cat.skills.reduce((sum, skill) => sum + skill.level, 0) / cat.skills.length, 0
                        ) / skills.categories.length)}%
                    </span>
                    <span className="stat-label">Avg Proficiency</span>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">⭐</div>
                    <span className="stat-number">
                        {skills.categories.reduce((acc, cat) => 
                            acc + cat.skills.filter(skill => skill.level >= 90).length, 0
                        )}
                    </span>
                    <span className="stat-label">Expert Level</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;