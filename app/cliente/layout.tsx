import Header from "@/components/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="items-center text-center justify-center flex flex-col w-full ">
      <Header />
      {children}
    </div>
  );
}
