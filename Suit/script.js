var tanya = true;
while (tanya) {
    // menangkap pilihan kita
    var choose = prompt('Silahkan pilih antara gunting, batu, kertas \n hindari penggunaan huruf kapital');

    // pilihan computer
    // pilihan random
    var comp = Math.random();
    if (comp < 0.34) {
        comp = 'gunting';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'batu';
    } else {
        comp = 'kertas';
    }

    // rules
    var hasil = '';
    if (choose == comp) {
        hasil = 'SERI!';
    } else if (choose == 'gunting') {
        if (comp == 'batu') {
            hasil = 'KALAH!';
        } else {
            hasil = 'MENANG!';
        }
    } else if (choose == 'kertas') {
        if (comp == 'batu') {
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!';
        }
    } else if (choose == ' batu') {
        if (comp == 'kertas') {
            hasil = 'KALAH!';
        } else {
            hasil = 'MENANG!';
        }
    } else {
        hasil = ' memilih yang salah!';
    }
    // hasil
    alert('Anda memilih ' + choose + ' dan komputer memilih ' + comp + '\nMaka hasilnya adalah Anda ' + hasil);

    tanya = confirm('Ingin bermain lagi?')
}

alert('terima kasih');