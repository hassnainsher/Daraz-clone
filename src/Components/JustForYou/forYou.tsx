
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ForYou( {price, img , dtb ,dsp}) {
  // 
  return (
    <Card sx={{ 

      boxShadow: 'none',
      border: 'none',
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },


      }}>
      <CardMedia
        sx={{ height: 180 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {dtb} <br />
        Rs.
 {price}  
 <br />
{dsp}
        </Typography>
      </CardContent>
      
    </Card>
  );
}
