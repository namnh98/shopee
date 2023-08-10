import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATH_NAME } from '../constants/common';

import Footer from '../component/footer';
import Header from '../component/header';

import Blog from '../pages/blog';
import Contact from '../pages/contact';
import Home from '../pages/home';
import MyAccount from '../pages/myAccount';
import Product from '../pages/product';
import ResetPassword from '../pages/resetPasword';
import Shop from '../pages/shop';

const AppRoute = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={PATH_NAME.SHOP} element={<Shop />} />
        <Route path={PATH_NAME.PRODUCT} element={<Product />} />
        <Route path={PATH_NAME.BLOG} element={<Blog />} />
        <Route path={PATH_NAME.MY_ACCOUNT} element={<MyAccount />} />
        <Route path={PATH_NAME.RESET_PASSWORD} element={<ResetPassword />} />
        <Route path={PATH_NAME.CONTACT} element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRoute;
