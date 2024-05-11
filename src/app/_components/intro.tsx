import { CMS_NAME } from "@/lib/constants";
import { NavBar } from "./nav-bar";
export function Intro() {
  return (
    <>
    <section className="flex flex-col md:flex-row items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Yongbu.J's Blog.
      </h1>
      <h2 className="text-center md:text-left text-lg mt-5 md:pl-8 ">
        sharing my idea and info about Science and Art.{" "}
      </h2>
    </section>
    <NavBar />
    </>
  );
}
