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
| Git ve GitHub | 1-50 | Devam ediyor |
| Node.js ve Express | 51-100 | Devam ediyor |
| Docker | 101-150 | Henüz başlanmadı |
| Docker Compose | 151-180 | Henüz başlanmadı |
| Kubernetes | 181-250 | Henüz başlanmadı |
| Metrics Server ve HPA | 251-300 | Henüz başlanmadı |
| k6 | 301-350 | Henüz başlanmadı |
| Cloud Native | 351-400 | Henüz başlanmadı |

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
# Tekrar Edilecek Kartlar

Yanlış veya eksik cevaplanan kartlar konu başlıklarına göre bu bölüme eklenecektir.

## Git ve GitHub

- Kart 17 — `git commit` ile `git push` arasındaki fark

## Node.js ve Express

Henüz tekrar edilmesi gereken kart bulunmuyor.

## Docker

Henüz kart bulunmuyor.

## Docker Compose

Henüz kart bulunmuyor.

## Kubernetes

Henüz kart bulunmuyor.

## Metrics Server ve HPA

Henüz kart bulunmuyor.

## k6

Henüz kart bulunmuyor.

## Cloud Native

Henüz kart bulunmuyor.