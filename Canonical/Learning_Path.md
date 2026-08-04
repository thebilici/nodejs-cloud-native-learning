# Learning Path

Bu dosya, Go servislerinden Kubernetes autoscaling aşamasına kadar izlenecek ana öğrenme yolunu tanımlar.

## Temel yaklaşım

Konular uzun ve bağımsız teorik dersler halinde değil, projede ihtiyaç duyuldukça öğrenilecektir.

Her aşamada:

1. Kavramın ne olduğu öğrenilir.
2. Hangi problemi çözdüğü açıklanır.
3. Küçük bir uygulama yapılır.
4. Komut ve çıktılarla doğrulanır.
5. Hatalar kaydedilir.
6. Review soruları cevaplanır.

## Öğrenme yolu

### 1. Repository ve çalışma düzeni

- Proje klasör yapısı
- Git repository oluşturma
- `.gitignore`
- README ve öğrenme dokümanları
- Küçük ve mantıksal commitler

### 2. Go temelleri ve Service A

- Go module
- Package yapısı
- `main` fonksiyonu
- Config yönetimi
- HTTP handler
- JSON response
- Query parametreleri
- Kontrollü CPU workload
- HTTP server timeout ayarları
- Graceful shutdown

### 3. Go testleri

- `testing` paketi
- `httptest`
- Table-driven test
- Test coverage
- Race detector

### 4. Service B

- Service A ile aynı mimarinin uygulanması
- Servislerin bağımsız çalıştırılması
- Ortak ve farklı sorumlulukların değerlendirilmesi

### 5. Docker

- Dockerfile
- Build context
- Docker image
- Docker container
- Multi-stage build
- Küçük final image
- Non-root kullanıcı
- Port mapping

### 6. Docker Compose

- İki servisi birlikte çalıştırma
- Compose ağı
- Service isimleriyle DNS çözümleme
- Healthcheck
- Log ve container yönetimi

### 7. k6 yük testleri

- Smoke test
- İki servis testi
- Stres testi
- VU ve iteration
- Check ve threshold
- Response time metrikleri

### 8. Kubernetes

- Namespace
- Deployment
- Pod
- Replica
- Service
- Label ve selector
- Resource request ve limit
- Health probe
- Port-forward

### 9. Metrics Server

- CPU ve bellek metrikleri
- `kubectl top`
- Metrics API
- Kubernetes metriklerinin doğrulanması

### 10. HPA

- Horizontal Pod Autoscaler
- CPU utilization
- Replica artırma
- Replica azaltma
- Metrics Server ve HPA ilişkisi

### 11. Kubernetes üzerinde yük testi

- k6 ile `/work` endpoint'ine yük gönderme
- CPU kullanımını gözlemleme
- Scale-up sürecini izleme
- Scale-down sürecini izleme

### 12. Genel review

- Mimariyi baştan sona açıklama
- Komutları doğru klasörde çalıştırma
- Hata senaryoları
- Mini sınav
- Projenin kendi cümleleriyle anlatılması

## Ana veri akışı

```text
Go kaynak kodu
→ Go binary
→ Docker image
→ Container
→ Kubernetes Pod
→ Kubernetes Service
→ k6 yükü
→ CPU metriği
→ Metrics Server
→ HPA
→ Yeni Pod'lar