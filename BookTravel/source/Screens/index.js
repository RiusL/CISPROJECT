import React from "react";
import Home from "./Home"
import Search from "./Search"
import Booking from "./Booking"
import Profile from "./Profile"
import Public from "./Public"
import Greeting from "./Greeting"
import Detail from "./Home/Detail"

export const HomeScreen = () => {
    return <Home />
}

export const SearchScreen = () => {
    return <Search />
}

export const BookingScreen = () => {
    return <Booking />
}

export const ProfileScreen = () => {
    return <Profile />
}

export const PublicScreen = () => {
    return <Public />
}

export const GreetingScreen = () => {
    return <Greeting />
}

export const DetailScreen=()=>{
    return <Detail />
}