# Progress

Bu dosya, projenin güncel ilerleme durumunu takip eder.

## Mevcut aşama

Aşama 2 — Git çalışma düzenini pekiştirme tamamlandı.

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
- Yerel repository, `origin` adıyla GitHub repository'ye bağlandı.
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

## Devam eden adım

Aşama 2 tamamlandı.

## Sıradaki aşama

Aşama 3 — Go module ve package mantığı

Bu aşamada:

- Service A klasör mimarisi oluşturulacak.
- `go mod init` kullanılacak.
- `go.mod` dosyasının görevi öğrenilecek.
- Go package yapısı incelenecek.
- Henüz HTTP endpoint yazılmayacak.

## Son hata

İlk `git push` işleminde HTTP 403 hatası alındı.

```text
Permission to thebilici/go-cloud-native-learning.git denied to fatihbilig