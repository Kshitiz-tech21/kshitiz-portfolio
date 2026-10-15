import { PROFILE, SKILLS, EXPERIENCE, PROJECTS, EDUCATION } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-slate-800">{PROFILE.name}</span>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href={PROFILE.links.linkedin} target="_blank" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            <a href={`mailto:${PROFILE.email}`} className="text-blue-600 hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative shrink-0">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-8 ring-white shadow-2xl border-4 border-blue-600">
                <img 
                  src={PROFILE.image} 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-// edited for brevity" />
                </svg>
              </div>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
                {PROFILE.role} <span className="text-blue-600">.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
                {PROFILE.summary}
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`mailto:${PROFILE.email}`} 
                  className="px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all shadow-sm"
                >
                  Get in Touch
                </a>
                <a 
                  href={PROFILE.links.github} 
                  target="_blank" 
                  className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all"
                >
                  View GitHub
                </a>
                <a 
                  href={PROFILE.links.linkedin} 
                  target="_blank" 
                  className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-all"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Portfolio Dashboard Section */}
      <section id="projects" className="py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Project Portfolio Dashboard</h2>
              <p className="text-slate-500 mt-2">Executive overview of engineering & analytical delivery</p>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Active Repository Sync
            </div>
          </div>

          {/* KPI Cards - Mocking the Power BI Look from your image */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Total Projects</p>
              <p className="text-3xl font-black text-slate-900">{PROJECTS.length}</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Tech Stacks</p>
              <p className="text-3xl font-black text-slate-900">
                {new Set(PROJECTS.flatMap(p => p.tech)).size}
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Avg. Proficiency</p>
              <p className="text-3xl font-black text-blue-600">87%</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase mb-1">Delivery Rate</p>
              <p className="text-3xl font-black text-green-600">100%</p>
            </div>
          </div>

          {/* Projects Grid - Styled like a professional report */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-sm flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <div className="px-2 py-1 text-[10px] font-bold bg-blue-50 text-blue-600 rounded border border-blue-100">
                    COMPLETED
                  </div>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-[10px] font-medium bg-slate-100 text-slate-500 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-8 flex-grow">
                  {project.highlights.map((h, hIdx) => (
                    <li key={`proj-h-${idx}-${hIdx}`} className="text-xs text-slate-500 flex gap-2">
                      <span className="text-blue-400 mt-1 w-1 h-1 rounded-full shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <a 
                  href={project.link} 
                  target="_blank" 
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Case Study 
                  <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Knowledge Dashboard Section */}
      <section id="skills" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Technical Proficiency Dashboard</h2>
              <p className="text-slate-500 mt-2">Quantified skill levels across data and engineering domains</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Live Proficiency Metrics
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {SKILLS.map((skillGroup) => (
              <div key={skillGroup.category} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-slate-800">{skillGroup.category}</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Domain</span>
                </div>
                
                <div className="space-y-5">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out group-hover:bg-blue-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Professional Experience</h2>
          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{exp.period}</p>
                  <p className="text-sm text-slate-400">{exp.location}</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="text-slate-600 leading-relaxed flex gap-3">
                        <span className="text-blue-500 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-900">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition-shadow">
                <p className="text-sm font-bold text-slate-500 mb-1">{edu.period}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                <p className="text-slate-600">{edu.institution}</p>
                <p className="text-xs text-slate-400 mt-4 uppercase font-medium tracking-widest">{edu.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-sm">
          © 2026 {PROFILE.name}. Built with Next.js & Tailwind.
        </p>
      </footer>
    </main>
  );
}
