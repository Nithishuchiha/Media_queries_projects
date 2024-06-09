// import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../Portfolio_project_display/CardDisplay.css";
import nithish from "../assets/nithish.jpg";
import image1 from "../assets/pexels-hson-20552799.jpg";
import image2 from "../assets/pexels-ketut-subiyanto-4246097.jpg";
import image3 from "../assets/pexels-orlovamaria-4969988.jpg";
import image4 from "../assets/pexels-sebastian-luna-736234668-22882407.jpg";
import image5 from "../assets/react.svg";

const CardDisplay = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div className="card">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={nithish}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              MyProfile
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia sx={{ height: 140 }} image={image1} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia sx={{ height: 140 }} image={image4} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Exploring
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia sx={{ height: 140 }} image={image2} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia sx={{ height: 140 }} image={image3} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="card">
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia sx={{ height: 140 }} image={image5} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Photography
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default CardDisplay;
