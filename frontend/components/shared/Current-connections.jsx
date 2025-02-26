import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const connections = [
  { id: 1, name: "David Brown", role: "Frontend Developer" },
  { id: 2, name: "Emma Davis", role: "Data Scientist" },
  { id: 3, name: "Frank Miller", role: "Product Owner" },
  { id: 4, name: "Grace Lee", role: "UI/UX Designer" },
  { id: 5, name: "Henry Wilson", role: "Backend Engineer" },
]

export function CurrentConnections() {
  return (
    <Card className="border border-gray-300 shadow-lg">
      <CardHeader className="bg-gray-100 px-4 py-3 rounded-t-lg">
        <CardTitle className="text-xl font-bold text-gray-900">Your Connections</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="flex items-center space-x-4 bg-gray-50 border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-md transition-all"
            >
              <Avatar className="h-10 w-10 sm:h-14 sm:w-14 border border-gray-300">
                <AvatarImage src={`/placeholder-user.jpg`} alt={connection.name} />
                <AvatarFallback className="text-lg font-semibold">{connection.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base sm:text-lg font-bold text-gray-900">{connection.name}</p>
                <p className="text-sm text-gray-700">{connection.role}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
// export function CurrentConnections() {
//   return (
//     <Card className="border border-gray-300 shadow-lg">
//       <CardHeader className="bg-gray-100 px-4 py-3 rounded-t-lg">
//         <CardTitle className="text-xl font-bold text-gray-900">Your Connections</CardTitle>
//       </CardHeader>
//       <CardContent className="p-4">
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {connections.map((connection) => (
//             <div
//               key={connection.id}
//               className="flex items-center space-x-4 bg-gray-50 border border-gray-200 rounded-xl shadow-md p-4 hover:shadow-md transition-all"
//             >
//               <Avatar className="h-14 w-14 border border-gray-300">
//                 <AvatarImage src={`/placeholder-user.jpg`} alt={connection.name} />
//                 <AvatarFallback className="text-lg font-semibold">{connection.name[0]}</AvatarFallback>
//               </Avatar>
//               <div>
//                 <p className="text-lg font-bold text-gray-900">{connection.name}</p>
//                 <p className="text-sm text-gray-700">{connection.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
