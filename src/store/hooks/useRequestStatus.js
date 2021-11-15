import { isEqual } from "lodash"
import { useSelector } from "react-redux"

const useRequestStatus = () => {
  const requestStatus = useSelector((state) => ({
    isLoading: state.status.isLoading,
    isFetching: state.status.isFetching
  }), isEqual)

  return requestStatus
}


export default useRequestStatus
