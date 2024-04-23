import Header from "@/common/components/Header";
import HomePage from "@/common/components/HomePage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-2 relative">
      <HomePage/>
    </main>
  );
}
