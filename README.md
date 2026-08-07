# Node.js Cloud Native Learning

Bu repository, gerçek bir şirket projesi geliştiriyormuş gibi ilerleyerek **Node.js tabanlı Cloud Native Backend Development** öğrenmek amacıyla oluşturulmuştur.

Projenin amacı yalnızca çalışan bir uygulama geliştirmek değildir.

Asıl hedef;

- Git ve GitHub çalışma disiplini kazanmak
- Node.js ve TypeScript ile servis geliştirmek
- Docker ve Docker Compose ekosistemini öğrenmek
- Servisler arası iletişim kurmak
- Load ve Stress Testing yapmak
- Kubernetes üzerinde servisleri çalıştırmak
- Metrics Server ile kaynak kullanımını izlemek
- Horizontal Pod Autoscaler ile autoscaling mantığını anlamak
- Gerçek backend ve Cloud Native mimarisini adım adım uygulamaktır.

---

# Öğrenme Hedefleri

Bu repository boyunca aşağıdaki teknolojiler uygulamalı olarak öğrenilmektedir.

- Git
- GitHub
- Node.js
- TypeScript
- Express
- Environment Variables
- Docker
- Docker Network
- Docker DNS
- Docker Compose
- Service-to-Service Communication
- k6
- Kubernetes
- Metrics Server
- Horizontal Pod Autoscaler (HPA)

---

# Kullanılan Teknolojiler

| Teknoloji | Amaç |
| --- | --- |
| Node.js | Backend runtime |
| TypeScript | Tip güvenliği |
| Express | HTTP API geliştirme |
| Git | Versiyon kontrolü |
| GitHub | Remote repository |
| Docker | Image ve container oluşturma |
| Docker Network | Containerlar arası network iletişimi |
| Docker Compose | Çoklu container uygulama yönetimi |
| k6 | Load ve Stress Testing |
| Kubernetes | Container orkestrasyonu |
| Metrics Server | Kubernetes kaynak metriklerini toplama |
| HPA | Otomatik ölçeklendirme |

---

# Proje Yaklaşımı

Bu proje klasik bir CRUD uygulaması değildir.

Özellikle şu yapılar şimdilik eklenmeyecektir:

- Database
- Authentication
- Authorization
- JWT
- Redis
- Kafka
- RabbitMQ
- Message Queue
- Socket
- Karmaşık CRUD işlemleri
- Kullanıcı yönetimi

Çünkü bu repository'nin temel amacı iş geliştirmek değil, **Cloud Native backend geliştirme sürecini öğrenmektir.**

İki küçük HTTP servisi üzerinden;

- Katmanlı backend mimarisi
- Docker image ve container yapısı
- Docker Network
- Docker DNS
- Servisler arası HTTP iletişimi
- Docker Compose
- Healthcheck
- Load Testing
- Kubernetes
- Metrics
- Autoscaling

konuları uygulamalı olarak öğrenilmektedir.

---

# Repository Yapısı

```text
nodejs-cloud-native-learning/
│
├── Canonical/
│   └── Learning_Path.md
│
├── Journal/
│   ├── Progress.md
│   └── Sessions/
│
├── Notes/
│
├── Review/
│   ├── Flashcard.md
│   ├── Questions.md
│   ├── Mistakes.md
│   └── Study_Strategy.md
│
├── deployments/
│
├── services/
│   ├── service-a/
│   └── service-b/
│
├── tests/
│
├── compose.yaml
├── .gitignore
├── README.md
└── START_HERE.md
```

---

# Servis Mimarisi

Proje iki bağımsız HTTP servisinden oluşmaktadır.

```text
Client
   │
   ▼
Service A
   │
   │ HTTP Request
   ▼
Service B
```

Service A ana servis olarak çalışır.

Service B ise Service A tarafından çağrılan ikinci servistir.

---

# Service A

## Sorumluluğu

Service A:

