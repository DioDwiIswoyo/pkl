var images = ["gambar/gambar1.png", "gambar/gambar2.png"];

// Panggil fungsi untuk mengubah gambar setiap 5 detik
setInterval(function() {
    var img = document.getElementById("dynamic-image");
    var currentSrc = img.getAttribute("src");
    var currentIndex = images.indexOf(currentSrc);
    var nextIndex = (currentIndex + 1) % images.length; // Mengatur agar indeks selalu dalam rentang daftar gambar
    img.setAttribute("src", images[nextIndex]);
}, 5000); // Ganti angka 5000 dengan interval waktu yang Anda inginkan (dalam milidetik)
