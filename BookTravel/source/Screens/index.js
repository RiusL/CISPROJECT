<<<<<<< HEAD
import Greeting from "./Greeting"
import Detail from "./Home/Detail"
import React from 'react';
import Home from './Home';
import Search from './Search';
import Booking from './Booking';
import Profile from './Profile';
import Public from './Public';
import MyArticle from './Profile/MyArticle';
import PublicArticle from './Profile/PublicArticle';
import UpdatePassword from './Profile/UpdatePassword';
import UpdateProfile from './Profile/UpdateProfile';
=======
import React from "react";
import Home from "./Home";
import Search from "./Search";
import Booking from "./Booking";
import Profile from "./Profile";
import UpdateProfile from "./Profile/UpdateProfile";
import Public from "./Public";
import Greeting from "./Greeting";
import Detail from "./Home/Detail";

>>>>>>> MarcusLu
export const HomeScreen = () => {
  return <Home />;
};

export const SearchScreen = () => {
  return <Search />;
};

export const BookingScreen = () => {
  return <Booking />;
};

export const ProfileScreen = () => {
  return <Profile />;
};

export const PublicScreen = () => {
<<<<<<< HEAD
  return <Public />
}

export const GreetingScreen = () => {
  return <Greeting />
}

export const DetailScreen = () => {
  return <Detail />
}

export const ArticleScreen = () => {
  return <MyArticle />;
};
export const PublicArticleScreen = () => {
  return <PublicArticle />;
};
export const UpdatePasswordScreen = () => {
  return <UpdatePassword />;
};
=======
  return <Public />;
};

export const GreetingScreen = () => {
  return <Greeting />;
};

export const DetailScreen = () => {
  return <Detail />;
};

>>>>>>> MarcusLu
export const UpdateProfileScreen = () => {
  return <UpdateProfile />;
};
