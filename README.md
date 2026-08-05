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
| Docker | Container oluşturma |
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
├── .env
├── package.json
└── tsconfig.json
```

Bu mimaride sorumluluklar birbirinden ayrılmıştır.

- `server.ts` → HTTP sunucusunu başlatır.
- `app.ts` → Express uygulamasını oluşturur.
- `routes` → Endpoint yönlendirmelerini içerir.
- `handlers` → HTTP isteklerini işler.
- `workload` → HTTP'den bağımsız iş mantığını içerir.

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

# Projeyi Çalıştırma

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

# Öğrenme Yol Haritası

| Konu | Durum |
|------|:----:|
| Git | ✅ |
| GitHub | ✅ |
| Node.js | ✅ |
| TypeScript | ✅ |
| Express | ✅ |
| Docker | ⏳ |
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

# Repository

GitHub:

https://github.com/thebilici/nodejs-cloud-native-learning