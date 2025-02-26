import Link from "next/link"
import { Users, UserPlus, Calendar, GroupIcon as Groups } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-full md:w-64 bg-white h-full">
      <nav className="p-4">
        <h2 className="text-lg font-semibold mb-4">Manage my network</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/network/connections"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <Users className="h-5 w-5" />
              <span>Connections</span>
            </Link>
          </li>
          <li>
            <Link
              href="/network/contacts"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <UserPlus className="h-5 w-5" />
              <span>Contacts</span>
            </Link>
          </li>
          <li>
            <Link
              href="/network/people-i-follow"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <Users className="h-5 w-5" />
              <span>People You Follow</span>
            </Link>
          </li>
          <li>
            <Link
              href="/network/groups"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <Groups className="h-5 w-5" />
              <span>Groups</span>
            </Link>
          </li>
          <li>
            <Link
              href="/network/events"
              className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
            >
              <Calendar className="h-5 w-5" />
              <span>Events</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
// export function Sidebar() {
//   return (
//     <div className="w-full md:w-64 bg-white h-full">
//       <nav className="p-4">
//         <h2 className="text-lg font-semibold mb-4">Manage my network</h2>
//         <ul className="space-y-2">
//           <li>
//             <Link
//               href="/network/connections"
//               className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
//             >
//               <Users className="h-5 w-5" />
//               <span>Connections</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/network/contacts"
//               className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
//             >
//               <UserPlus className="h-5 w-5" />
//               <span>Contacts</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/network/people-i-follow"
//               className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
//             >
//               <Users className="h-5 w-5" />
//               <span>People You Follow</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/network/groups"
//               className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
//             >
//               <Groups className="h-5 w-5" />
//               <span>Groups</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/network/events"
//               className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded p-2"
//             >
//               <Calendar className="h-5 w-5" />
//               <span>Events</span>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   )
// }
