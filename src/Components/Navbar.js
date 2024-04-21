import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from '../Login';
import Register from '../Register';
function Navbar({ onFormSubmit }) {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div  className="w-100 ">
          <ul
            className="nav bg-dark text-info justify-content-center w-100 "
            style={{ height: "100px" }}
          >
            <form action="" onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" name="" id="" {...register("in")} className="search1" placeholder="search" />
      </form>
           
        </ul>
    </div>
  );
}

export default Navbar;
