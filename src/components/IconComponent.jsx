// Import SVGs as components
import SearchMinus from "jsx:../assets/svg/search-minus-solid.svg";
import SearchPlus from "jsx:../assets/svg/search-plus-solid.svg";

const iconTypes = {
  searchMinus: SearchMinus,
  searchPlus: SearchPlus,
};

const IconComponent = ({ name, ...props }) => {
  let Icon = iconTypes[name];
  return <Icon {...props} />;
};
export default IconComponent;
