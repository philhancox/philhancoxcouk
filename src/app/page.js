import Header from "@/components/Header";
import '@fortawesome/fontawesome-svg-core/styles'
import Skills from "@/components/Skills";

export const metadata = {
    title: 'Phil Hancox | Web Developer, South Yorkshire | React, PHP, MySQL, WordPress etc',
};

export default function Home() {

    return (
    <div>
        <Header/>

        <main itemScope itemType="http://schema.org/Person">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-5">
                        <p>I am a <abbr title="Linux, Apache, MySQL and PHP">LAMP</abbr> stack web developer with
                            almost 20 years of experience. I have worked in-house and agency, remotely or office
                            based, via employment and freelance for many businesses both <abbr
                                title="Business to Customer">B2C</abbr> and <abbr
                                title="Business to Business">B2B</abbr> of varying sizes in a multitude of sectors.
                        </p>
                        <p>Whether it's a bespoke application or utilising an established framework, I have created
                            or been involved with brochure websites, eCommerce, social networks, <abbr
                                title="Software as a Service">SAAS</abbr>, <abbr
                                title="Progressive Web Applications">PWAs</abbr> and much more.</p>
                    </div>
                </div>
            </div>

            <Skills />
        </main>


    </div>
);
}
