# Learning Path

Bu dosya, Node.js servislerinden Kubernetes autoscaling aşamasına kadar izlenecek ana öğrenme yolunu tanımlar.

## Temel yaklaşım

Konular uzun teorik dersler şeklinde değil, proje geliştirilirken ihtiyaç duyuldukça öğrenilecektir.

Her aşamada:

1. Kavramın ne olduğu öğrenilir.
2. Hangi problemi çözdüğü açıklanır.
3. Küçük bir uygulama yapılır.
4. Komutlar ve çıktılar doğrulanır.
5. Karşılaşılan hatalar kaydedilir.
6. Review soruları cevaplanır.

---

## Öğrenme yolu

### 1. Repository ve çalışma düzeni

- Proje klasör yapısı
- Git repository oluşturma
- `.gitignore`
- README ve öğrenme dokümanları
- Küçük ve mantıksal commit'ler

---

### 2. Node.js ve Service A

- Node.js proje yapısı
- `package.json`
- TypeScript kurulumu
- `tsconfig.json`
- Express kurulumu
- Environment Variable yönetimi
- Express uygulaması
- Route yapısı
- Handler (Controller) yapısı
- Middleware mantığı
- JSON response
- Query parametreleri
- Kontrollü CPU workload
- HTTP server yapılandırması
- Graceful shutdown

---

### 3. Testler

- Jest
- Supertest
- Unit Test
- Integration Test
- Test coverage

---

### 4. Service B

- Service A mimarisinin tekrar uygulanması
- İki servisin bağımsız çalıştırılması
- Servisler arası sorumlulukların değerlendirilmesi

---

### 5. Docker

- Dockerfile
- Build context
- Docker image
- Docker container
- Multi-stage build
- Küçük final image
- Non-root kullanıcı
- Port mapping
- Environment variable kullanımı

---

### 6. Docker Compose

- İki servisi birlikte çalıştırma
- Compose network
- Service isimleriyle haberleşme
- Healthcheck
- Container yönetimi
- Log yönetimi

---

### 7. k6 yük testleri

- Smoke Test
- Load Test
- Stress Test
- Spike Test
- VU ve Iteration
- Check
- Threshold
- Response Time metrikleri

---

### 8. Kubernetes

- Namespace
- Deployment
- ReplicaSet
- Pod
- Service
- Label ve Selector
- Resource Request
- Resource Limit
- Health Probe
- Port Forward

---

### 9. Metrics Server

- CPU metrikleri
- Bellek metrikleri
- `kubectl top`
- Metrics API
- Kaynak kullanımının doğrulanması

---

### 10. HPA

- Horizontal Pod Autoscaler
- CPU Utilization
- Replica artırma
- Replica azaltma
- Metrics Server ile çalışma mantığı

---

### 11. Kubernetes üzerinde yük testi

- k6 ile `/work` endpoint'ine yük gönderme
- CPU kullanımını gözlemleme
- Scale Up sürecini izleme
- Scale Down sürecini izleme
- HPA davranışını analiz etme

---

### 12. Genel Review

- Proje mimarisini baştan sona anlatabilme
- Kullanılan komutları açıklayabilme
- Docker ve Kubernetes akışını açıklayabilme
- Hata senaryolarını çözebilme
- Mini teknik mülakat
- Projeyi kendi cümleleriyle anlatabilme

---

## Ana veri akışı

```text
TypeScript kaynak kodu
        │
        ▼
Node.js Uygulaması
        │
        ▼
Docker Image
        │
        ▼
Docker Container
        │
        ▼
Kubernetes Deployment
        │
        ▼
Pod
        │
        ▼
Service
        │
        ▼
k6 Yük Testi
        │
        ▼
CPU Kullanımı
        │
        ▼
Metrics Server
        │
        ▼
Horizontal Pod Autoscaler (HPA)
        │
        ▼
Yeni Pod'lar