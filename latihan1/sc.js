const kegiatan = Array.from(document.querySelectorAll("[data-kegiatan]"));
let kl = kegiatan
  .filter((kl1) => kl1.textContent.includes("Kuliah"))
  .map((dkl) => dkl.dataset.kegiatan)
  .map((dkl2) => {
    const pt = dkl2.split(":").map((pt2) => parseFloat(pt2));
    return pt[0] * 60 + pt[1];
  })
  .reduce((total, detik) => total + detik);

const jam = Math.floor(kl / 3600);
kl = kl - jam * 3600;
const menit = Math.floor(kl / 60);
const detik = kl - menit * 60;

const pDurasi = document.querySelector(".durasi-kegiatanKuliah");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik,`;
const jmlV = kegiatan.filter((video) => video.textContent.includes("Kuliah")).length;
const pJmlv = document.querySelector(".jumlah-kegiatanKuliah");
pJmlv.textContent = `${jmlV} kegiatan.`;

let bl = kegiatan
  .filter((kl1) => kl1.textContent.includes("Belajar"))
  .map((dkl) => dkl.dataset.kegiatan)
  .map((dkl2) => {
    const pt = dkl2.split(":").map((pt2) => parseFloat(pt2));
    return pt[0] * 60 + pt[1];
  })
  .reduce((total, detik) => total + detik);

const jam2 = Math.floor(bl / 3600);
bl = bl - jam2 * 3600;
const menit2 = Math.floor(bl / 60);
const detik2 = bl - menit * 60;

const pDurasi2 = document.querySelector(".durasi-kegiatanBelajar");
pDurasi2.textContent = `${jam2} Jam, ${menit2} Menit, ${detik2} Detik,`;
const jmlV2 = kegiatan.filter((video) => video.textContent.includes("Belajar")).length;
const pJmlv2 = document.querySelector(".jumlah-kegiatanBelajar");
pJmlv2.textContent = `${jmlV2} kegiatan.`;

let gm = kegiatan
  .filter((kl1) => kl1.textContent.includes("Gym"))
  .map((dkl) => dkl.dataset.kegiatan)
  .map((dkl2) => {
    const pt = dkl2.split(":").map((pt2) => parseFloat(pt2));
    return pt[0] * 60 + pt[1];
  })
  .reduce((total, detik) => total + detik);

const jam3 = Math.floor(gm / 3600);
gm = gm - jam3 * 3600;
const menit3 = Math.floor(gm / 60);
const detik3 = gm - menit * 60;

const pDurasi3 = document.querySelector(".durasi-kegiatanGym");
pDurasi3.textContent = `${jam3} Jam, ${menit3} Menit, ${detik3} Detik,`;
const jmlV3 = kegiatan.filter((video) => video.textContent.includes("Gym")).length;
const pJmlv3 = document.querySelector(".jumlah-kegiatanGym");
pJmlv3.textContent = `${jmlV3} kegiatan.`;
