# Flashcards

Bu dosya, öğrendiğim kavramları kısa soru-cevap kartlarıyla tekrar etmek için kullanılır.

## Kullanım yöntemi

1. Önce yalnızca soruyu oku.
2. Cevaba bakmadan kendi cümlelerinle açıklamaya çalış.
3. Cevabı kontrol et.
4. Yanlış veya eksik cevapladıysan kartı tekrar listesine ekle.

---

## Git ve Repository Flashcard'ları

### Kart 1

**Soru:** Repository nedir?

**Cevap:**
Bir projenin dosyalarını ve Git geçmişini barındıran çalışma alanıdır.

---

### Kart 2

**Soru:** Yerel repository nedir?

**Cevap:**
Bilgisayarımda bulunan ve commit geçmişini yerel olarak saklayan Git repository'sidir.

---

### Kart 3

**Soru:** Remote repository nedir?

**Cevap:**
GitHub gibi uzak bir sunucuda bulunan repository'dir.

---

### Kart 4

**Soru:** `.git` klasörü ne işe yarar?

**Cevap:**
Commit geçmişini, branch bilgilerini, staging area bilgisini ve Git yapılandırmasını saklar.

---

### Kart 5

**Soru:** `.gitignore` dosyası ne işe yarar?

**Cevap:**
Git tarafından takip edilmesini istemediğimiz dosya ve klasörleri belirtir.

---

### Kart 6

**Soru:** Git neden boş klasörleri takip etmez?

**Cevap:**
Git klasörleri değil, dosya içeriklerini takip eder. Bir klasör boşsa takip edilecek bir dosya bulunmaz.

---

### Kart 7

**Soru:** Working directory nedir?

**Cevap:**
Dosyalar üzerinde aktif olarak değişiklik yaptığım proje alanıdır.

---

### Kart 8

**Soru:** Staging area nedir?

**Cevap:**
Bir sonraki commit'e dahil edilecek değişikliklerin hazırlandığı alandır.

---

### Kart 9

**Soru:** `git status` ne gösterir?

**Cevap:**
Aktif branch'i, untracked dosyaları, modified dosyaları, staged değişiklikleri ve repository'nin genel durumunu gösterir.

---

### Kart 10

**Soru:** Untracked dosya nedir?

**Cevap:**
Dosya sisteminde bulunan ancak henüz Git tarafından takip edilmeyen dosyadır.

---

### Kart 11

**Soru:** Modified dosya nedir?

**Cevap:**
Daha önce Git tarafından takip edilen ancak son commit'ten sonra değiştirilmiş dosyadır.

---

### Kart 12

**Soru:** Staged değişiklik nedir?

**Cevap:**
Bir sonraki commit'e eklenmek üzere staging area'ya alınmış değişikliktir.

---

### Kart 13

**Soru:** `git add README.md` ne yapar?

**Cevap:**
Yalnızca `README.md` dosyasındaki değişiklikleri staging area'ya alır.

---

### Kart 14

**Soru:** `git add .` ne yapar?

**Cevap:**
Bulunulan klasördeki ve alt klasörlerdeki uygun değişiklikleri staging area'ya alır.

---

### Kart 15

**Soru:** `git commit` ne yapar?

**Cevap:**
Staging area'daki değişiklikleri yerel Git geçmişine kaydeder.

---

### Kart 16

**Soru:** `git push` ne yapar?

**Cevap:**
Yerel repository'deki commit'leri uzak repository'ye gönderir.

---

### Kart 17

**Soru:** `git commit` ile `git push` arasındaki fark nedir?

**Cevap:**
`git commit`, değişiklikleri yerel Git geçmişine kaydeder.
`git push`, yerel commit'leri GitHub gibi uzak repository'ye gönderir.

---

### Kart 18

**Soru:** Commit oluşturulduğunda değişiklik otomatik olarak GitHub'a gider mi?

**Cevap:**
Hayır. Commit yalnızca yerel repository'de oluşur. GitHub'a göndermek için `git push` kullanılmalıdır.

---

### Kart 19

**Soru:** `git diff` ne gösterir?

**Cevap:**
Working directory ile staging area arasındaki değişiklikleri gösterir.

---

### Kart 20

**Soru:** `git diff --staged` ne gösterir?

**Cevap:**
Staging area ile son commit arasındaki değişiklikleri gösterir.

---

### Kart 21

