import { marcellus } from "@/fonts/font";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FriendsBar from "@/components/FriendsBar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex justify-between p-[30px] min-h-[calc(100vh-100px)] gap-[50px]">
        <Sidebar />
          {children}
        <FriendsBar />
      </div>
    </>
  );
}
