# Canonical Roadmap

**Son Güncelleme:** 2026-08-11

## Güncel Konum

Aşama 12 — Kubernetes Load Testing

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
Horizontal Pod Autoscaler ✅
        ↓
Kubernetes Load Testing ← Güncel Aşama
        ↓
Tek Pod vs Çok Pod Karşılaştırması
        ↓
Proje Analizi ve Genel Tekrar
```

## Tamamlanan Aşamalar

### Aşama 8 — k6 Load Testing ✅

Öğrenilen ana konular:

- VU ve Iteration
- Throughput ve Latency
- Average, Median ve P95
- `check()` ve `threshold`
- Load Test
- Stress Test
- Capacity Test
- `stages`
- `__ENV.VUS`
- CPU-bound workload analizi
- Saturation analizi
- Kubernetes öncesi performans baseline'ı

### Aşama 9 — Kubernetes ✅

Öğrenilen ana konular:

- Local Kubernetes Cluster
- Control Plane ve Worker Node
- Cluster → Node → Pod → Container ilişkisi
- Deployment
- ReplicaSet
- Desired State
- Self-Healing
- Pod Template
- Label ve Selector
- ClusterIP Service
- `port` ve `targetPort`
- EndpointSlice
- Kubernetes DNS
- Service Discovery
- Kubernetes içi servisler arası iletişim
- Rolling Update ve Rollout
- ConfigMap
- `configMapKeyRef`
- Readiness Probe
- Liveness Probe
- Port Forward

### Aşama 10 — Metrics Server ✅

Öğrenilen ana konular:

- Kubernetes Resource Metrics
- Metrics Server
- Metrics API
- CPU ve Memory Metrics
- CPU Millicore
- `kubectl top pods`
- `kubectl top nodes`
- Resource Usage
- Resource Request
- Resource Limit
- CPU-bound workload altında resource gözlemleme

Temel ilişki:

```text
Pod
↓
Kubelet
↓
Metrics Server
↓
Metrics API
↓
kubectl top / HPA
```

### Aşama 11 — Horizontal Pod Autoscaler ✅

Öğrenilen ana konular:

- Horizontal Scaling
- HPA çalışma mantığı
- `minReplicas`
- `maxReplicas`
- CPU Utilization
- CPU Usage / CPU Request ilişkisi
- HPA → Deployment ilişkisi
- Scale Up
- Scale Down
- Scale Down Stabilization
- HPA Conditions
- HPA Events

Temel akış:

```text
CPU Load
↓
Metrics Server
↓
HPA
↓
CPU Utilization
↓
Target ile karşılaştır
↓
Deployment Replica Sayısı
↓
Scale Up / Scale Down
```

## Güncel Aşama

### Aşama 12 — Kubernetes Load Testing

Bu aşamada amaç, daha önce öğrendiğimiz k6 performans testlerini Kubernetes ve HPA ile birleştirmek.

Öğrenilecek ana konular:

- Kubernetes üzerinde kontrollü load test
- HPA davranışının yük altında gözlemlenmesi
- Pod sayısı değişirken performansın gözlemlenmesi
- CPU utilization ile replica sayısı ilişkisi
- Throughput değişimi
- Latency değişimi
- P95 değişimi
- Scaling sırasında Pod durumlarının gözlemlenmesi

Temel deney:

```text
k6
↓
Service A
↓
CPU Load
↓
Metrics Server
↓
HPA
↓
Replica Sayısı Artar
↓
Performans Değişimi Ölçülür
```

### Aşama 13 — Proje Analizi ve Genel Tekrar

Bu aşamada proje baştan sona tekrar edilecek.

```text
Node.js
↓
Express
↓
Service A / Service B
↓
Docker
↓
Docker Compose
↓
k6
↓
Kubernetes
↓
Metrics Server
↓
HPA
```

Amaç yalnızca komutları hatırlamak değil, bütün sistemin nasıl birlikte çalıştığını açıklayabilmek.

Final tekrar kapsamında:

- Mimariyi sıfırdan açıklama
- Servisler arası iletişimi açıklama
- Docker ve Kubernetes farklarını açıklama
- Kubernetes resource'larını açıklama
- Metrics Server veri akışını açıklama
- HPA karar mekanizmasını açıklama
- Load test sonuçlarını yorumlama
- Sık yapılan hataları tekrar etme
- Flashcards
- Questions
- Genel proje değerlendirmesi