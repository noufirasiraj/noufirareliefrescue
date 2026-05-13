// src/components/admin/AdminFooter.jsx
const AdminFooter = () => {
  return (
    <footer
      className="text-center text-light py-3 mt-5"
      style={{ backgroundColor: "#4b2e2b" }}
    >
      <small>
        © {new Date().getFullYear()} Relief Rescue | Admin Panel
      </small>
    </footer>
  );
};

export default AdminFooter;
