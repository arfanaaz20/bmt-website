import PropertyHero from "./PropertyHero";
import CommonSections from "./CommonSections";
import FeaturesAccordion from "./FeaturesAccordion";
import PartnerWebsites from "./PartnerWebsites";
import SuccessStories from "./SuccessStories";
import FAQSection from "./FAQSection";
import AppDownloadSection from "./AppDownloadSection";

export default function ListYourProperty() {
  return (
    <>
      <PropertyHero />
      <CommonSections />
      <FeaturesAccordion />
      <PartnerWebsites />
      <SuccessStories />
      <FAQSection />
      <AppDownloadSection />
    </>
  );
}
