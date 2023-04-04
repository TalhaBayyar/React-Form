import SignUp from "./Components/SignUp";


function App() {
  

  return (
   

<div className="w-full max-w-xs text-center my-0 mx-auto mt-10">
  <img src='/images/sign-up.jpg' alt='Example' />
  <SignUp />   


   {/*  React projelerinde form doğrulama işlemleri için genellikle yup kütüphanesi kullanılır. Yup, yup verilerini doğrulamak
          için kullanılan açık kaynaklı bir javascript nesne şeması doğrulama kütüphanesidir.
         
        Yup, Javascript için bir nesne şema doğrulama kütüphanesidir. Yup, özellikle form doğrulama işlemlerinde kullanılan
          bir kütüphanedir. Form verilerini doğrulama işlemlerini kolaylaştırır ve form verilerinin istenmeyen verilerden
          korunmasına yardımcı olur. Form verileri ile ilgili kısıtlamaları ve kuralları tanımlamak için kullanılır. Örneğin,
          bir formdaki bir alanının boş olmaması gerektiğini veya bir e-posta adresinin geçerli bir formatta olması gerektiğini
          belirtmek için kullanılır. validationSchema değişkeni, form verilerini doğrulamak için Yup kullanarak bir şema tanımlar. 

        - Değerlerin türünü doğrulama: string, number, boolean, date vb.
        - Minumum ve maksimum uzunluk sınırı belirleme
        - Boş olmama zorunluluğu belirleme
        - Özel doğrulama kuralları belirleme
        - Dizeler için minimum ve maksimum uzunluk sınırı belirleme
        - Dizeler için özel karakterlerin olup olmamasını kontrol etme
        - Dizeler için belirli bir desene uyma zorunluluğu
        - Email adreslerinin geçerli bir formatta olmasını zorlama  

        Yup kütüphanesi, React Formik kütüphanesiyle birlikte kullanıldığında, form verilerini doğrulama işlemlerini kolaylaştırır.
          Formik, form verilerini yönetmek için bir dizi özellik ve metot sağlar ve Yup şemasını kullanarak form verilerini doğrular 
          
        Yup, farklı veri türleri için bir çok farklı doğrulama yönetemi sağlar. Bazı yaygın kullanılan doğrulama 
          fonksiyonları şunlardır
          
        required(): Bu yöntem alanının boş olmaması gerektiğidir.
          const schema = object({
            name: string().required(),
          });
        
        min(min, [message]): Bu yöntem, bir dize veya bir dizi gibi bir veri yapısının en az belirtilen uzunluğa sahip olmasını sağlar.
          İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz
          const schema = object({
            password: string().min(6, 'Parola en az 6 karakter olmalıdır.').required(),
          });
        

        max(max, [message]): Bu yöntem, bir dize veya bir dizi gibi bir veri yapısının en fazla belirtilen uzunluğa sahip olmasını sağlar.
          İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz
          const schema = object({
            description: string().max(500, 'Açıklama 500 karakteri geçemez.').required(),
          });


        matches(regex, [message]): Bu yöntem, bir dize veya bir dizi gibi bir veri yapısının belirtilen bir düzenli ifade ile eşleşmesini sağlar.
          İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz
          const schema = object({
            email: string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g, 'Geçersiz e-posta adresi.').required(),
          });


        email([message]): Bu yöntem, bir dizenin geçerli bir e-posta adresi olup olmadığını kontrol eder.İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz
          const schema = object({
            email: string().email('Geçersiz e-posta adresi.').required(),
          });


        url([message]): Bu yöntem, bir dizenin geçerli bir URL olup olmadığını kontrol eder.İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz
          const schema = object({
            website: string().url('Geçersiz web sitesi adresi.').required(),
          });

        oneOf(array, [message]): Bu yöntem, bir değerin belirtilen bir dizi değerinden biri olup olmadığını kontrol eder.
          İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz   
          const schema = object({
            gender: string().oneOf(['male', 'female'], 'Cinsiyet sadece erkek veya kadın olabilir.').required(),
          });

        notOneOf(array, [message]): Bu yöntem, bir değerin belirtilen bir dizi değerinden herhangi biri olmadığını kontrol eder.
          İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz
          const schema = objectshape({
            username: string().notOneOf(['admin', 'root'], 'Kullanıcı adı admin veya root olamaz.').required(),
          });

        integer([message]): Bu yöntem, bir sayının tam sayı olup olmadığını kontrol eder. İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz
          const schema = object({
            age: number().integer('Yaş tam sayı olmalıdır.').required(),
          });

        positive([message]): Bu yöntem, bir sayının pozitif (sıfırdan büyük) olup olmadığını kontrol eder. İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz  
          const schema =object({
            price: number().positive('Fiyat pozitif olmalıdır.').required(),
          });


        negative([message]): Bu yöntem, bir sayının negatif (sıfırdan küçük) olup olmadığını kontrol eder. İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz  
          const schema = object({
            discount: number().negative('İndirim negatif olmalıdır.').required(),
          });


        test(name, message, testFunction): Bu yöntem, bir özel doğrulama fonksiyonu tanımlamanızı sağlar. Bu yöntem, 
          test fonksiyonu geçersiz olduğunda bir hata mesajı döndürmelidir. İlk parametre olarak, özel testin adını 
          belirleyebilirsiniz. İkinci parametre olarak, özel bir hata mesajı belirleyebilirsiniz. 
          Üçüncü parametre olarak, test fonksiyonunu belirleyebilirsiniz.  


        errors -> Form elemanlarına girdiğimiz verilerimn doğru formatta olup olmadığını kontrol etmek, form validation
          (doğrulama) olarak adlandırılır ve bu işlem sırasında bazı hatalar oluşabilir. Bu hatalar, "error" olarak adlandırlır   

        Örneğin, aşağıdaki useFormik örneğinde, bir login formu için giriş değerlerinin doğruluğunu kontrol eden bir 
          validation işlevi (validate) tanımlanmıştır. Bu işlev, email ve password alanları için gerekli alan 
          kontrollerini yapar ve hataların bir sözlük halinde toplanmasını sağlar. Bu hatalar daha sonra form 
          elemanlarına bağlı olan errors fonksiyonu ile gösterilir.  

         Burada, useFormik hook'u, form elemanlarının değerlerini, hatalarını ve diğer durumlarını yöneten bir nesne 
           döndürür. Bu nesne, form elemanlarına bağlı olan onChange, onBlur ve value değerlerini içerir. 
           Ayrıca, touched özelliği, bir form elemanına dokunulduğunda (blur) true olarak ayarlanır ve hatalar, 
           errors özelliği altında toplanır 


        touched -> useFormik ile çalışırken, form elemanlarına dokunulduğunda (blur) bir flag (bayrak) olarak adlandırılan
          bir touched değeri true olarak ayarlanır. touched değeri, formun submit edilmeden önce herhangi bir hata olup
          olmadığını kontrol etmek için kullanılır. Bu sayede, kullanıcının dokunmadığı form elemanlarının doğruluğunu 
          kontrol etmeden hata hata mesajları gösterilmemiş olur
          
        buradaki örnekte, form elemanlarına onBlur (dokunma) olayı eklenir ve useFormik hook'u tarafından 
          döndürülen nesnenin touched özelliği kontrol edilir. Eğer touched true ise ve form elemanı için hata mesajı 
          mevcutsa, ErrorMessage bileşeni aracılığıyla hata mesajı gösterilir.  




        Anahtar kelimeler: 
        && -> Bu ifade Javascript dilinde, React dahil olmak üzere birçok farklı bağlamda kullanılabilir. "&&" sembolu
          sol tarafındaki ifade doğru (true) ise sağ tarafındaki ifadeyi değerlendirir ve sonuç olarak sağ tarafındaki
          ifadeyi döndürür. Eğer sol tarafındaki ifade yanlış (false) ise, sol tarafındaki ifadeyi döndürür.
          
          React'ta genellikle bu ifade, bir JSX elementinin render edilip edilmeyeceğini belirlemek için kullanılır.
            Örneğin, aşağıdaki kodda "isLoggedIn" değeri doğru olduğunda "Welcome, User!" ifadesi render edilecektir,
            aksi taktirde hiçbir şey render edilmeyecektir.
            {isLoggedIn && <p>Welcome, User!</p>}
          
          Bu ifade aynı zamanda, belirli bir koşul sağlandığında bir işlevi çağırmak için de kullanılabilir. 
            Örneğin, aşağıdaki kodda, "isLoggedIn" değeri doğru olduğunda "handleLogout" işlevi çağrılacaktır:  
            {isLoggedIn && handleLogout()}


          Konunun Özeti: 
          Özetle, useFormik, bir formun yönetimini sağlayan bir hook'tur ve form elemanlarının değerlerini, 
          hatalarını ve diğer durumlarını içeren bir nesne döndürür. Bu nesneye bağlı olarak, form elemanlarının 
          değerlerini ve durumlarını kontrol edebilir ve hataları görüntüleyebiliriz. Bu şekilde, kullanıcılardan 
          gelen verilerin doğruluğunu kontrol etmek ve hatasız bir form oluşturmak daha kolay hale gelir.  
   */}

</div>




   


  );
}

export default App