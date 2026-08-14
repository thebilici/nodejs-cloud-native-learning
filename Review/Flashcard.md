# Flashcards

Bu dosya, öğrendiğim kavramları kısa soru-cevap kartlarıyla tekrar etmek için kullanılır.

## Kullanım yöntemi

1. Önce yalnızca soruyu oku.
2. Cevaba bakmadan kendi cümlelerinle açıklamaya çalış.
3. Cevabı kontrol et.
4. Yanlış veya eksik cevapladıysan kart numarasını tekrar listesine ekle.
5. Tekrar listesine eklenen kartları sonraki çalışma oturumlarında yeniden cevapla.

---

## Kart indeksi

| Konu | Kart aralığı | Durum |
|---|---:|---|
| Git ve GitHub |  |
| Node.js ve Express | |
| Docker ||
| Docker Compose | |
| Kubernetes | |
| Metrics Server ve HPA |  |
| k6 |  |  
| Cloud Native |  |

---

# Git ve GitHub Flashcard'ları

> Kart aralığı: 1-50

## Kart 1

### Soru

Repository nedir?

### Cevap

Bir projenin dosyalarını ve Git geçmişini barındıran çalışma alanıdır.

---

## Kart 2

### Soru

Yerel repository nedir?

### Cevap

Bilgisayarımda bulunan ve commit geçmişini yerel olarak saklayan Git repository'sidir.

---

## Kart 3

### Soru

Remote repository nedir?

### Cevap

GitHub gibi uzak bir sunucuda bulunan repository'dir.

Yerel repository'deki commitler, `git push` komutuyla remote repository'ye gönderilir.

---

## Kart 4

### Soru

`.git` klasörü ne işe yarar?

### Cevap

Git repository'sine ait teknik bilgileri saklar.

Bunlara örnek olarak şunlar verilebilir:

- Commit geçmişi
- Branch bilgileri
- Staging area bilgileri
- Remote bağlantıları
- Git yapılandırmaları

`.git` klasörü silinirse klasör içindeki proje dosyaları kalır fakat Git geçmişi ve repository bağlantısı kaybolur.

---

## Kart 5

### Soru

`.gitignore` dosyası ne işe yarar?

### Cevap

Git tarafından takip edilmesini istemediğimiz dosya ve klasörleri belirtir.

Örnek:

```gitignore
node_modules/
.env
dist/
```

---

## Kart 6

### Soru

Git neden boş klasörleri takip etmez?

### Cevap

Git klasörleri değil, dosya içeriklerini takip eder.

Bir klasör boşsa Git tarafından takip edilecek herhangi bir dosya bulunmaz.

Boş klasörü repository içinde tutmak gerekirse genellikle klasöre `.gitkeep` gibi bir dosya eklenir.

---

## Kart 7

### Soru

Working directory nedir?

### Cevap

Proje dosyaları üzerinde aktif olarak değişiklik yaptığım çalışma alanıdır.

Dosya oluşturma, düzenleme ve silme işlemleri ilk olarak working directory üzerinde gerçekleşir.

---

## Kart 8

### Soru

Staging area nedir?

### Cevap

Bir sonraki commit'e dahil edilecek değişikliklerin hazırlandığı ara alandır.

`git add` komutu, seçilen değişiklikleri working directory'den staging area'ya taşır.

---

## Kart 9

### Soru

`git status` ne gösterir?

### Cevap

Repository'nin güncel durumunu gösterir.

Örneğin:

- Aktif branch
- Modified dosyalar
- Untracked dosyalar
- Staged değişiklikler
- Yerel branch'in remote branch ile ilişkisi
- Working tree'nin temiz olup olmadığı

---

## Kart 10

### Soru

Untracked dosya nedir?

### Cevap

Dosya sisteminde bulunan ancak henüz Git tarafından takip edilmeyen dosyadır.

Yeni oluşturulan bir dosya, ilk kez `git add` ile staging area'ya alınana kadar untracked durumundadır.

---

## Kart 11

### Soru

Modified dosya nedir?

### Cevap

Daha önce Git tarafından takip edilen fakat son commit'ten sonra içeriği değiştirilmiş dosyadır.

---

## Kart 12

### Soru

Staged değişiklik nedir?

### Cevap

Bir sonraki commit'e eklenmek üzere staging area'ya alınmış değişikliktir.

Staged değişiklikler `git commit` çalıştırıldığında yerel Git geçmişine kaydedilir.

---

## Kart 13

### Soru

`git add README.md` ne yapar?

### Cevap

Yalnızca `README.md` dosyasındaki güncel değişiklikleri staging area'ya alır.

Dosyayı commit etmez ve GitHub'a göndermez.

---

## Kart 14

### Soru

`git add .` ne yapar?

### Cevap

Bulunulan klasördeki ve onun alt klasörlerindeki uygun değişiklikleri staging area'ya alır.

Bu komut kullanışlıdır fakat ilgisiz değişiklikleri de yanlışlıkla stage edebilir. Bu nedenle kontrollü commitlerde dosyaları açıkça belirtmek daha güvenlidir.

Örnek:

```powershell
git add src/routes/index.ts src/handlers/hello.handler.ts
```

---

## Kart 15

### Soru

`git commit` ne yapar?

### Cevap

Staging area'daki değişikliklerin anlık görüntüsünü yerel Git geçmişine kaydeder.

Commit işlemi değişiklikleri otomatik olarak GitHub'a göndermez.

---

## Kart 16

### Soru

`git push` ne yapar?

### Cevap

Yerel repository'deki ve remote repository'de henüz bulunmayan commitleri uzak repository'ye gönderir.

---

## Kart 17

### Soru

`git commit` ile `git push` arasındaki fark nedir?

### Cevap

`git commit`, staging area'daki değişiklikleri yerel Git geçmişine kaydeder.

`git push`, yerel repository'de bulunan commitleri GitHub gibi uzak repository'ye gönderir.

Akış:

```text
git add
→ Staging area

git commit
→ Local repository

git push
→ Remote repository
```

---

## Kart 18

### Soru

Commit oluşturulduğunda değişiklik otomatik olarak GitHub'a gider mi?

### Cevap

Hayır.

Commit yalnızca yerel repository'de oluşturulur. GitHub'a göndermek için ayrıca `git push` kullanılmalıdır.

---

## Kart 19

### Soru

`git diff` ne gösterir?

### Cevap

Working directory ile staging area arasındaki farkı gösterir.

Başka bir ifadeyle henüz stage edilmemiş değişiklikleri gösterir.

---

## Kart 20

### Soru

`git diff --staged` ne gösterir?

### Cevap

Staging area ile son commit arasındaki farkı gösterir.

Bir sonraki commit'e girecek değişiklikleri kontrol etmek için kullanılır.

---

## Kart 21

### Soru

`git restore --staged README.md` ne yapar?

### Cevap

`README.md` dosyasındaki değişikliği silmeden staging area'dan çıkarır.

Dosyada yapılan değişiklik working directory'de kalmaya devam eder.

---

## Kart 22

### Soru

`git init` ne yapar?

### Cevap

Bulunulan klasörü yerel bir Git repository'sine dönüştürür ve `.git` klasörünü oluşturur.

---

## Kart 23

### Soru

Branch nedir?

### Cevap

Projenin bağımsız bir geliştirme çizgisidir.

Branch kullanılarak ana kodu doğrudan etkilemeden yeni özellikler veya düzeltmeler geliştirilebilir.

---

## Kart 24

### Soru

`main` nedir?

### Cevap

Repository'nin ana geliştirme branch'i olarak yaygın şekilde kullanılan branch adıdır.

Ancak `main`, Git tarafından zorunlu tutulan özel bir isim değildir. İstenirse farklı bir ana branch adı kullanılabilir.

---

## Kart 25

### Soru

`HEAD` nedir?

### Cevap

Git'te şu anda üzerinde çalışılan branch'i veya commit'i gösteren işaretçidir.

Çoğu durumda `HEAD`, aktif branch'in son commit'ini işaret eder.

---

## Kart 26

### Soru

Commit hash nedir?

### Cevap

Her commit'i tanımlayan benzersiz kimlik değeridir.

`git log --oneline` çıktısında hash değerinin kısaltılmış hali gösterilir.

Örnek:

