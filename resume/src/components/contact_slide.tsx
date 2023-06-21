import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { api } from '../utils/api';
import { useState } from 'react';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { ChangeEvent } from 'react';
const Contact_slide = () => {
  const [form_data, set_form_data] = useState({
    name: '',
    email: '',
    info: '',
    phone: '',
  });
  const [token, setToken] = useState<string>();
  const [refreshReCaptcha, setRefreshReCaptcha] =
    useState(false);
  const handle_change = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } =
      event.target as HTMLInputElement;
    set_form_data((prev_form_data) => ({
      ...prev_form_data,
      [name]: value,
    }));
  };

  const call_api = api.contact_us.log_message.useMutation();

  return (
    <>
      <div className="mt-[50px] h-[900px] px-10 xl:col-start-2 xl:col-end-4 xl:row-start-5 xl:mt-0 xl:px-0">
        <div
          id="page_contact_marker"
          className="mb-[50px] flex w-[130px] cursor-default flex-row justify-center rounded-full border border-neutral-400 hover:cursor-pointer xl:mb-20 xl:mb-[25px] xl:w-[150px] xl:px-4 xl:py-2"
        >
          <p className="text-neutral-400 xl:text-center">
            <FontAwesomeIcon
              className="pr-[10px]"
              icon={faEnvelope}
            />
            Contact Me
          </p>
        </div>
        <div id="contact-form">
          <p className="mb-10 text-2xl text-white xl:text-[50px]">
            {' '}
            Let&apos;s Work{' '}
            <span className="text-violet-400">
              Together
            </span>
          </p>
          <GoogleReCaptcha
            onVerify={(token) => {
              setToken(token);
            }}
            refreshReCaptcha={refreshReCaptcha}
          />
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              setRefreshReCaptcha((r) => !r);
              const name: string = form_data.name;
              const email: string = form_data.email;
              const info: string = form_data.info;
              const phone: string = form_data.phone;
              const captcha_token: string = token;
              const input = {
                name: name,
                email: email,
                phone: phone,
                info: info,
                token: captcha_token,
              };
              try {
                console.log(call_api.mutate(input));
              } catch {}
            }}
          >
            <div className="flex flex-col xl:flex-row">
              <div className="mr-20 flex flex-col">
                <p className="mb-2 text-2xl text-white">
                  {' '}
                  Full Name{' '}
                </p>
                <input
                  className="mb-10 border-b border-neutral-400 bg-stone-950 px-1 py-1 text-lg text-white outline-none hover:border-violet-400 focus:border-violet-400 xl:w-[300px]"
                  name="name"
                  id="name"
                  type="text"
                  onChange={handle_change}
                />
              </div>
              <div className="flex flex-col">
                <p className="mb-2 text-2xl text-white">
                  {' '}
                  Email Address{' '}
                </p>
                <input
                  className="mb-10 border-b border-neutral-400 bg-stone-950 px-1 py-1 text-lg text-white outline-none hover:border-violet-400 focus:border-violet-400 xl:w-[300px]"
                  name="email"
                  id="email"
                  type="email"
                  onChange={handle_change}
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="mr-20 flex flex-col">
                <p className="mb-2 text-2xl text-white">
                  {' '}
                  Phone Number{' '}
                </p>
                <input
                  className="mb-10 border-b border-neutral-400 bg-stone-950 px-1 py-1 text-lg text-white outline-none hover:border-violet-400 focus:border-violet-400 xl:w-[300px]"
                  name="phone"
                  id="phone"
                  type="text"
                  onChange={handle_change}
                />
              </div>
            </div>
            <p className="mb-2 text-2xl text-white">
              {' '}
              Tell Me More!
            </p>
            <input
              type="text"
              className="mb-10 border-b border-neutral-400 bg-stone-950 px-1 py-1 text-lg text-white outline-none hover:border-violet-400 focus:border-violet-400 xl:w-[700px]"
              name="info"
              id="info"
              onChange={handle_change}
            />
            <input
              type="submit"
              className="mb-10  cursor-pointer rounded-full border border-neutral-400 bg-violet-400 px-1 py-1 text-xl font-bold text-black hover:bg-violet-500 xl:w-[300px]"
              value="Send Me An Email"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact_slide;
