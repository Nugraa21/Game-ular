// -------------------------------- Mematikan mode inspek atau klick kanan -------------------------------- //


document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  
    var confirmation = confirm('Menu konteks dinonaktifkan! Klik "OK" untuk menghubungi kami melalui GitHub atau WhatsApp.');
  
    if (confirmation) {
      var githubLink = 'https://github.com/Nugraa21';
      var whatsappLink = 'https://wa.me/your-whatsapp';
  
      var userChoice = prompt('Pilih salah satu:\n1. GitHub\n2. WhatsApp');
  
      if (userChoice === '1') {
        window.location.href = githubLink;
      } else if (userChoice === '2') {
        window.location.href = whatsappLink;
      } else {
        alert('Pilihan tidak valid.');
      }
    }
  });
  
  // -------------------------------- Mencegah agar tidak bisa di copy -------------------------------- //
  
  
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });
  
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  
  document.addEventListener('keydown', function (e) {
    // Cegah menggunakan kombinasi keyboard untuk membuka developer tools
    if (e.key === 'F12' || (e.key === 'Shift' && e.key === 'Ctrl' && e.key === 'I')) {
      e.preventDefault();
    }
  });
      // Mencegah drop gambar
      document.addEventListener('drop', function (e) {
        e.preventDefault();
      });
          // Menyembunyikan gambar saat diambil dari sumber lain
          document.addEventListener('dragstart', function (e) {
            if (e.target.tagName.toLowerCase() === 'img') {
              e.preventDefault();
            }
          });
      
  //
