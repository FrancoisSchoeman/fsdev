import Link from 'next/link';
import Image from 'next/image';
import { BlogPosts } from '@/components/posts';
import me from '@/public/images/me.webp';
import meAndCat from '@/public/images/me-and-cat.webp';
import prebo from '@/public/images/logos/prebo-logo.webp';
import grkk from '@/public/images/logos/grkk-logo.webp';
import unisa from '@/public/images/logos/unisa-logo.webp';
import htsEden from '@/public/images/logos/hts-eden-logo.webp';
import freeCodeCamp from '@/public/images/logos/free-code-camp-logo.webp';
import cisco from '@/public/images/logos/cisco-logo.webp';
import boston from '@/public/images/logos/boston-logo.webp';
import udemy from '@/public/images/logos/udemy-logo.webp';
import straider from '@/public/images/projects/straider-ai.webp';
import preboTools from '@/public/images/projects/prebo-tools.webp';
import llmAudit from '@/public/images/projects/llm-audit.webp';

import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Sailboat,
  Download,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { SiDjango, SiJavascript, SiTypescript } from 'react-icons/si';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { GiSteeringWheel } from 'react-icons/gi';
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaLinux,
  FaGithub,
  FaTrello,
  FaWordpress,
  FaElementor,
  FaShopify,
  FaCoffee,
} from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';

