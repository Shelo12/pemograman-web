/*@import url("https://fonts.googleaois.com/css?family=Lato:400,700display=swap");*/
/* Fungsi dari kode diatas adalah mengimpor gaya font "Lato" dari Google Fonts dengan bobot 400 dan 700,
dan menetapkan tampilan yang optimal untuk meninkatkan kinerja tampilan teks di halamam web, */

function show_modal(iteration){
    /* Dapatkan modal */
    var modal = document.getElementById("myModal"+iteration);

    /* Dapatkan elemen <span> yang menutup modal */
    var span = document.getElementById("close+"+iteration);

    /*Ketika pengguna mengklik timbol, buka modal */
    Btn.onclick = function() {
        modal.style.display = "block";

        /*Ketika pengguna mengklik <span> (x), tutup modal */
        span.onclick = function() {
            modal.style.display = "none";
        }

        /*Ketika pengguna mengklik di luar modal, tutup modal */
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}