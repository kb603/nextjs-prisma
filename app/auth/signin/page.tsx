import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg mx-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to JobList
          </h2>
          <p className="text-gray-600">
            Sign in to post jobs or apply for opportunities
          </p>
        </div>

        <div className="mt-8">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
            <Image
              src={"/github-mark.svg"}
              alt="github-logo"
              width={25}
              height={25}
            />
            <span className="text-base font-medium">Continue with GitHub</span>
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          By signing in, you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 hover:text-indigo-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
