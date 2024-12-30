const express = require("express");
const app = express();
const port = 3000;

// Endpoint untuk menyerang target
app.get("/attack", (req, res) => {
    const { target } = req.query;

    // Validasi input
    if (!target) {
        return res
            .status(400)
            .send("Target tidak disediakan! Mohon sertakan nomor target.");
    }

    // Validasi format nomor target (contoh: harus mulai dengan 628)
    const isValidNumber = /^628[0-9]{8,15}$/.test(target);
    if (!isValidNumber) {
        return res
            .status(400)
            .send("Nomor target tidak valid! Harus diawali dengan 628 dan angka lainnya.");
    }

    // Simulasi pengiriman serangan
    console.log(`Menyerang target nomor ${target}`);

    // Tampilkan teks di browser
    res.status(200).send(`Serangan ke ${target} berhasil dikirim.`);
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
