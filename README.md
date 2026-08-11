# Node.js Cloud Native Learning

Bu repository, gerçek bir backend projesi geliştiriyormuş gibi ilerleyerek **Node.js tabanlı Cloud Native Backend Development** öğrenmek amacıyla oluşturulmuştur.

Bu projenin amacı yalnızca çalışan iki HTTP servisi geliştirmek değildir.

Asıl amaç;

- Git ve GitHub çalışma disiplini kazanmak
- Node.js ve TypeScript ile backend servis geliştirmek
- Express ile katmanlı servis mimarisi oluşturmak
- Environment Variable kullanımını öğrenmek
- Docker image ve container mantığını anlamak
- Docker Network ve Docker DNS kullanmak
- Servisler arası HTTP iletişimi kurmak
- Docker Compose ile multi-service uygulama yönetmek
- k6 ile Load, Stress ve Capacity Testing yapmak
- Kubernetes üzerinde servisleri çalıştırmak
- Deployment, ReplicaSet, Pod ve Service ilişkisini öğrenmek
- ConfigMap kullanmak
- Readiness ve Liveness Probe kullanmak
- Metrics Server ile CPU ve memory kullanımını gözlemlemek
- Kubernetes Resource Request ve Limit yapılandırmak
- Horizontal Pod Autoscaler ile otomatik ölçekleme yapmak
- k6 ile gerçek yük oluşturarak HPA davranışını gözlemlemek
- Cloud Native backend mimarisini uçtan uca anlamaktır.

---

# Öğrenme Hedefleri

Repository boyunca aşağıdaki teknolojiler ve kavramlar uygulamalı olarak çalışılmaktadır.

- Git
- GitHub
- Node.js
- TypeScript
- Express
- Environment Variables
- Katmanlı Backend Mimarisi
- Docker
- Docker Image
- Docker Container
- Docker Network
- Docker DNS
- Docker Compose
- Healthcheck
- Service-to-Service Communication
- k6
- Load Testing
- Stress Testing
- Capacity Testing
- Kubernetes
- Deployment
- ReplicaSet
- Pod
- Service
- ClusterIP
- Kubernetes DNS
- Service Discovery
- ConfigMap
- Readiness Probe
- Liveness Probe
- Metrics Server
- Metrics API
- Resource Request
- Resource Limit
- Horizontal Pod Autoscaler
- Horizontal Scaling

---

# Kullanılan Teknolojiler

| Teknoloji | Amaç |
| --- | --- |
| Node.js | Backend runtime |
| TypeScript | Tip güvenliği |
| Express | HTTP API geliştirme |
| dotenv | Environment Variable yönetimi |
| Git | Versiyon kontrolü |
| GitHub | Remote repository |
| Docker | Image ve container oluşturma |
| Docker Network | Container'lar arası iletişim |
| Docker DNS | Container name resolution |
| Docker Compose | Multi-container uygulama yönetimi |
| k6 | Load, Stress ve Capacity Testing |
| Kubernetes | Container orkestrasyonu |
| ConfigMap | Kubernetes configuration yönetimi |
| Metrics Server | CPU ve memory metric altyapısı |
| HPA | CPU kullanımına göre otomatik yatay ölçekleme |

---

# Proje Yaklaşımı

Bu proje klasik bir CRUD uygulaması değildir.

Şimdilik özellikle aşağıdaki yapılar eklenmemektedir:

- Database
- Authentication
- Authorization
- JWT
- Redis
- Kafka
- RabbitMQ
- Message Queue
- WebSocket
- Karmaşık CRUD işlemleri
- Kullanıcı yönetimi

Bunun nedeni repository'nin temel amacının business logic geliştirmek değil, **Cloud Native backend geliştirme sürecini öğrenmek** olmasıdır.

İki küçük HTTP servisi üzerinden;

```text
Backend Architecture
↓
Containerization
↓
Multi-Service Communication
↓
Load Testing
↓
Kubernetes Orchestration
↓
Resource Metrics
↓
Autoscaling
```

akışı uygulamalı olarak öğrenilmektedir.

---

# Güncel Öğrenme Yol Haritası

```text
Git ve GitHub ✅
        ↓
Node.js ve TypeScript ✅
        ↓
Express ve Katmanlı Mimari ✅
        ↓
Service A ✅
        ↓
Docker Temelleri ✅
        ↓
Docker Network ✅
        ↓
Service B ✅
        ↓
Servisler Arası İletişim ✅
        ↓
Docker Compose ✅
        ↓
k6 Load Testing ✅
        ↓
Kubernetes ✅
        ↓
Metrics Server ✅
        ↓
Resource Requests / Limits ✅
        ↓
Horizontal Pod Autoscaler ✅
        ↓
k6 + HPA Load Test ✅
        ↓
Tek Pod vs Çok Pod vs HPA Performans Analizi ← Sıradaki
```

