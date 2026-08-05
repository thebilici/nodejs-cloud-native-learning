# Progress

Bu dosya, projenin güncel ilerleme durumunu takip eder.

## Mevcut aşama

Aşama 3 — Node.js ve TypeScript proje başlangıcı devam ediyor.

## Tamamlanan aşamalar

- Aşama 1 — Öğrenme repository yapısını kurma
- Aşama 2 — Git çalışma düzenini pekiştirme

## Tamamlanan adımlar

### Aşama 1 — Repository başlangıcı

- Ana proje klasörü oluşturuldu.
- Proje VS Code ile açıldı.
- Yerel Git repository başlatıldı.
- Varsayılan branch adı `main` olarak ayarlandı.
- `.gitignore` dosyası oluşturuldu.
- Ana proje klasörleri oluşturuldu.
- `README.md` oluşturuldu.
- `START_HERE.md` oluşturuldu.
- `Canonical/Learning_Path.md` oluşturuldu.
- `Journal/Progress.md` oluşturuldu.
- İlk tarihli session dosyası oluşturuldu.
- İlk Git commit'i oluşturuldu.
- GitHub üzerinde uzak repository oluşturuldu.
- Yerel repository, `origin` adıyla GitHub repository'sine bağlandı.
- `main` branch'i GitHub'a gönderildi.
- Yerel `main` branch'i ile `origin/main` arasında takip ilişkisi kuruldu.

### Aşama 2 — Git çalışma düzeni

- `git status` ile repository durumu kontrol edildi.
- `git branch -vv` ile yerel ve uzak branch ilişkisi incelendi.
- `git log --oneline` ile commit geçmişi görüntülendi.
- `README.md` dosyasına GitHub repository bağlantısı eklendi.
- `git diff` ile working directory değişiklikleri incelendi.
- `git add README.md` ile belirli bir dosya staging area'ya alındı.
- `git diff --staged` ile staging area'daki değişiklik incelendi.
- `git restore --staged README.md` ile dosya silinmeden staging area'dan çıkarıldı.
- Değişiklik tekrar staging area'ya alındı.
- Değişiklik commit edildi.
- Yeni commit GitHub'a gönderildi.
- Working directory, staging area, local repository ve remote repository ilişkisi uygulamalı olarak öğrenildi.

### Aşama 3 — Node.js ve TypeScript başlangıcı

- Go ile devam etmek yerine Node.js ve TypeScript kullanılmasına karar verildi.
- Go module yapısı kaldırıldı.
- `service-a` klasörü Node.js yapısına dönüştürüldü.
- `src` klasörü oluşturuldu.
- `config`, `handlers`, `routes` ve `workload` klasörleri oluşturuldu.
- `package.json` oluşturuldu.
- TypeScript kuruldu.
- `tsx` kuruldu.
- `@types/node` kuruldu.
- `tsconfig.json` oluşturuldu.
- Express kuruldu.
- `@types/express` kuruldu.
- `dotenv` kuruldu.
- `.env` dosyası oluşturuldu.
- `PORT`, `SERVICE_NAME` ve `APP_VERSION` environment variable olarak tanımlandı.
- İlk Express uygulaması oluşturuldu.
- `GET /health` endpoint'i geliştirildi.
- `npm run dev` ile geliştirme ortamı hazırlandı.

## Devam eden adım

Aşama 3 — Proje mimarisini katmanlara ayırma

Devam eden çalışmalar:

- `env.ts`
- `app.ts`
- `health` route ve handler yapısı
- Klasör mimarisinin tamamlanması

## Sıradaki aşama

Aşama 4 — Servis mimarisini oluşturma

Bu aşamada:

- `config` katmanı oluşturulacak.
- `routes` katmanı oluşturulacak.
- `handlers` katmanı oluşturulacak.
- `app.ts` oluşturulacak.
- `server.ts` sadeleştirilecek.
- `/hello` endpoint'i eklenecek.
- `/ready` endpoint'i eklenecek.
- `/work` endpoint'i geliştirilecek.

## Son hata

İlk `git push` işleminde HTTP 403 hatası alındı.

```text
Permission to thebilici/go-cloud-native-learning.git denied to fatihbilig