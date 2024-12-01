"use client";

import { useState, useEffect, useRef } from "react";

async function fetchInvitees(occasionId) {
  const res = await fetch(`/api/invitees?occasionId=${occasionId}`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
  const data = await res.json();
  return data.invitees;
}

async function addInvitee(occasionId, inviteeName) {
  const res = await fetch("/api/invitees", {
    method: "POST",
    body: JSON.stringify({ occasionId, inviteeName }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
  return res.json();
}

async function deleteInvitee(occasionId, inviteeName) {
  const res = await fetch("/api/invitees", {
    method: "DELETE",
    body: JSON.stringify({ occasionId, inviteeName }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
  return res.json();
}

async function updateInvitee(occasionId, oldInviteeName, newInviteeName) {
  const res = await fetch("/api/invitees", {
    method: "PUT",
    body: JSON.stringify({
      occasionId,
      oldInviteeName,
      newInviteeName,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
  return res.json();
}

export default function Occasion({ params }) {
  const [invitees, setInvitees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [occasionId, setOccasionId] = useState(null);
  const [newInvitee, setNewInvitee] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInvitees, setFilteredInvitees] = useState([]);

  useEffect(() => {
    if (params) {
      setOccasionId(params.occasionId);
    }
  }, [params]);

  useEffect(() => {
    if (occasionId) {
      fetchInvitees(occasionId)
        .then((data) => {
          setInvitees(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [occasionId]);

  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAdding]);

  useEffect(() => {
    const results = invitees.filter((invitee) =>
      invitee.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInvitees(results);
  }, [searchTerm, invitees]);

  const handleAddInvitee = async () => {
    if (!newInvitee.trim()) return alert("Please enter an invitee name.");
    try {
      await addInvitee(occasionId, newInvitee);
      setInvitees((prevInvitees) => [...prevInvitees, newInvitee]);
      setNewInvitee("");
      setIsAdding(false);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDelete = async (inviteeName) => {
    try {
      await deleteInvitee(occasionId, inviteeName);
      setInvitees((prevInvitees) =>
        prevInvitees.filter((invitee) => invitee !== inviteeName)
      );
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUpdate = async (oldInviteeName, newInviteeName) => {
    try {
      await updateInvitee(occasionId, oldInviteeName, newInviteeName);
      setInvitees((prevInvitees) =>
        prevInvitees.map((invitee) =>
          invitee === oldInviteeName ? newInviteeName : invitee
        )
      );
    } catch (err) {
      alert(err.message);
    }
  };

  const generateInviteeUrl = (inviteeName) => {
    return `${window.location.origin}/invitation/${encodeURIComponent(
      occasionId
    )}/${encodeURIComponent(inviteeName)}`;
  };

  const handleCopy = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("URL copied to clipboard!");
    } catch (err) {
      alert("Failed to copy URL.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddInvitee();
    }
  };

  const handleShare = async (url, inviteeName) => {
    console.log(url);
    console.log(generateInviteeUrl(inviteeName));

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Invitation for ${inviteeName}`,
          text: `You're invited! Check out the details here:`,
          url: url,
        });
        alert("Invitation shared successfully!");
      } catch (err) {
        console.error("Error sharing:", err);
        alert("Failed to share the invitation.");
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-gray-600">
        Loading invitees...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Invitees for Occasion {occasionId}
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-xl font-medium">
          Total Invitees: {invitees.length}
        </h2>
        <button
          onClick={() => setIsAdding(true)}
          className="mt-4 md:mt-0 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-800"
        >
          Add Invitee
        </button>
      </div>

      {isAdding && (
        <div className="mb-6 p-4 bg-gray-200 rounded-lg shadow-md">
          <input
            type="text"
            value={newInvitee}
            onChange={(e) => setNewInvitee(e.target.value)}
            onKeyPress={handleKeyPress}
            ref={inputRef}
            placeholder="Enter invitee name"
            className="px-4 py-2 border rounded-lg w-full mb-4"
          />
          <div className="flex space-x-4">
            <button
              onClick={handleAddInvitee}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-800"
            >
              Save Invitee
            </button>
            <button
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 bg-gray-400 text-black rounded-lg shadow hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <input
        type="text"
        placeholder="Search invitees..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-lg w-full md:w-1/2 mb-4"
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredInvitees
          .slice()
          .reverse()
          .map((invitee) => {
            const url = generateInviteeUrl(invitee);
            return (
              <li
                key={invitee}
                className="p-4 bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow"
              >
                <h3 className="capitalize font-semibold text-lg">{invitee}</h3>
                <p className="text-sm text-gray-600 mb-4 truncate">
                  URL: {url}
                </p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleShare(url, invitee)}
                    className="px-3 py-1 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-700"
                  >
                    Share
                  </button>

                  {/* <button
                  onClick={() => handleCopy(url)}
                  className="px-3 py-1 bg-gray-500 text-white rounded-lg text-sm hover:bg-gray-700"
                >
                  Copy URL
                </button> */}
                  <button
                    onClick={() => window.open(url, "_blank")}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-700"
                  >
                    Visit
                  </button>
                  <button
                    onClick={() => {
                      const newInviteeName = prompt(
                        "Enter a new name for the invitee:",
                        invitee
                      );
                      if (newInviteeName) {
                        handleUpdate(invitee, newInviteeName);
                      }
                    }}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-700"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(invitee)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
