import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { ControllerContentPage } from "../Controller/ControllerContentPage";


export default function ContentPage() {
  const { data } = ControllerContentPage();
  console.log(data);

  return (
    <>
      {data?.map((marvelData) => (
        <Card sx={{ maxWidth: 500 }} style={{ marginTop: 30 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image={marvelData?.thumbnail?.path + ".jpg"}
              alt="imagem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {marvelData?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {marvelData?.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
}
