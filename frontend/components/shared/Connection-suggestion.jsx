import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

const suggestions = [
  { id: 1, name: "Alice Johnson", role: "Software Engineer at TechCorp", mutual: 15 },
  { id: 2, name: "Bob Smith", role: "Product Manager at InnovateCo", mutual: 23 },
  { id: 3, name: "Carol Williams", role: "UX Designer at DesignHub", mutual: 7 },
]

export function ConnectionSuggestions() {
  return (
    <Card className="border border-gray-300 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-100 px-4 py-3 rounded-t-lg">
        <CardTitle className="text-xl font-bold text-gray-900">People You May Know</CardTitle>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-gray-200">
          See all
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start">
                <Avatar className="h-12 w-12 sm:h-16 sm:w-16 border border-gray-300">
                  <AvatarImage src={`/placeholder-user.jpg`} alt={suggestion.name} />
                  <AvatarFallback className="text-lg font-semibold">{suggestion.name[0]}</AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:bg-gray-200">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-3">{suggestion.name}</h3>
              <p className="text-sm text-gray-700 mt-1">{suggestion.role}</p>
              <p className="text-xs text-gray-500 mt-1">{suggestion.mutual} mutual connections</p>
              <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700" variant="default">
                Connect
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
// export function ConnectionSuggestions() {
//   return (
//     <Card className="border border-gray-300 shadow-lg">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-100 px-4 py-3 rounded-t-lg">
//         <CardTitle className="text-xl font-bold text-gray-900">People You May Know</CardTitle>
//         <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-gray-200">
//           See all
//         </Button>
//       </CardHeader>
//       <CardContent className="p-4">
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {suggestions.map((suggestion) => (
//             <div
//               key={suggestion.id}
//               className="bg-gray-50 border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition-all"
//             >
//               <div className="flex justify-between items-start">
//                 <Avatar className="h-16 w-16 border border-gray-300">
//                   <AvatarImage src={`/placeholder-user.jpg`} alt={suggestion.name} />
//                   <AvatarFallback className="text-lg font-semibold">{suggestion.name[0]}</AvatarFallback>
//                 </Avatar>
//                 <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:bg-gray-200">
//                   <X className="h-4 w-4" />
//                 </Button>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mt-3">{suggestion.name}</h3>
//               <p className="text-sm text-gray-700 mt-1">{suggestion.role}</p>
//               <p className="text-xs text-gray-500 mt-1">{suggestion.mutual} mutual connections</p>
//               <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700" variant="default">
//                 Connect
//               </Button>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
