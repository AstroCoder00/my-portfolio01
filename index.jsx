import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Download } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek and modern personal portfolio built using React and Tailwind CSS.",
    demoLink: "https://yourportfolio.live",
    repoLink: "https://github.com/yourgithub/portfolio-site",
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce web app with product listings, cart, and secure checkout.",
    demoLink: "https://myecommerce.live",
    repoLink: "https://github.com/yourgithub/ecommerce-platform",
  },
];

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      {/* Home Section */}
      <section className="text-center space-y-4">
        <motion.h1 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Hi, I'm [Your Name] – Web Developer
        </motion.h1>
        <p className="text-lg text-gray-600">Crafting responsive and interactive web applications with modern technologies.</p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" asChild>
            <a href="mailto:your@email.com">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/yourgithub">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button variant="default" asChild>
            <a href="/your_resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-700">
          I'm a freelance web developer with experience in HTML, CSS, JavaScript, React, PHP, and MySQL. I specialize in building
          clean and functional websites and web applications. I enjoy turning complex problems into simple, beautiful, and intuitive interfaces.
        </p>
      </section>

      {/* Projects Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx}>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex space-x-4">
                  <Button variant="outline" asChild>
                    <a href={project.demoLink} target="_blank">Live Demo</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.repoLink} target="_blank">GitHub</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-700">
          Feel free to reach out via email at <a className="text-blue-600 underline" href="mailto:your@email.com">your@email.com</a>
          or connect with me on GitHub.
        </p>
      </section>
    </div>
  );
}
