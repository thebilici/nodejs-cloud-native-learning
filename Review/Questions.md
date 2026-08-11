# Review Questions

Bu dosya, öğrenilen konuları notlara bakmadan tekrar etmek için kullanılır.

Temel kural:

> Önce hatırla, sonra kontrol et.

Sorulara önce kendi cümlelerimle cevap vermeliyim. Cevabı hatırlayamazsam ilgili not veya session dosyasını kontrol etmeliyim.

## Git ve Repository Temelleri

### Repository yapısı

1. Yerel repository ile GitHub repository arasındaki fark nedir?
2. `.git` klasörü ne işe yarar?
3. `.gitignore` dosyası hangi problemi çözer?
4. Git neden boş klasörleri doğrudan takip etmez?
5. Repository root ne demektir?
6. `README.md` ile `START_HERE.md` arasındaki fark nedir?
7. `Canonical` ve `Journal` klasörlerinin görevleri nelerdir?

### PowerShell komutları

1. `Get-Location` komutu ne gösterir?
2. `Get-ChildItem` komutu ne yapar?
3. `Get-ChildItem -Force` ile normal `Get-ChildItem` arasındaki fark nedir?
4. `Get-ChildItem -Recurse` ne yapar?
5. `Set-Location` hangi amaçla kullanılır?
6. Bir komutu yanlış klasörde çalıştırmak neden problem oluşturabilir?

### Git çalışma alanları

1. Working directory nedir?
2. Staging area nedir?
3. Local repository nedir?
4. Remote repository nedir?
5. Bir dosyanın `untracked` olması ne anlama gelir?
6. Bir dosyanın `modified` olması ne anlama gelir?
7. Bir değişikliğin `staged` olması ne anlama gelir?

### Git komutları

1. `git init` ne yapar?
2. `git status` hangi bilgileri gösterir?
3. `git add README.md` ne yapar?
4. `git add .` ile `git add README.md` arasındaki fark nedir?
5. `git commit` ne yapar?
6. `git push` ne yapar?
7. `git commit` ile `git push` arasındaki fark nedir?
8. `git log --oneline` ne gösterir?
9. `git branch -vv` ne gösterir?
10. `git remote -v` ne gösterir?
11. `git diff` ne gösterir?
12. `git diff --staged` ne gösterir?
13. `git restore --staged README.md` ne yapar?
14. `working tree clean` ifadesi ne anlama gelir?

### Branch ve remote

1. `main` nedir?
2. `origin` nedir?
3. `origin/main` neyi ifade eder?
4. `HEAD` nedir?
5. Commit hash değeri ne işe yarar?
6. `git push -u origin main` komutundaki `-u` parametresi ne yapar?
7. Yerel `main` branch'inin `origin/main` branch'ini takip etmesi ne anlama gelir?

---

## Node.js ve Express

### Mimari

1. `app.ts` ile `server.ts` arasındaki fark nedir?

2. Neden `app.listen()` çağrısını `server.ts` içinde tutuyoruz?

3. Tek sorumluluk (Single Responsibility) prensibini bu projede nasıl uyguladık?

4. Separation of Concerns nedir?

5. Route ile Handler arasındaki fark nedir?

6. Handler neden ayrı dosyalarda tutulur?

7. Workload katmanının görevi nedir?

8. Neden CPU workload kodunu doğrudan `work.handler.ts` içine yazmadık?

9. Yeni bir endpoint eklerken hangi dosyalar değişir?

10. Neden `app.ts` ve `server.ts` çoğu endpoint eklenirken değişmez?

---

### Express

1. `express()` ne oluşturur?

2. `express.Router()` ne işe yarar?

3. `app.use(router)` ne yapar?

4. `app.use("/api", router)` kullanılırsa endpoint'ler nasıl değişir?

5. Neden `healthHandler()` yerine `healthHandler` yazıyoruz?

6. `Request` ve `Response` tiplerini neden kullanıyoruz?

7. Handler içinde `_req` yazılmasının sebebi nedir?

---

### Environment Variables

1. Environment Variable nedir?

2. Neden `.env` dosyası kullanıyoruz?

3. `dotenv.config()` ne yapar?

4. Neden `process.env.PORT` değerini `Number()` ile dönüştürüyoruz?

5. `process.env.SERVICE_NAME || "service-a"` ifadesi ne yapar?

---

### Endpointler

1. `/health` endpoint'inin amacı nedir?

