import React from 'react';

const jewelImages = [
    'jewel1.jpg', // Replace with actual image URLs or paths
    'jewel2.jpg',
    'jewel3.jpg'
];

const LandingPage = () => {
    return (
        <div>
            <section className="text-center p-5">
                <h2>Welcome to AuroraJewels</h2>
                <p>Your one-stop shop for exquisite jewelry</p>
            </section>
            <section className="container">
                <div className="row">
                    {jewelImages.map((image, index) => (
                        <div className="col-md-4" key={index}>
                            <img src={image} alt={`Jewel ${index + 1}`} className="img-fluid" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
