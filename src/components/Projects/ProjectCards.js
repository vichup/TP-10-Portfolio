import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import {FavouritesContext} from "../../context/FavouritesContext"
import { useContext } from "react";

function ProjectCards(props) {

  const {AddFavourite} = useContext(FavouritesContext)


  return (
    <Card className="project-card-view">
      
      <Card.Img variant="top" src={props.imgPath} alt="card-img" height="220rm" width="auto" />
      
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Link to={`/projectDetail/${props.id}`}>
          <Button
            variant="primary"

          >
            <CgFileDocument /> &nbsp;
            {"Detail"}
          </Button>

        </Link>

        {"\n"}
        {"\n"}

        <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "10px", marginLeft: "10px" }}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"

          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

       
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
