import { ReceivingModule, ContentType, QnAItem } from './types';

export const RECEIVING_MODULES: ReceivingModule[] = [
  {
    id: 'apd',
    title: 'Receiving by APD',
    description: 'Ini adalah module receiving barang dari supplier Internal APD',
    checklistUrl: 'https://drive.google.com/uc?export=download&id=1QSCr9VWBVYl66rEPX49rFtua_obsUdAc',
    materials: [
      { id: 'apd-mindmap', type: ContentType.MindMap, title: 'Mindmap Overview', content: 'https://cdn.jsdelivr.net/gh/ginting719/Audio/APD.jpeg' },
      { id: 'apd-ik', type: ContentType.PPT, title: 'SOP/IK', content: 'https://drive.google.com/file/d/1pRczYqPJ8uAExoLMYk8GxodOtkQF4Iyw/view?usp=sharing' },
      { id: 'apd-slide', type: ContentType.PPT, title: 'Slide Presentasi', content: 'https://chat.z.ai/space/m0syw8cssnh1-ppt' },
      { id: 'apd-video1', type: ContentType.Video, title: 'Video 1', content: 'https://youtu.be/XPqzvbKPWOU' },
      { id: 'apd-video2', type: ContentType.Video, title: 'Video 2', content: 'https://youtu.be/p23FZET3mQs' },
      { id: 'apd-podcast', type: ContentType.Podcast, title: 'Podcast', content: 'https://drive.google.com/file/d/1cys3zyWGHDgYdRnij6cl8sGRZ7GnK4aA/view?usp=drive_link' },
      { id: 'apd-qa', type: ContentType.ExternalLink, title: 'Q&A', content: 'https://apd-receiving.my.canva.site/' },
    ]
  },
  {
    id: 'external',
    title: 'Receiving by Eksternal',
    description: 'Ini adalah module receiving barang dari supplier Internal APD',
    checklistUrl: 'https://drive.google.com/file/d/1SddyQkAYe6bdxWLsSDhS6y6qz8_fIYay/view?usp=sharing',
    materials: [
      { id: 'ext-mindmap', type: ContentType.MindMap, title: 'https://www.canva.com/design/DAG2y0H8DK8/e2oxuD7rc3La-0D7Z9c_lQ/edit?utm_content=DAG2y0H8DK8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' },
      { id: 'ext-ik', type: ContentType.PPT, title: 'SOP/IK', content: 'https://drive.google.com/file/d/1M0TSnLqMyLqWLvJM8sRp8UTfa5DHn_L7/view?usp=sharing' },
      { id: 'ext-slide', type: ContentType.PPT, title: 'Slide Presentasi', content: 'https://chat.z.ai/space/h0z179ahgf90-ppt' },
      { id: 'ext-video1', type: ContentType.Video, title: 'Video 1', content: 'https://youtu.be/XPqzvbKPWOU' },
      { id: 'ext-video2', type: ContentType.Video, title: 'Video 2', content: 'https://youtu.be/p23FZET3mQs' },
      { id: 'ext-podcast', type: ContentType.Podcast, title: 'Podcast', content: 'https://drive.google.com/file/d/1mPSpS38iNdunV3o0B-GkNolqYVXBXyth/view?usp=sharing' },
      { id: 'ext-qa', type: ContentType.ExternalLink, title: 'Q&A', content: 'https://chat.z.ai/space/k0s109ec72z1-art' },
    ]
  },
  {
    id: 'cfu',
    title: 'Receiving by CFU',
    description: 'Panduan khusus untuk memproses pengembalian dan kedatangan dari unit pelanggan (CFU).',
    materials: [
      { id: 'cfu-map', type: ContentType.MindMap, title: 'Peta Pikiran Proses', content: 'https://picsum.photos/seed/cfumap/1280/720' },
      { id: 'cfu-vid', type: ContentType.Video, title: 'Video Tutorial', content: 'https://www.youtube.com/embed/n5s2-p_1x_8' },
      { id: 'cfu-ppt', type: ContentType.PPT, title: 'Presentasi', content: '/downloads/receiving_cfu.pptx' },
      { id: 'cfu-qna', type: ContentType.QnA, title: 'Tanya Jawab', content: [
        { question: 'Apa prioritas utama saat menerima pengembalian CFU?', answer: 'Prioritas utama adalah memeriksa kondisi barang dan alasan pengembalian yang terdokumentasi.' },
        { question: 'Di mana item CFU harus disimpan?', answer: 'Item CFU harus disimpan di area karantina yang ditentukan sampai pemeriksaan lebih lanjut.' }
      ]}
    ]
  },
   {
    id: 'tn',
    title: 'Receiving by TN',
    description: 'Prosedur untuk mengelola transfer barang internal antar toko (Transfer Antar Toko).',
    materials: [
      { id: 'tn-map', type: ContentType.MindMap, title: 'Peta Pikiran Proses', content: 'https://picsum.photos/seed/tnmap/1280/720' },
      { id: 'tn-vid', type: ContentType.Video, title: 'Video Tutorial', content: 'https://www.youtube.com/embed/n5s2-p_1x_8' },
      { id: 'tn-ppt', type: ContentType.PPT, title: 'Presentasi', content: '/downloads/receiving_tn.pptx' },
      { id: 'tn-qna', type: ContentType.QnA, title: 'Tanya Jawab', content: [
        { question: 'Dokumen apa yang diperlukan untuk transfer antar toko?', answer: 'Formulir transfer internal yang disetujui, yang mencantumkan semua item dan kuantitasnya, adalah wajib.' },
        { question: 'Bagaimana cara menangani ketidaksesuaian dalam TN?', answer: 'Hubungi manajer toko pengirim segera untuk menyelesaikan perbedaan sebelum memasukkan item ke dalam inventaris.' }
      ]}
    ]
  },
  {
    id: 'consignment',
    title: 'Receiving by Consignment',
    description: 'Pelajari langkah-langkah spesifik untuk menangani inventaris konsinyasi, dari kedatangan hingga rekonsiliasi penjualan.',
    checklistUrl: 'https://drive.google.com/uc?export=download&id=1ASQCqskhoPyq3XzX1trSIfmV8km0dMEv',
    materials: [
      { id: 'cons-mindmap', type: ContentType.MindMap, title: 'Mindmap Overview', content: 'https://cdn.jsdelivr.net/gh/ginting719/Audio/consignment.jpeg' },
      { id: 'cons-ik', type: ContentType.PPT, title: 'SOP/IK', content: 'https://drive.google.com/file/d/1s4Z-ClGLA-x0-uTsCuqIis8ZHJGW94Ot/view?usp=sharing' },
      { id: 'cons-slide', type: ContentType.PPT, title: 'Slide Presentasi', content: 'https://chat.z.ai/space/d0nyr8syj3p0-art' },
      { id: 'cons-video1', type: ContentType.Video, title: 'Video 1', content: 'https://youtu.be/dGJHtrq4b2o' },
      { id: 'cons-video2', type: ContentType.Video, title: 'Video 2', content: 'https://youtu.be/BVNyOF866C0' },
      { id: 'cons-podcast', type: ContentType.Podcast, title: 'Podcast', content: 'https://drive.google.com/file/d/1qJqsEy7w-DZgpKgQF88PBw4_r0T6dY3C/view?usp=drive_link' },
      { id: 'cons-qa', type: ContentType.ExternalLink, title: 'Q&A', content: 'https://apd-receiving.my.canva.site/qa-penerimaan-barang-dagang-consigment' },
    ]
  },
];


