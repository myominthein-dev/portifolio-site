"use client";
import React, { useEffect, useRef } from "react";
import Container from "./Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SkillShowcase } from "./SkillShowcase";
import { motion, useInView, useAnimation } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Card, CardContent } from "@/components/ui/card";
import LearningCard from "./LearningCard";
import PersonalInfoCard from "./InfoCard";
import SectionHeader from "./SectionHeader";
import { childVariants, containerVariants, itemVariants, tabVariants } from "@/lib/animations";
import SubAboutTitle from "./SubAboutTitle";

const info = [
  {
    label: "Name",
    value: "Myo Min Thein",
  },
  {
    label: "Age",
    value: new Date().getFullYear() - 2003
  },
  {
    label: "Gender",
    value: "Male",
  },
  {
    label: "Marital Status",
    value: "Single",
  },
  {
    label: "Nationality",
    value: "Myanmar",
  },
  {
    label: "Address",
    value: "Mingaladon, Yangon",
  },
  {
    label: "Phone",
    value: "09 451 819 025",
  },
  {
    label: "Email",
    value: "myomin9916@gmail.com",
  },
  {
    label: "Spoken Languages",
    value: "Burmese (Native) / English (Intermediate)",
  },
  {
    label: "Education",
    value: "First year of Economics of YUDE (paused)",
  },
];

const tabData = [
  { value: "experience", label: "Experience" },
  { value: "skill", label: "Skills" },
  { value: "learning", label: "Learning Journey" },
  { value: "personal", label: "Personal Info" },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount : 0.2});
  const controls = useAnimation();

  useEffect(()=>{ 
    if (isInView) {
      controls.start("visible");
    }
  },[controls, isInView])

  return (
    <section ref={sectionRef} className="xl:min-h-[100dvh]   3xl:min-h-[800px] mb-24" id="about">
      <Container>
        <div className="xl:px-20 lg:px-10">
          <SectionHeader>About Me</SectionHeader>
          <div>
            <Tabs defaultValue="experience" className="md:grid grid-cols-3">
            <motion.div className="mb-10 sm:mb-0 flex justify-center  " initial="hidden" animate={controls} variants={containerVariants}>
                <TabsList className="flex  w-full flex-col gap-3 md:col-span-1">
                  {tabData.map((tab, index) => (
                    <motion.div key={index} className="w-full font-poppin" variants={tabVariants}>
                      <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
                    </motion.div>
                  ))}
                </TabsList>
              </motion.div>


              <div className=" md:col-span-2 font-semibold text-neutral-300">
                <TabsContent value="experience">
                  <div className="px-5">
                    <SubAboutTitle title={"Experience"} />
                    <ScrollArea className="h-[600px] w-full  rounded-md  p-4">
                      <ExperienceCard
                        fromYear={"27.1.2023"}
                        toYear={"30.9.2024"}
                        title={
                          "Sale Operation Staff"
                        }
                        company={"Sein Hinn Electronics Show Room"}
                        duties={[
                          "Business to consumer sales",
                          "Product merchandising & display",
                          "Inventory management"
                        ]}
                      />
                      <ExperienceCard
                        fromYear={"3.4.2025"}
                        toYear={"Present"}
                        title={
                          "Junior Web Developer (Frontend Core & Backend Support)"
                        }
                        company={`Ikon Mart ( <a href="https://ikonmart.com" target="_blank" class="text-blue-400 underline">ikonmart.com</a> )`}
                        duties={[
                          "Successfully shipped an existing vendor-developed eCommerce web application  to production","Fixed bugs, improved performance, and stabilized the application for live users", "Implemented new features and UI improvements based on business requirements"
                        ]}
                      />

                      
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="skill">
                  <div className="px-5">
                    <SubAboutTitle title={"Skill"} />
                    <ScrollArea className="h-[600px]  w-full  rounded-md  p-4">
                      <SkillShowcase />
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="learning">
                  <div className="px-5">
                    <SubAboutTitle title={"Learning Journey"} />

                    <ScrollArea className="h-[600px] w-full  rounded-md  p-4">
                      <div className="flex flex-col gap-5">
                        <LearningCard
                          title={"Built Web Foundations from online sources"}
                        />
                        <LearningCard
                          title={"Completed Special Web Design at MMS-IT"}
                          skills={[
                            "HTML5",
                            "CSS3",
                            "Javascript",
                            "TailwindCss",
                            "React.js",
                            "Next.js",
                            "Git",
                            "Animation & Icon Libraries",
                          ]}
                        />
                        <LearningCard
                          title={"Completed Web App Development at MMS-IT"}
                          skills={[
                            "PHP",
                            "Mysql",
                            "Laravel",
                            "Required resources for Backend environment",
                          ]}
                        />
                        <LearningCard
                          title={"Successfully joined MMS Connections program"}
                          skills={[
                            "Software Development Life Cycle Introduction",
                            "How to connect remotely in development environment",
                            "Collaborative skill improvement",
                            "Team-Git skill required for real-world projects",
                            "Group-based projects Development",
                          ]}
                        />
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="personal">
                  <div className="px-5">
                    <SubAboutTitle title={"Personal Info"} />

                    <ScrollArea className="h-[600px] w-full  rounded-md  p-4">
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
  );
};

export default AboutSection;