---

# Repository Yapısı

```text
nodejs-cloud-native-learning/
│
├── Canonical/
│   ├── Learning_Path.md
│   └── Tekrar-stratejisi.md
│
├── deployments/
│   ├── service-a-configmap.yaml
│   ├── service-a-deployment.yaml
│   ├── service-a-hpa.yaml
│   ├── service-a-service.yaml
│   ├── service-b-deployment.yaml
│   └── service-b-service.yaml
│
├── Journal/
│   ├── Progress.md
│   │
│   └── Sessions/
│       ├── 2026-08-04-session-01.md
│       ├── 2026-08-05-session-02.md
│       ├── 2026-08-06-session-03.md
│       ├── 2026-08-06-session-04.md
│       ├── 2026-08-07-session-05.md
│       ├── 2026-08-10-session-06.md
│       └── 2026-08-11-session-07.md
│
├── Review/
│   ├── Flashcard.md
│   ├── Mini_Exams
│   ├── Mistakes.md
│   └── Questions.md
│
├── services/
│   ├── service-a/
│   │   ├── src/
│   │   ├── dist/
│   │   ├── .dockerignore
│   │   ├── .env
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── tsconfig.json
│   │
│   └── service-b/
│       ├── src/
│       ├── dist/
│       ├── .dockerignore
│       ├── .env
│       ├── Dockerfile
│       ├── package.json
│       ├── package-lock.json
│       └── tsconfig.json
│
├── tests/
│   ├── service-a-hello.js
│   ├── service-a-work.js
│   ├── service-a-work-capacity.js
│   └── service-a-work-stress.js
│
├── compose.yaml
├── metrics-server.yaml
├── .gitignore
└── README.md
```

---

# Genel Sistem Mimarisi

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

Service A ana servis olarak çalışmaktadır.

Service B ise Service A'nın downstream dependency'sidir.

---

# Service A

## Sorumluluğu

Service A:

- HTTP request'lerini karşılar.
- Health endpoint'i sağlar.
- Basit hello endpoint'i sağlar.
- Kontrollü CPU-bound workload oluşturur.
- Service B'ye HTTP isteği gönderir.
- Kubernetes üzerinde birden fazla replica ile çalışabilir.
- Metrics Server tarafından CPU ve memory kullanımı izlenebilir.
- HPA tarafından otomatik ölçeklenebilir.

## Port

```text
3000
```

## Mimari

```text
service-a/
│
├── src/
│   ├── config/
│   │
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

## Katmanların Sorumlulukları

```text
server.ts
→ HTTP sunucusunu başlatır.

app.ts
→ Express uygulamasını oluşturur.

routes/
→ Endpoint routing işlemlerini içerir.

handlers/
→ HTTP request ve response işlemlerini yönetir.

workload/
→ HTTP katmanından bağımsız CPU workload mantığını içerir.

