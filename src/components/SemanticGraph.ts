import cytoscape , {ElementDefinition} from "../../node_modules/cytoscape/index";
import { dummyData } from "../data/dummyData.js";

class SemanticGraphs extends HTMLElement {
    shadow : ShadowRoot;
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode:'open'
        })
    }

    connectedCallback(){
        const container = document.createElement('div');
        container.classList.add('graph-container');
        this.shadow.appendChild(container);
        cytoscape({
            container , 
            elements:dummyData as ElementDefinition[],
            layout:{name:'cose' , animate:true},
            style:[
        {
          selector: 'node',
          style: {
            'label': 'data(name)',
            'text-valign': 'center',
            'background-color': '#61bffc',
            'shape': 'roundrectangle',
            'width': 'label',
            'padding': '10px',
            'border-color': '#555',
            'border-width': 1,
          },
        },
        {
          selector: 'edge',
          style: {
            'label': 'data(label)',
            'width': 2,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'font-size': '10px',
            'text-background-color': '#fff',
            'text-background-opacity': 1,
            'text-background-padding': '3px',
          },
        },
      ],
        })
    }
}

customElements.define('semantic-graph' , SemanticGraphs)