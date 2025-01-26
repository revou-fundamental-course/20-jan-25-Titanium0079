// Fungsi untuk menghitung BMI
function calculateBMI() {
    // Mengambil nilai input dari user
    let beratBadan = parseFloat(document.getElementById("input-berat-badan").value);
    let tinggiBadan = parseFloat(document.getElementById("input-tinggi-badan").value) / 100; // konversi cm ke meter
    let usia = parseInt(document.getElementById("input-usia").value);
    
    // Validasi input
    if (isNaN(beratBadan) || isNaN(tinggiBadan) || isNaN(usia) || beratBadan <= 0 || tinggiBadan <= 0 || usia <= 0) {
        alert("Harap masukkan nilai yang valid untuk semua kolom!");
        return;
    }

    // Rumus BMI
    let bmi = beratBadan / (tinggiBadan * tinggiBadan);

    // Menampilkan hasil BMI pada elemen dengan id 'result-bmi'
    document.getElementById("result-bmi").textContent = bmi.toFixed(2); // Membatasi 2 desimal

    // Menentukan kategori BMI dan menampilkan saran
    let category = '';
    let suggestion = '';

    if (bmi < 18.5) {
        category = "Kekurangan Berat Badan";
        suggestion = "Saran: Naikkan berat badan Anda dengan pola makan yang sehat dan konsultasi dengan ahli gizi.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal (Ideal)";
        suggestion = "Saran: Pertahankan berat badan Anda dengan pola makan sehat dan rutin berolahraga.";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        category = "Kelebihan Berat Badan";
        suggestion = "Saran: Kurangi berat badan Anda dengan diet yang tepat dan olahraga teratur.";
    } else if (bmi >= 30.0) {
        category = "Obesitas";
        suggestion = "Saran: Konsultasikan dengan dokter atau ahli gizi untuk menentukan program penurunan berat badan yang tepat.";
    }

    // Menampilkan kategori BMI
    document.getElementById("bmi-category").textContent = "Kategori BMI: " + category;
    // Menampilkan saran untuk program penurunan atau pertambahan berat badan
    document.getElementById("bmi-suggestion").textContent = suggestion;
}

// Menangani form submit
document.getElementById("bmi-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk submit secara default
    calculateBMI(); // Menghitung BMI saat tombol "Hitung BMI" diklik
});
