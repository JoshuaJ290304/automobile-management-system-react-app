import { useEffect, useState } from "react";
import axios from "axios";

const ViewCars = () => {

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {

        try {

            const response = await axios.get(
                "https://host-demo-app.onrender.com/api/cars"
            );

            setCars(response.data);

        } catch (err) {

            setError("Unable to fetch cars.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">

                    <h3 className="text-center">
                        View Cars
                    </h3>

                </div>

                <div className="card-body">

                    {loading &&

                        <div className="text-center">

                            <div className="spinner-border text-primary"></div>

                            <p className="mt-2">
                                Loading Cars...
                            </p>

                        </div>

                    }

                    {error &&

                        <div className="alert alert-danger">

                            {error}

                        </div>

                    }

                    {!loading && !error &&

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover">

                                <thead className="table-dark">

                                    <tr>

                                        <th>#</th>
                                        <th>Registration</th>
                                        <th>Brand</th>
                                        <th>Model</th>
                                        <th>Vehicle Type</th>
                                        <th>Fuel</th>
                                        <th>Transmission</th>
                                        <th>Seats</th>
                                        <th>Rent/Day</th>
                                        <th>City</th>
                                        <th>Status</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {cars.length > 0 ? (

                                        cars.map((car, index) => (

                                            <tr key={car.id || index}>

                                                <td>{index + 1}</td>
                                                <td>{car.registration_number}</td>
                                                <td>{car.brand}</td>
                                                <td>{car.model}</td>
                                                <td>{car.vehicle_type}</td>
                                                <td>{car.fuel_type}</td>
                                                <td>{car.transmission}</td>
                                                <td>{car.seating_capacity}</td>
                                                <td>₹ {car.rent_per_day}</td>
                                                <td>{car.city}</td>
                                                <td>{car.availability_status}</td>

                                            </tr>

                                        ))

                                    ) : (

                                        <tr>

                                            <td
                                                colSpan="11"
                                                className="text-center text-danger"
                                            >

                                                No Cars Available

                                            </td>

                                        </tr>

                                    )}

                                </tbody>

                            </table>

                        </div>

                    }

                </div>

            </div>

        </div>

    );

};

export default ViewCars;