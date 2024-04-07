export const HamBurger = ({ className }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
);

export const Cart = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`}
  >
    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
  </svg>
);

export const Instagram = () => (
  <svg
    class="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clip-rule="evenodd"
    />
  </svg>
);

export const Facebook = () => (
  <svg
    class="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill-rule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clip-rule="evenodd"
    />
  </svg>
);

export const Right = ({ width = 6, height = 6 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className={`w-${width} h-${height}`}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const Delivery = ({ width = 8, height = 8 }) => (
  <svg
    className={`w-${width} h-${height}`}
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    viewBox="0 0 150 150"
  >
    <path
      fill="#400000"
      fill-opacity=".9"
      d="M53.8 49.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5M35.2 69c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3m39 0c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3M53.8 88.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5m-11.4 6.5-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m16.1-.2c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m37.9.2-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2m16.1-.2c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m-70 16c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m15.9.2-1.9 2.3 2.3-1.9c1.2-1.1 2.2-2.1 2.2-2.3 0-.8-.8-.2-2.6 1.9m38.1-.2c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2m15.9.2-1.9 2.3 2.3-1.9c2.1-1.8 2.7-2.6 1.9-2.6-.2 0-1.2 1-2.3 2.2"
    />
    <g fill="#400000" stroke-width="0">
      <path d="M29.2 42c-3.9 1.6-4.3 4.9-4 32.7.3 30.2.1 29.3 9.2 30.1 4.2.3 5.7.9 6.1 2.3 1.1 3.4 6.4 6.9 10.5 6.9 4.2 0 9.4-3.5 10.5-7 .6-1.9 1.6-2 16.5-2s15.9.1 16.5 2c1.1 3.5 6.3 7 10.5 7 4.1 0 9.4-3.5 10.5-6.9.3-1 2-2.2 3.8-2.7 4.4-1.3 5.7-4.5 5.7-14.4 0-11.4-1.1-14.5-8.1-24-7.4-10.1-9.9-11.3-21.5-10.8l-8.2.3-.4-5.3c-.8-8.9 0-8.7-29.6-8.9-14.2-.1-26.7.2-28 .7M83 73v28H72.6c-9.5 0-10.5-.2-11.1-2-1.1-3.5-6.3-7-10.5-7s-9.4 3.5-10.5 7c-.5 1.7-1.6 2-6.1 2H29V45h54zm14.2-4c.4 13.1.7 13.4 13.8 13.8l10 .4v8.9c0 8.8 0 8.9-2.4 8.9-1.6 0-2.7-.7-3.1-2-1.1-3.5-6.3-7-10.5-7s-9.4 3.5-10.5 7c-.5 1.5-1.5 2-4.1 2H87V59h9.8zm14.3-5.8c4.8 5.6 9.5 12.8 9.5 14.5 0 1-2.4 1.3-10 1.3h-10V59h3.4c2.8 0 4.1.8 7.1 4.2M57 97c1.3 1.3 2 3.3 2 6s-.7 4.7-2 6-3.3 2-6 2-4.7-.7-6-2-2-3.3-2-6 .7-4.7 2-6 3.3-2 6-2 4.7.7 6 2m54 0c1.3 1.3 2 3.3 2 6s-.7 4.7-2 6-3.3 2-6 2c-5.3 0-8-2.7-8-8 0-2.7.7-4.7 2-6s3.3-2 6-2 4.7.7 6 2" />
      <path d="M46.5 51.7c-7 3.7-10.5 9.4-10.5 17.4 0 19.3 25.7 26.2 35.5 9.5 5.4-9.2 1.8-21.8-7.4-26.6-4.9-2.4-13.3-2.6-17.6-.3M63.8 55c4.8 3 7.2 7.5 7.2 14s-2.4 11-7.2 14c-4.5 2.7-13.1 2.7-17.6 0-4.8-3-7.2-7.5-7.2-14s2.4-11 7.2-14c4.5-2.7 13.1-2.7 17.6 0" />
      <path d="M53 62.7c0 5.3-.3 6-3.1 8.4-5 4.1-2.7 5.5 2.6 1.6 4.4-3.2 4.4-3.2 4.5-9.5 0-5.5-.2-6.2-2-6.2s-2 .7-2 5.7" />
    </g>
    <path
      fill="#400000"
      fill-opacity=".1"
      d="M111 57.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3"
    />
    <path
      fill="#400000"
      fill-opacity=".3"
      d="M41.9 94.7c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7m54 0c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7M41 110.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m54 0c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3"
    />
  </svg>
);

export const Order = ({ width = 8, height = 8 }) => (
  <svg
    className={`w-${width} h-${height}`}
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    viewBox="0 0 150 150"
  >
    <path
      fill="#400000"
      fill-opacity=".9"
      d="M29 102.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3"
    />
    <g fill="#400000" stroke-width="0">
      <path d="M36.4 42.4c-2 .9-3.5 2.5-4.3 4.6-1.4 4.1-1.5 43.8-.1 47.4.8 2.3.7 2.5-2.3 2.8-6.3.6-4 8.8 3 10.7 2.1.6 12.9 1.1 23.9 1.1 19.3 0 20.2-.1 20.7-2 .5-2 0-2-22.7-2-22.6 0-25.6-.4-25.6-3.2 0-.4 11-.8 24.5-.8 23.8 0 24.5-.1 24.5-2s-.8-2-21.2-2.2l-21.3-.3v-51h79l.3 20.7c.2 20 .3 20.8 2.2 20.8s2-.7 2-18.4c0-21-.7-24.1-5.6-26.2-4.8-2-72.4-2-77 0" />
      <path d="M96.3 82.2c-1.2 1.3-2.4 3.8-2.8 5.5-.6 3.1-.9 3.3-5.1 3.3-5.4 0-5.4-.1-5.7 18-.2 13.4-.2 13.4 2.3 14.7 3.5 1.8 30.5 1.8 34 0 2.5-1.3 2.5-1.3 2.3-14.7-.3-18.1-.3-18-5.7-18-4.2 0-4.5-.2-5.1-3.3-1.1-4.8-4.2-7.7-8.5-7.7-2.5 0-4.3.7-5.7 2.2m9.5 2c.7.7 1.2 2.5 1.2 4 0 2.7-.2 2.8-5 2.8s-5-.1-5-2.8c0-1.5.5-3.3 1.2-4 1.5-1.5 6.1-1.5 7.6 0m12.5 19c.4 4.6.7 10.4.7 13v4.8H85v-4.8c0-2.6.3-8.4.7-13l.6-8.2h31.4z" />
    </g>
  </svg>
);

export const Browse = ({ width = 8, height = 8 }) => (
  <svg
    className={`w-${width} h-${height}`}
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    viewBox="0 0 150 150"
  >
    <path
      fill="#400000"
      fill-opacity=".8"
      d="M110 76.4c.7.7 1.3.7 2 0 .6-.6.3-1-1-1s-1.6.4-1 1m-25.1 9.3c-1.3 1.6-1.2 1.7.4.4.9-.7 1.7-1.5 1.7-1.7 0-.8-.8-.3-2.1 1.3m22.1-1.3c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3M73.4 105c0 1.3.4 1.6 1 1 .7-.7.7-1.3 0-2-.6-.6-1-.3-1 1m10.6 2.4c0 .2.8 1 1.8 1.7 1.5 1.3 1.6 1.2.3-.4s-2.1-2.1-2.1-1.3m23.9 1.3c-1.3 1.6-1.2 1.7.4.4s2.1-2.1 1.3-2.1c-.2 0-1 .8-1.7 1.7"
    />
    <path
      fill="#400000"
      fill-opacity=".9"
      d="M95.8 77.7c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5M77.2 97c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3m39 0c0 1.4.2 1.9.5 1.2.2-.6.2-1.8 0-2.5-.3-.6-.5-.1-.5 1.3m1.3 19c3.3 3.3 6.2 6 6.4 6 .3 0-2.1-2.7-5.4-6s-6.2-6-6.4-6c-.3 0 2.1 2.7 5.4 6m-2 2c3.3 3.3 6.2 6 6.4 6 .3 0-2.1-2.7-5.4-6s-6.2-6-6.4-6c-.3 0 2.1 2.7 5.4 6m-19.7-1.3c.6.2 1.8.2 2.5 0 .6-.3.1-.5-1.3-.5s-1.9.2-1.2.5"
    />
    <g fill="#400000" stroke-width="0">
      <path d="M29.2 26c-1.2.5-2.7 2.1-3.2 3.5-.6 1.6-1 17.5-1 38.9 0 29.6.3 36.6 1.4 37.5.9.8 8.2 1.1 24.2.9 19.6-.3 22.9-.5 22.9-1.8s-3.3-1.5-22.2-1.8L29 103V43h80l.2 16.2c.3 13.7.5 16.3 1.8 16.3s1.5-3.2 1.5-23.2c0-21-.2-23.4-1.8-25-1.6-1.7-4.8-1.8-40.5-2-22-.1-39.7.2-41 .7m79.8 8v5H29V29h80z" />
      <path d="M39 57c0 1.7.7 2 4 2s4-.3 4-2-.7-2-4-2-4 .3-4 2m14 0c0 1.9.7 2 23 2s23-.1 23-2-.7-2-23-2-23 .1-23 2M39 67c0 1.7.7 2 4 2s4-.3 4-2-.7-2-4-2-4 .3-4 2m14 0c0 1.9.7 2 23 2s23-.1 23-2-.7-2-23-2-23 .1-23 2M39 77c0 1.7.7 2 4 2s4-.3 4-2-.7-2-4-2-4 .3-4 2m14 0c0 1.9.7 2 14 2s14-.1 14-2-.7-2-14-2-14 .1-14 2m35.5 2.7c-4.4 2.3-6.5 4.4-8.6 8.5-3.4 6.7-2.1 16.3 3 22.2 5 5.7 16.2 7.3 23.2 3.4l3.9-2.2 6 5.9c3.3 3.2 6.3 5.6 6.7 5.2s-2-3.4-5.2-6.7l-5.9-6 2.2-3.9c3.8-6.7 2.6-16.4-2.7-22.5-4.6-5.3-16.2-7.3-22.6-3.9m17.3 3.3c4.8 3 7.2 7.5 7.2 14 0 10-6 16-16 16s-16-6-16-16c0-6.5 2.4-11 7.2-14 4.5-2.7 13.1-2.7 17.6 0M39 87c0 1.7.7 2 4 2s4-.3 4-2-.7-2-4-2-4 .3-4 2m14 0c0 1.9.7 2 10 2s10-.1 10-2-.7-2-10-2-10 .1-10 2" />
    </g>
    <path
      fill="#400000"
      fill-opacity=".4"
      d="M121.5 119c1 1.1 2 2 2.3 2s-.3-.9-1.3-2-2-2-2.3-2 .3.9 1.3 2"
    />
    <path
      fill="#400000"
      fill-opacity=".3"
      d="M116 113.5c1.9 1.9 3.6 3.5 3.9 3.5s-1-1.6-2.9-3.5-3.6-3.5-3.9-3.5 1 1.6 2.9 3.5m-1 5c3 3 5.7 5.5 5.9 5.5.3 0-1.9-2.5-4.9-5.5s-5.7-5.5-5.9-5.5c-.3 0 1.9 2.5 4.9 5.5"
    />
  </svg>
);