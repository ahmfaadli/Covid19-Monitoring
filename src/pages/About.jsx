import { Heading, Paragraph, SubHeading } from "../components/UI/Typography/Typography";
import { AboutLeft, AboutRight, AboutStyle } from "../components/About/About.styled";

function About() {
  return (
    <AboutStyle>
      <section>
        <AboutLeft>
          <Heading>Covid ID</Heading>
          <SubHeading>Tentang COVID19</SubHeading>
          <Paragraph>COVID-19 adalah penyakit menular yang disebabkan oleh virus corona. Gejalanya dapat berupa demam, batuk, kesulitan bernapas, kelelahan, serta kehilangan indra perasa dan penciuman. Virus ini menyebar melalui tetesan air liur saat orang yang terinfeksi batuk atau bersin, serta dapat menular jika menyentuh permukaan yang terkontaminasi. Untuk mencegah penularan, disarankan untuk melakukan vaksinasi, memakai masker, dan menjaga jarak. Bagi kasus ringan, cukup beristirahat di rumah, sedangkan kasus parah membutuhkan perawatan di rumah sakit. Tetap menjaga kebersihan tangan dan mengikuti protokol kesehatan adalah hal penting untuk mencegah penyebaran COVID-19.</Paragraph>
        </AboutLeft>
        <AboutRight>
          <img
            src="https://i.top4top.io/p_3114l738c1.png"
            alt=""
          />
        </AboutRight>
      </section>
    </AboutStyle>
  );
}

export default About;