import { motion } from 'framer-motion';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "Tech Solutions Inc.",
      content: "Tanvir delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise made the project a huge success.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      content: "Working with Tanvir was a game-changer for our startup. He built our MVP quickly and efficiently, helping us launch on time.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Digital Agency",
      content: "The website Tanvir created for us not only looks amazing but also performs incredibly well. Our conversion rates have increased significantly.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-slate-50 to-blue-100 dark:bg-gray-900 dark:bg-none">
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
            Client Testimonials
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-primary rounded-full"></span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            What my clients say about working with me.
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <div className="bg-white dark:bg-card-dark rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <i className="material-icons text-blue-600 dark:text-blue-400 text-2xl">format_quote</i>
              </div>

              {/* Testimonial Content */}
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </p>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <i key={i} className="material-icons text-yellow-400">star</i>
                ))}
              </div>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 flex items-center justify-center">
                  <i className="material-icons text-gray-400 text-2xl">person</i>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="material-icons text-gray-600 dark:text-gray-300">chevron_left</i>
              </motion.button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial
                        ? 'bg-blue-600'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="material-icons text-gray-600 dark:text-gray-300">chevron_right</i>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;