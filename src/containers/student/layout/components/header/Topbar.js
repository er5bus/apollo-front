import QuickUserToggler from "../extras/QuiclUserToggler"

const Topbar = () => {
  return (
    <div className="d-flex align-items-stretch flex-shrink-0">
      <div className="d-flex align-items-stretch flex-shrink-0">
      {/*<QuickActionsDropdown /> <SearchDropdown />*/}
      
      {/* <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="quick-panel-tooltip">Quick panel</Tooltip>}
      >
        <div
          className="topbar-item"
          data-toggle="tooltip"
          title="Quick panel"
          data-placement="right"
        >
          <div
            className="btn btn-icon btn-clean btn-lg mr-1"
            id="kt_quick_panel_toggle"
          >
            <span className="svg-icon svg-icon-xl svg-icon-primary">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Layout/Layout-4-blocks.svg"
                )}
              />
            </span>
          </div>
        </div>
      </OverlayTrigger>
      <LanguageSelectorDropdown />*/}
      <QuickUserToggler />
      </div>
    </div>
  )
}


export default Topbar
