export default function CourseManagement() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Course Management
          </h1>
          <div className="w-16 h-1 bg-amber-500 rounded mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to the Course Management section. This is where administrators can create, edit, and manage all courses within the MYESISA platform. From here, you'll be able to oversee course content, manage enrollments, and ensure educational quality across all programs.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded"></div>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Coming Soon
            </h2>
            <p className="text-gray-600">
              Course management features are currently under development. This section will include comprehensive tools for course administration, content management, and student enrollment oversight.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}