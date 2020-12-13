import IcoMoon from "react-icomoon"
const iconSet = require("./selection.json")

const SocialIcon = ({ ...props }) => {
    return <IcoMoon iconSet={iconSet} {...props}  />
}

export default SocialIcon