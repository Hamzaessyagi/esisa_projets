import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap } from "lucide-react"

export default function MyCoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--student-primary)' }}>
          My Courses
        </h1>
        <p className="text-lg text-muted-foreground">
          Access and manage all your enrolled courses
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Course 1 Placeholder */}
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5" style={{ color: 'var(--student-primary)' }} />
              <CardTitle className="text-lg">Mathematics 101</CardTitle>
            </div>
            <CardDescription>Introduction to Calculus</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full" 
                  style={{ 
                    backgroundColor: 'var(--student-primary)', 
                    width: '75%' 
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course 2 Placeholder */}
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5" style={{ color: 'var(--student-primary)' }} />
              <CardTitle className="text-lg">Physics 201</CardTitle>
            </div>
            <CardDescription>Classical Mechanics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full" 
                  style={{ 
                    backgroundColor: 'var(--student-primary)', 
                    width: '45%' 
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course 3 Placeholder */}
        <Card className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="h-5 w-5" style={{ color: 'var(--student-primary)' }} />
              <CardTitle className="text-lg">Computer Science 150</CardTitle>
            </div>
            <CardDescription>Data Structures & Algorithms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="h-2 rounded-full" 
                  style={{ 
                    backgroundColor: 'var(--student-primary)', 
                    width: '90%' 
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Card className="inline-block p-8" style={{ backgroundColor: 'var(--student-background)' }}>
          <GraduationCap className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--student-primary)' }} />
          <h3 className="text-lg font-semibold mb-2">Continue Your Learning Journey</h3>
          <p className="text-muted-foreground">
            Keep up the great work! Your courses are waiting for you.
          </p>
        </Card>
      </div>
    </div>
  )
}