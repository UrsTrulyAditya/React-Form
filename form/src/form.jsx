import React, { useState } from 'react'
import { useFormik } from 'formik'
import Table from './table'; 
import axios from 'axios';
const Form = () => {
    const [Data, setData] = useState([]);

    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            sex: "",
            gvtIdType: "",
            gvtId: "",
            mobile: "",
            guardian: "",
            email: "",
            emergency: "",
            address: "",
            state: "",
            city: "",
            country: "",
            pincode: "",
            occupation: "",
            religion: "",
            status: "",
            blood: ""
        },
        onSubmit: (values,{resetForm}) => {

            axios.post("https://json-server5.herokuapp.com/formData", values).then(() => console.log("Posted"))
            alert("submitted");
            getData();
            resetForm({values:''})
             
 
        }
    });
    const getData = () => {
        axios.get("https://json-server5.herokuapp.com/formData").then(({ data }) => {
            setData(data)
        })
    }



    return (
        <>

            <form className="container" autoComplete='off' onSubmit={formik.handleSubmit}  >
                <div className='d-flex flex-column justify-content-start align-items-start'>

                    <h3>Personal Details</h3>

                    <div className='d-flex align-items-center ms-3'>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto ">
                                <label htmlFor="name" className="col-form-label">
                                    Name <span>*</span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <input onChange={formik.handleChange}
                                    type="text" value={formik.values.name}
                                    id="name" placeholder='Enter Name'
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>

                        </div>

                        <div className="row g-3 align-items-center  ms-3">
                            <div className="col-auto">
                                <label htmlFor="age" className="col-form-label">
                                    Date of birth or Age <span>*</span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <input onChange={formik.handleChange}
                                    type="age" value={formik.values.age}
                                    id="age" placeholder='DD/MM/YYYY or Age'
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>

                        </div>
                        <div className="row g-3 align-items-center ms-3">
                            <div className="col-auto">
                                <label htmlFor="sex" className="col-form-label">
                                    Sex<span>*</span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <select id='sex' onChange={formik.handleChange} value={formik.values.sex}
                                    className="form-select form-select-sm"
                                    aria-label=".form-select-sm example"
                                >
                                    <option >Enter Sex</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>

                                </select>

                            </div>

                        </div>


                    </div>
                    <div className='d-flex align-items-center ms-3'>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="mobile" className="col-form-label">
                                    Mobile
                                </label>
                            </div>
                            <div className="col-auto">
                                <input onChange={formik.handleChange}
                                    type="Number"
                                    id="mobile" value={formik.values.mobile}
                                    placeholder="Enter Mobile"
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>

                        </div>

                        <div className="row g-3 align-items-center ms-3">
                            <div className="col-auto">
                                <label htmlFor="gvtId" className="col-form-label">
                                    Govt Issued ID
                                </label>
                            </div>
                            <div className="col-auto">
                                <select id='gvtIdType' onChange={formik.handleChange} value={formik.values.gvtIdType}
                                    className="form-select form-select-sm"
                                    aria-label=".form-select-sm example"
                                >
                                    <option >ID Type</option>
                                    <option value="aadhar">Aadhar Card</option>
                                    <option value="pan">PAN Card</option>
                                    <option value="driving">Driving License</option>
                                </select>

                            </div>
                            <div className="col-auto">
                                <input
                                    type="text" onChange={formik.handleChange}
                                    id="gvtId" value={formik.values.gvtId}
                                    placeholder='Enter Govt ID'
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>

                        </div>



                    </div>
                    <h3>Contact Details</h3>
                    <div className='d-flex align-items-center ms-3'>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="guardian" className="col-form-label">
                                    Guardian Details
                                </label>
                            </div>
                            <div className="col-auto d-flex">

                                <input
                                    type="text" onChange={formik.handleChange}
                                    id="guardian" value={formik.values.guardian}
                                    placeholder='Enter Guardian Details'
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />

                            </div>


                        </div>

                        <div className="row g-3 align-items-center ms-3" >
                            <div className="col-auto">
                                <label htmlFor="email" className="col-form-label">
                                    Email
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="email" onChange={formik.handleChange}
                                    id="email" value={formik.values.email}
                                    className="form-control"
                                    placeholder='Enter Email'
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>

                        </div>
                        <div className="row g-3 align-items-center ms-3">
                            <div className="col-auto">
                                <label htmlFor="emergency" className="col-form-label">
                                    Emergency Contact Number
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="Number" value={formik.values.emergency}
                                    id="emergency" onChange={formik.handleChange}
                                    placeholder='Enter Emergency No'
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />

                            </div>

                        </div>


                    </div>
                    <h3>Address Details</h3>
                    <div className='d-flex align-items-center ms-3'>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="address" className="col-form-label">
                                    Address
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text" onChange={formik.handleChange}
                                    id="address" value={formik.values.address}
                                    placeholder='Enter Address'
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>

                        </div>

                        <div className="row g-3 align-items-center ms-3">
                            <div className="col-auto">
                                <label htmlFor="state" className="col-form-label">
                                    State
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text" onChange={formik.handleChange}
                                    id="state" value={formik.values.state}
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>

                        </div>
                        <div className="row g-3 align-items-center ms-3">
                            <div className="col-auto">
                                <label htmlFor="city" className="col-form-label">
                                    City
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text" onChange={formik.handleChange}
                                    id="city" value={formik.values.city}
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />

                            </div>

                        </div>


                    </div>
                    <div className='d-flex align-items-center ms-3'>


                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="country" className="col-form-label">
                                    Country
                                </label>
                            </div>
                            <div className="col-auto">
                                <input onChange={formik.handleChange}
                                    type="text"
                                    id="country" value={formik.values.country}
                                    placeholder='Enter Country'
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>

                        </div>
                        <div className="row g-3 align-items-center ms-3">
                            <div className="col-auto">
                                <label htmlFor="pincode" className="col-form-label">
                                    Pincode
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="number" onChange={formik.handleChange}
                                    id="pincode" value={formik.values.pincode}
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />

                            </div>

                        </div>


                    </div>
                    <h3>Other Details</h3>
                    <div className='d-flex align-items-center ms-3'>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto">
                                <label htmlFor="occupation" className="col-form-label">
                                    Occupation
                                </label>
                            </div>
                            <div className="col-auto">
                                <input
                                    type="text" onChange={formik.handleChange}
                                    id="occupation" value={formik.values.occupation}
                                    placeholder='Enter occupation'
                                    className="form-control"
                                    aria-describedby="passwordHelpInline"
                                />
                            </div>

                        </div>


                        <div className="row g-3 align-items-center ms-1">
                            <div className="col-auto">
                                <label htmlFor="religion" className="col-form-label">
                                    Religion
                                </label>
                            </div>
                            <div className="col-auto">
                                <select id='religion' onChange={formik.handleChange} value={formik.values.religion}
                                    className="form-select form-select-sm"
                                    aria-label=".form-select-sm example"
                                >
                                    <option >Enter Religion</option>
                                    <option value="hindu">Hindu</option>
                                    <option value="muslim">Muslim</option>
                                    <option value="christian">Christian</option>
                                </select>

                            </div>

                        </div>
                        <div className="row g-3 align-items-center ms-1">
                            <div className="col-auto">
                                <label htmlFor="status" className="col-form-label">
                                    Martial Status
                                </label>
                            </div>
                            <div className="col-auto">
                                <select id='status' onChange={formik.handleChange} value={formik.values.status}
                                    className="form-select form-select-sm"
                                    aria-label=".form-select-sm example"
                                >
                                    <option >Enter Martial Status</option>
                                    <option value="single">Single</option>
                                    <option value="married">Married</option>
                                    <option value="divorced">Divorced</option>
                                </select>

                            </div>

                        </div>
                        <div className="row g-3 align-items-center ms-1">
                            <div className="col-auto">
                                <label htmlFor="blood" className="col-form-label">
                                    Blood Group
                                </label>
                            </div>
                            <div className="col-auto">
                                <select id='blood' onChange={formik.handleChange} value={formik.values.blood}
                                    className="form-select form-select-sm"
                                    aria-label=".form-select-sm example"
                                >
                                    <option >Enter Blood Group</option>
                                    <option value="a+">A+</option>
                                    <option value="b+">B+</option>
                                    <option value="o+">O+</option>
                                </select>

                            </div>

                        </div>


                    </div>
                </div>
                <div className='d-flex justify-content-end mt-4 mb-1'>
                    <button className='btn btn-outline-danger redBtn'>Cancel</button>
                    <button type='submit' className='btn btn-success ms-4 greenBtn'>Submit</button>
                </div>
            </form>

            <Table data={Data} />
        </>
    )
}

export default Form