# Progress

Bu dosya, projenin güncel ilerleme durumunu takip eder.

## Mevcut aşama

Aşama 4 — Service A mimarisini tamamlama ve Docker aşamasına hazırlanma.

## Tamamlanan aşamalar

- Aşama 1 — Öğrenme repository yapısını kurma
- Aşama 2 — Git çalışma düzenini pekiştirme
- Aşama 3 — Node.js ve TypeScript servis başlangıcı
- Aşama 4 — Service A mimarisini oluşturma
- Aşama 5 — Service A'yı Docker container içinde çalıştırma

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

### Aşama 5 — Docker temelleri ve Service A containerization

- Docker'ın hangi problemi çözdüğü öğrenildi.
- Uygulama çalışma ortamının Docker ile standartlaştırılabileceği öğrenildi.
- Docker Image ile Docker Container arasındaki fark öğrenildi.
- Bir image'dan bir veya birden fazla container oluşturulabileceği öğrenildi.
- Bir container'ın yalnızca tek bir image'dan oluşturulduğu öğrenildi.
- Dockerfile'ın image oluşturma talimatlarını içeren bir tarif dosyası olduğu öğrenildi.
- Service A klasöründe `Dockerfile` oluşturuldu.
- `FROM node:22-alpine` ile Node.js 22 ve Alpine Linux tabanlı base image seçildi.
- Base image ve version pinning kavramları öğrenildi.
- Alpine image kullanımının boyut ve kaynak tüketimi açısından avantajları incelendi.
- `WORKDIR /app` ile container içindeki çalışma dizini oluşturuldu.
- Host dosya sistemi ile container dosya sistemi arasındaki fark öğrenildi.
- `COPY package*.json ./` ile bağımlılık tanım dosyaları image içine kopyalandı.
- `package*.json` kalıbının `package.json` ve `package-lock.json` dosyalarını kapsadığı öğrenildi.
- Docker layer ve build cache mantığı öğrenildi.
- Kaynak koddan önce package dosyalarını kopyalamanın build cache açısından önemi öğrenildi.
- `RUN npm install` ile bağımlılıklar image build aşamasında kuruldu.
- Express'in npm içinde yer alan bir paket olmadığı, npm registry üzerinden indirilen bir paket olduğu öğrenildi.
- `COPY . .` komutundaki kaynak ve hedef noktalarının farklı dosya sistemlerini ifade ettiği öğrenildi.
- Docker build context kavramı öğrenildi.
- `.dockerignore` dosyası oluşturuldu.
- `node_modules`, `dist`, `.env`, `.git` ve gereksiz log dosyaları build context dışında bırakıldı.
- `.gitignore` ile `.dockerignore` arasındaki fark öğrenildi.
- `.env` dosyasının image içine gömülmemesi gerektiği öğrenildi.
- `RUN npm run build` ile TypeScript kaynak kodu JavaScript'e derlendi.
- `src` klasörünün kaynak kodu, `dist` klasörünün derlenmiş JavaScript çıktısını içerdiği öğrenildi.
- `CMD ["npm", "start"]` ile container başlangıç komutu tanımlandı.
- `RUN` ve `CMD` arasındaki build-time ve runtime farkı öğrenildi.
- Service A için Docker image oluşturuldu.
- Buildx `docker-container` driver kullanıldığı için build sonucunun `--load` ile yerel image store'a yüklenmesi gerektiği öğrenildi.
- `service-a:1.0` image'ı başarıyla oluşturuldu.
- Image, `docker images service-a` komutuyla doğrulandı.
- Image'dan `service-a-container` adlı container oluşturuldu.
- Host portu ile container portu `-p 3000:3000` kullanılarak eşleştirildi.
- `/health`, `/hello` ve `/work` endpoint'leri container üzerinden başarıyla test edildi.
- Container foreground ve detached modda çalıştırıldı.
- `docker ps` ile çalışan container'lar görüntülendi.
- `docker ps -a` ile çalışan ve durmuş bütün container'lar görüntülendi.
- `docker logs` ile container logları incelendi.
- `docker stop` ile container durduruldu.
- `docker start` ile mevcut container yeniden başlatıldı.
- `docker run` ile `docker start` arasındaki fark öğrenildi.
- Container'ı durdurmanın container'ı silmediği öğrenildi.
- Container silinse bile image'ın yerel sistemde kalmaya devam ettiği öğrenildi.
- Service A'nın Node.js geliştirme ortamından bağımsız olarak container içinde çalıştığı doğrulandı.

### Aşama 6 — Docker Network ve servisler arası iletişim

- Docker network türleri incelendi.
- `cloud-native-network` adlı custom bridge network oluşturuldu.
- Service A container'ı custom network'e bağlandı.
- Docker DNS ve container name resolution mantığı öğrenildi.
- Container içindeki `localhost` adresinin container'ın kendisini ifade ettiği öğrenildi.
- Geçici curl container'ı ile container adı üzerinden erişim test edildi.
- Service B Node.js, TypeScript ve Express ile oluşturuldu.
- Service B için `health` ve `hello` endpoint'leri geliştirildi.
- Service B için Dockerfile ve `.dockerignore` oluşturuldu.
- `service-b:1.0` image'ı oluşturuldu.
- Service B container olarak çalıştırıldı.
- Service A ve Service B aynı Docker network'e bağlandı.
- Service A'ya `call-service-b` handler'ı eklendi.
- Node.js `fetch()` API'si ile Service A'dan Service B'ye HTTP isteği gönderildi.
- `SERVICE_B_URL` environment variable olarak tanımlandı.
- Service A image'ı `service-a:1.1` olarak yeniden oluşturuldu.
- Servisler arası iletişim başarıyla doğrulandı.
- Değişiklikler commit edilip GitHub'a gönderildi.

## Sıradaki aşama

Aşama 7 — Docker Compose

Bu aşamada:

- Compose dosya yapısı öğrenilecek.
- Service A ve Service B tek Compose projesinde tanımlanacak.
- Image build ayarları Compose'a taşınacak.
- Port mapping Compose üzerinden yapılacak.
- Environment variable tanımları Compose üzerinden yönetilecek.
- Compose tarafından otomatik oluşturulan network incelenecek.
- Servis adıyla DNS çözümlemesi öğrenilecek.
- `docker compose up` ve `docker compose down` kullanılacak.
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
    ├── dist/
    ├── .dockerignore
    ├── .env
    ├── Dockerfile
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