"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className='w-20 h-20 border-4 border-b-transparent rounded-full border-indigo-600 animate-spin'></div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <motion.div 
        className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {/* Image Section */}
        <div className={`relative flex w-full max-lg:p-16 md:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-600 ${isLogin ? 'order-first' : 'order-last'}`}>
          <div className="w-full h-64 md:h-auto flex items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {isLogin ? 'Welcome Back!' : 'Join Us Today!'}
              </h2>
              <p className="text-white/80 mb-8">
                {isLogin ? 'Login to access your account' : 'Create an account to get started'}
              </p>
              <motion.div 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              >
                <img 
                  src={isLogin ? "/pho1.jpg" : "/pho2.jpg"} 
                  alt={isLogin ? "Login Illustration" : "Signup Illustration"}
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center">
          <motion.div
            key={isLogin ? "login" : "signup"}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {isLogin ? (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Log In</h2>
                <form className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <button
                      type="button"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all"
                    >
                      Log In
                    </button>
                  </motion.div>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-4">Or continue with</p>
                  <div className="flex justify-center space-x-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    >
                      <img src='/facebook.png' className='w-6 h-6' alt="Facebook" />
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                    >
                      <img src='/search.png' className='w-6 h-6' alt="Google" />
                    </motion.button>
                  </div>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-center text-gray-600"
                >
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                  >
                    Sign Up
                  </button>
                </motion.p>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
                <form className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-indigo-500 outline-none transition placeholder-gray-400"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <button
                      type="button"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-all"
                    >
                      Sign Up
                    </button>
                  </motion.div>
                </form>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 text-center text-gray-600"
                >
                  Already have an account?{' '}
                  <button
                    onClick={() => setIsLogin(true)}
                    className="text-indigo-600 font-medium hover:text-indigo-800 transition"
                  >
                    Log In
                  </button>
                </motion.p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
