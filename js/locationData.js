// MechSwap - Location Data for Indian States and Cities

const locationData = {
  "Andhra Pradesh": [
    "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool",
    "Kakinada", "Tirupati", "Anantapur", "Eluru", "Ongole"
  ],
  "Arunachal Pradesh": [
    "Itanagar", "Tawang", "Ziro", "Pasighat", "Along",
    "Tezu", "Changlang", "Daporijo", "Bomdila", "Khonsa"
  ],
  "Assam": [
    "Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon",
    "Tezpur", "Goalpara", "Karimganj", "Sibsagar", "Barpeta"
  ],
  "Bihar": [
    "Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia",
    "Darbhanga", "Bihar Sharif", "Arrah", "Begusarai", "Katihar"
  ],
  "Chhattisgarh": [
    "Raipur", "Bhilai", "Bilaspur", "Durg", "Korba",
    "Raigarh", "Ambikapur", "Dhamtari", "Mahasamund", "Kanker"
  ],
  "Goa": [
    "Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda",
    "Bicholim", "Curchorem", "Sanquelim", "Cortalim", "Quepem"
  ],
  "Gujarat": [
    "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar",
    "Bhavnagar", "Jamnagar", "Junagadh", "Anand", "Nadiad"
  ],
  "Haryana": [
    "Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal",
    "Sonipat", "Rohtak", "Hisar", "Bhiwani", "Kurukshetra"
  ],
  "Himachal Pradesh": [
    "Shimla", "Solan", "Mandi", "Dharamshala", "Kullu",
    "Palampur", "Una", "Nahan", "Bilaspur", "Hamirpur"
  ],
  "Jharkhand": [
    "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar",
    "Hazaribagh", "Giridih", "Ramgarh", "Chaibasa", "Dumka"
  ],
  "Karnataka": [
    "Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum",
    "Gulbarga", "Davanagere", "Bellary", "Bijapur", "Shimoga"
  ],
  "Kerala": [
    "Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam",
    "Alappuzha", "Palakkad", "Malappuram", "Kannur", "Kasaragod"
  ],
  "Madhya Pradesh": [
    "Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain",
    "Sagar", "Dewas", "Satna", "Ratlam", "Rewa"
  ],
  "Maharashtra": [
    "Mumbai", "Pune", "Nagpur", "Thane", "Nashik",
    "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Sangli"
  ],
  "Manipur": [
    "Imphal", "Thoubal", "Churachandpur", "Bishnupur", "Chandel",
    "Ukhrul", "Tamenglong", "Senapati", "Jiribam", "Kakching"
  ],
  "Meghalaya": [
    "Shillong", "Tura", "Nongstoin", "Jowai", "Baghmara",
    "Mawsynram", "Cherrapunjee", "Nongpoh", "Mawkyrwat", "Resubelpara"
  ],
  "Mizoram": [
    "Aizawl", "Lunglei", "Champhai", "Serchhip", "Kolasib",
    "Mamit", "Saitual", "Lawngtlai", "Saiha", "Hnahthial"
  ],
  "Nagaland": [
    "Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha",
    "Zunheboto", "Phek", "Kiphire", "Longleng", "Peren"
  ],
  "Odisha": [
    "Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur",
    "Berhampur", "Balasore", "Bhadrak", "Jajpur", "Dhenkanal"
  ],
  "Punjab": [
    "Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala",
    "Bathinda", "Mohali", "Pathankot", "Hoshiarpur", "Firozpur"
  ],
  "Rajasthan": [
    "Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer",
    "Bikaner", "Alwar", "Bhilwara", "Sikar", "Pali"
  ],
  "Sikkim": [
    "Gangtok", "Namchi", "Mangan", "Gyalshing", "Rangpo",
    "Jorethang", "Rangpo", "Singtam", "Pakyong", "Ravangla"
  ],
  "Tamil Nadu": [
    "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
    "Tirunelveli", "Vellore", "Erode", "Thoothukudi", "Dindigul"
  ],
  "Telangana": [
    "Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam",
    "Ramagundam", "Mahbubnagar", "Nalgonda", "Adilabad", "Medak"
  ],
  "Tripura": [
    "Agartala", "Udaipur", "Dharmanagar", "Pratapgarh", "Kailashahar",
    "Belonia", "Khowai", "Teliamura", "Kamalpur", "Santirbazar"
  ],
  "Uttar Pradesh": [
    "Lucknow", "Kanpur", "Ghaziabad", "Noida", "Agra",
    "Varanasi", "Allahabad", "Meerut", "Bareilly", "Aligarh"
  ],
  "Uttarakhand": [
    "Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rishikesh",
    "Kashipur", "Rudrapur", "Kashipur", "Nainital", "Mussoorie"
  ],
  "West Bengal": [
    "Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri",
    "Burdwan", "Kharagpur", "Malda", "Baharampur", "Jalpaiguri"
  ],
  "Delhi": [
    "New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi",
    "Central Delhi", "North East Delhi", "North West Delhi", "South West Delhi", "Shahdara"
  ],
  "Puducherry": [
    "Pondicherry", "Karaikal", "Mahe", "Yanam", "Oulgaret",
    "Villianur", "Bahour", "Thirubuvanai", "Mannadipet", "Nettapakkam"
  ],
  "Lakshadweep": [
    "Kavaratti", "Agatti", "Bangaram", "Kiltan", "Kadmat",
    "Minicoy", "Amini", "Andrott", "Chetlat", "Bitra"
  ],
  "Andaman and Nicobar Islands": [
    "Port Blair", "Car Nicobar", "Great Nicobar", "Little Andaman", "Havelock Island",
    "Neil Island", "Long Island", "Rangat", "Mayabunder", "Diglipur"
  ]
};

// Function to populate states dropdown
function populateStates(stateSelectId) {
  const stateSelect = document.getElementById(stateSelectId);
  if (stateSelect) {
    // Clear existing options
    stateSelect.innerHTML = '<option value="">Select State</option>';
    
    // Add state options
    Object.keys(locationData).forEach(state => {
      const option = document.createElement('option');
      option.value = state;
      option.textContent = state;
      stateSelect.appendChild(option);
    });
  }
}

// Function to populate cities based on selected state
function populateCities(stateSelectId, citySelectId) {
  const stateSelect = document.getElementById(stateSelectId);
  const citySelect = document.getElementById(citySelectId);
  
  if (stateSelect && citySelect) {
    stateSelect.addEventListener('change', function() {
      const selectedState = this.value;
      
      // Clear existing city options
      citySelect.innerHTML = '<option value="">Select City</option>';
      citySelect.disabled = !selectedState;
      
      if (selectedState && locationData[selectedState]) {
        const cities = locationData[selectedState].sort();
        
        cities.forEach(city => {
          const option = document.createElement('option');
          option.value = city;
          option.textContent = city;
          citySelect.appendChild(option);
        });
      }
    });
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    locationData,
    populateStates,
    populateCities
  };
}