```text
70bcdfc feat: add hello endpoint
```

---

## Kart 27

### Soru

`origin` nedir?

### Cevap

Uzak repository bağlantısına verilen standart kısa addır.

`origin` özel veya zorunlu bir isim değildir ancak Git projelerinde yaygın olarak kullanılır.

---

## Kart 28

### Soru

`origin/main` neyi ifade eder?

### Cevap

`origin` adlı uzak repository'deki `main` branch'inin yerel referansını ifade eder.

---

## Kart 29

### Soru

`git remote -v` ne gösterir?

### Cevap

Repository'ye tanımlanmış uzak bağlantıların fetch ve push adreslerini gösterir.

---

## Kart 30

### Soru

`git branch -vv` ne gösterir?

### Cevap

Yerel branch'leri, aktif branch'i, branch'lerin son commit bilgilerini ve takip ettikleri remote branch'leri gösterir.

---

## Kart 31

### Soru

`git log --oneline` ne gösterir?

### Cevap

Commit geçmişini kısa commit hash'i ve commit mesajıyla tek satırlık biçimde gösterir.

---

## Kart 32

### Soru

`git push -u origin main` komutundaki `-u` ne yapar?

### Cevap

Yerel `main` branch'i ile uzak `origin/main` branch'i arasında takip ilişkisi kurar.

Bu ilişki kurulduktan sonra sonraki gönderimlerde çoğunlukla yalnızca şu komut yeterlidir:

```powershell
git push
```

---

## Kart 33

### Soru

`working tree clean` ne anlama gelir?

### Cevap

Working directory veya staging area içinde commit edilmemiş değişiklik bulunmadığını ifade eder.

Ayrıca takip edilmemiş bir dosya da bulunmuyorsa repository temiz durumdadır.

---

## Kart 34

### Soru

`Get-Location` ne yapar?

### Cevap

PowerShell'de şu anda bulunulan klasörün tam yolunu gösterir.

---

## Kart 35

### Soru

`Get-ChildItem` ne yapar?

### Cevap

Bulunulan klasördeki dosya ve klasörleri listeler.

Linux sistemlerindeki `ls` komutuna benzer bir görevi vardır.

---

## Kart 36

### Soru

`Get-ChildItem -Force` ne yapar?

### Cevap

Normal öğelere ek olarak `.git` gibi gizli öğeleri de gösterir.

---

## Kart 37

### Soru

`Get-ChildItem -Recurse` ne yapar?

### Cevap

Bulunulan klasörün alt klasörlerine de girerek dosya ve klasörleri özyinelemeli biçimde listeler.

---

## Kart 38

### Soru

`README.md` dosyasının görevi nedir?

### Cevap

Projenin ana tanıtım ve kullanım dokümanıdır.

Genellikle şu bilgileri içerir:

- Projenin amacı
- Kullanılan teknolojiler
- Kurulum
- Çalıştırma
- Endpoint bilgileri
- Mimari yapı
- Katkı veya kullanım açıklamaları

---

## Kart 39

### Soru

`START_HERE.md` dosyasının görevi nedir?

### Cevap

Projede her çalışma oturumunda izlenecek başlangıç, öğrenme ve tekrar akışını açıklar.

---

## Kart 40

### Soru

`Canonical` ve `Journal` arasındaki fark nedir?

### Cevap

`Canonical`, projenin kalıcı ve temel bilgilerini tutar.

Örnek:

- Learning Path
- Proje mimarisi
- Teknik kararlar
- Repository yapısı

`Journal` ise gerçek ilerleme sürecini kaydeder.

Örnek:

- Günlük çalışmalar
- Tamamlanan adımlar
- Kullanılan komutlar
- Karşılaşılan problemler
- Session kayıtları

---

## Kart 41-50

Bu kart aralığı ileride öğrenilecek ileri Git ve GitHub konuları için ayrılmıştır.

Eklenebilecek konular:

- Feature branch çalışma düzeni
- Merge
- Rebase
- Pull request
- Fetch ve pull farkı
- Merge conflict çözümü
- Commit değiştirme
- Tag
- Release
- GitHub Actions temelleri

---

## Hızlı Git Akış Kartı

### Soru

Bir değişikliğin bilgisayardan GitHub'a gitme sırası nedir?

### Cevap

```text
Dosyada değişiklik yap
        │
        ▼
Working directory
        │
        │ git add
        ▼
Staging area
        │
        │ git commit
        ▼
Local repository
        │
        │ git push
        ▼
Remote repository
```

---

# Node.js ve Express Flashcard'ları

> Kart aralığı: 51-100

## Kart 51

### Soru

`app.ts` dosyasının görevi nedir?

### Cevap

`app.ts`, Express uygulamasını oluşturur ve uygulama bileşenlerini bir araya getirir.

Başlıca görevleri:

- Express uygulamasını oluşturmak
- Middleware'leri uygulamaya eklemek
- Route'ları uygulamaya bağlamak
- Hazırlanan `app` nesnesini dışarı aktarmak

Sunucuyu belirli bir portta başlatmaz. Sunucuyu başlatma sorumluluğu `server.ts` dosyasına aittir.

---

## Kart 52

### Soru

`server.ts` dosyasının görevi nedir?

### Cevap

`server.ts`, uygulamanın çalıştırılmasından sorumlu başlangıç dosyasıdır.

Başlıca görevleri:

- `app.ts` tarafından hazırlanan Express uygulamasını import etmek
- Port bilgisini kullanmak
- `app.listen()` çağrısıyla HTTP sunucusunu başlatmak
- Uygulamanın başladığını terminale bildirmek

Route veya endpoint iş mantığı içermemelidir.

---

## Kart 53

### Soru

Neden `app.listen()` çağrısını `app.ts` yerine `server.ts` içinde tutuyoruz?

### Cevap

Express uygulamasını hazırlamak ile HTTP sunucusunu başlatmak farklı sorumluluklardır.

Bu ayrım sayesinde:

- Kod daha okunabilir olur.
- Dosyaların görevleri netleşir.
- Bakım kolaylaşır.
- Uygulama gerçek bir port açılmadan test edilebilir.
- `app` nesnesi farklı yerlerde yeniden kullanılabilir.

Özet:

```text
app.ts
→ Uygulamayı hazırlar

server.ts
→ Hazırlanan uygulamayı çalıştırır
```

---

## Kart 54

### Soru

Route'ın görevi nedir?

### Cevap

Route, gelen HTTP isteğinin hangi handler tarafından işleneceğini belirler.

Örnek:

```typescript
router.get("/health", healthHandler);
```

Bu satır şu eşleştirmeyi yapar:

```text
GET /health
→ healthHandler
```

Route, endpoint'in asıl iş mantığını içermemelidir.

---

## Kart 55

### Soru

Handler'ın görevi nedir?

### Cevap

Handler, route tarafından kendisine yönlendirilen HTTP isteğini işler ve HTTP cevabını oluşturur.

Başlıca görevleri:

- Request verisini almak
- Gerekli fonksiyonları çağırmak
- Response gövdesini hazırlamak
- HTTP durum kodunu belirlemek
- Cevabı istemciye göndermek

---

## Kart 56

### Soru

Route ile Handler arasındaki fark nedir?

### Cevap

Route, HTTP metodu ve URL ile uygun handler arasında eşleştirme yapar.

Handler ise kendisine yönlendirilen isteği işler ve response üretir.

Özet:

```text
Route
→ Nereye yönlendirileceğini belirler.

Handler
→ Yönlendirilen isteğin nasıl işleneceğini belirler.
```

---

## Kart 57

### Soru

Neden handler'ları ayrı dosyalarda tutuyoruz?

### Cevap

Her endpoint'in işleme mantığını bağımsız hale getirmek için ayrı dosyalarda tutarız.

Avantajları:

- Kod okunabilirliği artar.
- Dosyalar gereksiz büyümez.
- Endpointlerin bakımı kolaylaşır.
- Handler'lar ayrı ayrı test edilebilir.
- Bir endpointteki değişiklik diğer endpointleri daha az etkiler.

---

## Kart 58

### Soru

Workload katmanının görevi nedir?

### Cevap

Workload katmanı, HTTP request ve response işlemlerinden bağımsız olan çalışma veya hesaplama mantığını barındırır.

