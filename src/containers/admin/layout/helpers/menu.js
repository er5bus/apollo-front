import { fromJS } from "immutable"
import routes from "../../pages/routes"


export const aside = fromJS([
  {
    title: "Dashboard",
    icon: "/media/icons/duotone/Ecommerce/Shop.svg",
    url: routes.dashboard.path
  },
  {
    title: "Classe managment",
  },
  {
    title: "Level",
    icon: "/media/icons/duotone/Business/Archive.svg",
    url: "routes.path.stock"
  },
  {
    title: "Section",
    icon: "/media/icons/duotone/Ecommerce/Shopping-Basket.svg",
    url: "routes.path.product"
  },
  {
    title: "Classe",
    icon: "/media/icons/duotone/Ecommerce/Filter.svg",
    url: "routes.path.category"
  },
  {
    title: "Courses managment",
  },
  {
    title: "Course",
    icon: "/media/icons/duotone/Ecommerce/Shopping-Tag.svg",
    url: "routes.path.tags"
  },
  {
    title: "User managment",
  },
  {
    title: "User",
    icon: "/media/icons/duotone/Ecommerce/Shopping-Cart.svg",
    url: "routes.path.sell"
  },
  {
    title: "Group",
    icon: "/media/icons/duotone/Ecommerce/Delivery-Truck.svg",
    url: "routes.path.buy"
  },
])
