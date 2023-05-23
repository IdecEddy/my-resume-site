import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/time_line.module.css';
const Time_line_slide = () => {
  return (
    <>
      <div
        id="about_us_content"
        className="col-start-2 col-end-4 row-start-3 h-[3000px]"
      >
        <div
          id="page_about_marker"
          className="mb-[25px] flex w-[150px] cursor-default flex-row justify-center rounded-full border border-neutral-400 px-4 py-2"
        >
          <p className="text-center text-neutral-400">
            <FontAwesomeIcon
              className="pr-[10px]"
              icon={faBolt}
            />
            Experience
          </p>
        </div>
        <div className={styles.timeline_container}>
          <ul className={styles.timeline_ul}>
            <li className={styles.timeline_items}>
              <div className=" px-12">
                <p> Jan 2023 - May 2023 </p>
                <p className="mt-[10px] text-[25px] font-bold">
                  Systems Engineer @ IQNOX
                </p>
                <p className="mt-[10px] text-neutral-400">
                  In my year as a systems engineer at IQNOX,
                  I spent my time building out the
                  infrastructure for a managed service
                  provider offering. That year, I took the
                  MSP from zero to production ready. I
                  implemented infrastructure as code, DevOps
                  deployment pipelines, and data backup
                  solutions. I built out multiple
                  environments for our clients, ensuring
                  development went through a DEV/QA
                  environment before ever hitting
                  production. I developed automated backups
                  of each environment and a monitoring
                  system to alert the team of any issues. I
                  managed multiple Kubernetes
                  Clusters/databases/webservers, ensuring
                  %99.99 uptime on all our services.
                </p>
              </div>
            </li>
            <li className={styles.timeline_items}>
              <div className=" px-12">
                <p> Jan 2023 - May 2023 </p>
                <p className="text-[25px] font-bold">
                  Systems Engineering Contract for BAE
                  Systems with IQNOX
                </p>
                <p className="mt-[10px] text-neutral-400">
                  During my contract at BAE Systems, I
                  consulted for a system upgrade of their
                  internal Source and Requirements
                  Management System. The process involved
                  meeting with key stakeholders, developing
                  a system upgrade plan, and meeting with
                  team members to guide them on best
                  practices. While working with BAE, I was
                  able to spot many value gains and
                  improvements to their current process that
                  would save them time and money.
                </p>
              </div>
            </li>
            <li className={styles.timeline_items}>
              <div className=" px-12">
                <p> Jan 2022 - Jun 2022</p>
                <p className="text-[25px] font-bold">
                  Software & Systems Engineering Contract
                  for Los Alamos National Laboratory with
                  IQNOX
                </p>
                <p className="mt-[10px] text-neutral-400">
                  In my work with Los Alamos, I helped
                  develop a standardized workflow for
                  testing and requirements across various
                  national laboratories. Initially, we
                  established a management system for
                  requirements and testing. Later, we worked
                  on creating a system to export
                  requirements documents in a standard
                  format. To achieve this, we met with
                  numerous key stakeholders to address
                  differences between the workflows of
                  different laboratories.
                </p>
              </div>
            </li>
            <li className={styles.timeline_items}>
              <div className=" px-12">
                <p> Feb 2020 - Dec 2022</p>
                <p className="text-[25px] font-bold">
                  Software & Systems Engineering Contract
                  for General Atomics with IQNOX
                </p>
                <p className="mt-[10px] text-neutral-400">
                  While at General Atomics, I played a role
                  in maintaining and enhancing their
                  requirements management system. One of my
                  major contributions was creating a program
                  that allowed for the seamless transfer of
                  requirements documents between systems,
                  saving engineers several hours of idle
                  time during the process. This program was
                  more efficient and resulted in significant
                  cost savings of tens of thousands of
                  dollars and minimized the possibility of
                  errors. Additionally, I assisted in the
                  development of new features such as
                  post-processing and programmatically
                  parsing and updating documents.
                </p>
              </div>
            </li>
            <li className={styles.timeline_items}>
              <div className=" px-12">
                <p> Jan 2020 - Dec 2022 </p>
                <p className="text-[25px] font-bold">
                  Software Engineer @ IQNOX
                </p>
                <p className="mt-[10px] text-neutral-400">
                  During my time as a software engineer at
                  IQNOX, I developed tools to efficiently
                  manage their infrastructure and simplify
                  deployment processes. This involved
                  creating Python scripts to gather
                  inventory data on our server fleet.
                  Additionally, I played a role in building
                  their WordPress website and actively
                  contributed to enhancing their software
                  offerings. Through collaboration with key
                  stakeholders, I provided valuable input on
                  how to improve their applications and
                  better serve their clients.
                </p>
              </div>
            </li>
            <li className={styles.timeline_items}>
              <div className="px-12">
                <p> Jan 2018 - Dec 2019 </p>
                <p className="text-[25px] font-bold">
                  Systems Engineer @ HostDime
                </p>
                <p className="mt-[10px] text-neutral-400">
                  During my time at HostDime, I provided
                  support to their clients by resolving
                  their web hosting issues. HostDime managed
                  thousands of servers across seven data
                  centers worldwide, which hosted various
                  services including websites/web apps,
                  databases, email servers, and FTP servers.
                  These servers could run on either Windows
                  or Linux. When assisting clients, I would
                  examine the issue and then analyze the
                  client's code and service to determine the
                  root of the problem. This experience
                  provided me with a solid understanding of
                  web technologies and has set me apart from
                  other developers.
                </p>
              </div>
            </li>
            <li className={styles.timeline_items}>
              <div className="px-12">
                <p> Jan 2015 - Dec 2018 </p>
                <p className="text-[25px] font-bold">
                  PHP Web Developer for Web Wizards
                </p>
                <p className="mt-[10px] text-neutral-400">
                  During my time at Web Wizards, I created
                  custom WordPress templates and plugins for
                  various clients such as law firms,
                  accounting firms, and an aviation school.
                  This experience helped me gain valuable
                  skills in web development and taught me
                  how to present data in a visually engaging
                  and user-friendly way.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Time_line_slide;
