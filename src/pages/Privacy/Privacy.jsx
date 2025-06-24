import { FaArrowRightLong } from "react-icons/fa6";
import ScrollToTop from "../../hooks/ScrollToTop";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_DATA } from "../../data";

const Privacy = () => {
  return (
    <ScrollToTop>
      <div className="mx-5 lg:mx-14">
        {/* Our Privacy Policy */}
        <div className="md:flex items-center gap-14 mt-14">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              Introduction
            </h1>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              Welcome to Terra Whale Investment Group&nbsp;s Privacy Policy. At
              Terra Whale, we prioritize your privacy and the security of your
              personal information. As we connect entrepreneurs with investors,
              we are committed to maintaining trust and transparency. This
              policy outlines how we collect, use, and protect your data,
              ensuring that your privacy is respected throughout our innovative
              investment eco system.
            </p>
            <br />
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              Our mission extends beyond funding to creating strategic
              partnerships that foster sustainable growth. Partnered with retail
              giants like Walmart, Target, and BestBuy, we uphold the highest
              standards of data protection. Thank you for trusting Terra Whale
              as we work together to propel your ventures to new heights while
              safeguarding your privacy.
            </p>
            <br />
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              Before you provide or submit any personal information to Terra
              Whale, please review this Policy carefully.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <img
              className="md:w-11/12 rounded-tl-[80px]"
              src="https://img.freepik.com/free-photo/business-executives-discussing-with-their-colleagues-whiteboa_1170-1837.jpg?w=740&t=st=1707153768~exp=1707154368~hmac=2124ac0c719ed04665d0a3cac6906476f843b8341165313be539ee076ce4a73f"
              alt=""
            />
          </div>
        </div>

        {/* data collection */}
        <div className="md:flex items-center gap-14 mt-14">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              Changes to this Policy
            </h1>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              As privacy laws evolve or our practices change, we may update this
              Policy occasionally. We encourage you to review this Policy
              regularly to stay informed. By continuing to use Terra
              Whale&nbsp;s services after any changes, you agree to the current
              version of the Policy. For your convenience, this Policy may be
              translated into other languages; however, in the event of any
              discrepancies, the English version will prevail.
            </p>
          </div>
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              Who We Are
            </h1>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              At Terra Whale Investment Group, we connect innovative
              entrepreneurs with visionary investors to drive growth and
              success. As a trusted liaison, we facilitate meaningful
              partnerships and provide strategic support for businesses to
              thrive. Our commitment to protecting your privacy and securing
              your personal information is integral to our mission of fostering
              a dynamic and successful investment eco system.
            </p>
          </div>
        </div>

        <div className="md:flex items-center gap-14 mt-14">
          <div className="md:w-full mb-4 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              How This Policy Applies
            </h1>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              This Policy outlines the types of personal information we collect,
              how we use it, and the reasons behind these practices. It also
              explains how and when we may share your information, as well as
              your rights and options regarding the personal data you provide to
              us. This Policy is an integral part of your relationship with
              Terra Whale Investment Group and governs how we handle your
              information in accordance with our commitment to privacy and
              transparency.
            </p>
          </div>
        </div>

        <div className="md:flex items-center gap-14 mt-14">
          <div className="md:w-full mb-4 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              Personal Information We Collect
            </h1>
            <div className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              <p>
                At Terra Whale Investment Group, we collect personal information
                in various ways, including:
              </p>
              <ul className="px-5">
                <li className="list-disc">
                  <span className="font-bold">Directly from You:</span> When you
                  sign up for an account, participate in pitch sessions, or
                  interact with our services. This includes information such as
                  your name, email address, phone number, and company details.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Passively:</span> Through your
                  interactions with our website or mobile app, we collect data
                  like your IP address, device information, and browsing
                  behavior.
                </li>
                <li className="list-disc">
                  <span className="font-bold">From Third Parties:</span> We may
                  receive information from trusted partners for payment
                  processing, background checks, or business development
                  purposes.
                </li>
              </ul>
              <p>
                We collect this information to provide and improve our services,
                communicate with you, and ensure the effectiveness of our
                operations.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex items-center gap-14 mt-14">
          <div className="md:w-full mb-4 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              Sharing Your Personal Information
            </h1>
            <div className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              <p>
                We may share your personal information in the following
                circumstances:
              </p>
              <ul className="px-5">
                <li className="list-disc">
                  <span className="font-bold">With Your Consent:</span> When you
                  authorize us to share your information with third parties.
                </li>
                <li className="list-disc">
                  <span className="font-bold">With Service Providers:</span> To
                  assist with tasks like payment processing, marketing, and data
                  analysis.
                </li>
                <li className="list-disc">
                  <span className="font-bold">For Legal Reasons:</span> To
                  comply with legal obligations, respond to law enforcement
                  requests, or protect our rights.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:flex items-center gap-14 mt-14">
          <div className="md:w-full mb-4 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              Your Rights and Choices
            </h1>
            <div className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              <p>
                You have rights regarding your personal information, including:
              </p>
              <ul className="px-5">
                <li className="list-disc">
                  <span className="font-bold">Access and Correction:</span> You
                  can request access to your information or ask us to correct
                  it.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Deletion:</span> You can request
                  the deletion of your personal information, subject to legal
                  and business requirements.
                </li>
                <li className="list-disc">
                  <span className="font-bold">Opt-Out:</span> You can opt-out of
                  marketing communications and adjust your preferences through
                  your account settings.
                </li>
                <li className="list-disc">
                  <span className="font-bold">International Transfers:</span> If
                  you are outside the United States, your information may be
                  processed in the U.S. by Terra Whale.
                </li>
              </ul>
              <p>
                For any privacy concerns or to exercise your rights, please
                contact us at {CONTACT_DATA.EMAIL}. We are committed to
                addressing your privacy concerns and ensuring compliance with
                applicable data protection laws.
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex items-center gap-14 mt-14">
          <div className="md:w-full mb-4 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              Account Deletion
            </h1>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              You can delete your account at any time by emailing us at
              <a
                href={`mailto:${CONTACT_DATA.EMAIL}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 px-1"
              >
                {CONTACT_DATA.EMAIL}
              </a>
              . We will process your request and confirm the deletion of your
              account as per our privacy policy guidelines.
            </p>
          </div>
        </div>

        <div className="md:flex items-center gap-14 mt-14">
          <div className="md:w-full mb-4 md:mb-0">
            <h1 className="text-5xl font-semibold mb-5 dark:text-white">
              Cookies and Tracking Technologies
            </h1>
            <p className="text-neutral-600 text-lg dark:text-neutral-300 w-11/12">
              We use cookies and similar technologies to collect data for
              functionality, security, and analytics. You can manage your cookie
              preferences through your browser settings.
            </p>
          </div>
        </div>

        <div className="md:flex items-center gap-14 mt-14">
          <div className="mt-3 grid space-y-3">
            <h4 className="font-semibold text-neutral-600">To contact:</h4>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-600 hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                target="_blank"
                rel="noreferrer"
                href={`mailto:${CONTACT_DATA.EMAIL}`}
              >
                <Mail className="mt-1" size={18} /> {CONTACT_DATA.EMAIL}{" "}
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-600 hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                target="_blank"
                rel="noreferrer"
                href={`tel:${CONTACT_DATA.PHONE}`}
              >
                <Phone className="mt-1" size={18} /> {CONTACT_DATA.PHONE}{" "}
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-neutral-600 hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                target="_blank"
                rel="noreferrer"
                href="https://maps.app.goo.gl/aR7qCyLsMYwboTwu9"
              >
                <MapPin className="mt-1" size={18} />{" "}
              </a>
            </p>
          </div>
        </div>

        {/* explore */}
        <Link to="/team">
          {" "}
          <div className="group relative cursor-pointer overflow-hidden bg-white dark:bg-[#121212] dark:border-gray-600 border-[#4169E1] border text-white  my-20 md:11/12 lg:w-9/12 mx-auto py-5 md:py-24 transition-all duration-300 rounded-tl-[50px] md:rounded-tl-[100px] lg:rounded-tl-[145px] rounded-br-[50px] md:rounded-br-[100px] lg:rounded-br-[145px] lg:px-40">
            <div className="text-container w-full">
              <h1 className="text-[26px] md:text-[35px] lg:text-[50px] lg:mt-0 md:mt-4 mt-4 font-semibold text-center flex items-center justify-center gap-3 text-[#4169E1] group-hover:text-[#fff] md:gap-7">
                Explore Our Team{" "}
                <FaArrowRightLong className="pt-3 text-[26px] md:text-[30px] md:mt-0 -mt-2 lg:text-[50px] group-hover:text-[#fff] group-hover:ml-2" />
              </h1>
            </div>
            <span className="absolute md:text-md text-sm top-2 left-[16%] lg:left-[29%] px-4 z-0 h-6 w-30 rounded-full bg-[#4169E1] transition-all duration-300 group-hover:text-[#668bfd] group-hover:scale-[50] mt-5">
              up Next
            </span>
            <div className="flex flex-col z-[20] justify-center px-4 md:w-11/12 lg:w-full mx-auto text-black"></div>
          </div>
        </Link>
      </div>
    </ScrollToTop>
  );
};

export default Privacy;
