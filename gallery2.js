document.addEventListener("DOMContentLoaded", function() {
    // Pilih tombol menggunakan ID-nya
    var tombol1 = document.getElementById("btn1");
    var tombol2 = document.getElementById("btn2");

    // Tambahkan event listener untuk tombol pertama
    tombol1.addEventListener("click", function() {
        alert("salah, pasti kamu anomali pemjahat");
        // Arahkan ke halaman lain setelah alert ditutup
        window.location.href = "tugas.html"; // Ganti dengan URL tujuan Anda
    });

    // Tambahkan event listener untuk tombol kedua
    tombol2.addEventListener("click", function() {
        alert("Betul, pasti kamu anomali pembaik");
        // Arahkan ke halaman lain setelah alert ditutup
        window.location.href = "bibil.html"; // Ganti dengan URL tujuan Anda
    });
});
