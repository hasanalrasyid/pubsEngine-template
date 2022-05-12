---
title: "pubsEngine: Program Persiapan Manuskrip"
author:
  - number: 1
    id: "1,*"
    orcid: "0000-0002-0786-7307"
    name: "Author One"
    correspond: true
    affiliation: "My City University"
    address: "Orenomachi, Orenoshi, Orenoken, Japan"
    email: "one@myuni.ac.jp"
    url: "http://thegreatme.org"
  - number: 2
    id: 2
    name: "Author Two"
    affiliation: "My Other City University"
    address: "Hokanomachi, Orenoshi, Orenoken, Japan"
    email: "two@myuni.ac.jp"
affiliation:
  - id: 1
    description: "My Other City University, Hokanomachi, Orenoshi, Orenoken, Japan"
    email: "two@myuni.ac.jp"
  - id: 2
    description: "My City University, Orenomachi, Orenoshi, Orenoken, Japan"
    email: "one@myuni.ac.jp"
    url: "http://thegreatme.org"
  - id: "*"
    description: "corresponding.author@email.example"
  - id: +
    description: "these authors contributed equally to this work"
keywords:
# will use --- as separator
 - Classical Novae (251)
 - Ultraviolet astronomy(1736)
 - History of astronomy(1868)
 - Interdisciplinary astronomy(804)
software: "astropy [@2013A&A...558A..33A,2018AJ....156..123A], Cloudy [@2013RMxAA..49..137F], Source Extractor [@1996A&AS..117..393B]"
facilities: "HST(STIS), Swift(XRT and UVOT), AAVSO, CTIO:1.3m, CTIO:1.5m, CXO"
---

:::{.abstract}
  Dokumen ini merupakan sebuah panduan, merangkap contoh nyata untuk digunakan penulis dalam membuat dokumen memakai pubsEngine.
  Dokumen ini diturunkan dari contoh yang disediakan jurnal \aastex.
  Dalam dokumen ini, kami menyajikan beberapa perintah markdown umum sekedar sebagai pengingat.
  Kami juga memasukkan beberapa fitur Pandoc yang digunakan dalam pubsEngine.
  Hal ini diperlukan sebagai pengantar penjelasan tentang beberapa fitur utama pubsEngine yang merupakan suatu bentuk pengembangan dari markdown dan Pandoc.
  pubsEngine menganut sistem teks-penuh.
  Ini berarti, proses penyusunan Manuskrip dengan pubsEngine dapat dikendalikan melalui Version Control System semacam GiT, mercurial, darcs, dsb).
  Beberapa fitur pubsEngine memerlukan pengetahuan yang cukup atas tema-tema khusus, misalnya Python, nodeJS, GoJS, \latex, dsb.
  Di dalam dokumen ini, kami hanya menyediakan contoh penerapan fitur seminimal mungkin untuk menunjukkan bahwa fitur tersebut bekerja dengan baik.
  Kami mendorong penulis untuk mendalami fitur-fitur tersebut langsung pada sumber yang telah kami sertakan tautannya dalam dokumen ini[^abstract1].
  Jangan lupa, ada batas ukuran teks untuk abstrak, umumnya 250 kata.
:::

[^abstract1]: Abstrak ini juga bisa memiliki footnote.


# Pendahuluan

Saat ini, proses penyusunan dokumen secara digital dapat dilakukan dengan setidaknya dua kelompok pendekatan perangkat lunak.
Pendekatan pertama memiliki paradigma *What You See is What You Get*.
Penulis dihadapkan pada antar-muka yang benar-benar mirip kertas.
Harapannya, pada proses ini, penulis dapat memastikan bahwa hasil cetak dokumennya akan sama persis dengan yang muncul di tampilan perangkat lunak.
Pengembangan *open-source* untuk perangkat lunak paradigma pertama ini cukup terwakili oleh perangkat LibreOffice.
Di lain pihak, kita punya pilihan pendekatan plain-text.
Dalam pendekatan ini, seorang penulis menyusun suatu file teks yang bukan hanya berisikan substansi tulisan, namun juga teks tambahan yang mengindikasikan sifat editorial dokumen cetak yang diharapkan.
Selanjutnya, teks ini dijadikan sebagai input suatu program pemrosesan untuk menghasilkan dokumen siap cetak (PDF atau DVI).
Pengembangan *open-source* dalam paradigma ini diwakili oleh \latex.
`pubsEngine` mengambil peran dalam pendekatan yang kedua, *plain-text*.

Secara umum, seorang penulis melakukan dua sifat kerja yang berbeda dalam menyusun suatu makalah. Sifat kerja yang pertama adalah kerja substantif. Dalam kerja substantif, seorang penulis melakukan proses penggubahan suatu karya tulis, dari tiada menjadi ada.
Dalam kerja substansial, umumnya penulis menguasai penuh materi yang akan dituangkan dalam tulisan.
Sifat kerja kedua adalah kerja editorial.
Kerja editorial hampir sama sekali tidak berhubungan dengan kerja substantif.
Termasuk dalam kerja editorial adalah penentuan jenis huruf, proses penentuan lebar batas halaman, penentuan ukuran spasi, penentuan jenis penekanan dalam teks ( *miring*, **tebal**, ***tebal dan miring***, [garis bawah]{.underline}, `verbatim`, ~~garis tengah~~, superscript x^2^, underscript H~2~O,  dsb.), penyusunan layout halaman, penyusunan seluruh struktur manuskrip dari sampul depan hingga belakang, dst.

