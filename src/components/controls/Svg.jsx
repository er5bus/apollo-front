import SVG from 'react-inlinesvg';
import {toAbsoluteUrl} from "./../../helpers"

const Svg = ({ src, path, ...props }) => {

  return <SVG alt="..." src={ path ? toAbsoluteUrl(path) : src } { ...props } />
}


export default Svg
