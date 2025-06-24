import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../services/index/users';
import { useMutation } from '@tanstack/react-query';
import { userActions } from '../../store/reducers/userReducer';
import { useForm } from 'react-hook-form';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.user);
  
    const { mutate, isLoading } = useMutation({
      mutationFn: ({ email, password }) => {
        return login({ email, password });
      },
      onSuccess: (data) => {
        dispatch(userActions.setUserInfo(data));
        localStorage.setItem("account", JSON.stringify(data));
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });
  
    useEffect(() => {
      if (userState.userInfo) {
        navigate("/");
      }
    }, [navigate, userState.userInfo]);
  
    const {
      register,
      handleSubmit,
      formState: { errors, isValid },
    } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
      mode: "onChange",
    });
  
    const submitHandler = (data) => {
      const { email, password } = data;
      mutate({ email, password });
    };
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl lg:max-w-5xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Log in
                    </h1>
                    {/* <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Don't have an account? <Link className='text-[#4169E1]' to={"/signup"}>Create an account</Link>
                    </p> */}
                </div>

                <div className="mt-12 w-11/12 md:w-6/12 mx-auto">

                    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700 shadow-md">
                        <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Fill in the form
                        </h2>

                        <form onSubmit={handleSubmit(submitHandler)}>
                            <div className="grid gap-4">


                                <div>
                                    <label  className="sr-only">Email</label>
                                    <input 
                                     type="email"
                                     id="email"
                                     {...register("email", {
                                       pattern: {
                                         value:
                                           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                         message: "Enter a valid email",
                                       },
                                       required: {
                                         value: true,
                                         message: "Email is required",
                                       },
                                     })}
                                    
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Email" />
                                </div>
                                {errors.email?.message && (
                                        <p className="text-red-500 text-xs mt-1">
                                          {errors.email?.message}
                                        </p>
                                      )}
                                <div>
                                    <label  className="sr-only">Password</label>
                                    <input 
                                      type="password"
                                      id="password"
                                      {...register("password", {
                                        required: {
                                          value: true,
                                          message: "Password is required",
                                        },
                                        minLength: {
                                          value: 6,
                                          message: "Password length must be at least 6 characters",
                                        },
                                      })}
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Password" />
                                </div>
                                {errors.password?.message && (
                                    <p className="text-red-500 text-xs mt-1">
                                    {errors.password?.message}
                                    </p>
                                )}
                            </div>
                            <div className="mt-4 grid">
                                <button  type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Login </button>
                            </div>


                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;