# Progress

Bu dosya, projenin güncel ilerleme durumunu takip eder.

## Mevcut aşama

Aşama 9 — Kubernetes

## Tamamlanan aşamalar

* Aşama 1 — Öğrenme repository yapısını kurma
* Aşama 2 — Git çalışma düzenini pekiştirme
* Aşama 3 — Node.js ve TypeScript servis başlangıcı
* Aşama 4 — Service A mimarisini oluşturma
* Aşama 5 — Service A'yı Docker container içinde çalıştırma
* Aşama 6 — Docker Network ve servisler arası iletişim
* Aşama 7 — Docker Compose
* Aşama 8 — k6 Load Testing ve Capacity Analysis

---

## Tamamlanan adımlar

### Aşama 1 — Repository başlangıcı

* Ana proje klasörü oluşturuldu.
* Proje VS Code ile açıldı.
* Yerel Git repository başlatıldı.
* Varsayılan branch adı `main` olarak ayarlandı.
* `.gitignore` dosyası oluşturuldu.
* Ana proje klasörleri oluşturuldu.
* `README.md` oluşturuldu.
* `START_HERE.md` oluşturuldu.
* `Canonical/Learning_Path.md` oluşturuldu.
* `Journal/Progress.md` oluşturuldu.
* İlk tarihli session dosyası oluşturuldu.
* İlk Git commit'i oluşturuldu.
* GitHub üzerinde uzak repository oluşturuldu.
* Yerel repository, `origin` adıyla GitHub repository'sine bağlandı.
* `main` branch'i GitHub'a gönderildi.
* Yerel `main` branch'i ile `origin/main` arasında takip ilişkisi kuruldu.

### Aşama 2 — Git çalışma düzeni

* `git status` ile repository durumu kontrol edildi.
* `git branch -vv` ile yerel ve uzak branch ilişkisi incelendi.
* `git log --oneline` ile commit geçmişi görüntülendi.
* `README.md` dosyasına GitHub repository bağlantısı eklendi.
* `git diff` ile working directory değişiklikleri incelendi.
* Belirli dosyalar `git add <dosya>` komutuyla staging area'ya alındı.
* `git diff --staged` ile staging area'daki değişiklikler incelendi.
* `git restore --staged <dosya>` ile dosya silinmeden staging area'dan çıkarıldı.
* Değişiklikler commit edildi.
* Commitler GitHub'a gönderildi.
* Working directory, staging area, local repository ve remote repository ilişkisi uygulamalı olarak öğrenildi.
* `git add .` yerine yalnızca ilgili dosyaları stage etmenin daha kontrollü olduğu öğrenildi.
* Commit mesajlarının yapılan değişikliğin gerçek amacını yansıtması gerektiği öğrenildi.
* Conventional Commit formatı kullanılmaya başlandı.

### Aşama 3 — Node.js ve TypeScript başlangıcı

* Go ile devam etmek yerine Node.js ve TypeScript kullanılmasına karar verildi.
* Repository adı `nodejs-cloud-native-learning` olarak güncellendi.
* Go module yapısı kaldırıldı.
* `service-a` klasörü Node.js ve TypeScript yapısına dönüştürüldü.
* `src` klasörü oluşturuldu.
* `config`, `handlers`, `routes` ve `workload` klasörleri oluşturuldu.
* `package.json` oluşturuldu.
* TypeScript kuruldu.
* `tsx` kuruldu.
* `@types/node` kuruldu.
* `tsconfig.json` oluşturuldu.
* Express kuruldu.
* `@types/express` kuruldu.
* `dotenv` kuruldu.
* `.env` dosyası oluşturuldu.
* `PORT`, `SERVICE_NAME` ve `APP_VERSION` environment variable olarak tanımlandı.
* `npm run dev` komutu oluşturuldu.
* Geliştirme ortamı `tsx watch` ile çalıştırıldı.
* İlk Express uygulaması oluşturuldu.
* `GET /health` endpoint'i geliştirildi.
* Health endpoint'i Postman ve PowerShell üzerinden test edildi.

### Aşama 4 — Service A mimarisi

