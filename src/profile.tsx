import reactLogo from './assets/react.svg'
import './index.css'

function profile() {
    return (
        <div>
          <div className="mb-6 flex flex-col items-center">
            <img
              src={reactLogo}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-blue-200 shadow-md"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800 text-center">Reynaldo D. Aquit</h1>
            <p className="text-blue-600 font-medium text-center">Software Engineer</p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>📍 Location: Philippines</p>
              <p>💼 Experience: 2+ years</p>
              <p>💻 Setup: Work From Home</p>
              <p>🎓 Education: Bachelor</p>
              <p>🎯 Focus: Web Development</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Skills</h3>
						<div className="flex flex-wrap gap-2 mb-2">
              {[ 'HTML5', 'CSS', 'JavaScript', 'PHP', 'MySQL'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
						<div className="flex flex-wrap gap-2 mb-2">
              {['Tailwindcss', 'Bootstrap', 'Materialize'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
						<div className="flex flex-wrap gap-2 mb-2">
              {['Laravel', 'Rest API'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
						<div className="flex flex-wrap gap-2 mb-2">
              {['React', 'TypeScript', 'Node.js'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
						<div className="flex flex-wrap gap-2">
              {['Hono'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

					{/* Tools Section */}
          <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Tools</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="bg-amber-100">
								<h5>AI Pair Programming Tools</h5>
								<p>Gemini Pro</p>
								<p>Augment AI</p>
								<p>Roo Code Gemini AI</p>
								<p>ChatGPT</p>
							</div>
							<p>VSCode</p>
							<p>Git</p>
							<p>Docker</p>
							<p>XAMPP</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 reynaldo@gmail.com</p>
              <p>🔗 linkedin.com/in/reynaldo-aquit-70b715257/</p>
              <p>🐙 github.com/reynaldo-aquit</p>
            </div>
          </div>
        </div>
    )
}
export default profile;
