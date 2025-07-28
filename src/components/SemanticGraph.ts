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
}