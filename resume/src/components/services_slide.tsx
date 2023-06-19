import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faObjectGroup,
  faRandom,
  faCogs,
  faSitemap,
} from '@fortawesome/free-solid-svg-icons';
const Services_slide = () => {
  return (
    <>
      <div className="mt-[50px] px-10 xl:col-start-2 xl:col-end-4 xl:row-start-4 xl:mt-0 xl:px-0">
        <div
          id="page_services_marker"
          className="flex w-[130px] cursor-default flex-row justify-center rounded-full border border-neutral-400 hover:cursor-pointer xl:mb-[25px] xl:w-[150px] xl:px-4 xl:py-2"
        >
          <p className="text-neutral-400 xl:text-center">
            <FontAwesomeIcon
              className="pr-[10px]"
              icon={faList}
            />
            Services
          </p>
        </div>

        <p className="font-bold xl:mb-20 xl:pt-[20px] xl:text-[60px]">
          Let&apos;s talk about how I can{' '}
          <span className="text-violet-400"> help </span>{' '}
          you.
        </p>
        <div className="my-[25px] mt-[60px] rounded-lg border border-neutral-400 p-10 hover:cursor-pointer hover:border-violet-400">
          <div className="flex flex-row">
            <div>
              <p className="font-bold text-violet-400 hover:border-violet-400 xl:text-2xl">
                {' '}
                Frontend Development{' '}
              </p>
              <p className="text-neutral-400 xl:text-lg">
                Frontend development focuses on creating and
                implementing the user interface and user
                experience components of a software
                application or website, enabling seamless
                interaction and visual presentation for
                end-users. As a frontend developer, I bring
                a strong passion for creating visually
                appealing and user-friendly interfaces,
                coupled with a deep understanding of HTML,
                CSS, and JavaScript. My dedication to
                continuous learning and staying up-to-date
                with the latest frontend technologies
                ensures that I can deliver top-notch
                solutions that meet your development needs.
              </p>
            </div>
            <FontAwesomeIcon
              className="text-violet-400 xl:ml-auto xl:pr-[10px] xl:text-2xl"
              icon={faObjectGroup}
            />
          </div>
        </div>
        <div className="my-[25px] rounded-lg border border-neutral-400 p-10 hover:cursor-pointer hover:border-violet-400">
          <div className="flex flex-row">
            <div>
              <p className="font-bold text-violet-400 xl:text-2xl">
                {' '}
                Backend Development{' '}
              </p>
              <p className="text-neutral-400 xl:text-lg">
                Backend development involves building and
                maintaining the server-side components of a
                software application or website that handle
                data storage, processing, and communication,
                ensuring the functionality and performance
                of the system. I possess a robust skill set
                in programming languages like Python, Java,
                and PHP, combined with extensive experience
                in designing scalable and efficient
                server-side architectures. My attention to
                detail, problem-solving abilities, and
                commitment to writing clean and maintainable
                code make me a valuable asset for developing
                robust and secure backend systems that power
                your applications.
              </p>
            </div>
            <FontAwesomeIcon
              className="ml-auto text-violet-400 xl:pr-[10px] xl:text-2xl"
              icon={faSitemap}
            />
          </div>
        </div>
        <div className="my-[25px] rounded-lg border border-neutral-400 p-10 hover:cursor-pointer hover:border-violet-400">
          <div className="flex flex-row">
            <div>
              <p className="font-bold text-violet-400 xl:text-2xl">
                {' '}
                Development Pipeline Design{' '}
              </p>
              <p className="text-neutral-400 xl:text-lg">
                Development pipelines refer to a series of
                automated steps that streamline the software
                development process, including code
                building, testing, and deployment, to ensure
                efficient and reliable software delivery. I
                offer a unique blend of expertise in
                software engineering and DevOps principles,
                enabling me to design and implement
                efficient and automated development
                workflows tailored to your specific needs.
                With my strong background in CI/CD,
                infrastructure as code, and containerization
                technologies, I can streamline your
                development process, improve collaboration,
                and accelerate time-to-market for your
                projects.
              </p>
            </div>
            <FontAwesomeIcon
              className="ml-auto text-violet-400 xl:pr-[10px] xl:text-2xl"
              icon={faRandom}
            />
          </div>
        </div>
        <div className="my-[25px] rounded-lg border border-neutral-400 p-10 hover:cursor-pointer hover:border-violet-400">
          <div className="flex flex-row">
            <div>
              <p className="font-bold text-violet-400 xl:text-2xl">
                {' '}
                Infrastructure as Code Development{' '}
              </p>
              <p className="text-neutral-400 xl:text-lg">
                Infrastructure as Code (IaC) is the practice
                of managing and provisioning infrastructure
                resources through machine-readable
                configuration files, enabling consistent and
                automated deployment.I possess a deep
                understanding of cloud platforms such as AWS
                and Azure, along with expertise in tools
                like Terraform and Ansible. My meticulous
                approach to infrastructure provisioning and
                management ensures seamless scalability,
                cost optimization, and increased
                reliability, making me the ideal candidate
                to architect and automate your
                infrastructure using industry best
                practices.
              </p>
            </div>
            <FontAwesomeIcon
              className="ml-auto text-violet-400 xl:pr-[10px] xl:text-2xl"
              icon={faCogs}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services_slide;
