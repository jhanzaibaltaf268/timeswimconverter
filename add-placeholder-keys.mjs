import fs from 'fs';
const file = './src/i18n/index.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const placeholderKeys = {
    en: { "Enter your email": "Enter your email" },
    hi: { "Enter your email": "अपना ईमेल दर्ज करें" },
    es: { "Enter your email": "Introduce tu correo" },
    ru: { "Enter your email": "Введите ваш email" },
    fr: { "Enter your email": "Entrez votre e-mail" },
    de: { "Enter your email": "E-Mail-Adresse eingeben" },
    it: { "Enter your email": "Inserisci la tua email" },
    pt: { "Enter your email": "Insira seu e-mail" },
    bn: { "Enter your email": "আপনার ইমেল লিখুন" },
    ja: { "Enter your email": "メールアドレスを入力" },
    ko: { "Enter your email": "이메일 주소 입력" },
    ms: { "Enter your email": "Masukkan e-mel anda" },
    pl: { "Enter your email": "Wpisz swój e-mail" },
    id: { "Enter your email": "Masukkan email Anda" },
    ar: { "Enter your email": "أدخل بريدك الإلكتروني" },
    bg: { "Enter your email": "Въведете вашия имейл" },
    tr: { "Enter your email": "E-postanızı girin" },
    sv: { "Enter your email": "Ange din e-post" }
};

for (const [lang, keys] of Object.entries(placeholderKeys)) {
    if (data[lang]) {
        Object.assign(data[lang], keys);
    }
}

fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('Done! Added placeholder translation keys to all languages.');
