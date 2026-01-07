import { useEffect } from 'react';

const useSmoothScroll = () => {
    useEffect(() => {
        // Check user preferences for smooth scrolling
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const isMobile = window.innerWidth <= 768;
        
        // Skip smooth scrolling if user prefers reduced motion or on mobile
        if (prefersReducedMotion || isMobile) {
            return;
        }

        // Very gentle smooth scrolling
        let isScrolling = false;
        let targetY = 0;
        let currentY = 0;
        let velocity = 0;
        
        const lerp = (start, end, factor) => {
            return start + (end - start) * factor;
        };

        const smoothScroll = () => {
            const distance = targetY - currentY;
            
            // More forgiving stopping condition for smoother feel
            if (Math.abs(distance) < 1 && Math.abs(velocity) < 1) {
                currentY = targetY;
                velocity = 0;
                isScrolling = false;
                return;
            }

            // Very gentle momentum and easing
            velocity = lerp(velocity, distance * 0.04, 0.06); // Further reduced
            currentY += velocity;
            
            // Clamp to bounds
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            currentY = Math.max(0, Math.min(currentY, maxScroll));
            
            window.scrollTo(0, currentY);
            
            if (isScrolling) {
                requestAnimationFrame(smoothScroll);
            }
        };

        const handleWheel = (e) => {
            e.preventDefault();
            
            const delta = e.deltaY;
            const scrollSpeed = 0.6; // Much gentler scroll speed
            
            targetY += delta * scrollSpeed;
            
            // Clamp target to bounds
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            targetY = Math.max(0, Math.min(targetY, maxScroll));
            
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(smoothScroll);
            }
        };

        const handleScroll = () => {
            if (!isScrolling) {
                currentY = window.pageYOffset;
                targetY = currentY;
                velocity = 0;
            }
        };

        const handleKeyDown = (e) => {
            if (!isScrolling) {
                const scrollAmount = window.innerHeight * 0.5; // Gentler keyboard scrolling
                
                switch (e.key) {
                    case 'ArrowDown':
                        e.preventDefault();
                        targetY += scrollAmount * 0.3; // Even gentler for arrow keys
                        break;
                    case 'ArrowUp':
                        e.preventDefault();
                        targetY -= scrollAmount * 0.3;
                        break;
                    case 'PageDown':
                        e.preventDefault();
                        targetY += scrollAmount;
                        break;
                    case 'PageUp':
                        e.preventDefault();
                        targetY -= scrollAmount;
                        break;
                    case 'Home':
                        e.preventDefault();
                        targetY = 0;
                        break;
                    case 'End':
                        e.preventDefault();
                        targetY = document.body.scrollHeight - window.innerHeight;
                        break;
                    default:
                        return;
                }
                
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                targetY = Math.max(0, Math.min(targetY, maxScroll));
                
                if (!isScrolling) {
                    isScrolling = true;
                    requestAnimationFrame(smoothScroll);
                }
            }
        };

        // Smooth scroll for anchor links ONLY (not React Router links)
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            // Only handle actual anchor links, not React Router Links
            if (target && target.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(target.getAttribute('href'));
                if (targetElement) {
                    const targetOffset = targetElement.offsetTop - 60; // Smaller offset
                    targetY = Math.max(0, targetOffset);
                    
                    if (!isScrolling) {
                        isScrolling = true;
                        requestAnimationFrame(smoothScroll);
                    }
                }
            }
            // Let React Router handle all other links
        };

        // Initialize current position
        currentY = window.pageYOffset;
        targetY = currentY;

        // Add event listeners
        document.addEventListener('wheel', handleWheel, { passive: false });
        document.addEventListener('keydown', handleKeyDown);
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);
};

export default useSmoothScroll;