import {useSubheaderContext} from "./SubheaderContext"

const useSubheader = () => {

  const subheaderProps = useSubheaderContext()

  const push = (str, init = false) => {
    const title = Object.freeze(str)
    subheaderProps.setTitle(title)
    if (subheaderProps.subheaders.length && !subheaderProps.subheaders.includes(title) ){
      subheaderProps.setSubheaders([ ...subheaderProps.subheaders, title ])
    }

    if (init){
      subheaderProps.setSubheader([ title  ])
    }
  }

  return {
    subheaders: subheaderProps.subheaders,
    title: subheaderProps.title,
    push
  }
}


export default useSubheader
