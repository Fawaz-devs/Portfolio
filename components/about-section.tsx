"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
    color: "text-blue-500",
  },
  {
    icon: Zap,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, MongoDB",
    color: "text-green-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
    color: "text-purple-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Git, Agile, Team Leadership, Mentoring",
    color: "text-orange-500",
  },
]

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Docker",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer , creating digital experiences that make a
            difference. I love turning complex problems into simple, beautiful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
              I began my journey in tech through a Computer Science degree with a focus on Artificial Intelligence and Machine Learning. I was fascinated by how intelligent systems could solve real-world problems — from data-driven predictions to automation. This curiosity drove me to explore algorithms, model training, and data pipelines early on.
              </p>
              <p>
              But as I built small AI-powered projects, I realized something important: no matter how powerful a model is, it needs a clean, usable interface and scalable backend to truly make an impact. That realization sparked my deep dive into web development.
              </p>
              <p>
              I started learning frontend technologies like React and Tailwind CSS, then moved into Node.js, Express, and databases like MongoDB and PostgreSQL. As I bridged the gap between AI and real-world deployment, I grew passionate about building complete, user-focused web applications — from UI to backend APIs.

              Today, I bring together the logic of machine learning and the structure of full-stack development to create applications that are not only intelligent but also practical, scalable, and beautifully designed.


              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <skill.icon className={`h-12 w-12 ${skill.color} mb-4`} />
                    <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
