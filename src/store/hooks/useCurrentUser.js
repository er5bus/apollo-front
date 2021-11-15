import { isEqual } from "lodash"
import { useSelector } from "react-redux"

const useCurrentUser = () => {
  const currentUser = useSelector((state) => ({
    currentUser: state.user.currentUser,
    permissions: state.user.permissions,
    token: state.user.token,
    isAuthenticated: state.user.isAuthenticated,
    isSuperuser: state.user.isSuperuser
  }), isEqual)

  return currentUser
}


export default useCurrentUser
