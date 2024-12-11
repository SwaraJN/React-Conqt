import React, { useState } from "react";

const InventoryManagement = () => {
  const [itemDetails, setItemDetails] = useState({
    itemName: "",
    quantity: "",
    unitPrice: "",
    submissionDate: "",
  });

  const [supplierDetails, setSupplierDetails] = useState({
    supplierName: "",
    companyName: "",
    country: "",
    city: "",
    email: "",
    role: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const countries = ["USA", "France", "Australia", "United Kingdom", "UAE"];
  const roles = ["Admin", "Manager", "User"];

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "item") {
      setItemDetails({ ...itemDetails, [name]: value });
    } else {
      setSupplierDetails({ ...supplierDetails, [name]: value });
    }
  };

  const handleSubmit = () => {
    const newData = {
      ...itemDetails,
      ...supplierDetails,
    };
    setSubmittedData([...submittedData, newData]);
    setItemDetails({
      itemName: "",
      quantity: "",
      unitPrice: "",
      submissionDate: "",
    });
    setSupplierDetails({
      supplierName: "",
      companyName: "",
      country: "",
      city: "",
      email: "",
      role: "",
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "10px 0",
        }}
      >
        Inventory Management System
      </h1>
      <div>
        <input type="checkbox" />
        <span>Item</span>
        <input type="checkbox" />
        <span>Supplier</span>
      </div>
      <div
        style={{
          marginBottom: "20px",
          padding: "20px",
          backgroundColor: "#EBEEFD",
          borderRadius: "8px",
        }}
      >
        <h2>Item Details</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              flex: 1,
              marginRight: "10px",
              marginBottom: "20px",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <label>Item Name</label>
            <input
              type="text"
              name="itemName"
              value={itemDetails.itemName}
              onChange={(e) => handleInputChange(e, "item")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1, marginRight: "10px" }}>
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={itemDetails.quantity}
              onChange={(e) => handleInputChange(e, "item")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1, marginRight: "10px" }}>
            <label>Unit Price</label>
            <input
              type="text"
              name="unitPrice"
              value={itemDetails.unitPrice}
              onChange={(e) => handleInputChange(e, "item")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Date of Submission</label>
            <input
              type="date"
              name="submissionDate"
              value={itemDetails.submissionDate}
              onChange={(e) => handleInputChange(e, "item")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          padding: "20px",
          backgroundColor: "#f2f2f2",
          borderRadius: "8px",
        }}
      >
        <h2>Supplier Details</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flex: 1, marginRight: "10px" }}>
            <label>Supplier Name</label>
            <input
              type="text"
              name="supplierName"
              value={supplierDetails.supplierName}
              onChange={(e) => handleInputChange(e, "supplier")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1, marginRight: "10px" }}>
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={supplierDetails.companyName}
              onChange={(e) => handleInputChange(e, "supplier")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1, marginRight: "10px" }}>
            <label>Country</label>
            <select
              name="country"
              value={supplierDetails.country}
              onChange={(e) => handleInputChange(e, "supplier")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={supplierDetails.city}
              onChange={(e) => handleInputChange(e, "supplier")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <div style={{ flex: 1, marginRight: "10px" }}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={supplierDetails.email}
              onChange={(e) => handleInputChange(e, "supplier")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label>Role</label>
            <select
              name="role"
              value={supplierDetails.role}
              onChange={(e) => handleInputChange(e, "supplier")}
              style={{
                width: "100%",
                padding: "8px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              <option value="">Select Role</option>
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "",
          border: "1px solid black",

          borderRadius: "8px",
        }}
      >
        <h2>Submitted Data</h2>
        <p>The data submitted by users will be displayed below</p>
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Save Changes
        </button>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr>
              {[
                "Supplier Name",
                "Item Name",
                "Quantity",
                "Unit Price",
                "Submission Date",
                "Company Name",
                "City",
                "Country",

                "Email",
                "Role",
              ].map((header, index) => (
                <th
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                {Object.values(data).map((value, idx) => (
                  <td
                    key={idx}
                    style={{ border: "1px solid #ccc", padding: "8px" }}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryManagement;