* Express uygulaması ile HTTP sunucusunun başlatılması birbirinden ayrıldı.
* `app.ts` dosyası oluşturuldu.
* `server.ts` dosyası sadeleştirildi.
* `app.listen()` çağrısı `server.ts` içinde bırakıldı.
* `app.ts`, Express uygulamasını hazırlayan katman haline getirildi.
* `server.ts`, uygulamayı belirli bir portta çalıştıran başlangıç noktası haline getirildi.
* Uygulama tanımı ile sunucu başlangıcı arasındaki sorumluluk farkı öğrenildi.
* `health.handler.ts` oluşturuldu.
* Health endpoint'inin response üretme mantığı handler katmanına taşındı.
* `routes/index.ts` oluşturuldu.
* Express `Router` yapısı kullanılmaya başlandı.
* Route ve handler sorumlulukları birbirinden ayrıldı.
* `app.ts` içindeki doğrudan route tanımı kaldırıldı.
* Route'lar `app.use(router)` ile ana Express uygulamasına bağlandı.
* `GET /hello` endpoint'i geliştirildi.
* `hello.handler.ts` oluşturuldu.
* Yeni bir endpoint eklenirken yalnızca handler ve route katmanının değiştirilmesi gerektiği öğrenildi.
* `GET /work` endpoint'i geliştirildi.
* `work.handler.ts` oluşturuldu.
* `cpu-workload.ts` oluşturuldu.
* CPU yükü oluşturan işlem workload katmanına taşındı.
* HTTP katmanı ile CPU workload mantığı birbirinden ayrıldı.
* Separation of Concerns prensibi uygulandı.
* CPU ağırlıklı işlemlerin Node.js Event Loop üzerindeki etkisi incelendi.
* `/work` endpoint'inin ileride k6 ve Kubernetes HPA testlerinde kullanılmasına karar verildi.
* Mevcut `/health`, `/hello` ve `/work` endpoint'leri doğrulandı.
* Kod değişiklikleri küçük ve mantıksal commitler halinde GitHub'a gönderildi.

### Aşama 5 — Docker temelleri ve Service A containerization

* Docker'ın hangi problemi çözdüğü öğrenildi.
* Uygulama çalışma ortamının Docker ile standartlaştırılabileceği öğrenildi.
* Docker Image ile Docker Container arasındaki fark öğrenildi.
* Bir image'dan bir veya birden fazla container oluşturulabileceği öğrenildi.
* Dockerfile'ın image oluşturma talimatlarını içeren bir tarif dosyası olduğu öğrenildi.
* Service A klasöründe `Dockerfile` oluşturuldu.
* `FROM node:22-alpine` ile base image seçildi.
* Base image ve version pinning kavramları öğrenildi.
* `WORKDIR /app` ile container içindeki çalışma dizini oluşturuldu.
* Host dosya sistemi ile container dosya sistemi arasındaki fark öğrenildi.
* `COPY package*.json ./` ile bağımlılık tanım dosyaları image içine kopyalandı.
* Docker layer ve build cache mantığı öğrenildi.
* Kaynak koddan önce package dosyalarını kopyalamanın build cache açısından önemi öğrenildi.
* `RUN npm install` ile bağımlılıklar image build aşamasında kuruldu.
* `COPY . .` ve Docker build context kavramı öğrenildi.
* `.dockerignore` dosyası oluşturuldu.
* `node_modules`, `dist`, `.env`, `.git` ve gereksiz log dosyaları build context dışında bırakıldı.
* `.gitignore` ile `.dockerignore` arasındaki fark öğrenildi.
* `.env` dosyasının image içine gömülmemesi gerektiği öğrenildi.
* `RUN npm run build` ile TypeScript kaynak kodu JavaScript'e derlendi.
* `CMD ["npm", "start"]` ile container başlangıç komutu tanımlandı.
* `RUN` ve `CMD` arasındaki build-time ve runtime farkı öğrenildi.
* Service A için Docker image oluşturuldu.
* `service-a:1.0` image'ı başarıyla oluşturuldu.
* Image, `docker images service-a` komutuyla doğrulandı.
* Image'dan `service-a-container` adlı container oluşturuldu.
* `-p 3000:3000` kullanılarak port mapping yapıldı.
* `/health`, `/hello` ve `/work` endpoint'leri container üzerinden başarıyla test edildi.
* `docker ps`, `docker ps -a`, `docker logs`, `docker stop` ve `docker start` komutları kullanıldı.
* `docker run` ile `docker start` arasındaki fark öğrenildi.
* Container'ın durdurulmasının veya silinmesinin image'ı silmediği öğrenildi.

