import Image from "next/image";
import { get } from '@vercel/edge-config';
import { redirect } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const dynamic = 'force-dynamic'

// Different icons for social media
function TwitterIcon() {
  return (
    <svg
      width="28"
      height="24"
      viewBox="0 0 24 20"
      fill='#1DA1F2'
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z"
          fill="#1DA1F2"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v19.636H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function MastoIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512"
      width="28"
      height="28"
      fill="#8C8DFF"
    >
      <path d="M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5 0 0 1 -.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z"/></svg>
  )
}

function InstaIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512"
      width="28"
      height="28"
      fill="#E1306C"
    >
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
  )
}

function BskyIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512"
      width="28"
      height="28"
      fill="#00B0FF"
    ><path d="M160.8 96.5c14 17 31 30.9 49.5 42.2c25.9 15.8 53.7 25.9 77.7 31.6V138.8C265.8 108.5 250 71.5 248.6 28c-.4-11.3-7.5-21.5-18.4-24.4c-7.6-2-15.8-.2-21 5.8c-13.3 15.4-32.7 44.6-48.4 87.2zM320 144v30.6l0 0v1.3l0 0 0 32.1c-60.8-5.1-185-43.8-219.3-157.2C97.4 40 87.9 32 76.6 32c-7.9 0-15.3 3.9-18.8 11C46.8 65.9 32 112.1 32 176c0 116.9 80.1 180.5 118.4 202.8L11.8 416.6C6.7 418 2.6 421.8 .9 426.8s-.8 10.6 2.3 14.8C21.7 466.2 77.3 512 160 512c3.6 0 7.2-1.2 10-3.5L245.6 448H320c88.4 0 160-71.6 160-160V128l29.9-44.9c1.3-2 2.1-4.4 2.1-6.8c0-6.8-5.5-12.3-12.3-12.3H400c-44.2 0-80 35.8-80 80zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"/></svg>
  )
}

function SteamIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 496 512"
      width="28"
      height="28"

    >
    <path d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"/></svg>
  )
}

function AniIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 384 512"
      width="28"
      height="28"
      fill="#02A9FF"
    ><path d="M221.5 51.7C216.6 39.8 204.9 32 192 32s-24.6 7.8-29.5 19.7l-120 288-40 96c-6.8 16.3 .9 35 17.2 41.8s35-.9 41.8-17.2L93.3 384H290.7l31.8 76.3c6.8 16.3 25.5 24 41.8 17.2s24-25.5 17.2-41.8l-40-96-120-288zM264 320H120l72-172.8L264 320z"/></svg>
  )
}

function LetterIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 640 512"
      width="28"
      height="28"
      fill="#FF8000"
    ><path d="M521.3 128C586.9 128 640 181.1 640 246.6s-53.1 118.6-118.7 118.6c-42.5 0-79.7-22.3-100.7-55.8c11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l0 0 .8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zM320 128c42.5 0 79.7 22.3 100.7 55.8c-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l0 0-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0c-42.5 0-79.7-22.3-100.7-55.8c11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l0 0 .8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zm-201.3 0c42.5 0 79.7 22.3 100.7 55.8c-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l0 0-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0C53.1 365.1 0 312.1 0 246.6S53.1 128 118.7 128z"/></svg>
  )
}

function SpotifyIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 496 512"
      width="28"
      height="28"
      fill="#1BC357"
    ><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
  )
}

function LastIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512"
      width="28"
      height="28"
      fill="#BA0000"
    ><path d="M225.8 367.1l-18.8-51s-30.5 34-76.2 34c-40.5 0-69.2-35.2-69.2-91.5 0-72.1 36.4-97.9 72.1-97.9 66.5 0 74.8 53.3 100.9 134.9 18.8 56.9 54 102.6 155.4 102.6 72.7 0 122-22.3 122-80.9 0-72.9-62.7-80.6-115-92.1-25.8-5.9-33.4-16.4-33.4-34 0-19.9 15.8-31.7 41.6-31.7 28.2 0 43.4 10.6 45.7 35.8l58.6-7c-4.7-52.8-41.1-74.5-100.9-74.5-52.8 0-104.4 19.9-104.4 83.9 0 39.9 19.4 65.1 68 76.8 44.9 10.6 79.8 13.8 79.8 45.7 0 21.7-21.1 30.5-61 30.5-59.2 0-83.9-31.1-97.9-73.9-32-96.8-43.6-163-161.3-163C45.7 113.8 0 168.3 0 261c0 89.1 45.7 137.2 127.9 137.2 66.2 0 97.9-31.1 97.9-31.1z"/></svg>
  )
}

function PaypalIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 384 512"
      width="28"
      height="28"
      fill="#0544B5"
    ><path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"/></svg>
  )
}

function GmailIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512"
      width="28"
      height="28"
      fill="white"
    ><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
  )
}

// Link cards
function LinkCard({ 
  title, 
  href, 
  image 
}) {
  return (
    <a href={href} className="flex items-center w-full p-1 rounded-md shadow-lg hover:scale-105 hover:bg-gray-200 hover:rounded-none transition-all max-w-3xl bg-gray-100 mb-3">
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          { image && (
            <Image
              alt={title}
              src={image}
              width={40}
              height={40}
              className="rounded-sm"
            />
          )}
        </div>
        <h2 className="font-semibold w-full flex justify-center items-center pl-12 pr-12 -ml-10 text-gray-700">
          {title}
        </h2>
      </div>
    </a>
  )
}


// Main app
export default async function Home() {
  const data = await get("linktree");

  // Security in case of missing data from Vercel
  if (!data) {
    redirect("https://twitter.com/JubstacheitAlt");
  }
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
        className="rounded-full"
      />
      <h1 className="font-bold mt-4 text-xl">
        {data.name}
      </h1>
      <h2 className="font-semibold mt-2 text-l mb-8">
        {data.subtitle}
      </h2>


      <div className="flex gap-4 items-center mb-4 flex-wrap justify-center">
        {data.socials.map((link) => {
          if (link.href.includes("twitter")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <TwitterIcon />
              </a>
            )
          }
          if (link.href.includes("github")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <GitHubIcon />
              </a>
            )
          }
          if (link.href.includes("rivals")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <MastoIcon />
              </a>
            )
          }
          if (link.href.includes("instagram")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <InstaIcon />
              </a>
            )
          }
          if (link.href.includes("bsky")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <BskyIcon />
              </a>
            )
          }
          if (link.href.includes("steamcommunity")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <SteamIcon />
              </a>
            )
          }
          if (link.href.includes("anilist")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <AniIcon />
              </a>
            )
          }
          if (link.href.includes("letterboxd")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <LetterIcon />
              </a>
            )
          }
          if (link.href.includes("spotify")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <SpotifyIcon />
              </a>
            )
          }
          if (link.href.includes("last.fm")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <LastIcon />
              </a>
            )
          }
          if (link.href.includes("paypal")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <PaypalIcon />
              </a>
            )
          }
          if (link.href.includes("@gmail")) {
            return (
              <a className="hover:scale-110 transition-all" href={link.href} key={link}>
                <GmailIcon />
              </a>
            )
          }
        })}
      </div>

      <h2 className="font-semibold text-lg mb-2 mt-6">
        My developper adventures
      </h2>
      {data.dev.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}

      <h2 className="font-semibold text-lg mb-2 mt-6">
        Others...
      </h2>
      {data.other.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      
    </div>
  );
}