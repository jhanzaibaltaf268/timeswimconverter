import fs from 'fs';
const file = './src/i18n/index.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const feedbackKeys = {
    en: { "Subscribe Thank You": "Thank you for subscribing!", "Invalid Email": "Please enter a valid email address." },
    hi: { "Subscribe Thank You": "सब्सक्राइब करने के लिए धन्यवाद!", "Invalid Email": "कृपया एक वैध ईमेल पता दर्ज करें।" },
    es: { "Subscribe Thank You": "¡Gracias por suscribirte!", "Invalid Email": "Por favor, introduce una dirección de correo electrónico válida." },
    ru: { "Subscribe Thank You": "Спасибо за подписку!", "Invalid Email": "Пожалуйста, введите корректный адрес электронной почты." },
    fr: { "Subscribe Thank You": "Merci pour votre abonnement !", "Invalid Email": "Veuillez saisir une adresse e-mail valide." },
    de: { "Subscribe Thank You": "Vielen Dank für Ihr Abonnement!", "Invalid Email": "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
    it: { "Subscribe Thank You": "Grazie per esserti iscritto!", "Invalid Email": "Inserisci un indirizzo email valido." },
    pt: { "Subscribe Thank You": "Obrigado por se inscrever!", "Invalid Email": "Por favor, insira um endereço de e-mail válido." },
    bn: { "Subscribe Thank You": "সাবস্ক্রাইব করার জন্য ধন্যবাদ!", "Invalid Email": "দয়া করে একটি সঠিক ইমেল অ্যাড্রেস লিখুন।" },
    ja: { "Subscribe Thank You": "ご登録ありがとうございます！", "Invalid Email": "有効なメールアドレスを入力してください。" },
    ko: { "Subscribe Thank You": "구독해 주셔서 감사합니다!", "Invalid Email": "유효한 이메일 주소를 입력해 주세요." },
    ms: { "Subscribe Thank You": "Terima kasih kerana melanggan!", "Invalid Email": "Sila masukkan alamat e-mel yang sah." },
    pl: { "Subscribe Thank You": "Dziękujemy за subskrypcję!", "Invalid Email": "Wprowadź prawidłowy adres e-mail." },
    id: { "Subscribe Thank You": "Terima kasih telah berlangganan!", "Invalid Email": "Silakan masukkan alamat email yang valid." },
    ar: { "Subscribe Thank You": "شكراً لاشتراكك!", "Invalid Email": "يرجى إدخال عنوان بريد إلكتروني صالح." },
    bg: { "Subscribe Thank You": "Благодарим ви за абонамента!", "Invalid Email": "Моля, въведете валиден имейл адрес." },
    tr: { "Subscribe Thank You": "Abone olduğunuz için teşekkürler!", "Invalid Email": "Lütfen geçerli bir e-posta adresi girin." },
    sv: { "Subscribe Thank You": "Tack för din prenumeration!", "Invalid Email": "Ange en giltig e-postadress." }
};

for (const [lang, keys] of Object.entries(feedbackKeys)) {
    if (data[lang]) {
        Object.assign(data[lang], keys);
    }
}

fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('Done! Added subscription feedback translation keys to all languages.');