2. `/hello` endpoint'inin amacı nedir?

3. `/work` endpoint'inin amacı nedir?

---

### Workload

1. Busy loop nedir?

2. CPU ağırlıklı işlem Node.js event loop'unu nasıl etkiler?

3. `runCpuWork()` fonksiyonunun görevi nedir?

4. Neden workload katmanını HTTP katmanından ayırdık?

---

### Git Çalışma Disiplini

1. Neden `git add .` yerine belirli dosyaları stage etmeye başladık?

2. `git diff --staged` hangi amaçla kullanılır?

3. Commit atmadan önce hangi kontrolleri yapıyoruz?

4. Conventional Commit nedir?

5. `feat`, `refactor`, `docs`, `fix` ve `chore` commit tipleri hangi durumlarda kullanılır?

---

### Karşılaşılan Problemler

1. `Cannot GET /health` hatası neyi ifade eder?

2. Böyle bir hata aldığında ilk hangi kontrolleri yaparsın?

3. `app.ts` ile `server.ts` ayrımında yaşadığımız problemi nasıl çözdük?

---

# Docker Temelleri

## Docker kavramları

1. Docker hangi problemi çözer?
2. Docker Image ile Docker Container arasındaki fark nedir?
3. Bir image'dan birden fazla container oluşturulabilir mi?
4. Bir container neden yalnızca tek bir image'dan oluşturulur?
5. Dockerfile'ın görevi nedir?
6. Base image nedir?
7. Neden `node:22-alpine` kullandık?

## Dockerfile

1. `FROM` ne işe yarar?
2. `WORKDIR` ne işe yarar?
3. `COPY package*.json ./` ne yapar?
4. Neden önce package dosyalarını kopyalıyoruz?
5. `RUN npm install` ne zaman çalışır?
6. `COPY . .` komutundaki iki `.` neyi ifade eder?
7. Docker Build Context nedir?
8. `.dockerignore` neden kullanılır?
9. `.gitignore` ile `.dockerignore` arasındaki fark nedir?
10. Neden `.env` dosyasını image içine koymuyoruz?
11. `RUN npm run build` ne yapar?
12. `src` ile `dist` arasındaki fark nedir?
13. `CMD ["npm", "start"]` ne zaman çalışır?
14. `RUN` ile `CMD` arasındaki fark nedir?

## Docker komutları

1. `docker build` ne yapar?
2. `docker run` ne yapar?
3. `docker ps` ile `docker ps -a` arasındaki fark nedir?
4. `docker logs` ne işe yarar?
5. `docker stop` ne yapar?
6. `docker start` ne yapar?
7. `docker rm` ne yapar?

## Docker yaşam döngüsü

1. Image ile Container arasındaki ilişkiyi anlat.
2. Container durdurulunca neden `docker start` kullanıyoruz?
3. `docker run` neden her zaman yeni bir container oluşturur?
4. Container silinirse image'a ne olur?
5. Docker'da build aşaması ile runtime aşaması arasındaki fark nedir?


# Docker Network

## 1. Docker Network neden gereklidir?

---

## 2. Docker'ın varsayılan network türü hangisidir?

---

## 3. Bridge network ile custom bridge network arasındaki fark nedir?

---

## 4. Docker DNS nedir ve nasıl çalışır?

---

## 5. Container IP adresi yerine neden container adı kullanılır?

---

## 6. Container içindeki localhost neyi ifade eder?

---

## 7. Service A neden localhost üzerinden Service B'ye erişemez?

---

## 8. Docker Network inspect komutu ne işe yarar?

---

## 9. Docker run komutundaki --network parametresi ne yapar?

---

## 10. Geçici curl container'ı neden kullandık?

---

# Service B

## 11. Service B neden ayrı bir servis olarak oluşturuldu?

---

## 12. Service B'nin görevi nedir?

---

## 13. Service B neden farklı portta çalışıyor?

---

## 14. Service B'de neden workload klasörü oluşturulmadı?

---

## 15. app.ts ile server.ts arasındaki sorumluluk farkı nedir?

---

## 16. Handler ile Route arasındaki fark nedir?

---

# Docker

## 17. Dockerfile neden oluşturulur?

---

## 18. Docker Build Context nedir?

---

## 19. .dockerignore neden kullanılır?

---

## 20. .gitignore ile .dockerignore arasındaki fark nedir?

---

## 21. RUN ile CMD arasındaki fark nedir?

---

