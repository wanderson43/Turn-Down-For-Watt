// Created By: William Anderson
var energyScale = d3.scaleLinear().range([550, 60])


d3.csv('./data/energy_data.csv', function(error, datum){
    if(error) {
        console.error('Error loading ./data/energy_data.csv dataset.');
        console.error(error);
        return;
    }

   	var svg = d3.select('svg');
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var energyByDorm = d3.nest()
    	.key(function(d) { return d.name})
    	.rollup(function(v) { return d3.sum(v, function(d) { return +d.usage;}) ;})
    	.entries(datum);


    var energyByFloor = d3.nest()
    	.key(function(d) { return d.floor})
    	.rollup(function(v) { return d3.sum(v, function(d) { return +d.usage;}) ;})
    	.entries(datum);

    console.log(energyByFloor);   	
   	var energyMax = d3.max(energyByDorm, function(d) { return +d.value})

   	//y-axis 
   	
   	energyScale.domain([0, energyMax]);

   	var regionScale = d3.scaleOrdinal([100, 140, 180, 220])
                         .domain(d3.values(energyByDorm).map(function(d) {return d.key;}));

    var productScale = d3.scaleOrdinal([320, 370, 420, 470])
                         .domain(d3.values(energyByFloor).map(function(d) {return d.key;}));

   	

	svg.append('g').selectAll('rect')
        .data(energyByDorm)
        .enter()
      .append('rect')
        .attr('width', '25')
        .attr('height', function(d) {return 550 - energyScale(+d.value);}) //scale(+d.value)
        .attr('y', function(d) { return energyScale(+d.value);})
        .attr('x', function (d, i) {return (i * 40) +100;})
        .style("fill", function(d) {return color(d.key);})
        .text(function(d) {return d.key})

  svg.append('g').attr('class', 'y axis')
  	.attr('transform', 'translate(80,0)')
  	.call(d3.axisLeft(energyScale).ticks(6));

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
      .text('Dorm');

  svg.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(12,552)')
    .call(d3.axisBottom(regionScale))
    .selectAll('path').remove();

  //--------------------------------------Next Graph----------------------------------------------  
  svg.append('g').selectAll('rect')
        .data(energyByFloor)
        .enter()
      .append('rect')
        .attr('width', '25')
        .attr('height', function(d) {return 550 - energyScale(+d.value);}) //scale(+d.value)
        .attr('y', function(d) { return energyScale(+d.value);})
        .attr('x', function (d, i) {return (i * 50) +400;})
        .style("fill", function(d) {return color(d.key);})
        .text(function(d) {return d.key})

  svg.append('g').attr('class', 'y axis')
    .attr('transform', 'translate(380,0)')
    .call(d3.axisLeft(energyScale).ticks(6));

  svg.append('text')
      .attr('class', 'label')
      .attr('transform','translate(315,335) rotate(270)')
      .text('Energy Usage in Watts');

  svg.append('text')
      .attr('class', 'label')
      .attr('transform','translate(400,50)')
      .text('Energy Usage by Floor');

   svg.append('text')
      .attr('class', 'label')
      .attr('transform','translate(465,585)')
      .text('Floor');

  svg.append('g').attr('class', 'x axis')
    .attr('transform', 'translate(91,552)')
    .call(d3.axisBottom(productScale))
    .selectAll('path').remove();
});