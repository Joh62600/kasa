import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/logement.json";
import Carousel from "../components/Carousel/Carousel";
import ApartInfo from "../components/ApartInfo/ApartInfo";
import Owner from "../components/Owner/Owner";
import Rating from "../components/Rating/Rating";
import Tag from "../components/Tag/Tag";
import Collapse from "../components/Collapse/Collapse";
import "../components/StylePage/FicheLogement.css";

function FicheLogement() {
  const { id } = useParams();
  const property = logements.find((logement) => logement.id === id);

  if (!property) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div>
      <section>
        <Carousel apartmentId={property.id} />
      </section>
      <main>
        <div className="info_description">
        <div className="info_content">
        <ApartInfo title={property.title} location={property.location} />
        <Tag tags={property.tags} />
        </div>
        <div className="info_notation">
        <Owner name={property.host.name} picture={property.host.picture} />
        <Rating value={parseInt(property.rating)} />
        </div>
        
        </div>
        <div className="collapses">
          <Collapse title="Description">
            <p>{property.description}</p>
          </Collapse>
          <Collapse title="Equipements">
            <ul>
              {property.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
    </div>
  );
}

export default FicheLogement;