import { useState } from "react";

function Input() {
  const [cm, setCm] = useState("");
  const [kg, setKg] = useState("");
  const [hasil, setHasil] = useState(null);
  const [kategori, setKategori] = useState("");
  const [pesan, setPesan] = useState("");
  const [showModal, setShowModal] = useState(false);

  const hitungBMI = () => {
    const tinggi = parseFloat(cm);
    const berat = parseFloat(kg);

    if (tinggi > 0 && berat > 0) {
      const tinggiMeter = tinggi / 100;
      const nilaiBMI = berat / (tinggiMeter ** 2);
      const hasilFix = nilaiBMI.toFixed(1);
      setHasil(hasilFix);

      if (nilaiBMI < 18.5) {
        setKategori("Underweight");
        setPesan("Makan yang banyak ya");
      } else if (nilaiBMI < 24.9) {
        setKategori("Normal weight");
        setPesan("Pertahankan berat badan idealmu ini!");
      } else if (nilaiBMI >= 25 && nilaiBMI <= 29.9) {
        setKategori("Overweight");
        setPesan("Jaga pola makan dan aktivitas fisik ya");
      } else if (nilaiBMI > 29.9) {
        setKategori("Obesity");
        setPesan("Kurangi makan dan lebih aktif bergerak");
      }

      setShowModal(true);
    } else {
      alert("Tinggi dan berat badan harus diisi dengan benar!");
    }
  };

  return (
    <div className="h-screen bg-sky-700 flex items-center justify-center px-4 animate-home">
      <div className="bg-sky-400 shadow-lg p-12 rounded-xl w-full max-w-md">
        <h1 className="text-center text-3xl font-bold mb-6">
          BMI Calculator
        </h1>

        <label className="block mb-4">
          <span className="block text-gray-700">Tinggi Badan (cm):</span>
          <input
            type="number"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700"
            placeholder="Contoh: 170"
          />
        </label>

        <label className="block mb-6">
          <span className="block text-gray-700">Berat Badan (kg):</span>
          <input
            type="number"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-sky-700"
            placeholder="Contoh: 60"
          />
        </label>

        <button
          onClick={()=>hitungBMI()}
          className="bg-sky-600 w-full py-2 rounded-sm text-slate-100 shadow-sm transition"
        >
          Hitung
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center px-12">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
              <h2 className="text-2xl font-semibold mb-4 text-sky-600">Hasil BMI</h2>
              <p className="text-lg mb-2">
                Berat badan kamu adalah <strong>{hasil}</strong> dan kamu termasuk{" "}
                <strong>{kategori}</strong>.
              </p>
              <p className="mb-4 text-sm text-gray-700 italic">"{pesan}"</p>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
