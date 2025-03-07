import React, { useState } from "react";
import { CreditCard, FileText, CheckCircle, XCircle } from "lucide-react";
import "./feePortal.css";
import feeData from "../variables/feeData.json";

const FeePayment = ({ onSelectFee }) => {
  const [fees] = useState(feeData);

  return (
    <div className="fee-container">
        <div className="table-wrapper">
          <table className="fee-table">
            <thead>
              <tr>
                <th>Description</th>
                <th className="desktop">Amount</th>
                <th className="desktop">Late Fee</th>
                <th className="desktop">Re-adm. Fee</th>
                <th className="desktop">Penalty</th>
                <th>Total Amt.</th>
                <th className="desktop">Paid / Conf. on</th>
                <th>Status</th>
                <th>Receipt</th>
              </tr>
            </thead>
            <tbody>
              {fees.length > 0 ? (
                fees.map((fee) => (
                  <tr key={fee.semester}>
                    <td>{fee.semester}</td>
                    <td className="desktop">₹{fee.amount}</td>
                    <td className="desktop">₹{fee.lateFee || 0}</td>
                    <td className="desktop">₹{fee.readmFee || 0}</td>
                    <td className="desktop">₹{fee.penalty || 0}</td>
                    <td>₹{fee.totalAmount}</td>
                    <td className="desktop">{fee.date}</td>
                    <td className={fee.status === "Fee Paid" ? "paid" : "unpaid"}>
                      {fee.status === "Fee Paid" ? (
                        <>
                          <CheckCircle className="text-green-600" size={18} /> Fee Paid
                        </>
                      ) : (
                        <>
                          <XCircle className="text-red-600" size={18} /> Fee Unpaid
                        </>
                      )}
                    </td>
                    <td>
                    <button
                      className="fee-button"
                      onClick={() => onSelectFee(fee)} // Call onSelectFee when clicked
                    >
                        {fee.status === "Fee Paid" ? (
                          <>
                            <FileText size={18} /> Download Fee Receipt
                          </>
                        ) : (
                          <>
                            <CreditCard size={18} /> Pay Fee
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">Loading fee details...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default FeePayment;
