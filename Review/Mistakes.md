

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

# Karşılaştığım problemler

## Problem 1 — Service B klasör adı yanlış oluşturuldu

Yanlış:

```text
services-b
```

Doğru:

```text
service-b
```

### Çözüm

```powershell
Rename-Item services\services-b service-b
```

---

## Problem 2 — Docker build komutunda `-t` unutuldu

Yanlış:

```powershell
docker buildx build --load service-b:1.0 .
```

Doğru:

```powershell
docker buildx build --load -t service-b:1.0 .
```

---

## Problem 3 — Dockerfile dosya adı yanlış yazıldı

Yanlış:

```text
DockerFile
```

Doğru:

```text
Dockerfile
```

---

## Problem 4 — Yanlış Go image kullanıldı

Container environment değerlerinde:

```text
GOLANG_VERSION
GOPATH
```

görüldü.

Bu değerler yanlış image kullanıldığını gösterdi.

Container ve image temizlenerek Node.js image yeniden oluşturuldu.

---

## Problem 5 — Service B `.env` dosyası eksikti

Service B’nin runtime environment değerleri tanımlanmadığı için port ve servis yapılandırması beklenen şekilde çalışmadı.

`.env` dosyası oluşturularak container başlatılırken:

```powershell
--env-file .env
```

parametresi kullanıldı.

---

## Problem 6 — Servis çağrısı handlerı yanlış serviste oluşturuldu

`call-service-b.handler.ts` ilk olarak Service B içinde oluşturuldu.

Doğru konum:

```text
services/service-a/src/handlers/call-service-b.handler.ts
```

olarak düzeltildi.

---
# Docker Compose Mistakes

## Hata 1 — YAML girintilerinin bozulması

### Hata
Compose dosyasında `services`, `service-a`, `service-b`, `ports` ve diğer alanların girintileri bozuldu.

### Alınan hata
```text
services.ports must be a mapping
```

### Sebep
YAML'da girinti yapının bir parçasıdır. `ports` gibi alanlar yanlış seviyeye gelince Compose bunları yanlış yorumladı.

### Çözüm
`compose.yaml` içindeki parent-child ilişkileri doğru girintilerle yeniden düzenlendi.

### Çıkarılan ders
YAML dosyalarında indentation yalnızca görsel düzen değildir; sözdiziminin bir parçasıdır.

---

## Hata 2 — Markdown'dan kopyalarken backslash karakterlerinin dosyaya girmesi

### Hata
Bazı alanlar şu şekilde yazıldı:

```text
env\_file
start\_period
SERVICE\_B\_URL
depends\_on
service\_healthy
```

### Sebep
Markdown içeriği kopyalanırken kaçış karakterleri dosyaya dahil oldu.

### Çözüm
Anahtarlar normal biçimde yeniden yazıldı:

```text
env_file
start_period
SERVICE_B_URL
depends_on
service_healthy
```

### Çıkarılan ders
Kod veya YAML kopyalarken Markdown escape karakterlerinin gerçek dosyaya geçmediği kontrol edilmelidir.

---

## Hata 3 — URL'nin Markdown link formatına dönüşmesi

### Hata
Healthcheck URL'si yanlışlıkla şu forma dönüştü:

```text
[http://localhost:3001/health](http://localhost:3001/health)
```

### Sebep
Düz URL, Markdown linki olarak kopyalandı.

### Çözüm
URL tekrar düz string olarak yazıldı:

```text
http://localhost:3001/health
```

### Çıkarılan ders
Kod içindeki URL'ler Markdown link formatında değil, düz string olarak bulunmalıdır.

---

## Hata 4 — Compose dosyasını çalıştırmadan önce doğrulamamak

### Hata
Bozuk YAML doğrudan Compose komutuyla çalıştırılmaya çalışıldı.

### Sebep
Önce yapılandırma doğrulaması yapılmadı.

### Çözüm
Compose değişikliklerinden sonra şu komut kullanılmaya başlandı:

```powershell
docker compose config
```

### Çıkarılan ders
`docker compose config`, runtime aşamasına geçmeden önce YAML ve Compose yapılandırma hatalarını yakalamak için kullanılmalıdır.

