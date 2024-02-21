import React, { useState } from 'react'


function NewProduct() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        image: "",
        price: "",
        category: "",
        stock: 0,
        isPopular: false,
        isNew: false
    })

    const handleChange = (e) => {
        const { name, value,type, checked } = e.target;
        if (type === "radio") {
            setFormData((prevValue) => ({
                ...prevValue,
                [name]: value === "true"
            }));
        } else {
            setFormData((prevValue) => ({
                ...prevValue,
                [name]: type === "checkbox" ? checked : value
            }));
        }
    };


    const handleSubmit = (e)=>{
        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleSubmit} method='POST'>
                <div className="space-y-12">

                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">Add New Product</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Product Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        rows={2}
                                        cols={2}
                                        name="description"
                                        id="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                                    Image Link
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="image"
                                        name="image"
                                        type="text"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="price"
                                        name="price"
                                        type="text"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                    Category
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>Clothing</option>
                                        <option>Games</option>
                                        <option>Adult</option>
                                        <option>Electronics</option>
                                        <option>Books</option>
                                        <option>Home & Kitchen</option>
                                        <option>Beauty & Personal Care</option>
                                        <option>Health & Wellness</option>
                                        <option>Toys & Hobbies</option>
                                        <option>Grocery & Gourmet Foods</option>
                                        <option>Pet Supplies</option>
                                        <option>Office Supplies</option>
                                        <option>Jewelry & Watches</option>
                                        <option>Automotive</option>
                                        <option>Outdoor & Garden</option>
                                        <option>Crafts & DIY</option>
                                        <option>Specialty Shops</option>
                                        <option>Sports & Outdoors</option>
                                        <option>Baby & Kids</option>
                                        <option>Party & Celebration</option>
                                        <option>Travel & Luggage</option>
                                        <option>Music & Instruments</option>
                                        <option>Art & Collectibles</option>
                                        <option>Technology & Gadgets</option>
                                        <option>Education & Learning</option>
                                        <option>Food & Beverage</option>
                                        <option>Business & Industrial</option>
                                        <option>Financial Services</option>
                                        <option>Home Improvement</option>
                                        <option>Real Estate</option>
                                        <option>Services</option>
                                        <option>Entertainment</option>
                                        <option>Healthcare</option>
                                        <option>Legal</option>
                                        <option>Transportation</option>
                                        <option>Utilities</option>
                                        <option>Other</option>

                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="stock" className="block text-sm font-medium leading-6 text-gray-900">
                                    No. Of Items in Stock ?
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="stock"
                                        id="stock"
                                        value={formData.stock}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="isPopular" className="block text-sm font-medium leading-6 text-gray-900">
                                    isPopular
                                </label>
                                <div className="mt-2 flex items-center space-x-4">
                                    <input
                                        type="radio"
                                        name="isPopular"
                                        id="isPopularTrue"
                                        onChange={handleChange}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        value="true"
                                    />
                                    <label htmlFor="isPopularTrue" className="ml-2 block text-sm leading-5 text-gray-900">
                                        True
                                    </label>
                                    <input
                                        type="radio"
                                        name="isPopular"
                                        id="isPopularFalse"
                                        onChange={handleChange}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        value="false"
                                    />
                                    <label htmlFor="isPopularFalse" className="ml-2 block text-sm leading-5 text-gray-900">
                                        False
                                    </label>
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="isNew" className="block text-sm font-medium leading-6 text-gray-900">
                                    isNew
                                </label>
                                <div className="mt-2 flex items-center space-x-4">
                                    <input
                                        type="radio"
                                        name="isNew"
                                        id="isNewTrue"
                                        onChange={handleChange}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        value="true"
                                    />
                                    <label htmlFor="isNewTrue" className="ml-2 block text-sm leading-5 text-gray-900">
                                        True
                                    </label>
                                    <input
                                        type="radio"
                                        name="isNew"
                                        id="isNewFalse"
                                        onChange={handleChange}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        value="false"
                                    />
                                    <label htmlFor="isNewFalse" className="ml-2 block text-sm leading-5 text-gray-900">
                                        False
                                    </label>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewProduct
