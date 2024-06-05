import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Heatmap = ({ contributions }) => {
  const heatmapRef = useRef();

  useEffect(() => {
    if (contributions.length === 0) return;

    const margin = { top: 20, right: 0, bottom: 30, left: 30 };
    const width = 800 - margin.left - margin.right;
    const height = 150 - margin.top - margin.bottom;
    const cellSize = 15;
    const weeksInYear = 53;

    const svg = d3.select(heatmapRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const data = Array.from({ length: weeksInYear }, () => Array(7).fill(0));

    contributions.forEach(event => {
      const date = new Date(event.created_at);
      const week = d3.timeWeek.count(d3.timeYear(date), date);
      const day = date.getDay();
      if (data[week]) {
        data[week][day]++;
      }
    });

    const colorScale = d3.scaleSequential(d3.interpolateGreens)
      .domain([0, d3.max(data.flat())]);

    // Draw grid lines
    svg.selectAll('.grid-line-horizontal')
      .data(d3.range(8))
      .enter().append('line')
      .attr('class', 'grid-line-horizontal')
      .attr('x1', 0)
      .attr('x2', weeksInYear * cellSize)
      .attr('y1', d => d * cellSize)
      .attr('y2', d => d * cellSize)
      .attr('stroke', '#ddd');

    svg.selectAll('.grid-line-vertical')
      .data(d3.range(weeksInYear + 1))
      .enter().append('line')
      .attr('class', 'grid-line-vertical')
      .attr('x1', d => d * cellSize)
      .attr('x2', d => d * cellSize)
      .attr('y1', 0)
      .attr('y2', 7 * cellSize)
      .attr('stroke', '#555');

    svg.selectAll('.cell')
      .data(data.flat())
      .enter().append('rect')
      .attr('class', 'cell')
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('x', (d, i) => Math.floor(i / 7) * cellSize)
      .attr('y', (d, i) => (i % 7) * cellSize)
      .attr('fill', d => colorScale(d))
      .attr('stroke', 'black')
       // Optional: add border to cells for better visual separation

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    svg.selectAll('.dayLabel')
      .data(days)
      .enter().append('text')
      .attr('class', 'dayLabel')
      .attr('x', -10)
      .attr('y', (d, i) => i * cellSize + cellSize / 1.5)
      .attr('fill','black')
      .style('text-anchor', 'end')
      .text(d => d);

    const months = d3.timeMonths(d3.timeYear(new Date()), d3.timeYear.offset(new Date(), 1));
    svg.selectAll('.monthLabel')
      .data(months)
      .enter().append('text')
      .attr('class', 'monthLabel')
      .attr('x', (d, i) => d3.timeWeek.count(d3.timeYear(new Date()), d) * cellSize)
      .attr('y', -5)
      .style('text-anchor', 'start')
      .text(d => d3.timeFormat('%b')(d))
      .attr('fill','black');

  }, [contributions]);

  return (
    <svg ref={heatmapRef}></svg>
  );
};

export default Heatmap;