export default function Page() {
  const skills = [
    { title: 'Next.js', icon: RiNextjsFill },
    { title: 'React', icon: FaReact },
    { title: 'Django', icon: SiDjango },
    { title: 'Python', icon: FaPython },
    { title: 'JavaScript', icon: SiJavascript },
    { title: 'TypeScript', icon: SiTypescript },
    { title: 'MySQL', icon: GrMysql },
    { title: 'Tailwind CSS', icon: RiTailwindCssFill },
    { title: 'Git/GitHub', icon: FaGithub },
    { title: 'WordPress', icon: FaWordpress },
    { title: 'Elementor', icon: FaElementor },
    { title: 'Shopify', icon: FaShopify },
    { title: 'HTML & CSS', icon: FaHtml5 },
    { title: 'Linux', icon: FaLinux },
    { title: 'Agile (Trello, Jira)', icon: FaTrello },
    { title: 'CofFfFfeeEee!', icon: FaCoffee },
    { title: 'Sim Racing', icon: GiSteeringWheel },
  ];

  const experience = [
    {
      title: 'Developer & Data Specialist',
      company: 'Prebo Digital',
      period: 'Jan 2024 - Present',
      imageSrc: prebo,
      alt: 'Prebo Digital Logo',
      projects: [
        'Straider.ai: a scalable AI-powered SEO automation platform that generates and publishes content aligned with Google’s E-E-A-T model to improve search visibility and trust. Built with Next.js and MySQL.',
        'AI Product Data Feed Optimizer: Optimizes product content using the OpenAI API and syncs it to Google Merchant Center. Built with Python and Django.',
        'Google Merchant Center Data Validation: Sends automated Slack alerts for invalid data. Built with Python.',
        'Shopify SEO Fixer: Automatically detects and resolves SEO issues for products and collections. Built with Python and Shopify APIs.',
        'Marketplace Fee Calculator: Calculates margins and shipping fees for Amazon and Takealot. Built with TypeScript and React.',
        'Infrastructure Management: Hosted internal tools on a VPS (Xneelo Cloud) and migrated company websites to a dedicated server (Xneelo Managed Server), reducing costs and increasing performance.',
        'Automation Scripts and Slack Bots: Developed with Python and JavaScript to save time and notify about platform errors.',
      ],
      responsibilities: [
        'Developing internal tools and automation scripts (Python, Django, React, Docker).',
        'Managing company servers and IT infrastructure (Xneelo Cloud, Xneelo Managed Servers, Google Admin).',
        'Developing and maintaining custom websites and CMS solutions.',
        'Creating data analytics and marketing API integrations (Marketplaces, Google, Facebook).',
        'Analyzing user behavior to improve website UX.',
        'Supporting team with technical data and API integration issues.',
        'Implementing CRO changes for A/B testing campaigns (VWO) using JavaScript.',
      ],
      achievements: [
        'Promoted three times within two years based on performance, expanded responsibilities, and technical impact.',
        'Google Analytics Certification.',
      ],
    },
    {
      title: 'Web Developer',
      company: 'GRKK Web Presence',
      period: 'Mar 2021 - Dec 2023',
      imageSrc: grkk,
      alt: 'GRKK Web Presense Logo',
      skills: [
        'Python Automation',
        'WordPress',
        'Django',
        'Next.js (React)',
        'Static Websites',
        'SEO',
        'Agile (Trello)',
        'cPanel',
        'Xneelo Managed Servers',
        'Digital Ocean Droplets',
        'Reseller Hosting',
        'Domain Hosting',
        'Email Hosting',
        'DNS Records',
        'Development on Linux',
        'Basic PHP',
        'MySQL',
        'Design',
        'Marketing Strategies',
        'Digital Ad Boards',
        'Email & IT Support',
      ],
      projects: [
        'Created a web-based batch image resizer with Django.',
        'Designed Python web scrapers to automate product data extraction.',
        'Implemented open-source Ad Board software with Digital Ocean and Docker, reducing costs by 90%.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computing',
      institution: 'UNISA',
      period: 'Jan 2022 - Present',
      details: 'Studying after-hours while working full-time.',
      imageSrc: unisa,
      alt: 'University of South Africa Logo',
    },
    {
      degree: 'Matric',
      institution: 'HTS Eden (was PW Botha College)',
      period: 'Dec 2017',
      details:
        'Subjects: Maths, Phys Sci, Mech Tech, Eng & Graph Design, Afrikaans HL, English FAL, Life Orientation',
      imageSrc: htsEden,
      alt: 'HTS Eden (formerly PW Botha College) Logo',
    },
  ];

  const extraEducation = [
    {
      title: 'freeCodeCamp: Responsive Web Design',
      imageSrc: freeCodeCamp,
      alt: 'freeCodeCamp Logo',
    },
    {
      title: 'CISCO Networking Academy: Introduction to Internet of Things',
      imageSrc: cisco,
      alt: 'Cisco Networking Academy Logo',
    },
    {
      title: 'Boston City Campus: CompTIA IT Fundamentals Diploma',
      imageSrc: boston,
      alt: 'Boston City Campus Logo',
    },
    {
      title:
        'Udemy: Full Stack Web Development, 100 Days Of Python, Python Django, + more',
      imageSrc: udemy,
      alt: 'Udemy Logo',
    },
  ];

  const projects = [
    {
      imageSrc: straider,
      alt: 'Straider.ai Screenshot',
      title: 'Straider.ai',
      description:
        'An AI-driven programmatic SEO platform that automates keyword intelligence and content generation while enforcing Google E-E-A-T principles to scale organic search growth.',
      link: 'https://www.straider.ai/',
      github: '',
    },
    {
      imageSrc: preboTools,
      alt: 'Prebo Tools Screenshot',
      title: 'Prebo Tools',
      description:
        'A web application that provides various internal tools and utilities for Prebo Digital, a digital marketing agency. It also includes a free batch image resizer for the public.',
      link: 'https://tools.prebodigital.co.za/',
      github: 'https://github.com/FrancoisSchoeman/PreboTools',
    },
    {
      imageSrc: llmAudit,
      alt: 'LLM Audit Tool Screenshot',
      title: 'LLM Audit Tool',
      description:
        'A website that allows users to audit and analyse how their websites perform and feature in LLMs (Large Language Models) like OpenAI, Claude, and Gemini.',
      link: 'https://llm.prebodigital.co.za/',
      github: '',
    },
  ];

  return (
    <section className="container px-4 md:px-0 py-16 lg:max-w-screen-lg">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Francois Schoeman',
            jobTitle: 'Software Engineer',
            description:
              'Full-stack software engineer specializing in Next.js, React, Django, and Python. Based in Stilbaai, South Africa.',
            url: 'https://www.fsdev.co.za',
            sameAs: [
              'https://github.com/FrancoisSchoeman',
              'https://www.linkedin.com/in/francois-schoeman',
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Stilbaai',
              addressCountry: 'South Africa',
            },
            knowsAbout: [
              'Next.js',
              'React',
              'Django',
              'Python',
              'JavaScript',
              'TypeScript',
              'MySQL',
              'Tailwind CSS',
              'Full Stack Development',
              'Web Development',
            ],
            alumniOf: [
              {
                '@type': 'Organization',
                name: 'University of South Africa (UNISA)',
              },
              {
                '@type': 'Organization',
                name: 'HTS Eden',
              },
            ],
            worksFor: {
              '@type': 'Organization',
              name: 'Prebo Digital',
            },
          }),
        }}
      />
      <header className="flex flex-col items-center justify-center">
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative w-[96px] h-[96px] group">
            <Image
              src={me}
              alt="Profile"
              className="rounded-full border absolute inset-0 transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75"
              width={96}
              height={96}
            />
            <Image
              src={meAndCat}
              alt="Person with a cat"
              className="rounded-full border absolute inset-0 opacity-0 scale-90 rotate-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-12"
              width={96}
              height={96}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Francois Schoeman</h2>
            <div className="relative">
              <p className="text-muted-foreground flex items-center justify-start flex-wrap">
                Based in Stilbaai{' '}
                <Sailboat className="h-5 w-5 text-sidebar-primary ml-1 animate-float-soft" />
                <span className="hidden md:inline-block mr-1">, </span>South
                Africa
              </p>
              <div
                className="wave-underline text-sidebar-primary"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl mb-6 leading-tight">
          {'Software Developer'.split('').map((ch, i) => (
            <span
              key={i}
              className="relative inline-block cursor-default transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:rotate-3 hover:scale-125 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-primary hover:to-sidebar-primary"
              aria-hidden={ch === ' ' ? 'true' : undefined}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground text-left md:text-center">
          I&apos;m a problem-solving (and coffee) addict who gets way too
          excited about clean code and elegant solutions. When I&apos;m not
          debugging or building something cool, you&apos;ll find me sim racing
          (where I pretend I&apos;m a Formula 1 driver), or learning for my
          ongoing studies in Stilbaai. I believe good code should be like a good
          joke - if you have to explain it, it&apos;s probably not that good!
        </p>
      </header>

      <div className="flex items-center md:justify-center mt-8 gap-4">
        <Button
          asChild
          size={'icon'}
          variant={'outline'}
          className="rounded-full hover:-rotate-12 hover:scale-110 transition-transform duration-300"
        >
          <Link href="tel:+27646547071">
            <Phone className="h-8 w-8" />
          </Link>
        </Button>
        <Button
          asChild
          size={'icon'}
          variant={'outline'}
          className="rounded-full hover:-rotate-12 hover:scale-110 transition-transform duration-300"
        >
          <Link href="mailto:francois.schoeman15@gmail.com">
            <Mail className="h-5 w-5" />
          </Link>
        </Button>
        <Button
          asChild
          size={'icon'}
          variant={'outline'}
          className="rounded-full hover:-rotate-12 hover:scale-110 transition-transform duration-300"
        >
          <Link
            href="https://linkedin.com/in/francois-schoeman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </Button>
        <Button
          asChild
          size={'icon'}
          variant={'outline'}
          className="rounded-full hover:-rotate-12 hover:scale-110 transition-transform duration-300"
        >
          <Link
            href="https://github.com/FrancoisSchoeman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
          </Link>
        </Button>
        <Button
          asChild
          size={'icon'}
          variant={'outline'}
          className="rounded-full hover:-rotate-12 hover:scale-110 transition-transform duration-300"
        >
          <Link
            href={'/CV-Francois-Schoeman.pdf'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      <Separator className="my-12" />
      <Tabs defaultValue="experience">
        <TabsList className="w-full bg-card border shadow">
          <TabsTrigger
            className="text-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none transition-all duration-300"
            value="experience"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            className="text-lg data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none transition-all duration-300"
            value="education"
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <Card className="px-4 gap-0">
            {experience.map((exp) => (
              <div
                key={exp.title + exp.company}
                className="relative animate-in fade-in"
              >
                <div className="flex items-start">
                  <div className="w-11 h-11">
                    <Image
                      src={exp.imageSrc}
                      alt={exp.alt}
                      className="rounded-full border hover:-rotate-12 hover:scale-110 transition-transform duration-300"
                      width={30}
                      height={30}
                    />
                  </div>

                  <div className="flex-1 border-l-2 border-accent pl-4 py-4">
                    <p className="text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-semibold">{exp.company}</h3>
                    </div>
                    <p className="text-sm">
                      <span className="mb-4">{exp.title}</span>
                      {exp.skills && (
                        <span className="text-muted-foreground ml-2">
                          ({exp.skills.join(', ')})
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.projects && exp.projects.join('; ')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </TabsContent>
        <TabsContent value="education">
          <Card className="px-4 gap-0">
            {education.map((edu) => (
              <div
                key={edu.degree + edu.institution}
                className="relative animate-in fade-in"
              >
                <div className="flex items-start">
                  <div className="w-11 h-11">
                    <Image
                      src={edu.imageSrc}
                      alt={edu.alt}
                      className="rounded-full border hover:-rotate-12 hover:scale-110 transition-transform duration-300"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex-1 border-l-2 border-accent pl-4 py-4">
                    <p className="text-sm text-muted-foreground">
                      {edu.period}
                    </p>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-semibold">
                        {edu.institution}
                      </h3>
                    </div>
                    <p className="text-sm">
                      <span className="mb-4">{edu.degree}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Card>

          <h3 className="mt-10 text-xl font-semibold">Additional Training</h3>
          <Card className="px-4 gap-0">
            {extraEducation.map((extra) => (
              <div key={extra.title} className="relative animate-in fade-in">
                <div className="flex items-start">
                  <div className="w-11 h-11">
                    <Image
                      src={extra.imageSrc}
                      alt={extra.alt}
                      className="rounded-full border hover:-rotate-12 hover:scale-110 transition-transform duration-300"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex-1 border-l-2 border-accent pl-4 py-4">
                    <p className="text-sm">{extra.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Card>
        </TabsContent>
      </Tabs>

      <h2 className="text-3xl font-semibold mb-6 mt-12">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <Badge
            key={skill.title}
            className={`animate-in fade-in slide-in-from-bottom-2 py-1 px-2 text-base ${
              idx % 2 === 0
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            <skill.icon
              className="inline-block mr-1"
              style={{ height: 20, width: 20 }}
            />
            {skill.title}
          </Badge>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-6 mt-12">Projects</h2>

      <div className="grid gap-6 sm:grid-cols-3">
        {projects.map((proj) => (
          <Card
            key={proj.title}
            className="group relative overflow-hidden pt-0 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 focus-within:-translate-y-1 focus-within:shadow-xl before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_30%_20%,theme(colors.primary/25),transparent_70%)] before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100"
          >
            {proj.imageSrc && (
              <div className="relative aspect-video w-full">
                <Image
                  src={proj.imageSrc}
                  alt={proj.alt || `Screenshot of ${proj.title} project`}
                  fill
                  className="object-cover rounded-t-xl transition-transform duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <CardHeader className="gap-0 relative z-[1]">
              <CardTitle className="text-lg transition-colors duration-300 group-hover:text-primary">
                {proj.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 relative z-[1]">
              <p className="text-sm transition-colors duration-300 group-hover:text-muted-foreground">
                {proj.description}
              </p>
              <div className="flex gap-4">
                {proj.link && (
                  <Link
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline decoration-dotted underline-offset-4 transition-colors duration-300 hover:text-primary"
                  >
                    Live Demo
                  </Link>
                )}
                {proj.github && (
                  <Link
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline decoration-dotted underline-offset-4 transition-colors duration-300 hover:text-primary"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-6 mt-12">Blog Posts</h2>
      <BlogPosts />
    </section>
  );
}