Dua paradigma perangkat lunak, WYSWYG dan plain-text, mendekati kerja editorial dengan cara yang berbeda.
Dalam WYSWYG, kerja editorial tercermin dalam langkah-langkah `klik kanan/kiri`, `drag-drop`, membuka menu/jendela pilihan dan pengaturan, dsb.
Dalam paradigma plain-text, kerja editorial ini tercantum secara nyata sebagai teks yang dituliskan sebagaimana kerja substansial (seringkali dalam file yang sama).
Tentu terdapat kesepakatan tertentu yang mengatur bagaimana suatu tulisan akan dibaca sebagai perintah editorial ataukah sebagai bagian dari substansi tulisan.
Pada umumnya, file teks yang dihasilkan dari paradigma plain-text pada akhirnya berisi gabungan antara kalimat-kalimat substansi dan perintah-perintah editorial.

Sebagai sebuah perangkat lunak penyusunan makalah yang telah matang, \latex telah berkembang menjadi suatu alat yang cukup kompleks.
Perkembangan ini merupakan akibat positif dari sifat pengembangan \latex yang *open-source*.
Selain itu, modularitas dalam \latex memungkinkan para penggunanya untuk mengembangkan \latex secara terfokus pada satu fitur, tanpa perlu memahami seluruh aspek yang tersedia dalam \latex sejak awal.
Di lain pihak, kompleksitas ini berakibat pada kemunculan rasa berat para penulis pemula dalam menggunakan \latex.
`pubsEngine` berusaha menurunkan tembok penghalang ini.
Harapan pengembangan `pubsEngine`, para penulis dapat segera menceburkan diri ke dalam proses produksi substantif, dan meminimalkan waktu yang diperlukan dalam proses editorial.
Selain itu, `pubsEngine` berusaha semaksimal mungkin memisahkan bagian editorial dan bagian substantif dari makalah yang dihasilkan.

# Markdown

`pubsEngine` menggunakan berkas teks berformat `Markdown` sebagai masukan yang kemudian selanjutnya akan diproses menjadi keluaran dokumen \latex (`.tex`) atau presentasi web (`RevealJS`).
Di belakang layar, `pubsEngine` menggunakan `Pandoc` dalam proses pengubahan dari `Markdown` menjadi \latex.
Lebih jauh lagi, dokumen `.tex` ini diproses oleh `lualatex` untuk menghasilkan berkas PDF yang siap cetak.

`Markdown` adalah suatu format teks yang mungkin paling sederhana jika dibandingkan dengan format yang populer saat ini, misalnya \latex, HTML, dsb.
Umumnya file `Markdown` berakhiran `.md`, misal `manuscript.md`.
Secara umum, suatu teks `Markdown` dapat kita bagi menjadi:

1. `Meta`: Bagian ini berisi hal-hal yang umumnya merupakan bagian editorial. `Meta` berada di bagian teks paling awal, dan diapit diantara baris yang berisi `---`. Umumnya berbentuk deklarasi variabel, misalnya `bibzotero: pubsEngine`. Format meta yang dipakai adalah `Yaml`. `Meta` dapat tersimpan dalam file yang berbeda, untuk dokumen ini misalnya tersimpan dalam file `manuscript.yaml`. Jika terdapat dua variabel terdefinisikan dalam `manuscript.yaml` dan dalam dokumen utama ini (`manuscript.md`), maka definisi pada dokumen utama menjadi prioritas.
2. `Inti`: Bagian ini sebagian besar berisi substansi. Perintah-perintah editorial di bagian ini sering kali muncul hanya karena benar-benar diperlukan dan tiada cara lain, misalnya *emphasis*, dan **cetak tebal**. Kita dapat membagi bagian ini menjadi beberapa `Block` yang dipisahkan oleh satu baris kosong. Beberapa Block yang dapat kita kenali antara lain `Paragraph, CodeBlock, RawBlock, OrderedList, Header, BulletList, Table, Div`. Di dalam setiap Block, sering kita temukan satu atau lebih `Inlines` yang dapat berupa `String (teks), Emphasis, Underline, Strong, Strikeout, Superscript, Subscript, Cite, RawInline, Code, Math, Link, Image, Note`.

Pada bab ini, kami akan sajikan beberapa perintah umum dalam `Markdown` yang menyusun bagian `Inti`.

## Paragraph

Bagian paling sederhana dalam `Markdown`.
Tidak ada syarat editorial apapun dalam penyusunan suatu paragraf.
Satu paragraf akan bermula setelah baris kosong, dan diakhiri oleh baris kosong.

## CodeBlock

Paragraf tanpa format, umumnya menggunakan ditampilkan menggunakan bentuk huruf `verbatim`.
`CodeBlock` selalu diawali dan diakhiri oleh baris `~~~`.
Pada pembukaan `CodeBlock`, kita dapat menyematkan atribut:

- penanda jenis (class): `.script` untuk jenis `script`
- penanda label: `#fig:new` untuk penanda `fig:new`
- variabel: `width=0.5` untuk variabel `width` dengan nilai `5`

Contoh di atas akan mensyaratkan awal `CodeBlock` berupa `~~~{.script #fig:new width=5}`.
Aturan penambahan atribut ini akan menjadi landasan utama dalam berbagai fitur `pubsEngine` yang akan dijelaskan pada bab berikutnya.
Berikut adalah contoh dari `CodeBlock`.
```
~~~
main :: IO ()
main = putStrLn "we are one"
~~~
```

