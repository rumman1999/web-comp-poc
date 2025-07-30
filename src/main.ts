import './components/SemanticGraph';


import { dummyData } from "./data/dummyData";

const graph = document.createElement("semantic-graph")

document.body.appendChild(graph);

requestAnimationFrame(()=>{
    (graph as any).setGraphData([
        ...dummyData.nodes,
        ...dummyData.edges
    ])
})