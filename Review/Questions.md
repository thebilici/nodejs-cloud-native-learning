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