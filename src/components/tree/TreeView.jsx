import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const TreeView = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = +svg.attr("width");
    const height = +svg.attr("height");
    const margin = { top: 20, right: 90, bottom: 30, left: 1000 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Define the hierarchical data for the family tree
    const data = {
      name: "Grandfather",
      children: [
        {
          name: "Father",
          children: [
            { name: "Child 1" },
            { name: "Child 2" },
            { name: "Child 3" },
          ],
        },
        {
          name: "Uncle",
          children: [{ name: "Cousin 1" }, { name: "Cousin 2" }],
        },
      ],
    };

    const treeLayout = d3.tree().size([innerHeight, innerWidth]);

    const root = d3.hierarchy(data);
    const treeData = treeLayout(root);

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const link = g
      .selectAll(".link")
      .data(treeData.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr(
        "d",
        d3
          .linkHorizontal()
          .x((d) => d.y)
          .y((d) => d.x)
      );
    //   .style("fill", "none") // Make sure the lines have no fill
    //   .style("stroke", "#999") // Color of the lines
    //   .style("stroke-width", "1px"); // Adjust the width of the lines

    const node = g
      .selectAll(".node")
      .data(treeData.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    node.append("circle").attr("r", 5);

    node
      .append("text")
      .attr("dy", "0.35em")
      .attr("x", (d) => (d.children ? -13 : 13))
      .style("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => d.data.name);
  }, []);

  return <svg ref={svgRef} width={600} height={400}></svg>;
};

export default TreeView;
