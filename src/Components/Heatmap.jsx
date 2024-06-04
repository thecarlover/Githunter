
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Heatmap = ({ contributions }) => {
  const heatmapRef = useRef();

  useEffect(() => {
    const margin = { top: 30, right: 0, bottom: 30, left: 30 };
    const width = 800 - margin.left - margin.right;
    const height = 150 - margin.top - margin.bottom;
    const cellSize = 15; // Adjust this to fit your needs
    const weeksInYear = 53;

    const svg = d3.select(heatmapRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create a matrix to store the contribution counts
    const data = Array.from({ length: weeksInYear }, () => Array(7).fill(0));

    // Process contributions
    contributions.forEach(event => {
      const date = new Date(event.created_at);
      const week = d3.timeWeek.count(d3.timeYear(date), date);
      const day = date.getDay();
      data[week][day]++;
    });

    // Create scales
    const colorScale = d3.scaleSequential(d3.interpolateBlues)
      .domain([0, d3.max(data.flat())]);

    // Draw cells
    svg.selectAll('.cell')
      .data(data.flat())
      .enter().append('rect')
      .attr('class', 'cell')
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('x', (d, i) => (i % weeksInYear) * cellSize)
      .attr('y', (d, i) => Math.floor(i / weeksInYear) * cellSize)
      .attr('fill', d => colorScale(d));

  }, [contributions]);

  return (
    <svg ref={heatmapRef}></svg>
  );
};

export default Heatmap;
