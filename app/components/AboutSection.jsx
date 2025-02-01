'use client'
import React from 'react'
import Container from './Container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SkillShowcase } from './SkillShowcase'


const AboutSection = () => {
  return (
    <section className='min-h-screen' id='about'>
      <Container>
          <div className='lg:px-20'> 
            <h2 className='text-center text-neutral-300 text-3xl mb-10 font-bold'>About Me</h2>

            <div>
            <Tabs defaultValue='experience' className='grid grid-cols-3'>
            <TabsList className='flex flex-col  pt-3 gap-3 col-span-1'>
                <TabsTrigger value='experience' >Experience</TabsTrigger>
                <TabsTrigger value='skill'>Skills</TabsTrigger>
                <TabsTrigger value='learning'>Learning Journey</TabsTrigger>
                <TabsTrigger value='personal'>Personal Info</TabsTrigger>
            </TabsList>

            <div className=' col-span-2 font-semibold text-neutral-300'>
            <TabsContent value='experience'>
              <div className='px-5'>
              <h3 className='text-3xl '>Experience</h3>
              <ScrollArea className="h-[70vh] w-full  rounded-md  p-4">
                <div className="space-y-4 border  mb-5 border-neutral-600 px-4 py-3 rounded-lg">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium text-muted-foreground">2023 - 2024</span>
                    <h3 className="text-lg font-semibold">Sale Operations (sale, marchandizing, inventory)</h3>
                    <h4 className="text-sm font-medium text-muted-foreground">Company :</h4>
                    <p className="text-base">Sein Hinn Electronics</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground">Knowledge:</h4>
                    <ul className="list-disc list-inside text-sm">
                      <li>Strong end-user experience with POS system, well-communicated skill, products flow</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 border border-neutral-600 px-4 py-3 rounded-lg">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium text-muted-foreground">2025</span>
                    <h3 className="text-lg font-semibold">Seeking Opportunities in IT Firms</h3>
                  </div>
                  
                </div>
              </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='skill'>
              <div className='px-5'>
              <h3 className='text-3xl '>Skills</h3>
               
               <ScrollArea className="h-[70vh] w-full  rounded-md  p-4">
                <SkillShowcase/>
               </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='learning'>
            <div className='px-5'>
              <h3 className='text-3xl '>Skills</h3>
               
               <ScrollArea className="h-[70vh] w-full  rounded-md  p-4">
                <SkillShowcase/>
               </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value='personal'>
            <div className='px-5'>
              <h3 className='text-3xl '>Skills</h3>
               
               <ScrollArea className="h-[70vh] w-full  rounded-md  p-4">
                <SkillShowcase/>
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