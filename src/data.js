import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Learnnova from "./assets/proyek/learnnova.jpg";
import Siomay from "./assets/proyek/siomay.jpg";
import Koinflix from "./assets/proyek/koinflix.jpg";
import Kunriayah from "./assets/proyek/kun.jpg";
import Antribank from "./assets/proyek/antribank.jpg";
import Dzunnur from "./assets/proyek/dzunnur.jpg";

export const listProyek = [
  {
    id: 1,
    image: Learnnova,
    title: "Learn Nova",
    subtitle:
      "Learn Nova Aplikasi Absensi ini di kembangkan untuk memudahkan...",
    fullDescription:
      "Learn Nova Aplikasi Absensi ini di kembangkan untuk memudahkan para guru dalam absensi murid dengan mudah dan cepat dengan beberpa fitur seperti scan kode qr dan scan kartu pelajar serta untuk memudahkan guru dalam merekapitulasi absensi dengan cepat serta mengatur jadwal mata pelajaran dan guru dengan mudah.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://learnnova.kesug.com/",
    dad: "100",
  },
  {
    id: 2,
    image: Siomay,
    title: "Simoay Fanni's",
    subtitle:
      "Aplikasi Penjualan Siomay online dengan beberapa fitur seperti...",
    fullDescription:
      "Aplikasi Penjualan Siomay online dengan bebepara fitur seperti pembayaran gateway dan COD (cash on delivery) serta dashboard admin untuk memanajemen produk harga dan unit serta pesanan secara real time.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://siomayfannis.kesug.com/",
    dad: "200",
  },
  {
    id: 3,
    image: Koinflix,
    title: "Koinflix",
    subtitle: "Koinflix adalah aplikasi Manajemen Keuangan Pribadi...",
    fullDescription:
      "Koinflix adalah aplikasi Manajemen Keuangan Pribadi (Personal Financial Management) yang dirancang untuk membantu pengguna melacak, mengelola, dan menganalisis pendapatan, pengeluaran, serta tabungan.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://koinflix.kesug.com",
    dad: "300",
  },
  {
    id: 4,
    image: Kunriayah,
    title: "Kun Riayah",
    subtitle:
      "Kun-Riayah adalah aplikasi yang di kembangkan sebagai platform digital...",
    fullDescription:
      "Kun-Riayah adalah aplikasi yang di kembangkan sebagai platform digital untuk mengelola kedisiplinan dan administrasi pengasuhan santri di Pondok Pesantren, memungkinkan pengasuh/ustadz untuk Memantau jumlah santri dan pelanggaran harian, Mencatat dan melacak riwayat pelanggaran santri, Mengelola dan menyetujui permintaan izin pulang santri, Mengelola data dasar asrama, santri, sanksi, dan jenis pelanggaran.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://kun-riayah.kesug.com/",
    dad: "400",
  },
  {
    id: 5,
    image: Antribank,
    title: "Antrian Bank",
    subtitle:
      "Sistem Antrian Bank adalah aplikasi Manajemen Antrian Digital yang...",
    fullDescription:
      "Sistem Antrian Bank adalah aplikasi Manajemen Antrian Digital yang berfokus pada layanan perbankan untuk mempermudah mengelola alur antrian di bank secara digital seperti Pendaftaran Antrian : Modul untuk nasabah mendaftar antrian teller atau customer service, Pemanggilan Antrian: Modul bagi petugas bank untuk memanggil antrian Teller (untuk transaksi) dan Customer Service (untuk konsultasi/pembukaan rekening), Display Antrian: Layar live display untuk memonitor nomor antrian yang sedang dipanggil dan antrian berikutnya, serta Laporan: Fitur untuk melihat data dan statistik antrian harian dan bulanan.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://antribank.kesug.com/",
    dad: "500",
  },
  {
    id: 6,
    image: Dzunnur,
    title: "Coffee Shop Website",
    subtitle:
      "Website ini didedikasikan sebagai kenang-kenangan dan pengingat akan...",
    fullDescription:
      "Website ini didedikasikan sebagai kenang-kenangan dan pengingat akan perjalanan dan persahabatan angkatan Dzunnur Generation selama menempuh pendidikan di Pondok Pesantren Kun Karima berfungsi sebagai arsip digital untuk serta mengenang Perjalanan penuh makna, kenangan indah, dan persahabatan yang abadi angkatan Dzunnur Generation.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://firdyridho.github.io/Dzunnur/",
    dad: "600",
  },
];