config/
→ Uygulama configuration işlemlerini içerir.
```

Bu yapı sayesinde HTTP katmanı ile workload mantığı birbirinden ayrılmıştır.

---

# Service A Endpoint'leri

| Endpoint | Açıklama |
| --- | --- |
| `GET /health` | Servisin çalışır durumda olduğunu doğrular |
| `GET /hello` | Basit karşılama cevabı döndürür |
| `GET /work` | CPU-bound workload oluşturur |
| `GET /call-service-b` | Service B'nin `/hello` endpoint'ini çağırır |

---

# `/health`

```text
GET /health
```

Service A'nın sağlık durumunu kontrol etmek için kullanılır.

Kubernetes ortamında aynı endpoint:

```text
Readiness Probe
+
Liveness Probe
```

tarafından kullanılmaktadır.

---

# `/hello`

```text
GET /hello
```

Service A'nın temel HTTP davranışını test etmek için kullanılan basit endpoint'tir.

Özellikle ilk k6 testlerinde düşük maliyetli endpoint olarak kullanılmıştır.

---

# `/work`

```text
GET /work
```

CPU-bound işlem gerçekleştirir.

Bu endpoint projenin performans ve autoscaling deneylerinde önemli rol oynar.

Kullanıldığı alanlar:

```text
k6 Load Test
↓
Stress Test
↓
Capacity Test
↓
Kubernetes CPU Metrics
↓
Metrics Server
↓
Horizontal Pod Autoscaler
```

CPU-bound workload sayesinde Node.js Event Loop üzerinde saturation davranışı gözlemlenebilmektedir.

---

# `/call-service-b`

```text
GET /call-service-b
```

Service A'nın Service B ile HTTP üzerinden haberleşmesini sağlar.

Service A içerisinde Node.js `fetch()` API'si kullanılmaktadır.

---

# Service B

## Sorumluluğu

Service B:

- Service A'dan gelen HTTP request'lerini karşılar.
- Health endpoint'i sağlar.
- Hello endpoint'i sağlar.
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
| `GET /health` | Service B'nin sağlık durumunu kontrol eder |
| `GET /hello` | Service B adına basit response döndürür |

---

# Environment Variables

Service A yaklaşık olarak aşağıdaki configuration değerlerini kullanır:

```env
PORT=3000
SERVICE_NAME=service-a
APP_VERSION=1.0.0
SERVICE_B_URL=...
```

Service B:

```env
PORT=3001
SERVICE_NAME=service-b
APP_VERSION=1.0.0
```

Environment Variable kullanımı sayesinde servis adresleri kaynak kod içerisinde hard-code edilmez.

---

# Service-to-Service Communication

## Docker Ortamı

Manuel Docker kullanımında Service B adresi:

```text
http://service-b-container:3001
```

şeklinde kullanılabilir.

Akış:

```text
Service A
↓
Docker DNS
↓
service-b-container
↓
Service B
```

---

# Docker Compose Ortamı

Docker Compose ortamında:

```text
http://service-b:3001
```

kullanılır.

Buradaki:

```text
service-b
```

Compose service name'dir.

Compose tarafından oluşturulan network içerisinde DNS hostname olarak kullanılabilir.

Akış:

```text
Service A
↓
SERVICE_B_URL
↓
service-b:3001
↓
Docker DNS
↓
Service B
```

---

# Kubernetes Ortamı

Kubernetes tarafında Service A yine:

```text
http://service-b:3001
```

adresini kullanır.

Ancak burada `service-b` artık Docker Compose service name değil, Kubernetes Service adıdır.

Akış:

```text
Service A Pod
↓
SERVICE_B_URL
↓
http://service-b:3001
↓
Kubernetes DNS
↓
service-b ClusterIP Service
↓
Service B Pod
```

Bu sayede Service A doğrudan Service B Pod IP'sini bilmek zorunda değildir.

---

# Docker

Her iki servis de Docker image olarak paketlenebilir.

Temel yapı:

```text
Source Code
↓
Dockerfile
↓
Docker Image
↓
Docker Container
```

Docker sayesinde uygulama çalışma ortamı standart hale getirilmiştir.

---

# Service A Dockerfile Mantığı

Temel build akışı:

```text
Base Image
↓
WORKDIR
↓
package.json
↓
npm install
↓
Source Code
↓
npm run build
↓
npm start
```

Docker layer ve build cache mantığı öğrenilmiştir.

Package dosyalarının kaynak koddan önce kopyalanması sayesinde dependency layer'ı daha etkili cache edilebilir.

---

# Docker Network

Manuel Docker kullanımında:

```text
cloud-native-network
```

adlı custom bridge network oluşturulmuştur.

Aynı network üzerindeki container'lar Docker DNS sayesinde container name üzerinden birbirlerine erişebilir.

```text
service-a-container
↓
service-b-container:3001
```

Pod veya container IP adreslerini doğrudan kod içine yazmak yerine DNS tabanlı isim kullanımı tercih edilmektedir.

---

# Docker Compose

Repository kökünde:

```text
compose.yaml
```

bulunmaktadır.

Service A ve Service B aynı Compose projesi içerisinde yönetilmektedir.

Genel mantık:

```text
Docker Compose
│
├── service-a
│
└── service-b
     │
     └── healthcheck
```

Compose sayesinde:

- build
- environment
- network
- ports
- healthcheck
- startup dependency

tek dosya üzerinden yönetilebilir.

---

# Docker Compose Network

Compose otomatik olarak default network oluşturur.

Bu projede:

```text
nodejs-cloud-native-learning_default
```

network'ü kullanılmıştır.

Servisler birbirlerine service name ile erişebilir.

```text
service-a
↓
Docker DNS
↓
service-b
```

---

# Docker Compose Healthcheck

Service B için healthcheck tanımlanmıştır.

Kontrol edilen endpoint:

```text
http://localhost:3001/health
```

Healthcheck container içerisinden çalışmaktadır.

```text
Container Up
≠
Application Healthy
```

ayrımı bu aşamada öğrenilmiştir.

---

# Docker Compose Dependency

Service A, Service B'ye bağımlıdır.

Compose tarafında:

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
Service B healthy
↓
Service A başlar
```

Bu yapı startup dependency sağlar.

---

# k6 Load Testing

k6 ile Service A üzerinde farklı performans testleri gerçekleştirilmiştir.

Mevcut test dosyaları:

```text
tests/
├── service-a-hello.js
├── service-a-work.js
├── service-a-work-capacity.js
└── service-a-work-stress.js
```

---

# `service-a-hello.js`

Basit ve düşük maliyetli endpoint performansını ölçmek için kullanılmıştır.

Test endpoint'i:

```text
GET /hello
```

Bu test ile:

- Virtual User
- Iteration
- Throughput
- Latency
- P90
- P95
- Failure Rate

kavramları öğrenilmiştir.

---

# `service-a-work.js`

CPU-bound `/work` endpoint'inin temel yük testi için kullanılmıştır.

Bu test ile `/hello` ve `/work` endpoint'leri arasındaki performans farkı gözlemlenmiştir.

---

# `service-a-work-stress.js`

Kademeli VU artışı ile stress test gerçekleştirmek için kullanılır.

Örnek yapı:

```text
10 VU
↓
50 VU
↓
100 VU
↓
0 VU
```

Bu test HPA davranışını tetiklemek için de kullanılmıştır.

---

# `service-a-work-capacity.js`

Service A'nın kapasite sınırını anlamak için kullanılmıştır.

Testler:

```text
1 VU
2 VU
3 VU
4 VU
5 VU
10 VU
20 VU
40 VU
80 VU
```

seviyelerinde gerçekleştirilmiştir.

---

# Benchmark Results

| VU | Req/s | Avg | P95 |
| ---: | ---: | ---: | ---: |
| 1 | 9.57 | 104 ms | 106 ms |
| 2 | 9.89 | 200 ms | 204 ms |
| 3 | 9.86 | 300 ms | 415 ms |
| 4 | 9.86 | 399 ms | 615 ms |
| 5 | 9.84 | 497 ms | 812 ms |
| 10 | 9.85 | 967 ms | 1.82 s |
| 20 | 9.73 | 1.88 s | 9.74 s |
| 40 | 9.82 | 3.48 s | 13.21 s |
| 80 | 9.84 | 6.30 s | 17.12 s |

---

# Capacity Analysis

Capacity test sonucunda:

- Service A yaklaşık `10 request/s` işleyebildi.
- Virtual User sayısı arttığında throughput belirgin şekilde artmadı.
- Throughput yaklaşık aynı seviyede kalırken latency yükseldi.
- P95 değeri concurrency arttıkça ciddi şekilde yükseldi.
- Request'ler kuyrukta daha uzun süre beklemeye başladı.
- CPU-bound workload Node.js Event Loop üzerinde saturation oluşturdu.

Temel davranış:

```text
Concurrency ↑
↓
CPU Saturation
↓
Throughput ≈ Sabit
↓
Latency ↑
```

Bu değerler Kubernetes öncesi performans baseline'ı olarak kullanılmıştır.

---

# Kubernetes

Service A ve Service B Kubernetes üzerinde çalıştırılmaktadır.

Kubernetes tarafında kullanılan temel kaynaklar:

```text
Deployment
ReplicaSet
Pod
Service
ConfigMap
HPA
```

---

# Kubernetes Cluster

Local development ortamında Kubernetes cluster kullanılmaktadır.

Genel yapı:

```text
Kubernetes Cluster
│
├── Control Plane Node
│
└── Worker Node
```

Uygulama Pod'ları Worker Node üzerinde çalışmaktadır.

---

# Deployment

Service A ve Service B için ayrı Deployment kaynakları bulunmaktadır.

Deployment'ın temel görevi:

```text
Desired State
```

tanımlamaktır.

Örneğin:

```text
Service A
replicas: 2
```

ise Kubernetes 2 Service A Pod'u çalıştırmaya çalışır.

---

# Deployment → ReplicaSet → Pod

Temel ilişki:

```text
Deployment
↓
ReplicaSet
↓
Pod
↓
Container
```

Deployment desired state'i yönetir.

ReplicaSet istenen replica sayısını korur.

Pod uygulamanın çalışan instance'ıdır.

Container ise Pod içerisindeki uygulama process'ini çalıştırır.

---

# Kubernetes Self-Healing

Bir Pod silindiğinde ReplicaSet desired state'i tekrar sağlamak için yeni Pod oluşturabilir.

Örneğin:

```text
Desired = 2 Pod

Current = 1 Pod
↓
ReplicaSet
↓
Yeni Pod
↓
Current = 2 Pod
```

Bu davranış Kubernetes Self-Healing mekanizmasının temel örneklerinden biridir.

---

# Kubernetes Service

Service A ve Service B için ClusterIP Service kullanılmaktadır.

Service:

```text
Stabil ağ erişim noktası
```

sağlar.

Pod IP'leri değişebilir.

