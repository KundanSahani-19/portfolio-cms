import certificateData from "./certificateData";
import CertificateCard from "./CertificateCard";

function CertificateGrid() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {certificateData.map((certificate) => (
        <CertificateCard
          key={certificate.title}
          certificate={certificate}
        />
      ))}
    </div>
  );
}

export default CertificateGrid;