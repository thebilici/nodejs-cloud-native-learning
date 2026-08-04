

# Mistakes

Bu dosya, proje sırasında yapılan hataları ve bu hatalardan çıkarılan dersleri kaydeder.

Amaç yalnızca hata mesajını saklamak değil; hatanın nedenini ve tekrar yaşanmaması için yapılması gereken kontrolü öğrenmektir.

## Hata 1 — Yanlış GitHub hesabıyla push yapma

### Hata mesajı


## Yanlış cevaplanan soru 1 — `git commit` ile `git push` farkı

### Soru

`git commit` ile `git push` arasındaki fark nedir?

### Verdiğim yanlış veya eksik cevap

`git add` ile değişiklikleri staging area'ya alıyoruz, `git commit` ile bunu bildiriyoruz, `git push` ile remote GitHub'a bağlıyoruz.

### Neden hatalıydı?

`git commit` yalnızca yapılan değişikliği bildirmez.

Commit işlemi, staging area'da bulunan değişiklikleri yerel Git repository'sinin geçmişine kaydeder.