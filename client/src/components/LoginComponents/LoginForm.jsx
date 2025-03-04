import PropTypes from "prop-types"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Facebook, Search, Lock, Mail, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { InputField } from "../InputField"

export function LoginForm({ username, setUsername, password, setPassword, rememberMe, setRememberMe, handleSubmit }) {
  return (
    <div className="bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-xl bg-[#1E1E1E] border-l-4 border-[#FFD100]">
      <h3 className="text-2xl font-bold mb-6 text-[#F4F4F4]">Login to Your Account</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          id="email"
          label="Email or Username"
          type="text"
          placeholder="Enter your email or username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={<Mail size={18} className="text-gray-400" />}
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Lock size={18} className="text-gray-400" />}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={setRememberMe}
              className="rounded-sm"
              style={{
                backgroundColor: rememberMe ? "#00A896" : "transparent",
                borderColor: "#F4F4F4",
              }}
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#00A896]"
            >
              Remember me
            </label>
          </div>
          <Link to="#" className="text-sm font-medium text-[#00A896]">
            Forgot password?
          </Link>
        </div>

        <div className="pt-4 space-y-4">
          <Button 
            type="submit" 
            className="w-full py-6 font-bold text-lg bg-[#FF5733] text-[#F4F4F4] transition-colors duration-300 hover:bg-[#F4F4F4] hover:text-[#1E1E1E]" 
            variant={"custom"}
          >
            Login Now
            <ArrowRight className="ml-2" size={18} />
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#F4F4F4] opacity-20"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-[#1E1E1E] text-[#F4F4F4]">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Google", icon: Search },
              { name: "Facebook", icon: Facebook },
            ].map(({ name, icon: Icon }) => (
              <Button
                key={name}
                type="button"
                variant="outline"
                className="py-5 border-[#F4F4F4] text-[#F4F4F4] bg-transparent flex items-center justify-center transition-colors duration-300 hover:bg-[#F4F4F4] hover:text-[#1E1E1E]"
              >
                <Icon className="mr-2 h-4 w-4" />
                {name}
              </Button>
            ))}
          </div>
        </div>
      </form>

      <div className="mt-6 text-center">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span className="text-sm text-[#F4F4F4]">Don't have an account? </span>
        <Button variant="link" className="text-sm font-medium text-[#00A896] p-0">
          <Link to="/register">Sign Up</Link>
        </Button>
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  setRememberMe: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};