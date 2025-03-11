import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
  const HOT_URL = "https://w0.peakpx.com/wallpaper/5/224/HD-wallpaper-warm-sunrays-warm-sun-rays-background-bright-hot.jpg";
  const COLD_URL = "https://c4.wallpaperflare.com/wallpaper/344/68/1020/nature-ice-crystal-cold-wallpaper-preview.jpg";
  const RAIN_URL = "https://st3.depositphotos.com/1400069/35282/i/450/depositphotos_352828632-stock-photo-spring-rain-forest-fresh-branches.jpg";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
              info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                ? <WbSunnyIcon />
                : <AcUnitIcon />
            }
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperture = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                the weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
