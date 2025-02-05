"use client";
import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { itemVariants } from "@/lib/animations";

export default function ExperienceCard({
  checked = true,
  fromYear = "",
  toYear = "",
  title = "",
  company = "",
  knowledge = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const controls = useAnimation();

  if (isInView) {
    controls.start("visible");
  }
  return (
    <motion.div
      initial="hidden"
      ref={ref}
      animate={controls}
      variants={itemVariants}
    >
      {checked ? (
        <Card className="overflow-hidden border border-gray-700 bg-gray-800 shadow-lg mb-5">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
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
              <div className="flex-1">
                <span className="text-xs lg:text-sm font-medium text-blue-400">
                  {fromYear} - {toYear}
                </span>
                <motion.h3 initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} className=" text-sm font-roboto lg:text-lg font-semibold text-gray-200">
                  {title}
                </motion.h3>
              </div>
            </div>
            <div className="space-y-2 ml-10">
              <h4 className="text-xs lg:text-sm font-medium text-gray-400">
                Company:
              </h4>
              <motion.p initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} className="text-sm  font-robotolg:text-lg text-gray-200">{company}</motion.p>
            </div>
            <div className="space-y-2 ml-10">
              <h4 className="text-sm font-medium text-gray-400">Knowledge:</h4>
              <ul className="space-y-2">
                {knowledge.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex font-sans items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative flex-shrink-0">
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
                      <div className="relative z-10 size-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-gray-100"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm text-gray-300">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="overflow-hidden border border-gray-700 bg-gray-800 shadow-lg mb-5">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
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
              <motion.div className="flex-1">
                <span className="text-sm font-medium text-blue-400">2025</span>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 * 0.1 }}
                  className="text-sm font-roboto lg:text-lg font-semibold text-gray-200"
                >
                  Seeking Opportunities in IT Firms
                </motion.h3>
              </motion.div>
            </div>
            <div className="space-y-2 ml-10">
              <h4 className="text-xs lg:text-sm font-medium text-gray-400">
                Position :{" "}
              </h4>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 * 0.1 }}
                className="text-sm font-roboto  text-gray-200"
              >
                Front-End Developer, Full-Stack Developer
              </motion.p>
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}
