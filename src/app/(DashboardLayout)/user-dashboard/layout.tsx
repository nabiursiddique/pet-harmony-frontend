import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "User dashboard",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      User Dashboard Sidebar
      {children}
    </div>
  );
}
