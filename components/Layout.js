import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div
      style={{
        maxWidth: "1660px",
        marginInline: "auto",
        background: "#414141",
      }}
    >
      <Navbar />
      {children}
    </div>
  );
}
