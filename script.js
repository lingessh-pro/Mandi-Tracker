const localData = [
  {
    state: "Tamil Nadu",
    district: "Chennai",
    market: "Koyambedu",
    commodity: "Tomato",
    variety: "Hybrid",
    grade: "A",
    date: "09/07/2025",
    minPrice: 1500,
    maxPrice: 2500,
    modalPrice: 2000
  },
  {
    state: "Maharashtra",
    district: "Pune",
    market: "Pune Mandi",
    commodity: "Onion",
    variety: "Nasik Red",
    grade: "A",
    date: "09/07/2025",
    minPrice: 1000,
    maxPrice: 1800,
    modalPrice: 1400
  },
  {
    state: "Karnataka",
    district: "Bangalore",
    market: "Yeshwantpur",
    commodity: "Potato",
    variety: "White",
    grade: "B",
    date: "09/07/2025",
    minPrice: 800,
    maxPrice: 1200,
    modalPrice: 1000
  },
  {
    state: "Punjab",
    district: "Ludhiana",
    market: "Model Town Mandi",
    commodity: "Cauliflower",
    variety: "Snowball",
    grade: "A",
    date: "09/07/2025",
    minPrice: 900,
    maxPrice: 1500,
    modalPrice: 1200
  },
  {
    state: "Gujarat",
    district: "Ahmedabad",
    market: "Jamnagar Market",
    commodity: "Brinjal",
    variety: "Purple Long",
    grade: "B",
    date: "09/07/2025",
    minPrice: 700,
    maxPrice: 1100,
    modalPrice: 950
  },
  {
    state: "Uttar Pradesh",
    district: "Lucknow",
    market: "Gomtinagar Mandi",
    commodity: "Carrot",
    variety: "Desi",
    grade: "A",
    date: "09/07/2025",
    minPrice: 1000,
    maxPrice: 1300,
    modalPrice: 1150
  },
  {
    state: "West Bengal",
    district: "Kolkata",
    market: "Sealdah Market",
    commodity: "Cabbage",
    variety: "Green",
    grade: "A",
    date: "09/07/2025",
    minPrice: 850,
    maxPrice: 1250,
    modalPrice: 1000
  },
  {
    state: "Tamil Nadu",
    district: "Coimbatore",
    market: "Gandhipuram",
    commodity: "Mango",
    variety: "Alphonso",
    grade: "Premium",
    date: "09/07/2025",
    minPrice: 3000,
    maxPrice: 5000,
    modalPrice: 4200
  },
  {
    state: "Kerala",
    district: "Kochi",
    market: "Ernakulam Market",
    commodity: "Banana",
    variety: "Nendran",
    grade: "A",
    date: "09/07/2025",
    minPrice: 1000,
    maxPrice: 1800,
    modalPrice: 1500
  },
  {
    state: "Rajasthan",
    district: "Jaipur",
    market: "Ajmeri Gate",
    commodity: "Chili",
    variety: "Green",
    grade: "B",
    date: "09/07/2025",
    minPrice: 1300,
    maxPrice: 2100,
    modalPrice: 1700
  },
  // ... add 10 more similar entries as needed
];

function searchPrices() {
  const commodityInput = document.getElementById("commodityInput").value.toLowerCase().trim();
  const stateInput = document.getElementById("stateInput").value.toLowerCase().trim();

  const results = localData.filter(item => {
    const matchCommodity = !commodityInput || item.commodity.toLowerCase().includes(commodityInput);
    const matchState = !stateInput || item.state.toLowerCase().includes(stateInput);
    return matchCommodity && matchState;
  });

  displayResults(results);
}

function clearSearch() {
  document.getElementById("commodityInput").value = "";
  document.getElementById("stateInput").value = "";
  displayResults(localData);
}

function displayResults(data) {
  const resultsDiv = document.getElementById("results");

  if (data.length === 0) {
    resultsDiv.innerHTML = "<p style='text-align:center;color:red;'>No matching results found.</p>";
    return;
  }

  let html = `<table>
    <thead>
      <tr>
        <th>Commodity</th>
        <th>Variety</th>
        <th>Grade</th>
        <th>State</th>
        <th>District</th>
        <th>Market</th>
        <th>Min Price (₹)</th>
        <th>Max Price (₹)</th>
        <th>Modal Price (₹)</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>`;

  data.forEach(item => {
    html += `
      <tr>
        <td>${item.commodity}</td>
        <td>${item.variety}</td>
        <td>${item.grade}</td>
        <td>${item.state}</td>
        <td>${item.district}</td>
        <td>${item.market}</td>
        <td>${item.minPrice}</td>
        <td>${item.maxPrice}</td>
        <td>${item.modalPrice}</td>
        <td>${item.date}</td>
      </tr>`;
  });

  html += `</tbody></table>`;
  resultsDiv.innerHTML = html;
}

// Show all results initially
window.onload = () => displayResults(localData);