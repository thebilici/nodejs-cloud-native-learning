# Node.js Cloud Native Learning

Bu repository, gerçek bir şirket projesi geliştiriyormuş gibi ilerleyerek **Node.js tabanlı Cloud Native Backend Development** öğrenmek amacıyla oluşturulmuştur.

Projenin amacı yalnızca çalışan bir uygulama geliştirmek değildir.

Asıl hedef;

- Git ve GitHub çalışma disiplini kazanmak
- Node.js ve TypeScript ile servis geliştirmek
- Docker ve Kubernetes ekosistemini öğrenmek
- Load Testing yapmak
- Autoscaling mantığını anlamak
- Gerçek backend mimarisini adım adım uygulamaktır.

---

# Öğrenme Hedefleri

Bu repository boyunca aşağıdaki teknolojiler uygulamalı olarak öğrenilecektir.

- Git
- GitHub
- Node.js
- TypeScript
- Express
- Docker
- Docker Compose
- Kubernetes
- Metrics Server
- Horizontal Pod Autoscaler (HPA)
- k6

---

# Kullanılan Teknolojiler

| Teknoloji | Amaç |
|-----------|------|
| Node.js | Backend Runtime |
| TypeScript | Tip güvenliği |
| Express | HTTP API geliştirme |
| Git | Versiyon kontrolü |
| GitHub | Remote repository |
| Docker | Service A için image ve container oluşturma |
| Docker Compose | Çoklu container yönetimi |
| Kubernetes | Container orkestrasyonu |
| Metrics Server | Kaynak kullanımını izleme |
| HPA | Otomatik ölçeklendirme |
| k6 | Load ve Stress Testing |

---

# Proje Yaklaşımı

Bu proje klasik bir CRUD uygulaması değildir.

Özellikle eklenmeyecek yapılar:

- Database
- Authentication
- Authorization
- JWT
- Redis
- Kafka
- RabbitMQ
- Socket
- Karmaşık CRUD işlemleri

Çünkü bu repository'nin amacı iş geliştirmek değil, **Cloud Native mimarisini öğrenmektir.**

İki küçük HTTP servisi üzerinden;

- Docker
- Kubernetes
- Autoscaling
- Load Testing

konuları uygulamalı olarak öğrenilecektir.

---

# Repository Yapısı

```text
nodejs-cloud-native-learning
│
├── Canonical
├── Journal
│   └── Sessions
├── Notes
├── Review
├── deployments
├── docs
├── services
│   ├── service-a
│   └── service-b
└── tests
```

---

# Service A Mimarisi

```text
service-a
│
├── src
│   ├── config
│   ├── handlers
│   ├── routes
│   ├── workload
│   ├── app.ts
│   └── server.ts
│
├── dist
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
- `handlers` → HTTP isteklerini işler.
- `workload` → HTTP'den bağımsız iş mantığını içerir.
- `Dockerfile` → Docker image'ının nasıl oluşturulacağını tanımlar.
- `.dockerignore` → Docker build sırasında dahil edilmeyecek dosyaları belirler.
- `dist` → TypeScript kodunun derlenmiş JavaScript çıktısını içerir.

---

# Service A Endpoint'leri

| Endpoint | Açıklama |
|----------|----------|
| `GET /health` | Servisin çalışır durumda olduğunu doğrular. |
| `GET /hello` | Basit bir karşılama cevabı döndürür. |
| `GET /work` | CPU ağırlıklı işlem gerçekleştirerek yük oluşturur. |

`/work` endpoint'i ilerleyen aşamalarda;

- k6
- Metrics Server
- Kubernetes
- Horizontal Pod Autoscaler (HPA)

çalışmalarında kullanılacaktır.

---

# Projeyi Yerel Ortamda Çalıştırma

Repository'yi klonladıktan sonra:

```bash
cd services/service-a

npm install

npm run dev
```

Servis varsayılan olarak aşağıdaki adreste çalışacaktır.

```text
http://localhost:3000
```

---

# Docker ile Çalıştırma

Service A klasörüne geçin:

```bash
cd services/service-a
```

Docker image oluşturun:

```bash
docker buildx build --load -t service-a:1.0 .
```

Container oluşturup çalıştırın:

```bash
docker run -d --name service-a-container -p 3000:3000 service-a:1.0
```

Çalışan container'ları görüntüleyin:

```bash
docker ps
```

Container loglarını görüntüleyin:

```bash
docker logs service-a-container
```

Container'ı durdurun:

```bash
docker stop service-a-container
```

Aynı container'ı yeniden başlatın:

```bash
docker start service-a-container
```

Container'ı silin:

```bash
docker stop service-a-container
docker rm service-a-container
```

---

# Öğrenme Yol Haritası

| Konu | Durum |
|------|:----:|
| Git | ✅ |
| GitHub | ✅ |
| Node.js | ✅ |
| TypeScript | ✅ |
| Express | ✅ |
| Docker | ✅ |
| Docker Compose | ⏳ |
| Kubernetes | ⏳ |
| Metrics Server | ⏳ |
| Horizontal Pod Autoscaler | ⏳ |
| k6 | ⏳ |

---

# Mevcut Durum

Şu ana kadar tamamlanan çalışmalar:

- Repository oluşturuldu.
- Git çalışma düzeni oluşturuldu.
- Node.js ve TypeScript projesi oluşturuldu.
- Express kurulumu tamamlandı.
- Environment Variable desteği eklendi.
- `app.ts` ve `server.ts` sorumlulukları ayrıldı.
- Route ve Handler mimarisi oluşturuldu.
- Workload katmanı oluşturuldu.
- `GET /health` endpoint'i geliştirildi.
- `GET /hello` endpoint'i geliştirildi.
- `GET /work` endpoint'i geliştirildi.
- Service A için Dockerfile oluşturuldu.
- `.dockerignore` dosyası oluşturuldu.
- Docker layer cache ve build context mantığı öğrenildi.
- TypeScript kodu Docker image build aşamasında derlendi.
- `service-a:1.0` Docker image'ı oluşturuldu.
- Service A container içinde başarıyla çalıştırıldı.
- `/health`, `/hello` ve `/work` endpoint'leri container üzerinden doğrulandı.
- Container yaşam döngüsü komutları uygulandı.
- Küçük ve mantıksal commit disiplini uygulanmaya başlandı.
- Detaylı öğrenme dokümantasyonu oluşturuldu.

---

# Dokümantasyon

Repository yalnızca koddan oluşmamaktadır.

Öğrenme süreci aşağıdaki klasörlerde düzenli olarak kayıt altına alınmaktadır.

- `Canonical/` → Kalıcı proje kararları
- `Journal/` → Günlük çalışma kayıtları
- `Notes/` → Konu notları
- `Review/` → Flashcard, soru ve hata kayıtları

---

# Sonraki Aşama

Bir sonraki teknik konu **Docker Network** olacaktır.

Bu aşamada;

- Docker Network
- Bridge Network
- Custom Network
- Container DNS
- Container Name Resolution
- Service A ↔ Service B iletişimi
- Docker Compose'un network yapısı

konuları uygulamalı olarak öğrenilecektir.

---

# Repository

GitHub:

https://github.com/thebilici/nodejs-cloud-native-learning