import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import {
  IconBrandApple,
  IconBrandGoogle,
  IconBrandMeta,
  IconCheck,
  IconStar,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    terms: true,
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.terms) {
      alert("Please accept the terms and conditions");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-linear-to-br from-[#020617] via-[#0a2f1f] to-[#020617] dark:from-[#020617] dark:via-[#0a2f1f] dark:to-[#020617] ">
 
      <div className="flex items-center space-x-2 px-4 py-5 absolute top-6 left-8 max-sm:left-2">
        <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center border-2">
          <div className="w-3 h-3 rounded-full bg-white m-2 border-2"></div>
        </div>
        <span className="font-bold text-xl tracking-tight text-teal-400">
          aps
        </span>
      </div>

     
      <div className="w-full lg:w-1/2 min-h-fit pt-40 relative overflow-hidden flex justify-center items-center">
       
        <div
          className="absolute bottom-0 right-0 w-150 h-150 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #ff6b35 0%, #ff8c5a 30%, transparent 70%)",
          }}
        />
     
        <div
          className="absolute top-20 left-20 w-75 h-75 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #0CC8A8 0%, #0a8c7a 50%, transparent 80%)",
          }}
        />
      
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-16  text-white items-center">
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white">
              Expert level Cybersecurity in
              <span className="text-teal-400"> hours</span> not weeks.
            </h1>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-300 font-sans">
                What's included
              </h2>
              <ul className="space-y-4">
                {[
                  "Effortlessly spider and map targets to uncover hidden security flaws",
                  "Deliver high-quality, validated findings in hours, not weeks",
                  "Generate professional, enterprise-grade security reports automatically",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-30 max-sm:pt-8">
              <div className="flex items-center gap-2">
                <IconStar className="w-4 h-4 fill-teal-400 text-teal-400" />
                <span className="text-white font-medium">Trustpilot</span>
              </div>
              <p className="text-lg text-white mt-3 ">
                Rated 4.5/5.0{" "}
                <span className="text-sm text-gray-400">(100k+ reviews)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    
      <div className="w-full lg:w-1/2 min-h-fit pt-20 pb-20 flex items-center justify-center p-6 lg:p-8">
        <Card className="w-full max-w-lg border border-gray-200 dark:border-gray-700 shadow-lg px-6 py-10 bg-white dark:bg-gray-900">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
              Sign up
            </CardTitle>
            <p className="text-sm mt-2 text-center text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="#"
                className="text-teal-500 hover:underline font-medium"
                onClick={(e) => e.preventDefault()}
              >
                Log in
              </a>
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4">
                <Input
                  id="firstName"
                  placeholder="First name*"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  required
                  className="h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
                <Input
                  id="lastName"
                  placeholder="Last name*"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  required
                  className="h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              <Input
                id="email"
                type="email"
                placeholder="Email address*"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password (8+ characters)*"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  className="h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <IconEyeOff size={18} />
                  ) : (
                    <IconEye size={18} />
                  )}
                </button>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="terms"
                  checked={formData.terms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, terms: checked as boolean })
                  }
                  className="mt-1 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed cursor-pointer"
                >
                  I agree to Aps's{" "}
                  <span className="text-teal-500 hover:underline cursor-pointer">
                    Terms & Conditions
                  </span>{" "}
                  and acknowledge the{" "}
                  <span className="text-teal-500 hover:underline cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                className="cursor-pointer w-full bg-teal-600 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-500 text-white h-12 rounded-full font-semibold transition-colors"
                disabled={!formData.terms || isLoading}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <button className="w-full h-12 bg-black dark:bg-gray-800 dark:border dark:border-gray-600 rounded-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity">
                <IconBrandApple
                  fontSize={20}
                  className="text-white fill-white"
                />
              </button>
              <button className="w-full h-12 rounded-full bg-gray-100 dark:bg-gray-800 dark:border dark:border-gray-600 flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity">
                <IconBrandGoogle
                  size={20}
                  className="text-gray-700 dark:text-gray-300"
                />
              </button>
              <button className="w-full h-12 rounded-full bg-blue-600 dark:bg-blue-700 flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity">
                <IconBrandMeta size={22} className="text-white" />
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
