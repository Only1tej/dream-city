import React from "react";

export default function Confirmation({ visible, onClose, listing, id, listings, setListings }) {
    function removeListing(id) {
        const newListings = listings.filter((listing) => listing.id !== id);
        setListings(newListings);
        handleOnClose()
    }

    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose()
    }

    if (!visible) return null

    return (
        <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-2 rounded w-72">
                <h1 className="font-semibold text-center text-xl text-gray-700">
                    Remove Listing
                </h1>
                <p className="text-center text-gray-700 mb-5">Do you want to remove this listing?</p>

                <div className="flex flex-col space-y-2">
                    <button type="button" className='border-solid rounded-lg bg-[#9deef1] text-[#5a371a] flex justify-between py-2 px-3 items-center ' onClick={() => removeListing(listing.id)}>
                        Yes
                    </button>
                    <button type="button" className='border-solid rounded-lg bg-[#9deef1] text-[#5a371a] flex justify-between py-2 px-3 items-center' onClick={onClose}>No</button>
                </div>
            </div>
        </div>
    );
}