Bu projede workload katmanı CPU yükü oluşturan fonksiyonu içerir.

Örnek:

```text
work.handler.ts
→ HTTP isteğini karşılar.

cpu-workload.ts
→ CPU ağırlıklı işlemi gerçekleştirir.
```

---

## Kart 59

### Soru

Neden CPU workload kodunu `work.handler.ts` içine yazmadık?

### Cevap

Çünkü handler ile CPU işlemi farklı sorumluluklara sahiptir.

`work.handler.ts`:

- Request'i karşılar.
- Workload fonksiyonunu çağırır.
- Response üretir.

`cpu-workload.ts`:

- HTTP katmanını bilmez.
- CPU tüketen hesaplama işlemini gerçekleştirir.
- Sonucu handler'a döndürür.

Böylece HTTP katmanı ile çalışma mantığı birbirine karışmaz.

---

## Kart 60

### Soru

Separation of Concerns nedir?

### Cevap

Bir sistemdeki farklı sorumlulukların ayrı dosya, fonksiyon veya katmanlarda tutulması prensibidir.

Bu projedeki örnekler:

```text
server.ts
→ Sunucuyu başlatır.

app.ts
→ Express uygulamasını hazırlar.

routes
→ Endpoint eşleştirmelerini yapar.

handlers
→ HTTP isteklerini işler.

workload
→ CPU işlemini gerçekleştirir.
```

Avantajları:

- Daha okunabilir kod
- Daha kolay bakım
- Daha kolay test
- Daha düşük bağımlılık
- Daha kontrollü değişiklik

---

## Kart 61

### Soru

Yeni bir endpoint eklerken hangi dosyalar değişmelidir?

### Cevap

Mevcut mimaride genellikle şu iki değişiklik yeterlidir:

1. Yeni handler dosyası oluşturulur.
2. Route dosyasında endpoint, handler ile eşleştirilir.

Örneğin `/hello` endpoint'i için:

```text
handlers/hello.handler.ts
routes/index.ts
```

değiştirilir.

`app.ts` ve `server.ts` çoğu durumda değiştirilmez.

---

## Kart 62

### Soru

Neden `git add .` yerine belirli dosyaları stage etmeyi tercih ediyoruz?

### Cevap

Yalnızca yapılan mantıksal değişiklikle ilgili dosyaların commit'e girmesini sağlamak için belirli dosyaları stage ederiz.

Örnek:

```powershell
git add src/routes/index.ts src/handlers/hello.handler.ts
```

Avantajları:

- İlgisiz dosyalar yanlışlıkla commit edilmez.
- Commitler küçük ve anlaşılır kalır.
- Kod incelemesi kolaylaşır.
- Git geçmişi daha temiz olur.

---

## Kart 63

### Soru

`git diff --staged` neyi kontrol etmek için kullanılır?

### Cevap

Bir sonraki commit'e girecek değişiklikleri incelemek için kullanılır.

Commit atmadan önce şu soruyu cevaplamamıza yardım eder:

> Stage ettiğim değişikliklerin tamamı bu commit'in amacıyla ilgili mi?

---

## Kart 64

### Soru

`express()` ne yapar?

### Cevap

Yeni bir Express uygulama nesnesi oluşturur.

Örnek:

```typescript
const app = express();
```

Oluşturulan `app` nesnesi üzerinde:

- Middleware eklenebilir.
- Route tanımlanabilir.
- Router bağlanabilir.
- HTTP sunucusu başlatılabilir.

---

## Kart 65

### Soru

Express `Router` ne işe yarar?

### Cevap

Route tanımlarını ana Express uygulamasından ayrı bir modülde yönetmeyi sağlar.

Örnek:

```typescript
const router = Router();

router.get("/health", healthHandler);
```

Hazırlanan router daha sonra ana uygulamaya bağlanır:

```typescript
app.use(router);
```

---

## Kart 66

### Soru

`app.use(router)` ne yapar?

### Cevap

Router içinde tanımlanmış endpointleri ana Express uygulamasına bağlar.

Router içinde şu route varsa:

```typescript
router.get("/health", healthHandler);
```

ve uygulamada şu kullanım varsa:

```typescript
app.use(router);
```

endpoint şu adres üzerinden kullanılabilir:

```text
GET /health
```

---

## Kart 67

### Soru

`app.use("/api", router)` kullanılırsa ne olur?

### Cevap

Router içindeki bütün endpointlere `/api` prefix'i eklenir.

Router içinde:

```typescript
router.get("/health", healthHandler);
```

uygulamada:

```typescript
app.use("/api", router);
```

kullanılırsa endpoint şu hale gelir:

```text
GET /api/health
```

---

## Kart 68

### Soru

Neden `healthHandler()` yerine `healthHandler` yazıyoruz?

### Cevap

Express'e handler fonksiyonunun kendisini, yani fonksiyon referansını vermemiz gerekir.

Doğru kullanım:

```typescript
router.get("/health", healthHandler);
```

Express, istek geldiğinde handler'ı gerekli `Request` ve `Response` nesneleriyle çağırır.

Yanlış kullanım:

```typescript
router.get("/health", healthHandler());
```

Bu kullanım fonksiyonu uygulama başlarken hemen çalıştırmaya çalışır.

---

## Kart 69

### Soru

TypeScript'te `_req` parametresindeki alt çizgi ne anlatır?

### Cevap

Parametrenin fonksiyon tarafından bilinçli olarak kullanılmadığını anlatır.

Örnek:

```typescript
export const helloHandler = (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello",
  });
};
```

Express handler yapısı request parametresini sağladığı halde bu endpoint request içeriğine ihtiyaç duymamaktadır.

---

## Kart 70

### Soru

`Request` ve `Response` tipleri neden kullanılır?

### Cevap

Express handler parametrelerine TypeScript tip güvenliği sağlamak için kullanılır.

Örnek:

```typescript
import { Request, Response } from "express";
```

Bu tipler sayesinde:

- Request özellikleri için otomatik tamamlama alınır.
- Yanlış özellik kullanımları daha erken fark edilir.
- Response metotları güvenli şekilde kullanılabilir.
- Kodun ne tür nesnelerle çalıştığı açıkça görünür.

---

## Kart 71

### Soru

Environment variable nedir?

### Cevap

Uygulama yapılandırmasının kaynak kodun dışından verilmesini sağlayan değişkendir.

Bu projedeki örnekler:

```env
PORT=3000
SERVICE_NAME=service-a
APP_VERSION=1.0.0
```

Environment variable kullanmak, aynı uygulamanın farklı ortamlarda farklı ayarlarla çalıştırılabilmesini sağlar.

---

## Kart 72

### Soru

`dotenv.config()` ne yapar?

### Cevap

`.env` dosyasındaki değerleri okuyarak `process.env` üzerinden erişilebilir hale getirir.

Örnek:

```typescript
dotenv.config();

const port = process.env.PORT;
```

Environment değerleri okunmadan önce çağrılması gerekir.

---

## Kart 73

### Soru

Neden `process.env.PORT` değerini `Number()` ile dönüştürüyoruz?

### Cevap

Environment variable değerleri string olarak okunur.

Örneğin `.env` dosyasında:

```env
PORT=3000
```

bulunsa bile uygulama içinde başlangıçta şu değerdedir:

```typescript
process.env.PORT === "3000"
```

Bu nedenle sayısal port değeri elde etmek için dönüştürme yapılır:

```typescript
const PORT = Number(process.env.PORT) || 3000;
```

---

## Kart 74

### Soru

`process.env.SERVICE_NAME || "service-a"` ifadesi ne yapar?

### Cevap

Önce `SERVICE_NAME` environment variable değerini kullanmaya çalışır.

Bu değer tanımlı değilse varsayılan olarak `"service-a"` değerini kullanır.

---

## Kart 75

### Soru

`GET /health` endpoint'inin amacı nedir?

### Cevap

Servisin çalışır durumda olduğunu ve HTTP isteğine cevap verebildiğini göstermek için kullanılır.

Bu projede response içinde şu bilgiler döndürülür:

- Servisin durumu
- Servis adı
- Uygulama sürümü
- Çalışma mesajı

İleride Kubernetes sağlık kontrollerinde kullanılabilir.

---

