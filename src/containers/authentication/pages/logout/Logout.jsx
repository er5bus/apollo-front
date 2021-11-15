import { useEffect } from "react"
import { isEqual } from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { SplashScreen } from "src/components/controls"
import { logout } from "src/store/actions"
import routes from "./../routes"


const Logout = () => {

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector((state) => state.common.auth.toObject(), isEqual )

  useEffect( () => {
    if (isAuthenticated){
      dispatch(logout())
    }

    // eslint-disable-next-line
  }, [isAuthenticated])

  return isAuthenticated ? <SplashScreen /> : <Redirect to={routes.login.path} />
}

export default Logout
