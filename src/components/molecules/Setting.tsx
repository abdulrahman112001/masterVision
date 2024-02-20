import ar from "../../assets/global/ar.svg";
import en from "../../assets/global/en.svg";
import { useIsRTL } from "../../hooks";
import i18n from "../../i18n";
function Setting() {
  const isRTL = useIsRTL();

  const toggleLanguage = () => {
    const newLang = isRTL ? "en" : "ar";
    i18n.changeLanguage(newLang);
    const direction = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = direction;
    document.documentElement.lang = newLang;
  };
  return (
    <div>
      <button type="button" onClick={toggleLanguage}>
        <img
          src={isRTL ? en : ar}
          className="ms-3 h-[25px] w-[25px] object-contain rounded-[.325rem]"
          alt={isRTL ? "English" : "Arabic"}
        />
      </button>{" "}
    </div>
  );
}

export default Setting;