## Kart 76

### Soru

`GET /hello` endpoint'inin amacı nedir?

### Cevap

Servisin basit bir HTTP cevabı üretebildiğini gösteren karşılama endpoint'idir.

Ayrıca `SERVICE_NAME` environment variable değerinin response içinde kullanılmasını sağlar.

---

## Kart 77

### Soru

`GET /work` endpoint'inin amacı nedir?

### Cevap

Kontrollü şekilde CPU yükü oluşturmaktır.

Bu endpoint ileride şu çalışmalarda kullanılacaktır:

- k6 load testing
- Kubernetes CPU resource gözlemi
- Metrics Server
- Horizontal Pod Autoscaler
- Pod sayısının yük altında artması

---

## Kart 78

### Soru

Busy loop nedir?

### Cevap

Belirli bir süre boyunca CPU'yu sürekli çalıştıran ve boşta bırakmayan döngüdür.

Bu projede örnek olarak:

```typescript
while (Date.now() < endTime) {
  Math.sqrt(iterations);
  iterations++;
}
```

kullanılmıştır.

Amaç anlamlı bir hesaplama üretmek değil, CPU tüketimi oluşturmaktır.

---

## Kart 79

### Soru

CPU ağırlıklı işlem Node.js event loop'unu nasıl etkiler?

### Cevap

JavaScript kodu varsayılan olarak ana event loop üzerinde çalışır.

Uzun süren CPU ağırlıklı işlem event loop'u meşgul eder. Bu sırada aynı Node.js süreci diğer istekleri gecikmeli işleyebilir.

Üretim sistemlerinde uzun CPU işlemleri için şu yaklaşımlar değerlendirilebilir:

- Worker Threads
- Ayrı worker servisleri
- Job queue sistemleri
- Farklı süreçler

Bu projede event loop bilinçli olarak CPU yükü oluşturmak için kullanılmaktadır.

---

## Kart 80

### Soru

Refactor nedir?

### Cevap

Kodun dış davranışını değiştirmeden iç yapısını iyileştirme işlemidir.

Örneğin `/health` endpoint'i aynı cevabı vermeye devam ederken:

- `app.ts`
- `server.ts`
- `routes`
- `handlers`

katmanlarına ayrılması bir refactor işlemidir.

---

## Kart 81

### Soru

Feature ile refactor arasındaki fark nedir?

### Cevap

Feature, sisteme kullanıcı veya istemci tarafından gözlemlenebilen yeni bir davranış ekler.

Örnek:

```text
GET /hello
```

Refactor ise mevcut davranışı değiştirmeden kodun iç yapısını düzenler.

Örnek:

```text
app.ts ile server.ts dosyalarını ayırmak
```

Conventional Commit örnekleri:

```text
feat: add hello endpoint
refactor: separate express app from server startup
```

---

## Kart 82

### Soru

`Cannot GET /health` hatası neyi gösterir?

### Cevap

HTTP sunucusuna erişilebildiğini fakat çalışan Express uygulamasında istenen HTTP metodu ve path ile eşleşen route bulunmadığını gösterir.

Kontrol edilmesi gereken noktalar:

- URL doğru mu?
- HTTP metodu doğru mu?
- Doğru port mu kullanılıyor?
- Route tanımlandı mı?
- Router uygulamaya bağlandı mı?
- Doğru `app` nesnesi çalıştırılıyor mu?
- Eski bir Node.js süreci aynı portu kullanıyor mu?

---

---

# Docker Flashcard'ları

### Kart 54

**Soru:** Docker hangi problemi çözer?

**Cevap:**
Uygulamanın farklı bilgisayarlarda aynı çalışma ortamıyla çalışmasını sağlar ve ortam bağımlılıklarını ortadan kaldırır.

---

### Kart 55

**Soru:** Docker Image nedir?

**Cevap:**
Container oluşturmak için kullanılan, uygulama ve çalışma ortamını içeren değiştirilemez şablondur.

---

### Kart 56

**Soru:** Docker Container nedir?

**Cevap:**
Bir Docker Image'dan oluşturulan çalışan izole uygulama örneğidir.

---

### Kart 57

**Soru:** Bir image'dan kaç container oluşturulabilir?

**Cevap:**
İstenildiği kadar container oluşturulabilir.

---

### Kart 58

**Soru:** Bir container kaç image'dan oluşturulabilir?

**Cevap:**
Bir container yalnızca tek bir image'dan oluşturulur.

---

### Kart 59

**Soru:** Dockerfile nedir?

**Cevap:**
Docker image oluşturmak için kullanılan talimat dosyasıdır.

---

### Kart 60

**Soru:** `FROM` komutunun görevi nedir?

**Cevap:**
Image'ın hangi base image üzerine oluşturulacağını belirler.

---

### Kart 61

**Soru:** Neden `node:22-alpine` kullandık?

**Cevap:**
Belirli bir Node.js sürümünü sabitlemek ve daha küçük, hafif bir Linux tabanlı image kullanmak için.

---

### Kart 62

**Soru:** `WORKDIR` ne işe yarar?

**Cevap:**
Container içindeki çalışma dizinini belirler ve sonraki komutlar bu dizinde çalışır.

---

### Kart 63

**Soru:** `COPY package*.json ./` ne yapar?

**Cevap:**
`package.json` ve `package-lock.json` dosyalarını container içindeki çalışma dizinine kopyalar.

---

### Kart 64

**Soru:** Neden önce yalnızca package dosyalarını kopyalıyoruz?

**Cevap:**
Docker layer cache'i verimli kullanmak ve bağımlılıkları gereksiz yere tekrar kurmamak için.

---

### Kart 65

**Soru:** `RUN npm install` ne zaman çalışır?

**Cevap:**
Image build edilirken çalışır.

---

### Kart 66

**Soru:** `COPY . .` komutundaki iki nokta aynı şeyi mi ifade eder?

**Cevap:**
Hayır. İlk nokta host üzerindeki build context'i, ikinci nokta container içindeki hedef dizini ifade eder.

---

### Kart 67

**Soru:** `.dockerignore` dosyasının görevi nedir?

**Cevap:**
Docker build context'ine alınmayacak dosya ve klasörleri belirler.

---

### Kart 68

**Soru:** `.gitignore` ile `.dockerignore` arasındaki fark nedir?

**Cevap:**
`.gitignore` Git'in takip etmeyeceği dosyaları, `.dockerignore` ise Docker'ın image'a dahil etmeyeceği dosyaları belirler.

---

### Kart 69

**Soru:** Neden `.env` dosyasını image içine kopyalamıyoruz?

**Cevap:**
Ortama özel bilgileri image'a gömmemek, güvenliği ve taşınabilirliği korumak için.

---

### Kart 70

**Soru:** `RUN npm run build` ne yapar?

**Cevap:**
TypeScript kaynak kodunu JavaScript'e derler.

---

### Kart 71

**Soru:** `src` ile `dist` arasındaki fark nedir?

**Cevap:**
`src` kaynak TypeScript kodunu, `dist` ise derlenmiş JavaScript çıktısını içerir.

---

### Kart 72

**Soru:** `CMD` ne zaman çalışır?

**Cevap:**
Container başlatıldığında çalışır.

---

### Kart 73

**Soru:** `RUN` ile `CMD` arasındaki fark nedir?

**Cevap:**
`RUN` image build edilirken çalışır. `CMD` ise container çalıştırıldığında çalışır.

---

### Kart 74

**Soru:** `docker build` ne yapar?

**Cevap:**
Dockerfile'daki talimatları kullanarak image oluşturur.

---

### Kart 75

**Soru:** `docker run` ne yapar?

**Cevap:**
Bir image'dan yeni bir container oluşturur ve çalıştırır.

---

### Kart 76

**Soru:** `docker ps` ne gösterir?

**Cevap:**
Yalnızca çalışan container'ları gösterir.

---

### Kart 77

**Soru:** `docker ps -a` ne gösterir?

**Cevap:**
Çalışan ve durmuş tüm container'ları gösterir.

---

### Kart 78

**Soru:** `docker logs` ne gösterir?

**Cevap:**
Container'ın ürettiği log çıktısını gösterir.

---

### Kart 79

**Soru:** `docker stop` ne yapar?

