"use client";

import { setLoading } from '@/redux/features/loadingSlice';
import { setProduct } from '@/redux/features/productSlice';
import { useAppDispatch } from '@/redux/hooks';
import axios from 'axios'; 
import { error } from 'console';
import React, { useEffect, useState } from 'react';

export interface IProduct {
  _id: string;
  imgsrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string; 
}

const Dashboard = () => {
  const [products, setProducts] = useState<IProduct[]>([]); 
  const [openPopup, setOpenPopup] = useState(false); 
  const [updateTable, setUpdateTable] = useState(false); 
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    axios
    .get("/api/get_products")
    .then((res) => setProducts(res.data))
    .catch(err => console.log(err)
    ).finally(() => dispatch(setLoading(false)));

  }, [updateTable]);

  return <div>Dashboard</div>;
};

export default Dashboard;