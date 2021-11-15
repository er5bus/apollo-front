const DisplayItem = ({ primary, secondary, html=false }) => {

  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-action active">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ primary }</h5>
        </div>
        <p className="mb-1">
          { html && <div dangerouslySetInnerHTML={{__html: secondary }} />  }
          { !html && secondary }
        </p>
      </div>
    </div>
  )
}


export default DisplayItem
