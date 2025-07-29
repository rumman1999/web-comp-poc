import cytoscape, { ElementDefinition } from "cytoscape";
import { dummyData } from "../data/dummyData";
import "../styles/graph.css";

class SemanticGraph extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const container = document.createElement("div");
    container.classList.add("graph-container");
    container.style.width = "100%";
    container.style.height = "400px"; // or 100vh, etc
    container.style.border = "1px solid #ccc";
    container.style.position = "relative";
    this.shadow.appendChild(container);

    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "../styles/graph.css");
    this.shadow.appendChild(styleLink);

    const elements: ElementDefinition[] = [
      ...dummyData.nodes,
      ...dummyData.edges,
    ];

    cytoscape({
      container,
      elements,
      layout: { name: "cose", animate: true },
      style: [
        {
          selector: "node",
          style: {
            label: "data(name)",
            "background-color": "#61bffc",
            shape: "roundrectangle",
            "text-valign": "center",
            "text-halign": "center",
            "min-width": "40px",
            padding: "10px",
            "border-width": 1,
            "border-color": "#555",
          },
        },
        {
          selector: "edge",
          style: {
            label: "data(label)",
            width: 2,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
            "font-size": "10px",
            "text-background-color": "#fff",
            "text-background-opacity": 1,
            "text-background-padding": "3px",
          },
        },
      ],
    });
  }
}

customElements.define("semantic-graph", SemanticGraph);
