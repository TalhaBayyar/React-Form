import { object, string, ref } from 'yup';

let validition = object({
  email: string().email("Bu Bir Mail Değildir").required("E-Posta Zorunlu Alandır"),
  password: string().min(5, "En Az 5 Karakter").required("Şifre Zorunlu Alandır"),
  againPassword: string().oneOf([ref("password")], "Şifre Aynı Olmalıdır").required("Yeniden Şifre Zorunlu Alandır")
  
});
export default validition