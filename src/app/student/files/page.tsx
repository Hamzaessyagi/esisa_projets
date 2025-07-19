import { Folder } from "lucide-react"

export default function MyFiles() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <Folder className="h-8 w-8 text-[#8b5cf6]" />
        <h1 className="text-[#8b5cf6] font-bold text-3xl">My Files</h1>
      </div>
      
      <div className="bg-[#f3f4f6] rounded-lg p-8 text-center">
        <p className="text-[#64748b]">
          Your files and documents will appear here. Upload and organize your study materials, assignments, and resources in this space.
        </p>
      </div>
    </div>
  )
}