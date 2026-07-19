import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import portfolioData from "../../../data/portfolioData";

import ContactCard from "./ContactCard";
import ContactSocial from "./ContactSocial";

function ContactInfo() {
  return (
    <div className="space-y-6">

      <ContactCard
        icon={<FaEnvelope />}
        title="Email"
        value={portfolioData.personal.email}
      />

      <ContactCard
        icon={<FaPhone />}
        title="Phone"
        value={portfolioData.personal.phone}
      />

      <ContactCard
        icon={<FaMapMarkerAlt />}
        title="Location"
        value={portfolioData.personal.location}
      />

      <ContactSocial />

    </div>
  );
}

export default ContactInfo;