function Layout({ children }) {
  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#4f46e5,#7c3aed)",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div
            className="card shadow-lg border-0"
            style={{ borderRadius: "20px" }}
          >

            <div className="card-body p-5">

              {children}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Layout;