### Aşama 6 — Docker Network ve servisler arası iletişim

* Docker network türleri incelendi.
* `cloud-native-network` adlı custom bridge network oluşturuldu.
* Service A container'ı custom network'e bağlandı.
* Docker DNS ve container name resolution mantığı öğrenildi.
* Container içindeki `localhost` adresinin container'ın kendisini ifade ettiği öğrenildi.
* Geçici curl container'ı ile container adı üzerinden erişim test edildi.
* Service B Node.js, TypeScript ve Express ile oluşturuldu.
* Service B için `health` ve `hello` endpoint'leri geliştirildi.
* Service B için Dockerfile ve `.dockerignore` oluşturuldu.
* `service-b:1.0` image'ı oluşturuldu.
* Service B container olarak çalıştırıldı.
* Service A ve Service B aynı Docker network'e bağlandı.
* Service A'ya `call-service-b` handler'ı eklendi.
* Node.js `fetch()` API'si ile Service A'dan Service B'ye HTTP isteği gönderildi.
* `SERVICE_B_URL` environment variable olarak tanımlandı.
* Service A image'ı `service-a:1.1` olarak yeniden oluşturuldu.
* Servisler arası iletişim başarıyla doğrulandı.
* Değişiklikler commit edilip GitHub'a gönderildi.

### Aşama 7 — Docker Compose

* Repository kökünde `compose.yaml` oluşturuldu.
* Service A ve Service B aynı Compose projesinde tanımlandı.
* `build.context` kullanılarak iki servis için image build süreci Compose'a taşındı.
* `ports` tanımları Compose üzerinden yönetildi.
* `env_file` ile runtime environment variable'ları yüklendi.
* `environment` kullanılarak `SERVICE_B_URL` değeri Compose ortamı için override edildi.
* Service A'nın Service B'ye `http://service-b:3001` üzerinden ulaşması sağlandı.
* Docker Compose Service Name ve Docker DNS mantığı öğrenildi.
* Compose tarafından otomatik oluşturulan default network incelendi.
* `docker compose config` ile Compose dosyası doğrulandı.
* `docker compose up --build` ile servisler çalıştırıldı.
* `docker compose ps` ile Compose servisleri doğrulandı.
* `docker compose logs` ile servis logları incelendi.
* `/health`, `/hello` ve `/call-service-b` endpoint'leri Compose ortamında başarıyla test edildi.
* `docker network inspect` ile Compose network yapısı incelendi.
* `docker compose down` ile Compose kaynaklarının kaldırılması öğrenildi.
* Service B için Docker Healthcheck eklendi.
* `docker compose ps` üzerinden `(healthy)` durumu doğrulandı.
* `depends_on` ve `condition: service_healthy` kullanılarak startup dependency oluşturuldu.
* Container'ın başlaması ile uygulamanın hazır olması arasındaki fark öğrenildi.

### Aşama 8 — k6 Load Testing ve Capacity Analysis

