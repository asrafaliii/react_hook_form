import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, reset,  formState: { errors }, handleSubmit } = useForm(); // react form hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  
    let signInError;
  
    if(loading || gLoading){
      return  <div className=" h-screen flex items-center justify-center ">
                <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
              </div>
    }
  
    if(error || gError){
      signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
  
  
    if(user || gUser) {
      console.log(user || gUser);
    }
  
    const onSubmit = data => {
      console.log(data);
      reset();
      createUserWithEmailAndPassword(data.email, data.password)
    }
  
    return (
        <div className=" h-screen flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
                <input 
                type="name" 
                placeholder="Your Name" 
                className="input input-bordered w-full max-w-xs" 
                {...register("name", {
                  required: {
                      value: true,
                      message: 'Name is Required'
                  }
              })}
                />
             
              <label className="label">
                  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}        
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
                <input 
                type="email" 
                placeholder="Your Email" 
                className="input input-bordered w-full max-w-xs" 
                {...register("email", {
                  required: {
                      value: true,
                      message: 'Email is Required'
                  },
                  pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email'
                  }
              })}
                />
             
              <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}        
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
                <input 
                type="password" 
                placeholder="Password" 
                className="input input-bordered w-full max-w-xs" 
                {...register("password", {
                  required:{
                    value: true,
                    message: "Password is Required"

                  },
                  minLength: {
                    value: 6,
                    message: 'Must be 6 characters or longer'
                  } 
                  
                })}
                />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            {signInError}
            <input className='btn w-full max-w-xs' type="submit" value="SignUp" />
      </form>
      <p><small>Already have an account? <Link to="/login" className='text-primary'>Please login</Link></small></p>
      <div className="divider">OR</div>
      <button
      onClick={() => signInWithGoogle()} 
      className="btn btn-outline">continue with google
      </button>
  </div>
</div>
    </div>
    );
};

export default SignUp;