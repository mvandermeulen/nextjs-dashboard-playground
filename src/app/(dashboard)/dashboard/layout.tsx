import Nav from "@/components/nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row p-3 gap-3 h-screen">
      <aside className="max-h-screen w-60 p-5 bg-gray-3 border border-gray-2  rounded-lg sticky top-0 max-md:hidden ">
        <Nav />
      </aside>
      <main className="flex-1 bg-gray-3 border border-gray-2  rounded-lg  max-h-screen overflow-auto pb-5 ">
        {children}
      </main>
    </div>
  );
}
