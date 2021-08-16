const Footer = () => {
  const today = new Date().getFullYear()

  return (
    <div
      className={`footer bg-white py-4 d-flex flex-lg-column`}
      id="kt_footer"
    >
      <div
        className={`d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        <div className="container-fluid d-flex align-items-stretch align-items-center justify-content-between">
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted font-weight-bold mr-2">{today.toString()}</span> © { "0.1" }
        </div>
        <div className="nav nav-dark order-1 order-md-2">
          <a
            href="https://github.com/er5bus"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link pr-3 pl-0"
          >
            Er5bus
          </a>
        </div>
      </div>
        </div>
    </div>
  )
}


export default Footer
