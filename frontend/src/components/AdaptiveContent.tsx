import { ReactComponent as HatIcon } from "../assets/hat.svg";
import { AdaptiveContentProps } from "../types/types";

const AdaptiveContent: React.FC<AdaptiveContentProps> = ({
  title,
  subtitle,
  content,
  subcontent,
}) => {
  return (
    <section>
      <h2 className="title-font sm:text-1xl text-3xl mb-4 font-medium text-white  dark:text-white my-12">
        {title}
      </h2>

      <a
        className="block p-8 bg-gray-900 border border-gray-800 shadow-xl rounded-xl"
        href="/"
      >
        <div className="w-10 h-10 text-blue-400">
          <HatIcon />
        </div>

        <div>
          {subtitle === "" ? null : (
            <h3 className="mt-3 text-xl font-bold text-white">{subtitle}</h3>
          )}
        </div>
        <p className="mt-4 text-sm text-gray-300">{content}</p>
        <div>
          {subcontent === "" ? null : (
            <p className="mt-4 text-sm text-gray-300">{subcontent}</p>
          )}
        </div>
      </a>
    </section>
  );
};
export default AdaptiveContent;