---

## Hata 5 — Manuel Docker container'larını Compose öncesi kontrol etmemek

### Olası hata
Eski container'lar `3000` veya `3001` portlarını kullanmaya devam etseydi Compose servisleri başlatılamayabilirdi.

### Olası çıktı
```text
port is already allocated
```

### Çözüm
Compose öncesinde:

```powershell
docker ps -a
```

ile eski container'lar kontrol edildi ve manuel Service A / Service B container'ları kaldırıldı.

### Çıkarılan ders
Compose'a geçerken daha önce manuel oluşturulan container'lar port ve isim çakışmaları açısından kontrol edilmelidir.

---

## Hata 6 — `localhost` kullanımını yanlış düşünmek

### Yanlış düşünce
Service A içinden Service B'ye:

```text
http://localhost:3001
```

ile ulaşılabileceği düşünülebilir.

### Neden yanlış?
Container içindeki `localhost`, o container'ın kendisini ifade eder.

Service A içindeki `localhost`, Service B'yi göstermez.

### Doğru kullanım
```text
http://service-b:3001
```

### Çıkarılan ders
Container-to-container iletişimde Compose service name kullanılmalıdır.

---

## Hata 7 — Manuel container adını Compose ortamında kullanmak

### Yanlış değer
```text
http://service-b-container:3001
```

### Sebep
Bu adres manuel Docker kullanımındaki container adına aitti.

### Doğru değer
```text
http://service-b:3001
```

### Çözüm
Compose içinde:

```yaml
environment:
  SERVICE_B_URL: http://service-b:3001
```

ile runtime override yapıldı.

### Çıkarılan ders
Compose ortamında servisler arası iletişim için service name kullanılmalıdır.

---

## Hata 8 — `env_file` ile `environment` farkını karıştırmak

### Yanlış düşünce
`.env` dosyasındaki değer varsa Compose içinde aynı variable'ın değiştirilemeyeceği düşünülebilir.

### Doğru davranış
`environment` altında verilen değer aynı isimli `env_file` değerini override eder.

### Çıkarılan ders
`env_file` varsayılan runtime değerlerini yüklemek, `environment` ise ortam özelinde override yapmak için kullanılabilir.

---

## Hata 9 — Service B port mapping'ini servisler arası iletişim için zorunlu sanmak

### Yanlış düşünce
Service A'nın Service B'ye ulaşması için:

```yaml
ports:
  - "3001:3001"
```

tanımının zorunlu olduğu düşünülebilir.

### Doğru bilgi
Aynı Compose network içindeki servisler service name ve container port üzerinden doğrudan iletişim kurabilir.

### Çıkarılan ders
`ports` host erişimi içindir; container-to-container iletişimin temel gereksinimi değildir.

---

## Hata 10 — Container IP adresini sabit kullanmayı düşünmek

### Yanlış yaklaşım
```text
http://172.20.0.2:3001
```

gibi bir container IP adresini uygulamaya yazmak.

### Neden yanlış?
Container yeniden oluşturulduğunda IP değişebilir.

### Doğru yaklaşım
```text
http://service-b:3001
```

### Çıkarılan ders
Dinamik altyapıda IP yerine service discovery ve DNS kullanılmalıdır.

---

## Hata 11 — `docker compose ps` sonucunu uygulama sağlığı sanmak

### Yanlış düşünce
Container `Up` durumundaysa uygulamanın tamamen sağlıklı olduğu düşünülebilir.

### Gerçek durum
`Up`, container process'inin çalıştığını gösterir.

Uygulama endpoint'i yine de cevap vermiyor olabilir.

### Çözüm
`/health` endpoint'i ve Docker healthcheck kullanıldı.

### Çıkarılan ders
Container state ile application health aynı kavram değildir.

---

## Hata 12 — Healthcheck içindeki `process.exit(1)` değerini yanlış yorumlamak

### Yanlış düşünce
`process.exit(1)` Service B'nin ana Node.js process'ini kapatır.

### Doğru bilgi
Bu `process.exit(1)`, Docker tarafından healthcheck için başlatılan ayrı `node -e` process'ini sonlandırır.

