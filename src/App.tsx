import Profile from './profile.tsx'
import './index.css'

function App() {
  // Sample data to demonstrate scrollable content
  const dashboardItems = [
    { title: "Project Alpha", status: "In Progress", progress: 75 },
    { title: "Project Beta", status: "Completed", progress: 100 },
    { title: "Project Gamma", status: "Planning", progress: 25 },
    { title: "Project Delta", status: "In Progress", progress: 60 },
    { title: "Project Epsilon", status: "Review", progress: 90 },
    { title: "Project Zeta", status: "In Progress", progress: 45 },
    { title: "Project Eta", status: "Planning", progress: 10 },
    { title: "Project Theta", status: "Completed", progress: 100 },
  ];

  const blogPosts = [
    { title: "Getting Started with React", date: "2024-01-15", excerpt: "A comprehensive guide to building modern web applications with React..." },
    { title: "TypeScript Best Practices", date: "2024-01-10", excerpt: "Learn how to write better TypeScript code with these proven patterns..." },
    { title: "CSS Grid vs Flexbox", date: "2024-01-05", excerpt: "Understanding when to use CSS Grid and when to use Flexbox for layouts..." },
    { title: "Modern JavaScript Features", date: "2023-12-28", excerpt: "Exploring the latest JavaScript features that every developer should know..." },
    { title: "Building Responsive Designs", date: "2023-12-20", excerpt: "Creating beautiful, responsive web designs that work on all devices..." },
    { title: "State Management in React", date: "2023-12-15", excerpt: "Comparing different state management solutions for React applications..." },
    { title: "Performance Optimization Tips", date: "2023-12-10", excerpt: "Techniques to improve your web application's performance and user experience..." },
    { title: "Testing React Components", date: "2023-12-05", excerpt: "Best practices for testing React components with modern testing tools..." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row gap-1 p-2 max-w-full mx-auto">
        {/* Profile Section */}
        <div className="w-full lg:w-80 bg-white shadow-lg p-6">
        <Profile />
        </div>

        {/* Dashboard Section */}
        <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
            <p className="text-gray-600 mt-1">Project overview and status</p>
          </div>

          {/* Scrollable Dashboard Content */}
          <div className="h-96 lg:h-[calc(100vh-12rem)] overflow-y-auto p-6 space-y-4">
            {dashboardItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    item.status === 'Review' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{item.progress}% complete</p>
              </div>
            ))}

            {/* Additional dashboard content to demonstrate scrolling */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-3">Recent Activity</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Completed code review for Project Beta</p>
                <p>• Updated documentation for Project Alpha</p>
                <p>• Started planning phase for Project Eta</p>
                <p>• Fixed critical bug in Project Delta</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h3 className="font-semibold text-gray-800 mb-3">Achievements</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>🏆 Completed 3 projects this month</p>
                <p>⚡ 95% on-time delivery rate</p>
                <p>🎯 Zero critical bugs in production</p>
                <p>📈 Improved team productivity by 20%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mini-Blog Section */}
        <div className="w-full lg:w-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Mini Blog</h2>
            <p className="text-gray-600 mt-1">Latest thoughts and insights</p>
          </div>

          {/* Scrollable Blog Content */}
          <div className="h-96 lg:h-[calc(100vh-12rem)] overflow-y-auto p-6 space-y-6">
            {blogPosts.map((post, index) => (
              <article key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                <h3 className="font-semibold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                <button className="text-blue-600 text-xs font-medium mt-2 hover:text-blue-800 transition-colors">
                  Read more →
                </button>
              </article>
            ))}

            {/* Load more section */}
            <div className="text-center py-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