- HTTP isteklerini karşılar.
- Health ve hello endpointlerini sağlar.
- Kontrollü CPU workload oluşturur.
- Service B'ye HTTP isteği gönderir.

## Port

```text
3000
```

## Mimari

```text
service-a/
│
├── src/
│   ├── handlers/
│   │   ├── health.handler.ts
│   │   ├── hello.handler.ts
│   │   ├── work.handler.ts
│   │   └── call-service-b.handler.ts
│   │
│   ├── routes/
│   │   └── index.ts
│   │
│   ├── workload/
│   │   └── cpu-workload.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── dist/
├── .dockerignore
├── .env
├── Dockerfile
├── package.json
├── package-lock.json
└── tsconfig.json
```

Bu mimaride sorumluluklar birbirinden ayrılmıştır.

- `server.ts` → HTTP sunucusunu başlatır.
- `app.ts` → Express uygulamasını oluşturur.
- `routes` → Endpoint yönlendirmelerini içerir.
- `handlers` → HTTP request ve response işlemlerini yönetir.
- `workload` → HTTP katmanından bağımsız CPU workload mantığını içerir.
- `Dockerfile` → Docker image'ının nasıl oluşturulacağını tanımlar.
- `.dockerignore` → Docker build context dışında bırakılacak dosyaları belirler.
- `dist` → TypeScript kaynak kodunun derlenmiş JavaScript çıktısını içerir.

---

# Service A Endpoint'leri

| Endpoint | Açıklama |
| --- | --- |
| `GET /health` | Servisin çalışır durumda olduğunu doğrular |
| `GET /hello` | Basit bir karşılama cevabı döndürür |
| `GET /work` | CPU ağırlıklı işlem gerçekleştirerek kontrollü yük oluşturur |
| `GET /call-service-b` | Service B'nin `/hello` endpoint'ini çağırır |

`/work` endpoint'i ilerleyen aşamalarda;

- k6
- Kubernetes
- Metrics Server
- Horizontal Pod Autoscaler

testlerinde kullanılacaktır.

---

# Service B

## Sorumluluğu

Service B:

- Service A'dan gelen HTTP isteklerini karşılar.
- Basit health ve hello cevapları döndürür.
- Service A'nın downstream dependency'si olarak kullanılır.

## Port

```text
3001
```

## Mimari

```text
service-b/
│
├── src/
│   ├── handlers/
│   │   ├── health.handler.ts
│   │   └── hello.handler.ts
│   │
│   ├── routes/
│   │   └── index.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── dist/
├── .dockerignore
├── .env
├── Dockerfile
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# Service B Endpoint'leri

| Endpoint | Açıklama |
| --- | --- |
| `GET /health` | Service B'nin çalışır durumda olduğunu doğrular |
| `GET /hello` | Service B adına basit bir response döndürür |

---

# Service-to-Service Communication

Service A, Service B'ye Node.js `fetch()` API'si üzerinden HTTP isteği gönderir.

Manuel Docker ortamında Service B adresi:

```text
http://service-b-container:3001
```

Docker Compose ortamında ise:

```text
http://service-b:3001
```

olarak kullanılır.

Bunun nedeni Compose service name olan:

```text
service-b
```

değerinin Compose network içinde DNS hostname olarak kullanılabilmesidir.

İletişim akışı:

```text
Client
   │
   │ GET localhost:3000/call-service-b
   ▼
Service A
   │
   │ fetch()
   │
   │ SERVICE_B_URL
   ▼
Docker Compose Network
   │
   │ Docker DNS
   ▼
service-b:3001
   │
   │ GET /hello
   ▼
Service B
   │
   ▼
JSON Response
   │
   ▼
Service A
   │
   ▼
