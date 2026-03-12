import { useEffect, useId, useMemo, useState } from "react";
import { Languages } from "lucide-react";

import { cn } from "@/lib/utils";

const GOOGLE_SCRIPT_ID = "google-translate-script";
const GOOGLE_ELEMENT_ID = "google_translate_element";
const GOOGLE_COOKIE_NAME = "googtrans";
const LANGUAGE_STORAGE_KEY = "gda-selected-language";

const supportedLanguages = [
  { code: "en", label: "English" },
  { code: "af", label: "Afrikaans" },
  { code: "sq", label: "Albanian" },
  { code: "am", label: "Amharic" },
  { code: "ar", label: "Arabic" },
  { code: "hy", label: "Armenian" },
  { code: "az", label: "Azerbaijani" },
  { code: "eu", label: "Basque" },
  { code: "be", label: "Belarusian" },
  { code: "bn", label: "Bengali" },
  { code: "bs", label: "Bosnian" },
  { code: "bg", label: "Bulgarian" },
  { code: "ca", label: "Catalan" },
  { code: "ceb", label: "Cebuano" },
  { code: "ny", label: "Chichewa" },
  { code: "zh-CN", label: "Chinese (Simplified)" },
  { code: "zh-TW", label: "Chinese (Traditional)" },
  { code: "co", label: "Corsican" },
  { code: "hr", label: "Croatian" },
  { code: "cs", label: "Czech" },
  { code: "da", label: "Danish" },
  { code: "nl", label: "Dutch" },
  { code: "eo", label: "Esperanto" },
  { code: "et", label: "Estonian" },
  { code: "tl", label: "Filipino" },
  { code: "fi", label: "Finnish" },
  { code: "fr", label: "French" },
  { code: "fy", label: "Frisian" },
  { code: "gl", label: "Galician" },
  { code: "ka", label: "Georgian" },
  { code: "de", label: "German" },
  { code: "el", label: "Greek" },
  { code: "gu", label: "Gujarati" },
  { code: "ht", label: "Haitian Creole" },
  { code: "ha", label: "Hausa" },
  { code: "haw", label: "Hawaiian" },
  { code: "iw", label: "Hebrew" },
  { code: "hi", label: "Hindi" },
  { code: "hmn", label: "Hmong" },
  { code: "hu", label: "Hungarian" },
  { code: "is", label: "Icelandic" },
  { code: "ig", label: "Igbo" },
  { code: "id", label: "Indonesian" },
  { code: "ga", label: "Irish" },
  { code: "it", label: "Italian" },
  { code: "ja", label: "Japanese" },
  { code: "jw", label: "Javanese" },
  { code: "kn", label: "Kannada" },
  { code: "kk", label: "Kazakh" },
  { code: "km", label: "Khmer" },
  { code: "rw", label: "Kinyarwanda" },
  { code: "ko", label: "Korean" },
  { code: "ku", label: "Kurdish" },
  { code: "ky", label: "Kyrgyz" },
  { code: "lo", label: "Lao" },
  { code: "la", label: "Latin" },
  { code: "lv", label: "Latvian" },
  { code: "lt", label: "Lithuanian" },
  { code: "lb", label: "Luxembourgish" },
  { code: "mk", label: "Macedonian" },
  { code: "mg", label: "Malagasy" },
  { code: "ms", label: "Malay" },
  { code: "ml", label: "Malayalam" },
  { code: "mt", label: "Maltese" },
  { code: "mi", label: "Maori" },
  { code: "mr", label: "Marathi" },
  { code: "mn", label: "Mongolian" },
  { code: "my", label: "Myanmar (Burmese)" },
  { code: "ne", label: "Nepali" },
  { code: "no", label: "Norwegian" },
  { code: "or", label: "Odia" },
  { code: "ps", label: "Pashto" },
  { code: "fa", label: "Persian" },
  { code: "pl", label: "Polish" },
  { code: "pt", label: "Portuguese" },
  { code: "pa", label: "Punjabi" },
  { code: "ro", label: "Romanian" },
  { code: "ru", label: "Russian" },
  { code: "sm", label: "Samoan" },
  { code: "gd", label: "Scots Gaelic" },
  { code: "sr", label: "Serbian" },
  { code: "st", label: "Sesotho" },
  { code: "sn", label: "Shona" },
  { code: "sd", label: "Sindhi" },
  { code: "si", label: "Sinhala" },
  { code: "sk", label: "Slovak" },
  { code: "sl", label: "Slovenian" },
  { code: "so", label: "Somali" },
  { code: "es", label: "Spanish" },
  { code: "su", label: "Sundanese" },
  { code: "sw", label: "Swahili" },
  { code: "sv", label: "Swedish" },
  { code: "tg", label: "Tajik" },
  { code: "ta", label: "Tamil" },
  { code: "tt", label: "Tatar" },
  { code: "te", label: "Telugu" },
  { code: "th", label: "Thai" },
  { code: "tr", label: "Turkish" },
  { code: "tk", label: "Turkmen" },
  { code: "uk", label: "Ukrainian" },
  { code: "ur", label: "Urdu" },
  { code: "ug", label: "Uyghur" },
  { code: "uz", label: "Uzbek" },
  { code: "vi", label: "Vietnamese" },
  { code: "cy", label: "Welsh" },
  { code: "xh", label: "Xhosa" },
  { code: "yi", label: "Yiddish" },
  { code: "yo", label: "Yoruba" },
  { code: "zu", label: "Zulu" },
];

