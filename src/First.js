import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './First.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Link } from 'react-router-dom';

function First() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');
  const [newList, setNewList] = useState([]);
  const {
    
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const openProduct = (product) => {
    navigate("/Product", { state: product });
  };

  const onFormSubmit = (data) => {
    setSearch(data.sr);
    setNewList(list.filter((prod) => prod.title.toLowerCase().includes(data.sr.toLowerCase())));
  };

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='totalpage'>
      {/* <form action="" onSubmit={handleSubmit(onFormSubmit)}>
            <input type="text" name="" id=""  {...register("in")} className='search1' placeholder='search by product title'/>
        </form> */}
      <Navbar onFormSubmit={onFormSubmit} />
      <div style={{ paddingTop: '100px' }}>
        {search === '' ? (
          <div className='everyrow'>
            {list.map((product) => (
              <div key={product.id} className='eachprod'>
                <img className='prodimg' src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>${product.price}</p>
                <li className='nav-link'>
                  
                    <button onClick={()=>openProduct(product)} className='btn btn-success'>details</button>
                </li>
              </div>
            ))}
          </div>
        ) : (
          <div className='everyrow'>
            {newList.map((product) => (
              <div key={product.id} className='eachprod'>
                <img className='prodimg' src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>${product.price}</p>
                <button onClick={()=>openProduct(product)} className='btn btn-success'>details</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default First;