**Cevap:**
Çalışan container'ı durdurur ancak silmez.

---

### Kart 80

**Soru:** `docker start` ne yapar?

**Cevap:**
Daha önce oluşturulmuş ve durmuş container'ı yeniden çalıştırır.

---

### Kart 81

**Soru:** `docker rm` ne yapar?

**Cevap:**
Container'ı sistemden siler.

---

### Kart 82

**Soru:** `docker stop` işleminden sonra neden `docker start` kullanıyoruz?

**Cevap:**
Çünkü container silinmemiştir. Aynı container'ı yeniden çalıştırmak için `docker start` kullanılır. `docker run` ise yeni bir container oluşturur.

---

### Kart 83

**Soru:** Container silinirse image da silinir mi?

**Cevap:**
Hayır. Image sistemde kalmaya devam eder ve tekrar yeni container oluşturmak için kullanılabilir.

---

# Docker Compose Flashcards

## Docker Compose nedir?
Birden fazla container tabanlı servisi tek bir YAML dosyası üzerinden tanımlamayı ve birlikte yönetmeyi sağlar.

---

## Docker Compose neden kullanılır?
Birden fazla servisi tek komutla build etmek, çalıştırmak, durdurmak ve yönetmek için kullanılır.

---

## `compose.yaml` dosyasının görevi nedir?
Servislerin nasıl build edileceğini, çalıştırılacağını ve birbirleriyle nasıl iletişim kuracağını tanımlar.

---

## `services:` neyi ifade eder?
Docker Compose tarafından yönetilecek servislerin tanımlandığı ana bölümdür.

---

## Compose service name nedir?
`service-a` ve `service-b` gibi servis isimleridir.

---

## Compose service name neden önemlidir?
Aynı Compose network içindeki servisler birbirlerine bu isimlerle ulaşabilir.

---

## Service A, Service B'ye Compose içinde hangi adresle ulaşır?
`http://service-b:3001`

---

## Service A neden `localhost:3001` kullanmaz?
Çünkü container içindeki `localhost` yalnızca o container'ı ifade eder.

---

## Host bilgisayardan Service B'ye hangi adresle ulaşılır?
`http://localhost:3001`

---

## Host ile container aynı network perspektifine sahip midir?
Hayır. Host ve container farklı network ortamlarında çalışır.

---

## `build.context` ne işe yarar?
Docker build sırasında kullanılacak build context klasörünü belirtir.

---

## `ports` ne işe yarar?
Container portunu host makine üzerinde yayınlar (publish eder).

---

## `"3000:3000"` ifadesinde soldaki port neyi ifade eder?
Host portunu.

---

## `"3000:3000"` ifadesinde sağdaki port neyi ifade eder?
Container portunu.

---

## Service B için port publish etmek Service A'nın ona ulaşması için zorunlu mudur?
Hayır. Aynı Compose network içinde servisler birbirlerine doğrudan ulaşabilir.

---

## `env_file` ne işe yarar?
Environment variable değerlerini dosyadan yükler.

---

## `environment` ne işe yarar?
Environment variable tanımlar veya mevcut değerleri override eder.

---

## `env_file` ile `environment` aynı değişkeni tanımlarsa hangisi geçerli olur?
`environment` altında verilen değer geçerli olur.

---

## Service A'da neden `SERVICE_B_URL` override edildi?
Compose ortamında Service B'nin adresi `service-b` olduğu için.

---

## Docker Compose neden otomatik network oluşturur?
Servislerin aynı ağ üzerinde haberleşebilmesini sağlamak için.

---

## Compose'un oluşturduğu varsayılan network adı nasıl oluşur?
`<project-name>_default`

---

## Docker DNS ne işe yarar?
Service name'leri ilgili container IP adreslerine çözer.

---

## Neden container IP adresini kullanmıyoruz?
Container IP adresi değişebilir. Service name daha stabildir.

---

## `docker compose config` ne işe yarar?
Compose dosyasını doğrular ve Docker Compose'un yorumladığı son yapılandırmayı gösterir.

---

## `docker compose config` container oluşturur mu?
Hayır.

---

## `docker compose up --build` ne yapar?
Image'ları build eder ve servisleri çalıştırır.

---

## `docker compose ps` ne gösterir?
Yalnızca ilgili Compose projesine ait container'ları gösterir.

---

## `docker compose logs` ne işe yarar?
Compose servislerinin loglarını gösterir.

---

## Healthcheck ne işe yarar?
Container içindeki uygulamanın gerçekten çalışıp çalışmadığını kontrol eder.

---

## `depends_on` ve `condition: service_healthy` birlikte ne sağlar?
Service B healthy olmadan Service A'nın başlamasını engeller.


# Flashcards — k6 Load Testing & Performance Analysis

## Soru 1
Virtual User (VU) nedir?

Cevap:
Gerçek bir kullanıcıyı simüle eden sanal kullanıcıdır. Her VU kendi iteration döngüsünü bağımsız olarak çalıştırır.

---

## Soru 2
Iteration nedir?

Cevap:
Bir Virtual User'ın test senaryosunu baştan sona bir kez çalıştırmasıdır.

---

## Soru 3
Throughput neyi ifade eder?

Cevap:
Sistemin bir saniyede başarıyla tamamladığı request sayısını ifade eder ve genellikle req/s olarak gösterilir.

---

## Soru 4
Latency nedir?

Cevap:
Bir request'in gönderilmesi ile cevabının alınması arasında geçen toplam süredir.

---

## Soru 5
Neden yalnızca average latency'ye bakılmaz?

Cevap:
Çünkü ortalama değer uzun süren requestleri gizleyebilir. Bu nedenle p90 ve p95 gibi percentile değerleri de incelenir.

---

## Soru 6
p95 değeri neyi ifade eder?

Cevap:
Requestlerin %95'inin bu süreden daha kısa sürede tamamlandığını gösterir.

---

## Soru 7
Median ile average arasındaki fark nedir?

Cevap:
Median ortadaki değeri gösterirken average tüm değerlerin ortalamasını alır ve uç değerlerden daha fazla etkilenir.

---

## Soru 8
http_req_failed metriği neyi gösterir?

Cevap:
Başarısız HTTP request oranını gösterir.

---

## Soru 9
check() fonksiyonunun amacı nedir?

Cevap:
Response'un beklenen koşulları sağlayıp sağlamadığını doğrular.

---

## Soru 10
Threshold nedir?

Cevap:
Test sırasında sağlanması gereken performans kabul kriteridir.

---

## Soru 11
Aşağıdaki threshold neyi ifade eder?

http_req_duration: ["p(95)<2000"]

Cevap:
Requestlerin %95'i 2 saniyeden kısa sürmelidir.

---

## Soru 12
Load Test'in amacı nedir?

Cevap:
Sistemin beklenen normal kullanıcı yükü altındaki performansını ölçmektir.

---

## Soru 13
Stress Test'in amacı nedir?

Cevap:
Sistemin kapasite sınırını ve saturation noktasını belirlemektir.

---

## Soru 14
stages yapısı ne için kullanılır?

Cevap:
Virtual User sayısını zaman içerisinde kademeli olarak artırmak veya azaltmak için kullanılır.

---

## Soru 15
Aşağıdaki stages neyi ifade eder?

10 → 50 → 100 → 0

Cevap:
Yük zamanla artırılır ve test sonunda kontrollü şekilde azaltılır.

---

## Soru 16
Saturation nedir?

Cevap:
Sistemin kapasitesine ulaşıp throughput artmazken latency'nin yükselmeye başladığı durumdur.

---

## Soru 17
Saturation'ın en önemli göstergesi nedir?

Cevap:
Throughput'un plato yapması, buna karşılık latency'nin artmaya devam etmesidir.

---

## Soru 18
Bizim Capacity Test sonucunda yaklaşık maksimum throughput kaç req/s olarak gözlemlendi?

Cevap:
Yaklaşık 10 req/s.

---

## Soru 19
VU sayısı artmasına rağmen throughput neden artmadı?

Cevap:
Çünkü Service A kapasitesine ulaştı. Yeni requestler daha hızlı işlenmek yerine beklemeye başladı.

---

## Soru 20
VU sayısı arttığında latency neden yükseldi?

Cevap:
CPU-bound işlemler nedeniyle requestler sırada bekledi ve bekleme süresi toplam response süresine eklendi.

