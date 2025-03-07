import React from "react";
import paymentPageData from "../variables/paymentPageData.json";
import "./paymentStyles.css";

const FeeDetails = ({ fee, onClose }) => {
  if (!fee) return null;

  return (
    
    <div className="payment-container">
      {/* Back Button */}
      <div className="mb-4">
        <button onClick={onClose} className="text-[#0d6efd] font-medium hover:underline">
          ← Back to Fee Portal
        </button>
      </div>
      <h2 className="payment-title">Semester Fee Details</h2>
      <p className="payment-subtitle">Please review your fee details before proceeding to payment.</p>
      

      {/* Fee Information */}
      <div className="payment-summary">
        <div className="payment-summary-grid">
          <p><strong>Name:</strong> {paymentPageData.name}</p>
          <p><strong>Roll No:</strong> {paymentPageData.rollNo}</p>
          <p><strong>Semester:</strong> {paymentPageData.semester}</p>
          <p><strong>Branch:</strong> {paymentPageData.branch}</p>
          <p><strong>Department:</strong> {paymentPageData.department}</p>
          <p><strong>Mode:</strong> {paymentPageData.mode}</p>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="payment-table">
          <thead>
            <tr>
              <th>Fee Particulars</th>
              <th>Amount (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            {paymentPageData?.fees?.length > 0 ? (
              paymentPageData.fees.map((fee, index) => (
                <tr key={index}>
                  <td>{fee.item}</td>
                  <td className="text-right">{fee.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center p-4 text-gray-500">
                  No fee details available
                </td>
              </tr>
            )}
            <tr className="payment-total">
              <td>Total</td>
              <td className="text-right">Rs. {paymentPageData.totalAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {fee.status !== "Fee Paid" && (
        <div className="flex justify-center mt-6 sm:mt-8">
          <button className="payment-btn">Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default FeeDetails;
