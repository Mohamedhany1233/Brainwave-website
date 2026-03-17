import { brainwaveSymbol, check } from "../../assets";
import Section from "../../components/ui/section";
import { collabApps, collabContent, collabText } from "../../constants";
import Button from "../../components/ui/Button";
import { LeftCurve, RightCurve } from "../collaboration/visuals/Collaboration";
import Heading from "../../components/ui/Heading";

const CollaborationSection = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        {/* Collaboration Content on the left */}
        <div className="max-w-[25rem]">
          <Heading
            className="h2"
            title="AI Chat App for seamless collaboration"
          />

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((c) => (
              <li className="mb-3 py-3" key={c.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{c.title}</h6>
                </div>
                {c.text && <p className="body-2 mt-3 text-n-4">{c.text}</p>}
              </li>
            ))}
          </ul>
          {/* CTA */}
          <Button className="font-code">Try it Now</Button>
        </div>
        {/* Collaboration Content on the right */}
        <div className="lg:ml-auto xl:w-[38rem] mt-6">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((c, i) => (
                <li
                  key={c.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${i * 45}`}
                >
                  <div
                    className={`reltative flex w-[3.2rem] h-[3.2rem] border-n-1/15 border bg-n-7 rounded-xl -top-[1.6rem] -rotate-${i * 45}`}
                  >
                    <img
                      src={c.icon}
                      className="m-auto"
                      width={c.width}
                      height={c.height}
                      alt={c.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CollaborationSection;
