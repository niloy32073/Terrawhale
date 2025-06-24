
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../services/index/users.js";
import { userActions } from "../../store/reducers/userReducer.js";

const Signup = () => {

    const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

// Define the mutation function using react-query's useMutation
   const { mutate, isLoading } = useMutation({
    mutationFn: ({ name, email, password }) => {
      return signup({ name, email, password });        // Use the signup service function to register the user
    },
    onSuccess: (data) => {
      toast.success("Register Successfully");
      dispatch(userActions.setUserInfo(data));
      localStorage.setItem("account", JSON.stringify(data));
     },
    onError: (error) => {
     toast.error(error.message);
      console.log(error);
   },
  });

  // Redirect to the home page if the user is already logged in
  useEffect(() => {
    if (userState.userInfo) {
     navigate("/"); 
    }
   }, [navigate, userState.userInfo]);

  // Use react-hook-form for form management
 const {
   register,
     handleSubmit,
     formState: { errors, isValid },
    watch,
  } = useForm({
     defaultValues: {
       name: "",
       email: "",
       password: "",
       confirmPassword: "",
    },
     mode: "onChange",
   });

 // Handle form submission
   const submitHandler = (data) => {
     const { name, email, password } = data;
     mutate({ name, email, password });
   };

    const password = watch("password");  // Watch the password field for confirming password equality


    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl lg:max-w-5xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                        Sign up
                    </h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Already have an account? <Link className='text-[#4169E1]' to={"/login"}>Login</Link>
                    </p>
                </div>

                <div className="mt-12 w-11/12 md:w-6/12 mx-auto shadow-md rounded-xl">

                    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
                        <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
                            Fill in the form
                        </h2>

                        <form onSubmit={handleSubmit(submitHandler)}>
                            <div className="grid gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    {/* first name */}
                                    <div>
                                        <label htmlFor="hs-firstname-contacts-1" className="sr-only">Name</label>
                                        <input type="text"
                                            id="name"
                                            {...register("name", {
                                                minLength: {
                                                    value: 1,
                                                    message: "Name length must be at least 1 character",
                                                },
                                                required: {
                                                    value: true,
                                                    message: "Name is required",
                                                },
                                            })}
                                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Name" />
                                        {errors.name?.message && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.name?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
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
                                        })} autoComplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Email" />
                                    {errors.email?.message && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.email?.message}
                                        </p>
                                    )}
                                </div>

                                {/* confirm password */}
                                <div>
                                    <label htmlFor="hs-phone-number-1" className="sr-only">Password</label>
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
                                        })} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Password" />
                                    {errors.password?.message && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.password?.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="hs-phone-number-1" className="sr-only">Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        {...register("confirmPassword", {
                                          required: {
                                            value: true,
                                            message: "Confirm password is required",
                                          },
                                          validate: (value) => {
                                            if (value !== password) {
                                              return "Passwords do not match";
                                            }
                                          },
                                        })} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-200 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Password" />
                                    {errors.password?.message && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.password?.message}
                                        </p>
                                    )}
                                </div>

                            </div>
                            <div className="mt-4 grid">
                                {/* <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign up </button> */}
                                <button
                                    type="submit"
                                    disabled={!isValid || isLoading}
                                    className="bg-[#1eb2a6] text-white font-bold text-lg py-2 px-8 w-full rounded-lg mb-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    Register
                                </button>
                            </div>


                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;