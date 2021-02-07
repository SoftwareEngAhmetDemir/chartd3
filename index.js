


var container  = d3.select('#con')

 var background = container.classed('A',true)

 var data_set = 
 [{'name':'sy','number':80,'bcolor':'rgba(220, 20, 60, 0.4)'},{'name':'tr','number':110,'bcolor':'blue'},
 {'name':'usa','number':200,'bcolor':'green'},{'name':'UK','number':120,'bcolor':'yellow'},
 {'name':'Gr','number':160,'bcolor':'black'}];



 d3.select('#con').on('mouseover',e=>{

    // e.stopPropagation();
    d3.select('#tip').style('display','none')
console.log('parent')
})




 var bars = container.selectAll('div').
 data(data_set)
                .enter()
                
                .append('div').attr('name',data_set=>data_set.name). 
                on("mouseover", function(d) {
                    if(d.currentTarget.getAttribute('name')){
                    
                    let dx  = d.clientX;
                    let dy = d.pageY;
                    let name = d.currentTarget.getAttribute('name');
                    console.log(dx,dy,name)
                   d3.select('#tip').transition()		
                   .duration(200)		
                   .style("opacity", .9)
                   .style('position','absolute')
                   .style('margin-left',(dx)+'px')
                   .style('top',dy+'px').style('display','block')
                   .text(name).style('border','2px solid cadetblue')
                }
                }) . on("mouseout", function(d) {
                   
                    d3.select('#tip').style('display','none')
                 
})
                



var stylebars = bars.classed('bar',true).transition()
.duration(3000).ease(d3.easeLinear)
.style('height',data_set=>data_set.number*2+'px')
.style('background-color',data_set=>data_set.bcolor)


;
bars

.append('div')
.text(data_set=>data_set.number)

                

// var width = 400, height = 400;


// var svg = d3.select("svg")
   
//     .attr("width", width)
//     .attr("height", height);

// var xscale = d3.scaleLinear()
//     .domain([0, 4])
//     .range([0, width - 100]);

// var yscale = d3.scaleLinear()
//         .domain([0,100])
//         .range([height/2, 0]);

// var x_axis = d3.axisBottom()
//         .scale(xscale);

// var y_axis = d3.axisLeft()
//         .scale(yscale);

//     svg.append("g")
//        .attr("transform", "translate(50, 10)")
//        .call(y_axis);

// var xAxisTranslate = height/2 + 10;

//     svg.append("g")
//             .attr("transform", "translate(50, " + xAxisTranslate  +")")
//             .call(x_axis)