Kode di atas akan menghasilkan:

~~~
main :: IO ()
main = putStrLn "we are one"
~~~

## RawBlock

Suatu paragraf yang terbaca oleh `Pandoc` sebagai blok \latex.
Ini berarti, blok ini akan dituliskan apa adanya dalam berkas `.tex` final.
Blok ini cukup dinyatakan dengan *environment* \latex dalam bentuk `\begin{xxx}...\end{xxx}`.

## OrderedList

Blok ini berisi daftar yang ditera dengan angka berurutan dari 0.
Penulisannya cukup dengan membubuhkan angka yang sesuai pada awal baris.
Contohnya:

~~~
1. first in line
2. second
3. and the third
~~~

Akan menghasilkan:

1. first in line
2. second
3. and the third

## BulletList (Unordered List)

Blok ini adalah daftar yang ditera dengan penanda selain angka (titik atau lainnya).
Penulisannya dengan membubuhkan penanda `-`.
Misalnya:

~~~
- first in line
- second
  should multiline
- and the third
~~~

akan menghasilkan

- first in line
- second
  should multiline
- and the third

## Tabel

Pembuatan tabel akan dibahas pada bab selanjutnya mengenai Fitur pubsEngine.

## Header

Blok ini adalah blok judul.
`Markdown` mengenal hirarki judul, mulai dari tingkat pertama, kedua, dst.
Hirarki judul ini ditandai dengan jumlah `#`.
Misalnya: `# Judul Untuk Bab (1)` , `## Untuk subbab (1.1)`, dan `### Untuk sub-subbab (1.1.a)`.
Penomoran Judul akan berlangsung secara otomatis.
Pastikan ada spasi setelah `#`.

## Division

Kita dapat mengumpulkan beberapa blok ke dalam satu wadah `Div`.
Penanda yang dipakai adalah `:::`.
Seperti `CodeBlock`, kita dapat menambahkan berbagai atribut ke dalam blok ini.

## Mathematical Equations
Tiada pembahasan tentang \latex dan turunannya tanpa adanya keterangan mengenai persamaan matematika. Secara umum, dalam `Markdown`, kita dapat menggunakan lingkungan \latex yang telah umum (`$$`).
Kita juga dapat menggunakan skenario \latex yang lain, misalnya:

~~~
$$ ... $$ memiliki arti sama dengan
\begin{equation}
\begin{eqnarray}
\begin{array}
\begin{displaymath}
\begin{align}
~~~

berikut adalah contoh untuk `\begin{align}`, perhatikan bahwa lingkungan ini menghasilkan penomoran persamaan:

~~~
\begin{align}
\nabla \cdot  \vec{E} &= \rho \nonumber \\
\nabla \cdot  \vec{B} &= 0    \nonumber \\
\nabla \times \vec{E} &= -\frac{\vec{B}}{t}
\end{align}
~~~

\begin{align}
\nabla \cdot  \vec{E} &= \rho \nonumber \\
\nabla \cdot  \vec{B} &= 0    \nonumber \\
\nabla \times \vec{E} &= -\frac{\vec{B}}{t}
\end{align}


Persamaan dengan memakai `$$` secara otomatis tidak akan dinomor, sebagaimana persamaan $\nabla \cdot \vec{W}$ di bawah ini.

$$
\nabla \cdot  \vec{W} = \sigma W \nonumber
$$

Persamaan dalam baris paragraf dapat dituliskan dengan diapit tanda `$` tunggal. Contoh persamaan ini: $y = 5\cdot x^2$ dimunculkan dengan perintah `$y = 5\cdot x^2$`.
Persamaan di bawah ini menempel pada paragraf di atasnya.
$$
\nabla \cdot  \vec{W} = \sigma W \nonumber
$$

## Inline

Dalam suatu blok, kita dapat menambahkan tata penampilan teks/kata yang sesuai.
Perlu diketahui bahwa hal ini akan berakibat pada munculnya perintah-perintah editorial di dalam substansi tulisan.
Contohnya:

```
*Emphasis/Italic*, `Code/verbatim`,
[Underline]{.underline}, **Strong/
Bold**, ***Bold dan Italic***,
~~Strikeout~~, Superscript^2^,
Subscript~x~, \emph{RawInline/Latex}
<myemail@myurl.org>.
```

akan menghasilkan:
*Emphasis/Italic*, [Underline]{.underline}, **Strong/Bold**, ***Bold dan Italic***,
`Code/verbatim`, ~~Strikeout~~, Superscript^2^, Subscript~x~, \emph{RawInline/Latex}, <myemail@myurl.org>.


Selain itu, ada beberapa Inline yang lebih kompleks, memunculkan suatu blok khusus pada bagian manuskrip tertentu. Inline tersebut antara lain:

