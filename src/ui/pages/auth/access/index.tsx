import { Link } from "react-router-dom";
import Input from "../../../../components/Input";

export default function AccessPage() {
  return (
    <div className="w-[90%] mx-auto -mt-20 -ml-12 z-10 relative">
      <h2 className="font-bold text-5xl text-center mb-20">
        Connect to your account
      </h2>

      <div className="w-[65%] mx-auto">
        <form>
          <Input
            id="email"
            name="email"
            label="Email"
            styles={{ label: "text-white" }}
            placeholder="Insert email"
          />

          <Input
            id="password"
            name="password"
            label="Password"
            styles={{ label: "text-white", container: "mt-4" }}
            placeholder="Insert password"
          />

          <button
            type="submit"
            className="btn-primary font-bold w-full mt-6 py-2 rounded-md"
          >
            Create account
          </button>
        </form>

        <div className="flex gap-1 mt-4 items-center text-center justify-center">
          <span>Not having an account?</span>
          <Link
            to="/auth/join"
            className="text-indigo-600 inline-block hover:underline hover:underline-offset-4 text-center"
          >
            Create here
          </Link>
        </div>
      </div>
    </div>
  );
}