Service adı ve ClusterIP ise uygulama communication için daha stabil abstraction sağlar.

---

# Kubernetes DNS

Service'ler isimleri üzerinden çözümlenebilir.

Örneğin:

```text
service-b
```

Kubernetes DNS tarafından ilgili Service'e çözümlenir.

Bu nedenle Service A:

```text
http://service-b:3001
```

üzerinden Service B'ye erişebilir.

---

# ConfigMap

Service A'nın Service B adresi ConfigMap üzerinden yönetilmektedir.

Dosya:

```text
deployments/service-a-configmap.yaml
```

Configuration akışı:

```text
ConfigMap
↓
SERVICE_B_URL
↓
configMapKeyRef
↓
Container Environment Variable
↓
process.env.SERVICE_B_URL
```

Bu sayede configuration application image'dan ayrılmıştır.

---

# Readiness Probe

Service A için Readiness Probe bulunmaktadır.

Endpoint:

```text
GET /health
```

Temel amacı:

```text
Pod trafik almaya hazır mı?
```

sorusuna cevap vermektir.

Readiness başarısız olduğunda Pod çalışıyor olsa bile Service tarafından trafik almaması sağlanabilir.

---

# Liveness Probe

Service A için Liveness Probe bulunmaktadır.

Endpoint:

```text
GET /health
```

Temel amacı:

```text
Container sağlıklı şekilde çalışmaya devam ediyor mu?
```

sorusuna cevap vermektir.

Tekrarlayan failure durumunda container restart edilebilir.

---

# Running ve Ready

Önemli ayrım:

```text
Running
≠
Ready
```

Örneğin:

```text
0/1 Running
```

container process'inin çalıştığını fakat Pod'un henüz Ready olmadığını gösterebilir.

```text
1/1 Running
```

ise Pod'un Ready olduğunu gösterir.

---

# Metrics Server

Kubernetes cluster'a Metrics Server kurulmuştur.

Metrics Server:

```text
CPU
Memory
```

resource metric'lerini Kubernetes tarafından kullanılabilir hale getirir.

Temel veri akışı:

```text
Pod / Container
↓
Node
↓
Kubelet
↓
Metrics Server
↓
Metrics API
↓
kubectl top / HPA
```

Metrics Server tam kapsamlı monitoring sistemi değildir.

Temel amacı resource metric altyapısı sağlamaktır.

---

# `kubectl top pods`

Pod CPU ve memory kullanımı:

```powershell
kubectl top pods
```

ile görüntülenmektedir.

Örnek idle değerler:

```text
service-a Pod 1 → yaklaşık 3m CPU
service-a Pod 2 → yaklaşık 3m CPU
service-b       → yaklaşık 1m CPU
```

---

# CPU Millicore

Kubernetes CPU metric'lerinde:

```text
m
```

millicore anlamına gelir.

```text
1000m = 1 CPU Core
500m  = 0.5 CPU Core
100m  = 0.1 CPU Core
```

Service A `/work` yükü altında bir Pod'da yaklaşık:

```text
402m
```

CPU kullanımı gözlemlenmiştir.

---

# `kubectl top nodes`

Node resource kullanımı:

```powershell
kubectl top nodes
```

ile görüntülenmiştir.

Örnek:

```text
desktop-control-plane → 759m CPU
desktop-worker        → 192m CPU
```

Pod ve Node resource metric seviyelerinin farklı olduğu öğrenilmiştir.

---

# Kubernetes Resource Management

Service A Deployment üzerinde resource request ve limit değerleri tanımlanmıştır.

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

# Request, Usage ve Limit

Temel ayrım:

```text
Request
→ Kubernetes'e bildirilen resource ihtiyacı

Usage
→ Container'ın gerçek resource tüketimi

Limit
→ Container'ın kullanabileceği resource üst sınırı
```

Request gerçek kullanım değildir.

Örneğin:

```text
CPU Request = 100m
CPU Usage   = 3m
```

olabilir.

---

# Horizontal Scaling

Horizontal Scaling:

```text
Instance sayısını değiştirir.
```

Örneğin:

```text
2 Pod
↓
3 Pod
↓
5 Pod
```

Vertical Scaling ise mevcut instance'ın CPU veya memory kapasitesini değiştirmeyi ifade eder.

---

# Horizontal Pod Autoscaler

Service A için HPA kullanılmaktadır.

Dosya:

```text
deployments/service-a-hpa.yaml
```

Güncel yapı:

```text
Target
→ Deployment/service-a

Metric
→ CPU

Target CPU
→ 50%

Minimum Replica
→ 2

Maximum Replica
→ 5
```

---

# HPA Manifesti

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler

metadata:
  name: service-a-hpa

spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: service-a

  minReplicas: 2
  maxReplicas: 5

  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 50
```

---

# CPU Utilization ve Request

Service A:

```text
CPU Request = 100m
```

HPA target:

```text
50%
```

Örneğin:

```text
CPU Usage = 50m
```

ise yaklaşık:

```text
50m / 100m × 100
=
50%
```

CPU utilization oluşur.

Utilization değeri `%100` üzerine çıkabilir.

Örneğin:

```text
CPU Request = 100m
CPU Usage   = 245m
```

ise yaklaşık:

```text
245%
```

utilization görülebilir.

---

# HPA Çalışma Akışı

```text
Service A Pods
↓
CPU Usage
↓
Kubelet
↓
Metrics Server
↓
Metrics API
↓
HPA
↓
Current CPU / Target CPU
↓
Desired Replica Count
↓
Deployment
↓
ReplicaSet
↓
Pods
```

HPA doğrudan Pod oluşturmaz.

Deployment'ın desired replica sayısını etkiler.

---

# k6 ile HPA Testi

`service-a-work-stress.js` kullanılarak Service A üzerinde CPU yükü oluşturulmuştur.

Test sırasında HPA canlı olarak takip edilmiştir.

Gözlemlenen değerlerden bazıları:

```text
cpu: 1%/50%
replicas: 2
```

Daha sonra:

```text
cpu: 67%/50%
replicas: 2
```

Daha yoğun yükte:

```text
cpu: 245%/50%
replicas: 3
```

Ardından:

```text
replicas: 5
```

gözlemlenmiştir.

---

# HPA Scale-Up

Gerçek scale-up:

```text
2 Pod
↓
3 Pod
↓
5 Pod
```

şeklinde gerçekleşmiştir.

Akış:

```text
k6 Load
↓
CPU Usage ↑
↓
Metrics Server
↓
HPA Target aşılır
↓
Deployment replica ↑
↓
Yeni Pod'lar
```

---

# Yeni Pod Lifecycle

HPA scale-up sırasında yeni Pod'larda:

```text
Pending
↓
Running 0/1
↓
Running 1/1
```

durumları gözlemlenmiştir.

Bu sayede autoscaling ile readiness davranışı birlikte incelenmiştir.

---

# HPA Scale-Down

Load test tamamlandıktan sonra CPU kullanımı düşmüştür.

HPA replica sayısını hemen azaltmamıştır.

Scale-down stabilization sonrasında Service A tekrar minimum replica seviyesine dönmüştür.

```text
5 Pod
↓
CPU Usage düşer
↓
Stabilization
↓
Replica sayısı azalır
↓
2 Pod
```

---

# HPA Conditions

`kubectl describe hpa service-a-hpa` ile HPA condition'ları incelenmiştir.

Önemli condition'lar:

```text
AbleToScale
ScalingActive
ScalingLimited
```

Örnek durumlar:

```text
AbleToScale=True
ScalingActive=True
ScalingLimited=False
```

---

# HPA Events

Scaling geçmişi HPA Events üzerinden incelenmiştir.

Önemli event:

```text
SuccessfulRescale
```

Scale-up nedeni:

```text
cpu resource utilization above target
```

Scale-down nedeni:

```text
All metrics below target
```

olarak gözlemlenmiştir.

---

# Güncel Cloud Native Mimari

```text
                        k6
                         │
                         ▼
                  Service A Service
                         │
                ┌────────┴────────┐
                ▼                 ▼
         Service A Pod      Service A Pod
                │                 │
                └────────┬────────┘
                         │
                         ▼
                     CPU Usage
                         │
                         ▼
                      Kubelet
                         │
                         ▼
                  Metrics Server
                         │
                         ▼
                        HPA
                         │
                         ▼
                    Deployment
                         │
                         ▼
                     ReplicaSet
                         │
                         ▼
                  Service A Pods
