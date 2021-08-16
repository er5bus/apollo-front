import {md5} from "../../helpers"

const GRAVATAR = "https://secure.gravatar.com/avatar/{hash}?s={size}&d={icon}&r={rating}"

const UserAvatar = ({ email, size, icon='identicon', rating='g' }) => {
  const hash = md5(email)
  return <img alt="user avatar" src={ GRAVATAR.replace("{hash}", hash).replace("{size}", size).replace("{icon}", icon).replace("{rating}", rating) } />
}


export default UserAvatar
