import AdminHeader from "@/components/adminHeader";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
        <AdminHeader />
        {children}
    </html>
  );
}