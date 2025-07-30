import cytoscape from "cytoscape";
class SemanticGraph extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        console.log("changes nade");
        this.shadowRoot.innerHTML = `
      <style>
        #cy {
          width: 100%;
          height: 400px;
        }
      </style>
      <div id="cy"></div>
    `;
        this.container = this.shadowRoot.getElementById("cy");
    }
    /**
     * Public method to accept and render graph data
     */
    setGraphData(elements) {
        if (!this.container)
            return;
        this.cy = cytoscape({
            container: this.container,
            elements,
            layout: { name: "cose" },
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
                        "border-color": "#555"
                    }
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
                        "text-background-padding": "3px"
                    }
                }
            ]
        });
    }
}
customElements.define("semantic-graph", SemanticGraph);
