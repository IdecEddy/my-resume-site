// Colors
// Borders - #707070
import Image from 'next/image';
import { faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope }  from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile_pic from '../public/profile3.jpg';
import styles from '../styles/profile.module.css'
const Profile = () => {
    return(
    <>
        <div className="
            flex
            items-center
            p-10
            h-full
            w-1/3">
            <div className={"box-border border border-neutral-400 rounded-3xl flex flex-col overflow-hidden justify-center 2xl:px-30 " + styles.profile_container}>
                <div className="flex flex-col 2xl:flex-row 2xl:py-10 py-5">
                    <h1 className="text-base 2xl:text-4xl font-bold text-violet-500 text-center">Edwin Mundo</h1>
                    <div className="2xl:ml-auto text-center">
                        <p className="2xl:font-bold text-sm"> Software & Systems</p>
                        <p className="2x:float-right 2xl:font-bold text-sm">Engineer</p>
                    </div>
                </div>
                <Image
                  src={profile_pic}
                  alt="this is me"
                  width="0"
                  height="0"
                  className="
                    w-[500px]
                    h-[500px]
                    xl:h-[150px]
                    xl:w-[150px]
                    grayscale
                    rounded-3xl 
                    place-self-center"
                />
                <div className={styles.contact_rows}> 
                    <p className="
                        2xl:text-3xl
                        text-sm
                        place-self-center
                        text-center
                        font-bold"> Welcome to EdwinMundo.Dev </p>
                    <p className="
                        2xl:mt-2
                        2xl:text-2xl
                        place-self-center
                        text-center
                        font-bold
                        text-sm"> Based in Orlando, FL </p>
                    <p className="
                        2xl:mt-5
                        text-center
                        text-[#979797]
                        2xl:text-xl
                        text-xs">© 2023 EdwinM. All Rights Reserved </p>
                </div>
                <div className="flex justify-center flex-row px-10"> 
                    <FontAwesomeIcon icon={faLinkedinIn} className="
                        place-self-center
                        text-center
                        border
                        2xl:p-3
                        p-2
                        rounded-full
                        overflow-hidden
                        border-neutral-400
                        mx-2
                        text-sm"/> 
                    <FontAwesomeIcon icon={faYoutube} className="
                        place-self-center
                        text-center
                        border
                        2xl:p-3
                        p-2
                        rounded-full
                        overflow-hidden
                        border-neutral-400
                        mx-2
                        text-sm"/> 
                </div>
                <div className="text-center flex justify-center">
                    <button type="button" className={" flex felx-row justify-center items-center text-center  border-neutral-400 overflow-hidden rounded-full bg-violet-500 2xl:px-5 2xl:py-2 px-2 py-1 2xl:text-20 font-bold w-4/5 2xl:mt-45 " +  styles.email_button}>
                        <FontAwesomeIcon icon={faEnvelope}
                            className="
                            pr-2
                            font-bold
                            2xl:text-[30px]
                            bg-violet-500"/>
                        <p className="bg-violet-500"> Hire Me! </p>
                        </button> 
                </div>
            </div>
        </div>
    </>);
} 

export default Profile
