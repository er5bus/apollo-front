import {useRef} from "react"
import { Trans } from "react-i18next"
import {Button} from "react-bootstrap"
import {useHistory} from "react-router-dom"
import {Card, CardBody, CardHeader, CardHeaderToolbar} from "./Card"


const FormCard = ({ title, description, isLoading, children }) => {

  const saveRef = useRef()
  const history = useHistory()

  const onClick = () => {
    if (saveRef && saveRef.current && !isLoading) {
      saveRef.current.click()
    }
  }

  const goBack = () => {
    history.goBack()
  }

  return (
  <Card className="card-stretch">
    <CardHeader>
      <div className="card-title">
        <div className="card-label ">
          <h3 className="card-label font-weight-bold text-dark">{ title }</h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">{ description }</span>
        </div>
      </div>
      <CardHeaderToolbar>
        <Button
          onClick={goBack}
          type="button"
          className="btn btn-sm btn-secondary mx-3 my-1"
        >
          <Trans> Back </Trans>
        </Button>
        <Button
          onClick={onClick}
          type="button"
          className="btn btn-sm btn-primary"
        >
          {isLoading && <span className="px-5 spinner spinner-white"></span>}
          <Trans> Save </Trans>
        </Button>
      </CardHeaderToolbar>
    </CardHeader>
    <CardBody>
      {children({ saveRef })}
    </CardBody>
  </Card>
  )
}


export default FormCard
