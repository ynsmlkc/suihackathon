GİRİŞ
SuiMO sui tabanlı içerik üreticisi destekleme platformudur.Favori içerik üreticilerinizi bağış atarak destekleyebilir ve dijital dijital ürünlerini satın alabilirsiniz. Merkeziyetsiz bir ortamda, içerik üreticileri ve hayranlarını bir araya getirerek eşler arası (P2P) bir platformdur.

PROBLEMLER ve ÇÖZÜMLER
Patreon ve Buy Me a Coffee gibi Web 2.0 platformları, yüksek komisyonlar ve işlem ücretleriyle içerik üreticilerin kazançlarını azaltmaktadır. Ayrıca WEB 2.0 ödeme sistemleri (PayPal, Stripe) bazı bölgelerde yok veya kısıtlı. SuiMO dşük komisyon ve işlem ücretleriyle sınırsız ve sınır ötesi şekilde sui bazlı ödeme sağlar. Geleneksel bağış sistemlerinde erken destekçilere özel bir ödüllendirme sistemi bulunmamaktadır. SuiMO NFT bazlı sadakat programlarıyla erken destekçileri ödüllendilir. Toplulukta daha güçlü bağlılık kurulmasına yardımcı olur. İnsanlar Web 3.0 devrimine katılmak istemekte ancak teknik bilgi yetersizliği ve karmaşık sistemler yüzünden ekosisteme dahil olamamaktadır. SuiMO projinin en önemli amacı insanları basit bir arayüzle kripto cüzdanı ve NFT dünyasıyla tanışmasnı sağlamak.

NEDEN SUİ?
Sui'yi seçmemizin nedeni, yüksek performanslı yapısı, düşük komisyonlar, merkeziyetsizlik ve esnek veri yönetimidir. Paralel işlem işleme kapasitesi sayesinde saniyede çok daha fazla işlem gerçekleştirilebiliyor, bu da hız ve ölçeklenebilirlik açısından büyük avantaj sağlıyor. Obje tabanlı veri modeli, varlıkların güvenli ve esnek bir şekilde yönetilmesine imkan tanırken, Move programlama dili ile güvenli ve hatasız akıllı sözleşmeler yazmak mümkün. Ayrıca, Sui'nin merkeziyetsiz yapısı, sansüre karşı dirençli ve güvenli bir ortam sunuyor, bu da bizim gibi yenilikçi projeler için mükemmel bir zemin oluşturuyor. Kiosklu olarak, merkeziyetsiz, düşük maliyetli ve ölçeklenebilir bir platformda yer almak, kullanıcılarımıza daha hızlı ve güvenli bir deneyim sunmamıza olanak tanıyor. Bu sebeplerle, geleceğimizi Sui üzerinde inşa etmeye karar verdik.

MİMARİ

https://hackmd-prod-images.s3-ap-northeast-1.amazonaws.com/uploads/upload_df5dc01bc96f21f9f8bedbb1a9e3d054.png?AWSAccessKeyId=AKIA3XSAAW6AWSKNINWO&Expires=1745753135&Signature=SRaDmZ6YBKfdYaSEOFhsfyTOwtQ%3D

KOD İNCELEMESİ
Bu bölümde, proje repomuzu ayrıntılı bir şekilde inceleyecek ve nasıl çalıştığını göstereceğiz.

a contracts.move

Bu Sui blockchain sözleşmesi, bir NFT minting (basma) sürecini yönetmektedir. Sözleşme, her bir NFT'nin benzersiz bir ID, isim, açıklama, URL ve seviye (tier) bilgilerini içeren bir yapıya sahiptir. Ayrıca, bir Treasury (hazine) yapısı da bulunmaktadır; bu yapı, NFT basma maliyetini, mevcut bakiyeyi ve her seviyedeki NFT sayısını tutar.
NFT basma süreci, kullanıcıların belirli bir miktarda SUI coin göndererek NFT almalarını sağlar. Gönderilen miktar, belirlenen minimum basma maliyetine yeterli olduğunda, NFT başarılı bir şekilde basılır ve bu işlem bir etkinlik (event) ile kaydedilir.Kontrat başlatıldığında, bir publisher oluşturulur ve display aracılığıyla NFT bilgileri gösterilir. Aynı zamanda hazine (Treasury) de tanımlanır, böylece NFT basma süreci için gerekli olan fonlar ve diğer parametreler merkezi bir noktada yönetilir.Yönetici, kontrat üzerinde belirli haklara sahiptir. Bu haklar arasında, NFT basma maliyetini değiştirme ve hazineye biriken tüm fonları çekme yetkisi bulunmaktadır. Bu şekilde, sözleşme kullanıcıları için verimli bir NFT minting süreci sunulmuş olur.

b) payment.move

Bu sözleşme, her bir influencer için bir profil yapısı tanımlar. Her profil, bir ID, isim, soyisim, bakiye, toplam kazanç ve toplam işlem sayısı içerir. Sözleşme, influencer'lara ödeme yapıldığında veya fon çekildiğinde tetiklenen çeşitli etkinlikler sunar. ProfileCreated etkinliği, yeni bir influencer profili oluşturulduğunda, PaymentReceived etkinliği, influencer'a ödeme yapıldığında, ve Withdrawal etkinliği ise influencer fon çektiğinde tetiklenir (yorumda kapalı). Ayrıca, sözleşme üç açık fonksiyon sunar: create_profile fonksiyonu, yeni bir influencer profili oluşturur; send_payment fonksiyonu, influencer'a ödeme gönderir ve ödeme detaylarını günceller; ve withdraw fonksiyonu, influencer'ın bakiyesinden fon çekme işlemi yapar (yorumda kapalı, fakat fonksiyon hazırdır). Görüntüleme fonksiyonu olan get_profile_info, influencer'ın profiline dair bilgileri (isim, soyisim, toplam kazanç, toplam işlem sayısı) döndüren bir fonksiyondur.
