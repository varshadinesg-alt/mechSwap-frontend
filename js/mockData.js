// Mock Data for MechSwap - Industrial Machinery Marketplace

const mockMachines = [
  {
    id: 1,
    name: "Haas CNC Milling Machine",
    category: "CNC Machines",
    price: 450000,
    location: "Mumbai",
    condition: "Used",
    year: 2019,
    yearOfManufacture: 2019,
    hoursUsed: 4500,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    specs: {
      brand: "Haas",
      model: "VF-2SS",
      xTravel: "762mm",
      yTravel: "406mm",
      zTravel: "508mm",
      spindle: "12,000 RPM"
    },
    description: "Well-maintained CNC milling machine in excellent condition. Perfect for precision manufacturing."
  },
  {
    id: 2,
    name: "Trumpf Laser Cutting Machine",
    category: "Fabrication",
    price: 1200000,
    location: "Bangalore",
    condition: "Used",
    year: 2018,
    yearOfManufacture: 2018,
    hoursUsed: 3200,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
    specs: {
      brand: "Trumpf",
      model: "TruLaser 3030",
      laserPower: "4 kW",
      cuttingArea: "3000x1500mm",
      maxThickness: "25mm"
    },
    description: "High-precision laser cutting machine with excellent cutting quality and speed."
  },
  {
    id: 3,
    name: "Amada Press Brake",
    category: "Press Brakes",
    price: 680000,
    location: "Delhi",
    condition: "Used",
    year: 2020,
    yearOfManufacture: 2020,
    hoursUsed: 1800,
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop",
    specs: {
      brand: "Amada",
      model: "RG-100",
      tonnage: "100 tons",
      bendingLength: "3100mm",
      stroke: "250mm"
    },
    description: "Reliable press brake with CNC control system. Ideal for sheet metal bending operations."
  },
  {
    id: 4,
    name: "DMG Mori Lathe",
    category: "Lathes",
    price: 890000,
    location: "Chennai",
    condition: "Used",
    year: 2017,
    yearOfManufacture: 2017,
    hoursUsed: 6200,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?w=400&h=300&fit=crop",
    specs: {
      brand: "DMG Mori",
      model: "NLX 2500",
      swing: "500mm",
      turningLength: "750mm",
      spindle: "4,000 RPM"
    },
    description: "High-precision CNC lathe with advanced control system. Excellent for complex turning operations."
  },
  {
    id: 5,
    name: "Komatsu Injection Molding Machine",
    category: "Plastic Processing",
    price: 550000,
    location: "Pune",
    condition: "Used",
    year: 2019,
    yearOfManufacture: 2019,
    hoursUsed: 3800,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    specs: {
      brand: "Komatsu",
      model: "K-100",
      clampingForce: "100 tons",
      shotVolume: "200cm³",
      platenSize: "500x500mm"
    },
    description: "Efficient injection molding machine with precise control. Suitable for various plastic products."
  },
  {
    id: 6,
    name: "Mazak Vertical Machining Center",
    category: "CNC Machines",
    price: 720000,
    location: "Hyderabad",
    condition: "Used",
    year: 2020,
    yearOfManufacture: 2020,
    hoursUsed: 2100,
    image: "https://images.unsplash.com/photo-1535378437327-b7149466c9d2?w=400&h=300&fit=crop",
    specs: {
      brand: "Mazak",
      model: "Variaxis i-600",
      xTravel: "600mm",
      yTravel: "500mm",
      zTravel: "450mm"
    },
    description: "Advanced 5-axis machining center with multitasking capabilities. Perfect for complex parts."
  },
  {
    id: 7,
    name: "FANUC Robot Arm",
    category: "Automation",
    price: 380000,
    location: "Ahmedabad",
    condition: "Used",
    year: 2018,
    yearOfManufacture: 2018,
    hoursUsed: 4500,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    specs: {
      brand: "FANUC",
      model: "R-2000iC",
      payload: "200kg",
      reach: "2500mm",
      axes: "6"
    },
    description: "Industrial robot arm with high precision and reliability. Ideal for automation and material handling."
  },
  {
    id: 8,
    name: "Trumpf Punch Press",
    category: "Fabrication",
    price: 420000,
    location: "Surat",
    condition: "Used",
    year: 2016,
    yearOfManufacture: 2016,
    hoursUsed: 7200,
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop",
    specs: {
      brand: "Trumpf",
      model: "TruPunch 3000",
      tonnage: "30 tons",
      sheetSize: "2500x1250mm",
      maxHits: "600/min"
    },
    description: "High-speed punch press with excellent accuracy. Perfect for sheet metal punching operations."
  },
  {
    id: 9,
    name: "Okamoto Surface Grinder",
    category: "Grinding",
    price: 290000,
    location: "Jaipur",
    condition: "Used",
    year: 2017,
    yearOfManufacture: 2017,
    hoursUsed: 5100,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
    specs: {
      brand: "Okamoto",
      model: "ACC-818NC",
      tableSize: "450x180mm",
      maxGrindingLength: "450mm",
      spindle: "3,600 RPM"
    },
    description: "Precision surface grinder with CNC control. Excellent for high-precision grinding operations."
  },
  {
    id: 10,
    name: "Yamazaki Boring Machine",
    category: "Boring",
    price: 620000,
    location: "Indore",
    condition: "Used",
    year: 2019,
    yearOfManufacture: 2019,
    hoursUsed: 2800,
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop",
    specs: {
      brand: "Yamazaki",
      model: "B-80",
      boringDiameter: "80mm",
      maxDepth: "300mm",
      spindle: "2,500 RPM"
    },
    description: "Horizontal boring machine with excellent precision. Ideal for large bore machining operations."
  }
];

// User's machinery for seller dashboard
const userMachinery = [
  {
    id: 101,
    name: "Haas CNC Milling Machine",
    category: "CNC Machines",
    price: 450000,
    location: "Mumbai",
    status: "Active",
    views: 245,
    inquiries: 12
  },
  {
    id: 102,
    name: "Trumpf Laser Cutting Machine",
    category: "Fabrication",
    price: 1200000,
    location: "Bangalore",
    status: "Active",
    views: 189,
    inquiries: 8
  },
  {
    id: 103,
    name: "Amada Press Brake",
    category: "Press Brakes",
    price: 680000,
    location: "Delhi",
    status: "Pending",
    views: 156,
    inquiries: 5
  },
  {
    id: 104,
    name: "DMG Mori Lathe",
    category: "Lathes",
    price: 890000,
    location: "Chennai",
    status: "Active",
    views: 312,
    inquiries: 15
  }
];
