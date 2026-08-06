

# Mistakes

Bu dosya, proje sırasında yapılan hataları ve bu hatalardan çıkarılan dersleri kaydeder.

Amaç yalnızca hata mesajını saklamak değil; hatanın nedenini ve tekrar yaşanmaması için yapılması gereken kontrolü öğrenmektir.

## Hata 1 — Yanlış GitHub hesabıyla push yapma

### Hata mesajı


## Yanlış cevaplanan soru 1 — `git commit` ile `git push` farkı

### Soru

`git commit` ile `git push` arasındaki fark nedir?

### Verdiğim yanlış veya eksik cevap

`git add` ile değişiklikleri staging area'ya alıyoruz, `git commit` ile bunu bildiriyoruz, `git push` ile remote GitHub'a bağlıyoruz.

### Neden hatalıydı?

`git commit` yalnızca yapılan değişikliği bildirmez.

Commit işlemi, staging area'da bulunan değişiklikleri yerel Git repository'sinin geçmişine kaydeder.



## Bir dosyanın untracked olması ne anlama gelir?

Buradaki cevabın yanlış:

Untracked takip edilemiyor demektir mesela git dosyası gizlidir.

Doğrusu:

Untracked
→ Dosya proje klasöründe vardır fakat Git henüz bu dosyayı takip etmiyordur.

Örneğin yeni bir dosya oluşturdun:

notes.txt

Henüz git add yapmadıysan:

notes.txt → untracked

Bu durumun dosyanın gizli olmasıyla ilgisi yoktur.

.git klasörünün gizli olması ayrı bir dosya sistemi özelliğidir.

---

# Docker Hataları ve Eksik Cevaplar

## Yanlış cevaplanan soru 4 — Bir container birden fazla image'dan oluşturulabilir mi?

### Soru

Aşağıdaki yapı mümkün müdür?

```text
10 Image
↓
1 Container
```

### Verdiğim yanlış cevap

Bir container'ın birden fazla image'dan oluşturulabileceğini düşündüm.

### Neden hatalıydı?

Bir container doğrudan yalnızca tek bir image'dan oluşturulur.

Container'ın:

- Dosya sistemi
- Bağımlılıkları
- Çalıştırma komutu
- Uygulama kodu

tek bir image tarafından belirlenir.

### Doğru cevap

```text
1 Image
→ 0 veya daha fazla Container
```

Aynı image'dan çok sayıda container oluşturulabilir.

Ancak tek bir container doğrudan birden fazla image'dan oluşturulmaz.

### Çıkardığım ders

Image ile container arasında bire-çok ilişki olabilir:

```text
Image
├── Container 1
├── Container 2
└── Container 3
```

Her container'ın başlangıç noktası tek bir image'dır.

---

## Yanlış cevaplanan soru 5 — Docker çalıştırılacak npm script'ini kendisi seçebilir mi?

### Soru

Docker, `package.json` dosyasını gördüğünde hangi npm script'inin çalıştırılması gerektiğini kendisi anlayabilir mi?

### Verdiğim yanlış cevap

`package.json` içinde script bulunduğu için Docker'ın çalıştırılacak script'i anlayabileceğini düşündüm.

### Neden hatalıydı?

Bir `package.json` dosyasında birden fazla script bulunabilir:

```json
{
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "echo \"Tests are not configured yet\""
  }
}
```

Docker bunlardan hangisinin çalıştırılması gerektiğine kendisi karar veremez.

### Doğru cevap

Container başladığında çalışacak komut Dockerfile içinde açıkça belirtilmelidir.

```dockerfile
CMD ["npm", "start"]
```

Bu komut `package.json` içindeki `start` script'ini çalıştırır.

### Çıkardığım ders

Docker, uygulamanın nasıl başlatılacağını tahmin etmez.

Container'ın ana süreci açık şekilde tanımlanmalıdır.

---

## Yanlış cevaplanan soru 6 — `WORKDIR /app` klasörü nerede oluşur?

### Soru

`WORKDIR /app` kullanıldığında `/app` klasörü nerede oluşur?

### Verdiğim eksik cevap

Bu klasörün bulut ortamında oluşabileceğini düşündüm.

### Neden eksikti?

Docker'ın çalışması için bulut ortamı zorunlu değildir.

Docker yerel bilgisayarda çalıştırılıyorsa `/app`, yerel Docker ortamındaki container dosya sistemi içinde oluşur.

### Doğru cevap

```text
Windows host
    │
    ▼
Docker Desktop
    │
    ▼
Linux container dosya sistemi
    │
    └── /app
```

`/app`, Windows üzerinde `C:\app` olarak oluşmaz.

Docker hangi makinede çalışıyorsa o makinedeki container dosya sistemi içinde oluşur.

### Çıkardığım ders

Host dosya sistemi ile container dosya sistemi birbirinden farklıdır.

```text
Host
→ C:\Users\fatih\...

Container
→ /app
```

---

## Yanlış cevaplanan soru 7 — Express npm'in içinde mi bulunur?

### Soru

Express ile npm arasındaki ilişki nedir?

### Verdiğim eksik cevap

Express'in npm'in içinde bulunan bir kütüphane olduğunu söyledim.

### Neden eksikti?

npm, bir paket yöneticisidir.

Express ise npm registry üzerinde yayınlanan ve npm aracılığıyla indirilen bir pakettir.

### Doğru cevap

```text
npm
→ Paket yöneticisi

npm registry
→ Paketlerin yayınlandığı kayıt sistemi

Express
→ Registry üzerinden indirilen paket
```

`npm install`, `package.json` ve `package-lock.json` dosyalarını okuyarak Express dahil gerekli bağımlılıkları indirir.

---

## Hata 5 — Docker build sonucu yerel image listesinde görünmedi

### Uyarı

```text
No output specified with docker-container driver.
Build result will only remain in the build cache.
```

### Ne oldu?

Docker build işlemi tamamlandı fakat oluşturulan `service-a:1.0` image'ı yerel Docker image listesinde görünmedi.

### Neden oldu?

Aktif Docker Buildx builder, `docker-container` driver kullanıyordu.

Bu driver build sonucunu varsayılan olarak yerel image store'a yüklemedi.

### Çözüm

Build komutuna `--load` eklendi:

```powershell
docker buildx build --load -t service-a:1.0 .
```

Ardından image doğrulandı:

```powershell
docker images service-a
```

### Çıkardığım ders

Build işleminin başarıyla tamamlanması, sonucun otomatik olarak yerel image store'a yüklendiği anlamına gelmeyebilir.

Build sonucunun hedefi açıkça belirlenebilir:

```text
--load
→ Yerel Docker image store'a yükler.

--push
→ Registry'ye gönderir.
```

---

# Docker Hata Kontrol Listesi

Docker image oluştururken:

1. Doğru klasörde olduğumu kontrol et.
2. Docker Desktop'ın çalıştığını doğrula.
3. Dockerfile ve `.dockerignore` dosyalarını kontrol et.
4. Build context'i doğru verdiğimden emin ol.
5. Build çıktısındaki warning ve error mesajlarını oku.
6. Gerekirse `--load` kullan.
7. Image'ı `docker images` ile doğrula.

Container çalıştırırken:

1. Image adını ve tag'ini kontrol et.
2. Container adının daha önce kullanılıp kullanılmadığını kontrol et.
3. Host ve container portlarını doğru sırayla yaz.
4. `docker ps -a` ile container durumunu kontrol et.
5. `docker logs` ile uygulama çıktısını incele.
6. Endpointleri container üzerinden tekrar test et.