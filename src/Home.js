import React, { useState } from 'react';
import axios from 'axios';

function Home() {
    const [values, setValues] = useState({
        Name:'',
        emailAddress: '',
        date: '',
        audience: '',
        organisationName: '',
        workshopName: '',
        location: '',
        city:'',
        state:'',
        language:'',
        TrainerName:'',
        WorkshopMode:'',
        organisationType: '',
        avgage: '',
        Numberofmales:"",
        Numberoffemales:"",
        Numberoflgbtqi:"",
        Numberofother:"",
        totalnumber:"",
        topiccovered:"",
    });
    const [loading, setLoading] = useState(false);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setValues((prev) => {
          if (checked) {
            return { ...prev, topiccovered: [...prev.topiccovered, value] };
          } else {
            return {
              ...prev,
              topiccovered: prev.topiccovered.filter((item) => item !== value),
            };
          }
        });
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Join the selected topics as a comma-separated string
        const formattedValues = {
            ...values,
            topiccovered: values.topiccovered.join(', ')  // Converts array to comma-separated string
        };
    
        // Backend API URL
        const apiUrl = 'https://red-dot-foundation-production.up.railway.app/api/submit';
    
        setLoading(true); // Start loading
    
        try {
            // Send form data to Node.js backend
            const response = await axios.post(apiUrl, formattedValues, {
                headers: { 'Content-Type': 'application/json' }
            });
    
            console.log('Form submitted successfully:', response.data);
            alert('Form submitted successfully!');
    
            // Reset form fields
            setValues({
                Name: '',
                emailAddress: '',
                date: '',
                audience: '',
                organisationName: '',
                workshopName: '',
                location: '',
                city: '',
                state: '',
                language: '',
                TrainerName: '',
                WorkshopMode: '',
                organisationType: '',
                avgage: '',
                Numberofmales: "",
                Numberoffemales: "",
                Numberoflgbtqi: "",
                Numberofother: "",
                totalnumber: "",
                topiccovered: "",
            });
        } catch (error) {
            console.error('Error submitting form:', error.message);
            alert('Error submitting form. Please try again.');
        } finally {
            setLoading(false); // End loading
        }
    };
    



    const checkboxOptions = [
        "Bystander Intervention",
        "DEIA",
        "Gender Sensitivity",
        "Safecity & Data",
        "Digital/ mental Health Safety",
        "Sexual and Reproductive Rights",
        "POCSO",
        "POSH",
        "Social media for good",
        "Creating an advocacy campaign",
        "Laws and Legislations",
        "Mental Health",
        "Empathetic Listening",
        "Others"
      ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f8ff' }}>
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '50%' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '20px' }}><b>Workshop and Session Data Form</b></h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Name:</label>
                        <input
                            type="text"
                            name="Name"
                            value={values.Name}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Email Address:</label>
                        <input
                            type="email"
                            name="emailAddress"
                            value={values.emailAddress}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={values.date}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Audience:</label>
                        <select
                            name="audience"
                            value={values.audience}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Students">Students</option>
                            <option value="Anganwadi workers">Anganwadi workers</option>
                            <option value="Women">Women</option>
                            <option value="Men">Men</option>
                            <option value="Government officials">Government officials</option>
                            <option value="Partner NGO's">Partner NGO's</option>
                            <option value="LGBTQI">LGBTQI</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Type of Organisation:</label>
                        <select
                            name="organisationType"
                            value={values.organisationType}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        >
                            <option value="">Select</option>
                            <option value="School">School</option>
                            <option value="College">College</option>
                            <option value="Coaching institute">Coaching Institute</option>
                            <option value="Community">Community</option>
                            <option value="Other">Other</option>
                        </select>
                        </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Organisation Name:</label>
                        <input
                            type="text"
                            name="organisationName"
                            value={values.organisationName}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>WorkshopMode:</label>
                        <select
                            name="WorkshopMode"
                            value={values.WorkshopMode}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Online">Online</option>
                            <option value="In-person">In-person</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Other">Other</option>
                        </select>
                        </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Name of workshop or event:</label>
                        <select
                            name="workshopName"
                            value={values.workshopName}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        >
                            <option value="">Select</option>
                            <option value="Stand up against Street Harassment">Stand up against Street Harassment</option>
                            <option value="Domestic Violence">Domestic Violence</option>
                            <option value="Diversity, Equity , Inclusion and Accessibility">Diversity, Equity , Inclusion and Accessibility</option>
                            <option value="Digital Safety">Digital Safety</option>
                            <option value="POSH">POSH</option>
                            <option value="Safer Chennai">Safer Chennai</option>
                            <option value="Safer Faridabad">Safer Faridabad</option>
                            <option value="Safety Champion">Safety Champion</option>
                            <option value="Other">Other</option>
                        </select>
                        </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={values.location}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>City:</label>
                        <input
                            type="text"
                            name="city"
                            value={values.city}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>state:</label>
                        <input
                            type="text"
                            name="state"
                            value={values.state}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Language</label>
                        <input
                            type="text"
                            name="language"
                            value={values.language}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Trainer Name:</label>
                        <input
                            type="text"
                            name="TrainerName"
                            value={values.TrainerName}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Average Age Group:</label>
                        <select
                            name="avgage"
                            value={values.avgage}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        >
                            <option value="">Select Age Group</option>
                            <option value="Below 15">Below 15</option>
                            <option value="15-18">15-18</option>
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-45">36-45</option>
                            <option value="46-60">46-60</option>
                            <option value="60+">60+</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Number Of Males:</label>
                        <input
                            type="number"
                            name="Numberofmales"
                            value={values.Numberofmales}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Number Of Females::</label>
                        <input
                            type="number"
                            name="Numberoffemales"
                            value={values.Numberoffemales}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Number Of LGBTQI:</label>
                        <input
                            type="number"
                            name="Numberoflgbtqi"
                            value={values.Numberoflgbtqi}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Number Of Other Gender:</label>
                        <input
                            type="number"
                            name="Numberofother"
                            value={values.Numberofother}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '15px' }}>
                        <label style={{ width: '40%' }}>Total Number Of People:</label>
                        <input
                            type="number"
                            name="totalnumber"
                            value={values.totalnumber}
                            onChange={handleInput}
                            style={{ width: '55%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                            required
                        />
                    </div>

                    <div
            style={{display: "flex",justifyContent: 'space-between',width: "100%",marginBottom: "15px",}}
          >
            <label style={{ width: '40%' }}>
              Topics covered:
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                paddingLeft: "20px",
              }}
            >
              {checkboxOptions.map((option, index) => (
                <label
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "Left",
                    gap: "20px",
                  }}
                >
                  <input
                    type="checkbox"
                    name="topiccovered"
                    value={option}
                    checked={values.topiccovered.includes(option)}
                    onChange={handleCheckboxChange}
                    style={{ cursor: "pointer" }}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
                    

                    <button type="submit" style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Home;
