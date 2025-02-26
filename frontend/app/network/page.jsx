"use client"
import { useState } from 'react'
import { Sidebar } from "@/components/Sidebar"
import { ConnectionSuggestions } from "@/components/Connection-suggestion"
import { Invitations } from "@/components/Invitations"
import { CurrentConnections } from "@/components/Current-connections"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header with Menu */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
      <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-bold">My Network</h1>
        
      </div>

      <div className="container mx-auto px-4 py-8 flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 md:ml-8">
          <h1 className="text-2xl font-bold mb-6 hidden md:block">My Network</h1>
          <div className="space-y-8">
            <Invitations />
            <ConnectionSuggestions />
            <CurrentConnections />
          </div>
        </main>
      </div>
    </div>
  )
}

// import { Sidebar } from "@/components/Sidebar"
// import { ConnectionSuggestions } from "@/components/Connection-suggestion"
// import { Invitations } from "@/components/Invitations"
// import { CurrentConnections } from "@/components/Current-connections"

// export default function NetworkPage() {
//   return (
//       <div className="container mx-auto px-4 py-8 flex">
//         <Sidebar />
//         <main className="flex-1 ml-8">
//           <h1 className="text-2xl font-bold mb-6">My Network</h1>
//           <div className="space-y-8">
//             <Invitations />
//             <ConnectionSuggestions />
//             <CurrentConnections />
//           </div>
//         </main>
//       </div>
//   )
// }

