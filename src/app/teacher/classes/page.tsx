import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

export default function MyClassesPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-[var(--teacher-background)]">
            <GraduationCap className="h-8 w-8 text-[var(--teacher-primary)]" />
          </div>
          <h1 className="text-display text-[var(--teacher-primary)]">My Classes</h1>
        </div>
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
          Manage and monitor your classes, assignments, and student progress all in one place.
        </p>
      </div>

      {/* Placeholder Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <Card key={index} className="border border-[var(--border)] hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-[var(--teacher-background)]">
                  <BookOpen className="h-5 w-5 text-[var(--teacher-primary)]" />
                </div>
                <h3 className="font-semibold text-[var(--text-primary)]">
                  Class {index}
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm mb-3">
                Subject area and grade level information will appear here.
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[var(--text-secondary)]">Students: --</span>
                <span className="text-[var(--teacher-primary)] font-medium">View Details</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State Message */}
      <div className="text-center py-12 opacity-60">
        <p className="text-[var(--text-secondary)]">
          Your classes will be displayed here once they are assigned.
        </p>
      </div>
    </div>
  )
}