Client
```

---

# Environment Variables

Service A yaklaşık olarak aşağıdaki environment variable'ları kullanır:

```env
PORT=3000
SERVICE_NAME=service-a
APP_VERSION=1.0.0
SERVICE_B_URL=http://service-b-container:3001
```

Service B:

```env
PORT=3001
SERVICE_NAME=service-b
APP_VERSION=1.0.0
```

Docker Compose ortamında Service A için `SERVICE_B_URL` değeri runtime sırasında override edilir:

```yaml
environment:
  SERVICE_B_URL: http://service-b:3001
```

Böylece kaynak kod değiştirilmeden farklı çalışma ortamlarında farklı servis adresleri kullanılabilir.

---

# Projeyi Yerel Ortamda Çalıştırma

Service A:

```bash
cd services/service-a
npm install
npm run dev
```

Service A varsayılan olarak:

```text
http://localhost:3000
```

adresinde çalışır.

Service B:

```bash
cd services/service-b
npm install
npm run dev
```

Service B varsayılan olarak:

```text
http://localhost:3001
```

adresinde çalışır.

---

# Docker ile Manuel Çalıştırma

## Service A

Service A klasörüne geçin:

```bash
cd services/service-a
```

Image oluşturun:

```bash
docker buildx build --load -t service-a:1.1 .
```

Container oluşturup çalıştırın:

```bash
docker run -d \
  --name service-a-container \
  -p 3000:3000 \
  service-a:1.1
```

---

## Service B

Service B klasörüne geçin:

```bash
cd services/service-b
```

Image oluşturun:

```bash
docker buildx build --load -t service-b:1.0 .
```

Container oluşturup çalıştırın:

```bash
docker run -d \
  --name service-b-container \
  -p 3001:3001 \
  service-b:1.0
```

---

# Docker Container Komutları

Çalışan container'ları görüntülemek:

```bash
docker ps
```

Tüm container'ları görüntülemek:

```bash
docker ps -a
```

Logları görüntülemek:

```bash
docker logs <container-name>
```

Container durdurmak:

```bash
docker stop <container-name>
```

Container yeniden başlatmak:

```bash
docker start <container-name>
```

Container silmek:

```bash
docker rm <container-name>
```

---

# Docker Network

Manuel Docker kullanımında servislerin iletişimi için custom bridge network oluşturuldu.

```bash
docker network create cloud-native-network
```

Network'leri görüntülemek:

```bash
docker network ls
```

Network detaylarını incelemek:

```bash
docker network inspect cloud-native-network
```

Aynı custom network üzerindeki container'lar Docker DNS sayesinde birbirlerine isim üzerinden ulaşabilir.

Örnek:

```text
service-a-container
        ↓
service-b-container:3001
```

Container IP adresleri dinamik olabileceği için servis iletişiminde IP adresi kod içine sabitlenmez.

---

# Docker Compose

Repository kökünde:

```text
compose.yaml
```

dosyası bulunmaktadır.

Service A ve Service B bu dosya üzerinden birlikte yönetilmektedir.

Güncel yapı yaklaşık olarak:

```yaml
services:
  service-b:
    build:
      context: ./services/service-b
    ports:
      - "3001:3001"
    env_file:
      - ./services/service-b/.env
    healthcheck:
      test:
        [
          "CMD",
          "node",
          "-e",
          "fetch('http://localhost:3001/health').then(r => { if (!r.ok) process.exit(1) }).catch(() => process.exit(1))"
        ]
      interval: 10s
      timeout: 5s
      retries: 3
      start_period: 5s

  service-a:
    build:
      context: ./services/service-a
    ports:
      - "3000:3000"
    env_file:
      - ./services/service-a/.env
    environment:
      SERVICE_B_URL: http://service-b:3001
    depends_on:
      service-b:
        condition: service_healthy
```

---

# Compose Network ve DNS

Docker Compose proje için otomatik olarak default network oluşturur.

Bu projede oluşturulan network:

```text
nodejs-cloud-native-learning_default
```

Servisler aynı network üzerinde service name ile birbirlerine ulaşabilir.

```text
Service A
   ↓
service-b:3001
   ↓
Docker DNS
   ↓
