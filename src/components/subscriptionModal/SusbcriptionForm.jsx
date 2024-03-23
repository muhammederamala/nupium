import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import Category from "./Category";

function SusbcriptionForm() {

    const [timing, setTiming] = useState()

    const solutionReduxState = useSelector(
        (state) => state.subscriptionForm.solution
    );

    const countryRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const firstNameRef = useRef(null);
    const middleNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const contactRef = useRef(null);
    const addressRef = useRef(null);
    const propertyNoRef = useRef(null);
    const streetNameRef = useRef(null);
    const cityRef = useRef(null);
    const stateRef = useRef(null);
    const landmarkRef = useRef(null);
    const zipCodeRef = useRef(null);
    const businessNameRef = useRef(null);
    const categoryTypeRef = useRef(null);
    const activationDateRef = useRef(null);
    const timingsRef = useRef(null);
    const solutionRef = useRef(null);
    const referralCodeRef = useRef(null);

    const countries = [
        "India",
        "Singapore",
        "Thailand",
        "Australia",
        "New Zealand",
        "Hong Kong",
        "UAE",
        "United Kingdom",
        "Ireland",
        "Netherlands",
        "Italy",
        "Hungary",
        "Switzerland",
        "Germany",
        "Poland",
        "Sweden",
        "Denmark",
        "Belgium",
        "France",
        "Spain",
        "Portugal",
        "Canada",
        "United States of America",
    ];

    const categoryOptions = [
        "Housing Society",
        "Corporate Office",
        "Retail Center",
        "Warehouse",
        "Factory",
        "Shopping Mall",
        "Hotels",
        "Hospital",
        "Resort",
        "Industry",
        "Government",
        "University",
    ];

    const timingClickHandler = (e) => {
        setTiming(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            country: countryRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            firstName: firstNameRef.current.value,
            middleName: middleNameRef.current.value,
            lastName: lastNameRef.current.value,
            contact: contactRef.current.value,
            address: addressRef.current.value,
            propertyNo: propertyNoRef.current.value,
            streetName: streetNameRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value,
            landmark: landmarkRef.current.value,
            zipCode: zipCodeRef.current.value,
            businessName: businessNameRef.current.value,
            categoryType: categoryTypeRef.current.value,
            activationDate: activationDateRef.current.value,
            solution: solutionReduxState,
            timings: timing,
            referralCode: referralCodeRef.current.value,
        };
        console.log(formData);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="country" className="form-label">
                        Select Country
                    </label>
                    <select className="form-select" id="country" ref={countryRef}>
                        <option value="">Select Country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                                {country}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Set Your Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        ref={passwordRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email ID
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        ref={emailRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        ref={firstNameRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="middleName" className="form-label">
                        Middle Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="middleName"
                        ref={middleNameRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        ref={lastNameRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">
                        Contact
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="contact"
                        ref={contactRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        ref={addressRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="propertyNo" className="form-label">
                        Property No
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="propertyNo"
                        ref={propertyNoRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="streetName" className="form-label">
                        Street Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="streetName"
                        ref={streetNameRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="city" className="form-label">
                        City
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        ref={cityRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="state" className="form-label">
                        State
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="state"
                        ref={stateRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="landmark" className="form-label">
                        Landmark
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="landmark"
                        ref={landmarkRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="zipCode" className="form-label">
                        Zip Code
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="zipCode"
                        ref={zipCodeRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="businessName" className="form-label">
                        Business Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="businessName"
                        ref={businessNameRef}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="categoryType" className="form-label">
                        Category Type
                    </label>
                    <select
                        className="form-select"
                        id="categoryType"
                        ref={categoryTypeRef}
                    >
                        <option value="">Select Category Type</option>
                        {categoryOptions.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="activationDate" className="form-label">
                        Activation Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="activationDate"
                        ref={activationDateRef}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Timings Schedule:</label>
                    <div>
                        <input
                            onClick={timingClickHandler}
                            className="form-check-input"
                            type="radio"
                            id="09-06"
                            value="09:00 am to 6:00 pm"
                            name="timings"
                            ref={timingsRef}
                        />
                        <label className="form-check-label" htmlFor="09-06">
                            09:00 am to 6:00 pm
                        </label>
                    </div>
                    <div>
                        <input
                            onClick={timingClickHandler}
                            className="form-check-input"
                            type="radio"
                            id="06-02"
                            value="06:00 pm to 02:00 am"
                            name="timings"
                            ref={timingsRef}
                        />
                        <label className="form-check-label" htmlFor="06-02">
                            06:00 pm to 02:00 am
                        </label>
                    </div>
                    <div>
                        <input
                            onClick={timingClickHandler}
                            className="form-check-input"
                            type="radio"
                            id="02-10"
                            value="02:00 am to 10:00 am"
                            name="timings"
                            ref={timingsRef}
                        />
                        <label className="form-check-label" htmlFor="02-10">
                            02:00 am to 10:00 am
                        </label>
                    </div>
                </div>

                <Category ref={solutionRef} />
                <div className="mb-3">
                    <label htmlFor="referralcode" className="form-label">
                        Referral code
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="referralcode"
                        ref={referralCodeRef}
                    />
                </div>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
}

export default SusbcriptionForm