---

## Soru 21
/work endpoint'i neden /hello endpoint'inden daha yavaştır?

Cevap:
Çünkü CPU-bound workload çalıştırarak işlemci üzerinde yoğun işlem gerçekleştirir.

---

## Soru 22
Capacity Test'in amacı nedir?

Cevap:
Farklı concurrency seviyelerinde sistemin gerçek kapasitesini ve saturation bölgesini belirlemektir.

---

## Soru 23
__ENV.VUS kullanmanın avantajı nedir?

Cevap:
Kodu değiştirmeden aynı test dosyasını farklı Virtual User değerleriyle çalıştırabilmeyi sağlar.

---

## Soru 24
"Configuration over Code" yaklaşımı neyi ifade eder?

Cevap:
Davranışı kodu değiştirerek değil, dışarıdan verilen konfigürasyon ile değiştirmeyi ifade eder.

---

## Soru 25
Bu performans analizinin Kubernetes tarafındaki temel amacı nedir?

Cevap:
Tek pod'un kapasitesini ölçerek HPA ve pod ölçeklendirmesinin throughput ile latency üzerindeki etkisini karşılaştırabilmektir.


# Kubernetes Flashcards — 25 Kart

## 1 — Deployment

**Soru:** Kubernetes'te Deployment ne işe yarar?

**Cevap:** Uygulamanın desired state'ini tanımlar ve Pod'ların ReplicaSet üzerinden yönetilmesini sağlar.

---

## 2 — Replica

**Soru:** `replicas: 2` ne anlama gelir?

**Cevap:** Kubernetes'e sadece bir kere 2 Pod oluştur demek değildir. İstenen durumda her zaman 2 Pod çalışsın anlamına gelir.

```yaml
spec:
  replicas: 2
```

Kubernetes mevcut durumu sürekli desired state ile karşılaştırır.

```text
Desired State = 2 Pod
Current State = 1 Pod

↓

Kubernetes eksik Pod'u oluşturur.

↓

Current State = 2 Pod
```

---

## 3 — Deployment → ReplicaSet → Pod

**Soru:** Deployment, ReplicaSet ve Pod arasındaki ilişki nedir?

**Cevap:**

```text
Deployment
↓
ReplicaSet
↓
Pod
↓
Container
```

Deployment istenen durumu tanımlar.

ReplicaSet gerekli Pod sayısını korur.

Pod ise container'ı çalıştırır.

---

## 4 — Deployment Selector

**Soru:** Deployment selector ne işe yarar?

**Cevap:** Deployment'ın hangi Pod'ları yöneteceğini belirler.

Örnek:

```yaml
selector:
  matchLabels:
    app: service-a
```

Bu Deployment `app=service-a` label'ına sahip Pod'ları yönetir.

---

## 5 — Pod Template Label

**Soru:** `template.metadata.labels` ne işe yarar?

**Cevap:** Deployment tarafından oluşturulacak Pod'lara hangi label'ların verileceğini belirler.

Örnek:

```yaml
template:
  metadata:
    labels:
      app: service-a
```

Oluşturulan Pod:

```text
app=service-a
```

label'ına sahip olur.

---

## 6 — Selector ve Label

**Soru:** Deployment selector ile Pod template label neden eşleşmelidir?

**Cevap:** Deployment'ın oluşturduğu Pod'ları kendi yönettiği Pod'lar olarak tanıyabilmesi için.

Örnek:

```yaml
selector:
  matchLabels:
    app: service-a

template:
  metadata:
    labels:
      app: service-a
```

İki taraf da:

```text
app=service-a
```

olduğu için eşleşir.

---

## 7 — Kubernetes Service

**Soru:** Kubernetes Service ne işe yarar?

**Cevap:** Pod'lara stabil bir ağ erişim noktası sağlar ve gelen trafiği uygun Pod'lara yönlendirir.

Pod'ların IP adresleri değişebilir.

Service sayesinde:

```text
Pod IP
```

yerine:

```text
service-a
service-b
```

gibi stabil isimler kullanılabilir.

---

## 8 — Deployment Selector ve Service Selector

**Soru:** Deployment selector ile Service selector arasındaki fark nedir?

**Cevap:**

```text
Deployment selector
↓
Hangi Pod'ları yöneteceğini belirler.

Service selector
↓
Hangi Pod'lara trafik göndereceğini belirler.
```

Yani ikisi de label kullanır fakat görevleri farklıdır.

---

## 9 — Service Pod Seçimi

**Soru:** Kubernetes Service doğrudan Deployment'ı mı seçer?

**Cevap:** Hayır.

Service doğrudan Pod'ları label üzerinden seçer.

Örnek:

```yaml
selector:
  app: service-b
```

Akış:

```text
Service
↓
selector: app=service-b
↓
app=service-b label'ına sahip Pod'lar
```

---

## 10 — port ve targetPort

**Soru:** `port` ile `targetPort` arasındaki fark nedir?

**Cevap:**

```text
port
↓
Service'in sunduğu port

targetPort
↓
Trafiğin Pod üzerinde gönderileceği port
```

Örneğin:

```yaml
ports:
  - port: 3001
    targetPort: 3001
```

Akış:

```text
Service :3001
↓
Pod :3001
↓
Express
```

---

## 11 — Farklı port ve targetPort

**Soru:** `port: 80` ve `targetPort: 3000` kullanılabilir mi?

**Cevap:** Evet.

Örneğin:

```yaml
ports:
  - port: 80
    targetPort: 3000
```

Akış:

```text
Client
↓
Service :80
↓
Pod :3000
↓
Express
```

Service'in portuyla uygulamanın container içerisindeki portunun aynı olması zorunlu değildir.

---

## 12 — Pod IP

**Soru:** Pod IP adreslerini neden doğrudan kullanmak istemeyiz?

**Cevap:** Pod'lar geçicidir.

Bir Pod silinip yeniden oluşturulduğunda yeni bir IP adresi alabilir.

Bu nedenle:

```text
http://10.244.1.4:3001
```

gibi doğrudan Pod IP kullanmak yerine:

```text
http://service-b:3001
```

gibi Kubernetes Service adresi kullanılır.

---

## 13 — Service Discovery

**Soru:** Kubernetes Service Discovery neden önemlidir?

**Cevap:** Servislerin değişken Pod IP adreslerini bilmeden birbirlerine stabil Service isimleri üzerinden ulaşmasını sağlar.

Örneğin Service A:

```text
service-b
```

adını kullanarak Service B'ye ulaşabilir.

Kubernetes DNS bu ismi çözer.

---

## 14 — Service A → Service B

**Soru:** Service A, Service B'ye Kubernetes içerisinde hangi adresle ulaşıyor?

**Cevap:**

```text
http://service-b:3001
```

Buradaki:

```text
service-b
```

bir Pod adı veya Pod IP adresi değildir.

Kubernetes Service adıdır.

---

## 15 — curl-test Pod

**Soru:** `curl-test` Pod'unun görevi nedir?

**Cevap:** Kubernetes cluster içerisinden HTTP istekleri göndermek için kullandığımız geçici test client'ıdır.

Uygulamamızın gerçek mimarisinin bir parçası değildir.

Örneğin:

```text
curl-test
↓
GET http://service-a:3000/hello
↓
service-a Service
↓
Service A Pod
```

şeklinde cluster içi bağlantıyı test etmek için kullanılır.

---

## 16 — Service-to-Service Communication

**Soru:** Service A → Service B iletişimini test ederken gerçekleşen temel akış nedir?

**Cevap:**

```text
curl-test Pod
↓
GET http://service-a:3000/call-service-b
↓
Kubernetes DNS
↓
service-a Kubernetes Service
↓
Service A Pod
↓
Express
↓
/call-service-b handler
↓
process.env.SERVICE_B_URL
↓
http://service-b:3001
↓
Kubernetes DNS
↓
service-b Kubernetes Service
↓
Service B Pod
↓
Express :3001
↓
GET /hello
↓
Service B Response
↓
Service A
↓
curl-test
```

Bu test Kubernetes içerisindeki uçtan uca servis iletişimini doğrular.

---

## 17 — Rollout

**Soru:** Kubernetes'te Rollout nedir?

