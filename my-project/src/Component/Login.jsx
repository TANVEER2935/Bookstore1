import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    console.log(data)
    const info={
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4000/login",info).
    then((res)=>{
      if(res.data){
        toast.success('Successfully created!');
      }
      console.log(res.data);
    }).catch((err)=>{
      toast.error('This is an error!');
      console.log(err)
    })
    navigate('/')
    // Handle login logic here
  }

  return (
    <>
      {/* Button to open the modal */}
      <button 
        className="btn bg-black text-white" 
        onClick={() => document.getElementById('my_modal_3').showModal()}
      >
        Login
      </button>

      {/* Modal dialog */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          {/* Form inside the modal */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* Close button for the modal */}
            <button 
              type="button" 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById('my_modal_3').close()}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Hello!</h3>

            {/* Email input field */}
            <label className="input input-bordered flex items-center gap-2 mb-10 mt-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input 
                type="text" 
                className="grow" 
                placeholder="Email" 
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
            </label>

            {/* Password input field */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path 
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" 
                />
              </svg>
              <input 
                type="password" 
                className="grow" 
                {...register("password", { required: true })} 
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
            </label>

            <div className="mt-5">
              {/* Submit button */}
              <button 
                type="submit" 
                className="btn btn-secondary"
              >
              Login
                
              </button>
              <span className="ml-5">
                Not registered? <Link to="/signup" className="text-blue-500">sign up</Link>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}
