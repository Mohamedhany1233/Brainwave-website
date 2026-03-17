import Section from "../../components/ui/section";
import { socials } from "../../constants";

const FooterSection = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex justify-center sm:justify-between items-center gap-10 max-sm:flex-col ">
        <p className="caption text-n-4 lg:block ">
          {new Date().getFullYear()} All Right Reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.id}
              href="#"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={s.iconUrl} width={16} height={16} alt={s.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default FooterSection;
