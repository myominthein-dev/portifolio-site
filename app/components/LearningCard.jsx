import React from "react";
import {motion} from "framer-motion"
const LearningCard = ({title,skills = []}) => {
  return (
    <div >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg shadow-lg p-6  border border-gray-700"
      >
        <div className="flex items-center gap-4 ">
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-full opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="relative z-10 size-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg"
              animate={{
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-1 bg-purple-300 rounded-full opacity-30"
                animate={{
                  scale: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
          <h3 className="text-lg font-semibold text-gray-100">
            {title}
          </h3>
        </div>
        {
            skills.length > 0 && (
                <ul className="space-y-2 mt-4 ml-10">
          { skills.map((skill, index) => (
            <motion.li
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center text-[14px] text-gray-300"
            >
              <svg
                className="w-4 h-4 mr-2 text-blue-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              {skill}
            </motion.li>
          ))}
        </ul>
            )
        }
      </motion.div>
    </div>
  );
};

export default LearningCard;