Service B
```

Service B için:

```yaml
ports:
  - "3001:3001"
```

tanımı Service A → Service B iletişimi için zorunlu değildir.

Bu mapping, geliştirme ortamında host bilgisayardan:

```text
http://localhost:3001
```

adresine erişebilmek için tutulmaktadır.

---

# Docker Compose Komutları

Compose yapılandırmasını doğrulamak:

```bash
docker compose config
```

Servisleri build ederek çalıştırmak:

```bash
docker compose up --build
```

Servisleri arka planda çalıştırmak:

```bash
docker compose up -d
```

Servis durumlarını görüntülemek:

```bash
docker compose ps
```

Logları görüntülemek:

```bash
docker compose logs
```

Logları gerçek zamanlı takip etmek:

```bash
docker compose logs -f
```

Compose servislerini ve default network'ü kaldırmak:

```bash
docker compose down
```

---

# Healthcheck

Service B için Compose healthcheck tanımlanmıştır.

Healthcheck:

```text
http://localhost:3001/health
```

endpoint'ini Service B container'ının içinden kontrol eder.

Başarılı healthcheck:

```text
exit code 0
```

Başarısız healthcheck:

```text
exit code 1
```

üretir.

Container'ın `Up` olması ile uygulamanın `healthy` olması farklı kavramlardır.

```text
Up
→ Container process'i çalışıyor.

healthy
→ Uygulama healthcheck'i başarıyla geçiyor.
```

---

# Service Dependency

Service A, Service B'ye bağımlıdır.

Bu nedenle Compose içinde:

```yaml
depends_on:
  service-b:
    condition: service_healthy
```

kullanılmıştır.

Startup akışı:

```text
Service B başlar
        ↓
Healthcheck başarılı olur
        ↓
Service B healthy olur
        ↓
