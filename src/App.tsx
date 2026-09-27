import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">My Portfolio</h1>
          <ul className="flex gap-6">
            <li><a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-blue-600 font-medium">Projects</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section id="hero" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Hi, I'm [Name]</h2>
          <p className="text-lg text-gray-600">High school student and aspiring [Field].</p>
        </section>

        <section id="about" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            I am a dedicated high school student with a keen interest in [Field]. 
            I enjoy learning new technologies and working on creative projects.
          </p>
        </section>

        <section id="projects" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Title 1</h4>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Title 2</h4>
              <p className="text-gray-600">Brief description of the project.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact</h3>
          <p className="text-gray-700">
            Feel free to reach out to me via email: <a href="mailto:email@example.com" className="text-blue-600 hover:underline font-medium">email@example.com</a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