* k6 başarıyla kuruldu.
* `service-a-hello.js` ile ilk load testi gerçekleştirildi.
* Virtual User (VU) ve Iteration kavramları öğrenildi.
* Throughput ve Latency metrikleri incelendi.
* `avg`, `median`, `p90` ve `p95` metrikleri yorumlandı.
* `http_req_failed` metriği incelendi.
* `check()` ile response doğrulamaları eklendi.
* `threshold` ile performans kabul kriterleri tanımlandı.
* `/hello` ile `/work` endpoint'leri performans açısından karşılaştırıldı.
* CPU-bound workload'un Node.js Event Loop üzerindeki etkisi gözlemlendi.
* Constant Load Test gerçekleştirildi.
* Stress Test için `stages` kullanıldı.
* Kademeli VU artışının sistem üzerindeki etkisi incelendi.
* Throughput plato yaparken latency'nin yükseldiği gözlemlendi.
* Saturation kavramı uygulamalı olarak öğrenildi.
* Capacity Test senaryosu oluşturuldu.
* `__ENV.VUS` ile test concurrency değeri parametreleştirildi.
* Configuration over Code yaklaşımı uygulandı.
* 1, 2, 3, 4, 5, 10, 20, 40 ve 80 VU seviyelerinde kapasite ölçümleri gerçekleştirildi.
* Service A'nın yaklaşık 10 req/s işleme kapasitesine sahip olduğu gözlemlendi.
* Kubernetes Horizontal Pod Autoscaler öncesi performans baseline'ı oluşturuldu.

### Aşama 9 — Kubernetes

#### Kubernetes Cluster ve Temel Yapı

* Docker Desktop üzerinden local Kubernetes cluster kullanıldı.
* Control Plane ve Worker Node yapısı incelendi.
* `kubectl get nodes` ile node durumları doğrulandı.
* `kubectl get nodes -o wide` ile node detayları incelendi.
* Cluster node'larının `containerd` runtime kullandığı doğrulandı.
* Cluster → Node → Pod → Container ilişkisi öğrenildi.
* Control Plane ve Worker Node görevleri öğrenildi.
* Scheduler'ın Pod oluşturmadığı, oluşturulan Pod için uygun Node seçtiği öğrenildi.

#### Deployment, ReplicaSet ve Pod

* Service A için Kubernetes Deployment oluşturuldu.
* `apiVersion`, `kind`, `metadata` ve `spec` alanları öğrenildi.
* `replicas` kavramı uygulamalı olarak öğrenildi.
* Pod Template, Label ve Selector yapıları öğrenildi.
* Deployment `spec` ile Pod `template.spec` arasındaki fark öğrenildi.
* `imagePullPolicy: IfNotPresent` kullanıldı.
* Service A için 2 Pod oluşturuldu.
* Pod'ların Worker Node üzerinde çalıştığı doğrulandı.
* ReplicaSet kavramı öğrenildi.
* Deployment → ReplicaSet → Pod → Container ilişkisi öğrenildi.
* Desired State mantığı öğrenildi.
* ReplicaSet'in istenen Pod sayısını koruduğu öğrenildi.
* Kubernetes Self-Healing mantığı incelendi.

#### Kubernetes Service ve Service Discovery

* Service A için ClusterIP Service oluşturuldu.
* Service selector ile Deployment selector arasındaki görev farkı öğrenildi.
* `port` ve `targetPort` arasındaki fark öğrenildi.
* ClusterIP'in cluster içerisindeki stabil servis erişim noktası olduğu öğrenildi.
* Pod IP adreslerinin geçici olduğu ve doğrudan kullanılmaması gerektiği öğrenildi.
* Kubernetes Service Discovery ve DNS mantığı öğrenildi.
* Kubernetes DNS üzerinden `service-a:3000` adresiyle erişim sağlandı.
* EndpointSlice kavramı incelendi.
* Cluster içerisinde geçici `curl-test` Pod'u oluşturuldu.
* `curl-test` Pod'unun yalnızca cluster içinden HTTP isteği gönderen bir test client'ı olduğu öğrenildi.
* Kubernetes DNS → Service → Pod → Express iletişim zinciri uygulamalı olarak doğrulandı.

#### Service B Kubernetes Deployment ve Service

* Service B için Kubernetes Deployment oluşturuldu.
* Service B için 1 replica tanımlandı.
* Service B Pod'u Worker Node üzerinde başarıyla çalıştırıldı.
* Service B için ClusterIP Service oluşturuldu.
* `service-b:3001` adresi Kubernetes DNS üzerinden kullanılabilir hale getirildi.
* Service B Service'in doğru Service B Pod'una trafik yönlendirdiği doğrulandı.

#### Kubernetes Service-to-Service Communication

