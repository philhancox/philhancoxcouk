import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Phil Hancox',
};

export default function Home() {
  return (
    <div>
      <Header />

      <main itemScope itemType="http://schema.org/Person">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-5">
              <p>I am a <abbr title="Linux, Apache, MySQL and PHP">LAMP</abbr> stack web developer with almost 20 years of experience. I have worked in-house and agency, remotely or office based, via employment and freelance for many businesses both <abbr title="Business to Customer">B2C</abbr> and <abbr title="Business to Business">B2B</abbr> of varying sizes in a multitude of sectors.</p>
              <p>Whether it's a bespoke application or utilising an established framework, I have created or been involved with brochure websites, eCommerce, social networks, <abbr title="Software as a Service">SAAS</abbr>, <abbr title="Progressive Web Applications">PWAs</abbr> and much more.</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row pt-5 pb-5" id="row--skills">
            <div className="col-sm-3 col-md-6 col-lg-3">
              <ul className="fa-ul">
                <li><span className="fa-li"><span className="fab fa-php"></span></span> PHP</li>
                <li><span className="fa-li"><span className="fab fa-html5"></span></span> HTML</li>
                <li><span className="fa-li"><span className="fab fa-css3"></span></span> CSS</li>
                <li><span className="fa-li"><span className="fab fa-js-square"></span></span> JavaScript</li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-6 col-lg-3">
              <ul className="fa-ul">
                <li><span className="fa-li"><span className="fab fa-wordpress"></span></span> WordPress</li>
                <li><span className="fa-li"><span className="fab fa-magento"></span></span> Magento</li>
                <li><span className="fa-li"><span className="fab fa-laravel"></span></span> Laravel</li>
                <li><span className="fa-li"><span className="fab fa-php"></span></span> CakePHP</li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-6 col-lg-3">
              <ul className="fa-ul">
                <li><span className="fa-li"><span className="fab fa-php"></span></span> Zend</li>
                <li><span className="fa-li"><span className="fab fa-vuejs"></span></span> Vue JS</li>
                <li><span className="fa-li"><span className="fab fa-js-square"></span></span> jQuery</li>
                <li><span className="fa-li"><span className="fas fa-database"></span></span> MySQL</li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-6 col-lg-3">
              <ul className="fa-ul">
                <li><span className="fa-li"><span className="fab fa-git-alt"></span></span> Git</li>
                <li><span className="fa-li"><span className="fab fa-linux"></span></span> Linux</li>
                <li><span className="fa-li"><span className="fab fa-google"></span></span> SEO</li>
                <li><span className="fa-li"><span className="fas fa-search-dollar"></span></span> Online marketing</li>
              </ul>
            </div>
          </div>
        </div>


        <Footer />
      </main>
      {/*<main className={styles.main}>*/}
      {/*  <Image*/}
      {/*    className={styles.logo}*/}
      {/*    src="/next.svg"*/}
      {/*    alt="Next.js logo"*/}
      {/*    width={180}*/}
      {/*    height={38}*/}
      {/*    priority*/}
      {/*  />*/}
      {/*  <ol>*/}
      {/*    <li>*/}
      {/*      Get started by editing <code>src/app/page.js</code>.*/}
      {/*    </li>*/}
      {/*    <li>Save and see your changes instantly.</li>*/}
      {/*  </ol>*/}

      {/*  <div className={styles.ctas}>*/}
      {/*    <a*/}
      {/*      className={styles.primary}*/}
      {/*      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      <Image*/}
      {/*        className={styles.logo}*/}
      {/*        src="/vercel.svg"*/}
      {/*        alt="Vercel logomark"*/}
      {/*        width={20}*/}
      {/*        height={20}*/}
      {/*      />*/}
      {/*      Deploy now*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*      className={styles.secondary}*/}
      {/*    >*/}
      {/*      Read our docs*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</main>*/}
      {/*<footer className={styles.footer}>*/}
      {/*  <a*/}
      {/*    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <Image*/}
      {/*      aria-hidden*/}
      {/*      src="/file.svg"*/}
      {/*      alt="File icon"*/}
      {/*      width={16}*/}
      {/*      height={16}*/}
      {/*    />*/}
      {/*    Learn*/}
      {/*  </a>*/}
      {/*  <a*/}
      {/*    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <Image*/}
      {/*      aria-hidden*/}
      {/*      src="/window.svg"*/}
      {/*      alt="Window icon"*/}
      {/*      width={16}*/}
      {/*      height={16}*/}
      {/*    />*/}
      {/*    Examples*/}
      {/*  </a>*/}
      {/*  <a*/}
      {/*    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    <Image*/}
      {/*      aria-hidden*/}
      {/*      src="/globe.svg"*/}
      {/*      alt="Globe icon"*/}
      {/*      width={16}*/}
      {/*      height={16}*/}
      {/*    />*/}
      {/*    Go to nextjs.org →*/}
      {/*  </a>*/}
      {/*</footer>*/}
    </div>
  );
}
