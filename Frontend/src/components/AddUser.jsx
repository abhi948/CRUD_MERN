import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';


function AddUser() {

    const users = {
        name:"",
        email:"",
        address:""
    }

    const nav = useNavigate();

    const [user, setUser] = useState(users);

    // Handle form changes
    const inputHandler = (e) => {
        const { name, value } = e.target;
        // console.log(name,value);
        setUser({
            ...user,
            [name]: value
        });
    };

    // Handle form submit
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Add logic to handle the form submission, e.g., send data to API
        await axios.post("http://localhost:3000/api/user",user)
        .then((response)=>{
            // console.log('User added:', user);
            toast.success(response.data.message, {position:"top-right"});
            nav("/");
        }).catch((error)=>{
            console.log(error);
            toast.error("User Already Exist", {position:"top-right"});
        });        
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-slate-600 p-6 rounded-lg shadow-lg w-full max-w-md">
                <a href='/' className='btn btn-primary p-0 pl-5 pr-5'>Back</a>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input input-bordered w-full mb-4 p-2"
                        placeholder="Enter Your Name"
                        value={user.name}
                        onChange={inputHandler}
                    />

                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input input-bordered w-full mb-4 p-2"
                        placeholder="Enter your Email"
                        value={user.email}
                        onChange={inputHandler}
                    />

                    <label htmlFor="address" className="block text-sm font-medium text-white mb-2">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="input input-bordered w-full mb-4 p-2"
                        placeholder="Enter Your Address"
                        value={user.address}
                        onChange={inputHandler}
                    />

                    <button type="submit" className="btn btn-primary w-full py-2 mt-4 text-white">
                        Add User
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddUser;