* Service A ve Service B aynı Kubernetes cluster içerisinde çalıştırıldı.
* Service A'nın Service B'ye Pod IP yerine Kubernetes Service adı üzerinden ulaşması sağlandı.
* `SERVICE_B_URL` Kubernetes ortamına uygun olarak:

```text
http://service-b:3001
```

şeklinde yapılandırıldı.

* Service A → Service B iletişimi Kubernetes DNS üzerinden başarıyla gerçekleştirildi.
* `curl-test` Pod'undan Service A'nın `/call-service-b` endpoint'i çağrıldı.
* Service A'nın Service B'nin `/hello` endpoint'ine ulaştığı doğrulandı.

İletişim akışı:

```text
curl-test
↓
service-a Kubernetes Service
↓
Service A Pod
↓
http://service-b:3001
↓
service-b Kubernetes Service
↓
Service B Pod
↓
Response
↓
Service A
↓
curl-test
```

#### Rolling Update ve Rollout

* Deployment Pod Template değiştiğinde yeni ReplicaSet oluşturulduğu gözlemlendi.
* Yeni Pod'ların oluşturulup eski Pod'ların kademeli olarak kaldırıldığı görüldü.
* Rolling Update mantığı öğrenildi.
* Rollout kavramı öğrenildi.
* Rollout'un Deployment değişikliklerinin yeni Pod'lara uygulanma süreci olduğu öğrenildi.
* `kubectl rollout status deployment/service-a` ile rollout durumu kontrol edildi.
* `kubectl rollout restart deployment/service-a` komutunun Pod'ları yeniden oluşturmak için kullanılabileceği öğrenildi.

#### ConfigMap

* Service A için `service-a-config` ConfigMap oluşturuldu.
* `SERVICE_B_URL` değeri Deployment içerisinden ConfigMap'e taşındı.
* ConfigMap'in gizli olmayan configuration değerlerini ayrı yönetmek için kullanıldığı öğrenildi.
* `valueFrom` ve `configMapKeyRef` kullanımı öğrenildi.

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

* `kubectl get configmaps` ile ConfigMap doğrulandı.
* `kubectl describe configmap service-a-config` ile içeriği incelendi.
* `printenv SERVICE_B_URL` ile değerin container'a ulaştığı doğrulandı.
* ConfigMap environment variable olarak kullanıldığında çalışan container'ın environment değerinin otomatik değişmediği öğrenildi.
* Yeni değerin kullanılabilmesi için Pod'un yeniden oluşturulması gerektiği öğrenildi.

#### Readiness Probe

* Service A Deployment'a Readiness Probe eklendi.
* `/health` endpoint'i readiness kontrolü için kullanıldı.
* Readiness Probe'un Pod'un trafik almaya hazır olup olmadığını belirlediği öğrenildi.
* Readiness başarısız olduğunda Pod'un Service trafiğinden çıkarıldığı öğrenildi.

Kullanılan ayarlar:

```text
initialDelaySeconds: 5
periodSeconds: 10
timeoutSeconds: 2
failureThreshold: 3
successThreshold: 1
```

#### Liveness Probe

* Service A Deployment'a Liveness Probe eklendi.
* `/health` endpoint'i liveness kontrolü için kullanıldı.
* Liveness Probe'un container'ın sağlıklı şekilde çalışmaya devam edip etmediğini kontrol ettiği öğrenildi.
* Tekrarlayan başarısızlıklarda Kubernetes'in container'ı restart edebileceği öğrenildi.

Kullanılan ayarlar:

```text
initialDelaySeconds: 10
periodSeconds: 10
timeoutSeconds: 2
failureThreshold: 3
```

Readiness ve Liveness arasındaki temel fark:

```text
Readiness
→ Pod trafik almaya hazır mı?
→ Başarısızsa Service trafiğinden çıkar.

Liveness
→ Container sağlıklı şekilde çalışıyor mu?
→ Sürekli başarısızsa container restart edilir.
```

#### Probe Doğrulaması

* Probe değişiklikleri Service A Deployment'a uygulandı.
* Yeni rollout gerçekleştirildi.
* Yeni ReplicaSet ve Service A Pod'ları oluşturuldu.
* `kubectl describe pod` ile Readiness ve Liveness Probe'ların Pod'a uygulandığı doğrulandı.
* Service A Pod için:

