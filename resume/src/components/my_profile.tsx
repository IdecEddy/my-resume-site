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
        <div className="flex items-center p-10 h-full w-1/3">
            <div className={"box-border border border-neutral-400 rounded-3xl flex flex-col overflow-hidden justify-center px-30 " + styles.profile_container}>
                <div className="flex flex-row py-10">
                    <h1 className="text-4xl font-bold text-violet-500">Edwin Mundo</h1>
                    <div className="ml-auto">
                        <p className="font-bold"> Software & Systems</p>
                        <p className="float-right font-bold">Engineer</p>
                    </div>
                </div>
                <Image
                  src={profile_pic}
                  alt="This is me"
                  width={500}
                  height={500}
                  className="
                    grayscale
                    rounded-3xl 
                    place-self-center"
                />
                <div className={styles.contact_rows}> 
                    <p className="
                        text-3xl
                        place-self-center
                        text-center
                        font-bold"> Welcome to EdwinMundo.Dev </p>
                    <p className="
                        mt-2
                        text-2xl
                        place-self-center
                        text-center
                        font-bold"> Based in Orlando, FL </p>
                    <p className="
                        mt-5
                        text-center
                        text-[#979797]
                        text-xl">© 2023 EdwinM. All Rights Reserved </p>
                </div>
                <div className="flex justify-center flex-row px-10"> 
                    <FontAwesomeIcon icon={faLinkedinIn} className="
                        place-self-center
                        text-center
                        border
                        p-3
                        rounded-full
                        overflow-hidden
                        border-neutral-400
                        mx-2"/> 
                    <FontAwesomeIcon icon={faYoutube} className="
                        place-self-center
                        text-center
                        border
                        p-3
                        rounded-full
                        overflow-hidden
                        border-neutral-400
                        mx-2"/> 
                </div>
                <div className="text-center flex justify-center">
                    <button type="button" className={" flex felx-row justify-center items-center text-center  border-neutral-400 overflow-hidden rounded-full bg-violet-500 px-5 py-2 text-20 font-bold w-4/5 mt-45 " +  styles.email_button}>
                        <FontAwesomeIcon icon={faEnvelope}
                            className="
                            pr-2
                            font-bold
                            text-[30px]
                            bg-violet-500"/>
                        <p className="bg-violet-500"> Hire Me! </p>
                        </button> 
                </div>
            </div>
        </div>
    </>);
} 

export default Profile
