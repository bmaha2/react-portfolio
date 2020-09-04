import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function MediaCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.pic}
          src={props.pic}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={`https://github.com/${props.github}`} target="_blank" rel="noopener noreferrer">gitHub Link</a>
        </Button>
        <Button size="small" color="primary">
          <a href={props.deployed} target="_blank" rel="noopener noreferrer">Deployed Link</a>
        </Button>
      </CardActions>
    </Card>
  );
}






