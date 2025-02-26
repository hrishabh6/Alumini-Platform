import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const invitations = [
  { id: 1, name: "David Lee", role: "Frontend Developer at WebTech", mutual: 8 },
  { id: 2, name: "Emma Wilson", role: "Data Analyst at DataCorp", mutual: 12 },
];

export function Invitations() {
  return (
    <Card className="border border-gray-300 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-100 px-4 py-3 rounded-t-lg">
        <CardTitle className="text-xl font-bold text-gray-900">Invitations</CardTitle>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-gray-200">
          See all {invitations.length}
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {invitations.map((invitation) => (
            <div key={invitation.id} className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 p-2">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`/placeholder-user.jpg`} alt={invitation.name} />
                  <AvatarFallback>{invitation.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{invitation.name}</h3>
                  <p className="text-sm text-gray-600">{invitation.role}</p>
                  <p className="text-xs text-gray-500">{invitation.mutual} mutual connections</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="default"
                  className="flex-1 sm:flex-none lg:bg-green-500 lg:text-white lg:hover:bg-green-600 lg:shadow-md lg:rounded-full lg:px-4 lg:py-2"
                >
                  Accept
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 sm:flex-none lg:bg-red-500 lg:text-white lg:border-red-500 lg:hover:bg-red-600 lg:shadow-md lg:rounded-full lg:px-4 lg:py-2"
                >
                  Ignore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// export function Invitations() {
//   return (
//     <Card className="border border-gray-300 shadow-lg">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gray-100 px-4 py-3 rounded-t-lg">
//         <CardTitle className="text-xl font-bold text-gray-900">Invitations</CardTitle>
//         <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-gray-200">
//           See all {invitations.length}
//         </Button>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           {invitations.map((invitation) => (
//             <div key={invitation.id} className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 p-2">
//               <div className="flex items-center space-x-4">
//                 <Avatar className="h-12 w-12">
//                   <AvatarImage src={`/placeholder-user.jpg`} alt={invitation.name} />
//                   <AvatarFallback>{invitation.name[0]}</AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <h3 className="font-semibold">{invitation.name}</h3>
//                   <p className="text-sm text-gray-600">{invitation.role}</p>
//                   <p className="text-xs text-gray-500">{invitation.mutual} mutual connections</p>
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 <Button size="sm" variant="default" className="flex-1 sm:flex-none">
//                   Accept
//                 </Button>
//                 <Button size="sm" variant="outline" className="flex-1 sm:flex-none">
//                   Ignore
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
