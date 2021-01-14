import React from "react";
import ServicesCard from "../components/ServicesCard";
import {
  faLightbulb,
  faBolt,
  faDesktop,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const layouts =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nobis esse. Obcaecati, nostrum iusto exercitationem iure ad rerum! Non sed debitis veniam delectus autem. Consequatur eligendi beatae tempora neque?";
  const features =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nobis esse. Obcaecati, nostrum iusto exercitationem iure ad rerum! Non sed debitis veniam delectus autem. Consequatur eligendi beatae tempora neque?";
  const design =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nobis esse. Obcaecati, nostrum iusto exercitationem iure ad rerum! Non sed debitis veniam delectus autem. Consequatur eligendi beatae tempora neque?";
  const more =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nobis esse. Obcaecati, nostrum iusto exercitationem iure ad rerum! Non sed debitis veniam delectus autem. Consequatur eligendi beatae tempora neque?";
  return (
    <div id="services-container">
      <div className="services-info">
        <h5>
          Suite of features that make Pura one of the best agencies of{" "}
          <span>2021.</span>
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, nobis
          esse. Obcaecati, nostrum iusto exercitationem iure ad rerum! Non sed
          debitis veniam delectus autem. Consequatur eligendi beatae tempora
          neque?
        </p>
      </div>
      <div className="services-cards">
        <ServicesCard
          icon={faLightbulb}
          title="Unique layouts"
          text={layouts}
        />
        <ServicesCard icon={faBolt} title="New features" text={features} />
        <ServicesCard
          icon={faDesktop}
          title="Responsive design"
          text={design}
        />
        <ServicesCard
          icon={faInfinity}
          title="And more & more..."
          text={more}
        />
      </div>
    </div>
  );
}
