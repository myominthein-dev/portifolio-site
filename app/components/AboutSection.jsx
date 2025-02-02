'use client'
import React from 'react'
import Container from './Container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SkillShowcase } from './SkillShowcase'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Card, CardContent } from '@/components/ui/card'
import LearningCard from './LearningCard'
import PersonalInfoCard from './InfoCard'

const info = [
  {
    label : 'Name',
    value : "Myo Min Thein"
  },
  {
    label : 'Age',
    value : "22"
  },
  {
    label : 'Address',
    value : 'Mingaladon, Yangon (current - Taungoo)'
  },
  {
    label : 'Spoken Language',
    value : "Burmese (Native) / English (Intermediate)"
  }


]
const AboutSection = () => {
  return (
    <section className='min-h-screen' id='about'>
      <Container>
          <div className='lg:px-20'> 
            <h2 className='text-center text-neutral-300 text-3xl mb-10 font-bold'>About Me</h2>

            <div>
            <Tabs defaultValue='experience' className='grid grid-cols-3'>
            <TabsList className='flex flex-col   gap-3 col-span-1'>
                <TabsTrigger value='experience' >Experience</TabsTrigger>
                <TabsTrigger value='skill'>Skills</TabsTrigger>
                <TabsTrigger value='learning'>Learning Journey</TabsTrigger>
                <TabsTrigger value='personal'>Personal Info</TabsTrigger>
            </TabsList>

            <div className=' col-span-2 font-semibold text-neutral-300'>
            <TabsContent value='experience'>
              <div className='px-5'>
              <h3 className='text-2xl text-blue-400 '>Experience</h3>
              <ScrollArea className="h-[80vh] w-full  rounded-md  p-4">
                <ExperienceCard fromYear={'2023'} toYear={'2024'} title={"Sale Operations (Sale, Merchandising, Inventory)"} company={'Sein Hinn Electronics Show Room'} knowledge={['Communication skill improvement','POS system end-using','Product flow']} />

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
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
                              <span className="text-sm font-medium text-blue-400">2025</span>
                              <h3 className="text-lg font-semibold text-gray-200">Seeking Opportunities in IT Firms</h3>
                            </div>
                          </div>
                          <div className="space-y-2 ml-10">
                            <h4 className="text-sm font-medium text-gray-400">Position : </h4>
                            <p className="text-base text-gray-200">Front-End Developer, Full-Stack Developer</p>
                          </div>
                          
                        </CardContent>
                      </Card>
                    </motion.div>

                
              </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skill'>
              <div className='px-5'>
              <h3 className='text-2xl text-blue-400'>Skills</h3>
               
               <ScrollArea className="h-[80vh] w-full  rounded-md  p-4">
                <SkillShowcase/>
               </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='learning'>
            <div className='px-5'>
              <h3 className='text-2xl  text-blue-400'>Learning Journey</h3>
               
               <ScrollArea className="h-[80vh] w-full  rounded-md  p-4">

                  <div className='flex flex-col gap-5'>
                  <LearningCard title={'Built Web Foundations from online sources'} />
                  <LearningCard title={'Completed Special Web Design at MMS-IT'} skills={['HTML5','CSS3','Javascript','TailwindCss','React.js','Next.js','Git','Animation & Icon Libraries']} /> 
                  <LearningCard title={'Completed Web App Development at MMS-IT'} skills={['PHP','Mysql','Laravel','Required resources for Backend environment']} />
                  <LearningCard title={'Successfully joined MMS Connections program'} skills={['How to connect remotely in development environment','Collaborative skill improvement','Team-Git skill required for real-world projects','Group-based projects Development']} />
                  </div>   
                  
               </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='personal'>
            <div className='px-5'>
              <h3 className='text-2xl text-blue-400 '>Personal Info</h3>
               
               <ScrollArea className="h-[80vh] w-full  rounded-md  p-4">
                  <PersonalInfoCard items={info} />
               </ScrollArea>
              </div>
            </TabsContent>
            </div>
          </Tabs>
            </div>
            
          </div>
      </Container>
    </section>
  )
}

export default AboutSection