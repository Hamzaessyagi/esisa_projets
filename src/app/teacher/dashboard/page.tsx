import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Clock, Users } from "lucide-react"

export default function TeacherDashboard() {
  return (
    <main className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Main Heading */}
        <header className="space-y-2">
          <h1 className="text-display text-[var(--text-primary)]">Welcome, Teacher!</h1>
          <p className="text-[var(--text-secondary)]">
            Manage your classes and track student progress from your dashboard.
          </p>
        </header>

        {/* Quick Overview */}
        <section className="space-y-4">
          <h2 className="text-[var(--text-primary)]">Quick Overview</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Classes</CardTitle>
                <Users className="h-4 w-4 text-[var(--text-secondary)]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-[var(--text-secondary)]">
                  +2 from last semester
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[var(--teacher-background)] border-[var(--teacher-primary)]">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[var(--teacher-primary)]">
                  Grading Queue
                </CardTitle>
                <Clock className="h-4 w-4 text-[var(--teacher-primary)]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-[var(--teacher-primary)]">24</div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Assignments pending review
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <BookOpen className="h-4 w-4 text-[var(--text-secondary)]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Across all classes
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recently Assigned */}
        <section className="space-y-4">
          <h2 className="text-[var(--text-primary)]">Recently Assigned</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      Chapter 5 Quiz - Advanced Mathematics
                    </p>
                    <p className="text-caption text-[var(--text-secondary)]">
                      Due: December 15, 2024
                    </p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-[var(--background-secondary)] text-[var(--text-secondary)] rounded">
                    Active
                  </span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-[var(--border)]">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      Literary Analysis Essay - English Literature
                    </p>
                    <p className="text-caption text-[var(--text-secondary)]">
                      Due: December 20, 2024
                    </p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-[var(--background-secondary)] text-[var(--text-secondary)] rounded">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium text-[var(--text-primary)]">
                      Lab Report - Chemistry Experiments
                    </p>
                    <p className="text-caption text-[var(--text-secondary)]">
                      Due: December 18, 2024
                    </p>
                  </div>
                  <span className="px-2 py-1 text-xs bg-[var(--background-secondary)] text-[var(--text-secondary)] rounded">
                    Draft
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  )
}