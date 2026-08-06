# Canonical Roadmap

**Son güncelleme:** 2026-08-06

# Güncel Konum

Aşama 8 — Docker Compose

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
Docker Compose ← sıradaki konu
        ↓
k6
        ↓
Kubernetes
        ↓
Metrics Server
        ↓
Horizontal Pod Autoscaler

Güncel Durum

✅ Repository ve Git çalışma düzeni
✅ Node.js ve TypeScript proje yapısı
✅ Express app.ts ve server.ts ayrımı
✅ Route, Handler ve Workload katmanları
✅ Environment Variable yönetimi
✅ Service A endpointleri
✅ Dockerfile, Image ve Container mantığı
✅ Docker build cache ve .dockerignore
✅ Container yaşam döngüsü
✅ Custom Docker Network
✅ Docker DNS ve container name resolution
✅ Service B oluşturulması
✅ Service A → Service B HTTP iletişimi
✅ Node.js fetch() API kullanımı
✅ SERVICE_B_URL yapılandırması

Tamamlanan Konu: Servisler Arası İletişim

Tamamlanma kriterleri:

Container içindeki localhost açıklanabiliyor.
Containerların neden IP yerine isim kullandığı açıklanabiliyor.
Docker DNS mantığı anlatılabiliyor.
Service A'nın Service B'ye nasıl ulaştığı açıklanabiliyor.
fetch(), async, await ve response.json() görevleri açıklanabiliyor.
Hedef servis adresinin neden environment variable olduğu açıklanabiliyor.
Kod değiştiğinde image ve containerın neden yenilenmesi gerektiği açıklanabiliyor.
Host-to-container ve container-to-container iletişimi ayrılabiliyor.