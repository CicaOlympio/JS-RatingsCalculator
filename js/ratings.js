function collect_ratings(){
  let ratings={count:0, sum:0, average:0};
  let rating=0;
}

const elements=document.querySelectorAll(".rating");
elements.foreach(element => {
rating=parseInt(element.id.replace('star', '');
ratings.count+=parseInt(element.value);
ratings.sum+=parseInt(element.value)*rating
});
if(ratings.count!=0)
{
  ratings.average=ratings.sum/ratings.count
}
return ratings