**Soru:** `git restore --staged README.md` ne yapar?

**Cevap:**
`README.md` değişikliğini silmeden staging area'dan çıkarır. Değişiklik working directory'de kalır.

---

### Kart 22

**Soru:** `git init` ne yapar?

**Cevap:**
Bulunulan klasörü Git repository haline getirir ve `.git` klasörünü oluşturur.

---

### Kart 23

**Soru:** Branch nedir?

**Cevap:**
Projenin bağımsız bir geliştirme çizgisidir.

---

### Kart 24

**Soru:** `main` nedir?

**Cevap:**
Repository'nin ana geliştirme branch'i olarak kullanılan branch adıdır.

---

### Kart 25

**Soru:** `HEAD` nedir?

**Cevap:**
Git'te şu anda üzerinde bulunduğum commit'i veya branch'i gösteren işaretçidir.

---

### Kart 26

**Soru:** Commit hash nedir?

**Cevap:**
Her commit'i benzersiz biçimde tanımlayan kimlik değeridir.

---

### Kart 27

**Soru:** `origin` nedir?

**Cevap:**
Uzak repository bağlantısına verilen standart kısa addır.

---

### Kart 28

**Soru:** `origin/main` neyi ifade eder?

**Cevap:**
`origin` adlı uzak repository'deki `main` branch'ini ifade eder.

---

### Kart 29

**Soru:** `git remote -v` ne gösterir?

**Cevap:**
Repository'ye tanımlanmış uzak bağlantıların fetch ve push adreslerini gösterir.

---

### Kart 30

**Soru:** `git branch -vv` ne gösterir?

**Cevap:**
Yerel branch'leri, son commit bilgilerini ve takip ettikleri uzak branch'leri gösterir.

---

### Kart 31

**Soru:** `git log --oneline` ne gösterir?

**Cevap:**
Commit geçmişini kısa hash ve commit mesajıyla tek satırlık biçimde gösterir.

---

### Kart 32

**Soru:** `git push -u origin main` komutundaki `-u` ne yapar?

**Cevap:**
Yerel `main` branch'i ile uzak `origin/main` branch'i arasında takip ilişkisi kurar.

---

### Kart 33

**Soru:** `working tree clean` ne anlama gelir?

**Cevap:**
Commit edilmemiş, staging area'da bekleyen veya takip edilmemiş bir değişiklik bulunmadığını ifade eder.

---

### Kart 34

**Soru:** `Get-Location` ne yapar?

**Cevap:**
PowerShell'de şu anda bulunduğum klasörün tam yolunu gösterir.

---

### Kart 35

**Soru:** `Get-ChildItem` ne yapar?

**Cevap:**
Bulunulan klasördeki dosya ve klasörleri listeler.

---

### Kart 36

**Soru:** `Get-ChildItem -Force` ne yapar?

**Cevap:**
Normal öğelere ek olarak `.git` gibi gizli öğeleri de gösterir.

---

### Kart 37

**Soru:** `Get-ChildItem -Recurse` ne yapar?

**Cevap:**
Bulunulan klasörün alt klasörlerine de girerek dosya ve klasörleri listeler.

---

### Kart 38

**Soru:** `README.md` dosyasının görevi nedir?

**Cevap:**
Projenin amacını, kurulumunu, kullanımını ve teknik yapısını açıklayan ana tanıtım dosyasıdır.

---

### Kart 39

**Soru:** `START_HERE.md` dosyasının görevi nedir?

**Cevap:**
Her çalışma oturumunda izlenecek öğrenme ve tekrar akışını açıklar.

---

### Kart 40

**Soru:** `Canonical` ve `Journal` arasındaki fark nedir?

**Cevap:**
`Canonical`, planlanan ana öğrenme yolunu tutar.
`Journal`, gerçekte yapılan işlemleri, ilerlemeyi ve hataları kaydeder.

---

## Hızlı Akış Kartı

**Soru:** Bir değişikliğin bilgisayardan GitHub'a gitme sırası nedir?

**Cevap:**

```text
Dosyada değişiklik yap
→ Working directory
→ git add
→ Staging area
→ git commit
→ Local repository
→ git push
→ Remote repository
```

---

## Tekrar Edilecek Kartlar

Yanlış veya eksik cevapladığım kartların numaralarını buraya ekleyeceğim.

* Kart 17 — `git commit` ile `git push` arasındaki fark
