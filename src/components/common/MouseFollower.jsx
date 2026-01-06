import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import './MouseFollower.css';

const Cursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [cursorText, setCursorText] = useState('');
    const [cursorVariant, setCursorVariant] = useState('default');
    const [isClicking, setIsClicking] = useState(false);
    
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const springConfig = { damping: 30, stiffness: 800, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
    
    // Slower spring for trail
    const trailSpringConfig = { damping: 40, stiffness: 400, mass: 1 };
    const trailX = useSpring(mouseX, trailSpringConfig);
    const trailY = useSpring(mouseY, trailSpringConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            
            // Check if we're over navbar elements
            const target = e.target;
            
            // Ensure target exists and has the closest method
            if (target && typeof target.closest === 'function') {
                const isOverNavbar = target.closest('.nav-container, .navbar, .nav-background, .nav-list, .nav-item, .nav-link');
                
                if (isOverNavbar) {
                    setIsVisible(false);
                    setIsHovering(false);
                    setCursorVariant('default');
                    setCursorText('');
                } else if (!isVisible) {
                    setIsVisible(true);
                }
            } else if (!isVisible) {
                setIsVisible(true);
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        const handleMouseDown = () => {
            setIsClicking(true);
            setCursorVariant('clicked');
        };
        
        const handleMouseUp = () => {
            setIsClicking(false);
            setCursorVariant(isHovering ? 'hover' : 'default');
        };

        // Enhanced hover detection
        const handleElementHover = (e) => {
            const target = e.target;
            
            // Check if target exists and has the closest method
            if (!target || typeof target.closest !== 'function') {
                setIsVisible(true);
                return;
            }
            
            // Check if hovering over navbar - show normal cursor
            if (target.closest('.nav-container, .navbar, .nav-background, .nav-list, .nav-item, .nav-link')) {
                setIsVisible(false); // Hide custom cursor
                setIsHovering(false);
                setCursorVariant('default');
                setCursorText('');
                return;
            }
            
            // Show custom cursor for other elements
            setIsVisible(true);
            
            // Interactive elements
            if (target.matches && target.matches('a, button, [role="button"], input, textarea, select')) {
                // Skip if it's a navbar element
                if (target.closest('.nav-container, .navbar, .nav-background, .nav-list, .nav-item, .nav-link')) {
                    setIsVisible(false);
                    return;
                }
                setIsHovering(true);
                setCursorVariant('hover');
                setCursorText('CLICK');
            } 
            // Image and card elements
            else if (target.matches && target.matches('.homepage-image-container, .homepage-image-wrapper, .homepage-image')) {
                setIsHovering(true);
                setCursorVariant('view');
                setCursorText('VIEW');
            }
            // Skill cards
            else if (target.matches && target.matches('.skill-card, .skill-icon-wrapper, .skill-icon')) {
                setIsHovering(true);
                setCursorVariant('view');
                setCursorText('EXPLORE');
            }
            // Social icons
            else if (target.matches && target.matches('.homepage-social-icon, .homepage-social-icon-left')) {
                setIsHovering(true);
                setCursorVariant('hover');
                setCursorText('SOCIAL');
            }
            // Category buttons
            else if (target.matches && target.matches('.category-btn')) {
                setIsHovering(true);
                setCursorVariant('hover');
                setCursorText('FILTER');
            }
            // Resume button
            else if (target.matches && target.matches('.homepage-resume-button')) {
                setIsHovering(true);
                setCursorVariant('hover');
                setCursorText('DOWNLOAD');
            }
            // Default state
            else {
                setIsHovering(false);
                setCursorVariant(isClicking ? 'clicked' : 'default');
                setCursorText('');
            }
        };

        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleElementHover);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleElementHover);
        };
    }, [mouseX, mouseY, isHovering, isClicking, isVisible]);

    const cursorVariants = {
        default: {
            scale: 1,
            width: 20,
            height: 20,
            backgroundColor: '#14b8a6',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            opacity: 1,
        },
        hover: {
            scale: 1.5,
            width: 60,
            height: 60,
            backgroundColor: 'rgba(20, 184, 166, 0.1)',
            border: '3px solid #14b8a6',
            opacity: 1,
        },
        clicked: {
            scale: 0.8,
            width: 16,
            height: 16,
            backgroundColor: '#0d9488',
            border: '2px solid #ffffff',
            opacity: 1,
        },
        view: {
            scale: 2,
            width: 80,
            height: 80,
            backgroundColor: 'rgba(20, 184, 166, 0.05)',
            border: '3px solid rgba(20, 184, 166, 0.8)',
            opacity: 1,
        }
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Cursor Trail */}
            <motion.div
                className="cursor-trail"
                style={{
                    x: trailX,
                    y: trailY,
                }}
                animate={{
                    scale: isHovering ? 1.2 : 1,
                    opacity: isHovering ? 0.3 : 0.15,
                }}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                }}
            />

            {/* Main Cursor */}
            <motion.div
                className="motion-cursor"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={cursorVariant}
                variants={cursorVariants}
                transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 600,
                    mass: 0.3
                }}
            >
                {/* Cursor Dot */}
                <motion.div
                    className="cursor-dot"
                    animate={{
                        scale: isClicking ? 0.5 : 1,
                    }}
                    transition={{ duration: 0.1 }}
                />

                {/* Cursor Text */}
                <AnimatePresence>
                    {cursorText && (
                        <motion.div
                            className="cursor-text-label"
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {cursorText}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Magnetic Effect Rings */}
            {isHovering && (
                <motion.div
                    className="cursor-magnetic-ring"
                    style={{
                        x: cursorX,
                        y: cursorY,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: [1, 1.5, 1], 
                        opacity: [0.5, 0.2, 0] 
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />
            )}
        </>
    );
};

// Main component that conditionally renders cursor
const MotionPlusCursor = () => {
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    useEffect(() => {
        // Hide cursor on mobile devices
        const checkDevice = () => {
            const isMobile = window.innerWidth <= 768 || 
                           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            setIsCursorVisible(!isMobile);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return isCursorVisible ? <Cursor /> : null;
};

export default MotionPlusCursor;