## 22. Build aşaması ile runtime aşaması arasındaki fark nedir?

---

## 23. Kod değişince neden image yeniden build edilir?

---

## 24. Kod değişince neden container yeniden oluşturulur?

---

## 25. docker inspect komutunu neden kullandık?

---

# Service to Service Communication

## 26. Service-to-Service Communication nedir?

---

## 27. Bu projede HTTP isteğini hangi servis başlatıyor?

---

## 28. fetch() nedir?

---

## 29. fetch() varsayılan olarak hangi HTTP metodunu kullanır?

---

## 30. await neden kullanılır?

---

## 31. response.json() ne yapar?

---

## 32. SERVICE_B_URL neden Service A içinde bulunuyor?

---

## 33. Service A neden Service B'nin adresini bilmek zorundadır?

---

## 34. Service A ile Service B arasındaki tam iletişim akışını anlat.

---

## 35. Docker DNS bu iletişimde hangi görevi üstleniyor?

---

# Genel Mimari

## 36. Şu anki proje mimarisini baştan sona anlat.

---

## 37. Client isteği ilk olarak nereye gider?

---

## 38. Service B cevabı doğrudan Client'a mı döndürür?

---

## 39. Service A neden ara katman olarak çalışıyor?

---

## 40. Bu projede şimdiye kadar öğrendiğin en önemli Docker kavramları nelerdir?
# Docker Compose Questions

## Docker Compose nedir ve Docker'dan farkı nedir?

---

## Docker Compose neden kullanılır?

---

## `compose.yaml` dosyasının temel amacı nedir?

---

## `services:` bölümü neyi ifade eder?

---

## Compose service name nedir?

---

## Service A neden Service B'ye `service-b:3001` adresiyle ulaşır?

---

## Neden `localhost:3001` yerine `service-b:3001` kullanıyoruz?

---

## Host bilgisayardan Service B'ye nasıl erişilir?

---

## Host-to-container ve container-to-container iletişimi arasındaki fark nedir?

---

## `build.context` ne işe yarar?

---

## Docker build context nedir?

---

## `ports` ne işe yarar?

---

## `"3000:3000"` ifadesinde soldaki ve sağdaki port neyi ifade eder?

---

## Service B'nin portunu publish etmek neden geliştirme ortamında faydalıdır?

---

## Container-to-container iletişim için port publish etmek zorunlu mudur?

---

## `env_file` ne işe yarar?

---

## `environment` ne işe yarar?

---

## `env_file` ile `environment` arasındaki fark nedir?

---

## `env_file` ve `environment` aynı environment variable'ı tanımlarsa hangisi kullanılır?

---

## Service A'da neden `SERVICE_B_URL` environment variable olarak tanımlandı?

---

## Docker Compose neden otomatik network oluşturur?

---

## Docker DNS nedir?

---

## Compose içinde neden IP adresi yerine service name kullanılır?

---

## `docker compose config` komutu ne işe yarar?

---

## `docker compose config` neden `docker compose up` öncesinde kullanılabilir?

---

## `docker compose up --build` ne yapar?

---

## `docker compose ps` ile `docker ps` arasındaki fark nedir?

---

## `docker compose logs` ne işe yarar?

---

## `docker compose down` ne yapar?

---

## Healthcheck nedir ve neden kullanılır?

---

## Container'ın `Up` olması uygulamanın sağlıklı olduğu anlamına gelir mi? Neden?

---

## Healthcheck neden `localhost:3001` adresini kullanır?

---

## Healthcheck içindeki `process.exit(1)` neyi ifade eder?

---

## `interval` parametresi ne işe yarar?

---

## `timeout` parametresi ne işe yarar?

---

## `retries` parametresi ne işe yarar?

---

## `start_period` parametresi ne işe yarar?

---

## `depends_on` ne işe yarar?

---

## Basit `depends_on` ile `condition: service_healthy` arasındaki fark nedir?

---

## Bizim Compose mimarimizde Service A neden Service B'ye bağımlıdır?

---

## Service B hiç ayağa kalkmazsa Service A neden başlamaz?

---

## Service B sonradan çökerse Service A otomatik olarak durur mu? Neden?

---

## `docker network inspect` komutu ne işe yarar?

---

## Compose'un oluşturduğu default network neden önemlidir?

---

## Compose neden her proje için ayrı bir network oluşturur?

---

## Service A → Service B isteğinin tam akışını adım adım anlatınız.

---

