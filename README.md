# Node.js Cloud Native Learning

Bu proje; Node.js, TypeScript, Express, Docker, Docker Compose, Kubernetes, Metrics Server, HPA ve k6 teknolojilerini iki basit HTTP servisi üzerinden öğrenmek amacıyla geliştirilmektedir.

## Projenin amacı

- Node.js, TypeScript ve Express ile iki bağımsız HTTP servisi geliştirmek
- Servisleri düzenli ve test edilebilir bir klasör yapısıyla oluşturmak
- Environment variable kullanımını öğrenmek
- Servisleri Docker image hâline getirmek
- Docker Compose ile birlikte çalıştırmak
- k6 ile yük ve stres testi yapmak
- Kubernetes üzerinde deploy etmek
- Kubernetes Service ile Pod'lara erişmek
- Metrics Server ile CPU ve bellek kullanımını gözlemlemek
- HPA ile yük arttığında Pod sayısının otomatik artmasını incelemek
- Yük azaldığında Pod sayısının tekrar düşmesini gözlemlemek

## Kullanılan teknolojiler

- Node.js
- TypeScript
- Express
- Docker
- Docker Compose
- Kubernetes
- Metrics Server
- Horizontal Pod Autoscaler
- k6
- Git
- GitHub

## Servisler

- service-a
- service-b

Her serviste başlangıçta şu endpoint'ler bulunacaktır:

- `GET /hello`
- `GET /health`
- `GET /ready`
- `GET /work`

## Proje yaklaşımı

Proje karmaşık bir iş uygulaması olmayacaktır.

Şimdilik aşağıdaki yapılar eklenmeyecektir:


- Veritabanı
- Kullanıcı sistemi
- Authentication
- Redis
- Kafka
- Mesaj kuyruğu
- Karmaşık CRUD işlemleri

Temel amaç, iki basit HTTP servisi üzerinden container, load testing ve Kubernetes autoscaling süreçlerini öğrenmektir.

## Durum

- Repository yapısı oluşturuldu.
- Git ve GitHub çalışma düzeni kuruldu.
- Service A için Node.js ve TypeScript başlangıç yapısı oluşturuldu.
- Express kuruldu.
- Environment variable desteği eklendi.
- `GET /health` endpoint'i geliştiriliyor.

## Repository

https://github.com/thebilici/nodejs-cloud-native-learning