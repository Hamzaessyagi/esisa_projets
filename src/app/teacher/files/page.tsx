import { FileText } from "lucide-react"

export default function Files() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-teacher-background">
            <FileText className="h-6 w-6 text-teacher-primary" />
          </div>
          <h1 className="text-3xl font-bold text-teacher-primary">Files</h1>
        </div>
        
        <div className="bg-card rounded-lg border border-border p-8 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-4">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              File Management Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Upload, organize, and share course materials with your students. 
              This feature will be available in an upcoming release.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}