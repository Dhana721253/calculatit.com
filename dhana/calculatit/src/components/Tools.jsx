import React, { useState } from 'react';
import { CalculatorIcon } from '@heroicons/react/24/outline';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [error, setError] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    setError('');

    if (!weight || !height) {
      setError('Please fill in all fields');
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (weightNum <= 0 || heightNum <= 0) {
      setError('Please enter valid positive numbers');
      return;
    }

    // BMI = weight (kg) / (height (m))²
    const bmiValue = weightNum / (heightNum * heightNum);
    setBMI(bmiValue.toFixed(1));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-4">BMI Calculator</h3>
      <form onSubmit={calculateBMI} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Weight (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter weight"
            step="0.1"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Height (m)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter height"
            step="0.01"
          />
        </div>
        <button
          type="submit"
          className="w-full btn btn-primary"
        >
          Calculate BMI
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-500 text-sm">
          {error}
        </div>
      )}

      {bmi && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-lg font-semibold">
            Your BMI: {bmi}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Category: {getBMICategory(parseFloat(bmi))}
          </p>
        </div>
      )}
    </div>
  );
};

const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <CalculatorIcon className="h-12 w-12 mx-auto mb-4 text-blue-900 dark:text-blue-500" />
          <h2 className="text-3xl font-bold mb-4">
            Calculation Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Access our collection of free, accurate calculation tools for your personal and professional needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BMICalculator />
          {/* More calculators will be added here */}
        </div>
      </div>
    </section>
  );
};

export default Tools;
