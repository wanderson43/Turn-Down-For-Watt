
// **** Your JavaScript code goes here ****
// Done By: William Anderson
var moneyScale = d3.scaleLinear().range([550, 60])


d3.csv('./data/coffee_data.csv', function(error, datum){
    if(error) {
        console.error('Error loading ./data/coffee_data.csv dataset.');
        console.error(error);
        return;
    }

   	var svg = d3.select('svg');
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var moneyByRegion = d3.nest()
    	.key(function(d) { return d.region})
    	.rollup(function(v) { return d3.sum(v, function(d) { return +d.sales;}) ;})
    	.entries(datum);

    var moneyByCategory = d3.nest()
    	.key(function(d) { return d.category})
    	.rollup(function(v) { return d3.sum(v, function(d) { return +d.sales;}) ;})
    	.entries(datum);

   	
   	//var moneyExtent = d3.extent(moneyByRegion, function(d) {return +d.value});
   	var moneyMax = d3.max(moneyByRegion, function(d) { return +d.value})

   	//y-axis 
   	
   	moneyScale.domain([0, moneyMax]);

   	var regionScale = d3.scaleOrdinal([100, 140, 180, 220])
                         .domain(d3.values(moneyByRegion).map(function(d) {return d.key;}));

    var productScale = d3.scaleOrdinal([320, 370, 420, 470])
                         .domain(d3.values(moneyByCategory).map(function(d) {return d.key;}));

   	

	svg.append('g').selectAll('rect')
        .data(moneyByRegion)
        .enter()
      .append('rect')
        //fill them with something
        .attr('width', '25')
        .attr('height', function(d) {return 550 - moneyScale(+d.value);}) //scale(+d.value)
        .attr('y', function(d) { return moneyScale(+d.value);})
        .attr('x', function (d, i) {return (i * 40) +100;})
        .style("fill", function(d) {return color(d.key);})
        .text(function(d) {return d.key})

  svg.append('g').attr('class', 'y axis')
  	.attr('transform', 'translate(80,0)')
  	.call(d3.axisLeft(moneyScale).ticks(6));

	svg.append('text')
    	.attr('class', 'label')
    	.attr('transform','translate(15,335) rotate(270)')
    	.text('Energy Used in Watts');

  svg.append('text')
      .attr('class', 'label')
      .attr('transform','translate(100,50)')
      .text('Usage of Energy Per Dorm');

   svg.append('text')
      .attr('class', 'label')
      .attr('transform','translate(150,585)')
      .text('Region');

  svg.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(12,552)')
    .call(d3.axisBottom(regionScale))
    .selectAll('path').remove();

  //--------------------------------------Next Graph----------------------------------------------  
  svg.append('g').selectAll('rect')
        .data(moneyByCategory)
        .enter()
      .append('rect')
        //fill them with something
        .attr('width', '25')
        .attr('height', function(d) {return 550 - moneyScale(+d.value);}) //scale(+d.value)
        .attr('y', function(d) { return moneyScale(+d.value);})
        .attr('x', function (d, i) {return (i * 50) +400;})
        .style("fill", function(d) {return color(d.key);})
        .text(function(d) {return d.key})

  svg.append('g').attr('class', 'y axis')
    .attr('transform', 'translate(380,0)')
    .call(d3.axisLeft(moneyScale).ticks(6));

  svg.append('text')
      .attr('class', 'label')
      .attr('transform','translate(315,335) rotate(270)')
      .text('Coffee Sales (USD)');

  svg.append('text')
      .attr('class', 'label')
      .attr('transform','translate(400,50)')
      .text('Coffee Sales by Product (USD)');

   svg.append('text')
      .attr('class', 'label')
      .attr('transform','translate(465,585)')
      .text('Product');

  svg.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(91,552)')
    .call(d3.axisBottom(productScale))
    .selectAll('path').remove();
    //console.log(moneyByRegion)

});