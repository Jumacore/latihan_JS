function mhs(nama, nim, jurusan, email, matkul) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.jurusan = jurusan;
  mhs.email = email;
  mhs.matkul = matkul;
  return mhs;
}

let mhs1 = mhs("jumsky", "2173849794", "Teknik Nuklit", "jumsky@gmail.com", ["Elektronika Nuklir", "Fisika Akselerator", "Proteksi Radiasi", "Perancangan sistem nuklir medis"]);

function cetakMatkul(matkul) {
  return `<ol>
    ${matkul.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>`;
}

function hg(str, ...vs) {
  return str.reduce((rs, st, i) => `${rs}${st} <span class="hl">${vs[i] || ""}</span>`, "");
}

const el = `<div class="mhs">
<h2>${mhs1.nama}</h2>
<span class="nim"> NIM : ${mhs1.nim}</span>
<br>
<span class="semester"> jurusan : ${mhs1.jurusan}</span>
<br>
<span class="email"> Email : ${mhs1.email}</span>
<h4>MATA KULIAH YANG DI AMBIL</h4>
${cetakMatkul(mhs1.matkul)}
<br>
${hg`halo ${mhs1.nama}, NIM kamu adalah ${mhs1.nim}, jurusan kamu adalah ${mhs1.jurusan} dan matkul yang kamu ambil adalah ${mhs1.matkul}`}
</div>`;

document.body.innerHTML = el;
