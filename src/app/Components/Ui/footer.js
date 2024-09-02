export default function Footer() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-12">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Kuldeep Patel"
                className="inline-flex items-center"
              >
                <svg
                  className="w-8 text-deep-purple-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeMiterlimit={10}
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x={3} y={1} width={7} height={12} />
                  <rect x={3} y={17} width={7} height={6} />
                  <rect x={14} y={1} width={7} height={6} />
                  <rect x={14} y={11} width={7} height={12} />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                  Kuldeep Patel
                </span>
              </a>
              <div className="mt-6 lg:max-w-sm">
                <p className="text-sm text-gray-800">
                  I am a passionate Full Stack Developer with a focus on creating scalable and efficient software solutions. Lets connect and create something amazing together.
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
              <div className="flex">
                <p className="mr-1 text-gray-800">Phone:</p>
                <a
                  href="tel:850-123-5021"
                  aria-label="Kuldeep's phone"
                  title="Kuldeep's phone"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  7223004053
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a
                  href="mailto:kuldeep.patel@example.com"
                  aria-label="Kuldeep's email"
                  title="Kuldeep's email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  kuldeeppatel.dev@gmail.com
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Location:</p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kuldeep's location"
                  title="Kuldeep's location"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Chhattisgarh, India
                </a>
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
              <div className="flex items-center mt-1 space-x-3">
                <a
                  href="https://youtube.com/kuldeep"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  aria-label="youtube"
                  title="youtube"
                >
                  <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5"
>
  <path d="M23.498 6.186a2.999 2.999 0 00-2.121-2.122C19.642 3.5 12 3.5 12 3.5s-7.642 0-9.377.564A2.999 2.999 0 00.5 6.186 29.23 29.23 0 000 12c0 1.384.07 2.747.5 3.814a2.999 2.999 0 002.123 2.121C4.358 20.5 12 20.5 12 20.5s7.642 0 9.377-.565a2.999 2.999 0 002.122-2.121C23.93 14.747 24 13.384 24 12c0-1.384-.07-2.747-.502-3.814zM9.75 15.47v-6.94l6.563 3.47-6.563 3.47z" />
</svg>

                </a>
                <a
                  href="https://www.github.com/devkuldeep"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  aria-label="github"
                  title="github"
                >
                 <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5"
>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.599.11.82-.26.82-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.612-4.042-1.612-.546-1.387-1.332-1.758-1.332-1.758-1.087-.744.083-.729.083-.729 1.204.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.774.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.02.005 2.047.138 3.005.404 2.291-1.553 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.609-2.804 5.624-5.475 5.921.43.372.815 1.104.815 2.226 0 1.606-.014 2.898-.014 3.293 0 .32.217.694.825.576C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
</svg>

                </a>
                <a
                  href="https://www.linkedin.com/in/kuldeep-patel-09a0041a7/"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  aria-label="linkdin"
                  title="linkdin"
                >
                 <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  className="h-5"
>
  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.727v20.546C0 23.226.792 24 1.77 24h20.46C23.208 24 24 23.226 24 22.273V1.727C24 .774 23.208 0 22.23 0zM7.06 20.452H3.56V9.049h3.5v11.403zM5.31 7.531a2.024 2.024 0 110-4.048 2.024 2.024 0 010 4.048zm15.142 12.921h-3.499v-5.898c0-1.407-.028-3.222-1.963-3.222-1.964 0-2.264 1.533-2.264 3.115v6.005h-3.5V9.049h3.36v1.553h.048c.468-.886 1.61-1.82 3.32-1.82 3.55 0 4.2 2.337 4.2 5.374v6.296z" />
</svg>

                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Lets connect on social media and collaborate on exciting projects.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
            <p className="text-sm text-gray-600">
              © Copyright 2024 Kuldeep Patel. All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <li>
                <a
                  href="/faq"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  F.A.Q
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