### Çıkarılan ders
Healthcheck process'i ile uygulamanın ana process'i birbirinden farklıdır.

---

## Hata 13 — `unhealthy` olan container'ın otomatik duracağını düşünmek

### Yanlış düşünce
Healthcheck başarısız olursa Docker container'ı otomatik olarak kapatır.

### Doğru bilgi
Container çalışmaya devam edebilir fakat durumu:

```text
Up (...) (unhealthy)
```

olarak görünür.

### Çıkarılan ders
Healthcheck sağlık durumunu raporlar; tek başına restart veya stop politikası değildir.

---

## Hata 14 — Basit `depends_on` kullanımını readiness garantisi sanmak

### Yanlış kullanım
```yaml
depends_on:
  - service-b
```

### Yanlış beklenti
Service B uygulaması tamamen hazır olana kadar Service A'nın bekleyeceği düşünülebilir.

### Doğru bilgi
Basit `depends_on`, yalnızca startup sırasını yönetir.

### Çözüm
```yaml
depends_on:
  service-b:
    condition: service_healthy
```

kullanıldı.

### Çıkarılan ders
Container'ın başlaması ile uygulamanın hazır olması aynı şey değildir.

---

## Hata 15 — `depends_on` ile runtime failure handling'i aynı şey sanmak

### Yanlış düşünce
Service B sonradan çökerse Service A'nın da otomatik duracağı düşünülebilir.

### Doğru bilgi
`depends_on` esas olarak startup dependency yönetir.

Service B sonradan çökerse Service A çalışmaya devam edebilir.

### Çıkarılan ders
Startup dependency ile runtime dependency failure handling ayrı problemlerdir.

---

## Hata 16 — `docker compose down` komutunun image'ları da sildiğini düşünmek

### Yanlış düşünce
`docker compose down` çalıştırıldığında oluşturulan image'ların da silineceği düşünülebilir.

### Doğru bilgi
Varsayılan olarak container'lar ve Compose network kaldırılır, image'lar kalır.

### Çıkarılan ders
Container, network ve image yaşam döngüleri birbirinden ayrıdır.

---

## Hata 17 — `docker compose up` ile `docker compose up --build` farkını gözden kaçırmak

### Yanlış düşünce
Kaynak kod değiştikten sonra her `docker compose up` komutunun image'ı otomatik olarak güncelleyeceği düşünülebilir.

### Doğru yaklaşım
Güncel kodun image'a girdiğinden emin olmak için:

```powershell
docker compose up --build
```

kullanılabilir.

### Çıkarılan ders
Kaynak kod değişikliği ile mevcut image otomatik olarak aynı şey değildir.

---

## Hata 18 — Compose service name ile container name kavramlarını karıştırmak

### Yanlış düşünce
Servisler arası DNS iletişimi için özel `container_name` tanımlamak gerektiği düşünülebilir.

### Doğru bilgi
Compose service name zaten network içinde DNS adı olarak kullanılabilir.

### Çıkarılan ders
`container_name` çoğu basit Compose senaryosunda gerekli değildir.

---

## Hata 19 — Compose default network'ü manuel network ile karıştırmak

### Yanlış düşünce
Compose kullanırken daha önce oluşturulan:

```text
cloud-native-network
```

network'ünün otomatik kullanılacağı düşünülebilir.

### Doğru bilgi
Compose kendi proje network'ünü oluşturdu:

```text
nodejs-cloud-native-learning_default
```

### Çıkarılan ders
Manuel Docker network ile Compose tarafından yönetilen network farklı kaynaklardır.

---

## Hata 20 — Compose projesindeki kaynakları Docker genelindeki kaynaklarla karıştırmak

### Yanlış düşünce
`docker compose ps` komutunun bütün Docker container'larını göstereceği düşünülebilir.

### Doğru bilgi
```text
docker ps
→ Docker daemon üzerindeki tüm çalışan container'lar

docker compose ps
→ İlgili Compose projesindeki container'lar
```

### Çıkarılan ders
Compose komutları çoğunlukla project scope içinde çalışır.