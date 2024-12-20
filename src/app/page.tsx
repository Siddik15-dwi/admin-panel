"use client"
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [showCart, setShowCart] = useState(false)



  return <main>
      <Navbar setShowCart={setShowCart}/>
    </main>
;}

export default Home;