**Cevap:** Deployment üzerinde yapılan bir değişikliğin yeni Pod'lara uygulanması sürecidir.

Örneğin Deployment'a yeni bir environment variable veya probe eklediğimizde Pod Template değişir.

```text
Deployment değişir
↓
Yeni ReplicaSet oluşur
↓
Yeni Pod'lar oluşturulur
↓
Eski Pod'lar kademeli kaldırılır
↓
Yeni versiyona geçilir
```

Bu geçiş sürecine rollout denir.

---

## 18 — Pod Template Değişikliği

**Soru:** Deployment içerisindeki Pod Template değiştiğinde Kubernetes ne yapar?

**Cevap:** Mevcut Pod'ların içeriğini doğrudan değiştirmez.

Yeni bir ReplicaSet oluşturur ve yeni configuration'a sahip Pod'ları oluşturur.

```text
Eski ReplicaSet
↓
Eski Pod'lar

Deployment değişikliği
↓

Yeni ReplicaSet
↓
Yeni Pod'lar
```

Yeni Pod'lar hazır oldukça eski Pod'lar kademeli olarak kaldırılır.

---

## 19 — kubectl rollout status

**Soru:** `kubectl rollout status deployment/service-a` ne işe yarar?

**Cevap:** Service A Deployment için gerçekleştirilen rollout sürecinin durumunu takip eder.

```powershell
kubectl rollout status deployment/service-a
```

Bu komut yeni rollout başlatmaz.

Mevcut rollout'un tamamlanıp tamamlanmadığını kontrol eder.

Başarılı olduğunda buna benzer bir çıktı alınır:

```text
deployment "service-a" successfully rolled out
```

---

## 20 — ConfigMap

**Soru:** Kubernetes ConfigMap ne işe yarar?

**Cevap:** Gizli olmayan configuration değerlerini uygulama ve Deployment tanımından ayrı yönetmemizi sağlar.

Örneğin:

```yaml
data:
  SERVICE_B_URL: "http://service-b:3001"
```

Böylece servis adresi doğrudan Deployment içerisine hard-code edilmek zorunda kalmaz.

---

## 21 — SERVICE_B_URL ConfigMap

**Soru:** Service A için oluşturduğumuz ConfigMap içerisinde hangi önemli değeri tuttuk?

**Cevap:**

```text
SERVICE_B_URL=http://service-b:3001
```

Bu değer Service A'nın Service B'ye hangi adres üzerinden ulaşacağını belirler.

Akış:

```text
Service A
↓
SERVICE_B_URL
↓
http://service-b:3001
↓
Service B
```

---

## 22 — configMapKeyRef

**Soru:** `configMapKeyRef` ne işe yarar?

**Cevap:** ConfigMap içerisindeki belirli bir key'in değerini container environment variable olarak kullanmamızı sağlar.

Örneğin:

```yaml
env:
  - name: SERVICE_B_URL
    valueFrom:
      configMapKeyRef:
        name: service-a-config
        key: SERVICE_B_URL
```

Akış:

```text
service-a-config
↓
SERVICE_B_URL
↓
configMapKeyRef
↓
Container Environment Variable
↓
process.env.SERVICE_B_URL
```

Node.js uygulaması daha sonra:

```typescript
process.env.SERVICE_B_URL
```

ile bu değere ulaşabilir.

---

## 23 — ConfigMap Güncellemesi

**Soru:** ConfigMap değiştirildiğinde çalışan container'ın environment variable değeri otomatik değişir mi?

**Cevap:** Hayır.

Environment variable Pod oluşturulurken container'a aktarılır.

Örneğin:

```text
ConfigMap
SERVICE_B_URL=A
↓
Pod oluşturuldu
↓
Container SERVICE_B_URL=A
```

Daha sonra ConfigMap:

```text
SERVICE_B_URL=B
```

olarak değiştirilirse çalışan container otomatik olarak `B` değerine geçmez.

Yeni değerin environment variable olarak alınması için Pod'un yeniden oluşturulması gerekir.

Örneğin:

```powershell
kubectl rollout restart deployment/service-a
```

kullanılabilir.

---

## 24 — Readiness Probe

**Soru:** Readiness Probe neyi kontrol eder?

**Cevap:** Pod'un şu anda trafik almaya hazır olup olmadığını kontrol eder.

Biz Service A için:

```yaml
readinessProbe:
  httpGet:
    path: /health
    port: 3000

  initialDelaySeconds: 5
  periodSeconds: 10
  timeoutSeconds: 2
  failureThreshold: 3
  successThreshold: 1
```

kullandık.

Mantık:

```text
Kubernetes
↓
GET /health :3000
↓
Başarılı
↓
Pod Ready
↓
Service bu Pod'a trafik gönderebilir
```

Readiness sürekli başarısız olursa:

```text
Pod Running olabilir
↓
Ready = False
↓
Service Pod'a trafik göndermez
```

Readiness başarısızlığı temel olarak container'ı restart etmek için değil, Pod'un trafik alıp almamasını belirlemek için kullanılır.

---

## 25 — Liveness ve Readiness Farkı

**Soru:** Liveness Probe ile Readiness Probe arasındaki temel fark nedir?

**Cevap:**

Readiness şu soruyu sorar:

```text
Bu Pod şu anda trafik almaya hazır mı?
```

Başarısız olduğunda:

```text
Readiness başarısız
↓
Pod NotReady
↓
Service trafiğinden çıkar
```

Liveness ise şu soruyu sorar:

```text
Bu container sağlıklı şekilde yaşamaya devam ediyor mu?
```

Biz Service A için:

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000

  initialDelaySeconds: 10
  periodSeconds: 10
  timeoutSeconds: 2
  failureThreshold: 3
```

kullandık.

Tekrarlayan başarısızlıklarda:

```text
Liveness başarısız
↓
Container sağlıksız kabul edilir
↓
Kubernetes container'ı restart edebilir
```

En önemli fark:

```text
Readiness
→ Trafik almaya hazır mı?
→ Başarısızsa trafikten çıkar.

Liveness
→ Container sağlıklı mı?
→ Sürekli başarısızsa restart edilir.
```

# Flashcards — Metrics Server, Resources ve HPA

## Flashcard 01

**Soru:** Metrics Server'ın Kubernetes'teki temel görevi nedir?

**Cevap:** Node'lardaki Kubelet'lerden CPU ve memory resource metric'lerini toplayıp Kubernetes Metrics API üzerinden kullanılabilir hale getirmektir.

---

## Flashcard 02

**Soru:** Metrics Server metric'leri hangi component üzerinden toplar?

**Cevap:** Her Node üzerinde çalışan Kubelet üzerinden toplar.

---

## Flashcard 03

**Soru:** Metrics Server ile HPA aynı şey midir?

**Cevap:** Hayır.

Metrics Server metric sağlar.

HPA bu metric'leri kullanarak replica sayısı hakkında scaling kararı verir.

```text
Metrics Server
↓
Metrics
↓
HPA
↓
Scaling kararı
```

---

## Flashcard 04

**Soru:** Pod'ların CPU ve memory kullanımını hangi komutla görebiliriz?

**Cevap:**

```powershell
kubectl top pods
```

---

## Flashcard 05

**Soru:** Kubernetes Node'larının CPU ve memory kullanımını hangi komutla görebiliriz?

**Cevap:**

```powershell
kubectl top nodes
```

---

## Flashcard 06

**Soru:** Kubernetes CPU metric'indeki `m` ne anlama gelir?

**Cevap:** Millicore anlamına gelir.

```text
1000m = 1 CPU Core
500m  = 0.5 CPU Core
100m  = 0.1 CPU Core
```

---

## Flashcard 07

**Soru:** `kubectl top pods` çıktısındaki `402m` CPU yaklaşık ne anlama gelir?

**Cevap:**

Yaklaşık:

```text
0.402 CPU Core
```

kullanımı anlamına gelir.

---

## Flashcard 08

**Soru:** Resource Request nedir?

**Cevap:** Kubernetes'e container'ın ihtiyaç duyduğu resource miktarı hakkında verilen değerdir.

Scheduler Pod'u hangi Node'a yerleştireceğini hesaplarken request değerlerini dikkate alır.

---

## Flashcard 09

**Soru:** `cpu request: 100m` container'ın sürekli `100m` CPU kullanacağı anlamına gelir mi?

**Cevap:** Hayır.

Gerçek kullanım:

```text
3m
50m
200m
```

gibi farklı değerlerde olabilir.

Request ile Usage aynı şey değildir.

---

## Flashcard 10

**Soru:** Resource Usage nedir?

**Cevap:** Container'ın o anda gerçekten kullandığı resource miktarıdır.

Örneğin:

```text
CPU Request = 100m
CPU Usage   = 25m
```

olabilir.

---

## Flashcard 11

**Soru:** Resource Limit nedir?

**Cevap:** Container'ın kullanabileceği resource için belirlenen üst sınırdır.

Örneğin:

```text
CPU Limit    = 500m
Memory Limit = 256Mi
```

---

## Flashcard 12

**Soru:** CPU limit aşılmaya çalışıldığında genellikle ne olur?

**Cevap:** CPU throttling uygulanabilir.

Container daha fazla CPU kullanmak ister fakat kullanım sınırlandırılır.

---

## Flashcard 13

**Soru:** Memory limit aşılırsa ne olabilir?

**Cevap:** Container OOM nedeniyle terminate edilebilir.

CPU limit ve memory limit davranışları bu yüzden aynı değildir.

---

## Flashcard 14

**Soru:** Service A için kullandığımız resource request ve limit değerleri nelerdir?

**Cevap:**

```yaml
resources:
  requests:
    cpu: "100m"
    memory: "64Mi"
  limits:
    cpu: "500m"
    memory: "256Mi"