```text
Status: Running
Ready: True
Restart Count: 0
```

durumu gözlemlendi.

* Probe failure event'i bulunmadığı doğrulandı.
* ConfigMap üzerinden gelen `SERVICE_B_URL` değerinin aynı Pod içerisinde tanımlı olduğu görüldü.

---

## Güncel Kubernetes Durumu

```text
Kubernetes Cluster ✅
        ↓
Deployment ✅
        ↓
ReplicaSet ✅
        ↓
Pod ✅
        ↓
ClusterIP Service ✅
        ↓
Kubernetes DNS / Service Discovery ✅
        ↓
Service A → Service B Communication ✅
        ↓
ConfigMap ✅
        ↓
Readiness Probe ✅
        ↓
Liveness Probe ✅
```

## Sıradaki aşama

### Metrics Server

Bir sonraki aşamada:

* Kubernetes resource metrics mantığı öğrenilecek.
* CPU ve memory metric'leri incelenecek.
* `kubectl top nodes` kullanılacak.
* `kubectl top pods` kullanılacak.
* Service A `/work` endpoint'i üzerinden CPU yükü oluşturulacak.
* Pod CPU kullanımının Kubernetes tarafından nasıl ölçüldüğü gözlemlenecek.
* Horizontal Pod Autoscaler için gerekli metrics altyapısı hazırlanacak.

Ardından:

```text
Metrics Server
↓
Horizontal Pod Autoscaler
↓
k6 ile Kubernetes Load Test
↓
Tek Pod vs Çok Pod performans karşılaştırması
```

aşamasına geçilecektir.

---

## Güncel Service A mimarisi

```text
services/
└── service-a/
    ├── src/
    │   ├── config/
    │   ├── handlers/
    │   │   ├── health.handler.ts
    │   │   ├── hello.handler.ts
    │   │   ├── work.handler.ts
    │   │   └── call-service-b.handler.ts
    │   ├── routes/
    │   │   └── index.ts
    │   ├── workload/
    │   │   └── cpu-workload.ts
    │   ├── app.ts
    │   └── server.ts
    ├── dist/
    ├── .dockerignore
    ├── .env
    ├── Dockerfile
    ├── package.json
    ├── package-lock.json
    └── tsconfig.json
```

### Güncel endpoint'ler

#### Health endpoint

```text
GET /health
```

Servisin çalışır durumda olduğunu gösterir.

Kubernetes Readiness ve Liveness Probe tarafından kullanılmaktadır.

#### Hello endpoint

```text
GET /hello
```

Servis adını içeren basit bir karşılama cevabı döndürür.

#### Work endpoint

```text
GET /work
```

Belirli bir süre CPU ağırlıklı işlem gerçekleştirir.

Bu endpoint:

* k6 load test
* Kubernetes resource kullanımı
* Metrics Server
* Horizontal Pod Autoscaler

çalışmalarında kullanılacaktır.

#### Call Service B endpoint

```text
GET /call-service-b
```

Service A'nın Service B'ye HTTP isteği göndermesini sağlar.

Kubernetes ortamında Service B'ye:

```text
http://service-b:3001
```

adresi üzerinden ulaşmaktadır.

---

## Performans Analizi Özeti

Capacity Test sonuçlarına göre:

* `/work` endpoint'i CPU-bound bir iş yükü üretmektedir.
* Tek bir Node.js instance yaklaşık 10 request/s işleyebilmektedir.
* Virtual User sayısı arttıkça throughput yaklaşık aynı seviyede kalmıştır.
* Concurrency arttıkça latency belirgin şekilde yükselmiştir.
* Request'ler başarısız olmamış ancak kuyrukta bekledikleri için response süreleri uzamıştır.
* Bu davranış Node.js Event Loop üzerinde CPU-bound işlemlerin oluşturduğu saturation etkisini göstermektedir.
* Bu analiz Kubernetes Horizontal Pod Autoscaler çalışmalarının performans baseline'ını oluşturmaktadır.
