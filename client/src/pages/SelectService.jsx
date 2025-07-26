import React from "react";
import { useNavigate } from "react-router-dom";

const SelectService = () => {
  const navigate = useNavigate();

  const handleServiceSelect = (service) => {
    if (service === "pharmacy") {
      navigate("/pharmacy");
    } else if (service === "consultation") {
      navigate("/consultation");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to HealthCare
          </h1>
          <p className="text-xl text-gray-600">
            Choose the service you need today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Pharmacy Service */}
          <div
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleServiceSelect("pharmacy")}
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Pharmacy
              </h2>
              <p className="text-gray-600 mb-6">
                Order medicines, health products, and get them delivered to your
                doorstep
              </p>
              <ul className="text-left text-sm text-gray-500 mb-6 space-y-2">
                <li>• Prescription medicines</li>
                <li>• Over-the-counter drugs</li>
                <li>• Health supplements</li>
                <li>• Medical equipment</li>
                <li>• Home delivery available</li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
                Go to Pharmacy
              </button>
            </div>
          </div>

          {/* AI Health Consultation */}
          <div
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleServiceSelect("consultation")}
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                AI Health Assistant
              </h2>
              <p className="text-gray-600 mb-6">
                Chat with our intelligent health assistant for instant medical
                guidance and support
              </p>
              <ul className="text-left text-sm text-gray-500 mb-6 space-y-2">
                <li>• 24/7 instant responses</li>
                <li>• Symptom analysis</li>
                <li>• Health recommendations</li>
                <li>• First aid guidance</li>
                <li>• Medicine information</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
                Start Chat
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-500 hover:text-gray-700 underline"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectService;
