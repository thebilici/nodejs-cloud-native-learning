# Progress

Bu dosya, projenin güncel ilerleme durumunu takip eder.

## Mevcut aşama

Aşama 4 — Service A mimarisini tamamlama ve Docker aşamasına hazırlanma.

## Tamamlanan aşamalar

- Aşama 1 — Öğrenme repository yapısını kurma
- Aşama 2 — Git çalışma düzenini pekiştirme
- Aşama 3 — Node.js ve TypeScript servis başlangıcı

## Tamamlanan adımlar

### Aşama 1 — Repository başlangıcı

- Ana proje klasörü oluşturuldu.
- Proje VS Code ile açıldı.
- Yerel Git repository başlatıldı.
- Varsayılan branch adı `main` olarak ayarlandı.
- `.gitignore` dosyası oluşturuldu.
- Ana proje klasörleri oluşturuldu.
- `README.md` oluşturuldu.
- `START_HERE.md` oluşturuldu.
- `Canonical/Learning_Path.md` oluşturuldu.
- `Journal/Progress.md` oluşturuldu.
- İlk tarihli session dosyası oluşturuldu.
- İlk Git commit'i oluşturuldu.
- GitHub üzerinde uzak repository oluşturuldu.
- Yerel repository, `origin` adıyla GitHub repository'sine bağlandı.
- `main` branch'i GitHub'a gönderildi.
- Yerel `main` branch'i ile `origin/main` arasında takip ilişkisi kuruldu.

### Aşama 2 — Git çalışma düzeni

- `git status` ile repository durumu kontrol edildi.
- `git branch -vv` ile yerel ve uzak branch ilişkisi incelendi.
- `git log --oneline` ile commit geçmişi görüntülendi.
- `README.md` dosyasına GitHub repository bağlantısı eklendi.
- `git diff` ile working directory değişiklikleri incelendi.
- Belirli dosyalar `git add <dosya>` komutuyla staging area'ya alındı.
- `git diff --staged` ile staging area'daki değişiklikler incelendi.
- `git restore --staged <dosya>` ile dosya silinmeden staging area'dan çıkarıldı.
- Değişiklikler commit edildi.
- Commitler GitHub'a gönderildi.
- Working directory, staging area, local repository ve remote repository ilişkisi uygulamalı olarak öğrenildi.
- `git add .` yerine yalnızca ilgili dosyaları stage etmenin daha kontrollü olduğu öğrenildi.
- Commit mesajlarının yapılan değişikliğin gerçek amacını yansıtması gerektiği öğrenildi.
- Conventional Commit formatı kullanılmaya başlandı.

### Aşama 3 — Node.js ve TypeScript başlangıcı

- Go ile devam etmek yerine Node.js ve TypeScript kullanılmasına karar verildi.
- Repository adı `nodejs-cloud-native-learning` olarak güncellendi.
- Go module yapısı kaldırıldı.
- `service-a` klasörü Node.js ve TypeScript yapısına dönüştürüldü.
- `src` klasörü oluşturuldu.
- `config`, `handlers`, `routes` ve `workload` klasörleri oluşturuldu.
- `package.json` oluşturuldu.
- TypeScript kuruldu.
- `tsx` kuruldu.
- `@types/node` kuruldu.
- `tsconfig.json` oluşturuldu.
- Express kuruldu.
- `@types/express` kuruldu.
- `dotenv` kuruldu.
- `.env` dosyası oluşturuldu.
- `PORT`, `SERVICE_NAME` ve `APP_VERSION` environment variable olarak tanımlandı.
- `npm run dev` komutu oluşturuldu.
- Geliştirme ortamı `tsx watch` ile çalıştırıldı.
- İlk Express uygulaması oluşturuldu.
- `GET /health` endpoint'i geliştirildi.
- Health endpoint'i Postman ve PowerShell üzerinden test edildi.

### Aşama 4 — Service A mimarisi

- Express uygulaması ile HTTP sunucusunun başlatılması birbirinden ayrıldı.
- `app.ts` dosyası oluşturuldu.
- `server.ts` dosyası sadeleştirildi.
- `app.listen()` çağrısı `server.ts` içinde bırakıldı.
- `app.ts`, Express uygulamasını hazırlayan katman haline getirildi.
- `server.ts`, uygulamayı belirli bir portta çalıştıran başlangıç noktası haline getirildi.
- Uygulama tanımı ile sunucu başlangıcı arasındaki sorumluluk farkı öğrenildi.
- `health.handler.ts` oluşturuldu.
- Health endpoint'inin response üretme mantığı handler katmanına taşındı.
- `routes/index.ts` oluşturuldu.
- Express `Router` yapısı kullanılmaya başlandı.
- Route ve handler sorumlulukları birbirinden ayrıldı.
- `app.ts` içindeki doğrudan route tanımı kaldırıldı.
- Route'lar `app.use(router)` ile ana Express uygulamasına bağlandı.
- `GET /hello` endpoint'i geliştirildi.
- `hello.handler.ts` oluşturuldu.
- Yeni bir endpoint eklenirken yalnızca handler ve route katmanının değiştirilmesi gerektiği öğrenildi.
- `GET /work` endpoint'i geliştirildi.
- `work.handler.ts` oluşturuldu.
- `cpu-workload.ts` oluşturuldu.
- CPU yükü oluşturan işlem workload katmanına taşındı.
- HTTP katmanı ile CPU workload mantığı birbirinden ayrıldı.
- Separation of Concerns prensibi uygulandı.
- CPU ağırlıklı işlemlerin Node.js event loop üzerindeki etkisi incelendi.
- `/work` endpoint'inin ileride k6 ve Kubernetes HPA testlerinde kullanılmasına karar verildi.
- `/ready` endpoint'inin şu aşamada eklenmemesine karar verildi.
- Service A'nın şu anda ayrı bir readiness kontrolü gerektiren dış bağımlılığı olmadığı değerlendirildi.
- Mevcut `/health`, `/hello` ve `/work` endpoint'leri doğrulandı.
- Kod değişiklikleri küçük ve mantıksal commitler halinde GitHub'a gönderildi.

## Güncel Service A mimarisi

```text
services/
└── service-a/
    ├── src/
    │   ├── config/
    │   ├── handlers/
    │   │   ├── health.handler.ts
    │   │   ├── hello.handler.ts
    │   │   └── work.handler.ts
    │   ├── routes/
    │   │   └── index.ts
    │   ├── workload/
    │   │   └── cpu-workload.ts
    │   ├── app.ts
    │   └── server.ts
    ├── .env
    ├── package.json
    ├── package-lock.json
    └── tsconfig.json

    Güncel endpoint'ler
Health endpoint
GET /health

Servisin çalışır durumda olduğunu gösterir.

Hello endpoint
GET /hello

Servis adını içeren basit bir karşılama cevabı döndürür.

Work endpoint
GET /work

Belirli bir süre CPU ağırlıklı işlem gerçekleştirir.

Bu endpoint ileride:

k6 load test
Kubernetes resource kullanımı
Metrics Server
Horizontal Pod Autoscaler

çalışmalarında kullanılacaktır.