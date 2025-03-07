import React, { useState } from "react";
import FeePayment from "./components/FeePortal"; // Fee list page
import FeeDetails from "./components/paymentPage"; // Payment page

const FeePortal = () => {
  const [selectedFee, setSelectedFee] = useState(null); // Track selected fee

  return (
    <div>
      {selectedFee ? (
        <FeeDetails fee={selectedFee} onClose={() => setSelectedFee(null)} /> // Pass onClose prop
      ) : (
        <FeePayment onSelectFee={setSelectedFee} /> // Pass onSelectFee prop
      )}
    </div>
  );
};

export default FeePortal;