export const QNA_DATA: QnAItem[] = [
    {
        question: "Apa yang harus saya lakukan jika jumlah item tidak sesuai dengan slip pengepakan?",
        answer: "Pertama, periksa kembali hitungan Anda. Jika perbedaan tetap ada, buat catatan pada slip pengepakan, dan segera informasikan supervisor Anda. Jangan masukkan jumlah yang salah ke dalam sistem sampai Anda menerima instruksi lebih lanjut."
    },
    {
        question: "Bagaimana cara melaporkan kotak yang rusak sebelum membukanya?",
        answer: "Ambil foto bagian luar yang rusak sebelum Anda membuka kotak. Laporkan ke supervisor Anda segera dengan foto dan nomor pelacakan kiriman. Tunggu persetujuan mereka sebelum melanjutkan untuk membongkar."
    },
    {
        question: "Di mana saya dapat menemukan nomor pesanan pembelian (PO)?",
        answer: "Nomor PO biasanya ditemukan pada label pengiriman yang terpasang pada kotak utama atau palet. Itu juga akan tercantum pada slip pengepakan yang disertakan di dalam kiriman."
    },
    {
        question: "Sebuah item tidak memiliki barcode. Apa prosedurnya?",
        answer: "Isolasi item tersebut dan sampaikan kepada pemimpin tim Anda. Mereka akan membantu Anda membuat label sementara atau menemukan informasi produk yang benar untuk memprosesnya secara manual."
    }
];