```

---

## Flashcard 15

**Soru:** Request, Usage ve Limit arasındaki temel fark nedir?

**Cevap:**

```text
Request
→ Kubernetes'e bildirilen resource ihtiyacı

Usage
→ Gerçek resource tüketimi

Limit
→ Kullanılabilecek resource üst sınırı
```

---

## Flashcard 16

**Soru:** Horizontal Scaling nedir?

**Cevap:** Uygulama instance veya Pod sayısının artırılıp azaltılmasıdır.

Örneğin:

```text
2 Pod
↓
3 Pod
↓
5 Pod
```

---

## Flashcard 17

**Soru:** Horizontal Scaling ile Vertical Scaling arasındaki fark nedir?

**Cevap:**

```text
Horizontal Scaling
→ Pod sayısını değiştirir.

Vertical Scaling
→ Tek Pod'un CPU/Memory kapasitesini değiştirir.
```

---

## Flashcard 18

**Soru:** HPA'nın açılımı nedir?

**Cevap:**

```text
Horizontal Pod Autoscaler
```

Metric'lere göre workload replica sayısını otomatik olarak değiştirebilir.

---

## Flashcard 19

**Soru:** HPA doğrudan Pod oluşturur mu?

**Cevap:** Hayır.

Temel zincir:

```text
HPA
↓
Deployment
↓
ReplicaSet
↓
Pod
```

HPA replica ihtiyacını değiştirir, Pod'ları Deployment ve ReplicaSet yönetir.

---

## Flashcard 20

**Soru:** `scaleTargetRef` ne işe yarar?

**Cevap:** HPA'nın hangi Kubernetes workload'unu scale edeceğini belirtir.

Bizim projede:

```text
Deployment/service-a
```

hedeflenmiştir.

---

## Flashcard 21

**Soru:** Service A HPA için `minReplicas` ve `maxReplicas` değerlerimiz nedir?

**Cevap:**

```text
minReplicas = 2
maxReplicas = 5
```

Yani HPA Service A'yı 2 ile 5 Pod arasında ölçekleyebilir.

---

## Flashcard 22

**Soru:** Service A HPA'nın CPU utilization target değeri nedir?

**Cevap:**

```text
50%
```

Manifestte:

```yaml
averageUtilization: 50
```

şeklinde tanımlanmıştır.

---

## Flashcard 23

**Soru:** CPU Request `100m`, CPU Usage `50m` ise yaklaşık utilization kaçtır?

**Cevap:**

```text
50m / 100m × 100
=
50%
```

---

## Flashcard 24

**Soru:** HPA CPU utilization değeri `%100` üzerine çıkabilir mi?

**Cevap:** Evet.

Örneğin:

```text
CPU Request = 100m
CPU Usage   = 200m
```

ise utilization yaklaşık:

```text
200%
```

olabilir.

---

## Flashcard 25

**Soru:** `kubectl get hpa` çıktısındaki:

```text
cpu: 67%/50%
```

ne anlama gelir?

**Cevap:**

```text
67%
→ mevcut ortalama CPU utilization

50%
→ hedef CPU utilization
```

Mevcut değer target'ın üzerindedir.

---

## Flashcard 26

**Soru:** Gerçek HPA stress testimizde Service A replica sayısı nasıl değişti?

**Cevap:**

```text
2 Pod
↓
3 Pod
↓
5 Pod
```

CPU yükü arttığında HPA otomatik scale-up gerçekleştirdi.

---

## Flashcard 27

**Soru:** HPA scale-up sırasında yeni bir Pod hangi durumları geçebilir?

**Cevap:**

```text
Pending
↓
Running 0/1
↓
Running 1/1
```

`Running` olmak her zaman `Ready` olmak anlamına gelmez.

---

## Flashcard 28

**Soru:** Scale Down Stabilization neden vardır?

**Cevap:** CPU kısa süreli düştüğünde HPA'nın Pod'ları hemen silmesini engelleyerek gereksiz replica dalgalanmasını azaltmaya yardımcı olur.

Örneğin:

```text
2 → 5 → 2 → 5 → 2
```

gibi sürekli değişimleri azaltır.

---

## Flashcard 29

**Soru:** `kubectl describe hpa service-a-hpa` ile hangi önemli bilgiler görülebilir?

**Cevap:**

```text
Metrics
Current / Desired Replicas
Conditions
Events
```

Özellikle:

```text
AbleToScale
ScalingActive
ScalingLimited
SuccessfulRescale
```

bilgileri incelenebilir.

---

## Flashcard 30

**Soru:** k6'dan başlayarak HPA scale-up'a kadar tam sistem akışı nasıldır?

**Cevap:**

```text
k6
↓
Service A /work
↓
CPU-bound workload
↓
CPU Usage yükselir
↓
Kubelet
↓
Metrics Server
↓
Metrics API
↓
HPA
↓
CPU Utilization target ile karşılaştırılır
↓
Deployment replica sayısı artırılır
↓
ReplicaSet
↓
Yeni Service A Pod'ları
```

Kubelet
↓
Metrics Server
↓
Metrics API
↓
kubectl top / HPA

Kubelet, her Node üzerinde çalışan agent'tır. O Node'daki Pod ve container'ların durumuyla ilgilenir ve CPU/memory gibi resource kullanım bilgilerine erişebilir. Yani metric'in kaynağına en yakın katman budur.

Metrics Server, cluster'daki Kubelet'lerden bu resource metric'lerini toplar. Kendisi CPU'yu ölçen ana kaynak değildir; Kubelet'lerden gelen veriyi aggregate eder ve Kubernetes'in kullanabileceği hale getirir.

Metrics API ise bu toplanmış verinin Kubernetes API üzerinden erişilebilir olmasını sağlar. Yani kubectl top pods veya HPA, doğrudan Kubelet'le tek tek konuşmak yerine Metrics API üzerinden metric ister.

Akış şöyle:

Service A Pod
↓
CPU kullanır
↓
Kubelet bunu görür
↓
Metrics Server Kubelet'ten metric'i toplar
↓
Metrics API üzerinden sunar
↓
kubectl top pods bunu gösterir
veya
HPA bunu scaling kararında kullanır

Kısaca roller:

Kubelet
→ Node tarafındaki metric kaynağına erişir

Metrics Server
→ Kubelet'lerden metric toplar

Metrics API
→ Toplanan metric'i Kubernetes'e sunar

Bizim projede de tam olarak şu oldu:

/work yükü
↓
Service A CPU ↑
↓
Kubelet
↓
Metrics Server
↓
Metrics API
↓
HPA
↓
Replica sayısı arttı

En kritik nokta şu: Metrics Server veri toplar, Metrics API veri sunar, HPA ise bu veriye bakıp karar verir.