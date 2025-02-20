import React, { useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    const [lostModal, setLostModal] = useState(false);
    const [foundModal, setFoundModal] = useState(false);

    const showLostForm = () => setLostModal(true);
    const showFoundForm = () => setFoundModal(true);

    const closeModal = () => {
        setLostModal(false);
        setFoundModal(false);
    };

    const handleLostSubmit = (e) => {
        e.preventDefault();
        alert("Lost item report submitted successfully!");
        closeModal();
    };

    const handleFoundSubmit = (e) => {
        e.preventDefault();
        alert("Found item report submitted successfully!");
        closeModal();
    };

    return (
        <div>
            {/* Main Page */}
            <div className="main-container text-center">
                <h1 className="mb-5 text-white">Report Lost or Found Item</h1>
                <div className="d-flex gap-4 justify-content-center">
                    <button className="action-btn btn-lost" onClick={showLostForm}>
                        Lost Item
                    </button>
                    <button className="action-btn btn-found" onClick={showFoundForm}>
                        Found Item
                    </button>
                </div>
            </div>

            {/* Lost Item Modal */}
            {lostModal && (
                <>
                    <div className="modal-backdrop show" onClick={closeModal}></div>
                    <div className="modal show d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Report Lost Item</h5>
                                    <button type="button" className="btn-close" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleLostSubmit}>
                                        <div className="mb-3">
                                            <label>Category</label>
                                            <select className="form-select" required>
                                                <option value="">Select category</option>
                                                <option value="wallet">Wallet</option>
                                                <option value="keys">Keys</option>
                                                <option value="jewelry">Jewelry</option>
                                                <option value="electronics">Electronics</option>
                                                <option value="clothing">Clothing</option>
                                                <option value="bag">Bag/Backpack</option>
                                                <option value="documents">Documents</option>
                                                <option value="books">Books</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label>Description</label>
                                            <textarea className="form-control" rows="3" required></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label>Upload Images</label>
                                            <input type="file" className="form-control" accept="image/*" multiple />
                                        </div>
                                        <div className="mb-3">
                                            <label>Location</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <label>Date Lost</label>
                                            <input type="date" className="form-control" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Found Item Modal */}
            {foundModal && (
                <>
                    <div className="modal-backdrop show" onClick={closeModal}></div>
                    <div className="modal show d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Report Found Item</h5>
                                    <button type="button" className="btn-close" onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleFoundSubmit}>
                                        <div className="mb-3">
                                            <label>Category</label>
                                            <select className="form-select" required>
                                                <option value="">Select category</option>
                                                <option value="wallet">Wallet</option>
                                                <option value="keys">Keys</option>
                                                <option value="jewelry">Jewelry</option>
                                                <option value="electronics">Electronics</option>
                                                <option value="clothing">Clothing</option>
                                                <option value="bag">Bag/Backpack</option>
                                                <option value="documents">Documents</option>
                                                <option value="books">Books</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label>Upload Images</label>
                                            <input type="file" className="form-control" accept="image/*" multiple required />
                                        </div>
                                        <div className="mb-3">
                                            <label>Location Found</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                        <div className="mb-3">
                                            <label>Date Found</label>
                                            <input type="date" className="form-control" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;