```

Service communication:

```text
Service A Pods
↓
SERVICE_B_URL
↓
Kubernetes DNS
↓
service-b Service
↓
Service B Pod
```

---

# Temel Kubernetes Komutları

Node'ları görüntülemek:

```powershell
kubectl get nodes
```

Pod'ları görüntülemek:

```powershell
kubectl get pods
```

Deployment'ları görüntülemek:

```powershell
kubectl get deployments
```

Service'leri görüntülemek:

```powershell
kubectl get services
```

HPA'yı görüntülemek:

```powershell
kubectl get hpa
```

HPA detaylarını görüntülemek:

```powershell
kubectl describe hpa service-a-hpa
```

Pod CPU ve memory:

```powershell
kubectl top pods
```

Node CPU ve memory:

```powershell
kubectl top nodes
```

---

# Kubernetes Manifestlerini Uygulama

Service A Deployment:

```powershell
kubectl apply -f .\deployments\service-a-deployment.yaml
```

Service A Service:

```powershell
kubectl apply -f .\deployments\service-a-service.yaml
```

Service A ConfigMap:

```powershell
kubectl apply -f .\deployments\service-a-configmap.yaml
```

Service A HPA:

```powershell
kubectl apply -f .\deployments\service-a-hpa.yaml
```

Service B Deployment:

```powershell
kubectl apply -f .\deployments\service-b-deployment.yaml
```

Service B Service:

```powershell
kubectl apply -f .\deployments\service-b-service.yaml
```

---

# Port Forward

Host makineden Kubernetes içerisindeki Service A'ya geçici erişim için:

```powershell
kubectl port-forward service/service-a 3000:3000
```

kullanılabilir.

Akış:

```text
localhost:3000
↓
kubectl port-forward
↓
service-a
```

Port Forward development ve debugging amacıyla kullanılır.

Production exposure yöntemi değildir.

---

# Projeyi Yerel Ortamda Çalıştırma

## Service A

```powershell
cd services/service-a
npm install
npm run dev
```

Adres:

```text
http://localhost:3000
```

## Service B

```powershell
cd services/service-b
npm install
npm run dev
```

Adres:

```text
http://localhost:3001
```

---

# Docker Compose ile Çalıştırma

Repository root:

```powershell
docker compose up --build
```

Arka planda:

```powershell
docker compose up -d
```

Durum:

```powershell
docker compose ps
```

Log:

```powershell
docker compose logs
```

Kapatmak:

```powershell
docker compose down
```

---

# k6 Testlerini Çalıştırma

Basit hello testi:

```powershell
k6 run .\tests\service-a-hello.js
```

Temel `/work` testi:

```powershell
k6 run .\tests\service-a-work.js
```

Stress testi:

```powershell
k6 run .\tests\service-a-work-stress.js
```

Capacity testi:

```powershell
k6 run .\tests\service-a-work-capacity.js
```

---

# Dokümantasyon Yapısı

Repository yalnızca uygulama kodundan oluşmamaktadır.

Öğrenme süreci de düzenli olarak kaydedilmektedir.

## `Canonical/`

Kalıcı learning path ve tekrar stratejisini içerir.

```text
Canonical/
├── Learning_Path.md
└── Tekrar-stratejisi.md
```

## `Journal/`

Projenin gerçek ilerleme geçmişini içerir.

```text
Journal/
├── Progress.md
└── Sessions/
```

Session dosyaları tarih bazlı çalışma kayıtlarıdır.

## `Review/`

Tekrar ve Active Recall materyallerini içerir.

```text
Review/
├── Flashcard.md
├── Mini_Exams
├── Mistakes.md
└── Questions.md
```

`Flashcard.md`

→ Kısa tekrar kartları.

`Questions.md`

→ Açık uçlu teknik sorular.

`Mistakes.md`

→ Çalışma sırasında yapılan hatalar ve çıkarılan dersler.

`Mini_Exams`

→ Konu bazlı mini sınavlar.

---

# Güncel Durum

Tamamlanan ana teknik aşamalar:

```text
Repository Setup ✅
Git / GitHub ✅
Node.js / TypeScript ✅
Express ✅
Service A ✅
Docker ✅
Docker Network ✅
Service B ✅
Service-to-Service Communication ✅
Docker Compose ✅
Healthcheck ✅
k6 Load Testing ✅
Capacity Analysis ✅
Kubernetes ✅
Deployment / ReplicaSet / Pod ✅
Kubernetes Service / DNS ✅
ConfigMap ✅
Readiness Probe ✅
Liveness Probe ✅
Metrics Server ✅
Resource Requests / Limits ✅
Horizontal Pod Autoscaler ✅
HPA Scale-Up ✅
HPA Scale-Down ✅
k6 + HPA Test ✅
```

---

# Güncel Teknik Kazanımlar

Bu repository ile şu anda aşağıdaki yapıları açıklayabilir ve uygulayabilir durumdayım:

```text
Node.js HTTP Service
↓
TypeScript
↓
Express Architecture
↓
Docker Image
↓
Docker Container
↓
Container Networking
↓
Docker Compose
↓
Service-to-Service HTTP Communication
↓
Load Testing
↓
CPU Saturation
↓
Kubernetes Deployment
↓
ReplicaSet
↓
Pod
↓
Service Discovery
↓
Configuration Management
↓
Health Probes
↓
Resource Metrics
↓
Resource Management
↓
Horizontal Autoscaling
```

---

# k6 Testleri

Proje içerisinde Service A'nın performansını ve Kubernetes autoscaling davranışını incelemek için farklı k6 test senaryoları kullanılmaktadır.

Mevcut testler:

```text
tests/
├── service-a-hello.js
├── service-a-work.js
├── service-a-work-capacity.js
└── service-a-work-stress.js
```

## `service-a-work-stress.js`

Bu test Service A'nın CPU-bound:

```text
GET /work
```

endpoint'ine kademeli olarak artan yük göndermek için kullanılır.

Testin temel amacı:

- Sistemi giderek artan concurrency altında zorlamak
- CPU kullanımındaki artışı gözlemlemek
- Latency davranışını incelemek
- HPA scale-up davranışını tetiklemek
- Replica sayısının yük altında nasıl değiştiğini görmek

Test aşamaları:

```text
10 saniye → 10 VU
10 saniye → 50 VU
10 saniye → 100 VU
10 saniye → 0 VU
```

Yük modeli:

```text
0
↓
10 VU
↓
50 VU
↓
100 VU
↓
0
```

Test içerisinde iki temel threshold kullanılmaktadır:

```text
http_req_failed
→ Failure rate %1'in altında olmalı.

