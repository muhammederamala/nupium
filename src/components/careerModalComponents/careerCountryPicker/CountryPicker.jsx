import React, { useState } from "react";
import { Country, State, City } from "country-state-city";
import { Container, Row, Col } from "react-bootstrap";

const LocationForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setSelectedState("");
    setSelectedCity("");
    const countryStates = State.getStatesOfCountry(countryCode);
    setStates(countryStates);
  };

  const handleStateChange = (e) => {
    const stateCode = e.target.value;
    setSelectedState(stateCode);
    setSelectedCity("");
    const stateCities = City.getCitiesOfState(
      selectedCountry,
      stateCode.toUpperCase()
    );
    setCities(stateCities);
  };

  return (
    <Container>
      <Row>
        <Col md={4} className="d-flex align-items-center">
          <p className="m-0">Country Applying for:</p>
        </Col>
        <Col md={6}>
          <select
            className="form-control mt-2"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {Country.getAllCountries().map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col md={4} className="d-flex align-items-center">
          <p className="m-0">Province:</p>
        </Col>
        <Col md={6}>
          <select
            className="form-control mt-2"
            value={selectedState}
            onChange={handleStateChange}
          >
            <option value="">Select State/Province</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="d-flex align-items-center">
          <p className="m-0">City:</p>
        </Col>
        <Col md={6}>
          <select
            className="form-control mt-2"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </Col>
      </Row>
    </Container>
  );
};

export default LocationForm;
