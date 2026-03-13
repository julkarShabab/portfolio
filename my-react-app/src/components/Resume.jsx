import { Download, FileText } from "lucide-react";

export function Resume() {
  const cvUrl = "/Julkar_niene.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Julkar_niene.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open(cvUrl, "_blank");
  };

  return (


    <section id="resume" className="resume-section">

      <div className="resume-box">

        <div className="resume-left">
          <FileText size={32} />
          <div>
            <h3>Resume</h3>
            <p>View or download my full resume.</p>
          </div>
        </div>

        <div className="resume-buttons">

          <button onClick={handleView}>
            <FileText size={18} />
            View Resume
          </button>

          <button onClick={handleDownload} className="secondary">
            <Download size={18} />
            Download PDF
          </button>

        </div>

      </div>

    </section>
  );
}