http_req_duration
→ P95 response süresi 2000 ms altında olmalı.
```

Response ayrıca:

```javascript
check(response, {
  "status 200": (r) => r.status === 200
});
```

ile doğrulanmaktadır.

Bu test özellikle Kubernetes HPA deneyinde kullanılmıştır.

Akış:

```text
k6
↓
/work
↓
CPU Usage ↑
↓
Metrics Server
↓
HPA
↓
Replica Count ↑
```

Gerçek test sırasında Service A'nın:

```text
2 Pod
↓
3 Pod
↓
5 Pod
```

şeklinde scale-up yaptığı gözlemlenmiştir.

Testi çalıştırmak:

```powershell
k6 run .\tests\service-a-work-stress.js
```

---

## `service-a-work-capacity.js`

Bu test Service A'nın `/work` endpoint'inin farklı concurrency seviyelerindeki kapasitesini ölçmek için kullanılır.

Test sabit bir VU değeriyle:

```text
10 saniye
```

çalışır.

VU sayısı test kodunda sabit değildir.

Environment Variable üzerinden alınır:

```javascript
const vus = Number(__ENV.VUS || 1);
```

Bu sayede aynı test dosyası farklı VU değerleriyle tekrar tekrar kullanılabilir.

Örneğin:

```powershell
k6 run -e VUS=1 .\tests\service-a-work-capacity.js
```

```powershell
k6 run -e VUS=5 .\tests\service-a-work-capacity.js
```

```powershell
k6 run -e VUS=20 .\tests\service-a-work-capacity.js
```

Bu yaklaşım sayesinde test kodunu değiştirmeden farklı concurrency seviyeleri denenebilir.

Testin temel amacı:

- Service A'nın throughput sınırını bulmak
- VU arttıkça latency değişimini gözlemlemek
- CPU-bound saturation noktasını tespit etmek
- Kubernetes öncesi performans baseline'ı oluşturmak

Test endpoint'i:

```text
GET /work
```

Test boyunca response status:

```javascript
check(response, {
  "status is 200": (r) => r.status === 200
});
```

ile doğrulanmaktadır.

Capacity testlerinde şu VU seviyeleri denenmiştir:

```text
1
2
3
4
5
10
20
40
80
```

Gözlemlenen temel davranış:

```text
VU ↑
↓
Throughput yaklaşık sabit
↓
Latency ↑
↓
CPU Saturation
```

Service A'nın yaklaşık:

```text
10 request/s
```

seviyesinde throughput sınırına ulaştığı gözlemlenmiştir.

Bu test Kubernetes ve HPA öncesinde Service A için performans baseline'ı oluşturmuştur.

Testi çalıştırmak:

```powershell
k6 run -e VUS=10 .\tests\service-a-work-capacity.js
```

---

## Testlerin Amacı

Şu ana kadar kullanılan testlerin genel rolleri:

| Test | Amaç | Endpoint | Yük Modeli |
| --- | --- | --- | --- |
| `service-a-hello.js` | Basit endpoint baseline | `/hello` | Sabit VU |
| `service-a-work.js` | CPU workload temel testi | `/work` | Sabit VU |
| `service-a-work-capacity.js` | Kapasite ve saturation analizi | `/work` | Parametrik VU |
| `service-a-work-stress.js` | Stress ve HPA testi | `/work` | Kademeli VU |

Bu testler birlikte:

```text
Baseline
↓
CPU Workload
↓
Capacity
↓
Stress
↓
Kubernetes HPA
```

akışını oluşturur.

# Repository

GitHub:

```text
https://github.com/thebilici/nodejs-cloud-native-learning
```