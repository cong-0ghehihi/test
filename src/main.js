import { render, router } from "./lib";
import DashBoard from "./pages/dashboard";
import ProductDetail from "./pages/productDetail";
import './style.css'


// Router
router.on('/', function () {
  render("#app", DashBoard )
})
router.on('/detail/:id', function ({data}) {
  render("#app",()=> ProductDetail(data.id))
})
router.resolve();

 