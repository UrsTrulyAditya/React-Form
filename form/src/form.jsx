import React from 'react'

const Form = () => {
    return (

        <form className="container" >
            <div className='d-flex flex-column justify-content-start align-items-start'>

                <h3>Personal Details</h3>

                <div className='d-flex align-items-center'>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto ">
                            <label htmlFor="name" className="col-form-label">
                                Name <span>*</span>
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
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
                            <input
                                type="age"
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
                            <select id='sex'
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                            >
                                <option selected="">Enter Sex</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                 
                            </select>

                        </div>

                    </div>


                </div>
                <div className='d-flex align-items-center'>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="mobile" className="col-form-label">
                                Mobile
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="Number"
                                id="mobile"
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
                            <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                            >
                                <option selected="">ID Type</option>
                                <option value="aadhar">Aadhar Card</option>
                                <option value="pan">PAN Card</option>
                                <option value="driving">Driving License</option>
                            </select>

                        </div>
                        <div className="col-auto">
                            <input
                                type="password"
                                id="gvtId"
                                placeholder='Enter Govt ID'
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                            />
                        </div>

                    </div>
                    {/* <div className="row g-3 align-items-center ms-3">
                         
                        <div className="col-auto">
                            <select
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                            >
                                <option selected="">ID Type</option>
                                <option value="aadhar">Aadhar Card</option>
                                <option value="pan">PAN Card</option>
                                <option value="driving">Driving License</option>
                            </select>

                        </div>

                    </div> */}


                </div>
                <h3>Contact Details</h3>
                <div className='d-flex align-items-center'>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="guardian" className="col-form-label">
                                Guardian Details
                            </label>
                        </div>
                        <div className="col-auto d-flex">
                            
                            <input
                                type="password"
                                id="guardian"
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
                                type="email"
                                id="email"
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
                                type="password"
                                id="emergency"
                                placeholder='Enter Emergency No'
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                            />

                        </div>

                    </div>


                </div>
                <h3>Address Details</h3>
                <div className='d-flex align-items-center'>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="address" className="col-form-label">
                                Address
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                id="address"
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
                                type="text"
                                id="state"
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
                                type="text"
                                id="city"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                            />

                        </div>

                    </div>


                </div>
                <div className='d-flex align-items-center'>
                     

                    <div className="row g-3 align-items-center ms-3">
                        <div className="col-auto">
                            <label htmlFor="country" className="col-form-label">
                                Country
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                id="country"
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
                                type="number"
                                id="pincode"
                                className="form-control"
                                aria-describedby="passwordHelpInline"
                            />

                        </div>

                    </div>


                </div>
                <h3>Other Details</h3>
                <div className='d-flex align-items-center'>
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <label htmlFor="occupation" className="col-form-label">
                                Occupation
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                id="occupation"
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
                            <select id='religion'
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                            >
                                <option selected="">Enter Religion</option>
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
                            <select id='status'
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                            >
                                <option selected="">Enter Martial Status</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="divorced">Divorced</option>
                            </select>

                        </div>

                    </div>
                    <div className="row g-3 align-items-center ms-1">
                        <div className="col-auto">
                            <label htmlFor="religion" className="col-form-label">
                                Blood Group
                            </label>
                        </div>
                        <div className="col-auto">
                            <select id='religion'
                                className="form-select form-select-sm"
                                aria-label=".form-select-sm example"
                            >
                                <option selected="">Enter Blood Group</option>
                                <option value="a+">A+</option>
                                <option value="b+">B+</option>
                                <option value="o+">O+</option>
                            </select>

                        </div>

                    </div>


                </div>
            </div>
            <div className='d-flex justify-content-end mt-4'>
                <button className='btn btn-outline-danger redBtn'>Cancel</button>
                <button className='btn btn-success ms-4 greenBtn'>Submit</button>
            </div>
        </form>
    )
}

export default Form