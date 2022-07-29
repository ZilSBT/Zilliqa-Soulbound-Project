import { ReactComponent as HatIcon } from "../assets/hat.svg";
import { AdaptiveContentProps } from "../types/types";

const AdaptiveContent: React.FC<AdaptiveContentProps> = ({
  title,
  subtitle,
  content,
  subcontent,
}) => {
  return (
    <section className="create-profile">
      <div className="container">
        <h1>Sign up now</h1>
        <p>
          Already have an account? <a href="">Sign in here</a>
        </p>
      </div>
    </section>
  );
};
export default AdaptiveContent;
