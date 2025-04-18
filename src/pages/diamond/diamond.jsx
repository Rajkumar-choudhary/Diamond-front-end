import React,{useState} from 'react'
import "./index.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const steps = [
    { id: 1, label: "CHOOSE A DIAMOND" },
    { id: 2, label: "CHOOSE A SETTING" },
    { id: 3, label: "COMPLETE YOUR RING" },
  ];

  const diamondShapes = [
    { name: 'Round', image: 'round.png' },
    { name: 'Princess', image: 'princess.png' },
    { name: 'Radiant', image: 'radiant.png' },
    { name: 'Pear', image: 'pear.png' },
    { name: 'Cushion', image: 'cushion.png' },
    { name: 'Asscher', image: 'asscher.png' },
    { name: 'Emerald', image: 'emerald.png' },
    { name: 'Marquise', image: 'marquise.png' },
    { name: 'Oval', image: 'oval.png' },
    { name: 'Heart', image: 'heart.png' },
  ];


export default function Diamond() {
    const [activeTab, setActiveTab] = useState("natural-diamonds");
    const [currentStep, setCurrentStep] = useState(1);
    const [selected, setSelected] = useState(null);

    const handleStepClick = (stepId) => {
      setCurrentStep(stepId);
    };

    const tabs = [
        { key: "lab-diamonds", label: "Lab Diamonds" },
        { key: "natural-diamonds", label: "Natural Diamonds" },
        { key: "color-diamonds", label: "Color Diamonds" },
      ];

      const [price, setPrice] = useState([0, 500]);
      const [carat, setCarat] = useState([100, 500]);
      const [cut, setCut] = useState([0, 3]);
      const [clarity, setClarity] = useState([0, 8]);
      const cutLabels = ["Good", "Very Good", "Ideal", "True Hearts"];
      const clarityLabels = ["FL", "IF", "VVS1", "VVS2", "VS1", "VS2", "SI1", "SI2", "I1"];

  return (
    <>
    <section className="hero_section_wrapper">
    <div className="container-fluid p-0 position-relative">
      <img src="images/Header_Banner.jpg" alt="" className="img-fluid w-100" />
    </div>
  </section>

  <div className="diamond-ring-wrapper">
      <h2 className="title">Create Your Diamond Ring</h2>
      <div className="step-container">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step ${currentStep === step.id ? "active" : ""}`}
            onClick={() => handleStepClick(step.id)}
          >
            <span className="step-number">{step.id}</span>
            <span className="step-label">{step.label}</span>
            {index < steps.length - 1 && <span className="divider">|</span>}
          </div>
        ))}
      </div>

      {/* <div className="step-content">
        {currentStep === 1 && <p>🔹 Showing diamond options...</p>}
        {currentStep === 2 && <p>🔸 Showing setting options...</p>}
        {currentStep === 3 && <p>💍 Complete your ring!</p>}
      </div> */}
    </div>

    <div className="diamond-tab-container page-width">
      <div className="tab-wrapper">
        {tabs.map((tab) => (
          <p
            key={tab.key}
            className={`diamond-tab ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
            data-diamond={tab.key}
          >
            {tab.label}
          </p>
        ))}
      </div>
{/* 
      <div className="tab-content">
        {activeTab === "lab-diamonds" && <p>Showing Lab Diamonds...</p>}
        {activeTab === "natural-diamonds" && <p>Showing Natural Diamonds...</p>}
        {activeTab === "color-diamonds" && <p>Showing Color Diamonds...</p>}
      </div> */}
    </div>


    <div className="diamond-filter-wrapper">
      {diamondShapes.map((shape) => (
        <div key={shape.name} className="diamond-shape-box">
          <img
            src="/public/images/filter-diamond-shape.png"
            alt={shape.name}
            className="diamond-shape-icon"
          />
          <p className="diamond-shape-name">{shape.name}</p>
        </div>
      ))}
    </div>

    <div className="filter-container">
      {/* Price */}
      <div className="filter-group">
        <label className="filter-label">By Price</label>
        <Slider
          range
          min={0}
          max={500}
          value={price}
          onChange={setPrice}
          marks={{
            0: "FDY",
            50: "FLBY",
            100: "FBY",
            150: "LY",
            200: "LFLY",
            250: "FLY",
            300: "FCY",
            350: "FCYI",
            400: "FIY",
            450: "FVY",
          }}
        />
        <div className="range-inputs">
          <input
            type="number"
            value={price[0]}
            onChange={(e) => setPrice([+e.target.value, price[1]])}
          />
          <span>to</span>
          <input
            type="number"
            value={price[1]}
            onChange={(e) => setPrice([price[0], +e.target.value])}
          />
        </div>
      </div>

      {/* Carat */}
      <div className="filter-group">
        <label className="filter-label">Carat</label>
        <Slider
          range
          min={100}
          max={500}
          value={carat}
          onChange={setCarat}
          marks={{
            100: "100",
            200: "200",
            300: "",
            400: "400",
            500: "500",
          }}
        />
        <div className="range-inputs">
          <input
            type="number"
            value={carat[0]}
            onChange={(e) => setCarat([+e.target.value, carat[1]])}
          />
          <span>to</span>
          <input
            type="number"
            value={carat[1]}
            onChange={(e) => setCarat([carat[0], +e.target.value])}
          />
        </div>
      </div>

      {/* Cut */}
      <div className="filter-group">
        <label className="filter-label">Cut</label>
        <Slider
          range
          min={0}
          max={3}
          step={1}
          value={cut}
          onChange={setCut}
          marks={{
            0: "Good",
            1: "Very Good",
            2: "Ideal",
            3: "True Hearts",
          }}
        />
        <div className="range-inputs">
          <input readOnly value={cutLabels[cut[0]]} />
          <span>to</span>
          <input readOnly value={cutLabels[cut[1]]} />
        </div>
      </div>

      {/* Color */}
      <div className="filter-group">
        <label className="filter-label">Color</label>
        <input className="text-input" placeholder="Enter color" />
      </div>

      {/* Clarity */}
      <div className="filter-group">
        <label className="filter-label">Clarity</label>
        <Slider
          range
          min={0}
          max={8}
          step={1}
          value={clarity}
          onChange={setClarity}
          marks={clarityLabels.reduce((acc, val, idx) => {
            acc[idx] = val;
            return acc;
          }, {})}
        />
        <div className="range-inputs">
          <input readOnly value={clarityLabels[clarity[0]]} />
          <span>to</span>
          <input readOnly value={clarityLabels[clarity[1]]} />
        </div>
      </div>
    </div>
  </>
  )
}


