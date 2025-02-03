import  React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"



export default function PersonalInfoCard({ items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="overflow-hidden border border-gray-700 bg-gray-800 shadow-lg">
        <CardContent className="p-6">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="absolute inset-0 bg-purple-500 rounded-full opacity-50"
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
                  <div className="relative z-10 size-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg flex items-center justify-center">
                   
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-400 truncate">{item.label}</h4>
                  <p className="text-[14px] text-neutral-300 truncate">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