Service A başlar
```

Bu yapı startup dependency sağlar.

Service B sonradan çökerse `depends_on` Service A'yı otomatik olarak durdurmaz.

Runtime failure handling ilerleyen aşamalarda ayrıca ele alınabilir.

---

# Öğrenme Yol Haritası

| Konu | Durum |
| --- | :---: |
| Git | ✅ |
| GitHub | ✅ |
| Node.js | ✅ |
| TypeScript | ✅ |
| Express | ✅ |
| Katmanlı Mimari | ✅ |
| Environment Variables | ✅ |
| Docker | ✅ |
| Docker Network | ✅ |
| Docker DNS | ✅ |
| Service B | ✅ |
| Service-to-Service Communication | ✅ |
| Docker Compose | ✅ |
| Healthcheck | ✅ |
| k6 | ⏳ |
| Kubernetes | ⏳ |
| Metrics Server | ⏳ |
| Horizontal Pod Autoscaler | ⏳ |

---

# Mevcut Durum

Şu ana kadar tamamlanan çalışmalar:

- Repository ve Git çalışma düzeni oluşturuldu.
- GitHub remote repository bağlantısı kuruldu.
- Node.js ve TypeScript proje yapısı oluşturuldu.
- Express kurulumu tamamlandı.
- Environment Variable desteği eklendi.
- `app.ts` ve `server.ts` sorumlulukları ayrıldı.
- Route ve Handler mimarisi oluşturuldu.
- Workload katmanı oluşturuldu.
- Service A geliştirildi.
- `GET /health` endpoint'i geliştirildi.
- `GET /hello` endpoint'i geliştirildi.
- `GET /work` endpoint'i geliştirildi.
- Service A için Dockerfile oluşturuldu.
- `.dockerignore` kullanıldı.
- Docker layer ve build cache mantığı öğrenildi.
- Docker image ve container yaşam döngüsü uygulandı.
- Custom Docker Network oluşturuldu.
- Docker DNS ve container name resolution öğrenildi.
- Service B geliştirildi.
- Service B container içinde çalıştırıldı.
- Service A ile Service B aynı Docker network'e bağlandı.
- Service A → Service B HTTP iletişimi oluşturuldu.
- Node.js `fetch()` API'si kullanıldı.
- `SERVICE_B_URL` environment variable olarak yönetildi.
- Docker Compose yapılandırması oluşturuldu.
- Service A ve Service B tek Compose projesinde çalıştırıldı.
- Compose default network yapısı incelendi.
- Service name üzerinden DNS çözümlemesi doğrulandı.
- `docker compose config` kullanıldı.
- `docker compose up --build` kullanıldı.
- `docker compose ps` ve `docker compose logs` kullanıldı.
- `/health`, `/hello` ve `/call-service-b` endpointleri Compose ortamında doğrulandı.
- Docker healthcheck eklendi.
- Service B'nin `healthy` durumu doğrulandı.
- `depends_on` ve `condition: service_healthy` kullanıldı.
- Container startup ile application readiness arasındaki fark öğrenildi.
- Compose startup dependency davranışı doğrulandı.
- Flashcard, Questions ve Mistakes dokümantasyonları güncellendi.

---

# Dokümantasyon

Repository yalnızca koddan oluşmamaktadır.

Öğrenme süreci aşağıdaki alanlarda kayıt altına alınmaktadır.

- `Canonical/` → Kısa ve kalıcı roadmap
- `Journal/Progress.md` → Güncel proje ilerlemesi
- `Journal/Sessions/` → Tarih bazlı çalışma kayıtları
- `Notes/` → Konu bazlı teknik notlar
- `Review/Flashcard.md` → Hızlı tekrar kartları
- `Review/Questions.md` → Açık uçlu teknik sorular
- `Review/Mistakes.md` → Yapılan hatalar ve çıkarılan dersler
- `Review/Study_Strategy.md` → Çalışma ve tekrar stratejisi

---

# Sonraki Aşama

Bir sonraki teknik aşama **k6 Load Testing** olacaktır.

Bu aşamada:

- k6 kurulumu
- Virtual User (VU)
- Duration
- Request rate
- Response time
- Throughput
- Failure rate
- Check
- Threshold
- Load Testing
- Stress Testing
- Ramping load
- `/work` endpoint'i üzerinden CPU yükü oluşturma

konuları uygulamalı olarak öğrenilecektir.

Bu aşama aynı zamanda daha sonra yapılacak:

```text
Kubernetes
        ↓
Metrics Server
        ↓
Horizontal Pod Autoscaler
```

çalışmalarının temelini oluşturacaktır.

---
## Benchmark Results

| VU | Req/s |    Avg |     P95 |
| -: | ----: | -----: | ------: |
|  1 |  9.57 | 104 ms |  106 ms |
|  2 |  9.89 | 200 ms |  204 ms |
|  3 |  9.86 | 300 ms |  415 ms |
|  4 |  9.86 | 399 ms |  615 ms |
|  5 |  9.84 | 497 ms |  812 ms |
| 10 |  9.85 | 967 ms |  1.82 s |
| 20 |  9.73 | 1.88 s |  9.74 s |
| 40 |  9.82 | 3.48 s | 13.21 s |
| 80 |  9.84 | 6.30 s | 17.12 s |

## Capacity Analysis

Gerçekleştirilen testler sonucunda aşağıdaki gözlemler elde edilmiştir.

- Service A yaklaşık **10 request/s** işleyebilmektedir.
- Virtual User sayısı artırıldığında throughput önemli ölçüde artmamıştır.
- Throughput yaklaşık aynı seviyede kalırken latency sürekli yükselmiştir.
- Bunun nedeni Node.js'in CPU-bound workload'u tek Event Loop üzerinde işlemesidir.
- Ek concurrency yeni throughput üretmek yerine request'lerin daha uzun süre beklemesine neden olmuştur.
- Bu davranış sistemin saturation (doygunluk) noktasına ulaştığını göstermektedir.

# Repository

GitHub:

https://github.com/thebilici/nodejs-cloud-native-learning