function readGoogleTranslateCookie() {
  if (typeof document === "undefined") return "en";

  const cookieValue = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${GOOGLE_COOKIE_NAME}=`))
    ?.split("=")[1];

  if (!cookieValue) return "en";

  const [, targetLanguage] = decodeURIComponent(cookieValue).split("/");
  return targetLanguage || "en";
}

function readStoredLanguage() {
  if (typeof window === "undefined") return "en";

  const storedValue = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return storedValue && supportedLanguages.some((language) => language.code === storedValue)
    ? storedValue
    : "en";
}

function persistSelectedLanguage(languageCode: string) {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, languageCode);
}

function writeGoogleTranslateCookie(languageCode: string) {
  const value = `/en/${languageCode}`;
  const expires = "Fri, 31 Dec 9999 23:59:59 GMT";

  document.cookie = `${GOOGLE_COOKIE_NAME}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  document.cookie = `${GOOGLE_COOKIE_NAME}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=${window.location.hostname}`;
}

function clearGoogleTranslateCookie() {
  const expired = "Thu, 01 Jan 1970 00:00:00 GMT";
  const hostnameParts = window.location.hostname.split(".").filter(Boolean);
  const domains = new Set<string>([window.location.hostname]);
  const paths = new Set<string>(["/"]);

  const pathnameParts = window.location.pathname.split("/").filter(Boolean);
  let currentPath = "";
  pathnameParts.forEach((part) => {
    currentPath += `/${part}`;
    paths.add(currentPath);
  });

  for (let index = 0; index < hostnameParts.length - 1; index += 1) {
    domains.add(`.${hostnameParts.slice(index).join(".")}`);
  }

  paths.forEach((path) => {
    document.cookie = `${GOOGLE_COOKIE_NAME}=; expires=${expired}; path=${path}`;
  });

  domains.forEach((domain) => {
    paths.forEach((path) => {
      document.cookie = `${GOOGLE_COOKIE_NAME}=; expires=${expired}; path=${path}; domain=${domain}`;
    });
  });
}

function writeEnglishResetCookie() {
  const expires = "Fri, 31 Dec 9999 23:59:59 GMT";
  const resetValues = ["/en/en", "/auto/en"];

  resetValues.forEach((value) => {
    document.cookie = `${GOOGLE_COOKIE_NAME}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    document.cookie = `${GOOGLE_COOKIE_NAME}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=${window.location.hostname}`;
  });
}

function resetTranslatedDocument() {
  document.body.classList.remove("translated-ltr", "translated-rtl");
  document.documentElement.setAttribute("lang", "en");

  const googleCombo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (googleCombo) {
    googleCombo.value = "en";
    googleCombo.dispatchEvent(new Event("change"));
  }
}

function currentActiveLanguage() {
  const storedLanguage = readStoredLanguage();
  const cookieLanguage = readGoogleTranslateCookie();

  if (cookieLanguage !== "en") return cookieLanguage;
  return storedLanguage;
}

type LanguageSelectorProps = {
  className?: string;
  inverted?: boolean;
};

const LanguageSelector = ({ className, inverted = false }: LanguageSelectorProps) => {
  const selectId = useId();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const includedLanguages = useMemo(
    () => supportedLanguages.filter((language) => language.code !== "en").map((language) => language.code).join(","),
    [],
  );

  useEffect(() => {
    setSelectedLanguage(currentActiveLanguage());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let element = document.getElementById(GOOGLE_ELEMENT_ID);
    if (!element) {
      element = document.createElement("div");
      element.id = GOOGLE_ELEMENT_ID;
      element.className = "hidden";
      element.setAttribute("aria-hidden", "true");
      document.body.appendChild(element);
    }

    const initializeTranslate = () => {
      if (!window.google?.translate?.TranslateElement) return;

      const translateElement = document.getElementById(GOOGLE_ELEMENT_ID);
      if (!translateElement || translateElement.childElementCount > 0) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages,
          autoDisplay: false,
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        GOOGLE_ELEMENT_ID,
      );
    };

    window.googleTranslateElementInit = initializeTranslate;

    const existingScript = document.getElementById(GOOGLE_SCRIPT_ID) as HTMLScriptElement | null;
    if (existingScript) {
      initializeTranslate();
      return;
    }

    const script = document.createElement("script");
    script.id = GOOGLE_SCRIPT_ID;
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.googleTranslateElementInit = undefined;
    };
  }, [includedLanguages]);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLanguage = event.target.value;
    setSelectedLanguage(nextLanguage);
    persistSelectedLanguage(nextLanguage);

    if (nextLanguage === "en") {
      clearGoogleTranslateCookie();
      resetTranslatedDocument();
      window.localStorage.removeItem(LANGUAGE_STORAGE_KEY);
      window.setTimeout(() => {
        writeEnglishResetCookie();
        window.location.replace(`${window.location.pathname}${window.location.search}${window.location.hash}`);
      }, 120);
      return;
    } else {
      writeGoogleTranslateCookie(nextLanguage);
    }

    window.location.reload();
  };

  return (
    <label
      htmlFor={selectId}
      translate="no"
      className={cn(
        "notranslate relative inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm shadow-sm transition-colors",
        inverted
          ? "border-slate-200 bg-white text-slate-900"
          : "border-border bg-background/90 text-foreground",
        className,
      )}
    >
      <Languages className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <span className="sr-only">Select website language</span>
      <select
        id={selectId}
        value={selectedLanguage}
        onChange={handleLanguageChange}
        translate="no"
        className={cn(
          "notranslate min-w-[132px] appearance-none bg-transparent pr-5 text-sm outline-none",
          inverted ? "text-slate-900" : "text-foreground",
        )}
        aria-label="Select website language"
      >
        {supportedLanguages.map((language) => (
          <option key={language.code} value={language.code} translate="no" className="notranslate">
            {language.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageSelector;
