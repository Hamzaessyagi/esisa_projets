import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Clock, TrendingUp, Users } from "lucide-react"

export default function StudentDashboard() {
  // Mock data - in a real app this would come from props or a data layer
  const coursesInProgress = [
    {
      id: 1,
      name: "Advanced Mathematics",
      code: "MATH 301",
      progress: 75,
      nextClass: "Tomorrow, 9:00 AM",
      instructor: "Dr. Johnson"
    },
    {
      id: 2,
      name: "Digital Marketing Strategies",
      code: "MKT 201",
      progress: 60,
      nextClass: "Friday, 2:00 PM",
      instructor: "Prof. Smith"
    },
    {
      id: 3,
      name: "Introduction to Psychology", 
      code: "PSY 101",
      progress: 85,
      nextClass: "Monday, 11:00 AM",
      instructor: "Dr. Wilson"
    },
    {
      id: 4,
      name: "Computer Science Fundamentals",
      code: "CS 150",
      progress: 40,
      nextClass: "Thursday, 3:30 PM",
      instructor: "Prof. Davis"
    }
  ]

  const upcomingAssignments = [
    {
      id: 1,
      title: "Calculus Problem Set #7",
      course: "MATH 301",
      dueDate: "Oct 25, 2024",
      priority: "high"
    },
    {
      id: 2,
      title: "Marketing Campaign Analysis",
      course: "MKT 201", 
      dueDate: "Oct 28, 2024",
      priority: "medium"
    },
    {
      id: 3,
      title: "Research Paper Draft",
      course: "PSY 101",
      dueDate: "Nov 2, 2024",
      priority: "low"
    }
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--student-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-display mb-2" style={{ color: 'var(--student-primary)' }}>
            Hello, Student! 👋
          </h1>
          <p className="text-lg text-gray-600">
            Welcome back to your learning dashboard. Here's what's happening today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Courses</p>
                  <p className="text-2xl font-bold" style={{ color: 'var(--student-primary)' }}>4</p>
                </div>
                <BookOpen className="h-8 w-8" style={{ color: 'var(--student-primary)' }} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Assignments Due</p>
                  <p className="text-2xl font-bold" style={{ color: 'var(--student-primary)' }}>3</p>
                </div>
                <Calendar className="h-8 w-8" style={{ color: 'var(--student-primary)' }} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Study Hours</p>
                  <p className="text-2xl font-bold" style={{ color: 'var(--student-primary)' }}>12.5</p>
                </div>
                <Clock className="h-8 w-8" style={{ color: 'var(--student-primary)' }} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Overall Progress</p>
                  <p className="text-2xl font-bold" style={{ color: 'var(--student-primary)' }}>68%</p>
                </div>
                <TrendingUp className="h-8 w-8" style={{ color: 'var(--student-primary)' }} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses in Progress */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" style={{ color: 'var(--student-primary)' }} />
                  <span style={{ color: 'var(--student-primary)' }}>Courses in Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coursesInProgress.map((course) => (
                    <Card key={course.id} className="border border-gray-100 hover:border-purple-200 transition-colors duration-200">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-gray-900">{course.name}</h4>
                            <p className="text-sm text-gray-600">{course.code}</p>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Progress</span>
                              <span className="text-sm font-medium" style={{ color: 'var(--student-primary)' }}>
                                {course.progress}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="h-2 rounded-full transition-all duration-300"
                                style={{ 
                                  width: `${course.progress}%`,
                                  backgroundColor: 'var(--student-primary)'
                                }}
                              />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                              <Users className="h-3 w-3" />
                              {course.instructor}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-600">
                              <Calendar className="h-3 w-3" />
                              {course.nextClass}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Assignments */}
          <div>
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" style={{ color: 'var(--student-primary)' }} />
                  <span style={{ color: 'var(--student-primary)' }}>Upcoming Assignments</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-gray-900 text-sm leading-tight">
                            {assignment.title}
                          </h4>
                          <Badge 
                            variant={assignment.priority === 'high' ? 'destructive' : 
                                   assignment.priority === 'medium' ? 'default' : 'secondary'}
                            className="ml-2 text-xs"
                          >
                            {assignment.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{assignment.course}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          Due: {assignment.dueDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm mt-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" style={{ color: 'var(--student-primary)' }} />
                  <span style={{ color: 'var(--student-primary)' }}>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Quiz Completed</p>
                    <p className="text-xs text-gray-600">Psychology Chapter 5 - Score: 92%</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Assignment Submitted</p>
                    <p className="text-xs text-gray-600">Marketing Strategy Report</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">Certificate Earned</p>
                    <p className="text-xs text-gray-600">Introduction to Data Analysis</p>
                    <p className="text-xs text-gray-500">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}