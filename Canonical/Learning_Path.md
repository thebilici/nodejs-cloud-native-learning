# Canonical Roadmap

**Son Güncelleme:** 2026-08-07

## Güncel Konum

Aşama 9 — Kubernetes

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
Kubernetes ← Güncel Aşama
        ↓
Metrics Server
        ↓
Horizontal Pod Autoscaler
```

## Tamamlanan Aşama

### Aşama 8 — k6 Load Testing

Bu aşamada aşağıdaki konular tamamlandı:

- k6 kurulumu
- Virtual User (VU) mantığı
- Iteration kavramı
- Throughput analizi
- Latency analizi
- Average, Median ve P95 metrikleri
- HTTP request başarısızlık oranı analizi
- `check()` kullanımı
- `threshold` kullanımı
- Load Test
- Stress Test
- Capacity Test
- `stages` ile kademeli yük oluşturma
- `__ENV.VUS` ile parametreleştirilmiş test senaryosu
- Configuration over Code yaklaşımı
- `/hello` ve `/work` endpoint performans karşılaştırması
- CPU-bound workload analizi
- Node.js Event Loop üzerindeki etkilerin incelenmesi
- Saturation (doygunluk) analizi
- Tek Service A instance kapasitesinin ölçülmesi
- Kubernetes öncesi performans baseline'ının oluşturulması

## Bir Sonraki Hedef

### Aşama 9 — Kubernetes

Bu aşamada;

- Kind Kubernetes Cluster kurulacak.
- Docker image'ları Kubernetes üzerinde çalıştırılacak.
- Pod kavramı öğrenilecek.
- Deployment oluşturulacak.
- Kubernetes Service oluşturulacak.
- Replica mantığı incelenecek.
- Docker Compose ile Kubernetes mimarisi karşılaştırılacak.
- Service A ve Service B Kubernetes ortamında haberleştirilecek.
- Metrics Server kurulumu için ortam hazırlanacak.