import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landlord</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <main>
        <Navbar />
        {/* <nav>
          
          <div class="container">
            <Link href={"/"}>
              <svg
                width="233"
                height="80"
                viewBox="0 0 233 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_640_7614)">
                  <path
                    d="M41.2002 11.9795V68.5277H42.0287V54.6496L55.6997 51.1283V68.5277H70.8207V54.6496L56.3211 50.9211V23.5791L41.2002 11.9795Z"
                    fill="url(#paint0_linear_640_7614)"
                  />
                  <path
                    d="M77.6562 17.9865L62.5352 6.17969V37.8715L76.4134 30.0004V68.5277H91.3272V37.8715L77.6562 30.8289V17.9865Z"
                    fill="url(#paint1_linear_640_7614)"
                  />
                </g>
                <g filter="url(#filter1_d_640_7614)">
                  <path
                    d="M105.745 51.4016V66.668H116.104V69H103.142V51.4016H105.745ZM124.209 69.2712C123.052 69.2712 121.995 68.9729 121.037 68.3763C120.078 67.7798 119.319 66.9572 118.759 65.9088C118.198 64.8422 117.918 63.622 117.918 62.2481C117.918 60.8742 118.198 59.663 118.759 58.6145C119.337 57.5479 120.124 56.7164 121.118 56.1198C122.112 55.5052 123.224 55.1979 124.453 55.1979C125.809 55.1979 126.857 55.5142 127.599 56.1469C128.358 56.7796 128.882 57.6293 129.171 58.6959C129.479 59.7624 129.632 60.9465 129.632 62.2481C129.632 62.9712 129.542 63.7395 129.361 64.5529C129.18 65.3664 128.891 66.1347 128.493 66.8578C128.096 67.5809 127.544 68.1684 126.839 68.6204C126.134 69.0542 125.258 69.2712 124.209 69.2712ZM124.941 67.0205C125.899 67.0205 126.704 66.8126 127.355 66.3968C128.023 65.963 128.521 65.3845 128.846 64.6614C129.171 63.9383 129.334 63.1339 129.334 62.2481C129.334 61.29 129.162 60.4494 128.819 59.7263C128.493 59.0032 127.996 58.4428 127.327 58.0451C126.677 57.6474 125.881 57.4485 124.941 57.4485C123.531 57.4485 122.438 57.9004 121.66 58.8043C120.901 59.7082 120.521 60.8561 120.521 62.2481C120.521 63.1881 120.711 64.0197 121.091 64.7428C121.47 65.4478 121.986 66.0082 122.636 66.424C123.305 66.8217 124.074 67.0205 124.941 67.0205ZM129.334 55.469H131.937V69H129.551C129.551 69 129.533 68.8373 129.497 68.5119C129.461 68.1684 129.424 67.7617 129.388 67.2917C129.352 66.8217 129.334 66.4059 129.334 66.0443V55.469ZM135.332 55.469H137.936V69H135.332V55.469ZM143.088 55.1979C143.847 55.1979 144.534 55.3063 145.149 55.5233C145.763 55.7402 146.287 56.0656 146.721 56.4994C147.155 56.9152 147.49 57.4395 147.725 58.0722C147.978 58.6868 148.104 59.3918 148.104 60.1872V69H145.528V60.7567C145.528 59.6901 145.266 58.8947 144.742 58.3705C144.236 57.8281 143.458 57.557 142.41 57.557C141.596 57.557 140.855 57.7468 140.186 58.1264C139.517 58.506 138.966 59.0122 138.532 59.6449C138.116 60.2596 137.863 60.9555 137.773 61.7329L137.746 60.2415C137.836 59.5184 138.026 58.8495 138.315 58.2349C138.623 57.6202 139.002 57.087 139.454 56.635C139.924 56.165 140.466 55.8125 141.081 55.5775C141.696 55.3244 142.365 55.1979 143.088 55.1979ZM157.098 69.2712C155.923 69.2712 154.856 68.9729 153.898 68.3763C152.94 67.7798 152.181 66.9572 151.621 65.9088C151.078 64.8422 150.807 63.622 150.807 62.2481C150.807 60.8742 151.078 59.663 151.621 58.6145C152.163 57.5479 152.904 56.7164 153.844 56.1198C154.784 55.5052 155.869 55.1979 157.098 55.1979C158.165 55.1979 159.05 55.3786 159.755 55.7402C160.46 56.1017 161.012 56.6079 161.41 57.2587C161.807 57.9095 162.087 58.6597 162.25 59.5093C162.431 60.359 162.521 61.2719 162.521 62.2481C162.521 62.9712 162.431 63.7395 162.25 64.5529C162.069 65.3664 161.78 66.1347 161.382 66.8578C160.985 67.5809 160.433 68.1684 159.728 68.6204C159.023 69.0542 158.147 69.2712 157.098 69.2712ZM157.83 67.0205C158.788 67.0205 159.593 66.8126 160.244 66.3968C160.912 65.963 161.41 65.3845 161.735 64.6614C162.06 63.9383 162.223 63.1339 162.223 62.2481C162.223 61.29 162.051 60.4494 161.708 59.7263C161.382 59.0032 160.885 58.4428 160.216 58.0451C159.566 57.6474 158.77 57.4485 157.83 57.4485C156.42 57.4485 155.326 57.9004 154.549 58.8043C153.79 59.7082 153.41 60.8561 153.41 62.2481C153.41 63.1881 153.6 64.0197 153.98 64.7428C154.359 65.4478 154.875 66.0082 155.525 66.424C156.194 66.8217 156.962 67.0205 157.83 67.0205ZM162.223 50.0458H164.826V69H162.44C162.386 68.6023 162.331 68.1142 162.277 67.5357C162.241 66.9572 162.223 66.4601 162.223 66.0443V50.0458ZM168.969 50.0458H171.572V69H168.969V50.0458ZM181.827 69.2983C180.507 69.2983 179.296 69.0181 178.193 68.4577C177.09 67.8973 176.214 67.0928 175.563 66.0443C174.912 64.9958 174.587 63.7395 174.587 62.2752C174.587 60.7928 174.912 59.5274 175.563 58.4789C176.214 57.4124 177.09 56.5989 178.193 56.0385C179.296 55.4781 180.507 55.1979 181.827 55.1979C183.146 55.1979 184.349 55.4781 185.433 56.0385C186.518 56.5989 187.386 57.4124 188.036 58.4789C188.687 59.5274 189.013 60.7928 189.013 62.2752C189.013 63.7395 188.687 64.9958 188.036 66.0443C187.386 67.0928 186.518 67.8973 185.433 68.4577C184.349 69.0181 183.146 69.2983 181.827 69.2983ZM181.827 67.0476C182.64 67.0476 183.39 66.8669 184.077 66.5053C184.782 66.1257 185.343 65.5834 185.759 64.8783C186.192 64.1552 186.409 63.2875 186.409 62.2752C186.409 61.2448 186.192 60.368 185.759 59.6449C185.343 58.9218 184.782 58.3705 184.077 57.9908C183.39 57.6112 182.64 57.4214 181.827 57.4214C181.013 57.4214 180.254 57.6112 179.549 57.9908C178.844 58.3524 178.275 58.8947 177.841 59.6178C177.407 60.3409 177.19 61.2267 177.19 62.2752C177.19 63.2875 177.398 64.1552 177.814 64.8783C178.247 65.5834 178.817 66.1257 179.522 66.5053C180.227 66.8669 180.995 67.0476 181.827 67.0476ZM191.736 55.469H194.339V69H191.736V55.469ZM198.922 57.7739C197.982 57.7739 197.178 57.9908 196.509 58.4247C195.858 58.8585 195.334 59.3918 194.936 60.0245C194.556 60.6573 194.303 61.2629 194.177 61.8413L194.15 60.2957C194.168 60.1149 194.213 59.8347 194.285 59.4551C194.376 59.0574 194.529 58.6145 194.746 58.1264C194.963 57.6383 195.252 57.1773 195.614 56.7435C195.975 56.2916 196.427 55.921 196.97 55.6317C197.512 55.3425 198.163 55.1979 198.922 55.1979V57.7739ZM206.855 69.2712C205.68 69.2712 204.614 68.9729 203.655 68.3763C202.697 67.7798 201.938 66.9572 201.378 65.9088C200.835 64.8422 200.564 63.622 200.564 62.2481C200.564 60.8742 200.835 59.663 201.378 58.6145C201.92 57.5479 202.661 56.7164 203.601 56.1198C204.541 55.5052 205.626 55.1979 206.855 55.1979C207.922 55.1979 208.808 55.3786 209.513 55.7402C210.218 56.1017 210.769 56.6079 211.167 57.2587C211.564 57.9095 211.845 58.6597 212.007 59.5093C212.188 60.359 212.278 61.2719 212.278 62.2481C212.278 62.9712 212.188 63.7395 212.007 64.5529C211.826 65.3664 211.537 66.1347 211.14 66.8578C210.742 67.5809 210.19 68.1684 209.485 68.6204C208.78 69.0542 207.904 69.2712 206.855 69.2712ZM207.587 67.0205C208.545 67.0205 209.35 66.8126 210.001 66.3968C210.67 65.963 211.167 65.3845 211.492 64.6614C211.817 63.9383 211.98 63.1339 211.98 62.2481C211.98 61.29 211.808 60.4494 211.465 59.7263C211.14 59.0032 210.642 58.4428 209.974 58.0451C209.323 57.6474 208.527 57.4485 207.587 57.4485C206.177 57.4485 205.084 57.9004 204.306 58.8043C203.547 59.7082 203.167 60.8561 203.167 62.2481C203.167 63.1881 203.357 64.0197 203.737 64.7428C204.116 65.4478 204.632 66.0082 205.282 66.424C205.951 66.8217 206.72 67.0205 207.587 67.0205ZM211.98 50.0458H214.583V69H212.197C212.143 68.6023 212.089 68.1142 212.034 67.5357C211.998 66.9572 211.98 66.4601 211.98 66.0443V50.0458ZM217.859 64.6072H220.245C220.335 65.3303 220.661 65.9268 221.221 66.3968C221.781 66.8488 222.568 67.0748 223.58 67.0748C224.231 67.0748 224.737 67.0024 225.099 66.8578C225.46 66.6951 225.713 66.4782 225.858 66.207C226.021 65.9359 226.102 65.6376 226.102 65.3122C226.102 64.8964 225.993 64.5801 225.777 64.3631C225.56 64.1281 225.252 63.9383 224.855 63.7937C224.457 63.631 223.987 63.4773 223.445 63.3327C222.848 63.17 222.251 62.9802 221.655 62.7633C221.058 62.5463 220.507 62.2842 220.001 61.9769C219.513 61.6696 219.115 61.29 218.808 60.838C218.518 60.368 218.374 59.7986 218.374 59.1297C218.374 58.5693 218.491 58.0451 218.726 57.557C218.979 57.0689 219.332 56.6531 219.784 56.3096C220.254 55.9481 220.796 55.6769 221.411 55.4961C222.025 55.2973 222.703 55.1979 223.445 55.1979C224.475 55.1979 225.343 55.3877 226.048 55.7673C226.753 56.1289 227.286 56.6441 227.648 57.3129C228.027 57.9818 228.226 58.7501 228.244 59.6178H225.966C225.84 58.8585 225.578 58.3072 225.18 57.9637C224.782 57.6022 224.186 57.4214 223.39 57.4214C222.613 57.4214 222.016 57.5751 221.601 57.8824C221.185 58.1897 220.977 58.6055 220.977 59.1297C220.977 59.5274 221.122 59.8528 221.411 60.1059C221.7 60.3409 222.089 60.5488 222.577 60.7296C223.065 60.9103 223.616 61.1002 224.231 61.299C224.809 61.4979 225.361 61.7057 225.885 61.9227C226.427 62.1215 226.906 62.3656 227.322 62.6548C227.756 62.926 228.09 63.2875 228.325 63.7395C228.579 64.1733 228.705 64.7156 228.705 65.3664C228.705 66.1618 228.506 66.8578 228.109 67.4544C227.711 68.0329 227.132 68.4848 226.373 68.8102C225.632 69.1356 224.728 69.2983 223.662 69.2983C222.685 69.2983 221.854 69.1808 221.167 68.9458C220.498 68.7108 219.929 68.4034 219.458 68.0238C219.007 67.6442 218.654 67.2465 218.401 66.8307C218.166 66.3968 218.003 65.9811 217.913 65.5834C217.841 65.1857 217.822 64.8603 217.859 64.6072Z"
                    fill="url(#paint2_linear_640_7614)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_640_7614"
                    x="-4"
                    y="0"
                    width="142.588"
                    height="84.9062"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_640_7614"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_640_7614"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_640_7614"
                    x="99.1426"
                    y="50.0469"
                    width="133.562"
                    height="27.25"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_640_7614"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_640_7614"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_640_7614"
                    x1="41.2002"
                    y1="6.17969"
                    x2="104.04"
                    y2="50.5051"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3C91E6" />
                    <stop offset="1" stop-color="#113DAF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_640_7614"
                    x1="41.2002"
                    y1="6.17969"
                    x2="104.04"
                    y2="50.5051"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3C91E6" />
                    <stop offset="1" stop-color="#113DAF" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_640_7614"
                    x1="101"
                    y1="41"
                    x2="126.705"
                    y2="115.595"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#3C91E6" />
                    <stop offset="1" stop-color="#113DAF" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <div className="theme">
              <a href="#features">Features</a>
              <a href="">Pricing</a>
              <a href="">FAQ</a>
              <a href="">Connect</a>
            </div>
            <button
              class="theme"
              role="switch"
              aria-label="light/dark mode"
            ></button>
            <audio
              src="audio/light-on.mp3"
              class="theme-audio--light-on"
              data-attribute="adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0"
            ></audio>
            <audio
              src="audio/light-off.mp3"
              class="theme-audio--light-off"
              data-attribute="adapted from user 160033 file on freesound.org https://freesound.org/people/160033/sounds/366184/ under CC BY-NC 3.0"
            ></audio>
          </div>
        </nav> */}
        <header>
          <div class="meet">
            <h2>
              Enjoy the Security of investing in real estate built with
              Blockchain Technology
            </h2>
            <p>
              Whether you are a buyer, seller, or investor in real estate in
              Nigeria, discover the speed, ease and security blockchain
              technology provides you in a thriving digital marketplace.
            </p>
            <a href="#method" class="btn accent1-bg bkg1-link">
              Join Community
            </a>
          </div>
          <div className="meet-img">
            <Image src="/heroimg.png" alt="house" width={800.02} height={664} />
          </div>
        </header>
        <section className="method" id="features">
          <div className="method-header">
            <h3>Your simple roadmap to secure investments</h3>
          </div>
          <div className="cards">
            <Features
              svg={
                <svg
                  width="124"
                  height="197"
                  viewBox="0 0 124 197"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 135L38.5 100H81.5M5.5 135V143H8.5M5.5 135L46.5 135.5M46.5 143V135.5M46.5 143H8.5M46.5 143L49.7812 140M46.5 135.5L81.5 100M81.5 100L114.5 135.5V143L109 137.667M8.5 143V192M8.5 192L50.5 191.5M8.5 192L2 196H122L116.5 191.88M109 192V137.667M109 192L95 191.88M109 192L114.5 191.88M109 137.667L81.5 111L49.7812 140M49.7812 140L50.5 191.5M50.5 191.5L63.5 191.611M63.5 191.611V169M63.5 191.611L66 191.632M63.5 169V159.5H103L117.5 166V169H116.5M63.5 169H66M66 169V191.632M66 169H84M66 191.632L84 191.786M84 169V191.786M84 169H86.5M84 191.786L86.5 191.808M86.5 169V191.808M86.5 169H114M86.5 191.808L88 191.821M88 191.821V172.5H95V191.88M88 191.821L95 191.88M114 169L114.5 191.88M114 169H116.5M114.5 191.88H116.5M116.5 191.88V169M64 139V144H69V139H64ZM70.5 139V144H75.5V139H70.5ZM64 145.5V150.5H69V145.5H64ZM70.5 145.5V150.5H75.5V145.5H70.5ZM88.5 139V144H93.5V139H88.5ZM95 139V144H100V139H95ZM88.5 145.5V150.5H93.5V145.5H88.5ZM95 145.5V150.5H100V145.5H95ZM22.5 154V159.5H25.5V154H22.5ZM27 154V159.5H29.5V154H27ZM22.5 147.5V153H25.5V147.5H22.5ZM27 147.5V153H29.5V147.5H27ZM30 180.5V186H33V180.5H30ZM34.5 180.5V186H37V180.5H34.5ZM30 174V179.5H33V174H30ZM34.5 174V179.5H37V174H34.5ZM20.5 180.5V186H23.5V180.5H20.5ZM25 180.5V186H27.5V180.5H25ZM20.5 174V179.5H23.5V174H20.5ZM25 174V179.5H27.5V174H25ZM11.5 180.5V186H14.5V180.5H11.5ZM16 180.5V186H18.5V180.5H16ZM11.5 174V179.5H14.5V174H11.5ZM16 174V179.5H18.5V174H16Z"
                    stroke="url(#paint0_linear_626_7535)"
                  />
                  <path
                    d="M26.1016 51.8984L34.2325 43.7675C35.4597 42.5403 37.4688 42.6072 38.6116 43.9133L48.3447 55.0368C49.5035 56.3611 51.548 56.4083 52.7666 55.1389L84.4224 22.1642C85.5698 20.9689 87.4689 20.9302 88.6642 22.0776L96.8025 29.8904C98.0107 31.0503 98.0353 32.9747 96.8571 34.165L52.6412 78.8367C51.4637 80.0264 49.5404 80.0223 48.368 78.8277L26.0819 56.1211C24.9289 54.9465 24.9377 53.0623 26.1016 51.8984Z"
                    stroke="url(#paint1_linear_626_7535)"
                  />
                  <circle
                    cx="62"
                    cy="50"
                    r="49.5"
                    stroke="url(#paint2_linear_626_7535)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_626_7535"
                      x1="60.5"
                      y1="99"
                      x2="4.89843"
                      y2="299.679"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#09FFFF" />
                      <stop offset="1" stop-color="#09FFFF" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_626_7535"
                      x1="61.2049"
                      y1="18.5064"
                      x2="75.5264"
                      y2="89.0388"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#09FFFF" />
                      <stop offset="1" stop-color="#09FFFF" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_626_7535"
                      x1="61.6065"
                      y1="-2.44846"
                      x2="38.4226"
                      y2="128.112"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#09FFFF" />
                      <stop offset="1" stop-color="#09FFFF" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              }
              h4="Verifiable Assets"
              p="Our Blockchain Technology ensure all ownership of listed properties are verifiable and legitimate. "
            />
            <Features
              svg={
                <svg
                  width="156"
                  height="190"
                  viewBox="0 0 156 190"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.3728 72.5569H27.4439C25.5629 54.0605 38.7298 17.3651 75.4091 18.0083C118.296 18.7604 128.39 54.6875 128.077 72.5569H111.148C111.148 54.6875 100.99 34.1847 75.4091 34.9371C49.8276 35.6895 44.0593 60.3305 44.3728 72.5569Z"
                    stroke="url(#paint0_linear_626_7521)"
                    stroke-width="1.88099"
                  />
                  <path
                    d="M27.4439 75.3784H75.4091H128.077C136.353 75.3784 137.795 82.9023 137.482 86.6643V161.904C137.482 169.428 131.212 171.309 128.077 171.309H27.4439C19.1676 171.309 17.7255 165.039 18.0389 161.904V86.6643C18.0389 76.8831 24.3089 75.0649 27.4439 75.3784Z"
                    stroke="url(#paint1_linear_626_7521)"
                    strokeWidth="1.88099"
                  />
                  <g style={{ mixBlendMode: "color-dodge" }}>
                    <path
                      d="M44.3728 72.5569H27.4439C25.5629 54.0605 38.7298 17.3651 75.4091 18.0083C118.296 18.7604 128.39 54.6875 128.077 72.5569H111.148C111.148 54.6875 100.99 34.1847 75.4091 34.9371C49.8276 35.6895 44.0593 60.3305 44.3728 72.5569Z"
                      stroke="url(#paint2_linear_626_7521)"
                      strokeWidth="1.88099"
                    />
                    <path
                      d="M27.4439 75.3784H75.4091H128.077C136.353 75.3784 137.795 82.9023 137.482 86.6643V161.904C137.482 169.428 131.212 171.309 128.077 171.309H27.4439C19.1676 171.309 17.7255 165.039 18.0389 161.904V86.6643C18.0389 76.8831 24.3089 75.0649 27.4439 75.3784Z"
                      stroke="url(#paint3_linear_626_7521)"
                      strokeWidth="1.88099"
                    />
                  </g>
                  <g
                    style={{ mixBlendMode: "color-dodge" }}
                    filter="url(#filter0_f_626_7521)"
                  >
                    <path
                      d="M44.3728 72.5569H27.4439C25.5629 54.0605 38.7298 17.3651 75.4091 18.0083C118.296 18.7604 128.39 54.6875 128.077 72.5569H111.148C111.148 54.6875 100.99 34.1847 75.4091 34.9371C49.8276 35.6895 44.0593 60.3305 44.3728 72.5569Z"
                      stroke="url(#paint4_linear_626_7521)"
                      strokeWidth="1.88099"
                    />
                    <path
                      d="M27.4439 75.3784H75.4091H128.077C136.353 75.3784 137.795 82.9023 137.482 86.6643V161.904C137.482 169.428 131.212 171.309 128.077 171.309H27.4439C19.1676 171.309 17.7255 165.039 18.0389 161.904V86.6643C18.0389 76.8831 24.3089 75.0649 27.4439 75.3784Z"
                      stroke="url(#paint5_linear_626_7521)"
                      stroke-width="1.88099"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_626_7521"
                      x="0.130692"
                      y="0.129715"
                      width="155.259"
                      height="189.049"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="8.46444"
                        result="effect1_foregroundBlur_626_7521"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_626_7521"
                      x1="77.29"
                      y1="14.2463"
                      x2="130.898"
                      y2="181.654"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#09FFFF" />
                      <stop offset="1" stop-color="#09FFFF" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_626_7521"
                      x1="77.29"
                      y1="14.2463"
                      x2="130.898"
                      y2="181.654"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#09FFFF" />
                      <stop offset="1" stop-color="#09FFFF" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_626_7521"
                      x1="77.29"
                      y1="14.2463"
                      x2="-20.5213"
                      y2="251.251"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#09FFFF" />
                      <stop offset="1" stop-color="#09FFFF" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_626_7521"
                      x1="77.29"
                      y1="14.2463"
                      x2="-20.5213"
                      y2="251.251"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#09FFFF" />
                      <stop offset="1" stop-color="#09FFFF" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_626_7521"
                      x1="81.052"
                      y1="2.96037"
                      x2="26.5034"
                      y2="189.178"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#09FFFF" />
                      <stop offset="1" stop-color="#09FFFF" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_626_7521"
                      x1="81.052"
                      y1="2.96037"
                      x2="26.5034"
                      y2="189.178"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#09FFFF" />
                      <stop offset="1" stop-color="#09FFFF" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              }
              h4="Secure Investments"
              p="Our Blockchain Technology ensure all ownership of listed properties are verifiable and legitimate. "
            />
            <Features
              svg={
                <svg
                  width="147"
                  height="147"
                  viewBox="0 0 147 147"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43 11L73.5 23L104 11L73.5 0L43 11Z"
                    fill="#09FFFF"
                  />
                  <path
                    d="M104 11L73.5 23V61L104 49V11Z"
                    fill="url(#paint0_linear_626_7528)"
                  />
                  <path
                    d="M73.5 23L43 11V49L73.5 61V23Z"
                    fill="url(#paint1_linear_626_7528)"
                  />
                  <path
                    d="M85.5 96L116 108L146.5 96L116 85L85.5 96Z"
                    fill="#09FFFF"
                  />
                  <path
                    d="M146.5 96L116 108V146L146.5 134V96Z"
                    fill="url(#paint2_linear_626_7528)"
                  />
                  <path
                    d="M116 108L85.5 96V134L116 146V108Z"
                    fill="url(#paint3_linear_626_7528)"
                  />
                  <path
                    d="M0 96.5L30.5 108.5L61 96.5L30.5 85.5L0 96.5Z"
                    fill="#09FFFF"
                  />
                  <path
                    d="M61 96.5L30.5 108.5V146.5L61 134.5V96.5Z"
                    fill="url(#paint4_linear_626_7528)"
                  />
                  <path
                    d="M30.5 108.5L0 96.5V134.5L30.5 146.5V108.5Z"
                    fill="url(#paint5_linear_626_7528)"
                  />
                  <path
                    d="M56.5 37C57.7 34.6 55.6667 33.6667 54.5 33.5L28.5 43.5V95.5C30.5 96.7 32.3333 96 33 95.5V46.5L56.5 37Z"
                    fill="#68607C"
                  />
                  <path
                    d="M90.5 37C89.3 34.6 91.3333 33.6667 92.5 33.5L118.5 43.5V95.5C116.5 96.7 114.667 96 114 95.5V46.5L90.5 37Z"
                    fill="#68607C"
                  />
                  <path
                    d="M42 123C40.4 119.4 42.6667 118.167 44 118L73 129.5L102 118.5C104.8 118.1 105.167 121 105 122.5L73 135L42 123Z"
                    fill="#68607C"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_626_7528"
                      x1="73.5"
                      y1="-1.07843e-06"
                      x2="88.5"
                      y2="72.5"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#087780" />
                      <stop offset="0.62917" stop-color="#086B7A" />
                      <stop offset="1" stop-color="#087780" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_626_7528"
                      x1="73.25"
                      y1="-3.57872e-08"
                      x2="74.4508"
                      y2="170.516"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0B1E61" />
                      <stop
                        offset="0.697037"
                        stop-color="#0E2163"
                        stop-opacity="0.65"
                      />
                      <stop offset="1" stop-color="#0E2163" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_626_7528"
                      x1="73.5"
                      y1="2.22885e-06"
                      x2="88"
                      y2="133"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#087780" />
                      <stop offset="0.62917" stop-color="#086B7A" />
                      <stop offset="1" stop-color="#087780" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_626_7528"
                      x1="73.25"
                      y1="-3.57872e-08"
                      x2="74.4508"
                      y2="170.516"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0B1E61" />
                      <stop
                        offset="0.697037"
                        stop-color="#0E2163"
                        stop-opacity="0.65"
                      />
                      <stop offset="1" stop-color="#0E2163" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_626_7528"
                      x1="73.5"
                      y1="2.22885e-06"
                      x2="88"
                      y2="133"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#087780" />
                      <stop offset="0.62917" stop-color="#086B7A" />
                      <stop offset="1" stop-color="#087780" stop-opacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_626_7528"
                      x1="73.25"
                      y1="-3.57872e-08"
                      x2="74.4508"
                      y2="170.516"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0B1E61" />
                      <stop
                        offset="0.697037"
                        stop-color="#0E2163"
                        stop-opacity="0.65"
                      />
                      <stop offset="1" stop-color="#0E2163" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              }
              h4="Complete Transparency"
              p="Our Technology ensures that all transactions carried out is built on a distributed ledger system to avoid tampering."
            />
          </div>
          {/* <div class="cards">
            <div class="card bkg2-bg">
              <span class="h3 accent3 bkg2-bg">1</span>
              <h3>Build</h3>
              <p>Build a strong foundation of technique and theory.</p>
            </div>
            <div class="card bkg2-bg">
              <span class="h3 accent3 bkg2-bg">2</span>
              <h3>Develop</h3>
              <p>Develop expressive, musical playing.</p>
            </div>
            <div class="card bkg2-bg">
              <span class="h3 accent3 bkg2-bg">3</span>
              <h3>Encourage</h3>
              <p>Encourage musical potential of every student.</p>
            </div>
            <div class="card bkg2-bg">
              <span class="h3 accent3 bkg2-bg">4</span>
              <h3>Instill</h3>
              <p>Instill a love for music and a joy for learning.</p>
            </div>
            <div class="card bkg2-bg">
              <span class="h3 accent3 bkg2-bg">5</span>
              <h3>Invest</h3>
              <p>Invest in each student as an individual.</p>
            </div>
          </div> */}
        </section>
        <section id="info" class="info">
          <div class="info-container">
            <div className="img">
              <Image
                src="/coin.png"
                alt="house"
                width={830.14}
                height={661.61}
              />
            </div>
            <div class="info-text">
              <h3>Who are We?</h3>
              <p>
                Landlords is a platform that understands the hassle involved in
                trying to buy or sell a property especially due to the risk of
                scammers, or illegal transactions associated to traditional real
                estate acquisition and investing.<br></br>
                <br></br> Our platform built with blockchain technologyprovides
                real estate agencies, property owners, investors, and
                individuals looking to buy, sell, or invest with security, speed
                and convinence within a thriving digital ecosystem.
              </p>
            </div>
          </div>
        </section>
        <section id="cta">
          <Image
            src="/buttom.png"
            alt="digital bank"
            width={830.14}
            height={661.61}
          />
        </section>
        <section class="connect bkg2-bg" id="connect">
          <div class="connect-form bkg2 accent1-bg">
            <h3>Let’s Connect!</h3>
            <p>
              Interested in learning? Let’s connect! Send me your email, and
              I’ll reach out.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/icon.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
