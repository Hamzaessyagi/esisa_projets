import { HardDrive } from "lucide-react"

export default function FileStorage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <HardDrive className="w-8 h-8 text-[--admin-primary]" />
          <h1 className="text-display" style={{ color: 'var(--admin-primary)' }}>
            File Storage
          </h1>
        </div>
        <p className="text-[--text-secondary] text-lg">
          This is the admin file repository.
        </p>
      </div>
    </div>
  )
}