### Link
~~~
We use [Duck Duck Go](https://duckduckgo.com).
~~~

akan menghasilkan: We use [Duck Duck Go](https://duckduckgo.com).
Tulisan `Duck Duck Go` tersebut dalam berkas PDF menyimpan alamat website `https://duckduckgo.com` dan berperan sebagai tautan yang dapat diakses.

### Image

`Markdown` memungkinkan pemuatan gambar pada [@fig:FigVibStabX] dengan perintah:

~~~
![Contoh gambar](Figure/icml_numpapers.eps){#fig:FigVibStabX size=0.5}
~~~

![Contoh gambar](Figure/icml_numpapers.eps){#fig:FigVibStabX size=0.5}

Kita dapat menambahkan atribut sesuai dengan aturan yang telah dijelaskan dalam pembahasan `CodeBlock`.
Nilai `size` dalam hal ini adalah lebar gambar sebagai pengali dari `\linewidth` (lebar baris dalam \latex).
Pastikan ukuran gambar yang akan dimasukkan sudah sesuai dengan ukuran halaman cetak.
Gambar yang merentang seluruh lebar halaman dalam tatanan dikolom, dan pembahasan mengenai ukuran gambar secara lebih detil akan dibahas pada bab Fitur pubsEngine.
Rujukan pada gambar akan dibahas pada bagian berikutnya mengenai Rujukan.

### Note (Catatan kaki)

Kita dapat tambahkan suatu catatan kaki dengan perintah `[^1]` atau `[^bignote]`.
Kemudian pada paragraf berikutnya, kita tambahkan isi catatan kaki.
Berikut adalah contohnya:

~~~
Paragraf ini berisi catatan kaki [^1]. Selain itu, kita gunakan
juga catatan kaki yang cukup besar [^bignote].

[^1]: Catatan kaki sederhana
[^bignote]: Catatan ini cukup panjang. Mengandung beberapa paragraf.

  Paragraf yang diawali indentasi mengindikasikan bahwa
  paragraf tersebut ada di dalam catatan kaki.

  Ini paragraf catatan kaki yang ketiga.

Paragraf ini ada diluar catatan kaki.
~~~

Contoh di atas akan menghasilkan:


Paragraf ini berisi catatan kaki [^1]. Selain itu, kita gunakan juga catatan kaki yang cukup besar [^bignote].

[^1]: Catatan kaki sederhana
[^bignote]: Catatan ini cukup panjang. Mengandung beberapa paragraf.

  Paragraf yang diawali indentasi mengindikasikan bahwa
  paragraf tersebut ada di dalam catatan kaki.

  Ini paragraf catatan kaki yang ketiga. BUG: catatan kaki multi-paragraf tidak berjalan.

Paragraf ini ada diluar catatan kaki.



# Fitur Pandoc

Ada beberapa fitur tambahan yang dikembangkan sebagai modul/filter `Pandoc`.
Fitur tersebut memperkaya fitur dasar yang telah ada dalam `Markdown`.
Berbagai fitur ini telah terintegrasi di dalam `pubsEngine`.

## Rujukan Artikel (`Cite`) menggunakan `citeproc`

Perintah untuk menampilkan rujukan adalah `[@citeTerm]`.
Jangan lupa untuk menambahkan `reference-section-title` ke dalam `Meta` pada `manuscript.yaml` untuk menentukan judul halaman rujukan/bibliografi.
Beberapa judul yang populer adalah Bibliografi, Daftar Pustaka, dsb.
Contoh sitasi [@mitchell1980] dapat diperoleh dengan perintah `[@mitchell1980]`.
Sitasi yang lebih kompleks semacam [@mitchell1980; @astropycollaboration2013; @arnold1998] dapat juga dimunculkan dengan `[@mitchell1980; @astropycollaboration2013; aarnold1998]`.
Penulis juga dapat mencermati bahwa rujukan artikel tersebut secara otomatis juga dimunculkan di Daftar Pustaka.
Penjelasan lebih lengkap tentang metode membuat rujukan ini dapat dilihat dalam panduan utama [Pandoc Manual](https://pandoc.org/MANUAL.html#citations-in-note-styles).

## Berbagai rujukan menggunakan `crossref`

Rujukan internal (dalam dokumen) terhadap gambar, tabel dan segala sesuatu yang telah diberi label dapat dilakukan dengan pola yang mirip.
Sebagai contoh, rujukan pada [@fig:FigVibStabX] dinyatakan dengan `[@fig:FigVibStabX]`.
Untuk konsistensi, kita gunakan awalan  `tbl:` untuk tabel, dan `sec:` untuk bab atau sub-bab.
Pengungkapan rujukan (misalnya fig. 1) dapat diubah dalam `pandoc-crossref.yaml` pada variabel `figPrefix`.
Berbagai pengaturan dalam `crossref` dapat diperiksa pada halaman [panduan utama](https://lierdakil.github.io/pandoc-crossref/).

# Fitur pubsEngine

Berbagai fitur tambahan yang disediakan oleh `pubsEngine` merentang pada beberapa aspek yang terkait dengan pemrosesan di luar sistem.
Sebagian besar fitur tersebut ditampilkan sebagai `CodeBlock` dengan jenis kelas tertentu.

## Tabel

Fitur ini merupakan peningkatan dari fitur dasar yang telah ada dalam spesifikasi dasar `Markdown` dari `Pandoc`.
`pubsEngine` memasukkan kapabilitas `MultiMarkdown` untuk memproses tabel ini.
Kita dapat membuat [@tbl:multi] dengan menggunakan:

```
~~~{.multiTable #tbl:multi}
|              |          Grouping           ||
|First Header  | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
|Content       |          *Long Cell*        ||
|Content       |   **Cell**    |         Cell |
|New section   |     More      |         Data |
|And more      | With an escaped '\|'        ||
[More complicated table caption.]
~~~
```

~~~{.multiTable #tbl:multi}
|              |          Grouping           ||
|First Header  | Second Header | Third Header |
| ------------ | :-----------: | -----------: |
|Content       |          *Long Cell*        ||
|Content       |   **Cell**    |         Cell |
|New section   |     More      |         Data |
|And more      | With an escaped '\|'        ||
[More complicated table can be done using MultiMarkdown in `.multiTable` CodeBlock. You have to use this format for all table as default.]
~~~

Untuk saat ini, tabel yang merentang seluruh lebar halaman dalam tatanan dikolom harus dibuat dengan menggunakan perintah \latex.
Detil perintah ini akan disampaikan dalam Lampiran.

<!--
We use `\begin{table*}` for full screen table as follows Table \ref{KapSou}.

\begin{table*}
\centering

\caption[]{Opacity sources. Prototype for correct table. In full screen mode. \label{KapSou}}
\begin{tabular}{@{}cc
    *{4}{S[table-format=6.3,output-decimal-marker={,}]}
@{}}
\toprule
Lp. & Miejscowość
& \multicolumn{2}{@{}c}{Zapotrzebowanie na wodę, \si{m^3/\day}}
& \multicolumn{2}{c@{}}{Odpływ ścieków, \si{m^3/\day}} \\
& & \mC{$Q_{\text{śrd}}$} & \mC{$Q_{\text{maxd}}$} &
    \mC{$Q_{\text{rdś}}$} & \mC{$Q_{\text{maxd}}$} \\
\midrule
1.    & X1 & 57,2  & 74,4  & 54,3  & 70,7 \\
2.    & X2 & 82,5  & 107,3 & 78,4  & 101,9 \\
3.    & X3 & 47,3  & 61,5  & 44,9  & 58,4 \\
4.    & X4 & 24,2  & 31,5  & 23,0  & 29,9 \\
5.    & X5 & 211,2 & 274,7 & 200,6 & 260,9 \\
\bottomrule
\end{tabular}
\end{table*}
-->


## Memasukkan berkas .md tambahan

Untuk memudahkan penataan dokumen, kita dapat membagi dokumen `.md` utama menjadi beberapa berkas, dan menggabungkannya dengan menggunakan `include`.
Akhiran berkas `.md` harus dihilangkan sebab akan secara otomatis ditambahkan oleh `pubsEngine`.

```
~~~include
include/addition1
~~~

atau untuk satu berkas:

[@include:include/addition1]
```

~~~include
include/addition1
~~~


[@include:include/addition1]


Kedua paragraf identik di atas dimasukkan secara otomatis dari berkas `include/addition1.md`.

## Transliterasi bahasa Arab

Transliterasi bahasa Arab menggunakan modul [`Nusantara`](https://github.com/hasanalrasyid/Nusantara) dari \latex.
Modul ini perupakan penurunan dari modul `arabxetex` dan `arabluatex`.
Module `Nusantara` menyediakan transliterasi bahasa Arab yang dilandaskan pada tradisi yang berkembang di Indonesia (kepulauan Nusantara, sesuai nama modul).
Modul ini juga menyediakan implementasi eksperimental sederhana untuk _imla'_ bagi huruf _hamzah_ `.nu "a`.
Implementasi tersebut meliputi _hamzah_ yang berdiri sendiri `.nu "a`, _hamzah_ di atas kursi alif `.nu "A`, di bawah kursi alif `.nu "i`, pada kursi ya dan wau `.nu "w / "y`, dan _hamzah_ _washol_ `.nu _a / ~a`.

Untuk menuliskan text arab, kita dapat memilih salah satu dari dua cara.
Cara pertama adalah sebagai *inline* dalam teks/paragraf.
Dalam skenario ini, kita menggunakan jenis kelas `[.nu]` sebagaimana dalam ``[.nu rabbi fa-_infa`naa bibarkatihim]`` yang akan menghasilkan ``.nu rabbi fa-_infa`naa bibarkatihim``.
Cara berikutnya adalah dengan jenis kelas `~~~nusantara` dalam contoh sebagai berikut:

```
~~~nusantara
al-_hamdu liLLAHi al-waa_hidi fiY dzaatihi wa shifaatihi
al-ladziY ba`atsa sayyidinaa MUHAMMADaN lil-khalqi
bil-tau_hiidi bibaahiri aaayaatihi,
wa SWS `alaY `aruusi al-rusli [[3]] wa sayyidi kulli man laka
`alayhi sayaada:ti wa `alaY aaalihi wa sha_hbihi wa al-taabi`iina
lahum fiY al-_husnaY wa ziyaada:ti. ((waba`du))
~~~
```

~~~nusantara
al-_hamdu liLLAHi al-waa_hidi fiY dzaatihi wa shifaatihi al-ladziY ba`atsa sayyidinaa MUHAMMADaN
lil-khalqi bil-tau_hiidi bibaahiri aaayaatihi,
wa SWS `alaY `aruusi al-rusli [[3]] wa sayyidi kulli man laka `alayhi sayaada:ti
wa `alaY aaalihi wa sha_hbihi wa al-taabi`iina lahum fiY al-_husnaY wa ziyaada:ti. ((waba`du))
~~~


## Diagrams

Modul `Diagram` yang sesuai dengan `Embedded Domain-spesific Language` (EDSL) dari modul Haskell [`diagrams`](https://hackage.haskell.org/package/diagrams) dapat dimasukkan dengan jenis kelas `[.diagram]`.
Implementasi fitur ini dapat dilihat pada [@fig:dia1].
Perlu diperhatikan pula bahwa dalam hal ini, aturan ukuran `size` tetap sesuai dengan aturan dalam gambar biasa.

```
~~~{#fig:dia1 .diagram size=0.4 caption="dari Diagrams"}
let x = circle 10
 in x
~~~
```

~~~{#fig:dia1 .diagram size=0.4 caption="dari Diagrams"}
let t = circle 10
 in t
~~~

## Menjalankan perintah eksternal

Secara umum, jenis kelas yang digunakan adalah `[.script]`, kemudian secara berurutan diikuti dengan jenis kelas program delegasi (`.py` untuk `Python`).
Keluaran perintah yang kita harapkan akan diindikasikan selanjutnya.
Terdapat tiga pilihan untuk keluaran yang diharapkan, `.img` untuk gambar, `.md` untuk teks `Markdown`, dan `.lib` untuk library/modul.
Terkhusus untuk library/modul, keluaran ini tidak akan menampilkan material apapun dalam dokumen.
Untuk mengurangi pengulangan penulisan kode, kita dapat menyimpan fungsi tertentu sebagai library untuk kemudian disimpan dalam direktori `_build/temp/lib` dan dapat diakses oleh seluruh blok program terkait dalam bahasa tersebut di seluruh dokumen.

Berikut adalah contoh dari blok library:

```
~~~{.script .py .lib #fig:py}
#!/usr/bin/env python3

print("this is new block")
~~~
```

Dalam keadaan biasa, `CodeBlock` ini tidak akan muncul dalam dokumen PDF atau \latex yang dihasilkan.
Kita dapat memilih untuk menampilkan satu baris deskripsi singkat bagi library ini dengan menambahkan variabel `description`.
Jika variabel ini tiada, maka blok ini akan dianggap sebagai *hidden-library*.
Blok ini akan tetap dapat diakses dari seluruh script, tapi tidak ada indikasi yang menunjukkan adanya library ini dalam dokumen PDF yang dihasilkan.
Perlakuan yang lebih lengkap dapat dilakukan dengan menambahkan jenis kelas `.show`.
Penambahan ini mengindikasikan bahwa script tersebut akan ditampilkan sebagai sebuah `CodeBlock` yang dilanjutkan dengan deskripsi.
Contoh di bawah ini muncul dengan memakai awalan `~~~{.script .py .lib .show file="libPy1"}`.


~~~{.script .py .lib .show file="libPy1"}
import subprocess

def sysrun(t,debug:bool=False):
    s = " ".join(t)
    res = subprocess.getoutput(s)
    if(debug):
        print(s)
        print(res)
    return res

description="This paragraph represents the description of the additional `libPy1` library that will be inserted into the pdf output. This description is held in a string variable named `description`. Any **valid markdown syntax** can be used. The `import` statement to `libPy1` will be prepended by pubsEngine, thus removed the necessity of explicit import in any scripts below."
~~~

Jenis kelas `.md` akan menampilkan teks yang selanjutnya diolah sebagai `Markdown` oleh `pubsEngine`.
Dalam skenario ini, script yang ditulis harus mengeluarkan teks `Markdown` yang valid ke `stdout`.
Penggunaan `.md` diprediksi akan banyak berperan dalam produksi tabel atau paragraf dinamis yang dapat menyesuaikan nilai berdasarkan hasil keluaran program eksternal.

```
~~~{.script .py .md caption="this is a table script"}
print("""
~~~{.multiTable #tbl:py}
| as | dd |
|----|----|
| dd | dd |
[Table: this is output of a python script]
~~~
""")
~~~
```

Teks di atas akan menghasilkan keluaran pada [@tbl:py].
Kita juga dapat menggunakan paket modul `tabulate` dari python.
Program ini dapat menampilkan keluaran shell secara tertabulasi dengan `tabulate -F ".3f" -f orgtable`.
Pada kasus ini, kita harus memasukkan sendiri baris judul tabel kita.

~~~{.script .py .md caption="this is a table script"}
print('~~~{.multiTable #tbl:py notes=[@var:v2]}')
print("""
| as | dd |
|----|----|
| dd | dd |
[This is output of a python script]
""")
print("~~~")
~~~

Jenis kelas `.img` akan mengindikasikan bahwa script yang ditulis akan menghasilkan suatu gambar.
Ini berarti, script yang kita buat akan menjalankan proses di luar program dan harus menghasilkan suatu berkas gambar di dalam direktori `_build/auto` dengan menggunakan nama berkas yang sesuai dengan variabel `file`.
Tentu penulis bertanggung-jawab untuk menjaga konsistensi keberadaan nama berkas ini.
Implementasi gambar ini dapat dilihat pada [@fig:py].

```
~~~{.script .py .img #fig:py caption="image from a python script"
size=0.6 file=pyImage}

# fungsi sysrun telah didefinisikan dalam .lib libPy1 di atas.
sysrun(["wget 'https://upload.wikimedia.org/wikipedia/commons
/thumb/2/2c/Bismillah.svg/640px-Bismillah.svg.png'
-O _build/auto/pyImage.png"])
~~~
```

~~~{.script .py .img #fig:py caption="this is a new image from python script" size=0.6 file=pyImage}
sysrun(["wget 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Bismillah.svg/640px-Bismillah.svg.png' -O _build/auto/pyImage.png"])
~~~

Kadang menuliskan script dalam berkas utama di dalam `CodeBlock` memunculkan ketidak-nyamanan dan kesan berantakan.
Oleh sebab itu, kita dapat menyimpan script ini pada berkas lain, dan memasukkannya ke dalam manuskrip utama dengan sekaligus menyertakan teks gambar.
implementasi mekanisme ini dapat dilihat dalam [@fig:pySrc].

```
~~~{.script .py .img #fig:pySrc size=0.6
src=script/pyScript1.py file=pyImageS}
Gambar ini muncul sebagai hasil program yang tersimpan di
pyScript1.py dan dijalankan dengan penambahan `src`.
~~~
```

~~~{.script .py .img #fig:pySrc size=0.6 src=script/pyScript1.py file=pyImageS}
Gambar ini muncul sebagai hasil program yang tersimpan di pyScript1.py dan dijalankan dengan penambahan `src`.
~~~

Aturan yang sama juga berlaku untuk `.img .md .lib` bagi program SHELL (`.sh`).
Jenis *shell* yang dijalankan oleh `pubsEngine` adalah `zsh`.
Library untuk shell akan tersimpan dalam `_build/temp/lib/sh`.
Kita dapat melihat implementasi script `.sh` dalam [@fig:shImage].

~~~{.script .sh .img #fig:shImage caption="image from HELL script (zsh)" size=0.5 file=shImage}
wget "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Bismillah_Calligraphy_37.svg/1200px-Bismillah_Calligraphy_37.svg.png" -O _build/auto/shImage.png
~~~

Mekanisme yang sama juga telah terimplementasi untuk GNUplot dengan memakai jenis kelas `.gnuplot`.

## Diagram Mermaid

Untuk menjalankan fitur ini, kita harus memastikan program Mermaid telah tersimpan dan dapat terakses dalam `$PATH` dengan perintah `mermaid`.
Proses pemasangan program Mermaid dalam lingkungan Linux biasanya meliputi:

~~~
npm install @mermaid-js/mermaid-cli
ln -sf  ~/node_modules/.bin/mmdc ~/.local/bin/mermaid
~~~

Diagram [Mermaid](https://mermaid-js.github.io/mermaid/#/) pada [@fig:mermaid] ditampilkan dengan perintah sebagai berikut:

```
~~~{.mermaid #fig:mermaid caption="new mermaid"
file=mermaidExample size=0.6}
sequenceDiagram
    participant Alice
    participant Bob
    Alice->John: Hello John, how are you?
    loop Healthcheck
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>
      prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
~~~
```

~~~{.mermaid #fig:mermaid caption="new mermaid" file="mermaidExample" size=0.8}

sequenceDiagram
    participant Alice
    participant Bob
    Alice->John: Hello John, how are you?
    loop Health-check
        John->John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail...
    John-->Alice: Great!
    John->Bob: How about you?
    Bob-->John: Jolly good!
~~~

## Diagram GoJS

Demi fleksibilitas dan dukungan jenis diagram yang lebih kaya, kita bisa memakai [GoJS](https://gojs.net/latest/samples/).
Fitur ini memungkinkan kita menyusun diagram yang sangat kompleks.
Jika dibandingkan dengan `Diagrams` dari lingkungan Haskell, maka fitur `GoJS` diharapkan dapat mempermudah proses penyesuaian bagi penulis yang telah memiliki sedikit pemahaman dalam bahasa pemrograman imperatif, terutama `javaScript/nodeJS`.
Implementasi pada [@fig:goJS] adalah hasil dari kode berikut.

```
~~~{.gojs .show #fig:goJS size=0.9 src=script/goJSmodel.js
file=goJSImage}
This is GoJS image text that would be shown as a caption.
~~~
```

~~~{.gojs .show #fig:goJS size=0.6 src=script/goJSmodel.js file=goJSImage}
This is GoJS image text that would be shown as a caption.
~~~

Penulis perlu memastikan beberapa syarat yang diperlukan untuk menjalankan fitur/model ini.
Di balik layar, `pubsEngine` akan menjalankan paket program `puppeteer` dan `pdfkit`.
Kedua program ini dapat diinistall dalam lingkungan `nodeJS`.
Modul GoJS disediakan sebagai obyek modul `go`.
Variabel `$` mengindikasikan `go.GraphObject.make`.
Nama diagram yang dicetak harus sebagai `myDiagram`.
Di akhir proses, `pubsEngine` hanya akan menampilkan diagram yang diberi nama `myDiagram`.
Jika diagram yang dibuat adalah komposisi dari beberapa diagram, maka hirarki data harus disusun di bawah `myDiagram`.

## Diagram Feynman

Diagram Feynman didasarkan pada modul \latex bernama[`FeynMP`](https://ctan.org/pkg/feynmf?lang=en).
Penulis dipersilakan untuk membaca kembali dokumentasi modul tersebut untuk memahami detil perintahnya.
Perlu dicatat, bahwa blok gambar `FeynMP` dalam dokumen ini selanjutnya akan dimasukkan oleh `pubsEngine` ke lingkungan `\begin{math}...\end{math}` di dokumen \latex akhir.
Contoh implementasi diagram Feynman dalam dilihat di [@fig:FeynMP] yang dihasilkan oleh blok berikut.
```
~~~{.feynmp caption="test feynman diagram" #fig:FeynMP}
    \begin{gathered}
      \begin{fmfgraph*}(65,50) %size 65,50
        \fmfleft{i1,i2}
        \fmfright{o1,o2}
        \fmf{fermion}{i1,v1,o1}
        \fmf{fermion}{i2,v2,o2}
        \fmf{photon}{v1,v2}
      \end{fmfgraph*}
    \end{gathered}=-i\lambda
~~~
```

~~~{.feynmp caption="test feynman diagram" #fig:FeynMP}
    \begin{gathered}
      \begin{fmfgraph*}(65,50) %size 65,50
        \fmfleft{i1,i2}
        \fmfright{o1,o2}
        \fmf{fermion}{i1,v1,o1}
        \fmf{fermion}{i2,v2,o2}
        \fmf{photon}{v1,v2}
      \end{fmfgraph*}
    \end{gathered}=-i\lambda
~~~

## Integrasi bibliografi dengan Zotero

Keterhubungan dengan Zotero dapat disambungkan melalui `addon`  [`Better BibTeX`](https://retorque.re/zotero-better-bibtex).
Setelah proses pemasangan `addon` ini selesai di dalam Zotero, `pubsEngine` dapat mengambil secara otomatis seluruh data bibliografi bagi koleksi yang sebelumnya sudah diatur dalam variabel yaml `bibzotero`.
`pubsEngine` akan mengambil koleksi tersebut dari *group* pertama (umumnya bernama `My Library`).
Aplikasi Zotero perlu dijalankan terlebih dahulu, sebelum `pubsEngine` dipanggil untuk mengolah data.
Pada akhir cerita, `pubsEngine` akan menyimpan `.bib` yang diperlukan dalam direktori `_build`.
Proses \latex akan berjalan seperti biasa setelah tahap penyimpanan bibliografi ini.

## Blok Variabel

Suatu teks dapat dianggap sebagai variabel dengan mendefinisikan Div dengan jenis kelas `.var .namaVariabel` dan kemudian dapat dimunculkan dengan notasi rujukan `[@var:namaVariabelInline]`.


:::{.var .v2}
*This text V2 segment can be inserted in any part of the other text.*
:::

~~~
:::{.var .v1}
*This text segment can be inserted in any part of the other text.*
:::
~~~

:::{.var .v1}
*This text segment can be inserted in any part of the other text.*
:::

Potongan teks variabel di atas dapat kita munculkan di sini dengan perintah `[@var:v1]`. [@var:v1] Kemudian teks ini adalah lanjutan dari teks sebelumnya.

## Blok khusus untuk Acknowledgements, Software, Facilities, dan Appendix

Blok jenis ini dapat kita atur kemunculannya.
Blok dengan kelas jenis `:::{.acknowledgements .show}` akan muncul seketika di lokasi yang sama tempat dia dituliskan.
Jika `.show` kita hilangkan, maka penempatan blok ini akan disesuaikan dengan lokasi di dalam template dokumen.

## Presentasi dan Poster (Beamer)

Bagi fitur ini, kita dapat menggunakan dua jenis `CodeBlock`.
Untuk Blok teks, kita dapat memakai `~~~{.textblock w=150pt pos=(140pt,160pt)}`.
Untuk catatan/notes dalam beamer yang tidak muncul dalam layar presentasi, kita bisa memakai `~~~{note}`.


# Keluaran pubsEngine

Kita dapat memilih beberapa jenis keluaran bagi manuskrip yang kita susun.

## Thesis

Keluaran ini berbentuk dokumen PDF yang memenuhi format thesis.
Format ini diturunkan dari template [`Masters/Doctoral Thesis`](http://www.LaTeXTemplates.com).

## Article

Keluaran ini berbentuk dokumen PDF yang memenuhi format artikel.
Format ini diturunkan dari template yang telah disediakan oleh *American Astronomical Society* melalui format \latex yang diterbitkan sebagai sebuah modul [AASTeX](https://journals.aas.org/aastex-package-for-manuscript-preparation/).
Dokumen \latex yang dihasilkan dalam direktori `_build` adalah dokumen \latex siap proses dengan `lualatex namafile.tex`.
Penulis dapat langsung menyimpan isi direktori tersebut dalam suatu berkas `.zip` dan mengirimkannya ke penerbit untuk diproses atau dikomentari.

## Presentasi Web (RevealJS)

Fitur presentasi Web didasarkan pada [`RevealJS`](https://revealjs.com/).
Hasil pemrosesan `pubsEngine` di dalam direktori `_build` dapat langsung dibuka dengan *web-browser*, mis. `firefox manuscript.html`.
Direktori ini dapat juga langsung dipakai untuk disajikan dalam *web-server*.

# Perintah \latex

`Pandoc` dapat memahami seluruh perintah \latex apa adanya tanpa pengubahan apapun.
Kebebasan ini memungkinkan penulis untuk memasukkan fitur-fitur \latex langsung ke dalam dokumen jika fitur tersebut tidak dapat disajikan melalui `pubsEngine`.

Sebagai contoh, gambar \cref{fig:FigGam} adalah gambar yang disajikan dengan lingkungan `\begin{figure*}`.
Lingkungan gambar semacam ini belum bisa disajikan secara sederhana dalam `pubsEngine`.

<!-- we need figure* for make it full screen, so it must be in latex code as follows
-->

\begin{figure*}
\centering
\includegraphics[keepaspectratio=true,width=0.5\linewidth]{Figure/icml_numpapers.eps}
\caption{Adiabatic exponent $\Gamma_1$.
            $\Gamma_1$ is plotted as a function of
            $\lg$ internal energy $\mathrm{[erg\,g^{-1}]}$ and $\lg$
            density $\mathrm{[g\,cm^{-3}]}$.}
           \label{fig:FigGam}%
 \end{figure*}


:::{.acknowledgements}

Kami mengucapkan terima-kasih pada seluruh pihak yang telah membantu mewujudkan program `pubsEngine` ini. Termasuk di antara mereka adalah ...

:::


:::{.appendix}

[@include:include/appendix1]

[@include:include/appendix2]

:::

