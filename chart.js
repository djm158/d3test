let data = [20, 30, 43, 32, 18, 45]
d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("width", (d) => {
    return 10 * d + "px";
  })
  .text((d) => {
    return d;
  });

d3.csv('data/mtcars.csv', (data) => {
  data.forEach((d) => {
    console.log(d.mpg);
  })
})