## `SERVICE_B_URL` değerini neden kaynak kod içine yazmadık?

---

## Docker Compose'da startup ordering nedir?

---

## Startup dependency ile runtime dependency arasındaki fark nedir?

---

## Bu projede Docker Compose kullanırken öğrendiğiniz en önemli mimari prensipler nelerdir?
```

# Questions — k6 Load Testing & Performance Analysis

## Soru 1
Virtual User (VU) nedir ve gerçek kullanıcıyı nasıl simüle eder?

---

## Soru 2
Iteration nedir ve VU ile arasındaki fark nedir?

---

## Soru 3
Throughput nedir? Hangi birim ile ifade edilir?

---

## Soru 4
Latency nedir?

---

## Soru 5
Average, Median ve P95 metrikleri arasındaki fark nedir?

---

## Soru 6
Neden yalnızca average response time değerine bakmak doğru değildir?

---

## Soru 7
`http_req_failed` metriği neyi ifade eder?

---

## Soru 8
`check()` ile `threshold` arasındaki temel fark nedir?

---

## Soru 9
Aşağıdaki threshold neyi ifade eder?

```text
http_req_duration: ["p(95)<2000"]
```

---

## Soru 10
Load Test ile Stress Test arasındaki temel fark nedir?

---

## Soru 11
`stages` yapısı ne işe yarar?

---

## Soru 12
`/hello` endpoint'i ile `/work` endpoint'i neden farklı performans sonuçları üretmiştir?

---

## Soru 13
CPU-bound workload Node.js Event Loop'u nasıl etkiler?

---

## Soru 14
k6 ile `/work` endpoint'inin görevleri arasındaki fark nedir?

---

## Soru 15
Saturation nedir?

---

## Soru 16
Bir sistemin saturation durumuna girdiğini hangi metriklerden anlayabiliriz?

---

## Soru 17
VU sayısı artmasına rağmen throughput neden yaklaşık aynı kaldı?

---

## Soru 18
Throughput aynı kalırken latency neden yükseldi?

---

## Soru 19
Request'ler kuyrukta beklediği halde neden `http_req_failed = 0%` sonucu görüldü?

---

## Soru 20
Capacity Test'in amacı nedir?

---

## Soru 21
`__ENV.VUS` kullanılmasının avantajı nedir?

---

## Soru 22
Configuration over Code yaklaşımı nedir ve bu projede nasıl uygulandı?

---

## Soru 23
Yapılan Capacity Test sonucunda Service A'nın yaklaşık maksimum throughput'u kaç req/s olarak gözlemlendi?

---

## Soru 24
Yapılan Capacity Test sonucuna göre saturation yaklaşık hangi concurrency seviyesinde görülmeye başlandı?

---

## Soru 25
Bu performans analizinin Kubernetes Horizontal Pod Autoscaler (HPA) aşaması için neden önemli olduğunu açıklayın.


# Kubernetes Review Questions — 20 Soru

## 1

Kubernetes'te Deployment'ın temel görevi nedir?

---

## 2

Deployment, ReplicaSet, Pod ve Container arasındaki ilişkiyi sırasıyla açıkla.

---

## 3

`replicas: 2` yazdığımızda Kubernetes'e tam olarak ne söylemiş oluyoruz?

---

## 4

Deployment içerisindeki `selector.matchLabels` ne işe yarar ve Pod Template içerisindeki `labels` ile neden eşleşmelidir?

---

## 5

Deployment selector ile Kubernetes Service selector arasındaki temel fark nedir?

---

## 6

Kubernetes Service neden gereklidir? Neden doğrudan Pod IP adreslerini kullanmak istemeyiz?

---

## 7

Kubernetes Service içerisindeki `port` ve `targetPort` arasındaki fark nedir?

Örneğin aşağıdaki yapı nasıl çalışır?

```yaml
ports:
  - port: 80
    targetPort: 3000
