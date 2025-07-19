import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GradebookPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header Section */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-teacher-background">
              <GraduationCap className="h-6 w-6 text-teacher-primary" />
            </div>
            <div>
              <h1 className="text-display font-bold text-teacher-primary">
                Gradebook
              </h1>
              <p className="text-muted-foreground">
                Manage student grades, assignments, and academic performance tracking
              </p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-teacher-primary">Grade Overview</CardTitle>
              <CardDescription>
                Student performance and assignment tracking
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-64">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-teacher-background flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-teacher-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Gradebook Coming Soon</p>
                  <p className="text-sm text-gray-500">Grade management features will be available here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" disabled>
                  Add Assignment
                </Button>
                <Button variant="outline" className="w-full justify-start" disabled>
                  Enter Grades
                </Button>
                <Button variant="outline" className="w-full justify-start" disabled>
                  Generate Reports
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Class Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Students</span>
                    <span className="font-medium">--</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Grade</span>
                    <span className="font-medium">--</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Assignments Due</span>
                    <span className="font-medium">--</span>
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