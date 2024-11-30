"use client";
import { useState } from "react";
import { occasionDetails } from "../data/occasionDetails"; // Importing the occasion details

export default function AddInvitee() {
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [inviteeName, setInviteeName] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle occasion selection
  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  // Handle invitee name input
  const handleInviteeChange = (event) => {
    setInviteeName(event.target.value);
  };

  // Handle the "Add Invitee" functionality
  const handleAddInvitee = async () => {
    if (selectedOccasion && inviteeName) {
      try {
        const res = await fetch("/api/saveInvitee", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ selectedOccasion, inviteeName }),
        });

        const data = await res.json();

        if (res.status === 200) {
          // If the invitee was successfully added
          const inviteUrl = `${
            window.location.origin
          }/invitation?id=${selectedOccasion}&name=${encodeURIComponent(
            inviteeName
          )}`;
          setGeneratedUrl(inviteUrl);
        } else {
          setErrorMessage(data.message);
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("An error occurred while adding the invitee.");
      }
    } else {
      setErrorMessage("Please select an occasion and provide an invitee name.");
    }
  };

  // Handle copy URL
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(generatedUrl).then(() => {
      alert("URL copied to clipboard!");
    });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Add Invitee to Occasion</h1>

      {/* Occasion Dropdown */}
      <div className="mb-4">
        <label className="block text-lg mb-2">Select Occasion:</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedOccasion}
          onChange={handleOccasionChange}
        >
          <option value="">-- Select Occasion --</option>
          {occasionDetails.map((occasion) => (
            <option key={occasion.id} value={occasion.id}>
              {occasion.occasionName}
            </option>
          ))}
        </select>
      </div>

      {/* Invitee Name Input */}
      <div className="mb-4">
        <label className="block text-lg mb-2">Invitee Name:</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={inviteeName}
          onChange={handleInviteeChange}
          placeholder="Enter Invitee Name"
        />
      </div>

      {/* Add Invitee Button */}
      <button
        className="bg-blue-500 text-white p-2 rounded mt-4"
        onClick={handleAddInvitee}
      >
        Add Invitee
      </button>

      {/* Error Message */}
      {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}

      {/* Display Generated URL */}
      {generatedUrl && (
        <div className="mt-6">
          <label className="block text-lg mb-2">
            Generated Invitation URL:
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={generatedUrl}
            readOnly
          />
          <button
            className="bg-green-500 text-white p-2 rounded mt-2"
            onClick={handleCopyUrl}
          >
            Copy URL
          </button>
        </div>
      )}
    </div>
  );
}
