import { useState } from "react";

const AddCar = () => {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    fuelType: "",
    transmission: "",
    price: "",
    registrationNumber: "",
  });

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(car);

    alert("API integration will be added in Version 4");
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">

              <h3 className="text-center">
                Add New Car
              </h3>

            </div>

            <div className="card-body">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">
                    Brand
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="brand"
                    value={car.brand}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Model
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="model"
                    value={car.model}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Year
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="year"
                    value={car.year}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Color
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="color"
                    value={car.color}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Fuel Type
                  </label>

                  <select
                    className="form-select"
                    name="fuelType"
                    value={car.fuelType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Fuel Type</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Electric</option>
                    <option>Hybrid</option>
                    <option>CNG</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Transmission
                  </label>

                  <select
                    className="form-select"
                    name="transmission"
                    value={car.transmission}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Transmission</option>
                    <option>Manual</option>
                    <option>Automatic</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Price
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={car.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Registration Number
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="registrationNumber"
                    value={car.registrationNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="d-grid">

                  <button
                    type="submit"
                    className="btn btn-success"
                  >
                    Add Car
                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AddCar;