```

---

## 8

Kubernetes Service Discovery nedir ve Kubernetes DNS bu yapıda nasıl bir görev üstlenir?

---

## 9

Service A'nın Service B'ye:

```text
http://service-b:3001
```

adresi üzerinden ulaşabilmesini sağlayan Kubernetes yapısını baştan sona açıkla.

---

## 10

`curl-test` Pod'unu neden oluşturduk? Bu Pod gerçek Service A → Service B mimarisinin bir parçası mıdır?

---

## 11

Aşağıdaki isteğin cluster içerisinde izlediği yolu baştan sona açıkla:

```text
curl-test
↓
GET http://service-a:3000/call-service-b
↓
?
↓
Service B
```

---

## 12

Kubernetes'te rollout nedir?

Deployment'ın Pod Template'i değiştirildiğinde ReplicaSet ve Pod'lar açısından neler gerçekleşir?

---

## 13

Aşağıdaki komut ne işe yarar?

```powershell
kubectl rollout status deployment/service-a
```

Bu komut yeni bir rollout başlatır mı?

---

## 14

ConfigMap nedir ve `SERVICE_B_URL` değerini doğrudan Deployment içerisine yazmak yerine ConfigMap'e taşımamızın amacı nedir?

---

## 15

Aşağıdaki yapıyı satır satır açıklayabilir misin?

```yaml
env:
  - name: SERVICE_B_URL
    valueFrom:
      configMapKeyRef:
        name: service-a-config
        key: SERVICE_B_URL
```

---

## 16

Aşağıdaki zincirde her adımın görevini açıkla:

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

---

## 17

ConfigMap içerisindeki `SERVICE_B_URL` değerini değiştirdik ve ConfigMap'i tekrar `apply` ettik.

Çalışan Service A container'ı yeni environment variable değerini neden otomatik olarak kullanmaz?

---

## 18

Readiness Probe nedir?

Readiness Probe başarısız olduğunda:

- Pod'a ne olur?
- Container restart edilir mi?
- Kubernetes Service bu Pod'a trafik göndermeye devam eder mi?

---

## 19

Liveness Probe nedir?

Liveness Probe arka arkaya belirlenen sayıda başarısız olduğunda Kubernetes'in container üzerinde gerçekleştirebileceği işlem nedir?

---

## 20

Readiness Probe ile Liveness Probe arasındaki farkı kendi cümlelerinle açıkla.

Aşağıdaki iki soruyu birbirinden ayır:

```text
Pod trafik almaya hazır mı?

Container sağlıklı şekilde çalışmaya devam ediyor mu?
```

Son olarak şu yapıyı tamamla:

```text
Readiness başarısız
→ ?

Liveness sürekli başarısız
→ ?
```
# Questions — Metrics Server, Resources ve HPA

1. Kubelet'in Kubernetes Node üzerindeki temel görevi nedir?

2. Metrics Server resource metric'lerini hangi component üzerinden toplar?

3. Metrics API ne işe yarar?

4. `Kubelet → Metrics Server → Metrics API` zincirini kendi cümlelerinle açıkla.

5. `kubectl top pods` komutu bize hangi bilgileri gösterir?

6. `kubectl top nodes` ile `kubectl top pods` arasındaki fark nedir?

7. Kubernetes CPU değerlerinde kullanılan `m` ne anlama gelir?

8. `500m` CPU yaklaşık kaç CPU core eder?

9. Resource Request nedir ve Kubernetes Scheduler bunu neden kullanır?

10. Resource Usage ile Resource Request arasındaki fark nedir?

11. Resource Limit nedir?

12. CPU limit aşılmaya çalışıldığında Kubernetes tarafında ne olabilir?

13. Memory limit aşılırsa container açısından ne olabilir?

14. Service A için tanımladığımız CPU request, CPU limit, memory request ve memory limit değerleri nelerdir?

15. CPU Request `100m`, gerçek CPU Usage `70m` ise yaklaşık CPU utilization yüzde kaçtır?

16. CPU utilization değeri neden `%100` üzerine çıkabilir?

17. Horizontal Scaling ile Vertical Scaling arasındaki temel fark nedir?

18. HPA'nın açılımı nedir ve temel görevi nedir?

19. HPA neden doğrudan Pod oluşturmaz? HPA'dan Pod'a kadar component zincirini yaz.

20. HPA manifestindeki `scaleTargetRef` ne işe yarar?

21. `minReplicas: 2` ve `maxReplicas: 5` ayarları ne anlama gelir?

22. `averageUtilization: 50` ne ifade eder?

23. `kubectl get hpa` çıktısındaki `cpu: 67%/50%` ifadesini nasıl yorumlarsın?

24. k6 stress testinde CPU kullanımı yükseldiğinde Service A replica sayısının `2 → 3 → 5` şeklinde değişmesinin sebebi nedir?

25. Yük bittikten sonra HPA neden replica sayısını hemen `5 → 2` düşürmek yerine bir süre bekleyebilir?