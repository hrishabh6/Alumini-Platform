import Image from "next/image";
import { auth } from "@/auth";


export default async function Home() {
  const session = await auth()
  return (
    <>
      <h1 className="text-2xl">Home</h1>
    </>
  );
}
