import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";

function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-20">
      <Container>
        <SectionTitle
          subtitle="Contact"
          title="Let's Work Together"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default Contact;