# Canonical Roadmap

**Son Güncelleme:** 2026-08-10

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

Tamamlanan ana konular:

* VU ve Iteration
* Throughput ve Latency
* Average, Median, P95
* `check()` ve `threshold`
* Load Test
* Stress Test
* Capacity Test
* `stages`
* `__ENV.VUS`
* CPU-bound workload analizi
* Saturation analizi
* Kubernetes öncesi performans baseline'ı

## Güncel Kubernetes İlerlemesi

### Aşama 9 — Kubernetes

Şu ana kadar tamamlananlar:

* Local Kubernetes cluster
* Control Plane ve Worker Node
* Cluster → Node → Pod → Container ilişkisi
* Service A Deployment
* Service B Deployment
* ReplicaSet
* Desired State
* Self-Healing
* Pod Template
* Label ve Selector
* ClusterIP Service
* `port` ve `targetPort`
* EndpointSlice
* Kubernetes DNS
* Service Discovery
* Service A → Service B Kubernetes içi HTTP iletişimi
* `SERVICE_B_URL` environment variable
* Rolling Update ve Rollout
* ConfigMap
* `configMapKeyRef`
* Readiness Probe
* Liveness Probe

Güncel servis iletişimi:

```text
Service A Pod
↓
http://service-b:3001
↓
Kubernetes DNS
↓
service-b ClusterIP Service
↓
Service B Pod
↓
Express
```

Service A configuration:

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

Health check yapısı:

```text
Readiness Probe
→ Pod trafik almaya hazır mı?

Liveness Probe
→ Container sağlıklı şekilde çalışıyor mu?
```

## Bir Sonraki Hedef

### Metrics Server

Bir sonraki aşamada:

* Kubernetes resource metrics mantığı
* CPU ve memory metric'leri
* `kubectl top nodes`
* `kubectl top pods`
* Service A `/work` endpoint'i altında CPU kullanımının gözlemlenmesi
* HPA için metrics altyapısının hazırlanması

öğrenilecek.

Ardından:

```text
Metrics Server
        ↓
Horizontal Pod Autoscaler
        ↓
k6 ile Kubernetes Load Test
        ↓
Tek Pod vs Çok Pod karşılaştırması
```

aşamasına geçilecek.
