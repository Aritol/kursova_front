// import { createRouter, createWebHashHistory } from "vue-router";

// import Home from "@/pages/Home";
// import ContactPage from "@/pages/ContactPage";
// import Products from "@/pages/Products";
// import AboutPage from "@/pages/AboutPage";
// import DeliveryAndPayments from "@/pages/DeliveryAndPayments";

// import EditPage from "@/pages/EditPage";
// import CartPage from "@/pages/CartPage";
// import ProductsList from "@/components/ProductsList";
// import Signup from "@/pages/Signup";
// import ProductInfoPage from "@/pages/ProductInfoPage";
// import OrdersPage from "@/pages/OrdersPage";
// import OrderInfo from "@/pages/OrderInfo";
// import LettersPage from "@/pages/LettersPage";
// import LetterInfoPage from "@/pages/LettersPage/LetterInfoPage";
// import CreateOrderPage from "@/pages/CreateOrderPage";
// import AccessDeniedPage from "@/pages/AccessDeniedPage";
// import PageNotFound from "@/pages/PageNotFound";

// const routes = [
//   { path: "/", component: Home, name: "home" },
//   { path: "/contact", component: ContactPage, name: "contactPage" },
//   { path: "/products", component: Products, name: "productsPage" },

//   {
//     path: "/products/:category",
//     component: ProductsList,
//     name: "productsList",
//   },
//   // {
//   //   path: "/products/:pathMatch(.*)*",
//   //   component: ProductsList,
//   //   name: "productsList",
//   // },
//   {
//     path: "/product/:category/:id",
//     component: ProductInfoPage,
//     name: "productInfoPage",
//   },
//   { path: "/about", component: AboutPage, name: "aboutPage" },
//   {
//     path: "/delivery",
//     component: DeliveryAndPayments,
//     name: "deliveryAndPayments",
//   },

//   {
//     path: "/products/edit/:id?",
//     component: EditPage,
//     name: "editPage",
//     meta: { auth: true },
//   },
//   { path: "/cart", component: CartPage, name: "cart" },
//   { path: "/orders", component: OrdersPage, name: "ordersPage" },

//   { path: "/signup", component: Signup, name: "signup", meta: { auth: true } },
//   {
//     path: "/OrderInformation/:id",
//     component: OrderInfo,
//     name: "orderInfo",
//     meta: { auth: true },
//   },
//   { path: "/letters", component: LettersPage, name: "lettersPage" },
//   {
//     path: "/letterInfo/:id",
//     component: LetterInfoPage,
//     name: "letterInfoPage",
//     meta: { auth: true },
//   },
//   {
//     path: "/createOrder",
//     component: CreateOrderPage,
//     name: "createOrderPage",
//   },
//   {
//     path: "/forbidden",
//     component: AccessDeniedPage,
//     name: "accessDeniedPage",
//   },
//   {
//     path: "/:pathMatch(.*)*",
//     component: PageNotFound,
//     name: "pageNotFound",
//   },
// ];

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// });
// export default router;

// import MainMasterpage from "@/masterpages/MainMasterPage.vue";
import MainPage from "@/pages/MainPage";
import Page404 from "@/pages/404Page";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import contactsPage from "@/pages/infoPages/contactsPage.vue";
import deliveryPage from "@/pages/infoPages/delivery.vue";
import warrantlyPage from "@/pages/infoPages/warrantly.vue";
import productPage from "@/pages/ProductPage";
import addForm from "@/pages/AddForm";
// import ProductsList from "@/components/ProductsList";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: MainPage, name: "mainPage" },
  { path: "/404", component: Page404, name: "Page404" },
  { path: "/login", component: LoginPage, name: "loginPage" },
  { path: "/signup", component: SignupPage, name: "signupPage" },
  {
    path: "/products/:category",
    component: MainPage,
    name: "productsList",
  },
  { path: "/contacts", component: contactsPage, name: "contactsPage" },
  { path: "/delivery", component: deliveryPage, name: "deliveryPage" },
  { path: "/warrantly", component: warrantlyPage, name: "warrantlyPage" },
  {
    path: "/product/id",
    component: productPage,
    name: "productPage",
  },
  {
    path: "/add/:id?",
    component: addForm,
    name: "addForm",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
