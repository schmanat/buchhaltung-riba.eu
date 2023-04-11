import "./globals.css";

export const metadata = {
  title: "Buchhaltung Claudia Riba",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-slate-800 text-slate-700 min-h-screen">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
