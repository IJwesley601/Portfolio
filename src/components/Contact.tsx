import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Loader } from 'lucide-react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // For demonstration purposes - in a real app, you would replace with your EmailJS credentials
      await emailjs.sendForm(
        'service_rg8lqnj',
        'Portfolio_kyi8tew',
        formRef.current!,
        '2Y_Eu61GGuo8fvum7'
      );

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Contactez-moi</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/3"
        >
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Coordonnées</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h4>
                  <a href="mailto:john.doe@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    israeljohnwesley80@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Téléphone</h4>
                  <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    +261347031259
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Emplacement</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fianarantsoa, Madagascar<br />
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Suivez-moi</h4>
              <div className="flex space-x-4">
                <a href="https://web.facebook.com/braxx.izak/" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-600 p-3 rounded-full hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.65 9.13 8.43 9.93v-7.03H7.9V12h2.53V9.83c0-2.5 1.49-3.88 3.76-3.88 1.09 0 2.23.19 2.23.19v2.42h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.97h-2.34v7.03C18.35 21.2 22 17.06 22 12.07z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-600 p-3 rounded-full hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-600 p-3 rounded-full hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-600 p-3 rounded-full hover:bg-gray-800 hover:text-white dark:hover:bg-gray-900 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-2/3"
        >
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Envoyez-moi un message</h3>
            
            {submitSuccess ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6">
                Votre message a été envoyé avec succès ! Je vous répondrai bientôt.
              </div>
            ) : null}
            
            {submitError ? (
              <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-lg mb-6">
                {submitError}
              </div>
            ) : null}
            
            <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                      errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Wesley"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Votre Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                      errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="israeljohnwesley80@gmail.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                    errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Comment puis-je t'aider?"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                    errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Votre message ici..."
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin mr-2" />
                    Envoi...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Envoyer un message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;