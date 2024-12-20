import { useAppSelector } from '@/redux/hooks';
import React, { Dispatch, SetStateAction } from 'react'

interface PropsType{
    setShowCart: Dispatch<SetStateAction<boolean>>
}
const Navbar = ({setShowCart}:PropsType) => {

    const cartCount = useAppSelector((state) => state.cartReducer.length)

  return <div className="pt-4 bg-white top-0 sticky"></div>
};

export default Navbar